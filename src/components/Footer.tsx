"use client";

import { RestaurantClient } from "@/data/restaurants";
import { Utensils, Phone, Clock, MapPin, ArrowUp, ShoppingBag } from "lucide-react";

interface FooterProps {
  client: RestaurantClient;
  onOpenOrder: () => void;
}

export default function Footer({ client, onOpenOrder }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 text-white flex items-center justify-center font-bold">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-lg font-black text-white">
                {client.name}
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              {client.tagline}. টাটকা উপাদান ও আন্তরিক আতিথেয়তায় আপনাদের সেবায় নিয়োজিত।
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kitchen & Dine-in Active</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              দ্রুত লিঙ্ক
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition">
                  ডিজিটাল ফুড মেনু
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition">
                  কেন আমরা সেরা
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition">
                  কাস্টমার রিভিউ
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition">
                  ঠিকানা ও যোগাযোগের তথ্য
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              খোলা থাকার সময়
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{client.openingHours}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{client.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{client.phone}</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct Order CTA */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              অনলাইন পার্সেল ও ডেলিভারি
            </h4>
            <p className="text-xs text-slate-400">
              ফুড অ্যাপের বেশি দাম এড়িয়ে সরাসরি কিচেন রেটে ঘরে খাবার পেতে হোয়াটসঅ্যাপে অর্ডার করুন।
            </p>
            <button
              onClick={onOpenOrder}
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-200" />
              <span>হোয়াটসঅ্যাপে খাবার অর্ডার</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar with Back to Top & Axiovyn Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            © 2026 {client.name}. All rights reserved. • High-Speed Web Platform Engineered by{" "}
            <a
              href="https://developer-saif.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-2 transition"
            >
              MD. SAIF ISLAM
            </a>{" "}
            (Axiovyn Technologies)
          </p>

          {/* Smooth Back to Top Button */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition cursor-pointer text-xs font-semibold group shadow-sm active:scale-95"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <span>Back to Top</span>
            <div className="w-5 h-5 rounded-md bg-slate-800 group-hover:bg-amber-600 transition flex items-center justify-center text-slate-300 group-hover:text-white">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
