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
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-200 lg:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 transition-all">
        {/* Top Info Bar */}
        <div className="bg-amber-950 text-amber-200 text-xs py-2 px-4 hidden sm:block border-b border-amber-900/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{client.openingHours}</span>
              </span>
              <span className="text-amber-800">|</span>
              <span className="text-amber-200 font-medium">{client.area}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{client.uiLabels.commissionNoticeTitle}</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors truncate max-w-[200px] xs:max-w-[240px] sm:max-w-sm md:max-w-md">
                  {client.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                  {client.category}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-semibold truncate">
                {client.area.split(",")[0]} • Dhaka
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600" aria-label="Main Navigation">
            <a
              href="#menu"
              className="hover:text-amber-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-md"
            >
              মেনু আইটেম
            </a>
            <a
              href="#features"
              className="hover:text-amber-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-md"
            >
              কেন আমরা সেরা
            </a>
            <a
              href="#reviews"
              className="hover:text-amber-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-md"
            >
              কাস্টমার রিভিউ
            </a>
            <a
              href="#location"
              className="hover:text-amber-700 transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded-md"
            >
              লোকেশন ও সময়সূচি
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 min-h-[44px] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-700 shrink-0" />
              <span>টেবিল বুকিং</span>
            </button>

            <button
              onClick={onOpenOrder}
              className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-amber-100 shrink-0" />
              <span>সরাসরি অর্ডার করুন</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Accessible Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-amber-100 bg-white/98 backdrop-blur-md px-4 py-5 space-y-4 animate-slide-up shadow-xl">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                ডিজিটাল ফুড মেনু
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                কেন সরাসরি অর্ডার করবেন
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                ভোজনরসিকদের মতামত
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl hover:bg-amber-50 hover:text-amber-800 transition-colors"
              >
                রেস্টুরেন্টের লোকেশন ও সময়
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-bold text-sm shadow-xs transition-all min-h-[44px]"
              >
                <ShoppingBag className="w-4 h-4 text-amber-100" />
                <span>সরাসরি খাবার অর্ডার করুন</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 font-semibold text-sm transition-all min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>টেবিল রিজার্ভেশন বুকিং</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
