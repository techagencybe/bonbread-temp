"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShoppingBag, 
  Search, 
  X, 
  Check 
} from "lucide-react";

// Types
interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: "bread" | "pastry";
  img: string;
}

// Product List (11 authentic Bon Bread products)
const catalogProducts: Product[] = [
  // Breads
  {
    id: "white-sliced",
    name: "Bon White Sliced Bread",
    desc: "Perfect slices, soft crumb, and golden crust. Baked fresh daily.",
    price: 1200,
    category: "bread",
    img: "/bon%20bread%20images/Bon%20White%20Sliced%20Bread.avif",
  },
  {
    id: "coconut-bread",
    name: "Bon Coconut Bread",
    desc: "Enriched with real toasted coconut flakes for a rich tropical flavor.",
    price: 1500,
    category: "bread",
    img: "/bon%20bread%20images/Bon%20Coconut%20Bread.avif",
  },
  {
    id: "coconut-rolls",
    name: "Bon Coconut Bread Rolls",
    desc: "Sweet, pillowy soft rolls infused with coconut goodness.",
    price: 1600,
    category: "bread",
    img: "/bon%20bread%20images/Bon%20Coconut%20Bread%20Rolls.avif",
  },
  {
    id: "fancy-bread",
    name: "Bon Fancy Bread",
    desc: "Signature braided family recipe, golden-baked with care.",
    price: 1400,
    category: "bread",
    img: "/bon%20bread%20images/Bon%20Fancy%20Bread.avif",
  },
  {
    id: "slicebread",
    name: "Bon Premium Slice",
    desc: "Enriched milk sliced loaf with a super soft, dense crumb.",
    price: 1300,
    category: "bread",
    img: "/bon%20bread%20images/slicebread.avif",
  },
  // Pastries
  {
    id: "sausage-roll",
    name: "Bon Sausage Roll",
    desc: "Golden, flaky puff pastry wrapping a perfectly seasoned sausage center.",
    price: 700,
    category: "pastry",
    img: "/bon%20bread%20images/Bon%20Sausage%20Roll.avif",
  },
  {
    id: "chicken-pie",
    name: "Bon Chicken Pie",
    desc: "Creamy shredded chicken and vegetable filling inside a rich buttery crust.",
    price: 1000,
    category: "pastry",
    img: "/bon%20bread%20images/Bon%20Chicken%20Pie.avif",
  },
  {
    id: "meat-pie",
    name: "Bon Meat Pie",
    desc: "Savory minced beef, carrots, and potatoes inside a classic shortcrust pastry.",
    price: 900,
    category: "pastry",
    img: "/bon%20bread%20images/Bon%20Meat%20Pie.avif",
  },
  {
    id: "doughnut",
    name: "Bon Doughnut",
    desc: "Soft, pillowy ring doughnut with a classic light sugary glaze.",
    price: 600,
    category: "pastry",
    img: "/bon%20bread%20images/Bon%20Doughnut.avif",
  },
  {
    id: "fish-roll",
    name: "Bon Fish Roll",
    desc: "Crisp outer crust filled with flaky spiced fish and herbs.",
    price: 800,
    category: "pastry",
    img: "/bon%20bread%20images/Bon%20Fish%20Roll.avif",
  },
  {
    id: "scotch-egg",
    name: "Bon Scotch Egg",
    desc: "Savory sausage meat coating a hard-boiled egg, breaded and fried to crisp perfection.",
    price: 900,
    category: "pastry",
    img: "/bon%20bread%20images/Bon%20Scotch%20Egg.avif",
  },
];

