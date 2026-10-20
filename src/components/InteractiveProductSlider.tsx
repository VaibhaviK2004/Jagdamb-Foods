"use client";

import React, { useRef } from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductSliderProps {
  title: string;
  subtitle: string;
  categoryFilter?: string;
}

export const InteractiveProductSlider: React.FC<ProductSliderProps> = ({
  title,
  subtitle,
  categoryFilter,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products = categoryFilter
    ? PRODUCTS.filter((p) => p.category === categoryFilter)
    : PRODUCTS.slice(0, 10);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#FFFDF9] border-b border-heritage-cardBorder/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Confectionery Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-crimson">
              {title}
            </h2>
            <p className="text-heritage-mutedText text-sm sm:text-base mt-1 max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-heritage-cardBorder bg-[#FAF5EC] hover:bg-heritage-crimson hover:text-white text-heritage-charcoal flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95"
              aria-label="Scroll products left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-heritage-cardBorder bg-[#FAF5EC] hover:bg-heritage-crimson hover:text-white text-heritage-charcoal flex items-center justify-center transition-all shadow-sm hover:scale-105 active:scale-95"
              aria-label="Scroll products right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Slider with Framer Motion feel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[260px] sm:w-[290px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/products"
            className="btn-secondary-kataria text-xs w-full py-3"
          >
            Browse Full Collection &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
