"use client";

import React from "react";
import { Sparkles, Award, ShieldCheck, Heart, Truck } from "lucide-react";

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    { text: "100% REAL FRUIT PULP", icon: ShieldCheck },
    { text: "TRADITIONAL RECIPES SINCE 2004", icon: Award },
    { text: "ZERO SYNTHETIC FILLERS", icon: Heart },
    { text: "DIRECT FACTORY WHOLESALE RATES", icon: Sparkles },
    { text: "PAN-INDIA EXPRESS DISPATCH", icon: Truck },
    { text: "LOVED BY 5M+ FAMILIES", icon: Sparkles },
  ];

  return (
    <div className="w-full bg-heritage-maroon text-heritage-amber py-3 border-y border-heritage-gold/30 overflow-hidden relative shadow-inner">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-6 text-xs sm:text-sm font-bold tracking-widest uppercase">
            <item.icon className="w-4 h-4 text-heritage-gold shrink-0 animate-pulse" />
            <span className="text-white font-medium">{item.text}</span>
            <span className="text-heritage-gold/60 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