function ProductSkeleton() {
  return (
    <div className="group bg-white rounded-3xl border border-[#EBE3D5] p-3 flex flex-col justify-between h-[420px] transition-all">
      <div>
        {/* Shimmer Image Box */}
        <div className="aspect-square bg-[#FAF6F0] rounded-2xl animate-pulse flex items-center justify-center p-6 relative">
          <div className="w-12 h-12 text-[#EBE3D5]/50 font-serif text-3xl font-black select-none">B</div>
        </div>

        {/* Shimmer Metadata & Title */}
        <div className="px-2 pt-4 space-y-2">
          <div className="h-2.5 w-16 bg-[#FBEBE7] rounded animate-pulse"></div>
          <div className="h-5 w-40 bg-[#341E19]/10 rounded animate-pulse"></div>
          <div className="space-y-1.5 pt-2">
            <div className="h-3 w-full bg-[#FAF6F0] rounded animate-pulse"></div>
            <div className="h-3 w-5/6 bg-[#FAF6F0] rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Shimmer Price & Button */}
      <div className="px-2 pt-4 mt-4 border-t border-[#EBE3D5]/60 flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-2 w-8 bg-[#FAF6F0] rounded animate-pulse"></div>
          <div className="h-4.5 w-14 bg-[#FBEBE7] rounded animate-pulse"></div>
        </div>
        <div className="h-9 w-24 bg-[#FAF6F0] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

function ProductCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  // State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Sync category from URL search params
  useEffect(() => {
    if (initialCategory === "bread" || initialCategory === "pastries" || initialCategory === "pastry") {
      setSelectedCategory(initialCategory === "pastries" ? "pastry" : initialCategory);
    } else {
      setSelectedCategory("all");
    }
  }, [initialCategory]);

  // Simulate premium shimmering skeleton loader effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Cart operation: Dispatch to global Navbar handler
  const addToCart = (product: Product) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("add-to-cart", { detail: product }));
    }
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1500);
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  // Filtered Products
  const filteredProducts = catalogProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white selection:bg-[#EB4915] selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="bg-[#FAF6F0] py-12 md:py-16 border-b border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest">
            Handcrafted in Abuja
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#23110E] tracking-tight">
            Our Bakery Catalogue
          </h1>
          <p className="text-xs sm:text-sm text-[#341E19]/70 max-w-lg mx-auto leading-relaxed">
            Freshly baked breads and crisp flaky pastries delivered straight from our ovens. 
            Choose your daily delights and allocate order slots.
          </p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        
        {/* Search and Filters toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 border-b border-[#EBE3D5]/60 pb-6">
          {/* Categories Tab selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: "all", label: "All Items" },
              { id: "bread", label: "Artisanal Bread" },
              { id: "pastry", label: "Flaky Pastries" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? "bg-[#341E19] text-white shadow-sm"
                    : "bg-[#FAF6F0] text-[#341E19] hover:bg-[#EBE3D5]/50 border border-[#EBE3D5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-[#341E19]/40">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search bakes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF6F0] border border-[#EBE3D5] rounded-full pl-10 pr-4 py-2.5 text-xs text-[#341E19] outline-none focus:ring-1 focus:ring-[#EB4915] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#341E19]/40 hover:text-[#EB4915]"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Shimmer skeleton or product grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in">
            {Array.from({ length: 8 }).map((_, idx) => (
              <ProductSkeleton key={idx} />
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#FAF6F0]/50 rounded-3xl border border-dashed border-[#EBE3D5]">
            <span className="text-4xl block">🍞</span>
            <h3 className="font-serif font-bold text-lg text-[#23110E] mt-4">No bakes found</h3>
            <p className="text-xs text-[#341E19]/60 mt-1">Try resetting your search filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((p) => {
              const isAdded = justAddedId === p.id;

              return (
                <div 
                  key={p.id} 
                  className="group bg-white rounded-3xl border border-[#EBE3D5] p-3 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image container on soft pastel panel */}
                    <div className="aspect-square bg-[#F5F3EE] rounded-2xl overflow-hidden flex items-center justify-center p-6 relative">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                      />
                    </div>

                    <div className="px-2 pt-4">
                      <span className="text-[9px] font-bold text-[#EB4915] uppercase tracking-wider block">
                        {p.category === "bread" ? "Artisanal Bread" : "Sweet & Savory"}
                      </span>
                      <h3 className="font-serif font-extrabold text-sm sm:text-base text-[#23110E] mt-0.5 leading-tight">
                        {p.name}
                      </h3>
                      <p className="text-[11px] text-[#341E19]/70 mt-1.5 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-2 pt-4 mt-4 border-t border-[#EBE3D5]/60 flex items-center justify-between">
                    <div>
                      <span className="block text-[9px] text-[#341E19]/40 font-bold uppercase">
                        Price
                      </span>
                      <span className="text-sm font-extrabold text-[#EB4915]">
                        {formatCurrency(p.price)}
                      </span>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      className={`text-[9px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                        isAdded 
                          ? "bg-emerald-600 text-white hover:bg-emerald-700" 
                          : "bg-[#341E19] text-white hover:bg-[#EB4915]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          Added!
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function ProductCatalogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="text-4xl block animate-bounce">🍞</span>
          <p className="text-xs font-bold uppercase tracking-widest text-[#EB4915]">Loading Oven...</p>
        </div>
      </div>
    }>
      <ProductCatalogContent />
    </Suspense>
  );
}
