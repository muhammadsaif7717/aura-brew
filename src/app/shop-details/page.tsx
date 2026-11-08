import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopDetailsClient from "@/components/ShopDetailsClient";

export const metadata: Metadata = {
  title: "Ethiopia Yirgacheffe Single Origin | AuraBrew Reserve",
  description:
    "Order Ethiopia Yirgacheffe Grade 1 single-origin whole bean coffee. Freshly roasted with floral jasmine, bergamot, candied lemon, and wild forest honey notes.",
  keywords: [
    "Ethiopia Yirgacheffe",
    "single origin coffee beans",
    "specialty coffee",
    "whole bean coffee",
    "freshly roasted coffee",
    "AuraBrew shop",
  ],
  alternates: {
    canonical: "/shop-details",
  },
  openGraph: {
    title: "Ethiopia Yirgacheffe Single Origin | AuraBrew Reserve",
    description:
      "Order Ethiopia Yirgacheffe Grade 1 single-origin whole bean coffee. Freshly roasted with floral jasmine, bergamot, candied lemon, and wild forest honey notes.",
    url: "https://aurabrew-cafe.com/shop-details",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/shop/details/large1.jpg",
        width: 1200,
        height: 630,
        alt: "AuraBrew Ethiopia Yirgacheffe Coffee Beans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethiopia Yirgacheffe Single Origin | AuraBrew Reserve",
    description:
      "Order Ethiopia Yirgacheffe Grade 1 single-origin whole bean coffee. Freshly roasted with floral jasmine, bergamot, candied lemon, and wild forest honey notes.",
    images: ["/img/shop/details/large1.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ShopDetailsClient />
      </main>
      <Footer />
    </>
  );
}
