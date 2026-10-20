"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";
import { motion } from "framer-motion";

export const HeritageStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-heritage-cardBorder/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hand-drawn Watercolor Illustration & Craft Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-heritage-cardBorder shadow-2xl bg-heritage-cream group">
              {/* Authentic Women Artisans & Traditional Confectionery Making */}
              <img
                src="https://jagdamb-foods.vercel.app/images/women.png"
                alt="Jagdamb Foods Traditional Sweet Making"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* Traditional Seal Stamp with Floating Animation */}
              <div className="absolute bottom-4 right-4 bg-heritage-crimson/95 text-white p-4 rounded-xl shadow-2xl border border-heritage-gold/50 backdrop-blur-sm max-w-[210px] animate-gentle-float">
                <div className="flex items-center gap-1.5 text-heritage-amber text-[10px] uppercase font-bold tracking-widest">
                  <Sparkles className="w-3 h-3" />
                  <span>Artisanal Promise</span>
                </div>
                <p className="font-serif text-sm font-bold mt-1 leading-snug">
                  Handcrafted with Farm-Fresh Fruits
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Storytelling Typography & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-heritage-crimson mb-2">
                Our Heritage &amp; Craft
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-crimson leading-tight">
                About Jagdamb Foods
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <span className="h-0.5 w-12 bg-heritage-crimson" />
                <span className="text-xs text-heritage-crimson font-serif italic">Est. Peth Naka, Maharashtra</span>
              </div>
            </div>

            <p className="text-heritage-charcoal text-base md:text-lg leading-relaxed">
              Jagdamb Foods has been a pioneer in authentic Indian fruit confectionery, crafting delightful treats that capture the true essence of traditional regional flavors. Founded in Peth Naka, Ishwarpur under the visionary leadership of CEO P.G. Kumbhar, we have grown into a nationwide trusted name.
            </p>

            <p className="text-heritage-mutedText text-sm md:text-base leading-relaxed">
              We meticulously blend age-old family recipes with state-of-the-art dehydration and packaging technology. By sourcing fresh raw mangoes and natural tamarind directly from local farming communities, we ensure every candy, fruit bar, and toffee preserves authentic aroma, taste, and wholesome purity.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-heritage-charcoal">
                <CheckCircle2 className="w-4 h-4 text-heritage-crimson shrink-0" />
                <span>Zero Artificial Pulp Substitutes</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-heritage-charcoal">
                <CheckCircle2 className="w-4 h-4 text-heritage-crimson shrink-0" />
                <span>Hygienic Modern Manufacturing</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-heritage-charcoal">
                <CheckCircle2 className="w-4 h-4 text-heritage-crimson shrink-0" />
                <span>High-Margin Wholesale Supply</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-heritage-charcoal">
                <CheckCircle2 className="w-4 h-4 text-heritage-crimson shrink-0" />
                <span>Pan-India Distribution Network</span>
              </div>
            </div>

            {/* Stat Counters Grid with Hover Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-heritage-cardBorder">
              {COMPANY_INFO.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-heritage-cream/70 p-3.5 rounded-xl border border-heritage-cardBorder/80 text-center shadow-xs"
                >
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-heritage-crimson">{stat.value}</p>
                  <p className="text-[11px] text-heritage-mutedText font-medium mt-0.5">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-heritage-crimson hover:text-heritage-darkCrimson group"
              >
                <span>Discover Our Complete Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
