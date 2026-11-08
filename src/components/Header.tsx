"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";

interface HeaderProps {
  hideTopBar?: boolean;
}

interface NavLinkItem {
  id: string;
  label: string;
}

const navItems: NavLinkItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "menu", label: "Menu" },
  { id: "shop", label: "Shop" },
  { id: "testimonials", label: "Reviews" },
  { id: "blog", label: "Blog" },
];

const mobileNavItems: NavLinkItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "features", label: "Our Features" },
  { id: "booking", label: "Book A Table" },
  { id: "menu", label: "Our Menu" },
  { id: "shop", label: "Our Online Shop" },
  { id: "testimonials", label: "Client Reviews" },
  { id: "skill", label: "Coffee We Use" },
  { id: "blog", label: "Our Blog" },
  { id: "newsletter", label: "Roastery Dispatch" },
  { id: "gallery", label: "Visual Journal" },
];

export default function Header({ hideTopBar = false }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // 1. Route Detection & Scroll Spy: Track which section or route is active
  useEffect(() => {
    // If on a dedicated subpage, highlight the corresponding nav item!
    if (pathname.startsWith("/menu")) {
      setActiveSection("menu");
      setIsScrolled(true);
      return;
    }
    if (pathname.startsWith("/blog")) {
      setActiveSection("blog");
      setIsScrolled(true);
      return;
    }
    if (pathname.startsWith("/shop")) {
      setActiveSection("shop");
      setIsScrolled(true);
      return;
    }
    if (pathname.startsWith("/about")) {
      setActiveSection("about");
      setIsScrolled(true);
      return;
    }
    if (pathname.startsWith("/contact")) {
      setActiveSection("booking");
      setIsScrolled(true);
      return;
    }
    if (pathname.startsWith("/services") || pathname.startsWith("/single-service")) {
      setActiveSection("features");
      setIsScrolled(true);
      return;
    }
    if (pathname.startsWith("/projects")) {
      setActiveSection("gallery");
      setIsScrolled(true);
      return;
    }

    if (pathname !== "/") return;

    const sections = [
      "home",
      "about",
      "features",
      "booking",
      "menu",
      "shop",
      "testimonials",
      "skill",
      "blog",
      "newsletter",
      "gallery",
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 140; // 140px header offset
      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            currentSection = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Check if initial hash is present
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const el = document.getElementById(hashId);
      if (el) {
        setTimeout(() => {
          const headerOffset = 75;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          setActiveSection(hashId);
        }, 150);
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // 2. Smooth Scroll Click Handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const headerOffset = 75;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL hash without page jump
        if (typeof window !== "undefined" && window.history) {
          window.history.pushState(null, "", `#${targetId}`);
        }
        setActiveSection(targetId);
      }
    } else {
      // If on another page (e.g. /blog-details), navigate back to home with hash
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header className="header-area w-full fixed top-0 left-0 right-0 z-50">
      {/* 1. Top Announcement Bar (Visible only at very top on desktop) */}
      {!hideTopBar && !isScrolled && (
        <div
          className="d-none d-lg-block w-full py-1.5 transition-all duration-300"
          style={{
            backgroundColor: "#20120a",
            borderBottom: "1px solid rgba(197, 157, 95, 0.2)",
            color: "#ffffff",
            fontSize: "12px",
          }}
        >
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center" style={{ gap: "10px", color: "#ffffff" }}>
                <i className="fas fa-clock" style={{ color: "#c59d5f" }}></i>
                <span style={{ color: "#ffffff", fontWeight: 500 }}>
                  Mon - Fri: 8:00 - 20:00 / Sat - Sun: 9:00 - 21:00
                </span>
              </div>
              <div className="d-flex align-items-center" style={{ gap: "24px" }}>
                <div className="d-flex align-items-center" style={{ gap: "6px" }}>
                  <i className="fas fa-phone-alt" style={{ color: "#c59d5f" }}></i>
                  <a
                    href="tel:18001213637"
                    className="top-bar-link"
                    style={{
                      color: "#ffffff",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c59d5f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    1800-121-3637
                  </a>
                </div>
                <div className="d-flex align-items-center" style={{ gap: "14px" }}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="top-bar-link"
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c59d5f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="top-bar-link"
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c59d5f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="top-bar-link"
                    style={{
                      color: "#ffffff",
                      fontSize: "13px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#c59d5f";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Navigation Bar (Always Fixed) */}
      <nav
        className="w-full transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? "rgba(35, 20, 14, 0.98)" : "rgba(43, 25, 18, 0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(197, 157, 95, 0.25)",
          boxShadow: isScrolled ? "0 8px 30px rgba(0, 0, 0, 0.45)" : "0 4px 15px rgba(0, 0, 0, 0.25)",
        }}
        aria-label="Main Navigation"
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-2.5">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <BrandLogo
                variant="light"
                size="md"
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
              />
            </div>

            {/* Desktop Navigation Links with Crisp White & Gold Active Highlighting */}
            <div className="d-none d-lg-flex align-items-center">
              <ul className="d-flex align-items-center mb-0 list-unstyled" style={{ gap: "28px" }}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id} className="relative">
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`nav-link-item d-inline-block py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                          isActive ? "active-item" : ""
                        }`}
                        style={{
                          position: "relative",
                          textDecoration: "none",
                          color: isActive ? "#c59d5f" : "#ffffff",
                          fontWeight: isActive ? 700 : 600,
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.color = "#c59d5f";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.color = "#ffffff";
                        }}
                      >
                        {item.label}
                        {isActive && (
                          <span
                            style={{
                              position: "absolute",
                              bottom: "-2px",
                              left: 0,
                              right: 0,
                              height: "2px",
                              backgroundColor: "#c59d5f",
                              borderRadius: "2px",
                              boxShadow: "0 0 8px rgba(197, 157, 95, 0.7)",
                              animation: "fadeIn 0.2s ease-in-out",
                            }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop CTA Action Button (Book A Table -> scrolls to #booking) */}
            <div className="d-none d-lg-block">
              <a
                href="#booking"
                onClick={(e) => scrollToSection(e, "booking")}
                className="btn d-inline-flex align-items-center justify-content-center cursor-pointer"
                style={{
                  backgroundColor: activeSection === "booking" ? "#c59d5f" : "#b98754",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.8px",
                  padding: "10px 22px",
                  borderRadius: "4px",
                  border: "none",
                  boxShadow: activeSection === "booking"
                    ? "0 0 15px rgba(197, 157, 95, 0.6)"
                    : "0 4px 15px rgba(185, 135, 84, 0.3)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
              >
                <i className="fas fa-calendar-check mr-2"></i> Book A Table
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="d-lg-none">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="d-flex align-items-center justify-content-center border-0 p-2 text-white"
                style={{
                  backgroundColor: "#2B1912",
                  border: "1px solid #c59d5f",
                  borderRadius: "6px",
                  width: "42px",
                  height: "42px",
                  cursor: "pointer",
                }}
                aria-label="Toggle navigation menu"
              >
                <i
                  className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
                  style={{ color: "#c59d5f" }}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer (Smooth In-Page Nav with Crisp White Links) */}
        {mobileMenuOpen && (
          <div
            className="d-lg-none w-full animate-fadeIn"
            style={{
              backgroundColor: "#20130d",
              borderTop: "1px solid rgba(197, 157, 95, 0.2)",
              padding: "18px 24px 28px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <ul className="list-unstyled mb-0">
              {mobileNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li
                    key={item.id}
                    style={{
                      borderBottom: "1px solid rgba(197, 157, 95, 0.12)",
                      padding: "11px 0",
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="d-flex align-items-center justify-content-between font-semibold"
                      style={{
                        color: isActive ? "#c59d5f" : "#ffffff",
                        textDecoration: "none",
                        fontSize: "15px",
                        transition: "color 0.2s ease",
                      }}
                    >
                      <span style={{ color: isActive ? "#c59d5f" : "#ffffff" }}>{item.label}</span>
                      {isActive && (
                        <span
                          style={{
                            fontSize: "11px",
                            backgroundColor: "rgba(197, 157, 95, 0.2)",
                            color: "#c59d5f",
                            padding: "2px 8px",
                            borderRadius: "10px",
                            border: "1px solid #c59d5f",
                          }}
                        >
                          Active
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}

              {/* Mobile CTA */}
              <li className="pt-3">
                <a
                  href="#booking"
                  onClick={(e) => scrollToSection(e, "booking")}
                  className="btn d-block text-center w-full"
                  style={{
                    backgroundColor: "#c59d5f",
                    color: "#18100b",
                    fontWeight: 700,
                    padding: "12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  <i className="fas fa-calendar-check mr-2"></i> Book A Table Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
