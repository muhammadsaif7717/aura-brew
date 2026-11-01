"use client";

import { useState, useEffect } from "react";
import { RestaurantClient, MenuItem } from "@/data/restaurants";
import { X, ShoppingBag, Plus, Minus, ArrowRight, CheckCircle2, Loader2, Utensils } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: RestaurantClient;
  initialItem?: MenuItem;
}

export default function OrderModal({ isOpen, onClose, client, initialItem }: OrderModalProps) {
  const [orderType, setOrderType] = useState<"delivery" | "takeaway" | "dinein">("delivery");
  const [selectedItem, setSelectedItem] = useState<MenuItem>(initialItem || client.menu[0]);
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setSelectedItem(initialItem);
      setQuantity(1);
    }
  }, [initialItem]);

  // Handle escape key to close
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

  const totalPrice = selectedItem.price * quantity;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderTypeLabel =
      orderType === "delivery"
        ? client.uiLabels.orderTypeDelivery
        : orderType === "takeaway"
        ? client.uiLabels.orderTypeTakeaway
        : `${client.uiLabels.orderTypeDinein} (Table #${tableNumber || "Self-Seated"})`;

    const locationDetail =
      orderType === "delivery"
        ? `📍 ডেলিভারি ঠিকানা: ${address}`
        : orderType === "dinein"
        ? `🪑 টেবিল নম্বর: ${tableNumber || "এখনই বসেছি"}`
        : "🏢 পিকআপ: কাউন্টার টেকঅ্যাওয়ে";

    const formattedOrderMsg = `*${client.name} — নতুন অর্ডার*
----------------------------------------
📌 অর্ডারের ধরণ: ${orderTypeLabel}
👤 কাস্টমারের নাম: ${customerName}
📱 ফোন / হোয়াটসঅ্যাপ: ${customerPhone}
${locationDetail}

🛒 *অর্ডার করা আইটেমসমূহ:*
• ${selectedItem.bengaliName} (${selectedItem.name})
  পরিমাণ: ${quantity} x ৳${selectedItem.price} = ৳${totalPrice}

${instructions ? `📝 বিশেষ নির্দেশনা: ${instructions}\n` : ""}----------------------------------------
💰 *সর্বমোট বিল:* ৳${totalPrice}
⚡ _Axiovyn Direct Platform থেকে প্রেরিত_`;

    const whatsappUrl = `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(formattedOrderMsg)}`;

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
    setCustomerName("");
    setCustomerPhone("");
    setAddress("");
    setTableNumber("");
    setInstructions("");
    setQuantity(1);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
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
              <h2 id="order-modal-title" className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
                সরাসরি খাবার অর্ডার করুন (০% কমিশন)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                অর্ডার নিশ্চিত করার পর সরাসরি হোয়াটসঅ্যাপে ডেলিভারি রসিদ পাবেন।
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              
              {/* Order Type Switcher */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  অর্ডারের ধরণ নির্বাচন করুন
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType("delivery")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      orderType === "delivery"
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    হোম ডেলিভারি
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType("takeaway")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      orderType === "takeaway"
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    টেকঅ্যাওয়ে (পিকআপ)
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType("dinein")}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      orderType === "dinein"
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    ডাইন-ইন (টেবিল)
                  </button>
                </div>
              </div>

              {/* Selected Item and Quantity */}
              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate">
                    {selectedItem.bengaliName}
                  </h4>
                  <p className="text-xs text-amber-700 font-semibold">
                    ৳{selectedItem.price} প্রতি প্লেট
                  </p>
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-amber-200 shrink-0">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-1 rounded-md text-slate-600 hover:bg-slate-100 transition active:scale-90 min-h-[32px] min-w-[32px] flex items-center justify-center cursor-pointer"
                    aria-label="পরিমাণ কমান"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-extrabold text-sm text-slate-900 w-5 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1 rounded-md text-slate-600 hover:bg-slate-100 transition active:scale-90 min-h-[32px] min-w-[32px] flex items-center justify-center cursor-pointer"
                    aria-label="পরিমাণ বাড়ান"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="order-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    required
                    placeholder="আপনার নাম লিখুন"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>

                <div>
                  <label htmlFor="order-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    মোবাইল নম্বর <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    required
                    placeholder="০১XXXXXXXXX"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>
              </div>

              {/* Conditional Location Input */}
              {orderType === "delivery" && (
                <div>
                  <label htmlFor="delivery-address" className="block text-xs font-semibold text-slate-700 mb-1">
                    সম্পূর্ণ ডেলিভারি ঠিকানা <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="delivery-address"
                    type="text"
                    required
                    placeholder="বাড়ি, রোড নম্বর, এলাকা..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>
              )}

              {orderType === "dinein" && (
                <div>
                  <label htmlFor="table-number" className="block text-xs font-semibold text-slate-700 mb-1">
                    টেবিল নম্বর (যদি বসে থাকেন)
                  </label>
                  <input
                    id="table-number"
                    type="text"
                    placeholder="যেমন: টেবিল ৪"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 min-h-[44px]"
                  />
                </div>
              )}

              <div>
                <label htmlFor="order-instructions" className="block text-xs font-semibold text-slate-700 mb-1">
                  বিশেষ নির্দেশনা (ঐচ্ছিক)
                </label>
                <input
                  id="order-instructions"
                  type="text"
                  placeholder="যেমন: ঝাল কম, চিনি ছাড়া কফি, এক্সট্রা সস..."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                />
              </div>

              {/* Total & Submit */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="font-semibold text-slate-700">সর্বমোট বিল:</span>
                  <span className="text-xl font-extrabold text-amber-700">৳{totalPrice}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-bold text-sm shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>অর্ডার প্রসেস হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-amber-100" />
                      <span>অর্ডার নিশ্চিত করুন (৳{totalPrice})</span>
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
              অর্ডার সফলভাবে প্রেরিত হয়েছে!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              ধন্যবাদ <strong>{customerName}</strong>! আপনার ৳{totalPrice} টাকার অর্ডারটি {client.name}-এর হোয়াটসঅ্যাপে পাঠানো হয়েছে। কিচেন থেকে দ্রুত কনফার্মেশন পাবেন।
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
