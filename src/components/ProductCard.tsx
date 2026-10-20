"use client";

import React, { useState } from "react";
import { Product, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, MessageCircle, Check, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, items } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState(false);

  const isAlreadyInCart = items.some((item) => item.product.id === product.id);

  const handleAdd = () => {
    addToCart(product, 1);
    setRecentlyAdded(true);
    setTimeout(() => setRecentlyAdded(false), 2000);
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Namaste Jagdamb Foods! I would like to inquire about/order: *${product.name}* (Price: Rs. ${product.price}.00 INR / ${product.unit}). Please share availability and bulk pricing.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="kataria-card flex flex-col justify-between group h-full bg-[#FFFDF9] border border-[#E8DCC4] rounded-2xl overflow-hidden hover:border-[#8B263E] transition-all shadow-xs hover:shadow-xl"
    >
      {/* Top Media Area */}
      <div className="relative aspect-square w-full bg-[#FAF5EC] overflow-hidden p-3 flex items-center justify-center">
        {/* Sale / Bestseller Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#8B263E] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            {product.badge || "Sale"}
          </span>
        </div>

        {/* Wishlist Heart Toggle */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-xs transition-all ${
            isWishlisted
              ? "bg-red-50 text-[#8B263E] scale-110 shadow-md"
              : "bg-white/80 text-[#7D746D] hover:text-[#8B263E] hover:bg-white shadow-xs"
          }`}
          aria-label="Wishlist item"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-[#8B263E] text-[#8B263E]" : ""}`} />
        </button>

        {/* Product Image with Hover Zoom */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Floating Quick Action Overlay on Desktop */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 z-20">
          <button
            onClick={handleAdd}
            className="flex-1 bg-white hover:bg-[#8B263E] hover:text-white text-[#2A2521] font-semibold text-xs py-2.5 px-3 rounded-full shadow-lg transition-colors flex items-center justify-center gap-1.5 border border-[#E8DCC4] cursor-pointer"
          >
            {recentlyAdded || isAlreadyInCart ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600 group-hover:text-white" />
                <span>In Basket</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>+ Add to Quote</span>
              </>
            )}
          </button>
          
          <a
            href={getDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
            title="Instant WhatsApp Order"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#FFFDF9]">
        <div>
          {/* Category Tag & Weight */}
          <div className="flex items-center justify-between text-xs text-[#7D746D] mb-1.5 font-medium">
            <span className="text-[#8B263E] uppercase tracking-wider text-[11px] font-bold">
              {product.category}
            </span>
            <span className="bg-[#FAF5EC] px-2 py-0.5 rounded text-[11px] border border-[#E8DCC4]">
              {product.weight}
            </span>
          </div>

          {/* Product Name in Serif */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#2A2521] leading-snug line-clamp-2 group-hover:text-[#8B263E] transition-colors">
            {product.name}
          </h3>

          {/* Micro Rating */}
          <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-600 font-semibold">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[#7D746D] text-[10px] ml-1">(4.9)</span>
          </div>

          {/* Description */}
          <p className="text-xs text-[#5A524C] mt-1.5 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Flavors Pill Tags */}
          {product.flavors && product.flavors.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {product.flavors.map((flavor) => (
                <span
                  key={flavor}
                  className="text-[10px] bg-[#FAF5EC] text-[#2A2521] px-2 py-0.5 rounded-full border border-[#E8DCC4] font-medium"
                >
                  {flavor}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing Area - Kataria Rs. Format */}
        <div className="pt-3.5 mt-3.5 border-t border-[#E8DCC4] flex items-baseline justify-between">
          <div>
            <span className="font-serif text-base sm:text-lg font-bold text-[#8B263E]">
              Rs. {product.price}.00 INR
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-[#7D746D] line-through ml-2">
                Rs. {product.originalPrice}.00 INR
              </span>
            )}
          </div>

          {/* Mobile Fast Action */}
          <button
            onClick={handleAdd}
            className="sm:hidden text-xs bg-[#8B263E] text-white px-3 py-1.5 rounded-full font-bold shadow-sm"
          >
            {recentlyAdded ? "✓ Added" : "+ Quote"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
