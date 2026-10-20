"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Search, Sparkles, Filter, X } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = [
    "All",
    "Fruit Bars",
    "Mango Candy",
    "Imli Candy",
    "Boom Candy",
    "Bulk Products",
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.flavors && item.flavors.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0; // default order
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="bg-[#FAF5EC] min-h-screen pb-20">
      {/* 1. Page Header */}
      <section className="bg-gradient-to-b from-[#FAF5EC] to-[#F4ECE0] py-14 sm:py-18 border-b border-heritage-cardBorder text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-heritage-crimson/10 text-heritage-crimson text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A World of Flavors</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-heritage-crimson">
            Our Sweet Creations
          </h1>
          <div className="ornament-divider">
            <span className="text-heritage-crimson text-sm">✦ ✦ ✦</span>
          </div>
          <p className="text-heritage-mutedText text-sm sm:text-base max-w-2xl mx-auto">
            Browse through our complete collection of 23 traditional confectionery treats, crafted with real fruit pulp and time-tested recipes.
          </p>
        </div>
      </section>

      {/* 2. Search, Filter & Controls Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-6 border border-heritage-cardBorder shadow-lg space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heritage-mutedText" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search candies, fruit bars, aam papad, 32kg bulk..."
                className="w-full pl-12 pr-10 py-3 rounded-full border border-heritage-cardBorder bg-heritage-cream/50 text-sm text-heritage-charcoal placeholder:text-heritage-mutedText focus:outline-none focus:border-heritage-crimson focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-heritage-mutedText hover:text-heritage-crimson"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <Filter className="w-4 h-4 text-heritage-crimson hidden sm:inline" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products by price or popularity"
                className="w-full md:w-auto px-4 py-3 rounded-full border border-heritage-cardBorder bg-white text-xs sm:text-sm font-semibold text-heritage-charcoal focus:outline-none focus:border-heritage-crimson"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills (Kataria Style) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-heritage-crimson text-white shadow-sm"
                    : "bg-heritage-cream text-heritage-charcoal hover:bg-heritage-cardBorder/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-heritage-mutedText font-medium">
            Showing <span className="font-bold text-heritage-charcoal">{filteredProducts.length}</span> of {PRODUCTS.length} varieties
          </p>
          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-xs text-heritage-crimson font-semibold hover:underline"
            >
              Clear Category Filter
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-heritage-cardBorder p-8">
            <h3 className="font-serif text-xl font-bold text-heritage-charcoal mb-2">
              No Confectionery Found
            </h3>
            <p className="text-sm text-heritage-mutedText mb-6">
              We couldn&apos;t find any products matching &ldquo;{searchQuery}&rdquo;. Try another flavor or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="btn-primary-kataria text-xs px-6 py-2.5"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF5EC] flex items-center justify-center">Loading catalogue...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
