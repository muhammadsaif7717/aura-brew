import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AuraBrew Cafe",
  description: "Find answers regarding AuraBrew's coffee sourcing, table bookings, vegan milk options, brewing guides, and delivery.",
  keywords: ['coffee FAQ', 'cafe questions', 'table booking FAQ', 'coffee bean brewing', 'AuraBrew FAQ'],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | AuraBrew Cafe",
    description: "Find answers regarding AuraBrew's coffee sourcing, table bookings, vegan milk options, brewing guides, and delivery.",
    url: "https://aurabrew-cafe.com/faq",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions | AuraBrew Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AuraBrew Cafe",
    description: "Find answers regarding AuraBrew's coffee sourcing, table bookings, vegan milk options, brewing guides, and delivery.",
    images: ["/img/slider/slider_bg.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb Area */}
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
                      Frequently Asked Questions
                    </h1>
                    <div className="breadcrumb-wrap mt-15">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                          <li className="breadcrumb-item"><Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#c59d5f" }}>FAQ</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Main Section */}
        <section id="faq" className="faq-area pt-90 pb-90">
          <div className="container">
            <div className="section-title center-align mb-50 text-center">
              <span style={{ color: "#c59d5f", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600, fontSize: "0.85rem", display: "inline-block", marginBottom: "8px" }}>
                Answers &amp; Clarity
              </span>
              <h2 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#3f271e", fontWeight: 700 }}>
                Everything You Need To Know About AuraBrew
              </h2>
              <p style={{ color: "#6f7172", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px", margin: "10px auto 0 auto" }}>
                Have questions about our single-origin farm sourcing, table reservations, vegan oat milk substitutions, or nationwide whole-bean shipping?
              </p>
            </div>

            {/* Interactive Accordion */}
            <FaqAccordion />

            {/* Need More Assistance Card */}
            <div
              style={{
                marginTop: "60px",
                padding: "30px 40px",
                backgroundColor: "#fff8f0",
                borderRadius: "12px",
                border: "1px dashed #c59d5f",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div>
                <h4 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif", margin: "0 0 6px 0" }}>Still Have Questions?</h4>
                <p style={{ color: "#6f7172", margin: 0, fontSize: "0.95rem" }}>
                  Our concierge team is available Monday through Saturday to assist with reservations and custom orders.
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "#3f271e",
                    color: "#c59d5f",
                    borderRadius: "4px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/#booking"
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "#c59d5f",
                    color: "#101010",
                    borderRadius: "4px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Book A Table
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Real Interactive Newsletter Component */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
