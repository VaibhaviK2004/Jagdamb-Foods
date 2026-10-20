"use client";

import React from "react";
import Link from "next/link";
import { TIMELINE, COMPANY_INFO } from "@/data/products";
import { Target, Eye, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF5EC] min-h-screen">
      {/* 1. Header Hero Banner */}
      <section className="bg-gradient-to-b from-[#FAF5EC] to-[#F4ECE0] py-16 sm:py-20 border-b border-heritage-cardBorder text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Decades of Dedication to Sweetness</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-heritage-crimson">
            Our Story &amp; Heritage
          </h1>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We focus on genuine fruit quality, hygiene, and authentic Maharashtrian flavors, crafting an irresistible range of candies, toffees, and fruit bars that bring happiness to every family.
          </p>
        </div>
      </section>

      {/* 2. Visual Storytelling Section */}
      <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-heritage-cardBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-heritage-crimson">
                Born in Peth Naka, Ishwarpur
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-charcoal leading-tight">
                A Legacy of Real Fruit Taste &amp; Craftsmanship
              </h2>
              <p className="text-heritage-charcoal text-base leading-relaxed">
                Founded under the visionary entrepreneurship of CEO P.G. Kumbhar, Jagdamb Foods was established with a singular mission: to revive the pure, nostalgic flavors of Indian confectionery using real fruits rather than synthetic essences.
              </p>
              <p className="text-heritage-mutedText text-sm sm:text-base leading-relaxed">
                From our roots in Peth Naka, Ishwarpur, Maharashtra, we recognized that Indian consumers and distributors were looking for candies and fruit bars made with genuine raw mangoes (Kaccha Aam), ripe Alphonso mango pulp, and natural tamarind. Today, our manufacturing unit processes tons of locally sourced fruits annually, empowering regional growers and providing employment to women artisans.
              </p>
              <div className="pt-2">
                <Link href="/products" className="btn-primary-kataria text-xs sm:text-sm">
                  <span>Explore Our Creations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-heritage-cardBorder shadow-xl bg-heritage-cream">
                <img
                  src="https://jagdamb-foods.vercel.app/images/women.png"
                  alt="Artisanal sweet preparation at Jagdamb Foods"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline: Our Journey Through Time */}
      <section className="py-16 md:py-24 bg-[#FAF5EC] border-b border-heritage-cardBorder/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-heritage-crimson">Milestones</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-crimson mt-1">
              Our Journey Through Time
            </h2>
            <div className="ornament-divider">
              <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
            </div>
          </div>

          <div className="relative border-l-2 border-heritage-crimson/30 ml-4 sm:ml-32 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-heritage-crimson border-4 border-white shadow-md group-hover:scale-125 transition-transform" />

                {/* Year Pill on Left for larger screens */}
                <div className="sm:absolute sm:-left-32 sm:top-0 sm:w-24 sm:text-right">
                  <span className="inline-block bg-heritage-crimson/10 text-heritage-crimson font-serif font-bold text-xs px-2.5 py-1 rounded-full border border-heritage-crimson/20">
                    {item.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-heritage-cardBorder shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl font-bold text-heritage-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-heritage-mutedText text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mission, Vision, and Commitment */}
      <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-heritage-cardBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="rounded-2xl bg-[#FAF5EC] p-8 border border-heritage-cardBorder text-center flex flex-col items-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center mb-5">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-heritage-charcoal mb-3">Our Mission</h3>
              <p className="text-heritage-mutedText text-sm leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-[#FAF5EC] p-8 border border-heritage-cardBorder text-center flex flex-col items-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center mb-5">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-heritage-charcoal mb-3">Our Vision</h3>
              <p className="text-heritage-mutedText text-sm leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Commitment */}
            <div className="rounded-2xl bg-[#FAF5EC] p-8 border border-heritage-cardBorder text-center flex flex-col items-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-heritage-charcoal mb-3">Our Commitment</h3>
              <p className="text-heritage-mutedText text-sm leading-relaxed">
                {COMPANY_INFO.commitment}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality & Hygiene Standards */}
      <section className="py-16 md:py-24 bg-[#FAF5EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-heritage-crimson">
                Cleanliness &amp; Food Safety
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-charcoal">
                Quality &amp; Hygiene Standards
              </h2>
              <p className="text-heritage-charcoal text-base leading-relaxed">
                At Jagdamb Foods, quality is not just a marketing word; it is our sacred promise to every parent and child enjoying our sweets. We meticulously grade raw mangoes and tamarind pods, discarding any substandard produce before processing.
              </p>
              <p className="text-heritage-mutedText text-sm leading-relaxed">
                Our manufacturing facilities are equipped with climate-controlled automated dehydration tunnels, touch-free packing lines, and food-grade stainless steel machinery maintained to rigorous standards of hygiene.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20would%20like%20to%20learn%20more%20about%20Jagdamb%20Foods%20quality%20certifications.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-kataria text-xs sm:text-sm"
                >
                  Verify Quality Certifications &rarr;
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-heritage-cardBorder shadow-xl bg-white">
                <img
                  src="https://jagdamb-foods.vercel.app/images/kit4.png"
                  alt="Modern hygiene and food safety at Jagdamb Foods"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
