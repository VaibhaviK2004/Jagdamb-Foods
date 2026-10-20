"use client";

import React, { useState, useEffect } from "react";
import { Phone, ChevronLeft, ChevronRight, Sparkles, Truck, ShieldCheck, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_INFO } from "@/data/products";

const ANNOUNCEMENTS = [
  {
    id: 1,
    icon: Sparkles,
    text: "Festive Wholesale Offer: Direct Factory Rates for Distributors & Retailers",
    highlight: "Factory Rates",
  },
  {
    id: 2,
    icon: Truck,
    text: "Pan-India Safe Express Dispatch on Bulk 32Kg Cartons & Gift Boxes",
    highlight: "Safe Dispatch",
  },
  {
    id: 3,
    icon: ShieldCheck,
    text: "100% Real Fruit Pulp • Authentic Maharashtrian Traditional Recipes",
    highlight: "100% Real Fruit",
  },
  {
    id: 4,
    icon: Tag,
    text: "Sample Tasting Boxes Available for New Confectionery Partners",
    highlight: "Sample Boxes",
  },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ANNOUNCEMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  const current = ANNOUNCEMENTS[currentIndex];
  const IconComponent = current.icon;

  return (
    <div className="bg-[#8B263E] text-white text-xs md:text-[13px] py-2 px-3 sm:px-6 border-b border-[#721F32] relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left / Center Announcement Carousel */}
        <div className="flex-1 flex items-center justify-center sm:justify-start gap-2 overflow-hidden">
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-white/10 rounded-full transition-colors hidden sm:inline-flex text-white/80 hover:text-white"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <div className="h-5 overflow-hidden relative flex-1 max-w-2xl text-center sm:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex items-center justify-center sm:justify-start gap-2 whitespace-nowrap"
              >
                <IconComponent className="w-3.5 h-3.5 text-heritage-amber shrink-0 animate-pulse" />
                <span className="font-medium tracking-wide truncate">
                  {current.text}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="p-1 hover:bg-white/10 rounded-full transition-colors hidden sm:inline-flex text-white/80 hover:text-white"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Phone Hotline */}
        <div className="shrink-0 pl-3 border-l border-white/20 hidden md:flex items-center">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-heritage-amber transition-colors font-semibold text-xs tracking-wider"
          >
            <Phone className="w-3 h-3 text-heritage-amber" />
            <span>Direct Hotline: {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
