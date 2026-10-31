"use client";

import { RestaurantClient } from "@/data/restaurants";
import { Sparkles, ShoppingBag, Calendar, Star, Clock, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

interface HeroProps {
  client: RestaurantClient;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export default function Hero({ client, onOpenOrder, onOpenReservation }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden culinary-pattern border-b border-amber-900/10">
      
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] warm-glow pointer-events-none rounded-full blur-3xl opacity-70" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Feature Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-amber-200 shadow-xs backdrop-blur-md text-xs text-amber-900">
            <span className="flex items-center gap-1.5 text-amber-600 font-bold font-mono text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{client.businessType}</span>
            </span>
            <span className="text-amber-300 hidden sm:inline">•</span>
            <span className="text-slate-600 font-medium hidden sm:inline">{client.specialHighlight}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {client.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {client.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenOrder}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-600/30 transition-all hover:scale-102 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-amber-200" />
                <span>সরাসরি হোয়াটসঅ্যাপে খাবার অর্ডার</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-amber-50/80 text-amber-950 font-semibold text-sm sm:text-base border border-amber-200 transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>টেবিল প্রি-বুকিং</span>
              </button>
            </div>

            {/* Micro Highlights & Stats */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 border-t border-amber-900/10 text-left">
              <div className="p-3 rounded-xl bg-white/80 border border-amber-100 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-extrabold text-slate-900 text-sm">৪.৯ / ৫.০</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">গুগল কাস্টমার রেটিং</p>
              </div>

              <div className="p-3 rounded-xl bg-white/80 border border-amber-100 shadow-2xs">
                <span className="font-extrabold text-emerald-600 text-sm block mb-0.5">০% কমিশন</span>
                <p className="text-[11px] text-slate-500 font-medium">ডাইরেক্ট ক্যাফে প্রাইস</p>
              </div>

              <div className="p-3 rounded-xl bg-white/80 border border-amber-100 shadow-2xs">
                <span className="font-extrabold text-slate-900 text-sm block mb-0.5">৩০-৪০ মি.</span>
                <p className="text-[11px] text-slate-500 font-medium">গড় ডেলিভারি সময়</p>
              </div>
            </div>

          </div>

          {/* Right Visual Food Card / Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 text-white p-6 sm:p-8 shadow-2xl border border-amber-800/40 relative overflow-hidden group">
              
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/20 rounded-full blur-2xl" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono font-semibold">
                  Today&apos;s Featured Highlights
                </span>
                <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Kitchen Active
                </span>
              </div>

              {/* Sample Food Cards */}
              <div className="mt-5 space-y-3.5">
                {client.menu.slice(0, 3).map((item, idx) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{item.bengaliName}</h4>
                        {item.badge && (
                          <span className="text-[9px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-sm font-extrabold text-amber-400 block font-mono">
                        ৳ {item.price}
                      </span>
                      <button
                        onClick={onOpenOrder}
                        className="text-[11px] text-amber-200 hover:text-white underline cursor-pointer"
                      >
                        অর্ডার
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Address Reminder */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate max-w-[220px]">{client.address}</span>
                </div>
                <span className="font-bold text-amber-400">Open Now</span>
              </div>

            </div>

            {/* Floating Floating Badge */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 bg-white text-slate-900 px-4 py-2.5 rounded-2xl border border-amber-200 shadow-xl flex items-center gap-3 animate-float-slow">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="text-left text-xs">
                <span className="font-bold block">1-Click WhatsApp Order</span>
                <span className="text-slate-500 text-[10px]">কোনো ফুড অ্যাপ ফি নেই</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
