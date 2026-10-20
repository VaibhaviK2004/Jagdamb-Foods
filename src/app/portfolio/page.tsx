"use client";

import React, { useState } from "react";
import { Sparkles, Eye } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Packaging" | "Products";
  image: string;
  desc: string;
}

const GALLERY: GalleryItem[] = [
  {
    id: "g-1",
    title: "Fruit Bar Wrapper",
    category: "Packaging",
    image: "https://jagdamb-foods.vercel.app/images/mangobar1.jpg",
    desc: "Multi-layered aroma-locking moisture-proof foil wrapper.",
  },
  {
    id: "g-2",
    title: "Assorted Strawberry Candies",
    category: "Products",
    image: "https://jagdamb-foods.vercel.app/strawberry.jpeg",
    desc: "Real fruit center burst with Mahabaleshwar strawberry taste.",
  },
  {
    id: "g-3",
    title: "Candy Jar Display Label",
    category: "Packaging",
    image: "https://jagdamb-foods.vercel.app/images/label.jpeg",
    desc: "Eye-catching counter display jars designed for retail shelf presence.",
  },
  {
    id: "g-4",
    title: "Tamarind Fruit Bar Slice",
    category: "Products",
    image: "https://jagdamb-foods.vercel.app/images/imli5.jpg",
    desc: "Thick, chewy tamarind slice packed with digestive tanginess.",
  },
  {
    id: "g-5",
    title: "Bulk Wholesale Corrugated Box",
    category: "Packaging",
    image: "https://jagdamb-foods.vercel.app/images/kairi.jpg",
    desc: "Heavy-duty 5-ply cartons built for long-distance pan-India freight.",
  },
  {
    id: "g-6",
    title: "Creamy Mango Toffees",
    category: "Products",
    image: "https://jagdamb-foods.vercel.app/images/mango.jpeg",
    desc: "Silky smooth mango toffee bites that melt softly on the tongue.",
  },
  {
    id: "g-7",
    title: "Quality Dehydration Facility",
    category: "Packaging",
    image: "https://jagdamb-foods.vercel.app/images/kit4.png",
    desc: "Climate-controlled drying tunnels preserving fruit nutrients.",
  },
  {
    id: "g-8",
    title: "Women Artisan Community",
    category: "Products",
    image: "https://jagdamb-foods.vercel.app/images/women.png",
    desc: "Empowering rural women through traditional artisanal craftsmanship.",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");

  const filteredItems = filter === "All"
    ? GALLERY
    : GALLERY.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FAF5EC] min-h-screen pb-24">
      {/* 1. Header */}
      <section className="bg-gradient-to-b from-[#FAF5EC] to-[#F4ECE0] py-14 sm:py-20 border-b border-heritage-cardBorder text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Glimpse into Our World</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-heritage-crimson">
            Our Visual Showcase
          </h1>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-sm sm:text-base max-w-2xl mx-auto">
            Explore our visual gallery showcasing vibrant confectionery varieties, tamper-evident packaging designs, and factory processing.
          </p>
        </div>
      </section>

      {/* 2. Gallery Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-full border border-heritage-cardBorder shadow-sm flex items-center gap-1">
            {["All", "Packaging", "Products"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? "bg-heritage-crimson text-white shadow-sm"
                    : "text-heritage-charcoal hover:text-heritage-crimson"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-white border border-heritage-cardBorder shadow-sm group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-heritage-cream">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-heritage-amber font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold mt-0.5">{item.title}</h4>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FFFDF9] border-t border-heritage-cardBorder/60 group-hover:bg-[#FAF5EC] transition-colors">
                <span className="text-[10px] uppercase tracking-wider text-heritage-crimson font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-bold text-heritage-charcoal truncate mt-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
