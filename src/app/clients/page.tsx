"use client";

import React from "react";
import Link from "next/link";
import { TESTIMONIALS, COMPANY_INFO } from "@/data/products";
import { Star, Quote, Sparkles, Building2, TrendingUp, Truck, Award } from "lucide-react";

export default function ClientsPage() {
  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Attractive Trade Margins",
      desc: "Direct-from-factory wholesale pricing designed to maximize distributor and retail profit margins.",
    },
    {
      icon: Truck,
      title: "Reliable Pan-India Logistics",
      desc: "Safe, moisture-proof multi-ply packaging with trusted transport partners delivering across 24+ states.",
    },
    {
      icon: Building2,
      title: "Consistent Year-Round Stock",
      desc: "Large-scale automated dehydration and processing units ensure zero supply interruptions during peak festival seasons.",
    },
    {
      icon: Award,
      title: "High Customer Retention",
      desc: "Authentic real fruit taste that drives rapid counter inventory turnover and high customer re-orders.",
    },
  ];

  return (
    <div className="bg-[#FAF5EC] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#FAF5EC] to-[#F4ECE0] py-14 sm:py-20 border-b border-heritage-cardBorder text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Building Strong Relationships</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-heritage-crimson">
            Our Valued Partners &amp; Clients
          </h1>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-sm sm:text-base max-w-2xl mx-auto">
            We are proud to partner with a vast network of 1,500+ distributors, wholesalers, and retail chains who bring Jagdamb Foods to every corner of India.
          </p>
        </div>
      </section>

      {/* 2. Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-heritage-crimson">Distributor Voices</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-charcoal mt-1">
            Real Feedback from the Ground
          </h2>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-heritage-cardBorder bg-[#FFFDF9] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-heritage-crimson/15" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                <blockquote className="text-heritage-charcoal text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-heritage-cardBorder/60">
                <div className="w-11 h-11 rounded-full bg-heritage-crimson text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
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
      </section>

      {/* 3. Distributor Network Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#FFFDF9] rounded-3xl border border-heritage-cardBorder shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-heritage-crimson">Partner With Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-charcoal mt-1">
            Why Become a Jagdamb Foods Distributor?
          </h2>
          <p className="text-heritage-mutedText text-sm mt-3">
            Join India&apos;s fastest growing traditional fruit confectionery brand and enjoy unmatched trade support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerBenefits.map((b, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#FAF5EC] border border-heritage-cardBorder/60 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center mx-auto">
                <b.icon className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-heritage-charcoal">{b.title}</h4>
              <p className="text-xs text-heritage-mutedText leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20am%20interested%20in%20becoming%20a%20distributor%20in%20my%20city.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-kataria text-sm px-8 py-3.5"
          >
            Apply for Dealership on WhatsApp &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
