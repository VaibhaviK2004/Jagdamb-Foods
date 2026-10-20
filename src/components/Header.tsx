"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu, X, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { COMPANY_INFO, PRODUCTS, Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { totalCount, setIsCartOpen, addToCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter products for live search
  const filteredSearchProducts = searchQuery.trim() === ""
    ? []
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.flavors?.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Products", href: "/products" },
    { label: "Fruit Bars", href: "/products?category=Fruit+Bars" },
    { label: "Imli Candies", href: "/products?category=Imli+Candy" },
    { label: "Bulk Cartons", href: "/products?category=Bulk+Products" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#E8DCC4]"
            : "bg-[#FAF5EC]/95 backdrop-blur-sm py-4 border-b border-[#E8DCC4]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo & Emblem in Kataria Style */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#8B263E] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                {/* Traditional Mango Leaf & Sun Emblem */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-heritage-amber"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.5 4.5 8.3L12 22l5.5-1.7C20.2 18.5 22 15.5 22 12c0-5.5-4.5-10-10-10z" />
                  <path d="M12 2v20" />
                  <path d="M12 7c3 1 5 4 5 7" />
                  <path d="M7 14c0-3 2-6 5-7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-tight text-[#8B263E] leading-none">
                  Jagdamb<span className="text-[#2A2521] ml-1 font-sans font-medium text-lg sm:text-xl">Foods</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#7D746D] font-medium mt-0.5">
                  Heritage Confectionery • Est. 2004
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Kataria animated underline */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] font-semibold tracking-wider uppercase transition-colors relative py-1.5 group ${
                      isActive
                        ? "text-[#8B263E]"
                        : "text-[#2A2521]/80 hover:text-[#8B263E]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#8B263E] transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons (Search, WhatsApp, Cart Bag) */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* Search Toggle Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 sm:p-2.5 rounded-full text-[#2A2521] hover:text-[#8B263E] hover:bg-white/80 transition-all cursor-pointer"
                aria-label="Search Jagdamb confectionery"
                title="Search Products"
              >
                <Search className="w-5 h-5 transition-transform hover:scale-110" />
              </button>

              {/* Direct WhatsApp Call CTA Pill */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Namaste!%20I%20would%20like%20to%20inquire%20about%20Jagdamb%20Foods%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Order</span>
              </a>

              {/* Cart / Quotation Basket Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-white hover:bg-[#FAF5EC] border border-[#E8DCC4] text-[#2A2521] hover:text-[#8B263E] transition-all shadow-sm group cursor-pointer"
                aria-label="View Order Inquiry Basket"
                title="View Cart / Quote"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#8B263E] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-bounce">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg border border-[#E8DCC4] lg:hidden text-[#2A2521] hover:bg-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#FFFDF9] border-b border-[#E8DCC4] px-4 pt-4 pb-6 space-y-4 shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "bg-[#8B263E] text-white"
                          : "text-[#2A2521] hover:bg-[#FAF5EC]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="pt-4 border-t border-[#E8DCC4] flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-full font-semibold text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 border border-[#8B263E] text-[#8B263E] py-2.5 rounded-full font-semibold text-xs hover:bg-[#8B263E] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Factory Directly</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Interactive Search Modal Overlay (Kataria Style) */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FFFDF9] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E8DCC4] overflow-hidden"
            >
              {/* Search Bar Input */}
              <div className="p-4 sm:p-5 border-b border-[#E8DCC4] flex items-center gap-3 bg-[#FAF5EC]">
                <Search className="w-5 h-5 text-[#8B263E] shrink-0" />
                <input
                  type="text"
                  placeholder="Search Alphonso Aam Papad, Imli Candy, Fruit Katli..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-none text-[#2A2521] placeholder-[#7D746D] text-base sm:text-lg focus:outline-none"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-[#7D746D] hover:text-[#2A2521]"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Results / Suggestions */}
              <div className="max-h-96 overflow-y-auto p-4 divide-y divide-[#E8DCC4]/50">
                {searchQuery.trim() === "" ? (
                  <div className="py-6 text-center text-sm text-[#7D746D]">
                    <p className="font-semibold text-[#2A2521] mb-1">Popular searches:</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      {["Kaccha Mango", "Imli Burfi", "Aam Papad", "Kairi Boom", "32Kg Bulk"].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-3 py-1 bg-white border border-[#E8DCC4] rounded-full text-xs hover:border-[#8B263E] hover:text-[#8B263E] transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : filteredSearchProducts.length === 0 ? (
                  <div className="py-8 text-center text-[#7D746D]">
                    <p>No products matching &quot;{searchQuery}&quot;</p>
                    <p className="text-xs mt-1">Try searching for &quot;Mango&quot;, &quot;Imli&quot;, or &quot;Bar&quot;</p>
                  </div>
                ) : (
                  filteredSearchProducts.map((p) => (
                    <div
                      key={p.id}
                      className="py-3 flex items-center justify-between gap-3 hover:bg-[#FAF5EC] px-2 rounded-lg transition-colors group"
                    >
                      <Link
                        href={`/products`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-3 flex-1"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-12 h-12 object-contain bg-white rounded-lg border border-[#E8DCC4] p-1"
                        />
                        <div>
                          <p className="font-serif text-sm font-bold text-[#2A2521] group-hover:text-[#8B263E] transition-colors">
                            {p.name}
                          </p>
                          <p className="text-xs text-[#7D746D]">
                            {p.category} • {p.weight}
                          </p>
                        </div>
                      </Link>
                      <div className="flex items-center gap-3">
                        <span className="font-serif font-bold text-[#8B263E] text-sm">
                          ₹{p.price}
                        </span>
                        <button
                          onClick={() => {
                            addToCart(p, 1);
                            setSearchOpen(false);
                            setIsCartOpen(true);
                          }}
                          className="px-3 py-1.5 bg-[#8B263E] text-white text-xs font-semibold rounded-full hover:bg-[#721F32] transition-colors shadow-xs"
                        >
                          + Quote
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
