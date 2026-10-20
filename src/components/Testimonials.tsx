"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-heritage-cardBorder/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-heritage-crimson mb-2">
            Word on the Street
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-heritage-crimson">
            What Our Partners Say
          </h2>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-base">
            Trusted by distributors, retail chains, and wholesale stockists across India.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-heritage-cardBorder bg-[#FAF5EC] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-heritage-crimson/15 -z-0" />

              <div className="relative z-10">
                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Quote in serif */}
                <blockquote className="text-heritage-charcoal text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Partner Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-heritage-cardBorder/60">
                <div className="w-10 h-10 rounded-full bg-heritage-crimson text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-heritage-charcoal leading-none">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-heritage-crimson font-medium mt-1">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
