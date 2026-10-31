"use client";

import { useState } from "react";
import { RestaurantClient } from "@/data/restaurants";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: RestaurantClient;
}

export default function ReservationModal({ isOpen, onClose, client }: ReservationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("সন্ধ্যা ৭:০০ - ৮:০০");
  const [guests, setGuests] = useState("২ জন");
  const [seating, setSeating] = useState("কজি উইন্ডো সাইড টেবিল");
  const [occasion, setOccasion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const bookingMsg = `*${client.name} — নতুন টেবিল রিজার্ভেশন রিকোয়েস্ট*
----------------------------------------
👤 অতিথির নাম: ${name}
📱 ফোন নম্বর: ${phone}
📅 তারিখ: ${date || "আজকের জন্য"}
⏰ সময়: ${time}
👥 মেহমান সংখ্যা: ${guests}
🪑 সিটিং প্রেফারেন্স: ${seating}
${occasion ? `🎉 উপলক্ষ্য / বিশেষ অনুরোধ: ${occasion}\n` : ""}----------------------------------------
⚡ _Axiovyn Direct Dining Platform থেকে বুকিং রিকোয়েস্ট_`;

    const whatsappUrl = `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(bookingMsg)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-amber-200 shadow-2xl relative max-h-[92vh] overflow-y-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-2">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{client.uiLabels.reservationCta}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {client.uiLabels.reservationHeading}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {client.category.includes("Cafe") || client.category.includes("Bakery")
                  ? "পছন্দের নিরিবিলি টেবিল বা কজি কর্নার আগে থেকেই সহজে বুক করে রাখুন।"
                  : "বিশেষ ডিনার, জন্মদিন বা পারিবারিক আড্ডার জন্য ঝামেলা ছাড়াই আগে থেকে টেবিল নিশ্চিত করুন।"}
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="যেমন: আসিফ চৌধুরী"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    ফোন নম্বর *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="017XX-XXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    তারিখ *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    সময় স্লট *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer font-medium"
                  >
                    <option value="দুপুর ১:০০ - ২:০০ (লাঞ্চ)">দুপুর ১:০০ - ২:০০ (লাঞ্চ)</option>
                    <option value="দুপুর ২:০০ - ৩:০০ (লাঞ্চ)">দুপুর ২:০০ - ৩:০০ (লাঞ্চ)</option>
                    <option value="বিকাল ৫:০০ - ৬:০০ (স্ন্যাক্স/কফি)">বিকাল ৫:০০ - ৬:০০ (কফি টাইম)</option>
                    <option value="সন্ধ্যা ৭:০০ - ৮:০০ (ডিনার)">সন্ধ্যা ৭:০০ - ৮:০০ (ডিনার)</option>
                    <option value="রাত ৮:০০ - ৯:০০ (ডিনার)">রাত ৮:০০ - ৯:০০ (ডিনার)</option>
                    <option value="রাত ৯:০০ - ১০:০০ (লেট ডিনার)">রাত ৯:০০ - ১০:০০ (লেট ডিনার)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    অতিথি সংখ্যা *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer font-medium"
                  >
                    <option value="১-২ জন (কাপল/সিঙ্গেল)">১-২ জন (কাপল টেবিল)</option>
                    <option value="৩-৪ জন (ছোট ফ্যামিলি/ফ্রেন্ডস)">৩-৪ জন (ফ্যামিলি)</option>
                    <option value="৫-৮ জন (গ্রুপ গ্যাদারিং)">৫-৮ জন (গ্রুপ টেবিল)</option>
                    <option value="১০+ জন (পার্টি সেলিব্রেশন)">১০+ জন (বড় পার্টি)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    সিটিং পরিবেশ
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer font-medium"
                  >
                    <option value="কজি উইন্ডো সাইড টেবিল">🌿 উইন্ডো সাইড ভিউ</option>
                    <option value="নিরিবিলি কর্নার বুথ">🪑 নিরিবিলি কর্নার বুথ</option>
                    <option value="ওপেন রুফটপ / গার্ডেন">☕ ওপেন রুফটপ / ক্যাফে এরিয়া</option>
                    <option value="সেলিব্রেশন ডেকোরেটেড টেবিল">🎂 স্পেশাল সেলিব্রেশন টেবিল</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  কোনো বিশেষ অনুষ্ঠান বা উপলক্ষ্য? (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  placeholder="যেমন: বার্থডে সারপ্রাইজ, কাপল অ্যানিভার্সারি বা মিটিং"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-sm shadow-lg shadow-amber-600/30 transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>{client.uiLabels.reservationCta} নিশ্চিত করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900">
              টেবিল রিজার্ভেশন প্রস্তুত!
            </h3>

            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              স্বয়ংক্রিয়ভাবে হোয়াটসঅ্যাপে আপনার টেবিল বুকিং মেসেজ তৈরি হয়েছে। রেস্টুরেন্ট টিম মেসেজটি পেয়ে সাথে সাথে আপনার টেবিল নিশ্চিত করবে।
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition cursor-pointer"
            >
              উইন্ডো বন্ধ করুন
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

