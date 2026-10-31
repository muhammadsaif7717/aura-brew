"use client";

import { useState } from "react";
import { RESTAURANT_CLIENTS, RestaurantClient } from "@/data/restaurants";
import { Check, Copy, Sparkles, Eye, Share2, Utensils } from "lucide-react";

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

  // If in client view mode (view=client), COMPLETELY HIDE the bar
  // The client sees 100% legitimate restaurant/cafe website with ZERO agency UI
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
    <aside aria-label="Agency Controls" className="bg-slate-950 text-slate-100 border-b border-amber-900/40 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm">
        
        {/* Left Indicator */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-semibold text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Agency Pitch Mode:
          </span>
          <span className="text-slate-400 hidden sm:inline">
            ক্যাফে/রেস্টুরেন্ট পরিবর্তন করুন এবং ক্লায়েন্টের জন্য ক্লিন লিঙ্ক কপি করুন
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={currentClient.id}
            onChange={(e) => onSelectClient(e.target.value)}
            className="bg-slate-900 text-white text-xs rounded-lg px-3 py-1.5 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer font-medium"
          >
            {RESTAURANT_CLIENTS.map((client, index) => (
              <option key={client.id} value={client.id}>
                {index + 1}. {client.name} ({client.area.split(",")[0]})
              </option>
            ))}
          </select>

          {/* Clean Client Link Copy */}
          <button
            onClick={handleCopyCleanClientLink}
            className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition active:scale-95 cursor-pointer"
            title="ক্লায়েন্টকে পাঠানোর মতো ক্লিন লিংক কপি করুন (এতে এই বারটি সম্পূর্ণ উধাও থাকবে)"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>ক্লিন লিংক কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>ক্লায়েন্ট শেয়ার লিংক</span>
              </>
            )}
          </button>

          {/* Test in New Tab as Client */}
          <button
            onClick={handlePreviewAsClient}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg text-xs border border-slate-700 transition cursor-pointer"
            title="নতুন ট্যাবে দেখুন ক্লায়েন্ট কেমন দেখবে"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">ক্লায়েন্ট ভিউ টেস্ট</span>
          </button>
        </div>

      </div>
    </aside>
  );
}
