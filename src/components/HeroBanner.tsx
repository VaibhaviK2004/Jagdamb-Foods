"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface SlideData {
  id: number;
  badge: string;
  titleLine1: string;
  titleItalic: string;
  titleLine3: string;
  titleLine4: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  tag: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "Festive Collection 2026",
    titleLine1: "Thoughtful",
    titleItalic: "delights",
    titleLine3: "for every",
    titleLine4: "celebration.",
    description: "Premium assortments. Authentic flavours. Shared happiness. Handcrafted Maharashtrian confectionery delivered factory-fresh to your home and store.",
    ctaText: "EXPLORE PRODUCTS >",
    ctaLink: "/products",
    secondaryCtaText: "BULK ORDER INQUIRY",
    secondaryCtaLink: "/contact",
    image: "https://jagdamb-foods.vercel.app/images/fruite.jpeg",
    tag: "Kaccha Mango & Imli Slices",
  },
  {
    id: 2,
    badge: "100% Real Fruit Pulp",
    titleLine1: "Authentic",
    titleItalic: "Aam Papad",
    titleLine3: "crafted with",
    titleLine4: "pure tradition.",
    description: "Prepared from sun-drenched Alphonso mangoes and zesty raw kacchi keri, dried under climate-controlled hygienic dehydration tunnels.",
    ctaText: "VIEW FRUIT BARS >",
    ctaLink: "/products?category=Fruit+Bars",
    secondaryCtaText: "WHATSAPP ORDER",
    secondaryCtaLink: `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20want%20to%20order%20Fruit%20Bars%20in%20bulk.`,
    image: "https://jagdamb-foods.vercel.app/images/burfi1.jpeg",
    tag: "500g Burfi & Cube Bars",
  },
  {
    id: 3,
    badge: "Nostalgic Indian Flavors",
    titleLine1: "Chatpata",
    titleItalic: "Imli Candies",
    titleLine3: "& Tangy Boom",
    titleLine4: "treats.",
    description: "Bursting with real tamarind pulp, Himalayan rock salt, and Ayurvedic spices that awaken your most cherished childhood cravings.",
    ctaText: "SHOP IMLI CANDIES >",
    ctaLink: "/products?category=Imli+Candy",
    secondaryCtaText: "SAMPLE TASTING BOX",
    secondaryCtaLink: "/contact",
    image: "https://jagdamb-foods.vercel.app/images/imlicandy.jpeg",
    tag: "Original Imli Jars & Slices",
  },
];

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slide = SLIDES[currentSlide];

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5ECE0] via-[#FAF5EC] to-[#FAF5EC] py-10 sm:py-16 lg:py-20 border-b border-[#E8DCC4]">
      {/* Background Indian royal mandala subtle dots */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#8B263E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[500px]">
          {/* Left Column: Kataria Typography and Flourish layout */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Ornamental Star Icon & Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#8B263E]">
                  <span className="text-xl">❀</span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#8B263E] bg-[#8B263E]/10 px-3 py-1 rounded-full border border-[#8B263E]/20">
                    {slide.badge}
                  </span>
                </div>

                {/* Main Kataria Headline with Flourished Italic script */}
                <div className="space-y-1">
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2A2521] leading-[1.05] tracking-tight">
                    {slide.titleLine1}
                  </h1>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-[#8B263E] text-2xl sm:text-3xl">✦</span>
                    <span className="font-serif text-5xl sm:text-7xl lg:text-8xl italic font-normal text-[#8B263E] leading-[1.05] drop-shadow-xs">
                      {slide.titleItalic}
                    </span>
                    <span className="text-[#8B263E] text-2xl sm:text-3xl hidden sm:inline">✦</span>
                  </div>
                  <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2A2521] leading-[1.05] tracking-tight">
                    {slide.titleLine3} <span className="text-[#8B263E]">{slide.titleLine4}</span>
                  </h2>
                </div>

                {/* Diamond Ornament Divider */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[#D4A373] text-sm py-1">
                  <span>❖</span>
                  <span className="w-12 h-[1px] bg-[#D4A373]/60" />
                  <span>❖</span>
                </div>

                {/* Kataria Subtitle */}
                <p className="text-[#5A524C] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                  {slide.description}
                </p>

                {/* Kataria-style Pill CTA Button with Gold Border */}
                <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F5E8D0] hover:bg-[#8B263E] text-[#2A2521] hover:text-white border-2 border-[#D4A373] hover:border-[#8B263E] font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <span>{slide.ctaText}</span>
                  </Link>

                  <Link
                    href={slide.secondaryCtaLink}
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-[#FAF5EC] text-[#2A2521] border border-[#E8DCC4] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#8B263E]"
                  >
                    <span>{slide.secondaryCtaText}</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trust Highlights Strip under Hero */}
            <div className="pt-8 border-t border-[#E8DCC4] grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8B263E]/10 flex items-center justify-center text-[#8B263E] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2A2521] leading-none">20+ Years</p>
                  <p className="text-[10px] text-[#7D746D]">Heritage Recipe</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8B263E]/10 flex items-center justify-center text-[#8B263E] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2A2521] leading-none">100% Pure</p>
                  <p className="text-[10px] text-[#7D746D]">Natural Fruit Pulp</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8B263E]/10 flex items-center justify-center text-[#8B263E] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2A2521] leading-none">Direct Factory</p>
                  <p className="text-[10px] text-[#7D746D]">Wholesale Margins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Festive Photography Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Glow Shadow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-[#D4A373]/30 via-[#8B263E]/20 to-[#D4A373]/30 rounded-3xl blur-xl opacity-75 animate-pulse" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4A373]/60 bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-[4/3] w-full bg-[#FAF5EC] overflow-hidden"
                  >
                    <img
                      src={slide.image}
                      alt={slide.tag}
                      className="w-full h-full object-cover transform hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Top Tag */}
                    <div className="absolute top-4 left-4 bg-[#8B263E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-shimmer">
                      <span>{slide.tag}</span>
                    </div>

                    {/* Bottom Image Overlay Text */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-serif text-lg font-bold leading-tight drop-shadow-md">
                        Jagdamb Foods Confectionery
                      </p>
                      <p className="text-xs text-white/90 drop-shadow">
                        Peth Naka, Ishwarpur, Maharashtra
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Sub-strip with slide indicator and quick link */}
                <div className="p-4 bg-[#FFFDF9] border-t border-[#E8DCC4] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {SLIDES.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlaying(false);
                          setCurrentSlide(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "w-8 bg-[#8B263E]"
                            : "w-2.5 bg-[#E8DCC4] hover:bg-[#8B263E]/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#8B263E] font-serif">
                    0{currentSlide + 1} / 0{SLIDES.length}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows (Kataria Style Circular Floating Buttons) */}
              <button
                onClick={handlePrev}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-[#2A2521] hover:text-[#8B263E] hover:bg-white shadow-xl flex items-center justify-center border border-[#E8DCC4] transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-[#2A2521] hover:text-[#8B263E] hover:bg-white shadow-xl flex items-center justify-center border border-[#E8DCC4] transition-all hover:scale-110 active:scale-95 z-20 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
