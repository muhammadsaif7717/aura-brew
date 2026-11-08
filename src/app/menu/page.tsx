import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCatalog from "@/components/MenuCatalog";

export const metadata: Metadata = {
  title: "Artisanal Coffee & Culinary Menu | AuraBrew",
  description: "Explore the AuraBrew menu — Single-origin pour-overs, specialty espresso, nitro cold brews, and freshly baked artisanal pastries.",
  keywords: ['coffee menu', 'espresso drinks', 'cafe food', 'cold brew menu', 'AuraBrew menu'],
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Artisanal Coffee & Culinary Menu | AuraBrew",
    description: "Explore the AuraBrew menu — Single-origin pour-overs, specialty espresso, nitro cold brews, and freshly baked artisanal pastries.",
    url: "https://aurabrew-cafe.com/menu",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Artisanal Coffee & Culinary Menu | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisanal Coffee & Culinary Menu | AuraBrew",
    description: "Explore the AuraBrew menu — Single-origin pour-overs, specialty espresso, nitro cold brews, and freshly baked artisanal pastries.",
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
                      Our Artisanal Menu
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
                            Our Menu
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

        {/* Dedicated Complete Menu Catalog (Only Menu Items) */}
        <MenuCatalog />
      </main>
      <Footer />
    </>
  );
}
