"use client";

import React, { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/img/gallery/protfolio-img01.png",
    title: "Velvet Latte Art",
    category: "Barista Craft",
    caption: "Microfoam poured with delicate tulip geometry by our master barista.",
  },
  {
    id: 2,
    src: "/img/gallery/protfolio-img02.png",
    title: "Chemex Slow Extraction",
    category: "Single-Origin Pour",
    caption: "Ethiopian Guji roasted light to highlight jasmine and citrus notes.",
  },
  {
    id: 3,
    src: "/img/gallery/protfolio-img03.png",
    title: "Artisan Roasted Beans",
    category: "Micro-Lot Roasting",
    caption: "Freshly dropped from our cast-iron drum roaster at the first crack.",
  },
  {
    id: 4,
    src: "/img/gallery/protfolio-img04.png",
    title: "Precision Espresso Pull",
    category: "Espresso Bar",
    caption: "Golden tiger-stripe crema extracted under 9 bars of temperature-stable pressure.",
  },
  {
    id: 5,
    src: "/img/gallery/protfolio-img05.png",
    title: "Eco Burlap & Roastery Bags",
    category: "Sustainable Packaging",
    caption: "Sealed with one-way degassing valves to guarantee harvest-fresh aromas.",
  },
  {
    id: 6,
    src: "/img/shop/img1.jpg",
    title: "Artisanal Cafe Ambience",
    category: "Cafe Interior",
    caption: "Warm natural oak, roasted bean fragrance, and welcoming spaces.",
  },
];

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[prevIndex]);
  };

  return (
    <section className="profile fix pt-90 pb-90" style={{ backgroundColor: "#150f0b" }}>
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title center-align mb-45 text-center">
              <h5 style={{ color: "#c59d5f" }}>
                <span className="circle-left mr-2">
                  <img src="/img/bg/circle-left-w.png" alt="icon" style={{ display: "inline-block" }} />
                </span>
                Our Visual Journal
              </h5>
              <h2 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif" }}>
                Moments At AuraBrew Roastery
              </h2>
              <p style={{ color: "#b5aaa0", maxWidth: "600px", margin: "0 auto 15px auto" }}>
                Follow our daily journey from farm-picked green beans to the perfect cup. Tag{" "}
                <span style={{ color: "#c59d5f", fontWeight: 600 }}>#AuraBrewMoments</span> to get featured.
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 18px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(197, 157, 95, 0.12)",
                  border: "1px solid rgba(197, 157, 95, 0.3)",
                  color: "#c59d5f",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c59d5f";
                  e.currentTarget.style.color = "#1c120c";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(197, 157, 95, 0.12)";
                  e.currentTarget.style.color = "#c59d5f";
                }}
              >
                <i className="fab fa-instagram"></i> @AuraBrewRoasters
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Responsive Image Grid (Side-by-Side) */}
      <div className="container-fluid px-3 px-md-4">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "14px",
          }}
        >
          {galleryItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              aria-label={`View photo: ${item.title}`}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#201610",
                border: "1px solid rgba(197, 157, 95, 0.2)",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
                padding: 0,
                display: "block",
                textAlign: "left",
              }}
              className="gallery-card-btn"
            >
              <img
                src={item.src}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />

              {/* Hover Dark/Gold Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(20,13,8,0.7) 60%, rgba(15,10,6,0.95) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "16px",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
                className="gallery-overlay"
              >
                {/* Top Badge: Instagram Icon */}
                <div style={{ alignSelf: "flex-end" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(197, 157, 95, 0.9)",
                      color: "#18100b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>

                {/* Bottom Label */}
                <div>
                  <span
                    style={{
                      color: "#c59d5f",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {item.category}
                  </span>
                  <h6
                    style={{
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: 600,
                      marginBottom: "0",
                      fontFamily: "'Caudex', Georgia, serif",
                    }}
                  >
                    {item.title}
                  </h6>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(10, 7, 5, 0.88)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.25s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "800px",
              width: "100%",
              backgroundColor: "#1b140f",
              border: "1px solid rgba(197, 157, 95, 0.4)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
            }}
          >
            {/* Modal Image */}
            <div style={{ position: "relative", width: "100%", height: "460px", backgroundColor: "#0f0a07" }}>
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(197, 157, 95, 0.4)",
                  color: "#ffffff",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c59d5f";
                  e.currentTarget.style.color = "#18100b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                ✕
              </button>

              {/* Nav Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.55)",
                  border: "1px solid rgba(197, 157, 95, 0.3)",
                  color: "#c59d5f",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c59d5f";
                  e.currentTarget.style.color = "#18100b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
                  e.currentTarget.style.color = "#c59d5f";
                }}
              >
                ◀
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.55)",
                  border: "1px solid rgba(197, 157, 95, 0.3)",
                  color: "#c59d5f",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c59d5f";
                  e.currentTarget.style.color = "#18100b";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
                  e.currentTarget.style.color = "#c59d5f";
                }}
              >
                ▶
              </button>
            </div>

            {/* Modal Caption */}
            <div style={{ padding: "24px 30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <span
                  style={{
                    color: "#c59d5f",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                  }}
                >
                  {selectedItem.category}
                </span>
                <span style={{ color: "#8a7e75", fontSize: "12px" }}>
                  {galleryItems.findIndex((i) => i.id === selectedItem.id) + 1} of {galleryItems.length}
                </span>
              </div>
              <h4
                style={{
                  color: "#ffffff",
                  fontSize: "22px",
                  marginBottom: "8px",
                  fontFamily: "'Caudex', Georgia, serif",
                }}
              >
                {selectedItem.title}
              </h4>
              <p style={{ color: "#b5aaa0", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
