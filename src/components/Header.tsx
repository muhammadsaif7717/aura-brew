"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";

interface HeaderProps {
  hideTopBar?: boolean;
}

export default function Header({ hideTopBar = false }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setDesktopDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path: string) => pathname === path;
  const isParentActive = (paths: string[]) => paths.includes(pathname);

  return (
    <header className="header-area w-full relative z-50">
      {/* 1. Top Announcement Bar */}
      {!hideTopBar && (
        <div
          className="d-none d-lg-block w-full py-2"
          style={{
            backgroundColor: "#2B1912",
            borderBottom: "1px solid rgba(185, 135, 84, 0.2)",
            color: "#E5DCD5",
            fontSize: "13px",
          }}
        >
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              {/* Opening Hours */}
              <div className="d-flex align-items-center" style={{ gap: "10px" }}>
                <i className="fas fa-clock text-[#b98754]"></i>
                <span>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</span>
              </div>

              {/* Contact & Socials */}
              <div className="d-flex align-items-center" style={{ gap: "28px" }}>
                <div className="d-flex align-items-center" style={{ gap: "8px" }}>
                  <i className="fas fa-phone-alt text-[#b98754]"></i>
                  <a
                    href="tel:18001213637"
                    className="text-[#E5DCD5] hover:text-[#b98754] transition-colors"
                  >
                    1800-121-3637
                  </a>
                </div>

                <div className="d-flex align-items-center" style={{ gap: "14px" }}>
                  <span className="text-xs uppercase tracking-widest text-[#949698]">Follow:</span>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-[#E5DCD5] hover:text-[#b98754] transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-[#E5DCD5] hover:text-[#b98754] transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-[#E5DCD5] hover:text-[#b98754] transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 shadow-lg"
            : "relative"
        }`}
        style={{
          backgroundColor: isSticky ? "rgba(43, 25, 18, 0.98)" : "#3F271E",
          backdropFilter: isSticky ? "blur(12px)" : "none",
          borderBottom: "1px solid rgba(185, 135, 84, 0.25)",
        }}
        aria-label="Main Navigation"
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Brand Logo Component */}
            <div className="flex-shrink-0">
              <BrandLogo variant="light" size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="d-none d-lg-flex align-items-center">
              <ul
                className="d-flex align-items-center mb-0 list-unstyled"
                style={{ gap: "28px" }}
              >
                {/* Home Link */}
                <li>
                  <Link
                    href="/"
                    className={`py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isActive("/") ? "text-[#b98754]" : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    Home
                  </Link>
                </li>

                {/* About Link */}
                <li>
                  <Link
                    href="/about"
                    className={`py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isActive("/about") ? "text-[#b98754]" : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    About
                  </Link>
                </li>

                {/* Menu Link */}
                <li>
                  <Link
                    href="/menu"
                    className={`py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isActive("/menu") ? "text-[#b98754]" : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    Menu
                  </Link>
                </li>

                {/* Services Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdown("services")}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Link
                    href="/services"
                    className={`d-inline-flex align-items-center py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isParentActive(["/services", "/single-service"]) ? "text-[#b98754]" : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    Services <i className="fas fa-chevron-down text-xs ml-1.5 opacity-70"></i>
                  </Link>
                  {desktopDropdown === "services" && (
                    <div
                      className="position-absolute shadow-xl py-2"
                      style={{
                        top: "100%",
                        left: 0,
                        minWidth: "190px",
                        backgroundColor: "#2B1912",
                        border: "1px solid #4A352D",
                        borderRadius: "4px",
                        zIndex: 100,
                      }}
                    >
                      <Link
                        href="/services"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/services") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        All Services
                      </Link>
                      <Link
                        href="/single-service"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/single-service") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Service Details
                      </Link>
                    </div>
                  )}
                </li>

                {/* Pages Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdown("pages")}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <a
                    href="#pages"
                    className={`d-inline-flex align-items-center py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isParentActive(["/projects", "/faq", "/team", "/shop", "/shop-details"])
                        ? "text-[#b98754]"
                        : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    Pages <i className="fas fa-chevron-down text-xs ml-1.5 opacity-70"></i>
                  </a>
                  {desktopDropdown === "pages" && (
                    <div
                      className="position-absolute shadow-xl py-2"
                      style={{
                        top: "100%",
                        left: 0,
                        minWidth: "190px",
                        backgroundColor: "#2B1912",
                        border: "1px solid #4A352D",
                        borderRadius: "4px",
                        zIndex: 100,
                      }}
                    >
                      <Link
                        href="/projects"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/projects") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Roastery Gallery
                      </Link>
                      <Link
                        href="/faq"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/faq") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        FAQ
                      </Link>
                      <Link
                        href="/team"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/team") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Barista Team
                      </Link>
                      <Link
                        href="/shop"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/shop") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Coffee Beans &amp; Shop
                      </Link>
                      <Link
                        href="/shop-details"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/shop-details") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Product Details
                      </Link>
                    </div>
                  )}
                </li>

                {/* Blog Dropdown */}
                <li
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdown("blog")}
                  onMouseLeave={() => setDesktopDropdown(null)}
                >
                  <Link
                    href="/blog"
                    className={`d-inline-flex align-items-center py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isParentActive(["/blog", "/blog-details"]) ? "text-[#b98754]" : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    Blog <i className="fas fa-chevron-down text-xs ml-1.5 opacity-70"></i>
                  </Link>
                  {desktopDropdown === "blog" && (
                    <div
                      className="position-absolute shadow-xl py-2"
                      style={{
                        top: "100%",
                        left: 0,
                        minWidth: "180px",
                        backgroundColor: "#2B1912",
                        border: "1px solid #4A352D",
                        borderRadius: "4px",
                        zIndex: 100,
                      }}
                    >
                      <Link
                        href="/blog"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/blog") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Coffee Journal
                      </Link>
                      <Link
                        href="/blog-details"
                        className={`d-block px-4 py-2 text-sm transition-colors ${
                          isActive("/blog-details") ? "text-[#b98754] font-bold" : "text-white hover:text-[#b98754]"
                        }`}
                      >
                        Article Details
                      </Link>
                    </div>
                  )}
                </li>

                {/* Contact Link */}
                <li>
                  <Link
                    href="/contact"
                    className={`py-2 text-sm font-semibold tracking-wide transition-colors ${
                      isActive("/contact") ? "text-[#b98754]" : "text-white hover:text-[#b98754]"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Desktop CTA Action Button */}
            <div className="d-none d-lg-block">
              <Link
                href="/contact"
                className="btn d-inline-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#B98754",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "1px",
                  padding: "12px 26px",
                  borderRadius: "2px",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(185, 135, 84, 0.3)",
                  transition: "all 0.2s ease",
                }}
              >
                <i className="fas fa-calendar-check mr-2"></i> Book A Table
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="d-lg-none">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="d-flex align-items-center justify-content-center border-0 p-2 text-white"
                style={{
                  backgroundColor: "#2B1912",
                  border: "1px solid #B98754",
                  borderRadius: "4px",
                  width: "42px",
                  height: "42px",
                  cursor: "pointer",
                }}
                aria-label="Toggle navigation menu"
              >
                <i
                  className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-lg text-[#B98754]`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="d-lg-none w-full animate-fadeIn"
            style={{
              backgroundColor: "#22130D",
              borderTop: "1px solid #4A352D",
              padding: "20px 24px 30px",
            }}
          >
            <ul className="list-unstyled mb-0" style={{ gap: "6px" }}>
              {/* Mobile Home */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <Link
                  href="/"
                  className={`d-block font-semibold ${
                    isActive("/") ? "text-[#B98754]" : "text-white"
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Mobile About */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <Link
                  href="/about"
                  className={`d-block font-semibold ${
                    isActive("/about") ? "text-[#B98754]" : "text-white"
                  }`}
                >
                  About Us
                </Link>
              </li>

              {/* Mobile Menu */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <Link
                  href="/menu"
                  className={`d-block font-semibold ${
                    isActive("/menu") ? "text-[#B98754]" : "text-white"
                  }`}
                >
                  Menu
                </Link>
              </li>

              {/* Mobile Services */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <div
                  className="d-flex justify-content-between align-items-center text-white"
                  onClick={() => toggleMobileDropdown("services")}
                  style={{ cursor: "pointer", fontWeight: 600 }}
                >
                  <span className={isParentActive(["/services", "/single-service"]) ? "text-[#B98754]" : ""}>
                    Services
                  </span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform ${
                      activeDropdown === "services" ? "rotate-180 text-[#B98754]" : ""
                    }`}
                  ></i>
                </div>
                {activeDropdown === "services" && (
                  <ul className="list-unstyled pl-3 pt-2 mb-0">
                    <li className="py-1">
                      <Link href="/services" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        All Services
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/single-service" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Service Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile Pages */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <div
                  className="d-flex justify-content-between align-items-center text-white"
                  onClick={() => toggleMobileDropdown("pages")}
                  style={{ cursor: "pointer", fontWeight: 600 }}
                >
                  <span
                    className={
                      isParentActive(["/projects", "/faq", "/team", "/shop", "/shop-details"])
                        ? "text-[#B98754]"
                        : ""
                    }
                  >
                    Pages
                  </span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform ${
                      activeDropdown === "pages" ? "rotate-180 text-[#B98754]" : ""
                    }`}
                  ></i>
                </div>
                {activeDropdown === "pages" && (
                  <ul className="list-unstyled pl-3 pt-2 mb-0">
                    <li className="py-1">
                      <Link href="/projects" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Roastery Gallery
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/faq" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        FAQ
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/team" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Barista Team
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/shop" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Coffee Beans &amp; Shop
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/shop-details" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Product Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile Blog */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <div
                  className="d-flex justify-content-between align-items-center text-white"
                  onClick={() => toggleMobileDropdown("blog")}
                  style={{ cursor: "pointer", fontWeight: 600 }}
                >
                  <span className={isParentActive(["/blog", "/blog-details"]) ? "text-[#B98754]" : ""}>
                    Blog
                  </span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform ${
                      activeDropdown === "blog" ? "rotate-180 text-[#B98754]" : ""
                    }`}
                  ></i>
                </div>
                {activeDropdown === "blog" && (
                  <ul className="list-unstyled pl-3 pt-2 mb-0">
                    <li className="py-1">
                      <Link href="/blog" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Coffee Journal
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/blog-details" className="text-[#E5DCD5] hover:text-[#B98754] text-sm">
                        Article Details
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile Contact */}
              <li style={{ borderBottom: "1px solid rgba(185, 135, 84, 0.15)", padding: "10px 0" }}>
                <Link
                  href="/contact"
                  className={`d-block font-semibold ${
                    isActive("/contact") ? "text-[#B98754]" : "text-white"
                  }`}
                >
                  Contact Us
                </Link>
              </li>

              {/* Mobile CTA */}
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="btn d-block text-center w-full"
                  style={{
                    backgroundColor: "#B98754",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    padding: "12px",
                    borderRadius: "4px",
                  }}
                >
                  <i className="fas fa-calendar-check mr-2"></i> Book A Table
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
