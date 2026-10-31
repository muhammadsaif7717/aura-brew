"use client";

import { RestaurantClient } from "@/data/restaurants";
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";

interface ReviewsSectionProps {
  client: RestaurantClient;
}

export default function ReviewsSection({ client }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white border-t border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>ভেরিফাইড কাস্টমার রেটিং</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            অতিথিদের প্রিয় অভিজ্ঞতা ও মতামত
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            গুগল ও সোশ্যাল মিডিয়ায় ভোজনরসিকদের ভালোবাসায় আমরা সিক্ত।
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {client.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-amber-50/40 rounded-3xl p-7 sm:p-8 border border-amber-200/80 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {rev.date}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Favorite Dish */}
              <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-xs text-slate-500">{rev.area}</span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-amber-800 font-mono block uppercase">অর্ডারকৃত খাবার</span>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/80 px-2.5 py-0.5 rounded-lg">
                    {rev.dish}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

