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

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("about");
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
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
        width: "100%",
        height: "100vh",
        minHeight: "100dvh",
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
              backgroundImage: `linear-gradient(rgba(16, 16, 16, 0.58), rgba(16, 16, 16, 0.76)), url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.05)",
              transition: "opacity 950ms ease-in-out, transform 1300ms ease-out",
              pointerEvents: isActive ? "auto" : "none",
              display: "flex",
              alignItems: "center",
              zIndex: isActive ? 2 : 1,
            }}
          >
            <div className="container" style={{ position: "relative", zIndex: 3 }}>
              <div className="row justify-content-start align-items-center">
                <div className="col-xl-9 col-lg-10 col-md-11 col-sm-12">
                  <div
                    className="slider-content s-slider-content"
                    style={{
                      paddingTop: "clamp(80px, 12vh, 130px)",
                      paddingBottom: "clamp(60px, 10vh, 100px)",
                    }}
                  >
                    {/* Subtitle Badge */}
                    <div
                      style={{
                        display: "inline-block",
                        padding: "6px 16px",
                        backgroundColor: "rgba(197, 157, 95, 0.16)",
                        border: "1px solid rgba(197, 157, 95, 0.45)",
                        borderRadius: "30px",
                        color: "#c59d5f",
                        fontWeight: 700,
                        fontSize: "clamp(0.75rem, 2vw, 0.88rem)",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: "18px",
                        transform: isActive ? "translateY(0)" : "translateY(18px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 600ms cubic-bezier(0.16, 1, 0.3, 1) 150ms",
                      }}
                    >
                      {slide.subtitle}
                    </div>

                    {/* Main Title */}
                    <h1
                      style={{
                        color: "#ffffff",
                        fontSize: "clamp(2rem, 5.5vw, 4.3rem)",
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: "-0.5px",
                        marginBottom: "20px",
                        fontFamily: "'Caudex', Georgia, serif",
                        transform: isActive ? "translateY(0)" : "translateY(22px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1) 250ms",
                      }}
                    >
                      {slide.title}
                    </h1>

                    {/* Description Paragraph */}
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.88)",
                        fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                        lineHeight: 1.68,
                        maxWidth: "620px",
                        marginBottom: "34px",
                        transform: isActive ? "translateY(0)" : "translateY(22px)",
                        opacity: isActive ? 1 : 0,
                        transition: "all 700ms cubic-bezier(0.16, 1, 0.3, 1) 350ms",
                      }}
                    >
                      {slide.description}
                    </p>

                    {/* Action Buttons */}
                    <div
                      className="slider-btn d-flex flex-wrap align-items-center"
                      style={{
                        gap: "12px",
                        transform: isActive ? "translateY(0)" : "translateY(22px)",
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
                          padding: "clamp(10px, 2vw, 14px) clamp(22px, 3.5vw, 32px)",
                          fontWeight: 700,
                          fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)",
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
                          border: "2px solid rgba(255, 255, 255, 0.75)",
                          padding: "clamp(10px, 2vw, 14px) clamp(22px, 3.5vw, 32px)",
                          fontWeight: 700,
                          fontSize: "clamp(0.85rem, 1.6vw, 0.95rem)",
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
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.75)";
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

      {/* Pagination Indicators (Bottom Center) */}
      <div
        style={{
          position: "absolute",
          bottom: "75px",
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
                width: isActive ? "34px" : "10px",
                height: "10px",
                borderRadius: "10px",
                backgroundColor: isActive ? "#c59d5f" : "rgba(255, 255, 255, 0.45)",
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

      {/* Scroll Down Visual Indicator */}
      <a
        href="#about"
        onClick={scrollToAbout}
        aria-label="Scroll down to explore content"
        style={{
          position: "absolute",
          bottom: "22px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          color: "rgba(255, 255, 255, 0.75)",
          textDecoration: "none",
          fontSize: "0.78rem",
          letterSpacing: "1px",
          textTransform: "uppercase",
          transition: "color 0.25s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#c59d5f";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
        }}
      >
        <span style={{ fontSize: "0.72rem", fontWeight: 600 }}>Scroll</span>
        <i
          className="fas fa-chevron-down hero-scroll-chevron"
          style={{
            fontSize: "0.85rem",
            color: "#c59d5f",
          }}
        ></i>
      </a>
    </section>
  );
}
