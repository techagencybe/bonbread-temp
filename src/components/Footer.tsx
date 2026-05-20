"use client";

import React from "react";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#1C0D0A] text-[#FAF6F0] pt-24 pb-12 border-t border-[#EBE3D5]/10 select-none relative overflow-hidden">
      {/* Decorative Subtle Background Texture / Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#341E19]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Top Branding Section: Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* Column 1: Brand Wordmark & Narrative (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/bon%20bread%20images/logo.avif"
                alt="Bon Bread Logo"
                className="h-16 w-auto object-contain select-none filter brightness-95 contrast-105"
              />
              <div className="border-l border-[#EBE3D5]/20 pl-4">
                <h3 className="font-serif font-black text-2xl tracking-tight text-white uppercase leading-none">
                  Bon Bread
                </h3>
                <span className="text-[9px] text-[#EB4915] font-black uppercase tracking-widest block mt-1.5">
                  A Food &amp; Food Brand
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#FAF6F0]/70 leading-relaxed max-w-md">
              Food &amp; Food Integrated Limited commenced commercial baking operations in October 2006. 
              Over the last two decades, we have remained at the forefront of the bakery and pastry industry 
              in Nigeria, consistently providing unparalleled freshness, nutritional variety, and customer-focused 
              service to households across the Federal Capital Territory and surrounding states.
            </p>

            {/* Social Channels with premium ring styles and robust inline SVGs */}
            <div className="flex items-center space-x-3.5 pt-2">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  ),
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "#",
                  label: "Twitter",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF6F0]/60 hover:bg-[#EB4915] hover:text-white hover:border-[#EB4915] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Directory Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#EB4915]">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs text-[#FAF6F0]/70">
              <li>
                <a href="/" className="hover:text-[#EB4915] hover:pl-1 transition-all duration-200 block">
                  Home Catalog
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-[#EB4915] hover:pl-1 transition-all duration-200 block">
                  Product Store
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#EB4915] hover:pl-1 transition-all duration-200 block">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/#batch-portal" className="hover:text-[#EB4915] hover:pl-1 transition-all duration-200 block">
                  Wholesale Portal
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#EB4915] hover:pl-1 transition-all duration-200 block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics & Wholesale Scope (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#EB4915]">
              Logistics Scope
            </h4>
            <p className="text-xs text-[#FAF6F0]/70 leading-relaxed">
              Our structured logistics network coordinates daily fresh distributions serving leading supermarkets, 
              estate stores, hotels, and academic institutions across:
            </p>
            <ul className="space-y-2 text-xs font-semibold text-white/80">
              <li>• FCT Abuja</li>
              <li>• Kogi State</li>
              <li>• Benue State</li>
            </ul>
          </div>

          {/* Column 4: Contact Details (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-white">
              Corporate Desk
            </h4>
            <div className="space-y-4 text-xs text-[#FAF6F0]/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EB4915] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Food &amp; Food Integrated, <br />
                  Garki Municipal Area, <br />
                  Abuja, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#EB4915] shrink-0" />
                <a href="tel:+2348091234567" className="hover:text-[#EB4915] transition-colors">
                  +234 809 123 4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EB4915] shrink-0" />
                <a href="mailto:info@foodandfood.com" className="hover:text-[#EB4915] transition-colors">
                  info@foodandfood.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Line: Thin Elegant Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#EBE3D5]/10 to-transparent" />

        {/* Bottom Section: Corporate Compliance & Standards */}
        <div className="pt-2 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* NAFDAC & Safety Certification Marks */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#FAF6F0]/40">
            <span className="text-[#EB4915] font-black">NAFDAC Certified</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Food Safety Audited</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>RC: 654321</span>
          </div>

          {/* Legal / Copyright Bar */}
          <div className="flex items-center gap-2 text-xs text-[#FAF6F0]/40">
            <ShieldCheck className="w-4 h-4 text-[#EB4915]" />
            <p>
              {`© ${currentYear} Food & Food Integrated Ltd. Premium Bakery Division. All rights reserved.`}
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
