import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mobile Espresso Bar & Private Event Catering | AuraBrew",
  description: "Detailed guide to AuraBrew's bespoke barista bars, mobile espresso catering packages, and professional coffee consultation.",
  keywords: ['barista service', 'coffee bar event', 'corporate coffee catering', 'mobile espresso bar', 'AuraBrew'],
  alternates: {
    canonical: "/single-service",
  },
  openGraph: {
    title: "Mobile Espresso Bar & Private Event Catering | AuraBrew",
    description: "Detailed guide to AuraBrew's bespoke barista bars, event catering packages, and professional coffee consultation.",
    url: "https://aurabrew-cafe.com/single-service",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/gallery/protfolio-img04.png",
        width: 1200,
        height: 630,
        alt: "AuraBrew Mobile Espresso Bar Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Espresso Bar & Private Event Catering | AuraBrew",
    description: "Detailed guide to AuraBrew's bespoke barista bars, event catering packages, and professional coffee consultation.",
    images: ["/img/gallery/protfolio-img04.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb Area */}
        <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(/img/bg/bdrc-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-center">
                  <div className="breadcrumb-title">
                    <h1 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, margin: 0 }}>
                      Service Details
                    </h1>
                    <div className="breadcrumb-wrap mt-15">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                          <li className="breadcrumb-item"><Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>Home</Link></li>
                          <li className="breadcrumb-item"><Link href="/services" style={{ color: "#ffffff", textDecoration: "none" }}>Services</Link></li>
                          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#c59d5f" }}>Mobile Espresso Bar</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Service Details Section */}
        <div className="about-service-area pt-90 pb-120">
          <div className="container">
            <div className="row">
              {/* Sidebar Navigation */}
              <div className="col-lg-4 col-md-12 col-sm-12 order-1 mb-40">
                <aside className="service-sidebar">
                  <div
                    style={{
                      padding: "26px",
                      backgroundColor: "#f7f5f1",
                      borderRadius: "12px",
                      border: "1px solid #e8e2d8",
                      marginBottom: "30px",
                    }}
                  >
                    <h4 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif", fontSize: "1.25rem", marginBottom: "16px" }}>
                      Our Coffee Services
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                      {[
                        { title: "Mobile Espresso Bar Catering", active: true },
                        { title: "Weekly Wholesale Bean Delivery", active: false },
                        { title: "Private Cupping & Workshops", active: false },
                        { title: "Corporate Coffee Subscriptions", active: false },
                        { title: "Commercial Espresso Machine Rental", active: false },
                      ].map((svc, i) => (
                        <li key={i}>
                          <Link
                            href="/services"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "12px 16px",
                              borderRadius: "8px",
                              backgroundColor: svc.active ? "#3f271e" : "#ffffff",
                              color: svc.active ? "#c59d5f" : "#3f271e",
                              fontWeight: 600,
                              fontSize: "0.92rem",
                              textDecoration: "none",
                              border: svc.active ? "1px solid #3f271e" : "1px solid #ebe5dc",
                            }}
                          >
                            <span>{svc.title}</span>
                            <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Contact Box */}
                  <div
                    style={{
                      padding: "28px",
                      backgroundColor: "#3f271e",
                      borderRadius: "12px",
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    <i className="fas fa-headset" style={{ fontSize: "2.2rem", color: "#c59d5f", marginBottom: "14px" }}></i>
                    <h4 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif", margin: "0 0 8px 0" }}>Book Event Consultation</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "18px" }}>
                      Need a custom coffee menu or have an upcoming conference, wedding, or VIP corporate retreat? Speak directly with our lead event coordinator.
                    </p>
                    <a
                      href="tel:18001213637"
                      style={{
                        display: "inline-block",
                        padding: "10px 22px",
                        backgroundColor: "#c59d5f",
                        color: "#101010",
                        borderRadius: "4px",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                      }}
                    >
                      Call: 1800-121-3637
                    </a>
                  </div>
                </aside>
              </div>

              {/* Main Body */}
              <div className="col-lg-8 col-md-12 col-sm-12 order-2">
                <div className="service-detail">
                  <div className="content-box">
                    <span style={{ color: "#c59d5f", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 700, fontSize: "0.85rem" }}>
                      Premium Event Solution
                    </span>
                    <h2 style={{ fontFamily: "'Caudex', Georgia, serif", color: "#3f271e", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, margin: "8px 0 20px 0" }}>
                      Turnkey Mobile Espresso Bar &amp; Barista Experience
                    </h2>

                    <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#3f271e", marginBottom: "20px" }}>
                      Elevate your next gathering with AuraBrew&apos;s full-service mobile espresso bar. We bring the full craft roastery experience to your location—complete with commercial dual-boiler espresso equipment, certified master baristas, and artisanal whole-bean coffees.
                    </p>

                    <div className="row g-4 my-4">
                      <div className="col-md-6">
                        <div style={{ borderRadius: "10px", overflow: "hidden", height: "240px" }}>
                          <img src="/img/gallery/protfolio-img04.png" alt="Pouring latte art" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ borderRadius: "10px", overflow: "hidden", height: "240px" }}>
                          <img src="/img/gallery/protfolio-img03.png" alt="Barista station setup" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: "'Caudex', Georgia, serif", color: "#3f271e", fontSize: "1.45rem", fontWeight: 700, margin: "30px 0 16px 0" }}>
                      What Every Mobile Espresso Package Includes
                    </h3>

                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
                      {[
                        "Custom branded espresso bar and display menu",
                        "Two-group commercial Italian espresso machine",
                        "Unlimited drinks: Cortados, Flat Whites, Lattes, Cold Brews",
                        "Organic dairy, oat milk, and house syrups",
                        "SCA-certified master baristas with latte art service",
                        "Compostable paper cups, sleeves & stirrers",
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", color: "#3f271e" }}>
                          <i className="fas fa-check-circle" style={{ color: "#c59d5f" }}></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 style={{ fontFamily: "'Caudex', Georgia, serif", color: "#3f271e", fontSize: "1.45rem", fontWeight: 700, margin: "30px 0 16px 0" }}>
                      Tailored Event Packages
                    </h3>

                    <div className="row g-4 mb-40">
                      <div className="col-md-4">
                        <div style={{ padding: "22px", borderRadius: "10px", backgroundColor: "#fff8f0", border: "1px solid #eddcc6", height: "100%" }}>
                          <h5 style={{ color: "#3f271e", fontWeight: 700, margin: "0 0 8px 0" }}>Intimate Gathering</h5>
                          <span style={{ fontSize: "1.35rem", fontWeight: 700, color: "#c59d5f", fontFamily: "'Caudex', Georgia, serif" }}>Up to 40 Guests</span>
                          <p style={{ color: "#6f7172", fontSize: "0.85rem", marginTop: "8px", lineHeight: 1.5 }}>
                            2 hours continuous service, 1 lead barista, full espresso &amp; americano bar.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div style={{ padding: "22px", borderRadius: "10px", backgroundColor: "#3f271e", color: "#ffffff", border: "1px solid #3f271e", height: "100%" }}>
                          <h5 style={{ color: "#c59d5f", fontWeight: 700, margin: "0 0 8px 0" }}>Signature Event</h5>
                          <span style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", fontFamily: "'Caudex', Georgia, serif" }}>Up to 120 Guests</span>
                          <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", marginTop: "8px", lineHeight: 1.5 }}>
                            4 hours continuous service, 2 master baristas, full hot &amp; nitro cold brew bar.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div style={{ padding: "22px", borderRadius: "10px", backgroundColor: "#fff8f0", border: "1px solid #eddcc6", height: "100%" }}>
                          <h5 style={{ color: "#3f271e", fontWeight: 700, margin: "0 0 8px 0" }}>Grand Gala</h5>
                          <span style={{ fontSize: "1.35rem", fontWeight: 700, color: "#c59d5f", fontFamily: "'Caudex', Georgia, serif" }}>120+ Guests</span>
                          <p style={{ color: "#6f7172", fontSize: "0.85rem", marginTop: "8px", lineHeight: 1.5 }}>
                            Full-day dual station bar, specialty pastries, custom drink naming, multi-barista team.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                      <Link
                        href="/contact"
                        style={{
                          padding: "12px 30px",
                          backgroundColor: "#3f271e",
                          color: "#c59d5f",
                          borderRadius: "4px",
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          textDecoration: "none",
                        }}
                      >
                        Book Event Service
                      </Link>
                      <Link
                        href="/services"
                        style={{
                          padding: "12px 30px",
                          backgroundColor: "transparent",
                          color: "#3f271e",
                          borderRadius: "4px",
                          border: "1px solid #3f271e",
                          fontWeight: 700,
                          fontSize: "0.92rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          textDecoration: "none",
                        }}
                      >
                        All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
