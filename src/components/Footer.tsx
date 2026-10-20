"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Heart, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1F1F] text-[#FAF5EC] pt-16 pb-10 border-t-4 border-heritage-crimson relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter / Bulk Order Card */}
        <div className="mb-14 rounded-2xl bg-gradient-to-r from-heritage-crimson to-heritage-maroon p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-heritage-amber">
                Wholesale &amp; Retail Network
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Looking to stock Jagdamb Foods in your store?
              </h3>
              <p className="text-white/80 text-sm max-w-2xl">
                Get direct factory pricing, distributor margins, and free product samples dispatched to your commercial address.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20am%20interested%20in%20becoming%20a%20distributor%20or%20retail%20partner%20for%20Jagdamb%20Foods.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Distributor Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Columns Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-heritage-crimson flex items-center justify-center text-heritage-amber shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3L12 22l5.5-1.7C20.2 18.5 22 15.5 22 12c0-5.5-4.5-10-10-10z" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Jagdamb<span className="text-heritage-amber ml-1">Foods</span>
              </span>
            </Link>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              Food for passionate people. Manufacturer of premium Fruit Bar Toffees made with real fruit taste and traditional Maharashtrian recipes. Flavours include Mango, Raw Kacchi Keri, Imli, Strawberry, Guava &amp; more.
            </p>

            {/* FSSAI & Quality Assurance Seal */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-white/80">
                <ShieldCheck className="w-4 h-4 text-heritage-amber" />
                <span>FSSAI Certified Unit</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-white/80">
                <Heart className="w-4 h-4 text-heritage-crimson fill-heritage-crimson" />
                <span>100% Vegetarian</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/products?category=Fruit+Bars" className="hover:text-heritage-amber transition-colors">
                  Fruit Bars &amp; Aam Papad
                </Link>
              </li>
              <li>
                <Link href="/products?category=Mango+Candy" className="hover:text-heritage-amber transition-colors">
                  Mango Candies &amp; Toffees
                </Link>
              </li>
              <li>
                <Link href="/products?category=Imli+Candy" className="hover:text-heritage-amber transition-colors">
                  Digestive Imli Candies
                </Link>
              </li>
              <li>
                <Link href="/products?category=Boom+Candy" className="hover:text-heritage-amber transition-colors">
                  Zesty Boom Candies
                </Link>
              </li>
              <li>
                <Link href="/products?category=Bulk+Products" className="hover:text-heritage-amber transition-colors">
                  32Kg Commercial Cartons
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-heritage-amber transition-colors">
                  About Us &amp; Our Story
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-heritage-amber transition-colors">
                  Portfolio &amp; Packaging
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-heritage-amber transition-colors">
                  Distributor Network &amp; Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-heritage-amber transition-colors">
                  Contact Factory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Factory Address & Contacts */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Factory &amp; Registered Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-heritage-amber shrink-0 mt-0.5" />
                <p>
                  {COMPANY_INFO.address.company}
                  <br />
                  {COMPANY_INFO.address.area}
                  <br />
                  CEO: {COMPANY_INFO.founder}
                  <br />
                  {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, India
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-heritage-amber shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-heritage-amber transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-heritage-amber shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-heritage-amber transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Authentic Indian Taste</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Wholesale Support</Link>
            <span>•</span>
            <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Order</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
