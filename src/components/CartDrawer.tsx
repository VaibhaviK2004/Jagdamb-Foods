"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalCount,
    totalPrice,
    generateWhatsAppOrderUrl,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerCity, setCustomerCity] = useState("");

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col border-l border-heritage-cardBorder">
          {/* Drawer Header */}
          <div className="px-6 py-5 bg-[#FAF5EC] border-b border-heritage-cardBorder flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5 border border-[#E8DCC4] shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Jagdamb Foods"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="font-serif text-xl font-bold text-heritage-charcoal">
                Order &amp; Quote Basket
              </h2>
              <span className="bg-heritage-crimson text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                {totalCount}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-heritage-charcoal hover:bg-white hover:text-heritage-crimson transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-heritage-cream text-heritage-crimson flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-lg font-bold text-heritage-charcoal">
                  Your Basket is Empty
                </h3>
                <p className="text-sm text-heritage-mutedText max-w-xs mx-auto">
                  Explore our handcrafted fruit bars, toffees, and wholesale bulk boxes to create an inquiry.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary-kataria text-xs px-6 py-2.5 mt-2"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              <div className="divide-y divide-heritage-cardBorder/60">
                {items.map((item) => (
                  <div key={item.product.id} className="py-4 flex gap-4 items-center">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-lg bg-heritage-cream border border-heritage-cardBorder p-1 shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold text-heritage-charcoal truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-heritage-crimson font-bold mt-0.5">
                        ₹{item.product.price}{" "}
                        <span className="text-[10px] text-heritage-mutedText font-normal">
                          /{item.product.unit}
                        </span>
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-heritage-cardBorder rounded-full bg-white px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-heritage-charcoal hover:text-heritage-crimson"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-heritage-charcoal min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-heritage-charcoal hover:text-heritage-crimson"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs text-heritage-mutedText font-medium ml-2">
                          = ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>

                    {/* Remove Action */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-heritage-mutedText hover:text-heritage-crimson transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer & WhatsApp Checkout */}
          {items.length > 0 && (
            <div className="px-6 py-5 bg-[#FAF5EC] border-t border-heritage-cardBorder space-y-4">
              {/* Optional Customer Inputs */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-heritage-charcoal mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patil"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-heritage-cardBorder bg-white text-xs focus:outline-none focus:border-heritage-crimson"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-heritage-charcoal mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune, MH"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-heritage-cardBorder bg-white text-xs focus:outline-none focus:border-heritage-crimson"
                  />
                </div>
              </div>

              {/* Total Summary */}
              <div className="flex items-baseline justify-between pt-2 border-t border-heritage-cardBorder/60">
                <span className="font-serif text-base font-bold text-heritage-charcoal">
                  Estimated Total:
                </span>
                <span className="font-serif text-2xl font-bold text-heritage-crimson">
                  ₹{totalPrice}
                </span>
              </div>

              {/* Instant WhatsApp Order CTA */}
              <a
                href={generateWhatsAppOrderUrl(customerName, customerCity)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white py-3.5 px-4 rounded-full font-bold text-sm shadow-lg transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Place Order via WhatsApp</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-heritage-mutedText pt-1">
                <button
                  onClick={clearCart}
                  className="hover:text-heritage-crimson underline"
                >
                  Clear All Items
                </button>
                <span>Direct Factory Dispatch Available</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
