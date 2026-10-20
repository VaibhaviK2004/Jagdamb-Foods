"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS, Product, COMPANY_INFO } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, MessageCircle, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const LovedAcrossIndiaShelf: React.FC = () => {
  const { addToCart, items } = useCart();
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Pick 8 signature products for the seamless 4x2 Kataria shelf
  const shelfProducts = PRODUCTS.slice(0, 8);

  const handleAdd = (product: Product) => {
    addToCart(product, 1);
    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 2000);
  };

  const getWhatsAppUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Namaste Jagdamb Foods! I want to inquire about / buy: *${product.name}* (Price: Rs. ${product.price}.00 INR). Please share availability.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section className="w-full bg-[#8B263E] text-white">
      {/* Crimson Section Header Banner (Kataria Style) */}
      <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Loved Across India
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            From corporate gifting to festival hampers, family snack boxes to nostalgic indulgence — Jagdamb Foods is a slice of home, delivered.
          </p>
        </motion.div>
      </div>

      {/* Seamless 4-Column Kataria Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#A83852]">
        {shelfProducts.map((product, idx) => {
          const isAdded = recentlyAddedId === product.id || items.some((i) => i.product.id === product.id);

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="relative group bg-[#FAF3E8] border-b border-r border-[#E2D2BC] flex flex-col justify-between overflow-hidden"
            >
              {/* Media Container with Kataria Sale Badge */}
              <div className="relative aspect-square w-full bg-[#FAF3E8] overflow-hidden flex items-center justify-center">
                {/* Sale Pill Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#8B263E] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-md">
                    Sale
                  </span>
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Slide-up Quick Action Overlay */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 flex items-center gap-2 z-20">
                  <button
                    onClick={() => handleAdd(product)}
                    className="flex-1 bg-white hover:bg-[#8B263E] hover:text-white text-[#2A2521] font-semibold text-xs py-2.5 px-3 rounded-full shadow-lg transition-colors flex items-center justify-center gap-1.5 border border-[#E8DCC4] cursor-pointer"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600 group-hover:text-white" />
                        <span>In Quote</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>+ Add to Quote</span>
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white shadow-lg transition-transform hover:scale-110 cursor-pointer"
                    title="Direct WhatsApp Order"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </div>

              {/* Kataria Warm Sandstone Bottom Bar */}
              <div className="p-4 sm:p-5 bg-[#FAF3E8] flex items-start justify-between gap-3 border-t border-[#E8DCC4]/50 min-h-[82px]">
                <div className="flex-1">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-[#8B263E] leading-snug line-clamp-2 group-hover:text-[#721F32] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-[#7D746D] mt-1">
                    {product.weight} • {product.category}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-sans text-xs sm:text-sm font-bold text-[#8B263E] whitespace-nowrap">
                    Rs. {product.price}.00 INR
                  </p>
                  {product.originalPrice > product.price && (
                    <p className="text-[11px] text-[#A89F91] line-through font-sans whitespace-nowrap">
                      Rs. {product.originalPrice}.00 INR
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Bottom Ribbon */}
      <div className="py-8 bg-[#721F32] text-center border-t border-[#8B263E]">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-white font-semibold text-xs sm:text-sm tracking-widest uppercase hover:text-heritage-amber transition-colors"
        >
          <span>Explore Complete 23 Varieties Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
