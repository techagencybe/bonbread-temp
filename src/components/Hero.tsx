"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white min-h-[calc(100vh-5rem)] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column: Extremely Clean & Bold */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              {/* <span className="text-xs font-bold uppercase tracking-widest text-[#EB4915]">
                Abuja, Nigeria
              </span> */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#23110E] tracking-tight leading-[1.05]">
                Made in Nigeria <br />
                Freshly Baked Products
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#341E19]/80 leading-relaxed max-w-md">
              Discover the simplicity of daily baked goodness. Handcrafted with
              care, sourced locally, and distributed fresh across Abuja.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#products"
                className="px-8 py-4 bg-[#EB4915] text-white text-xs uppercase tracking-widest font-bold rounded-md hover:bg-[#EB2216] transition-colors text-center"
              >
                Buy Bread
              </a>
            </div>
          </div>

          {/* Right Column: Clean Landscape Standalone Image */}
          <div className="lg:col-span-7">
            <div className="w-full h-auto aspect-[16/10] overflow-hidden rounded-lg">
              <img
                src="/bon%20bread%20images/Hero%20secton%20bread.avif"
                alt="Fresh artisanal bread assortment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
