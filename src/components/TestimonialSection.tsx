"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  category: string;
  quote: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Specialty Coffee Connoisseur",
    avatar: "/img/testimonial/testi_avatar.png",
    rating: 5,
    category: "Pour-Over",
    quote:
      "The Ethiopian Yirgacheffe pour-over here is truly unmatched in depth and floral clarity. AuraBrew has elevated specialty coffee into an exquisite daily ritual that I look forward to every morning.",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Architect & Daily Regular",
    avatar: "/img/testimonial/testi_avatar_02.png",
    rating: 5,
    category: "Espresso Bar",
    quote:
      "The artisanal interior, warm acoustics, and precision double-shot flat whites make this the finest cafe in the city. The team treats coffee like an art form and the atmosphere is unbeatable.",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Food & Travel Columnist",
    avatar: "/img/team/team01.jpg",
    rating: 5,
    category: "Roastery",
    quote:
      "From the freshly roasted Colombian micro-lot beans to the warm almond brioche, every detail at AuraBrew whispers craftsmanship and uncompromising passion. An absolute culinary gem.",
    date: "2 weeks ago",
  },
];

export default function TestimonialSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Reviews" },
    { key: "Pour-Over", label: "Pour-Over Bar" },
    { key: "Espresso Bar", label: "Espresso Bar" },
    { key: "Roastery", label: "Roastery & Bakery" },
  ];

  const filtered =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeTab);

  return (
    <section
      className="testimonial-area pt-120 pb-100 p-relative fix"
      style={{
        backgroundColor: "#120d09",
        backgroundImage: "radial-gradient(ellipse at 50% 20%, rgba(197, 157, 95, 0.08) 0%, rgba(18, 13, 9, 0) 70%)",
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title center-align mb-40 text-center">
              <h5 style={{ color: "#c59d5f" }}>
                <span className="circle-left mr-2">
                  <img src="/img/bg/circle-left-w.png" alt="icon" style={{ display: "inline-block" }} />
                </span>
                Patron Experiences
              </h5>
              <h2 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif" }}>
                What Our Clients Say
              </h2>
              <p style={{ color: "#b5aaa0", maxWidth: "620px", margin: "0 auto" }}>
                Authentic words from coffee lovers, daily regulars, and visiting connoisseurs who make AuraBrew their cherished coffee home.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-45">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  style={{
                    backgroundColor: activeTab === cat.key ? "#c59d5f" : "rgba(255, 255, 255, 0.05)",
                    color: activeTab === cat.key ? "#1c120c" : "#e0d6cc",
                    border: activeTab === cat.key ? "1px solid #c59d5f" : "1px solid rgba(197, 157, 95, 0.25)",
                    padding: "8px 20px",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== cat.key) {
                      e.currentTarget.style.borderColor = "#c59d5f";
                      e.currentTarget.style.color = "#c59d5f";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== cat.key) {
                      e.currentTarget.style.borderColor = "rgba(197, 157, 95, 0.25)";
                      e.currentTarget.style.color = "#e0d6cc";
                    }
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Side-by-Side Responsive Testimonial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "28px",
          }}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#1b140f",
                border: "1px solid rgba(197, 157, 95, 0.2)",
                borderRadius: "16px",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#c59d5f";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(197, 157, 95, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(197, 157, 95, 0.2)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";
              }}
            >
              {/* Header: Rating & Quote Icon */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  {/* Star Rating */}
                  <div style={{ display: "flex", gap: "4px", color: "#c59d5f", fontSize: "16px" }}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Decorative Quote Mark */}
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 157, 95, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/img/testimonial/qt-icon.png"
                      alt="quote"
                      style={{ width: "16px", opacity: 0.85 }}
                    />
                  </div>
                </div>

                {/* Category Tag */}
                <div style={{ marginBottom: "14px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      color: "#c59d5f",
                      backgroundColor: "rgba(197, 157, 95, 0.1)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(197, 157, 95, 0.2)",
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Review Text */}
                <p
                  style={{
                    color: "#d8cec5",
                    fontSize: "15px",
                    lineHeight: "1.75",
                    fontStyle: "italic",
                    marginBottom: "28px",
                  }}
                >
                  {item.quote}
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid #c59d5f",
                    marginRight: "15px",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h6
                    style={{
                      color: "#ffffff",
                      fontSize: "17px",
                      fontWeight: 600,
                      marginBottom: "2px",
                      fontFamily: "'Caudex', Georgia, serif",
                    }}
                  >
                    {item.name}
                  </h6>
                  <span style={{ color: "#a5998f", fontSize: "13px" }}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

