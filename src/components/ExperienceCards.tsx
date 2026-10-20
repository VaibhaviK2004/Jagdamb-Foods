"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  link: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "fruit-bars",
    title: "Fruit Bars",
    subtitle: "The chewy, fruity snack you've loved since childhood.",
    category: "Fruit Bars",
    image: "https://jagdamb-foods.vercel.app/images/fruite.jpeg",
    link: "/products?category=Fruit+Bars",
  },
  {
    id: "fruit-katli",
    title: "Fruit Katli & Cubes",
    subtitle: "Real fruit flavours shaped into beautiful, guilt-free traditional mithai.",
    category: "Fruit Bars",
    image: "https://jagdamb-foods.vercel.app/images/burfi1.jpeg",
    link: "/products?category=Fruit+Bars",
  },
  {
    id: "digestives",
    title: "Digestives & Candies",
    subtitle: "Light, tangy chatpata bites that are as good for you as they taste.",
    category: "Imli Candy",
    image: "https://jagdamb-foods.vercel.app/images/imlicandy.jpeg",
    link: "/products?category=Imli+Candy",
  },
];

export const ExperienceCards: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF5EC] border-b border-[#E8DCC4]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header in Kataria Serif Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B263E] tracking-tight">
            The Jagdamb Foods Experience
          </h2>
          <p className="text-[#5A524C] text-base sm:text-lg mt-3 font-sans">
            From timeless Maharashtrian recipes to modern fruit snacking, here&apos;s everything we have for you.
          </p>
        </motion.div>

        {/* 3 Large Showcase Cards Matching Kataria Exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EXPERIENCES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                href={item.link}
                className="flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-[#E8DCC4] shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF5EC]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Text Content Container */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center text-center bg-white">
                  <h3 className="font-serif text-2xl font-bold text-[#8B263E] mb-2.5 group-hover:text-[#721F32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A524C] leading-relaxed max-w-xs mx-auto">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
