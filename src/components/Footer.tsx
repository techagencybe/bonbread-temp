"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#341E19] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Newsletter bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <span className="text-[10px] text-[#EB4915] font-bold uppercase tracking-wider">
              Join our newsletter
            </span>
            <h3 className="text-xl font-serif mt-1">
              Subscribe for daily delivery schedules
            </h3>
          </div>
          <div className="w-full md:max-w-sm flex bg-white/5 rounded-full p-1 border border-white/10">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent text-xs text-white px-4 py-2 outline-none w-full"
            />
            <button className="bg-[#EB4915] text-white text-xs font-bold uppercase px-6 py-2.5 rounded-full hover:bg-white hover:text-[#341E19] transition-all whitespace-nowrap">
              Submit
            </button>
          </div>
        </div>

        {/* Directory links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-white/70">
          <div className="space-y-3">
            <span className="text-[#EB4915] font-bold uppercase tracking-wider block">
              Bon Bread
            </span>
            <p className="leading-relaxed">
              Providing high quality pastries and artisan loaves for Abuja
              families and establishments.
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">
              Quick Links
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-[#EB4915] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-[#EB4915] transition-colors"
                >
                  Product Catalog
                </a>
              </li>
              <li>
                <a
                  href="/#batch-portal"
                  className="hover:text-[#EB4915] transition-colors"
                >
                  Batch Booking
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">
              Pastry Lineup
            </span>
            <ul className="space-y-2">
              <li>Bon Sausage Roll</li>
              <li>Bon Meat Pie</li>
              <li>Bon Coconut Bread</li>
            </ul>
          </div>
          <div className="space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">
              Bakery Contact
            </span>
            <p>📍 Garki Municipal Area, Abuja, Nigeria</p>
            <p>📞 +234 809 123 4567</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-[11px] text-white/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Bon Bread Bakery. Abuja, Nigeria.</p>
          <p className="uppercase tracking-widest text-[9px] text-[#EB4915] font-bold">
            The Family Choice
          </p>
        </div>
      </div>
    </footer>
  );
}
