"use client";

import { useState, useEffect } from "react";
import { RestaurantClient } from "@/data/restaurants";
import { X, Calendar, Clock, Users, CheckCircle2, Loader2 } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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

    // Realistic optimistic loading state (Vercel Guidelines)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 700);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setDate("");
    setOccasion("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 border border-amber-200 shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto text-left animate-slide-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          aria-label="ফর্ম বন্ধ করুন"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5 pr-8">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide block">
                {client.name}
              </span>
              <h2 id="reservation-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
                {client.uiLabels.reservationHeading}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                আপনার পছন্দের সময় ও টেবিল নির্বাচন করুন, আমরা দ্রুত কনফার্ম করব।
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-3.5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="res-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="আপনার নাম লিখুন"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="res-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="০১XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="res-date" className="block text-xs font-semibold text-slate-700 mb-1">
                    রিজার্ভেশনের তারিখ
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="res-time" className="block text-xs font-semibold text-slate-700 mb-1">
                    পছন্দের সময়
                  </label>
                  <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px] bg-white"
                  >
                    <option value="দুপুর ১২:০০ - ১:০০">দুপুর ১২:০০ - ১:০০ (লাঞ্চ)</option>
                    <option value="দুপুর ১:০০ - ২:৩০">দুপুর ১:০০ - ২:৩০</option>
                    <option value="বিকাল ৫:০০ - ৬:৩০">বিকাল ৫:০০ - ৬:৩০ (ইভনিং স্ন্যাকস)</option>
                    <option value="সন্ধ্যা ৭:০০ - ৮:০০">সন্ধ্যা ৭:০০ - ৮:০০ (ডিনার)</option>
                    <option value="রাত ৮:০০ - ৯:৩০">রাত ৮:০০ - ৯:৩০</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="res-guests" className="block text-xs font-semibold text-slate-700 mb-1">
                    মেহমান সংখ্যা
                  </label>
                  <select
                    id="res-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px] bg-white"
                  >
                    <option value="১ জন">১ জন</option>
                    <option value="২ জন">২ জন (কাপল)</option>
                    <option value="৩-৪ জন">৩-৪ জন (ফ্যামিলি / ফ্রেন্ডস)</option>
                    <option value="৫-৮ জন">৫-৮ জন (বড় পার্টি)</option>
                    <option value="৮ জনের অধিক">৮ জনের অধিক (স্পেশাল ইভেন্ট)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="res-seating" className="block text-xs font-semibold text-slate-700 mb-1">
                    সিটিং পরিবেশ
                  </label>
                  <select
                    id="res-seating"
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px] bg-white"
                  >
                    <option value="কজি উইন্ডো সাইড টেবিল">উইন্ডো সাইড টেবিল</option>
                    <option value="আরামদায়ক সোফা কর্নার">সোফা কর্নার (রিলাক্স)</option>
                    <option value="সেন্ট্রাল ওপেন লাউঞ্জ">সেন্ট্রাল ওপেন লাউঞ্জ</option>
                    <option value="আউটডোর ব্যালকনি">আউটডোর ব্যালকনি / টেরেস</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="res-occasion" className="block text-xs font-semibold text-slate-700 mb-1">
                  উপলক্ষ্য বা স্পেশাল নোট (ঐচ্ছিক)
                </label>
                <input
                  id="res-occasion"
                  type="text"
                  placeholder="যেমন: জন্মদিন, বিবাহবার্ষিকী, ব্যবসায়িক মিটিং..."
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-bold text-sm shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>টেবিল বুকিং প্রসেস হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-amber-100" />
                      <span>টেবিল রিজার্ভেশন নিশ্চিত করুন</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 sm:py-8 space-y-3.5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              টেবিল রিজার্ভেশন রিকোয়েস্ট সফল!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              ধন্যবাদ <strong>{name}</strong>! {date || "আজকের"} {time} সময়ের জন্য {guests}-এর টেবিল রিজার্ভেশন {client.name}-এ পাঠানো হয়েছে।
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition active:scale-[0.98] min-h-[44px]"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
