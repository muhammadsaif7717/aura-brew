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

  const categoryLabels: Record<string, { label: string; icon: typeof Coffee }> = {
    coffee: { label: "কফি ও পানীয়", icon: Coffee },
    mains: { label: "মেইন ডিশ ও মিলস", icon: Flame },
    bakery: { label: "তাজা বেকারি", icon: Cake },
    beverages: { label: "রিফ্রেশিং বেভারেজ", icon: GlassWater },
    desserts: { label: "ডেজার্ট ও মিষ্টি", icon: Sparkles },
  };

  const availableCategories = Array.from(new Set(client.menu.map((m) => m.category)));
  const categories = [
    { id: "all", label: "সকল আইটেম", icon: Utensils },
    ...availableCategories.map((catId) => ({
      id: catId,
      label: categoryLabels[catId]?.label || catId,
      icon: categoryLabels[catId]?.icon || Sparkles,
    })),
  ];

  const filteredItems =
    activeCategory === "all"
      ? client.menu
      : client.menu.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 shadow-2xs">
            <Utensils className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>{client.uiLabels.menuSectionTitle}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {client.uiLabels.menuSectionSubtitle}
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            টাটকা প্রস্তুত করা প্রতিটি আইটেমের ছবি ও বিবরণ দেখে পছন্দের আইটেমে ক্লিক করুন। সরাসরি হোয়াটসঅ্যাপে দ্রুত পৌঁছে যাবে আপনার অর্ডার।
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-150 cursor-pointer active:scale-[0.98] min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                    isActive
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-100" : "text-amber-600"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards (Flat clean cards - No nested cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Food Image Showcase */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide shadow-xs">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-950/90 text-white font-extrabold text-sm border border-white/10 shadow-xs">
                      ৳{item.price}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {item.bengaliName}
                      </h3>
                      <p className="text-xs text-amber-700 font-semibold">{item.name}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectItemForOrder(item)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm transition-all duration-150 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px] cursor-pointer"
                >
                  <Plus className="w-4 h-4 text-amber-300" />
                  <span>অর্ডার করুন (৳{item.price})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
