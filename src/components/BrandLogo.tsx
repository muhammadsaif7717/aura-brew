"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className = "",
  variant = "light",
  size = "md",
}: BrandLogoProps) {
  const isLight = variant === "light"; // Light text for dark coffee background
  const textColor = isLight ? "#FFFFFF" : "#3F271E";
  const accentColor = "#C59D5F"; // Golden Crema
  const subtextColor = isLight ? "#E2D3C4" : "#7A5C4D";

  const scale = size === "sm" ? 0.8 : size === "lg" ? 1.2 : 1.0;

  return (
    <Link
      href="/"
      className={`d-inline-flex align-items-center text-decoration-none group ${className}`}
      style={{ gap: `${12 * scale}px` }}
      aria-label="AuraBrew Artisanal Roastery Home"
    >
      {/* Artisanal Coffee Crest Icon */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{
          width: `${44 * scale}px`,
          height: `${44 * scale}px`,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #4A2E24 0%, #2A1710 100%)",
          border: `2px solid ${accentColor}`,
          boxShadow: "0 4px 12px rgba(197, 157, 95, 0.25)",
        }}
      >
        <svg
          width={24 * scale}
          height={24 * scale}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Steam curves */}
          <path
            d="M8 3C8 4.5 7 5.5 7 7M12 2C12 4 11 5 11 7M16 3C16 4.5 15 5.5 15 7"
            stroke={accentColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Coffee cup */}
          <path
            d="M5 9H17C17.5 13 15 16 11 16C7 16 4.5 13 5 9Z"
            fill={accentColor}
            fillOpacity="0.2"
            stroke={accentColor}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* Cup handle */}
          <path
            d="M17 10H18.5C19.8807 10 21 11.1193 21 12.5C21 13.8807 19.8807 15 18.5 15H16.2"
            stroke={accentColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Saucer */}
          <path
            d="M3 18H19"
            stroke={accentColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="d-flex flex-column text-left leading-tight">
        <span
          style={{
            fontFamily: "'Caudex', Georgia, serif",
            fontSize: `${24 * scale}px`,
            fontWeight: 700,
            color: textColor,
            letterSpacing: "0.5px",
            lineHeight: 1.1,
          }}
        >
          Aura<span style={{ color: accentColor }}>Brew</span>
        </span>
        <span
          style={{
            fontSize: `${9 * scale}px`,
            fontWeight: 600,
            color: subtextColor,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            fontFamily: "'Roboto', sans-serif",
            marginTop: "2px",
          }}
        >
          Coffee Roasters
        </span>
      </div>
    </Link>
  );
}

