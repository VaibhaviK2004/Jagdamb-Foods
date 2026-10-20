"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CircularCategory {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: string;
}

const CIRCULAR_CATEGORIES: CircularCategory[] = [
  {
    id: "c-1",
    name: "Fruit Bars",
    category: "Fruit Bars",
    image: "https://jagdamb-foods.vercel.app/images/fruite.jpeg",
    badge: "Hot",
  },
  {
    id: "c-2",
    name: "Imli Burfi",
    category: "Fruit Bars",
    image: "https://jagdamb-foods.vercel.app/images/imli3.jpg",
    badge: "Pure",
  },
  {
    id: "c-3",
    name: "Imli Candies",
    category: "Imli Candy",
    image: "https://jagdamb-foods.vercel.app/images/imlicandy.jpeg",
  },
  {
    id: "c-4",
    name: "Mango Candies",
    category: "Mango Candy",
    image: "https://jagdamb-foods.vercel.app/images/kacchamango.jpeg",
  },
  {
    id: "c-5",
    name: "Mango Toffees",
    category: "Mango Candy",
    image: "https://jagdamb-foods.vercel.app/images/mango.jpeg",
    badge: "Creamy",
  },
  {
    id: "c-6",
    name: "Boom Treats",
    category: "Boom Candy",
    image: "https://jagdamb-foods.vercel.app/images/kairi.jpg",
  },
  {
    id: "c-7",
    name: "32Kg Bulk",
    category: "Bulk Products",
    image: "https://jagdamb-foods.vercel.app/images/mangoammpapad.jpg",
    badge: "Factory",
  },
];

export const CircularCategories: React.FC = () => {
  return (
    <section className="py-8 bg-[#FAF5EC] border-b border-heritage-cardBorder/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto pb-4 pt-2 scrollbar-none justify-start md:justify-center">
          {CIRCULAR_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="shrink-0"
            >
              <Link
                href={`/products?category=${encodeURIComponent(cat.category)}`}
                className="group flex flex-col items-center text-center space-y-2 cursor-pointer"
              >
                {/* Circular Image Container with Animated Rings */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-heritage-crimson via-heritage-gold to-heritage-crimson shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-108">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    />
                  </div>

                  {/* Optional Mini Badge */}
                  {cat.badge && (
                    <span className="absolute -top-1 -right-1 bg-heritage-crimson text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-md border border-white">
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Category Label */}
                <span className="text-xs sm:text-sm font-serif font-bold text-heritage-charcoal group-hover:text-heritage-crimson transition-colors whitespace-nowrap">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
