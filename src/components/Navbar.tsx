"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Home, Info, Phone, Plus, Minus, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const productDatabase: Record<string, { price: number; category: string; desc: string }> = {
  "white-sliced": { price: 1200, category: "bread", desc: "Perfect slices, soft crumb, and golden crust. Baked fresh daily." },
  "coconut-bread": { price: 1500, category: "bread", desc: "Enriched with real toasted coconut flakes for a rich tropical flavor." },
  "coconut-rolls": { price: 1600, category: "bread", desc: "Sweet, pillowy soft rolls infused with coconut goodness." },
  "fancy-bread": { price: 1400, category: "bread", desc: "Signature braided family recipe, golden-baked with care." },
  "slicebread": { price: 1300, category: "bread", desc: "Enriched milk sliced loaf with a super soft, dense crumb." },
  "sausage-roll": { price: 700, category: "pastry", desc: "Golden, flaky puff pastry wrapping a perfectly seasoned sausage center." },
  "chicken-pie": { price: 1000, category: "pastry", desc: "Creamy shredded chicken and vegetable filling inside a rich buttery crust." },
  "meat-pie": { price: 900, category: "pastry", desc: "Savory minced beef, carrots, and potatoes inside a classic shortcrust pastry." },
  "doughnut": { price: 600, category: "pastry", desc: "Soft, pillowy ring doughnut with a classic light sugary glaze." },
  "fish-roll": { price: 800, category: "pastry", desc: "Crisp outer crust filled with flaky spiced fish and herbs." },
  "scotch-egg": { price: 900, category: "pastry", desc: "Savory sausage meat coating a hard-boiled egg, breaded and fried to crisp perfection." }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("bonbread-cart");
      if (stored) {
        try {
          setCart(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse cart storage:", e);
        }
      }
    }
  }, []);

  // Listen for global custom add-to-cart events
  useEffect(() => {
    const handleAddToCart = (e: Event) => {
      const customEvent = e as CustomEvent;
      const productInput = customEvent.detail;
      const resolvedInfo = productDatabase[productInput.id] || { price: 1000, category: "bread", desc: "" };
      
      const product: Product = {
        id: productInput.id,
        name: productInput.name,
        desc: productInput.desc || resolvedInfo.desc,
        price: productInput.price || resolvedInfo.price,
        category: productInput.category || resolvedInfo.category,
        img: productInput.img
      };

      setCart((prev) => {
        const existing = prev.find((item) => item.product.id === product.id);
        let updated;
        if (existing) {
          updated = prev.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updated = [...prev, { product, quantity: 1 }];
        }
        localStorage.setItem("bonbread-cart", JSON.stringify(updated));
        
        // Sync custom event
        window.dispatchEvent(new CustomEvent("cart-sync", { detail: updated }));
        return updated;
      });
      setIsCartOpen(true);
    };

    const handleCartSync = (e: Event) => {
      const customEvent = e as CustomEvent;
      setCart(customEvent.detail);
    };

    // Navbar toggle trigger (e.g. from Products page query param or floating trigger)
    const handleToggleCart = () => {
      setIsCartOpen((prev) => !prev);
    };

    window.addEventListener("add-to-cart", handleAddToCart);
    window.addEventListener("cart-sync", handleCartSync);
    window.addEventListener("toggle-cart", handleToggleCart);

    return () => {
      window.removeEventListener("add-to-cart", handleAddToCart);
      window.removeEventListener("cart-sync", handleCartSync);
      window.removeEventListener("toggle-cart", handleToggleCart);
    };
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const updated = prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("bonbread-cart", JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent("cart-sync", { detail: updated }));
      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item.product.id !== id);
      localStorage.setItem("bonbread-cart", JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent("cart-sync", { detail: updated }));
      return updated;
    });
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const whatsappCheckout = () => {
    const itemsText = cart
      .map(
        (item) =>
          `• ${item.product.name} (Qty: ${item.quantity}) - ${formatCurrency(
            item.product.price * item.quantity
          )}`
      )
      .join("\n");
    const message = `Hello Bon Bread Bakery! I'd like to place an order:\n\n${itemsText}\n\n*Total Order Value: ${formatCurrency(
      cartTotal
    )}*\n\nPlease confirm logistics and delivery parameters!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/2348091234567?text=${encoded}`, "_blank");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center h-20 overflow-visible relative cursor-pointer select-none">
            <img
              src="/bon%20bread%20images/logo.avif"
              alt="Bon Bread Logo"
              className="h-28 w-auto object-contain drop-shadow-md z-50 translate-y-3.5"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-[#341E19]">
            <a href="/" className="hover:text-[#EB4915] transition-colors">
              Home
            </a>
            <a
              href="/products"
              className="hover:text-[#EB4915] transition-colors"
            >
              Product
            </a>
            <a
              href="/about"
              className="hover:text-[#EB4915] transition-colors"
            >
              About us
            </a>
            <a href="/contact" className="hover:text-[#EB4915] transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Elements */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 text-[#341E19] hover:text-[#EB4915] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Cart"
              className="p-2 text-[#341E19] hover:text-[#EB4915] transition-colors relative cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#EB4915] rounded-full animate-pulse"></span>
              )}
            </button>
            <a
              href="#batch-portal"
              className="hidden lg:inline-flex items-center bg-[#341E19] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#EB4915] transition-all"
            >
              Wholesale Portal
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[#341E19]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#EBE3D5] px-4 py-4 space-y-3">
            <a
              href="/"
              className="block py-2 text-base font-semibold text-[#341E19]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/products"
              className="block py-2 text-base font-semibold text-[#341E19]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </a>
            <a
              href="/about"
              className="block py-2 text-base font-semibold text-[#341E19]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About us
            </a>
            <a
              href="/contact"
              className="block py-2 text-base font-semibold text-[#341E19]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Global Mobile Bottom Navigation Bar - FIXED absolute bottom of viewport */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-[#EBE3D5] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-6 py-2.5 flex justify-between items-center safe-bottom">
        <a href="/" className="flex flex-col items-center gap-1 text-[#341E19]/70 hover:text-[#EB4915] active:text-[#EB4915] transition-colors cursor-pointer select-none">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Home</span>
        </a>
        <a href="/products" className="flex flex-col items-center gap-1 text-[#341E19]/70 hover:text-[#EB4915] active:text-[#EB4915] transition-colors cursor-pointer select-none">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Catalog</span>
        </a>
        <a href="/about" className="flex flex-col items-center gap-1 text-[#341E19]/70 hover:text-[#EB4915] active:text-[#EB4915] transition-colors cursor-pointer select-none">
          <Info className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">About</span>
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center gap-1 text-[#341E19]/70 hover:text-[#EB4915] active:text-[#EB4915] transition-colors cursor-pointer select-none"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Contact</span>
        </a>
      </div>

      {/* Global Floating Shopping Cart Trigger (Visible on all pages when cart is not empty) */}
      {cartCount > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-20 right-6 md:bottom-6 md:right-6 p-4 rounded-full bg-[#EB4915] text-white shadow-xl hover:bg-[#EB2216] transition-all hover:scale-110 z-40 cursor-pointer flex items-center gap-2 select-none"
          aria-label="Open Cart Drawer"
        >
          <ShoppingCart className="w-5 h-5 animate-pulse" />
          <span className="bg-white text-[#EB4915] font-black text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        </button>
      )}

      {/* Global Shopping Cart Offcanvas Drawer Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop blur */}
          <div 
            className="absolute inset-0 bg-[#341E19]/40 backdrop-blur-sm transition-opacity cursor-pointer" 
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between z-10">
            {/* Header */}
            <div className="p-6 border-b border-[#EBE3D5] flex items-center justify-between bg-[#FAF6F0]">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-[#EB4915]" />
                <h2 className="font-serif font-extrabold text-base text-[#23110E]">Your Bakes Basket</h2>
                <span className="bg-[#EB4915] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
                  {cartCount} items
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full text-[#341E19] hover:bg-[#EBE3D5] cursor-pointer"
                aria-label="Close Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Product Item List */}
            <div className="grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <span className="text-4xl block">🧺</span>
                  <h3 className="font-serif font-bold text-sm text-[#23110E]">Your basket is empty</h3>
                  <p className="text-xs text-[#341E19]/60 max-w-xs mx-auto">
                    Head over to our Catalog and fill your basket with our daily oven-fresh delights!
                  </p>
                  <a 
                    href="/products" 
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block bg-[#341E19] hover:bg-[#EB4915] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    View Catalog
                  </a>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4 border-b border-[#EBE3D5]/40 pb-4">
                    <div className="w-16 h-16 bg-[#FAF6F0] rounded-xl flex items-center justify-center p-2 shrink-0">
                      <img
                        src={item.product.img}
                        alt={item.product.name}
                        className="w-full h-full object-contain select-none"
                      />
                    </div>
                    <div className="grow space-y-1.5">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif font-extrabold text-xs text-[#23110E] leading-tight">
                          {item.product.name}
                        </h4>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-xs text-red-500 hover:text-red-700 cursor-pointer border-none bg-transparent p-0 outline-none"
                          aria-label="Remove Item"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#EB4915]">
                          {formatCurrency(item.product.price)}
                        </span>
                        {/* Quantity Adjuster */}
                        <div className="flex items-center border border-[#EBE3D5] rounded-full bg-[#FAF6F0] px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 text-[#341E19]/60 hover:text-[#EB4915] cursor-pointer"
                            aria-label="Decrease Quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-extrabold px-2.5 text-[#341E19]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 text-[#341E19]/60 hover:text-[#EB4915] cursor-pointer"
                            aria-label="Increase Quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & WhatsApp Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#EBE3D5] bg-[#FAF6F0] space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#341E19]">
                  <span>Basket Subtotal</span>
                  <span className="text-base text-[#EB4915] font-extrabold">
                    {formatCurrency(cartTotal)}
                  </span>
                </div>
                <button
                  onClick={whatsappCheckout}
                  className="w-full py-4 bg-[#EB4915] hover:bg-[#EB2216] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  Send Order via WhatsApp &rarr;
                </button>
                <p className="text-[10px] text-[#341E19]/50 text-center leading-relaxed">
                  Slot reservations and wholesale logistic routes will be finalized with the bakery administrator via chat.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
