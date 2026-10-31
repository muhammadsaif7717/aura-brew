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
            সুস্বাদু খাবার ও পানীয়ের তালিকা
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            পছন্দের আইটেমে ক্লিক করে সহজেই সরাসরি হোয়াটসঅ্যাপে অর্ডার বা পার্সেল নিশ্চিত করুন। কোনো অ্যাপ ডাউনলোড করার ঝামেলা নেই।
          </p>
        </div>

        {/* Category Tabs */}
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
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                    : "bg-slate-50 text-slate-700 hover:bg-amber-50/80 hover:text-amber-900 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-200" : "text-amber-600"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.bengaliName}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono block">
                      {item.name}
                    </span>
                  </div>

                  {item.badge && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* Price & Quick Order Action */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">মূল্য</span>
                  <span className="text-xl font-black text-slate-900 font-mono">
                    ৳ {item.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectItemForOrder(item)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-sm shadow-amber-600/20 transition active:scale-95 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>অর্ডার করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Delivery Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-amber-950 text-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
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
