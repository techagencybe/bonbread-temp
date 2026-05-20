"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import BrandPillars from "@/components/BrandPillars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#EB4915] selection:text-white">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <BrandPillars />
      <Footer />
    </div>
  );
}
