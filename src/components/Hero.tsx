"use client";

import { RestaurantClient } from "@/data/restaurants";
import { ShoppingBag, Calendar, Star, Clock, ArrowRight, Utensils, CheckCircle2 } from "lucide-react";

interface HeroProps {
  client: RestaurantClient;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export default function Hero({ client, onOpenOrder, onOpenReservation }: HeroProps) {
  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden culinary-pattern border-b border-amber-900/10">
      
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] warm-glow pointer-events-none rounded-full blur-3xl opacity-60" />
      <div className="absolute top-8 right-8 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Category & Commission Pill */}
        <div className="flex justify-center sm:justify-start mb-5 sm:mb-6">
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200/90 shadow-2xs text-xs text-amber-950">
            <span className="flex items-center gap-1.5 text-amber-700 font-bold text-[11px] uppercase tracking-wide">
              <Utensils className="w-3.5 h-3.5 text-amber-600" />
              <span>{client.category}</span>
            </span>
            <span className="text-amber-300">•</span>
            <span className="text-slate-600 font-medium">{client.specialHighlight}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left animate-slide-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
              {client.heroHeadline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto sm:mx-0">
              {client.heroSubheadline}
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-slate-700 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>০% কমিশন — সরাসরি রেস্টুরেন্ট রেট</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>হট অ্যান্ড ফ্রেশ দ্রুত ডেলিভারি</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>কাউন্টার টেকঅ্যাওয়ে ও ডাইন-ইন সুবিধা</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>হোয়াটসঅ্যাপে সরাসরি তাৎক্ষণিক অর্ডার রসিদ</span>
              </div>
            </div>

            {/* CTAs (Vercel Guidelines compliant) */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3">
              <button
                onClick={onOpenOrder}
                className="group flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-all duration-150 shadow-xs hover:shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 min-h-[44px] cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-amber-100 transition-transform group-hover:scale-110" />
                <span>{client.uiLabels.orderCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenReservation}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 min-h-[44px] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span>{client.uiLabels.reservationCta}</span>
              </button>
            </div>

            {/* Micro Highlights & Stats */}
            <div className="pt-4 sm:pt-5 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto sm:mx-0 border-t border-slate-200 text-left">
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1 text-amber-500 mb-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">৪.৯ / ৫.০</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">কাস্টমার রেটিং</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <span className="font-extrabold text-emerald-600 text-xs sm:text-sm block mb-0.5">০% কমিশন</span>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">অরিজিনাল মেনু রেট</p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <span className="font-extrabold text-slate-900 text-xs sm:text-sm block mb-0.5">৩০-৪০ মি.</span>
                <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">গড় ডেলিভারি সময়</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image & Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-slate-950 text-white overflow-hidden shadow-lg border border-amber-900/20 relative group">
              
              {/* High-Resolution Hero Visual Photography */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={client.heroImage}
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Live Kitchen Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{client.uiLabels.kitchenStatus}</span>
                  </span>
                </div>

                {/* Free Delivery / Hot Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wide shadow-xs">
                    তাজা ও গরম
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-sm font-extrabold text-white">
                      {client.name}
                    </h3>
                    <p className="text-[11px] text-amber-200 font-medium">
                      {client.area}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10">
                    {client.openingHours.split("•")[0]}
                  </span>
                </div>
              </div>

              {/* Bottom Quick Order Teaser Bar */}
              <div className="p-4 bg-slate-900/90 flex items-center justify-between gap-3 border-t border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    স্পেশাল অফার
                  </span>
                  <span className="text-xs font-bold text-amber-400">
                    সরাসরি অর্ডারে কোনো ফুড অ্যাপের বাড়তি চার্জ নেই
                  </span>
                </div>

                <button
                  onClick={onOpenOrder}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-xs font-bold transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px] cursor-pointer"
                >
                  মেনু দেখুন
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
