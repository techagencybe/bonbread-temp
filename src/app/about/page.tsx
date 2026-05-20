"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Compass, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#EB4915] selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* Hero Title Section */}
      <section className="bg-[#FAF6F0] py-16 md:py-24 border-b border-[#EBE3D5] relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EB4915]/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#341E19]/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">
            Since October 2006
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#23110E] tracking-tight">
            About Our Company
          </h1>
          <p className="text-sm sm:text-base text-[#341E19]/80 max-w-2xl mx-auto leading-relaxed">
            Delivering daily artisanal delights across Abuja, Kogi, and Benue
            State with absolute integrity and exceptional care.
          </p>
        </div>
      </section>

      {/* Corporate Story & Value Grid */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24 grow w-full">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#23110E] tracking-tight">
              Food &amp; Food Integrated Limited
            </h2>
            <p className="text-sm sm:text-base text-[#341E19]/80 leading-relaxed">
              Food and Food Integrated Limited commenced business in October
              2006. Our premium breads and delectable pastries are distributed
              all over Abuja, Kogi, and Benue State.
            </p>
            <p className="text-sm sm:text-base text-[#341E19]/80 leading-relaxed">
              For over two decades, we have remained at the forefront of
              championing top-quality products, healthy baking guidelines, and
              excellent customer service. Every bake that leaves our ovens is a
              testimonial of our commitment to your family's choice.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="w-full h-auto aspect-[4/3] rounded-2xl overflow-hidden ">
              <img
                src="/bon%20bread%20images/Hero%20secton%20bread.avif"
                alt="Our bakers kneading dough"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="bg-[#FAF6F0] p-8 md:p-10 rounded-2xl border border-[#EBE3D5] space-y-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#EB4915]/10 flex items-center justify-center text-[#EB4915]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-extrabold text-[#23110E]">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-[#341E19]/80 leading-relaxed">
              To be the pacesetter in the bakery and pastry business in Nigeria,
              continuously innovating and leading with quality standards.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#FAF6F0] p-8 md:p-10 rounded-2xl border border-[#EBE3D5] space-y-4 hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#341E19]/10 flex items-center justify-center text-[#341E19]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-extrabold text-[#23110E]">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-[#341E19]/80 leading-relaxed">
              Consistently providing freshness, a rich variety of products, and
              customer-focused service using a broadly structured distribution
              network.
            </p>
          </div>
        </div>

        {/* Core Values: LIFE */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">
              What Guides Us
            </span>
            <h2 className="text-3xl font-serif font-extrabold text-[#23110E]">
              Core Values: LIFE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                letter: "L",
                title: "Loyalty",
                desc: "Fostering absolute commitment and dedication to our customers, distributors, and partners.",
                color: "bg-[#FBEBE7] text-[#EB4915]",
              },
              {
                letter: "I",
                title: "Integrity",
                desc: "Upholding complete honesty, pure ingredients, and ethical standards across our bakeries.",
                color: "bg-[#FAF6F0] text-[#341E19]",
              },
              {
                letter: "F",
                title: "Freshness",
                desc: "Guaranteeing oven-hot, aromatic, and freshly baked delights delivered daily to your locality.",
                color: "bg-[#FBEBE7] text-[#EB4915]",
              },
              {
                letter: "E",
                title: "Excellence",
                desc: "Striving for standard-setting craftsmanship and perfect quality in every single batch.",
                color: "bg-[#FAF6F0] text-[#341E19]",
              },
            ].map((v, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE3D5] rounded-xl p-6 text-center space-y-4 hover:shadow-sm transition-all hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-xl font-serif font-black ${v.color}`}
                >
                  {v.letter}
                </div>
                <h3 className="font-serif font-bold text-base text-[#23110E]">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#341E19]/70 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Overlapping Baking Tags Ribbon Collage */}
      <section className="bg-[#FFF0EB] py-16 overflow-hidden border-y border-[#F5A084]/20 relative select-none w-full">
        <div className="max-w-5xl mx-auto px-4 text-center mb-8 space-y-1.5">
          <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">
            Our Baking Assortment
          </span>
          <h4 className="text-xl sm:text-2xl font-serif font-extrabold text-[#341E19]">
            Stacked Baking Delights
          </h4>
        </div>

        <div className="flex flex-col gap-6 w-full overflow-hidden py-4">
          {/* Row 1 */}
          <div className="flex items-center gap-4 justify-center flex-nowrap min-w-max animate-scroll-left">
            {[
              {
                name: "Bon White Sliced",
                icon: "🍞",
                rotate: "rotate-3 translate-y-1",
              },
              {
                name: "Bon Coconut Bread",
                icon: "🍞",
                rotate: "-rotate-2 -translate-y-1",
              },
              {
                name: "Bon Coconut Bread Rolls",
                icon: "🥯",
                rotate: "rotate-1 translate-y-2",
              },
              {
                name: "Bon Fancy Bread",
                icon: "🍞",
                rotate: "-rotate-3 -translate-y-2",
              },
              {
                name: "Bon Premium Milk Slice",
                icon: "🍞",
                rotate: "rotate-2 translate-y-1",
              },
              {
                name: "Bon Doughnut",
                icon: "🍩",
                rotate: "-rotate-1 -translate-y-1",
              },
            ].map((tag, idx) => (
              <div
                key={idx}
                className={`bg-white px-5 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center gap-2.5 border border-[#EBE3D5]/50 select-none whitespace-nowrap text-xs sm:text-sm font-bold text-[#341E19] transform ${tag.rotate} hover:scale-105 hover:z-10 transition-transform cursor-grab active:cursor-grabbing`}
              >
                <span className="w-5 h-5 flex items-center justify-center bg-[#FAF6F0] rounded-full text-xs">
                  {tag.icon}
                </span>
                <span>{tag.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-4 justify-center flex-nowrap min-w-max animate-scroll-right">
            {[
              {
                name: "Bon Sausage Roll",
                icon: "🥖",
                rotate: "-rotate-3 -translate-y-1",
              },
              {
                name: "Bon Chicken Pie",
                icon: "🥧",
                rotate: "rotate-2 translate-y-2",
              },
              {
                name: "Bon Meat Pie",
                icon: "🥧",
                rotate: "-rotate-1 -translate-y-2",
              },
              {
                name: "Bon Fish Roll",
                icon: "🥖",
                rotate: "rotate-3 translate-y-1",
              },
              {
                name: "Bon Scotch Egg",
                icon: "🥚",
                rotate: "-rotate-2 -translate-y-1",
              },
            ].map((tag, idx) => (
              <div
                key={idx}
                className={`bg-white px-5 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center gap-2.5 border border-[#EBE3D5]/50 select-none whitespace-nowrap text-xs sm:text-sm font-bold text-[#341E19] transform ${tag.rotate} hover:scale-105 hover:z-10 transition-transform cursor-grab active:cursor-grabbing`}
              >
                <span className="w-5 h-5 flex items-center justify-center bg-[#FAF6F0] rounded-full text-xs">
                  {tag.icon}
                </span>
                <span>{tag.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
