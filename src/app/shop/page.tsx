import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopCatalog from "@/components/ShopCatalog";

export const metadata: Metadata = {
  title: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
  description: "Buy freshly roasted whole bean coffee, manual pour-over drippers, French presses, and AuraBrew merchandise online.",
  keywords: ['buy coffee beans online', 'fresh roasted coffee', 'coffee gear shop', 'single origin whole bean', 'AuraBrew shop'],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
    description: "Buy freshly roasted whole bean coffee, manual pour-over drippers, French presses, and AuraBrew merchandise online.",
    url: "https://aurabrew-cafe.com/shop",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
    description: "Buy freshly roasted whole bean coffee, manual pour-over drippers, French presses, and AuraBrew merchandise online.",
    images: ["/img/slider/slider_bg.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb Header Banner */}
        <section
          className="breadcrumb-area d-flex align-items-center"
          style={{ backgroundImage: "url(/img/bg/bdrc-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-center">
                  <div className="breadcrumb-title">
                    <h1 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, margin: 0 }}>
                      Specialty Coffee Shop
                    </h1>
                    <div className="breadcrumb-wrap mt-15">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                          <li className="breadcrumb-item">
                            <Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
                              Home
                            </Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#c59d5f" }}>
                            Shop
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Modern Artisanal Coffee Shop Catalog */}
        <ShopCatalog />
      </main>
      <Footer />
    </>
  );
}
