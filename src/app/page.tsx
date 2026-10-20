"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroBanner } from "@/components/HeroBanner";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { CircularCategories } from "@/components/CircularCategories";
import { ExperienceCards } from "@/components/ExperienceCards";
import { LovedAcrossIndiaShelf } from "@/components/LovedAcrossIndiaShelf";
import { InteractiveProductSlider } from "@/components/InteractiveProductSlider";
import { ProductCard } from "@/components/ProductCard";
import { HeritageStory } from "@/components/HeritageStory";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Fruit Bars", "Mango Candy", "Imli Candy", "Boom Candy", "Bulk Products"];

  const filteredProducts = activeFilter === "All"
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter((p) => p.category === activeFilter).slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Kataria-style Multi-Slide Animated Hero Banner */}
      <HeroBanner />

      {/* 2. Infinite Marquee Ribbon Ticker */}
      <MarqueeTicker />

      {/* 3. Circular Category Stories Slider */}
      <CircularCategories />

      {/* 4. Curated Experience Categories (Kataria 3-Cards Layout) */}
      <ExperienceCards />

      {/* 5. Kataria Signature 'Loved Across India' Crimson Banner & Seamless 4-Col Grid */}
      <LovedAcrossIndiaShelf />

      {/* 6. Interactive Horizontal Product Slider (Kataria Showcase) */}
      <InteractiveProductSlider
        title="Trending Bestsellers"
        subtitle="Our most sought-after fruit bars, tamarind burfi, and chatpata toffees."
      />

      {/* 7. Filterable Bestsellers Grid with Tab Switcher */}
      <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-[#E8DCC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8B263E]/10 text-[#8B263E] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B263E]">
              Featured Sweet Creations
            </h2>
            <div className="ornament-divider">
              <span className="text-[#8B263E] text-sm">✦ ✦ ✦</span>
            </div>
            <p className="text-[#5A524C] text-base sm:text-lg">
              Explore our most requested fruit bars, tamarind burfi, and traditional candies loved by families across India.
            </p>
          </div>

          {/* Category Filter Pills (Kataria Style) */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#8B263E] text-white shadow-md scale-105"
                    : "bg-[#FAF5EC] text-[#2A2521] hover:bg-[#E8DCC4]/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Animated Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          {/* View All Button */}
          <div className="mt-14 text-center">
            <Link
              href="/products"
              className="btn-primary-kataria text-sm sm:text-base px-10 py-3.5 shadow-xl group"
            >
              <span>View All 23 Confectionery Varieties</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Commercial Bulk 32Kg Supply Slider */}
      <InteractiveProductSlider
        title="Commercial & Wholesale 32Kg Packs"
        subtitle="Industrial bulk cartons manufactured for sweet retailers, distributors, and vendors."
        categoryFilter="Bulk Products"
      />

      {/* 9. Heritage Craft & Factory Story (Watercolor Illustration) */}
      <HeritageStory />

      {/* 10. Trust Pillars & Indian Quality Standards */}
      <TrustBadges />

      {/* 11. Partner & Distributor Testimonials */}
      <Testimonials />

      {/* 12. Interactive FAQ Accordion */}
      <FAQAccordion />
    </div>
  );
}
