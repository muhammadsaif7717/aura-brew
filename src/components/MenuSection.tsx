"use client";

import { useState } from "react";
import { RestaurantClient, MenuItem } from "@/data/restaurants";
import { Utensils, Coffee, Cake, Flame, GlassWater, Sparkles, Plus, ShoppingBag } from "lucide-react";

interface MenuSectionProps {
  client: RestaurantClient;
  onSelectItemForOrder: (item: MenuItem) => void;
}

export default function MenuSection({ client, onSelectItemForOrder }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "সব আইটেম", icon: Utensils },
    { id: "coffee", label: "কফি ও এসপ্রেসো", icon: Coffee },
    { id: "mains", label: "মেইন মিলস ও প্ল্যাটার", icon: Flame },
    { id: "bakery", label: "বেকারি ও পেস্ট্রি", icon: Cake },
    { id: "beverages", label: "কোল্ড বেভারেজ ও শেক", icon: GlassWater },
    { id: "desserts", label: "ডেজার্ট ও কেক", icon: Sparkles },
  ];

  const filteredItems =
    activeCategory === "all"
      ? client.menu
      : client.menu.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 md:py-28 bg-white border-t border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
            <Utensils className="w-3.5 h-3.5 text-amber-600" />
            <span>আমাদের সিগনেচার ডিজিটাল মেনু</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            সুস্বাদু খাবার ও পানীয়ের চিত্রশালা
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            টাটকা প্রস্তুত করা প্রতিটি খাবারের ছবি ও বিস্তারিত দেখে পছন্দের আইটেমে ক্লিক করুন। সরাসরি হোয়াটসঅ্যাপে দ্রুত পৌঁছে যাবে আপনার অর্ডার।
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition cursor-pointer active:scale-95 ${
                  isActive
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/25"
                    : "bg-slate-50 text-slate-700 hover:bg-amber-50/80 hover:text-amber-900 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-200" : "text-amber-600"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mouth-Watering Menu Cards with Real Food Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-amber-900/10 shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Top Image Showcase */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[10px] font-extrabold text-amber-950 bg-amber-400 px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3.5">
                    <span className="text-base font-black text-white bg-slate-900/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-xl font-mono shadow-md">
                      ৳ {item.price}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.bengaliName}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono block mt-0.5">
                      {item.name}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Kitchen Fresh
                </span>

                <button
                  type="button"
                  onClick={() => onSelectItemForOrder(item)}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-sm shadow-amber-600/25 transition active:scale-95 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>অর্ডার করুন</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Atmosphere Gallery Preview */}
        <div className="mt-16 pt-12 border-t border-amber-900/10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase">
              আউটলেটের জীবন্ত পরিবেশ ও ডাইনিং
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              আমাদের ক্যাফে ও খাবারের কিছু মুহূর্ত
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {client.gallery.map((g, idx) => (
              <div
                key={idx}
                className="relative h-40 sm:h-48 rounded-2xl overflow-hidden group shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.url}
                  alt={g.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-white font-medium truncate">
                    {g.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fast Delivery Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-amber-950 text-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              🚀 ফুড অ্যাপের অতিরিক্ত ৩০% কমিশন বাঁচান!
            </h4>
            <p className="text-xs sm:text-sm text-amber-300/80 mt-1">
              আমাদের অফিসিয়াল হোয়াটসঅ্যাপে সরাসরি অর্ডার করলে পেয়ে যাচ্ছেন রেস্টুরেন্টের খাঁটি রেট এবং দ্রুততম ডেলিভারি।
            </p>
          </div>

          <a
            href={`https://wa.me/${client.whatsapp}?text=${encodeURIComponent(`Hello ${client.name}, I would like to order food directly from your online menu.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95 shrink-0 inline-flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-slate-950" />
            <span>সরাসরি হোয়াটসঅ্যাপে কথা বলুন</span>
          </a>
        </div>

      </div>
    </section>
  );
}
