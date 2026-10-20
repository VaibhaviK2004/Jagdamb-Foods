"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/products";
import { MapPin, Phone, Mail, MessageCircle, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Wholesale Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendFormToWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Inquiry from Website Contact Form:*\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-[#FAF5EC] min-h-screen pb-24">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#FAF5EC] to-[#F4ECE0] py-14 sm:py-20 border-b border-heritage-cardBorder text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>We&apos;d Love to Hear From You</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-heritage-crimson">
            Get in Touch with Jagdamb Foods
          </h1>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-sm sm:text-base max-w-2xl mx-auto">
            Whether you are looking to place bulk confectionery orders, request dealership terms, or ask about our fruit bars, our team is here to assist.
          </p>
        </div>
      </section>

      {/* 2. Form & Contact Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-heritage-cardBorder shadow-md">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-heritage-charcoal mb-2">
              Send us a Message
            </h2>
            <p className="text-sm text-heritage-mutedText mb-8">
              Fill out the details below and we will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-heritage-cream/70 border border-heritage-cardBorder rounded-2xl p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-heritage-charcoal">
                  Thank you, {formData.name}!
                </h3>
                <p className="text-sm text-heritage-mutedText max-w-md mx-auto">
                  Your message has been recorded. For instant response, click below to forward this inquiry directly to our WhatsApp hotline.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={sendFormToWhatsApp}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white py-3 px-6 rounded-full font-bold text-xs shadow-md transition-transform hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Forward to WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "Wholesale Inquiry", message: "" });
                    }}
                    className="border border-heritage-cardBorder text-heritage-charcoal py-3 px-6 rounded-full font-semibold text-xs hover:bg-heritage-cardBorder/40 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-heritage-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-heritage-cardBorder bg-[#FAF5EC]/40 text-sm text-heritage-charcoal focus:outline-none focus:border-heritage-crimson focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-heritage-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-heritage-cardBorder bg-[#FAF5EC]/40 text-sm text-heritage-charcoal focus:outline-none focus:border-heritage-crimson focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-heritage-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-heritage-cardBorder bg-[#FAF5EC]/40 text-sm text-heritage-charcoal focus:outline-none focus:border-heritage-crimson focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-heritage-charcoal mb-2">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-heritage-cardBorder bg-[#FAF5EC]/40 text-sm text-heritage-charcoal focus:outline-none focus:border-heritage-crimson focus:bg-white"
                    >
                      <option value="Wholesale & Bulk Supply">Wholesale &amp; Bulk Supply (Cartons)</option>
                      <option value="Distributor / Dealership">Distributor / Dealership Request</option>
                      <option value="Retail Store Stockist">Retail Store Stockist</option>
                      <option value="Product Samples">Sample Box Request</option>
                      <option value="General Question">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-heritage-charcoal mb-2">
                    Message / Quantity Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your city, required products (e.g. 500g Burfi, 32kg Mango Bar), and expected quantities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-heritage-cardBorder bg-[#FAF5EC]/40 text-sm text-heritage-charcoal focus:outline-none focus:border-heritage-crimson focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-kataria w-full py-4 text-sm font-bold shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-heritage-cardBorder shadow-md space-y-6">
              <h3 className="font-serif text-2xl font-bold text-heritage-charcoal">
                Factory &amp; Head Office
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-heritage-charcoal">Registered Address</h4>
                  <p className="text-sm text-heritage-mutedText leading-relaxed mt-1">
                    {COMPANY_INFO.address.company}
                    <br />
                    {COMPANY_INFO.address.area}
                    <br />
                    CEO: {COMPANY_INFO.founder}
                    <br />
                    {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-heritage-charcoal">Phone &amp; Order Line</h4>
                  <p className="text-sm text-heritage-mutedText mt-1">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-heritage-crimson font-bold hover:underline">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-heritage-mutedText mt-0.5">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-heritage-crimson/10 text-heritage-crimson flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-heritage-charcoal">Direct Email</h4>
                  <p className="text-sm text-heritage-mutedText mt-1">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-heritage-crimson hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20am%20contacting%20you%20from%20your%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white py-3.5 px-4 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Support ({COMPANY_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>

            {/* Quality & Dispatch Card */}
            <div className="rounded-2xl bg-gradient-to-br from-heritage-crimson to-heritage-maroon text-white p-6 shadow-md space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-heritage-amber font-bold">Factory Direct Guarantee</span>
              <h4 className="font-serif text-lg font-bold">Fast Dispatch from Maharashtra</h4>
              <p className="text-xs text-white/80 leading-relaxed">
                Direct highway connectivity from Sangli-Kolhapur hub ensures prompt freight movement across Western, Northern, and Southern India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
