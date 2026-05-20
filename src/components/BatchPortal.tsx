"use client";

import React, { useState } from "react";
import { Layers, CheckCircle } from "lucide-react";

export default function BatchPortal() {
  const [product, setProduct] = useState("Bon White Sliced Bread");
  const [frequency, setFrequency] = useState("Daily Supply"); // Fixed linter bug on line 194 by avoiding font-semibold/font-bold clashes
  const [quantity, setQuantity] = useState(500);
  const [success, setSuccess] = useState(false);

  return (
    <section id="batch-portal" className="py-16 bg-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EBE3D5] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          {/* Configurator */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#EB4915]/10 px-3 py-1 rounded-full text-[#EB4915] text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
              Abuja Institutional Wholesale
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#23110E]">
              Batch Allocation Portal
            </h2>
            <p className="text-sm text-[#341E19]/70">
              For schools, supermarkets, and corporate retailers across Abuja.
              Allocate slots to secure your wholesale deliveries.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSuccess(true);
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#341E19] uppercase mb-2">
                    Select Item
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#EBE3D5] rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#EB4915]"
                  >
                    <option>Bon White Sliced Bread</option>
                    <option>Bon Coconut Bread</option>
                    <option>Bon Chicken Pie</option>
                    <option>Bon Sausage Roll</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#341E19] uppercase mb-2">
                    Delivery Schedule
                  </label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full bg-[#FAF6F0] border border-[#EBE3D5] rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#EB4915]"
                  >
                    <option>Daily Supply</option>
                    <option>Mon-Wed-Fri Cycle</option>
                    <option>Weekends Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#341E19] uppercase mb-2">
                  Volume Quantity:{" "}
                  <span className="text-[#EB4915] text-sm font-extrabold">
                    {quantity} units
                  </span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#EBE3D5] rounded-lg appearance-none cursor-pointer accent-[#EB4915]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="School/Organization Name"
                  className="w-full bg-[#FAF6F0] border border-[#EBE3D5] rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#EB4915]"
                />
                <input
                  type="text"
                  required
                  placeholder="Abuja Location (e.g. Wuse 2)"
                  className="w-full bg-[#FAF6F0] border border-[#EBE3D5] rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#EB4915]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#341E19] text-white hover:bg-[#EB4915] text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Request Slot Allocation
              </button>

              {success && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3 text-emerald-800">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs">
                      Request Drafted Successfully
                    </p>
                    <p className="text-[11px] text-emerald-700 mt-0.5">
                      We will evaluate scheduling options for {quantity} units
                      of {product} and contact you to lock in logistics.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Quick Stats Overlay */}
          <div className="lg:col-span-5 bg-[#341E19] text-white p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-bold border-b border-white/10 pb-4 text-[#FAF6F0]">
                Priority Services
              </h3>
              <div className="space-y-4 text-xs text-white/80">
                <p>
                  ✓ <strong>Consistent Quality:</strong> Controlled batch
                  measurements for perfect slices.
                </p>
                <p>
                  ✓ <strong>Strict Timings:</strong> Scheduled morning drop-offs
                  before class hours.
                </p>
                <p>
                  ✓ <strong>Regulatory Approval:</strong> Manufactured strictly
                  under NAFDAC hygiene protocols.
                </p>
              </div>
            </div>
            <div className="pt-6 border-t border-white/10 mt-8 text-xs text-white/50">
              Active Institutional Partners across Abuja:{" "}
              <strong>48 Schools & Supermarkets</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
