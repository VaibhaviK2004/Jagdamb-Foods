"use client";

import React from "react";
import { TRUST_PILLARS } from "@/data/products";

export const TrustBadges: React.FC = () => {
  return (
    <section className="py-14 bg-[#FAF5EC] border-b border-heritage-cardBorder/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#FFFDF9] border border-heritage-cardBorder shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Traditional Indian Mandala-inspired Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center mb-4 group-hover:bg-heritage-crimson group-hover:text-white transition-colors duration-300 shadow-inner">
                {idx === 0 && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3L12 22l5.5-1.7C20.2 18.5 22 15.5 22 12c0-5.5-4.5-10-10-10z" />
                    <path d="M12 7a5 5 0 0 1 5 5" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m4.93 4.93 4.24 4.24" />
                    <path d="m14.83 9.17 4.24-4.24" />
                    <path d="m14.83 14.83 4.24 4.24" />
                    <path d="m9.17 14.83-4.24 4.24" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="13" x="4" y="5" rx="2" />
                    <path d="M16 2v3" />
                    <path d="M8 2v3" />
                    <path d="M4 10h16" />
                    <circle cx="12" cy="15" r="1" />
                  </svg>
                )}
              </div>

              <h4 className="font-serif text-lg font-bold text-heritage-charcoal mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-heritage-mutedText leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
