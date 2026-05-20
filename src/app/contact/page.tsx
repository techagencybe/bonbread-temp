"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#EB4915] selection:text-white flex flex-col justify-between">
      <Navbar />

      {/* Hero Title Section */}
      <section className="bg-[#FAF6F0] py-16 md:py-24 border-b border-[#EBE3D5] relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EB4915]/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#341E19]/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-[#23110E] tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-[#341E19]/80 max-w-2xl mx-auto leading-relaxed">
            Have questions about our artisanal baking process, wholesale distributions, or want to place a custom order? Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 grow w-full space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Orders & Sales */}
          <div className="bg-[#FAF6F0] border border-[#EBE3D5] rounded-2xl p-8 space-y-5 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#EB4915]/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>
            <div className="w-12 h-12 rounded-xl bg-[#EB4915]/10 flex items-center justify-center text-[#EB4915]">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-extrabold text-[#23110E]">
                Orders &amp; Sales
              </h3>
              <p className="text-xs text-[#341E19]/60">
                Call or email our sales team for prompt orders.
              </p>
            </div>
            <div className="space-y-3.5 text-sm text-[#341E19]/80">
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#EB4915] tracking-wider">Phone Desk 1</span>
                <a href="tel:+2348186040408" className="hover:text-[#EB4915] font-semibold transition-colors">
                  +234 818 604 0408
                </a>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#EB4915] tracking-wider">Phone Desk 2</span>
                <a href="tel:+2349063557679" className="hover:text-[#EB4915] font-semibold transition-colors">
                  +234 906 355 7679
                </a>
              </div>
              <div className="flex flex-col space-y-1 pt-1.5 border-t border-[#EBE3D5]">
                <span className="text-[10px] uppercase font-bold text-[#EB4915] tracking-wider">Email Address</span>
                <a href="mailto:sales@bonbread.com" className="hover:text-[#EB4915] font-semibold transition-colors break-all">
                  sales@bonbread.com
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Open Hours */}
          <div className="bg-[#FAF6F0] border border-[#EBE3D5] rounded-2xl p-8 space-y-5 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#341E19]/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>
            <div className="w-12 h-12 rounded-xl bg-[#341E19]/10 flex items-center justify-center text-[#341E19]">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-extrabold text-[#23110E]">
                Open Hours
              </h3>
              <p className="text-xs text-[#341E19]/60">
                When our bakers are molding fresh creations.
              </p>
            </div>
            <div className="space-y-4 text-sm text-[#341E19]/80 pt-2">
              <div className="flex justify-between items-center py-2 border-b border-[#EBE3D5]/50">
                <span className="font-semibold">Monday - Saturday</span>
                <span className="text-xs bg-[#341E19] text-white px-2.5 py-1 rounded-full font-medium">7am - 20pm</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold">Sunday</span>
                <span className="text-xs bg-[#EB4915]/10 text-[#EB4915] px-2.5 py-1 rounded-full font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-[#FAF6F0] border border-[#EBE3D5] rounded-2xl p-8 space-y-5 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#EB4915]/5 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-125"></div>
            <div className="w-12 h-12 rounded-xl bg-[#EB4915]/10 flex items-center justify-center text-[#EB4915]">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-extrabold text-[#23110E]">
                Main Bakery Address
              </h3>
              <p className="text-xs text-[#341E19]/60">
                Stop by to experience oven-fresh baking.
              </p>
            </div>
            <p className="text-sm text-[#341E19]/80 leading-relaxed font-semibold">
              Plot 503, Atiku Abubakar Way, <br />
              Idu Industrial Area, <br />
              Jabi Airport Road, <br />
              Abuja, FCT
            </p>
          </div>

        </div>

        {/* Action Blocks: Quick Connect Buttons */}
        <div className="bg-[#FAF6F0]/50 border border-[#EBE3D5] rounded-3xl p-8 md:p-12 text-center space-y-8 select-none">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#EB4915] uppercase tracking-widest block">
              Quick Connect
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#23110E]">
              Reach Our Baking Desks Instantly
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Email Us CTA */}
            <a
              href="mailto:sales@bonbread.com"
              className="w-full sm:w-auto px-8 py-4 bg-[#EB4915] hover:bg-[#EB2216] text-white font-bold rounded-full transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>

            {/* Call Us Desk 1 CTA */}
            <a
              href="tel:+2348186040408"
              className="w-full sm:w-auto px-8 py-4 bg-[#341E19] hover:bg-[#23110E] text-white font-bold rounded-full transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EB4915]" />
              <span>Call Us: Desk 1</span>
            </a>

            {/* Call Us Desk 2 CTA */}
            <a
              href="tel:+2349063557679"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-[#EBE3D5] text-[#341E19] hover:bg-[#FAF6F0] font-bold rounded-full transition-all hover:scale-105 shadow-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EB4915]" />
              <span>Call Us: Desk 2</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
