"use client";

import { RestaurantClient } from "@/data/restaurants";
import { ShoppingBag, Calendar } from "lucide-react";

interface FloatingCtaProps {
  client: RestaurantClient;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export default function FloatingCta({
  client,
  onOpenOrder,
  onOpenReservation,
}: FloatingCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <button
          onClick={onOpenReservation}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs active:scale-[0.98] transition-all shadow-2xs min-h-[44px] cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>টেবিল বুকিং</span>
        </button>

        <button
          onClick={onOpenOrder}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
        >
          <ShoppingBag className="w-4 h-4 text-amber-100" />
          <span>খাবার অর্ডার</span>
        </button>
      </div>
    </div>
  );
}
