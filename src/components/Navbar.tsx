"use client";

import { useState, useEffect } from "react";
import { RestaurantClient } from "@/data/restaurants";
import { Utensils, Calendar, ShoppingBag, Menu, X, Phone, Clock } from "lucide-react";

interface NavbarProps {
  client: RestaurantClient;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export default function Navbar({ client, onOpenOrder, onOpenReservation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Backdrop Blur Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200 lg:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 transition-all">
        {/* Top Info Bar */}
        <div className="bg-amber-950 text-amber-200 text-[11px] py-1.5 px-4 hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{client.openingHours}</span>
              </span>
              <span>•</span>
              <span className="text-amber-300 font-medium">{client.area}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct WhatsApp Ordering Available (0% App Commission)</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                  {client.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full uppercase">
                  {client.businessType}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                {client.area.split(",")[0]} • Dhaka
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#menu" className="hover:text-amber-600 transition">
              ফুড মেনু
            </a>
            <a href="#features" className="hover:text-amber-600 transition">
              কেন আমরা সেরা
            </a>
            <a href="#reviews" className="hover:text-amber-600 transition">
              কাস্টমার রিভিউ
            </a>
            <a href="#location" className="hover:text-amber-600 transition">
              ঠিকানা ও সময়
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 transition cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              <span>টেবিল বুকিং</span>
            </button>

            <button
              onClick={onOpenOrder}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-600/25 transition cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-200" />
              <span>হোয়াটসঅ্যাপ অর্ডার</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-5 space-y-4 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition"
              >
                🍽️ ডিজিটাল ফুড মেনু
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition"
              >
                ✨ কেন আমরা সেরা
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition"
              >
                ⭐ কাস্টমারদের মতামত
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-700 transition"
              >
                📍 ঠিকানা ও সময়সূচি
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-amber-200" />
                <span>সরাসরি হোয়াটসঅ্যাপে অর্ডার করুন</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>টেবিল প্রি-বুকিং রিকোয়েস্ট</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
