"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-heritage-charcoal text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with Factory Direct
      </span>

      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste%20Jagdamb%20Foods!%20I%20have%20an%20inquiry%20regarding%20your%20products.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat with Jagdamb Foods on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        {/* Pulsing beacon */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
      </a>
    </div>
  );
};
