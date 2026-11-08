import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCatalog from "@/components/BlogCatalog";

export const metadata: Metadata = {
  title: "Coffee Journal & Roasting Culture | AuraBrew Blog",
  description: "Read expert articles on manual brewing techniques, espresso recipes, origin farm trips, and coffeehouse news from AuraBrew.",
  keywords: ['coffee blog', 'brewing guides', 'latte art tips', 'coffee roasting journal', 'AuraBrew blog'],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Coffee Journal & Roasting Culture | AuraBrew Blog",
    description: "Read expert articles on manual brewing techniques, espresso recipes, origin farm trips, and coffeehouse news from AuraBrew.",
    url: "https://aurabrew-cafe.com/blog",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Coffee Journal & Roasting Culture | AuraBrew Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Journal & Roasting Culture | AuraBrew Blog",
    description: "Read expert articles on manual brewing techniques, espresso recipes, origin farm trips, and coffeehouse news from AuraBrew.",
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
                      The Coffee Journal
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
                            Blog & Articles
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

        {/* Dedicated Coffee Journal Catalog (Only Blog Articles) */}
        <BlogCatalog />
      </main>
      <Footer />
    </>
  );
}
