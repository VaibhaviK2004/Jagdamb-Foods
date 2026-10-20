"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is the shelf life of Jagdamb Foods fruit bars and candies?",
    answer: "Our fruit bars and toffees have an ambient shelf life of 9 to 12 months from manufacturing. Thanks to multi-layer moisture-proof barrier packaging, they maintain their authentic chewiness, aroma, and natural tangy taste without artificial chemical preservatives.",
  },
  {
    question: "How can I order in bulk or become a city distributor?",
    answer: "You can use our website quotation basket, request dealership terms on our Contact page, or directly message our CEO desk on WhatsApp at +91 9309489012. We offer lucrative trade margins, sample boxes, and pan-India freight support for distributors.",
  },
  {
    question: "Are Jagdamb Foods products 100% vegetarian and FSSAI certified?",
    answer: "Yes, 100%. All our confectionery products are manufactured in a certified hygienic facility in Peth Naka, Ishwarpur, Maharashtra adhering strictly to FSSAI standards. We use genuine fruit pulp (Alphonso mango, raw kacchi keri, natural tamarind) and plant-based ingredients.",
  },
  {
    question: "Do you supply 32kg master cartons for industrial & commercial repackaging?",
    answer: "Yes, we specialize in 32kg commercial cartons for Mango Fruit Bars, Imli Burfi, and Aam Papad. These are trusted by leading sweet shops, wholesale traders, and repackagers across Maharashtra, Gujarat, Delhi, and Karnataka.",
  },
  {
    question: "How fast is delivery across India?",
    answer: "Wholesale consignments are typically dispatched within 24 to 48 hours from our factory hub near the Sangli-Kolhapur highway, reaching most tier-1 and tier-2 Indian cities within 3 to 5 business days via established logistics partners.",
  },
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF5EC] border-b border-heritage-cardBorder/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-crimson">
            Frequently Asked Questions
          </h2>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-sm sm:text-base">
            Everything you need to know about our ingredients, wholesale terms, and dispatch.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-heritage-cardBorder bg-white overflow-hidden shadow-xs transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-heritage-charcoal hover:text-heritage-crimson transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-heritage-crimson shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-heritage-mutedText leading-relaxed border-t border-heritage-cardBorder/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-heritage-mutedText">
            Have a custom requirement?{" "}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20have%20a%20question%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-heritage-crimson hover:underline"
            >
              Ask our CEO on WhatsApp &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
