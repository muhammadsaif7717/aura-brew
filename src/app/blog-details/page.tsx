import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogComments from "@/components/BlogComments";

export const metadata: Metadata = {
  title: "The Sacred Art of Espresso Extraction | AuraBrew Journal",
  description:
    "Master the 1:2 espresso extraction ratio with water temperature calibration, grind distribution, and channeling prevention by AuraBrew Head Roaster Marcus Vance.",
  keywords: [
    "espresso extraction guide",
    "coffee brewing science",
    "espresso ratio",
    "golden crema technique",
    "AuraBrew coffee journal",
  ],
  alternates: {
    canonical: "/blog-details",
  },
  openGraph: {
    title: "The Sacred Art of Espresso Extraction | AuraBrew Journal",
    description:
      "Master the 1:2 espresso extraction ratio with water temperature calibration, grind distribution, and channeling prevention by AuraBrew Head Roaster Marcus Vance.",
    url: "https://aurabrew-cafe.com/blog-details",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/blog/inner_b1.jpg",
        width: 1200,
        height: 630,
        alt: "The Sacred Art of Espresso Extraction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Sacred Art of Espresso Extraction | AuraBrew Journal",
    description:
      "Master the 1:2 espresso extraction ratio with water temperature calibration, grind distribution, and channeling prevention.",
    images: ["/img/blog/inner_b1.jpg"],
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
          style={{
            backgroundImage: "url(/img/bg/bdrc-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-center">
                  <div className="breadcrumb-title">
                    <h1
                      style={{
                        color: "#ffffff",
                        fontFamily: "'Caudex', Georgia, serif",
                        fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      Coffee Journal Article
                    </h1>
                    <div className="breadcrumb-wrap mt-15">
                      <nav aria-label="breadcrumb">
                        <ol
                          className="breadcrumb justify-content-center"
                          style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}
                        >
                          <li className="breadcrumb-item">
                            <Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
                              Home
                            </Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link href="/blog" style={{ color: "#ffffff", textDecoration: "none" }}>
                              Journal
                            </Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#c59d5f" }}>
                            Brewing Science
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

        {/* Main Article Content */}
        <section className="inner-blog b-details-p pt-90 pb-120">
          <div className="container">
            <div className="row">
              {/* Left Column: Full Masterclass Article */}
              <div className="col-lg-8">
                <article className="blog-details-wrap">
                  <div className="details__content pb-30">
                    <div
                      style={{
                        display: "inline-block",
                        padding: "4px 14px",
                        backgroundColor: "rgba(197, 157, 95, 0.15)",
                        border: "1px solid rgba(197, 157, 95, 0.35)",
                        borderRadius: "20px",
                        color: "#c59d5f",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "14px",
                      }}
                    >
                      Specialty Espresso Guide
                    </div>

                    <h2
                      style={{
                        fontFamily: "'Caudex', Georgia, serif",
                        color: "#3f271e",
                        fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                        fontWeight: 700,
                        lineHeight: 1.25,
                        marginBottom: "18px",
                      }}
                    >
                      The Sacred Art of Espresso Extraction: Mastering the 1:2 Brew Ratio
                    </h2>

                    <div
                      className="meta-info mb-30"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                        padding: "12px 18px",
                        backgroundColor: "#f7f5f1",
                        borderRadius: "8px",
                        fontSize: "0.88rem",
                        color: "#6f7172",
                      }}
                    >
                      <span>
                        <i className="far fa-user text-[#c59d5f] mr-1"></i> By Marcus Vance (Head Roaster)
                      </span>
                      <span>
                        <i className="far fa-calendar-alt text-[#c59d5f] mr-1"></i> November 4, 2024
                      </span>
                      <span>
                        <i className="far fa-clock text-[#c59d5f] mr-1"></i> 6 min read
                      </span>
                    </div>

                    {/* Featured Hero Photo */}
                    <div className="details__content-img mb-35" style={{ borderRadius: "12px", overflow: "hidden" }}>
                      <img
                        src="/img/blog/inner_b1.jpg"
                        alt="Espresso Extraction with Golden Crema"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>

                    <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#3f271e", marginBottom: "20px" }}>
                      Pulling a sublime shot of espresso is where physics meets sensory art. Many home baristas struggle with shots that taste violently sour or astringently bitter. The culprit almost always lies in uneven extraction dynamics.
                    </p>

                    <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#6f7172", marginBottom: "24px" }}>
                      At AuraBrew, our baseline formula for single-origin coffees begins with an exact <strong>1:2 brew ratio</strong>. For example, 18 grams of freshly ground beans in a precision 58mm portafilter yielding precisely 36 grams of liquid espresso within 27 to 30 seconds at 9 bars of pressure.
                    </p>

                    {/* Pull Quote */}
                    <blockquote
                      style={{
                        margin: "35px 0",
                        padding: "24px 32px",
                        backgroundColor: "#fff8f0",
                        borderLeft: "4px solid #c59d5f",
                        borderRadius: "0 8px 8px 0",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "'Caudex', Georgia, serif",
                          color: "#3f271e",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          lineHeight: 1.5,
                          marginBottom: "8px",
                        }}
                      >
                        “Espresso extraction is a race against time. The initial ten seconds yield bright fruit acids, the middle fifteen deliver rich caramelized sugars, and the final five provide balancing roast bitters.”
                      </h4>
                      <footer style={{ color: "#a67642", fontWeight: 700, fontSize: "0.88rem" }}>
                        — Marcus Vance, AuraBrew Co-Founder
                      </footer>
                    </blockquote>

                    <h3
                      style={{
                        fontFamily: "'Caudex', Georgia, serif",
                        color: "#3f271e",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        margin: "30px 0 16px 0",
                      }}
                    >
                      The Three Golden Pillars of Flavor Balance
                    </h3>

                    <div className="row g-4 mb-35">
                      <div className="col-md-4">
                        <div
                          style={{
                            padding: "20px",
                            backgroundColor: "#fbf9f6",
                            borderRadius: "10px",
                            border: "1px solid #ebdcd0",
                            height: "100%",
                          }}
                        >
                          <span style={{ fontSize: "1.8rem", color: "#c59d5f", fontWeight: 800 }}>01</span>
                          <h5 style={{ color: "#3f271e", fontWeight: 700, margin: "10px 0 6px 0" }}>Water Temp</h5>
                          <p style={{ color: "#6f7172", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                            Maintain 93°C (199°F) for medium roasts. Higher temperatures scorch gentle volatile aromas.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          style={{
                            padding: "20px",
                            backgroundColor: "#fbf9f6",
                            borderRadius: "10px",
                            border: "1px solid #ebdcd0",
                            height: "100%",
                          }}
                        >
                          <span style={{ fontSize: "1.8rem", color: "#c59d5f", fontWeight: 800 }}>02</span>
                          <h5 style={{ color: "#3f271e", fontWeight: 700, margin: "10px 0 6px 0" }}>WDT Needling</h5>
                          <p style={{ color: "#6f7172", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                            Break microscopic clumping before tamping to completely eliminate micro-channeling.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          style={{
                            padding: "20px",
                            backgroundColor: "#fbf9f6",
                            borderRadius: "10px",
                            border: "1px solid #ebdcd0",
                            height: "100%",
                          }}
                        >
                          <span style={{ fontSize: "1.8rem", color: "#c59d5f", fontWeight: 800 }}>03</span>
                          <h5 style={{ color: "#3f271e", fontWeight: 700, margin: "10px 0 6px 0" }}>Pre-Infusion</h5>
                          <p style={{ color: "#6f7172", fontSize: "0.88rem", margin: 0, lineHeight: 1.5 }}>
                            Gently soak the puck at 2 bars for 4 seconds so the coffee bed swells evenly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "#6f7172", marginBottom: "30px" }}>
                      When every variable harmonizes, you will witness a rich tiger-striped stream of viscous liquid pouring into your demitasse, culminating in a velvety layer of micro-bubble crema that stays intact for minutes.
                    </p>

                    {/* Article Tags */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", paddingTop: "20px", borderTop: "1px solid #eee8df" }}>
                      <span style={{ fontWeight: 700, color: "#3f271e", fontSize: "0.9rem" }}>Topics:</span>
                      {["Espresso Science", "Extraction Ratios", "Golden Crema", "Home Barista", "Yirgacheffe"].map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "4px 12px",
                            backgroundColor: "#f7f5f1",
                            borderRadius: "16px",
                            fontSize: "0.8rem",
                            color: "#6f7172",
                            border: "1px solid #e5dfd6",
                          }}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Reader Comments */}
                  <BlogComments />
                </article>
              </div>

              {/* Right Column: Clean Roastery Sidebar */}
              <div className="col-lg-4">
                <aside className="sidebar-widget">
                  {/* Author Bio Card */}
                  <div
                    style={{
                      padding: "28px",
                      backgroundColor: "#3f271e",
                      color: "#ffffff",
                      borderRadius: "12px",
                      textAlign: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto 16px auto",
                        border: "3px solid #c59d5f",
                      }}
                    >
                      <img src="/img/team/team01.jpg" alt="Marcus Vance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h4 style={{ margin: "0 0 4px 0", color: "#ffffff", fontFamily: "'Caudex', Georgia, serif" }}>Marcus Vance</h4>
                    <span style={{ color: "#c59d5f", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                      Head Roaster &amp; Co-Founder
                    </span>
                    <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.88rem", lineHeight: 1.6, marginTop: "12px" }}>
                      Q-Grader certified with 14 years specializing in heirloom micro-lots and thermodynamics of drum roasting.
                    </p>
                  </div>

                  {/* More Coffee Guides */}
                  <div
                    style={{
                      padding: "24px",
                      backgroundColor: "#f7f5f1",
                      borderRadius: "12px",
                      border: "1px solid #e8e2d8",
                      marginBottom: "30px",
                    }}
                  >
                    <h4 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif", fontSize: "1.25rem", marginBottom: "18px" }}>
                      Recent Roastery Notes
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                      <li>
                        <Link href="/blog" style={{ textDecoration: "none" }}>
                          <span style={{ fontSize: "0.8rem", color: "#c59d5f", fontWeight: 700 }}>ORIGIN JOURNALS</span>
                          <h6 style={{ margin: "2px 0 0 0", color: "#3f271e", fontSize: "0.95rem", lineHeight: 1.4 }}>
                            Single-Origin Bean Journey: Inside High-Altitude Ethiopian Farms
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" style={{ textDecoration: "none" }}>
                          <span style={{ fontSize: "0.8rem", color: "#c59d5f", fontWeight: 700 }}>BARISTA CRAFT</span>
                          <h6 style={{ margin: "2px 0 0 0", color: "#3f271e", fontSize: "0.95rem", lineHeight: 1.4 }}>
                            The Chemistry of Microfoam: Achieving Silk Texture &amp; Latte Art
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" style={{ textDecoration: "none" }}>
                          <span style={{ fontSize: "0.8rem", color: "#c59d5f", fontWeight: 700 }}>ROASTERY SECRETS</span>
                          <h6 style={{ margin: "2px 0 0 0", color: "#3f271e", fontSize: "0.95rem", lineHeight: 1.4 }}>
                            Why Small-Batch Drum Roasting Unlocks Richer Cocoa Tones
                          </h6>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Roastery Direct Shop CTA */}
                  <div
                    style={{
                      padding: "26px",
                      backgroundColor: "#fff8f0",
                      borderRadius: "12px",
                      border: "1px dashed #c59d5f",
                      textAlign: "center",
                    }}
                  >
                    <i className="fas fa-coffee" style={{ fontSize: "2rem", color: "#c59d5f", marginBottom: "12px" }}></i>
                    <h5 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif", margin: "0 0 8px 0" }}>Brew This Coffee At Home</h5>
                    <p style={{ color: "#6f7172", fontSize: "0.88rem", marginBottom: "16px" }}>
                      Order fresh roasted Ethiopian Yirgacheffe roasted this week in our micro-roastery.
                    </p>
                    <Link
                      href="/shop"
                      style={{
                        padding: "10px 22px",
                        backgroundColor: "#3f271e",
                        color: "#c59d5f",
                        borderRadius: "4px",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      Visit Coffee Shop
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
