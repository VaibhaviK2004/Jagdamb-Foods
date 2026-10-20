"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, COMPANY_INFO } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalCount: number;
  totalPrice: number;
  generateWhatsAppOrderUrl: (customerName?: string, customerCity?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("jagdamb_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("jagdamb_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const generateWhatsAppOrderUrl = (customerName = "", customerCity = "") => {
    let message = `*Namaste Jagdamb Foods!* 🙏\n`;
    message += `I would like to place an order / wholesale quotation inquiry.\n\n`;

    if (customerName) message += `*Customer:* ${customerName}\n`;
    if (customerCity) message += `*City/State:* ${customerCity}\n`;
    message += `\n*Selected Products:*\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}*\n`;
      message += `   Qty: ${item.quantity} ${item.product.unit} | Price: ₹${item.product.price * item.quantity}\n`;
    });

    message += `\n*Total Estimated Amount:* ₹${totalPrice}\n\n`;
    message += `Please confirm the availability, delivery schedule, and payment details. Thank you!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalCount,
        totalPrice,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
