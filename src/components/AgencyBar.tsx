"use client";

import { useState } from "react";
import { RESTAURANT_CLIENTS, RestaurantClient } from "@/data/restaurants";
import { Check, Copy, Eye, Utensils } from "lucide-react";

interface AgencyBarProps {
  currentClient: RestaurantClient;
  onSelectClient: (id: string) => void;
  isClientMode: boolean;
  setIsClientMode: (val: boolean) => void;
}

export default function AgencyBar({
  currentClient,
  onSelectClient,
  isClientMode,
  setIsClientMode,
}: AgencyBarProps) {
  const [copied, setCopied] = useState(false);

  // In client view mode, hide completely
  if (isClientMode) {
    return null;
  }

  const handleCopyCleanClientLink = () => {
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/?client=${currentClient.id}&view=client`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePreviewAsClient = () => {
    if (typeof window !== "undefined") {
      window.open(`/?client=${currentClient.id}&view=client`, "_blank");
    }
  };

  return (
    <aside aria-label="Restaurant Agency Switcher" className="bg-amber-950 text-amber-100 border-b border-amber-900/60 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2.5 text-xs">
        
        {/* Left Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-amber-300 flex items-center gap-1.5 text-xs uppercase tracking-wide">
            <Utensils className="w-3.5 h-3.5 text-amber-400" />
            <span>Restaurant Live Pitch Hub</span>
          </span>
          <span className="text-amber-200/70 hidden lg:inline">
            • যেকোনো রেস্টুরেন্টে সুইচ করুন অথবা ক্লায়েন্টকে ডেমো পাঠাতে লিংক কপি করুন
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <label htmlFor="restaurant-switcher" className="sr-only">রেস্টুরেন্ট নির্বাচন করুন</label>
          <select
            id="restaurant-switcher"
            value={currentClient.id}
            onChange={(e) => onSelectClient(e.target.value)}
            className="max-w-[170px] xs:max-w-[210px] sm:max-w-[260px] bg-amber-900/90 text-white text-xs rounded-xl px-2.5 py-1.5 border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer font-medium truncate min-h-[38px]"
          >
            {RESTAURANT_CLIENTS.map((restaurant, index) => (
              <option key={restaurant.id} value={restaurant.id}>
                {index + 1}. {restaurant.name} ({restaurant.area.split(",")[0]})
              </option>
            ))}
          </select>

          {/* Clean Client Link Copy */}
          <button
            onClick={handleCopyCleanClientLink}
            className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 active:scale-[0.98] text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer shrink-0 min-h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            title="ক্লায়েন্টকে পাঠানোর মতো ক্লিন লিংক কপি করুন (এতে এই বারটি থাকবে না)"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>ক্লায়েন্ট লিংক কপি</span>
              </>
            )}
          </button>

          {/* Test in New Tab as Client */}
          <button
            onClick={handlePreviewAsClient}
            className="flex items-center gap-1.5 bg-amber-900/80 hover:bg-amber-800 text-amber-200 hover:text-white px-2.5 py-1.5 rounded-xl text-xs border border-amber-800 transition active:scale-[0.98] cursor-pointer shrink-0 min-h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            title="নতুন ট্যাবে দেখুন ক্লায়েন্ট কেমন দেখবে"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">ক্লায়েন্ট ভিউ</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
