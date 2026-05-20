"use client";

import React, { useState } from "react";
import { ShoppingBag, ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const breadProducts = [
  {
    id: "white-sliced",
    name: "Bon White Sliced Bread",
    desc: "Perfect slices, soft crumb, golden crust.",
    img: "/bon%20bread%20images/Bon%20White%20Sliced%20Bread.avif",
  },
  {
    id: "coconut-bread",
    name: "Bon Coconut Bread",
    desc: "Enriched with real toasted coconut flakes.",
    img: "/bon%20bread%20images/Bon%20Coconut%20Bread.avif",
  },
  {
    id: "coconut-rolls",
    name: "Bon Coconut Bread Rolls",
    desc: "Sweet, pillowy rolls with tropical coconut flavor.",
    img: "/bon%20bread%20images/Bon%20Coconut%20Bread%20Rolls.avif",
  },
  {
    id: "fancy-bread",
    name: "Bon Fancy Bread",
    desc: "Braided family recipe, baked fresh daily.",
    img: "/bon%20bread%20images/Bon%20Fancy%20Bread.avif",
  },
];

const pastryProducts = [
  {
    id: "sausage-roll",
    name: "Bon Sausage Roll",
    desc: "Golden flaky pastry with seasoned savory meat filling.",
    img: "/bon%20bread%20images/Bon%20Sausage%20Roll.avif",
  },
  {
    id: "chicken-pie",
    name: "Bon Chicken Pie",
    desc: "Creamy chicken and vegetable filling in buttery crust.",
    img: "/bon%20bread%20images/Bon%20Chicken%20Pie.avif",
  },
  {
    id: "meat-pie",
    name: "Bon Meat Pie",
    desc: "Traditional Nigerian meat pie, perfectly spiced.",
    img: "/bon%20bread%20images/Bon%20Meat%20Pie.avif",
  },
  {
    id: "doughnut",
    name: "Bon Doughnut",
    desc: "Classic glazed doughnut, light and fluffy.",
    img: "/bon%20bread%20images/Bon%20Doughnut.avif",
  },
];

export default function ProductCatalog() {
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: any) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("add-to-cart", { detail: product }));
    }
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1500);
  };

  return (
    <section id="products" className="py-20 bg-white border-t border-[#EBE3D5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= BREAD SECTION ================= */}
        <div className="space-y-8">
          <div className="flex items-end justify-between border-b border-[#EBE3D5]/60 pb-4 select-none">
            <div>
              <span className="text-[10px] sm:text-xs font-black text-[#EB4915] uppercase tracking-widest block mb-1">
                Our Artisanal Oven
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-[#23110E] uppercase">
                Our Bread
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5">
                <button 
                  aria-label="Previous Bread"
                  className="w-8 h-8 rounded-full border border-[#EBE3D5] flex items-center justify-center text-[#341E19] hover:bg-[#341E19] hover:text-white transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  aria-label="Next Bread"
                  className="w-8 h-8 rounded-full border border-[#EBE3D5] flex items-center justify-center text-[#341E19] hover:bg-[#341E19] hover:text-white transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <Link 
                href="/products?category=bread"
                className="text-xs font-bold uppercase tracking-widest text-[#341E19] hover:text-[#EB4915] transition-colors border-b-2 border-transparent hover:border-[#EB4915] pb-0.5"
              >
                View All Bread &rarr;
              </Link>
            </div>
          </div>

          {/* 2-Columns grid on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {breadProducts.map((p) => {
              const isAdded = justAddedId === p.id;
              return (
                <div key={p.id} className="group flex flex-col justify-between bg-white rounded-3xl border border-[#EBE3D5] p-3 hover:shadow-md transition-all">
                  <div>
                    {/* Image frame on soft grey/beige background container */}
                    <div className="aspect-square bg-[#F5F3EE] rounded-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4 relative">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                      />
                    </div>

                    <div className="mt-4 px-1">
                      <h3 className="font-serif font-extrabold text-xs sm:text-base text-[#23110E] leading-tight line-clamp-1 sm:line-clamp-none">
                        {p.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-[#341E19]/70 mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 sm:pt-4 border-t border-[#EBE3D5]/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-1">
                    <button 
                      onClick={() => handleAddToCart(p)}
                      className={`text-[9px] font-bold uppercase tracking-wider px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm w-full sm:w-auto ${
                        isAdded 
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                          : "bg-[#341E19] hover:bg-[#EB4915] text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                    <Link
                      href="/products?category=bread"
                      className="text-[9px] font-extrabold uppercase tracking-widest text-[#EB4915] hover:text-[#341E19] transition-colors text-center py-1 sm:py-0"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= PASTRIES SECTION ================= */}
        <div className="space-y-8">
          <div className="flex items-end justify-between border-b border-[#EBE3D5]/60 pb-4">
            <div>
              <span className="text-[10px] font-bold text-[#EB4915] uppercase tracking-widest block mb-1">
                Delicious Treats
              </span>
              <h2 className="text-xl sm:text-3xl font-serif font-extrabold tracking-tight text-[#23110E] uppercase">
                Our Pastries
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5">
                <button 
                  aria-label="Previous Pastries"
                  className="w-8 h-8 rounded-full border border-[#EBE3D5] flex items-center justify-center text-[#341E19] hover:bg-[#341E19] hover:text-white transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button 
                  aria-label="Next Pastries"
                  className="w-8 h-8 rounded-full border border-[#EBE3D5] flex items-center justify-center text-[#341E19] hover:bg-[#341E19] hover:text-white transition-all cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <Link 
                href="/products?category=pastries"
                className="text-xs font-bold uppercase tracking-widest text-[#341E19] hover:text-[#EB4915] transition-colors border-b-2 border-transparent hover:border-[#EB4915] pb-0.5"
              >
                View All Pastries &rarr;
              </Link>
            </div>
          </div>

          {/* 2-Columns grid on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {pastryProducts.map((p) => {
              const isAdded = justAddedId === p.id;
              return (
                <div key={p.id} className="group flex flex-col justify-between bg-white rounded-3xl border border-[#EBE3D5] p-3 hover:shadow-md transition-all">
                  <div>
                    {/* Image frame on soft grey/beige background container */}
                    <div className="aspect-square bg-[#F5F3EE] rounded-2xl overflow-hidden flex items-center justify-center p-3 sm:p-4 relative">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                      />
                    </div>

                    <div className="mt-4 px-1">
                      <h3 className="font-serif font-extrabold text-xs sm:text-base text-[#23110E] leading-tight line-clamp-1 sm:line-clamp-none">
                        {p.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-[#341E19]/70 mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 sm:pt-4 border-t border-[#EBE3D5]/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-1">
                    <button 
                      onClick={() => handleAddToCart(p)}
                      className={`text-[9px] font-bold uppercase tracking-wider px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm w-full sm:w-auto ${
                        isAdded 
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                          : "bg-[#341E19] hover:bg-[#EB4915] text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                    <Link
                      href="/products?category=pastries"
                      className="text-[9px] font-extrabold uppercase tracking-widest text-[#EB4915] hover:text-[#341E19] transition-colors text-center py-1 sm:py-0"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
