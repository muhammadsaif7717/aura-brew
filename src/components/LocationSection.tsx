"use client";

import { RestaurantClient } from "@/data/restaurants";
import { MapPin, Clock, Phone, MessageSquare, ExternalLink, Navigation } from "lucide-react";

interface LocationSectionProps {
  client: RestaurantClient;
}

export default function LocationSection({ client }: LocationSectionProps) {
  const gmapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${client.name} ${client.address}`
  )}`;

  return (
    <section id="location" className="py-20 md:py-28 bg-slate-50/70 border-t border-amber-900/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
                ঠিকানা ও যোগাযোগের মাধ্যম
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3">
                আমাদের আউটলেটে সরাসরি আসুন
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                পরিবার বা বন্ধুদের নিয়ে চমৎকার খাবারের স্বাদ নিতে চলে আসুন আমাদের ঠিকানায়।
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    আউটলেটের ঠিকানা
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {client.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    খোলা থাকার সময়সূচি
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {client.openingHours}
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    সরাসরি হেল্পলাইন ও বুকিং
                  </h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 font-mono">
                    {client.phone}
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps External Action Button */}
            <a
              href={gmapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>গুগল ম্যাপে লোকেশন ও ডিরেকশন দেখুন</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

          </div>

          {/* Right Visual Map Presentation */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-amber-950 p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-amber-900">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

              <div className="relative space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono text-amber-300 uppercase tracking-wider">
                    Interactive Local Store Presence
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Dining
                  </span>
                </div>

                <div className="h-64 sm:h-72 rounded-2xl bg-slate-900/90 border border-white/10 p-6 flex flex-col justify-between relative group">
                  {/* Subtle Grid Design */}
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {client.name}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                      {client.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="text-amber-300 font-medium font-mono">
                      {client.phone}
                    </span>
                    <a
                      href={gmapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <p className="text-xs text-slate-400 text-center sm:text-left">
                  💡 পার্কিং সুবিধা ও পরিবার নিয়ে বসার জন্য নিরিবিলি পারিবারিক জোন রয়েছে।
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
