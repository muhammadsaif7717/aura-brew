export type BusinessCategory =
  | "Bakery & Cafe"
  | "Cafe"
  | "Cafe / Beverage"
  | "Cafe / Coffee Shop"
  | "Cafe / Restaurant"
  | "Restaurant / Cafe";

export interface MenuItem {
  id: string;
  name: string;
  bengaliName: string;
  category: "all" | "coffee" | "bakery" | "mains" | "beverages" | "desserts";
  description: string;
  price: number;
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface ReviewItem {
  name: string;
  area: string;
  rating: number;
  comment: string;
  dish: string;
  date: string;
}

export interface UILabels {
  audiencePraise: string;
  menuSectionTitle: string;
  menuSectionSubtitle: string;
  orderCta: string;
  reservationCta: string;
  reservationHeading: string;
  galleryTitle: string;
  gallerySubtitle: string;
  kitchenStatus: string;
  commissionNoticeTitle: string;
  commissionNoticeDesc: string;
  orderTypeDelivery: string;
  orderTypeTakeaway: string;
  orderTypeDinein: string;
}

export interface RestaurantClient {
  id: string;
  name: string;
  bengaliName: string;
  category: BusinessCategory;
  area: string;
  address: string;
  phone: string;
  whatsapp: string;
  openingHours: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  specialHighlight: string;
  heroImage: string;
  accentGradient: string;
  primaryColor: string;
  minOrderDelivery: number;
  uiLabels: UILabels;
  features: {
    title: string;
    desc: string;
    icon: string;
  }[];
  gallery: {
    url: string;
    caption: string;
  }[];
  menu: MenuItem[];
  reviews: ReviewItem[];
}

export const RESTAURANT_CLIENTS: RestaurantClient[] = [
  // 1. Bakery & Cafe (Cooper's)
  {
    id: "coopers-taltola",
    name: "Cooper's Bakery & Cafe",
    bengaliName: "কুপার্স বেকারি অ্যান্ড ক্যাফে",
    category: "Bakery & Cafe",
    area: "Taltola, Khilgaon, Dhaka",
    address: "385/A, Shahid Baki Road, Taltola, Khilgaon, Dhaka",
    phone: "01713-079659",
    whatsapp: "8801713079659",
    openingHours: "প্রতিদিন: সকাল ৮:০০ - রাত ১১:০০",
    tagline: "তাজা বেকারি, কারিগরি পেস্ট্রি এবং স্পেশালিটি কফির ঐতিহ্যবাহী ঠিকানা",
    heroHeadline: "তাজা বেকড পেস্ট্রি ও প্রিমিয়াম কফির এক অনন্য অভিজ্ঞতা",
    heroSubheadline: "খিলগাঁও তালতলায় সকালের ফ্রেশ বাটার ক্রোয়াসাঁ, ডেনিশ পেস্ট্রি, কাস্টমাইজড সেলিব্রেশন কেক আর সুগন্ধি এসপ্রেসো কফি উপভোগ করুন ক্যাফেতে বা সরাসরি ১-ক্লিক হোম ডেলিভারিতে।",
    specialHighlight: "প্রতিদিন সকালে ওভেনে বেক হওয়া ১০০% ফ্রেশ পেস্ট্রি ও কেক",
    heroImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-amber-600 via-orange-500 to-yellow-500",
    primaryColor: "#d97706",
    minOrderDelivery: 300,
    uiLabels: {
      audiencePraise: "তাজা বেকারি ও কফিপ্রেমীদের প্রিয় ঠিকানা",
      menuSectionTitle: "তাজা বেকারি, পেস্ট্রি ও কফির তালিকা",
      menuSectionSubtitle: "ওভেন থেকে নামানো গরম পেস্ট্রি, প্রিমিয়াম কেক স্লাইস ও বারিস্তা কফি দেখে সরাসরি হোয়াটসঅ্যাপে পার্সেল বা ডেলিভারি নিন।",
      orderCta: "বেকারি ও কফি অর্ডার",
      reservationCta: "ক্যাফে সিটিং রিজার্ভেশন",
      reservationHeading: "কুপার্স ক্যাফে লাউঞ্জে সিট বুক করুন",
      galleryTitle: "আমাদের বেকারি ও ক্যাফের কিছু মুহূর্ত",
      gallerySubtitle: "প্রতিদিনের ফ্রেশ বেকিং, কেক ডেকোরেশন ও স্নিগ্ধ ক্যাফে অ্যাম্বিয়েন্স।",
      kitchenStatus: "Bakery Oven Active",
      commissionNoticeTitle: "🚀 ফুড অ্যাপের বাড়তি চার্জ ছাড়া তাজা বেকারি নিন!",
      commissionNoticeDesc: "অ্যাপে বেশি দাম না দিয়ে আমাদের সরাসরি হোয়াটসঅ্যাপে অর্ডার করলে পাচ্ছেন ওভেন-ফ্রেশ রেট এবং সুরক্ষিত ডেলিভারি।",
      orderTypeDelivery: "🏠 হোম ডেলিভারি",
      orderTypeTakeaway: "🛍️ বেকারি পার্সেল টেকঅ্যাওয়ে",
      orderTypeDinein: "☕ ক্যাফেতে বসে খাওয়া",
    },
    features: [
      {
        title: "ফ্রেশ ওভেন বেকড",
        desc: "প্রতিদিন সকালে খাঁটি বাটার ও প্রিমিয়াম উপাদানে তাজা বেকিং।",
        icon: "ChefHat",
      },
      {
        title: "কাস্টম ইভেন্ট কেক",
        desc: "বার্থডে, ওয়েডিং ও যেকোনো উদযাপনের বিশেষ কাস্টমাইজড ডিজাইন।",
        icon: "Cake",
      },
      {
        title: "১-ক্লিক হোয়াটসঅ্যাপ অর্ডার",
        desc: "ফুড অ্যাপের অতিরিক্ত কমিশন ছাড়াই সরাসরি তাজা বেকারি ডেলিভারি।",
        icon: "ShoppingBag",
      },
      {
        title: "আরামদায়ক ক্যাফে লাউঞ্জ",
        desc: "ফ্রি ওয়াইফাই ও শান্ত পরিবেশে কফি উপভোগ করার পারফেক্ট সিটিং।",
        icon: "Coffee",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", caption: "ফ্রেশ ফ্রেঞ্চ ক্রোয়াসাঁ" },
      { url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", caption: "বেলজিয়ান চকলেট ফাজ কেক" },
      { url: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80", caption: "বারিস্তা স্পেশাল ক্যাপুচিনো" },
      { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", caption: "ক্যাফে লাউঞ্জ অ্যাম্বিয়েন্স" },
    ],
    menu: [
      {
        id: "c1",
        name: "Artisan Butter Croissant",
        bengaliName: "আর্টিসান বাটার ক্রোয়াসাঁ",
        category: "bakery",
        description: "খাস্তা সোনালী ক্রাস্ট এবং খাঁটি ফ্রেঞ্চ বাটারের স্তরবিশিষ্ট তাজা ক্রোয়াসাঁ।",
        price: 180,
        badge: "Morning Fresh",
        popular: true,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "c2",
        name: "Belgian Chocolate Fudge Cake",
        bengaliName: "বেলজিয়ান চকলেট ফাজ কেক (স্লাইস)",
        category: "desserts",
        description: "রিচ ডার্ক চকলেট ও মোলায়েম ক্রিমের স্তরবিশিষ্ট ক্লাসিক কেক স্লাইস।",
        price: 240,
        badge: "Best Seller",
        popular: true,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "c3",
        name: "Hazelnut Cappuccino",
        bengaliName: "হ্যাজেলনাট ক্যাপুচিনো",
        category: "coffee",
        description: "ডাবল শট এসপ্রেসো, ফোমি স্টিমড মিল্ক এবং সুগন্ধি রোস্টেড হ্যাজেলনাট সিরাপ।",
        price: 220,
        badge: "Barista Pick",
        popular: true,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "c4",
        name: "Blueberry Danish Pastry",
        bengaliName: "ব্লুবেরি ডেনিশ পেস্ট্রি",
        category: "bakery",
        description: "ক্রিস্পি বাটার ফ্লেকি পেস্ট্রির মাঝে রসালো ব্লুবেরি কম্পোট ও কাস্টার্ড।",
        price: 210,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "c5",
        name: "Iced Caramel Macchiato",
        bengaliName: "আইসড ক্যারামেল মাকিয়াটো",
        category: "beverages",
        description: "কোল্ড ফ্রেশ মিল্ক, রিচ ভ্যানিলা এবং ওপরে ড্রপ করা এসপ্রেসো ও গোল্ডেন ক্যারামেল।",
        price: 260,
        popular: true,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "c6",
        name: "Red Velvet Cream Cheese Slice",
        bengaliName: "রেড ভেলভেট ক্রিম চিজ স্লাইস",
        category: "desserts",
        description: "নরম লাল স্পঞ্জ এবং খাঁটি ফিলাডেলফিয়া ক্রিম চিজের স্তর।",
        price: 250,
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "তাহমিনা চৌধুরী",
        area: "খিলগাঁও তিলপাপাড়া",
        rating: 5,
        comment: "কুপার্সের কেকের স্বাদ বহু বছর ধরেই অতুলনীয়। তালতলার এই ব্রাঞ্চের কফি আর ক্রোয়াসাঁ সকালে দারুণ লাগে!",
        dish: "বাটার ক্রোয়াসাঁ ও কফি",
        date: "৩ দিন আগে",
      },
      {
        name: "মাহিনুল ইসলাম",
        area: "গোড়ান",
        rating: 5,
        comment: "হোয়াটসঅ্যাপে অর্ডার দিয়ে মাত্র ৩০ মিনিটেই ফ্রেশ বার্থডে কেক ডেলিভারি পেয়েছি। সার্ভিস অসাধারণ!",
        dish: "বেলজিয়ান চকলেট কেক",
        date: "১ সপ্তাহ আগে",
      },
    ],
  },

  // 2. Pure Cafe (Ozz Cafe) - ZERO heavy food/burgers! Strictly Coffee, Brews & Cafe Treats!
  {
    id: "ozz-cafe-dhanmondi",
    name: "Ozz Cafe",
    bengaliName: "অজ ক্যাফে",
    category: "Cafe",
    area: "Shankar, Dhanmondi, Dhaka",
    address: "House 133, Road 9/A (New), Captain Road, Shankar, Dhanmondi, Dhaka",
    phone: "01611-501076",
    whatsapp: "8801611501076",
    openingHours: "প্রতিদিন: দুপুর ১২:০০ - রাত ১০:৩০",
    tagline: "ধানমন্ডির কফিপ্রেমী ও আড্ডাপ্রিয় তরুণদের ফেভারিট ক্যাফে কর্নার",
    heroHeadline: "খাঁটি এসপ্রেসো, থিক শেক আর আড্ডার শান্ত ক্যাফে স্পট",
    heroSubheadline: "শংকরের প্রাণকেন্দ্রে মনমাতানো আইসড আমেরিকান, ক্যারামেল মাকিয়াটো, অ্যাফোগাতো আর গরম বেলজিয়ান ওয়াফেল নিয়ে ধানমন্ডির কফি আড্ডার সেরা ঠিকানা।",
    specialHighlight: "১০০% প্রিমিয়াম ডার্ক রোস্টেড কফি ও স্পেশালিটি ব্রু",
    heroImage: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-amber-800 via-amber-700 to-yellow-600",
    primaryColor: "#92400e",
    minOrderDelivery: 250,
    uiLabels: {
      audiencePraise: "কফিপ্রেমী ও ক্যাফে আড্ডাপ্রিয়দের প্রথম পছন্দ",
      menuSectionTitle: "স্পেশালিটি কফি, শেক ও ক্যাফে মেনু",
      menuSectionSubtitle: "বারিস্টার নিখুঁত হাতের এসপ্রেসো শট, কোল্ড ব্রু, ফ্রাপুচিনো এবং নরম ওয়াফেল—এক ক্লিকে হোয়াটসঅ্যাপে অর্ডার বা টেকঅ্যাওয়ে করুন।",
      orderCta: "কফি ও ক্যাফে অর্ডার",
      reservationCta: "ক্যাফে টেবিল বুকিং",
      reservationHeading: "অজ ক্যাফেতে আড্ডার টেবিল রিজার্ভ করুন",
      galleryTitle: "আমাদের ক্যাফে আড্ডার কিছু মুহূর্ত",
      gallerySubtitle: "কফি বিনসের সুবাস, শান্ত মিউজিক আর বন্ধুদের প্রাণবন্ত আড্ডা।",
      kitchenStatus: "Espresso Bar Active",
      commissionNoticeTitle: "☕ ফুড অ্যাপ ছাড়া সরাসরি কিচেন রেটে কফি নিন!",
      commissionNoticeDesc: "অ্যাপে বেশি দাম না দিয়ে আমাদের সরাসরি হোয়াটসঅ্যাপে টেকঅ্যাওয়ে বা পার্সেল অর্ডার করুন।",
      orderTypeDelivery: "🏠 কফি ডেলিভারি",
      orderTypeTakeaway: "🛍️ কফি টু-গো (টেকঅ্যাওয়ে)",
      orderTypeDinein: "☕ ক্যাফেতে বসে পান করা",
    },
    features: [
      {
        title: "ডার্ক রোস্টেড এসপ্রেসো",
        desc: "প্রিমিয়াম অ্যারাবিকা ব্লেন্ডে তৈরি তীব্র সুগন্ধি এসপ্রেসো শট।",
        icon: "Coffee",
      },
      {
        title: "হাতে তৈরি সিগনেচার শেক",
        desc: "প্রিমিয়াম জেলাটো ও খাঁটি চকলেটে তৈরি রিচ থিক শেক।",
        icon: "GlassWater",
      },
      {
        title: "শান্ত আড্ডা ও স্টাডি কর্নার",
        desc: "হাই-স্পিড ফ্রি ওয়াইফাই, ব্যাকগ্রাউন্ড মিউজিক আর চিল সিটিং স্পেস।",
        icon: "BookOpen",
      },
      {
        title: "ইনস্ট্যান্ট কফি টু-গো",
        desc: "আসার আগেই হোয়াটসঅ্যাপে জানিয়ে রাখুন, পৌঁছেই পার্সেল পেয়ে যাবেন।",
        icon: "Zap",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80", caption: "আইসড হ্যাজেলনাট আমেরিকান" },
      { url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80", caption: "ক্লাসিক ক্যারামেল মাকিয়াটো" },
      { url: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80", caption: "বেলজিয়ান গোল্ডেন ওয়াফেল" },
      { url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80", caption: "অজ ক্যাফে আড্ডা কর্নার" },
    ],
    menu: [
      {
        id: "oz1",
        name: "Iced Hazelnut Americano",
        bengaliName: "আইসড হ্যাজেলনাট আমেরিকান",
        category: "coffee",
        description: "ডাবল শট রোস্টেড এসপ্রেসো, চিলড ওয়াটার আর রোস্টেড হ্যাজেলনাটের সুবাস।",
        price: 180,
        badge: "Barista Favorite",
        popular: true,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "oz2",
        name: "Vanilla Bean Espresso Affogato",
        bengaliName: "ভ্যানিলা বিন এসপ্রেসো অ্যাফোগাতো",
        category: "coffee",
        description: "ক্রিমি ভ্যানিলা জেলাটোর স্কুপের ওপরে ঢেলে দেওয়া গরম গাঢ় এসপ্রেসো শট।",
        price: 210,
        badge: "Italian Classic",
        popular: true,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "oz3",
        name: "Classic Caramel Macchiato",
        bengaliName: "ক্লাসিক ক্যারামেল মাকিয়াটো",
        category: "coffee",
        description: "স্টিমড মিল্ক, ডার্ক এসপ্রেসো ও ওপরে সোনালী ক্যারামেল ড্রপসের নরম মিষ্টি চুমুক।",
        price: 200,
        popular: true,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "oz4",
        name: "Belgian Golden Waffle with Maple & Butter",
        bengaliName: "বেলজিয়ান গোল্ডেন ওয়াফেল",
        category: "desserts",
        description: "মচমচে সোনালী ওয়াফেল, ওপরে গলিত মাখন এবং খাঁটি ম্যাপেল সিরাপের প্রলেপ।",
        price: 220,
        badge: "Sweet Pairing",
        popular: true,
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "oz5",
        name: "Oreo Mudslide Thick Milkshake",
        bengaliName: "ওরিও মাডস্লাইড থিক শেক",
        category: "beverages",
        description: "চূর্ণ ওরিও বিস্কুট, ভ্যানিলা জেলাটো ও ঘন তরল চকলেট ক্রিমের লোভনীয় ব্লেন্ড।",
        price: 210,
        popular: true,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "oz6",
        name: "Dark Chocolate Fudge Brownie",
        bengaliName: "ডার্ক চকলেট ফাজ ব্রাউনি",
        category: "desserts",
        description: "কফির তিক্ততার সাথে দারুণ মানানসই মোলায়েম ডার্ক চকলেট ব্রাউনি স্লাইস।",
        price: 160,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "জাওয়াদ করিম",
        area: "শংকর, ধানমন্ডি",
        rating: 5,
        comment: "অজ ক্যাফের আইসড কফি আর ওয়াফেল বন্ধুদের সাথে আড্ডায় আমাদের প্রতিদিনের পছন্দ। কফির মান এক কথায় দারুণ।",
        dish: "আইসড আমেরিকান ও ওয়াফেল",
        date: "৪ দিন আগে",
      },
      {
        name: "সানজিদা রশীদ",
        area: "ধানমন্ডি ১৫",
        rating: 5,
        comment: "শান্ত পরিবেশে বসে কফি খাওয়ার জন্য ধানমন্ডির ভেতরে খুব পরিচ্ছন্ন একটা ক্যাফে।",
        dish: "ক্যারামেল মাকিয়াটো",
        date: "২ সপ্তাহ আগে",
      },
    ],
  },

  // 3. Cafe / Beverage (Coffee Lime) - Strictly Citrus Coffee, Coolers, Iced Teas!
  {
    id: "coffee-lime-khilgaon",
    name: "Coffee Lime",
    bengaliName: "কফি লাইম",
    category: "Cafe / Beverage",
    area: "Chowdhury Para, Khilgaon, Dhaka",
    address: "586/C, Shahid Baki Road, Khilgaon Chowdhury Para, Dhaka",
    phone: "01717-000000",
    whatsapp: "8801717000000",
    openingHours: "প্রতিদিন: দুপুর ১:০০ - রাত ১১:০০",
    tagline: "সাইট্রাস কফি, রিফ্রেশিং কোল্ড বেভারেজ ও কুলার্স বার",
    heroHeadline: "কফি আর লাইম-এর রিফ্রেশিং ফিউশনে এক নতুন স্বাদ",
    heroSubheadline: "খিলগাঁও চৌধুরীপাড়ায় সারা দিনের ক্লান্তি দূর করতে নিন আমাদের স্পেশাল স্পার্কলিং লাইম কফি, ভিয়েতনামীজ ড্রিপ কফি আর আইসড ফ্রুট কুলার্স।",
    specialHighlight: "ইউনিক সাইট্রাস-কফি ফিউশন ও ইনস্ট্যান্ট রিফ্রেশমেন্ট বার",
    heroImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-lime-600 via-emerald-600 to-teal-700",
    primaryColor: "#65a30d",
    minOrderDelivery: 200,
    uiLabels: {
      audiencePraise: "রিফ্রেশিং বেভারেজ ও সাইট্রাস কফি লাভার্সদের পছন্দ",
      menuSectionTitle: "সিগনেচার বেভারেজ, কুলার্স ও কফি মেনু",
      menuSectionSubtitle: "তাজা ফলের রস, স্পার্কলিং ওয়াটার ও কোল্ড কফির রিফ্রেশিং ব্লেন্ড—গরমে মন জুড়াতে সরাসরি হোয়াটসঅ্যাপে অর্ডার করুন।",
      orderCta: "বেভারেজ ও ড্রিংকস অর্ডার",
      reservationCta: "ক্যাফে টেবিল বুকিং",
      reservationHeading: "কফি লাইম রিফ্রেশমেন্ট বারে সিট বুক করুন",
      galleryTitle: "আমাদের বেভারেজ বার ও রিফ্রেশমেন্টের কিছু মুহূর্ত",
      gallerySubtitle: "তাজা লাইমের স্লাইস, আইসড কফি ব্লেন্ড আর স্নিগ্ধ পানীয়ের প্রস্তুতি।",
      kitchenStatus: "Beverage Bar Active",
      commissionNoticeTitle: "🍹 অতিরিক্ত অ্যাপ ফি ছাড়া সরাসরি ড্রিংকস নিন!",
      commissionNoticeDesc: "ফুড অ্যাপের বেশি দাম ছাড়াই সরাসরি হোয়াটসঅ্যাপে অর্ডার দিয়ে পার্সেল বা হোম ডেলিভারি নিন।",
      orderTypeDelivery: "🏠 ড্রিংকস হোম ডেলিভারি",
      orderTypeTakeaway: "🛍️ কোল্ড বেভারেজ টেকঅ্যাওয়ে",
      orderTypeDinein: "🍹 ক্যাফেতে বসে পান করা",
    },
    features: [
      {
        title: "সিগনেচার লাইম কফি",
        desc: "তাজা লাইমের জেস্টি ফ্লেভার আর গাঢ় এসপ্রেসো শটের এক্সক্লুসিভ কম্বো।",
        icon: "Citrus",
      },
      {
        title: "আইসড স্পার্কলিং রিফ্রেশার্স",
        desc: "প্রচণ্ড গরমে মন জুড়াতে খাঁটি পুদিনা ও ফলের রস দিয়ে তৈরি কুলার্স।",
        icon: "GlassWater",
      },
      {
        title: "সাইট্রাস টি কেক স্লাইস",
        desc: "কোল্ড কফি ও চায়ের সাথে খাওয়ার নরম হালকা মিষ্টি লেমন কেক।",
        icon: "Cake",
      },
      {
        title: "ঝামেলাহীন অর্ডার",
        desc: "হোয়াটসঅ্যাপে মেসেজ পাঠালেই সরাসরি টেকঅ্যাওয়ে ড্রিংকস প্রস্তুত।",
        icon: "ShoppingBag",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80", caption: "স্পার্কলিং লাইম আইসড কফি" },
      { url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80", caption: "ভিয়েতনামীজ ড্রিপ কফি" },
      { url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80", caption: "গ্রিন মিন্ট কুলার ফিজ" },
      { url: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80", caption: "লেমন ড্রিজল কেক স্লাইস" },
    ],
    menu: [
      {
        id: "l1",
        name: "Signature Sparkling Lime Iced Coffee",
        bengaliName: "স্পার্কলিং লাইম আইসড কফি",
        category: "beverages",
        description: "তাজা লাইমের রস, স্পার্কলিং সোডা আর কোল্ড এসপ্রেসোর অনবদ্য এক রিফ্রেশিং ফিউশন।",
        price: 220,
        badge: "House Specialty",
        popular: true,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "l2",
        name: "Classic Vietnamese Iced Milk Coffee",
        bengaliName: "ভিয়েতনামীজ আইসড মিল্ক কফি",
        category: "coffee",
        description: "গাঢ় ডার্ক ড্রিপ কফি আর মিষ্টি কনডেন্সড মিল্কের মনকাড়া আইসড ব্লেন্ড।",
        price: 210,
        popular: true,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "l3",
        name: "Green Mint Cooler Fizz",
        bengaliName: "গ্রিন মিন্ট কুলার ফিজ",
        category: "beverages",
        description: "তাজা পুদিনা পাতা, লাইম স্লাইস আর কার্বনেটেড ওয়াটারের রিফ্রেশিং ড্রিংক।",
        price: 160,
        popular: true,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "l4",
        name: "Citrus Cold Brew Tonic",
        bengaliName: "সাইট্রাস কোল্ড ব্রু টনিক",
        category: "coffee",
        description: "ধীরে ড্রিপ হওয়া কোল্ড ব্রু এবং জেস্টি টনিক ওয়াটারের ক্রিস্পি চুমুক।",
        price: 230,
        badge: "Summer Special",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "l5",
        name: "Creamy Caramel Latte",
        bengaliName: "ক্রিমি ক্যারামেল লাতে",
        category: "coffee",
        description: "স্টিমড মিল্ক, রিচ এসপ্রেসো আর মিষ্টি গোল্ডেন ক্যারামেলের নরম চুমুক।",
        price: 200,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "l6",
        name: "Lemon Drizzle Pound Cake Slice",
        bengaliName: "লেমন ড্রিজল কেক স্লাইস",
        category: "desserts",
        description: "তাজা লেবুর জেস্ট আর হালকা মিষ্টি সিরাপের ভেজা ভেজা নরম কেক।",
        price: 150,
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "মিজানুর রহমান",
        area: "খিলগাঁও",
        rating: 5,
        comment: "কফি আর লেবুর কম্বিনেশন প্রথমে শুনে অদ্ভুত লেগেছিল, কিন্তু খাওয়ার পর এক কথায় মুগ্ধ! ক্লান্তি নিমিষেই গায়েব।",
        dish: "স্পার্কলিং লাইম আইসড কফি",
        date: "১ দিন আগে",
      },
      {
        name: "ফারিয়া ইসলাম",
        area: "বাসাবো",
        rating: 5,
        comment: "এদের মিন্ট কুলার আর কোল্ড কফি বিকেল বেলার রিফ্রেশমেন্টের জন্য একদম পারফেক্ট।",
        dish: "মিন্ট কুলার ও কফি",
        date: "১ সপ্তাহ আগে",
      },
    ],
  },

  // 4. Cafe / Coffee Shop (Apon Coffee House) - Strictly Coffee Craft & Barista Brews!
  {
    id: "apon-coffee-house",
    name: "Apon Coffee House",
    bengaliName: "আপন কফি হাউজ",
    category: "Cafe / Coffee Shop",
    area: "Chowdhury Para, Khilgaon, Dhaka",
    address: "381/B, Shahid Baki Road, Khilgaon Chowdhury Para, Dhaka - 1219",
    phone: "01611-876414",
    whatsapp: "8801611876414",
    openingHours: "প্রতিদিন: সকাল ৯:০০ - রাত ১১:৩০",
    tagline: "খাঁটি অ্যারাবিকা কফির সুবাস আর প্রাণখোলা আড্ডার আপন ঠিকানা",
    heroHeadline: "এক কাপ খাঁটি কফিতে জমে উঠুক বন্ধুদের আপন আড্ডা",
    heroSubheadline: "চৌধুরীপাড়ার শান্ত ক্যাফে আবহে ফ্রেশলি গ্রাউন্ড এসপ্রেসো, ফ্ল্যাট হোয়াইট, ১৮-আওয়ার কোল্ড ব্রু আর মচমচে ওয়াফেল নিয়ে কফিপ্রেমীদের আপন আড্ডাঘর।",
    specialHighlight: "১০০% প্রিমিয়াম অ্যারাবিকা এসপ্রেসো ব্রু ও কোল্ড ব্রু স্পেশালিস্ট",
    heroImage: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-amber-900 via-amber-800 to-yellow-600",
    primaryColor: "#78350f",
    minOrderDelivery: 200,
    uiLabels: {
      audiencePraise: "খাঁটি কফিপ্রেমী ও আড্ডাপ্রিয় মানুষদের আপন ঠিকানা",
      menuSectionTitle: "স্পেশালিটি কফি ও বারিস্তা ব্রু মেনু",
      menuSectionSubtitle: "সিঙ্গেল অরিজিন বিনস, নিখুঁত ল্যাটে আর্ট ও ধীরে ফিল্টার করা কোল্ড কফি—এক ক্লিকেই অর্ডার করুন হোয়াটসঅ্যাপে।",
      orderCta: "কফি অর্ডার / টেকঅ্যাওয়ে",
      reservationCta: "ক্যাফে টেবিল বুকিং",
      reservationHeading: "আপন কফি হাউজে আড্ডার সিট বুক করুন",
      galleryTitle: "আমাদের কফি হাউজ ও আড্ডার কিছু মুহূর্ত",
      gallerySubtitle: "বারিস্তার ল্যাটে আর্ট, কফি বিনসের সুবাস ও আড্ডার নিরিবিলি পরিবেশ।",
      kitchenStatus: "Brew Bar Active",
      commissionNoticeTitle: "☕ ফুড অ্যাপ ছাড়া সরাসরি ফ্রেশ কফি নিন!",
      commissionNoticeDesc: "অফিস বা আড্ডার জন্য সরাসরি হোয়াটসঅ্যাপে টেকঅ্যাওয়ে কাপ বা কোল্ড কফি অর্ডার করুন।",
      orderTypeDelivery: "🏠 কফি হোম ডেলিভারি",
      orderTypeTakeaway: "🛍️ কফি টু-গো (টেকঅ্যাওয়ে)",
      orderTypeDinein: "☕ কফি শপে বসে আড্ডা",
    },
    features: [
      {
        title: "১০০% অ্যারাবিকা বিনস",
        desc: "বিশ্বখ্যাত রোস্টারি থেকে আনা অর্গানিক সিঙ্গেল-অরিজিন কফি বিনস।",
        icon: "Coffee",
      },
      {
        title: "ম্যানুয়াল ড্রিপ ও ব্রু",
        desc: "ভি৬০ ও কোল্ড ব্রু মেথডে ফিল্টার করা নিখুঁত ফ্লেভারফুল কফি।",
        icon: "Sparkles",
      },
      {
        title: "কাস্টম কফি টু-গো",
        desc: "অফিস বা বাড়ির জন্য ইনসুলেটেড কাপে ইনস্ট্যান্ট টেকঅ্যাওয়ে সুবিধা।",
        icon: "PackageCheck",
      },
      {
        title: "শান্ত আড্ডা ও পড়ার পরিবেশ",
        desc: "বই পড়া, কাজ করা বা আড্ডা দেওয়ার মতো আরামদায়ক পরিবেশ।",
        icon: "BookOpen",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80", caption: "ক্লাসিক বারিস্তা লাতে আর্ট" },
      { url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80", caption: "১৮-আওয়ার স্লো কোল্ড ব্রু" },
      { url: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80", caption: "বেলজিয়ান চকলেট ওয়াফেল" },
      { url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80", caption: "আপন কফি শপ কর্নার" },
    ],
    menu: [
      {
        id: "ap1",
        name: "Classic Barista Latte",
        bengaliName: "ক্লাসিক বারিস্তা লাতে",
        category: "coffee",
        description: "পারফেক্টলি এক্সট্র্যাক্টেড এসপ্রেসো শট, সিল্কি মাইক্রো-ফোম মিল্ক আর ল্যাটে আর্ট।",
        price: 190,
        badge: "Coffee Classic",
        popular: true,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ap2",
        name: "18-Hour Slow Brewed Cold Coffee",
        bengaliName: "১৮-আওয়ার স্লো ব্রু কোল্ড কফি",
        category: "beverages",
        description: "১৮ ঘণ্টা ধীরে ধীরে চিলড ওয়াটারে নিষ্কাশিত অ্যাসিড-মুক্ত মসৃণ কোল্ড ব্রু।",
        price: 230,
        badge: "Specialty Cold",
        popular: true,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ap3",
        name: "Belgian Waffle with Dark Chocolate",
        bengaliName: "বেলজিয়ান ওয়াফেল উইথ ডার্ক চকলেট",
        category: "desserts",
        description: "ভেতরে নরম বাইরে ক্রিস্পি সোনালী ওয়াফেল, ওপরে গলিত ডার্ক চকলেট গানাশ।",
        price: 220,
        popular: true,
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ap4",
        name: "Spanish Cortado",
        bengaliName: "স্প্যানিশ কোরতাডো কফি",
        category: "coffee",
        description: "সমান অনুপাতে গাঢ় রিসট্রেটো কফি শট ও স্টিমড দুধের নিখুঁত ব্যালেন্স।",
        price: 180,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ap5",
        name: "Dark Mocha Frappuccino",
        bengaliName: "ডার্ক মোকা ফ্রাপুচিনো",
        category: "beverages",
        description: "আইসড কফি ও ডার্ক চকলেটের ব্লেন্ড, ওপরে চকলেট সসের ড্রপ।",
        price: 240,
        popular: true,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ap6",
        name: "Almond Biscotti (2 Pcs)",
        bengaliName: "আমন্ড বিস্কোটি",
        category: "bakery",
        description: "কফিতে ডুবিয়ে খাওয়ার জন্য ঐতিহ্যবাহী ডাবল বেকড ইতালিয়ান বাদাম কুকি।",
        price: 90,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "তানজিম সাকিব",
        area: "খিলগাঁও চৌধুরীপাড়া",
        rating: 5,
        comment: "কফির ফ্লেভার নিয়ে যাদের খুঁতখুঁতে স্বভাব, তারা আপন কফি হাউজের কোল্ড ব্রু ট্রাই করে দেখুন। সত্যি দারুণ!",
        dish: "১৮-আওয়ার কোল্ড কফি",
        date: "৩ দিন আগে",
      },
      {
        name: "রাফিদ হাসান",
        area: "শান্তিনগর",
        rating: 5,
        comment: "শান্ত পরিবেশে বসে ল্যাপটপে কাজ করতে বা বই পড়তে এর চেয়ে ভালো কফি শপ ঢাকায় খুব কম আছে।",
        dish: "ক্লাসিক লাতে ও ওয়াফেল",
        date: "১ সপ্তাহ আগে",
      },
    ],
  },

  // 5. Cafe / Restaurant (Cafe Cherry Drops)
  {
    id: "cherry-drops-khilgaon",
    name: "Cafe Cherry Drops",
    bengaliName: "ক্যাফে চেরি ড্রপস",
    category: "Cafe / Restaurant",
    area: "Taltola, Khilgaon, Dhaka",
    address: "572/C, Block-C, Shahid Baki Road, Taltola, Khilgaon, Dhaka - 1219",
    phone: "01610-021342",
    whatsapp: "8801610021342",
    openingHours: "প্রতিদিন: দুপুর ১২:৩০ - রাত ১১:০০",
    tagline: "রুফটপ ভাইব, মনকাড়া ডেজার্ট এবং সিগনেচার ক্যাফে মিলস",
    heroHeadline: "ক্যাফে আড্ডা ও লোভনীয় খাবারের সেরা কম্বিনেশন",
    heroSubheadline: "তালতলার প্রাণকেন্দ্রে মন মাতানো কফি, ক্রিস্পি পেরি পেরি চিকেন, জুসি ডাবল ডেকার বার্গার আর সিগনেচার চেরি শেক নিয়ে আপনার ক্যাফে মেমোরিজ গড়ুন।",
    specialHighlight: "ওপেন এয়ার ভাইব ও স্পেশাল বার্থডে / ফ্রেন্ডস সেলিব্রেশন কর্নার",
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-pink-600 via-rose-600 to-purple-600",
    primaryColor: "#db2777",
    minOrderDelivery: 300,
    uiLabels: {
      audiencePraise: "ভোজনরসিক ও রুচিশীল ডাইনারদের প্রথম পছন্দ",
      menuSectionTitle: "সুস্বাদু ক্যাফে ও ডাইনিং খাবারের তালিকা",
      menuSectionSubtitle: "জুসি বার্গার, ক্রিস্পি চিকেন, চেরি ডেজার্ট ও কফি—সরাসরি হোয়াটসঅ্যাপে রেস্টুরেন্ট রেটেই অর্ডার করুন।",
      orderCta: "খাবার ও কফি অর্ডার",
      reservationCta: "রুফটপ টেবিল বুকিং",
      reservationHeading: "চেরি ড্রপস রুফটপে টেবিল রিজার্ভ করুন",
      galleryTitle: "আমাদের রেস্টুরেন্ট ও ক্যাফের কিছু মুহূর্ত",
      gallerySubtitle: "ওপেন এয়ার রুফটপ ভাইব, ডেকোরেটেড টেবিল ও গরম খাবারের পরিবেশনা।",
      kitchenStatus: "Kitchen & Grill Active",
      commissionNoticeTitle: "🍔 ফুড অ্যাপের ২৫% বাড়তি চার্জ ছাড়াই খাবার নিন!",
      commissionNoticeDesc: "অ্যাপে বেশি দাম না দিয়ে আমাদের সরাসরি হোয়াটসঅ্যাপে পার্সেল বা ডেলিভারি অর্ডার দিন।",
      orderTypeDelivery: "🏠 হোম ডেলিভারি",
      orderTypeTakeaway: "🛍️ টেকঅ্যাওয়ে পার্সেল",
      orderTypeDinein: "🍽️ রুফটপে বসে খাওয়া",
    },
    features: [
      {
        title: "কজি রুফটপ ভাইব",
        desc: "সন্ধ্যায় মুক্ত হাওয়া ও চমৎকার আলোতে আড্ডা দেওয়ার ড্রিম স্পট।",
        icon: "SunMedium",
      },
      {
        title: "জুসি বার্গার ও ফ্রাইস",
        desc: "হাতে গড়া বিফ প্যাটি ও স্পেশাল চিজ মেল্ট বার্গারের ক্রাঞ্চ।",
        icon: "Sandwich",
      },
      {
        title: "সিগনেচার ডেজার্ট শেক",
        desc: "ফ্রেশ চেরি ও বেলজিয়াম ট্রাফলের এক্সক্লুসিভ বেভারেজ।",
        icon: "GlassWater",
      },
      {
        title: "ইনস্ট্যান্ট টেবিল বুকিং",
        desc: "বার্থডে সারপ্রাইজ বা ডেটের জন্য ১ ক্লিকে হোয়াটসঅ্যাপে টেবিল নিশ্চিত।",
        icon: "CalendarCheck",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80", caption: "মনস্টার ডাবল বিফ বার্গার" },
      { url: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80", caption: "চেরি ব্লসম স্পেশাল শেক" },
      { url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80", caption: "নুটেলা প্যানকেক টাওয়ার" },
      { url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", caption: "রুফটপ ক্যাফে অ্যাম্বিয়েন্স" },
    ],
    menu: [
      {
        id: "ch1",
        name: "Monster Double Beef Cheese Burger",
        bengaliName: "মনস্টার ডাবল বিফ চিজ বার্গার",
        category: "mains",
        description: "দুটি রসালো বিফ প্যাটি, ডাবল চেডার চিজ স্লাইস, ক্যারামেলাইজড ওনিয়ন ও সিক্রেট সস।",
        price: 340,
        badge: "Crowd Favorite",
        popular: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ch2",
        name: "Signature Cherry Blossom Milkshake",
        bengaliName: "চেরি ব্লসম স্পেশাল শেক",
        category: "beverages",
        description: "রিচ সুইট চেরি পিউরি, স্ট্রবেরি জেলাটো, ক্যান্ডিড চেরি ও হুইপড ক্রিম।",
        price: 230,
        badge: "Must Try",
        popular: true,
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ch3",
        name: "Crispy Peri-Peri Chicken with Wedges",
        bengaliName: "ক্রিস্পি পেরি পেরি চিকেন উইথ ওয়েজেস",
        category: "mains",
        description: "স্পাইসি ক্রাঞ্চি ড্রামস্টিকস ও ক্রিস্পি পটেটো ওয়েজেস সাথে স্পাইসি সস।",
        price: 290,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ch4",
        name: "Spanish Latte with Cinnamon Dust",
        bengaliName: "স্প্যানিশ লাতে উইথ সিনামন ডাস্ট",
        category: "coffee",
        description: "মিষ্টি কনডেন্সড মিল্কের সাথে বোল্ড এসপ্রেসো শট ও দারুচিনির মিষ্টি সুবাস।",
        price: 210,
        popular: true,
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ch5",
        name: "Nutella Stuffed Chocolate Pancake",
        bengaliName: "নুটেলা চকলেট প্যানকেক টাওয়ার",
        category: "desserts",
        description: "৩ স্তরের নরম চকলেট প্যানকেকের ভেতরে তরল নুটেলা ওপরে আইসক্রিম স্কুপ।",
        price: 280,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "ch6",
        name: "Tangy Wild Mint Lemonade",
        bengaliName: "ট্যাঙ্গি ওয়াইল্ড মিন্ট লেমোনেড",
        category: "beverages",
        description: "তাজা পুদিনা, বিট লবণ আর স্পার্কলিং লেবু পানির দারুণ ক্লান্তিহরণকারী ড্রিংক।",
        price: 160,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "সালমান চৌধুরী",
        area: "খিলগাঁও ব্লক সি",
        rating: 5,
        comment: "চেরি ড্রপসের বার্গার যেমন জুসি, রুফটপের পরিবেশটাও তেমনি রিল্যাক্সিং। বন্ধুদের নিয়ে বসার জন্য পারফেক্ট!",
        dish: "মনস্টার ডাবল বিফ বার্গার",
        date: "১ সপ্তাহ আগে",
      },
      {
        name: "ফারিহা জামান",
        area: "খিলগাঁও",
        rating: 5,
        comment: "আমার বান্ধবীর বার্থডে এখানে সেলিব্রেট করেছি। ওরা টেবিল ডেকোরেশনে খুব হেল্প করেছে।",
        dish: "চেরি ব্লসম শেক ও প্যানকেক",
        date: "২ সপ্তাহ আগে",
      },
    ],
  },

  // 6. Cafe / Restaurant (Pinewood Cafe n' Restaurant)
  {
    id: "pinewood-dhanmondi",
    name: "Pinewood Cafe n' Restaurant",
    bengaliName: "পাইনউড ক্যাফে অ্যান্ড রেস্টুরেন্ট",
    category: "Cafe / Restaurant",
    area: "Road 12, Dhanmondi, Dhaka",
    address: "House 19, Road 12 (Old 31), Dhanmondi R/A (Beside Metro Shopping Mall), Dhaka",
    phone: "01914-426939",
    whatsapp: "8801914426939",
    openingHours: "প্রতিদিন: দুপুর ১২:০০ - রাত ১১:০০",
    tagline: "ধানমন্ডির স্নিগ্ধ সবুজে প্রিমিয়াম কন্টিনেন্টাল ও উড-ফায়ার্ড ডাইনিং",
    heroHeadline: "অভিজাত আবেশে খাঁটি কন্টিনেন্টাল স্বাদ ও রুচিশীল ডাইনিং",
    heroSubheadline: "মেট্রো শপিং মলের পাশে নিরিবিলি কাঠের আবহে সিজলিং রিবআই স্টেক, উড-ওভেন পিৎজা এবং রিফ্রেশিং মকটেইল নিয়ে প্রস্তুত আপনার রিজার্ভেশন টেবিল।",
    specialHighlight: "ধানমন্ডিতে রোমান্টিক ডাইনিং ও প্রিমিয়াম প্রাইভেট টেবিল রিজার্ভেশন",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-emerald-800 via-teal-700 to-amber-700",
    primaryColor: "#047857",
    minOrderDelivery: 500,
    uiLabels: {
      audiencePraise: "ভোজনরসিক ও রুচিশীল কন্টিনেন্টাল ডাইনারদের প্রথম পছন্দ",
      menuSectionTitle: "প্রিমিয়াম স্টেক, উড-ওভেন পিৎজা ও কন্টিনেন্টাল মেনু",
      menuSectionSubtitle: "অভিজাত রেসিপিতে তৈরি সিজলিং স্টেক, উড-ফায়ার্ড পিৎজা আর রিফ্রেশিং মকটেইল—টেবিল রিজার্ভ করুন বা সরাসরি অর্ডার নিন।",
      orderCta: "খাবার অর্ডার",
      reservationCta: "টেবিল প্রি-বুকিং",
      reservationHeading: "পাইনউডে ডাইনিং টেবিল রিজার্ভ করুন",
      galleryTitle: "আমাদের রেস্টুরেন্ট ও ডাইনিংয়ের কিছু মুহূর্ত",
      gallerySubtitle: "সবুজ বাগান, পাইন কাঠের ইন্টেরিয়র আর ধোঁয়া ওঠা গরম খাবারের পরিবেশনা।",
      kitchenStatus: "Live Grill & Oven Active",
      commissionNoticeTitle: "🥩 রেস্টুরেন্টের খাঁটি রেটেই প্রিমিয়াম স্টেক নিন!",
      commissionNoticeDesc: "অ্যাপের বাড়তি চার্জ এড়িয়ে সরাসরি আমাদের হোয়াটসঅ্যাপে অর্ডার বা টেবিল বুক করুন।",
      orderTypeDelivery: "🏠 হোম ডেলিভারি",
      orderTypeTakeaway: "🛍️ টেকঅ্যাওয়ে পার্সেল",
      orderTypeDinein: "🍽️ ডাইনিং টেবিলে বসে খাওয়া",
    },
    features: [
      {
        title: "প্রাইম স্টেক ও সিজলার্স",
        desc: "প্রিমিয়াম ইমপোর্টেড বিফ ও জুসি চিকেন সিজলার নিখুঁত তাপমাত্রায় প্রস্তুত।",
        icon: "Flame",
      },
      {
        title: "উড-ফায়ার্ড পিৎজা",
        desc: "প্রথাগত কাঠের ওভেনে বেক হওয়া পাতলা ক্রাস্টের খাঁটি পিৎজা।",
        icon: "Pizza",
      },
      {
        title: "টেবিল প্রি-বুকিং সুবিধা",
        desc: "স্পেশাল ডিনার বা পারিবারিক অনুষ্ঠানের জন্য ঝামেলাহীন অগ্রিম টেবিল বুকিং।",
        icon: "CalendarCheck",
      },
      {
        title: "রুচিশীল অ্যাম্বিয়েন্স",
        desc: "সবুজ বাগান আর পাইন কাঠের ইন্টেরিয়রে প্রশান্তিময় ক্যাফে পরিবেশ।",
        icon: "Sparkles",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", caption: "গ্রিলড প্রাইম স্টেক" },
      { url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", caption: "উড-ফায়ার্ড ক্রিস্পি পিৎজা" },
      { url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80", caption: "মিন্ট মোহিতো মকটেইল" },
      { url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80", caption: "হট সিজলিং ব্রাউনি" },
    ],
    menu: [
      {
        id: "p1",
        name: "Grilled Chicken Steak with Mushroom Sauce",
        bengaliName: "গ্রিলড চিকেন স্টেক উইথ মাশরুম সস",
        category: "mains",
        description: "টেন্ডার গ্রিলড ব্রেস্ট ফিলে, ক্রিমি মাশরুম জুস, সতেজ ভেষজ সবজি ও ম্যাশড পটেটো।",
        price: 520,
        badge: "Chef's Signature",
        popular: true,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "p2",
        name: "Wood-Fired Quattro Formaggi Pizza",
        bengaliName: "ফোর চিজ উড-ফায়ার্ড পিৎজা",
        category: "mains",
        description: "মোজারেলা, পারমেসান, গোরগনজোলা ও রিকোটা চিজের ক্রিস্পি পাতলা ক্রাস্ট পিৎজা।",
        price: 680,
        badge: "Wood Oven",
        popular: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "p3",
        name: "Spicy Beef Sizzler with Fried Rice",
        bengaliName: "স্পাইসি বিফ সিজলার উইথ এগ ফ্রাইড রাইস",
        category: "mains",
        description: "লোহার গরম তাওয়ায় ধোঁয়া ওঠা সিজলিং বিফ স্ট্রিপস ও স্পাইসি পেপার সস।",
        price: 590,
        popular: true,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "p4",
        name: "Signature Green Apple Mint Mojito",
        bengaliName: "গ্রিন অ্যাপল মিন্ট মোহিতো",
        category: "beverages",
        description: "তাজা পুদিনা পাতা, তাজা লেবুর রস ও কুচানো বরফের সাথে গ্রিন অ্যাপল ফিজ।",
        price: 240,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "p5",
        name: "Classic Sizzling Brownie with Vanilla Gelato",
        bengaliName: "হট সিজলিং ব্রাউনি উইথ ভ্যানিলা জেলাটো",
        category: "desserts",
        description: "গরম চকলেট সসে ফুটতে থাকা ডার্ক ব্রাউনি ওপরে ঠাণ্ডা প্রিমিয়াম ভ্যানিলা আইসক্রিম।",
        price: 320,
        popular: true,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "p6",
        name: "Double Shot Espresso Macchiato",
        bengaliName: "ডাবল শট এসপ্রেসো মাকিয়াটো",
        category: "coffee",
        description: "গাঢ় ডার্ক রোস্টেড কফির তীব্রতা আর এক ফোঁটা ঘন দুধের নরম ফোম।",
        price: 190,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "আদীবুর রহমান",
        area: "ধানমন্ডি ২৭",
        rating: 5,
        comment: "ধানমন্ডিতে নিরিবিলি পরিবেশে ভালো স্টেক ও পিৎজার জন্য পাইনউড এক নম্বরে। কাঠের পরিবেশটা মন কেড়ে নেয়।",
        dish: "গ্রিলড চিকেন স্টেক",
        date: "৪ দিন আগে",
      },
      {
        name: "সাবরিনা জেরিন",
        area: "ঝিগাতলা",
        rating: 5,
        comment: "আমাদের অ্যানিভার্সারির টেবিল আগে থেকেই বুক করে রেখেছিলাম। ডেকরেশন ও খাবার চমৎকার ছিল!",
        dish: "উড-ফায়ার্ড পিৎজা ও ব্রাউনি",
        date: "২ সপ্তাহ আগে",
      },
    ],
  },

  // 7. Restaurant / Cafe (Alfresco)
  {
    id: "alfresco-taltola",
    name: "Alfresco (Taltola Branch)",
    bengaliName: "আলফ্রেসকো (তালতলা ব্রাঞ্চ)",
    category: "Restaurant / Cafe",
    area: "Taltola, Khilgaon, Dhaka",
    address: "385/B, Taltola, Shahid Baki Road, Khilgaon, Dhaka",
    phone: "01847-433000",
    whatsapp: "8801847433000",
    openingHours: "প্রতিদিন: দুপুর ১২:০০ - রাত ১০:৪৫",
    tagline: "খিলগাঁওয়ের বুকে অথেনটিক ইতালিয়ান উড-ফায়ার্ড পিৎজা ও পাস্তা হেভেন",
    heroHeadline: "চীজি পাস্তা ও ক্রিস্পি উড-ওভেন পিৎজার স্বর্গরাজ্য",
    heroSubheadline: "খিলগাঁওয়ের জমজমাট ফুড স্ট্রিটে বন্ধু আর পরিবার নিয়ে উপভোগ করুন আমাদের সিগনেচার স্পেশাল বেকড লাসানিয়া, ক্রিমি আলফ্রেডো পাস্তা ও গ্রিলড প্ল্যাটার।",
    specialHighlight: "জিরো ডেলিভারি ফি সহ সরাসরি হোয়াটসঅ্যাপে অর্ডার করুন",
    heroImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    accentGradient: "from-rose-600 via-red-600 to-amber-600",
    primaryColor: "#e11d48",
    minOrderDelivery: 350,
    uiLabels: {
      audiencePraise: "ভোজনরসিক ও ইতালিয়ান ফুড লাভার্সদের প্রথম পছন্দ",
      menuSectionTitle: "অথেনটিক পাস্তা, পিৎজা ও ইতালিয়ান ডাইনিং",
      menuSectionSubtitle: "প্রচুর গলিত চিজের ওভেন বেকড পাস্তা, ক্রিস্পি পিৎজা ও লাসানিয়া—সরাসরি রেস্টুরেন্ট রেটেই হোয়াটসঅ্যাপে অর্ডার করুন।",
      orderCta: "খাবার অর্ডার",
      reservationCta: "টেবিল বুকিং",
      reservationHeading: "আলফ্রেসকোতে টেবিল রিজার্ভ করুন",
      galleryTitle: "আমাদের রেস্টুরেন্ট ও ডাইনিংয়ের কিছু মুহূর্ত",
      gallerySubtitle: "লাইভ উড ওভেনে পিৎজা তৈরি, ধোঁয়া ওঠা গরম পাস্তা ও বন্ধুদের আড্ডা।",
      kitchenStatus: "Wood Oven Active",
      commissionNoticeTitle: "🍕 ফুড অ্যাপের ২৫% বাড়তি চার্জ ছাড়াই খাবার নিন!",
      commissionNoticeDesc: "অ্যাপে বেশি দাম না দিয়ে আমাদের সরাসরি হোয়াটসঅ্যাপে পার্সেল বা ডেলিভারি অর্ডার দিন।",
      orderTypeDelivery: "🏠 হোম ডেলিভারি",
      orderTypeTakeaway: "🛍️ টেকঅ্যাওয়ে পার্সেল",
      orderTypeDinein: "🍽️ ডাইনিং টেবিলে বসে খাওয়া",
    },
    features: [
      {
        title: "লাইভ উড ওভেন পিৎজা",
        desc: "ইতালিয়ান ময়দা ও মোজারেলায় তৈরি তাজা ও ক্রিস্পি পিৎজা ক্রাস্ট।",
        icon: "Flame",
      },
      {
        title: "চীজি ওভেন বেকড পাস্তা",
        desc: "প্রচুর চিজ ও হোয়াইট সসের সংমিশ্রণে তৈরি মুখে মিলিয়ে যাওয়া পাস্তা।",
        icon: "UtensilsCrossed",
      },
      {
        title: "জিরো পার্সেন্ট কমিশন",
        desc: "অ্যাপে বেশি দাম না দিয়ে রেস্টুরেন্ট রেটেই সরাসরি ঘরে খাবার পান।",
        icon: "BadgePercent",
      },
      {
        title: "ফ্রেন্ডস পার্টি প্যাকেজ",
        desc: "গ্রুপ আড্ডা ও বার্থডে পার্টির জন্য স্পেশাল কম্বো অফার ও সিটিং।",
        icon: "Users",
      },
    ],
    gallery: [
      { url: "https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=800&q=80", caption: "ওভেন বেকড পাস্তা বাস্তা" },
      { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80", caption: "বিবিকিউ মিট লাভার্স পিৎজা" },
      { url: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80", caption: "বিফ লাসানিয়া বোলোগনিজ" },
      { url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80", caption: "নুটেলা থিক মিল্কশেক" },
    ],
    menu: [
      {
        id: "a1",
        name: "Oven Baked Creamy Pasta Basta",
        bengaliName: "ওভেন বেকড ক্রিমি পাস্তা বাস্তা",
        category: "mains",
        description: "প্রচুর গলিত চিজের নিচে স্পাইসি চিকেন ও ক্রিমি হোয়াইট সসে তৈরি বেকড পাস্তা।",
        price: 360,
        badge: "Top Seller",
        popular: true,
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "a2",
        name: "BBQ Meat Lovers Thin Crust Pizza",
        bengaliName: "বিবিকিউ মিট লাভার্স থিন ক্রাস্ট পিৎজা (১২ ইঞ্চি)",
        category: "mains",
        description: "স্মোকড চিকেন, বিফ সসেজ, পেপারোনি, ব্ল্যাক অলিভ ও বারবিকিউ সসের টপিং।",
        price: 650,
        badge: "House Favorite",
        popular: true,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "a3",
        name: "Classic Beef Lasagna Bolognese",
        bengaliName: "ক্লাসিক বিফ লাসানিয়া বোলোগনিজ",
        category: "mains",
        description: "বিফ কিমা, বেসামেল সস ও পারমেসান চিজের স্তরে স্তরে বেক হওয়া রাজকীয় ডিশ।",
        price: 420,
        popular: true,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "a4",
        name: "Crispy Peri Peri Chicken Strips",
        bengaliName: "ক্রিস্পি পেরি পেরি চিকেন স্ট্রিপস",
        category: "mains",
        description: "মচমচে চিকেন ফিঙ্গার সাথে স্পাইসি গার্লিক মেয়ো ডিপ সস।",
        price: 260,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "a5",
        name: "Nutella Overload Milkshake",
        bengaliName: "নুটেলা ওভারলোড মিল্কশেক",
        category: "beverages",
        description: "প্রচুর নুটেলা, চকলেট আইসক্রিম আর ওপরে হুইপড ক্রিম ও চকলেট চিপস।",
        price: 240,
        popular: true,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "a6",
        name: "Blue Ocean Lagoon Fizz",
        bengaliName: "ব্লু ওশান লেগুন ফিজ",
        category: "beverages",
        description: "আইসি ব্লু কুরাকাও ফ্লেভার, তাজা লেমন আর স্পার্কলিং রিফ্রেশার।",
        price: 180,
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80",
      },
    ],
    reviews: [
      {
        name: "ফারহান সাদিক",
        area: "খিলগাঁও রেলগেট",
        rating: 5,
        comment: "আলফ্রেসকোর পাস্তা বাস্তা খিলগাঁওয়ের সবার সেরা! গরম গরম চিজ আর স্পাইসি চিকেনের স্বাদ মুখে লেগে থাকে।",
        dish: "ওভেন বেকড পাস্তা",
        date: "৫ দিন আগে",
      },
      {
        name: "তাসনোভা আনিকা",
        area: "মালিবাগ",
        rating: 5,
        comment: "আমাদের ফ্রেন্ডদের গেট টুগেদারে পিৎজা আর শেক অর্ডার করেছিলাম। সবাই খুব তৃপ্তি করে খেয়েছে।",
        dish: "বিবিকিউ পিৎজা ও শেক",
        date: "১ সপ্তাহ আগে",
      },
    ],
  },
];

export function getRestaurantById(id: string): RestaurantClient {
  const found = RESTAURANT_CLIENTS.find((c) => c.id === id);
  return found || RESTAURANT_CLIENTS[0];
}
