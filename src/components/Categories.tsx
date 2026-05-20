"use client";

import React from "react";

const categoryItems = [
  { name: "Specials", emoji: "🥐", bg: "bg-[#DCFCE7]" }, // Green pastel
  { name: "Doughnuts", emoji: "🍩", bg: "bg-[#FCE7F3]" }, // Pink pastel
  { name: "Cookies", emoji: "🍪", bg: "bg-[#FEF9C3]" }, // Yellow pastel
  { name: "Cakes", emoji: "🧁", bg: "bg-[#E0F2FE]" }, // Blue pastel
  { name: "Breads", emoji: "🍞", bg: "bg-[#FFEDD5]" }, // Orange pastel
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs uppercase tracking-widest font-bold text-[#341E19]/60">
          Choose category
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8">
          {categoryItems.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Pastel Circle Avatar */}
              <div
                className={`w-20 h-20 rounded-full ${cat.bg} flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform duration-200 border border-white/50`}
              >
                {cat.emoji}
              </div>
              <span className="text-xs font-bold text-[#341E19] mt-3 group-hover:text-[#EB4915] transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
