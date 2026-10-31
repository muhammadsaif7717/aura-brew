"use client";

import { useState, useEffect } from "react";
import { RestaurantClient, MenuItem } from "@/data/restaurants";
import { X, ShoppingBag, Plus, Minus, ArrowRight, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

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
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setSelectedItem(initialItem);
      setQuantity(1);
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const totalPrice = selectedItem.price * quantity;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

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
                <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
                <span>{client.uiLabels.orderCta}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {client.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                পছন্দের আইটেম ও ঠিকানা দিয়ে সরাসরি {client.name}-এর হোয়াটসঅ্যাপে অর্ডার পাঠান।
              </p>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              
              {/* Order Type Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  অর্ডারের ধরণ সিলেক্ট করুন:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType("delivery")}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer text-center truncate ${
                      orderType === "delivery"
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {client.uiLabels.orderTypeDelivery.split("(")[0]}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType("takeaway")}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer text-center truncate ${
                      orderType === "takeaway"
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {client.uiLabels.orderTypeTakeaway.split("(")[0]}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType("dinein")}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer text-center truncate ${
                      orderType === "dinein"
                        ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                    }`}
                  >
                    {client.uiLabels.orderTypeDinein.split("(")[0]}
                  </button>
                </div>
              </div>

              {/* Item Selection & Quantity */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                      বাছাইকৃত মেনু আইটেম
                    </span>
                    <select
                      value={selectedItem.id}
                      onChange={(e) => {
                        const found = client.menu.find((m) => m.id === e.target.value);
                        if (found) setSelectedItem(found);
                      }}
                      className="bg-transparent text-sm font-bold text-slate-900 focus:outline-none cursor-pointer mt-0.5"
                    >
                      {client.menu.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.bengaliName} — ৳{m.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center gap-2 bg-white rounded-xl border border-amber-200 p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-bold text-sm px-1 text-slate-900">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-amber-200/60 text-xs font-bold text-slate-800">
                  <span>বিল এস্টিমেট:</span>
                  <span className="text-base text-amber-700 font-mono font-black">
                    ৳ {totalPrice}
                  </span>
                </div>
              </div>

              {/* Customer Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="যেমন: তানভীর আহমেদ"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    ফোন বা হোয়াটসঅ্যাপ নম্বর *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="017XX-XXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Conditional Location Input */}
              {orderType === "delivery" && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    সম্পূর্ণ ডেলিভারি ঠিকানা *
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="বাড়ি নং, রোড নং, এরিয়া (যেমন: খিলগাঁও / ধানমন্ডি)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              )}

              {orderType === "dinein" && (
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    আপনার টেবিল নম্বর (যদি বসে থাকেন)
                  </label>
                  <input
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder="যেমন: Table 4 / Corner Booth"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              )}

              {/* Special Cooking Instructions */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  স্পেশাল রান্নার নির্দেশনা (ঐচ্ছিক)
                </label>
                <input
                  type="text"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="যেমন: অতিরিক্ত ঝাল কম, চিনি ছাড়া বা এক্সট্রা চিজ"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-sm shadow-lg shadow-amber-600/30 transition active:scale-95 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <ShoppingBag className="w-4 h-4 text-amber-200" />
                <span>হোয়াটসঅ্যাপে অর্ডার নিশ্চিত করুন (৳{totalPrice})</span>
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
              হোয়াটসঅ্যাপে অর্ডার পাঠানো হচ্ছে!
            </h3>

            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              স্বয়ংক্রিয়ভাবে {client.name}-এর হোয়াটসঅ্যাপে আপনার অর্ডার বিবরণ প্রস্তুত হয়েছে। শুধু মেসেজটি সেন্ড করুন।
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

