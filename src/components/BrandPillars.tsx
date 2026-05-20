"use client";

import React from "react";

export default function BrandPillars() {
  return (
    <section id="about" className="py-24 bg-white select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-16">
        {/* Main Serif Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#23110E] tracking-tight">
          Simple. Honest. Every Day.
        </h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {/* Pillar 1: Baked Fresh */}
          <div className="space-y-4 text-center">
            <div className="h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 stroke-[#341E19]"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Steam lines */}
                <path d="M 52 30 Q 56 20, 52 14" />
                <path d="M 64 33 Q 68 22, 64 16" />
                <path d="M 76 30 Q 80 20, 76 14" />
                {/* Hand-drawn bread body */}
                <path d="M 32 64 C 40 54, 88 54, 96 64 C 104 70, 104 84, 96 90 C 88 94, 40 94, 32 90 C 24 84, 24 70, 32 64 Z" />
                {/* Diagonal slashes */}
                <path d="M 48 66 C 51 72, 54 78, 53 84" />
                <path d="M 63 65 C 66 71, 69 77, 68 83" />
                <path d="M 78 66 C 81 72, 84 78, 83 84" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#23110E]">
              Baked fresh every morning
            </h3>
            <p className="text-[11px] sm:text-xs text-[#341E19]/80 leading-relaxed max-w-xs mx-auto">
              Our breads are made by hand in small batches, so every loaf keeps its character and care.
            </p>
          </div>

          {/* Pillar 2: Quality Ingredients */}
          <div className="space-y-4 text-center">
            <div className="h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 stroke-[#341E19]"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Curved stalk stem */}
                <path d="M 60 95 C 60 75, 54 50, 62 25" />
                {/* Grains left side */}
                <path d="M 57 73 C 48 68, 50 58, 57 62 C 59 63, 59 69, 57 73" />
                <path d="M 56 59 C 47 54, 49 44, 56 48 C 58 49, 58 55, 56 59" />
                <path d="M 57 45 C 48 40, 50 30, 57 34 C 59 35, 59 41, 57 45" />
                {/* Grains right side */}
                <path d="M 63 68 C 72 63, 70 53, 63 57 C 61 58, 61 64, 63 68" />
                <path d="M 62 54 C 71 49, 69 39, 62 43 C 60 44, 60 50, 62 54" />
                <path d="M 63 40 C 72 35, 70 25, 63 29 C 61 30, 61 36, 63 40" />
                {/* Top single grain */}
                <path d="M 62 25 C 62 16, 67 17, 62 25 Z" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#23110E]">
              Quality Ingredients
            </h3>
            <p className="text-[11px] sm:text-xs text-[#341E19]/80 leading-relaxed max-w-xs mx-auto">
              We work with trusted local farmers and millers to ensure flavor, texture, and integrity.
            </p>
          </div>

          {/* Pillar 3: Slow Fermentation */}
          <div className="space-y-4 text-center">
            <div className="h-28 flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-24 h-24 stroke-[#341E19]"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Organic clock circle */}
                <path d="M 60 22 C 81 21, 99 39, 98 60 C 97 81, 81 98, 60 97 C 39 96, 22 81, 22 60 C 22 39, 39 23, 60 22 Z" />
                {/* Center node */}
                <circle cx="60" cy="60" r="2" fill="#341E19" />
                {/* Hands */}
                <path d="M 60 60 L 46 48" />
                <path d="M 60 60 L 78 45" />
                {/* Hour ticks */}
                <path d="M 60 27 L 60 32" />
                <path d="M 93 60 L 88 60" />
                <path d="M 60 92 L 60 87" />
                <path d="M 27 60 L 32 60" />
                {/* Diagonal ticks */}
                <path d="M 83 37 L 80 40" />
                <path d="M 83 83 L 80 80" />
                <path d="M 37 83 L 40 80" />
                <path d="M 37 37 L 40 40" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#23110E]">
              Slow Fermentation
            </h3>
            <p className="text-[11px] sm:text-xs text-[#341E19]/80 leading-relaxed max-w-xs mx-auto">
              Natural fermentation enhances depth of flavor and makes our bread easier to enjoy, every day.
            </p>
          </div>
        </div>

        {/* Story Teaser Section */}
        <div className="pt-16 mt-16 border-t border-[#EBE3D5]/60 max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">About Our Company</span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#23110E] tracking-tight">Crafting Goodness Since 2006</h3>
          <p className="text-xs sm:text-sm text-[#341E19]/80 leading-relaxed">
            Food and Food Integrated Limited commenced business in October 2006. Our premium bakes are distributed all over Abuja, Kogi, and Benue State. We are proud to be at the forefront of championing top-quality products and excellent customer service.
          </p>
          <div className="pt-2">
            <a 
              href="/about" 
              className="inline-flex items-center px-6 py-3 bg-[#341E19] text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-[#EB4915] transition-colors"
            >
              Read Our Full Story &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

