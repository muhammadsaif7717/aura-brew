"use client";

import { RestaurantClient } from "@/data/restaurants";
import { Sparkles, Check, X, ShieldCheck, HeartHandshake, UtensilsCrossed, ChefHat } from "lucide-react";

interface WhyChooseUsProps {
  client: RestaurantClient;
}

export default function WhyChooseUs({ client }: WhyChooseUsProps) {
  return (
    <section id="features" className="py-20 md:py-28 bg-slate-50/70 border-t border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
            <ChefHat className="w-3.5 h-3.5 text-amber-600" />
            <span>আমাদের বৈশিষ্ট্য ও অঙ্গীকার</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            কেন {client.name} ভোজনরসিকদের প্রথম পছন্দ?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            খাবারের গুণমান, স্বাস্থ্যসম্মত কিচেন ও অতিথিপরায়ণ সেবায় আমরা আপসহীন।
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {client.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-900/10 shadow-xs hover:border-amber-400 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 font-bold mb-5">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison: App Order vs Direct WhatsApp Website */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-xl overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase">
              স্মার্ট ফুড অর্ডারিং সুবিধা
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              ফুড অ্যাপের বেশি দাম বনাম আমাদের সরাসরি ওয়েবসাইট
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Third Party Apps */}
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200">
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-3">
                ❌ থার্ড-পার্টি ফুড অ্যাপে অর্ডার
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2 text-rose-800">
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>মেনু প্রাইস ১৫% থেকে ২৫% বেশি রাখা হয়</span>
                </li>
                <li className="flex items-center gap-2 text-rose-800">
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>অতিরিক্ত প্ল্যাটফর্ম ও ডেলিভারি ফি যুক্ত হয়</span>
                </li>
                <li className="flex items-center gap-2 text-rose-800">
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>রান্না সম্পর্কে বিশেষ কোনো নির্দেশনা দেওয়া যায় না</span>
                </li>
                <li className="flex items-center gap-2 text-rose-800">
                  <X className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>দেরিতে খাবার ডেলিভারি ও ঠান্ডা হওয়ার ঝুঁকি</span>
                </li>
              </ul>
            </div>

            {/* Direct Axiovyn Site Order */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-300 ring-2 ring-emerald-500/10">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-3">
                ✅ আমাদের অফিসিয়াল হোয়াটসঅ্যাপ প্ল্যাটফর্মে
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
                <li className="flex items-center gap-2 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>রেস্টুরেন্টের অরিজিনাল সাশ্রয়ী মূল্য</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>জিরো শতাংশ অতিরিক্ত অ্যাপ কমিশন</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>সরাসরি শেফ ও ম্যানেজারের সাথে কাস্টম নোট দেওয়ার সুযোগ</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>তাৎক্ষণিক কিচেন থেকে গরম গরম দ্রুত ডেলিভারি</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
