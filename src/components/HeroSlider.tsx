"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface SlideData {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  bgImage: string;
  primaryBtn: {
    label: string;
    href: string;
  };
  secondaryBtn: {
    label: string;
    href: string;
  };
}

const slides: SlideData[] = [
  {
    id: 1,
    subtitle: "Welcome To AuraBrew Cafe",
    title: "Enjoy Your Morning Coffee Shot",
    description:
      "Awaken your senses with single-origin beans, precision espresso extraction, and silky microfoam crafted daily by our master baristas.",
    bgImage: "/img/slider/slider_bg.png",
    primaryBtn: { label: "Book A Table", href: "#booking" },
    secondaryBtn: { label: "Explore Menu", href: "/menu" },
  },
  {
    id: 2,
    subtitle: "Artisanal Micro-Roastery",
    title: "Roasted In Small Batches Daily",
    description:
      "Unlocking rich caramel notes, dark cocoa undertones, and vibrant fruity aromatics through slow drum roasting in our heritage roastery.",
    bgImage: "/img/slider/slider_bg_02.png",
    primaryBtn: { label: "Discover Menu", href: "/menu" },
    secondaryBtn: { label: "Coffee Journal", href: "/blog" },
  },
  {
    id: 3,
    subtitle: "Master Barista Experience",
    title: "Precision Craft & Golden Crema",
    description:
      "From hand-poured Chemex to velvety cortados and nitro cold brews, every cup is an ode to the finest coffee origins on Earth.",
    bgImage: "/img/bg/bdrc-bg.jpg",
    primaryBtn: { label: "Reserve Table", href: "#booking" },
    secondaryBtn: { label: "Full Menu", href: "/menu" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      className="hero-slider-section p-relative fix"
      aria-label="Hero Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        minHeight: "720px",
        backgroundColor: "#101010",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(rgba(16, 16, 16, 0.55), rgba(16, 16, 16, 0.72)), url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.04)",
              transition: "opacity 900ms ease-in-out, transform 1200ms ease-out",
              pointerEvents: isActive ? "auto" : "none",
              display: "flex",
              alignItems: "center",
              zIndex: isActive ? 2 : 1,
            }}
          >
            <div className="container" style={{ position: "relative", zIndex: 3 }}>
              <div className="row justify-content-start align-items-center">
                <div className="col-xl-8 col-lg-9 col-md-11">
                  <div
                    className="slider-content s-slider-content"
                    style={{
                      paddingTop: "60px",
                      paddingBottom: "60px",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        padding: "6px 16px",
                        backgroundColor: "rgba(197, 157, 95, 0.15)",
                        border: "1px solid rgba(197, 157, 95, 0.4)",
                        borderRadius: "30px",
                        color: "#c59d5f",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: "16px",
                        transform: isActive ? "translateY(0)" : "translateY(20px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 600ms cubic-bezier(0.16, 1, 0.3, 1) 150ms",
                      }}
                    >
                      {slide.subtitle}
                    </div>

                    <h1
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                        fontWeight: 700,
                        lineHeight: 1.18,
                        letterSpacing: "-0.5px",
                        marginBottom: "20px",
                        fontFamily: "'Caudex', Georgia, serif",
                        transform: isActive ? "translateY(0)" : "translateY(24px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1) 250ms",
                      }}
                    >
                      {slide.title}
                    </h1>

                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.85)",
                        fontSize: "clamp(1rem, 1.8vw, 1.18rem)",
                        lineHeight: 1.68,
                        maxWidth: "620px",
                        marginBottom: "36px",
                        transform: isActive ? "translateY(0)" : "translateY(24px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1) 350ms",
                      }}
                    >
                      {slide.description}
                    </p>

                    <div
                      className="slider-btn d-flex flex-wrap gap-3 align-items-center"
                      style={{
                        transform: isActive ? "translateY(0)" : "translateY(24px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1) 450ms",
                      }}
                    >
                      <Link
                        href={slide.primaryBtn.href}
                        className="btn ss-btn"
                        style={{
                          backgroundColor: "#c59d5f",
                          color: "#101010",
                          border: "2px solid #c59d5f",
                          padding: "14px 32px",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                          borderRadius: "4px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          boxShadow: "0 4px 14px rgba(197, 157, 95, 0.3)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {slide.primaryBtn.label}
                        <i className="fas fa-arrow-right" style={{ fontSize: "0.85rem" }}></i>
                      </Link>

                      <Link
                        href={slide.secondaryBtn.href}
                        className="btn ss-btn"
                        style={{
                          backgroundColor: "transparent",
                          color: "#ffffff",
                          border: "2px solid rgba(255, 255, 255, 0.7)",
                          padding: "14px 32px",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                          borderRadius: "4px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#c59d5f";
                          e.currentTarget.style.color = "#c59d5f";
                          e.currentTarget.style.backgroundColor = "rgba(197, 157, 95, 0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.7)";
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {slide.secondaryBtn.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "24px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "rgba(16, 16, 16, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.25s ease",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#c59d5f";
          e.currentTarget.style.color = "#101010";
          e.currentTarget.style.borderColor = "#c59d5f";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(16, 16, 16, 0.6)";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        }}
      >
        <i className="fas fa-chevron-left" style={{ fontSize: "16px" }}></i>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "24px",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "rgba(16, 16, 16, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.25s ease",
          outline: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#c59d5f";
          e.currentTarget.style.color = "#101010";
          e.currentTarget.style.borderColor = "#c59d5f";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(16, 16, 16, 0.6)";
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        }}
      >
        <i className="fas fa-chevron-right" style={{ fontSize: "16px" }}></i>
      </button>

      {/* Pagination Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
        role="tablist"
        aria-label="Slide Indicators"
      >
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              onClick={() => setCurrent(idx)}
              style={{
                width: isActive ? "32px" : "10px",
                height: "10px",
                borderRadius: "10px",
                backgroundColor: isActive ? "#c59d5f" : "rgba(255, 255, 255, 0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
                outline: "none",
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

