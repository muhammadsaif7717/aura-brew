"use client";

import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer-bg footer-p">
      <div
        className="footer-top pt-90 pb-40"
        style={{
          backgroundColor: "#2B1912",
          backgroundImage: "url(/img/bg/footer-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderTop: "1px solid rgba(185, 135, 84, 0.2)",
        }}
      >
        <div className="container">
          <div className="row justify-content-between">
            {/* Widget 1: Brand Logo & Contact */}
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title mb-25">
                  <BrandLogo variant="light" size="lg" />
                </div>
                <p className="text-[#C8BCB3] text-sm leading-relaxed mb-4" style={{ maxWidth: "340px" }}>
                  AuraBrew Coffee Roasters — Dedicated to sourcing ethical single-origin beans,
                  precision small-batch roasting, and celebrating heritage coffeehouse culture since 1928.
                </p>
                <div className="f-contact">
                  <ul>
                    <li>
                      <i className="icon fal fa-phone text-[#B98754]"></i>
                      <span>
                        <a href="tel:18001213637" className="text-[#E5DCD5] hover:text-[#B98754]">
                          1800-121-3637
                        </a>
                        <br />
                        <span className="text-[#C8BCB3] text-xs">Mon-Sat Customer Concierge</span>
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-envelope text-[#B98754]"></i>
                      <span>
                        <a href="mailto:info@aurabrew-cafe.com" className="text-[#E5DCD5] hover:text-[#B98754]">
                          info@aurabrew-cafe.com
                        </a>
                        <br />
                        <a href="mailto:orders@aurabrew-cafe.com" className="text-[#E5DCD5] hover:text-[#B98754]">
                          orders@aurabrew-cafe.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="icon fal fa-map-marker-check text-[#B98754]"></i>
                      <span>
                        1247/Plot No. 39, 15th Phase,
                        <br /> LHB Colony, Kanpur
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Widget 2: Quick Links */}
            <div className="col-xl-2 col-lg-2 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2 style={{ fontFamily: "'Caudex', Georgia, serif", color: "#FFFFFF" }}>Our Links</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    <li>
                      <Link href="/" className="hover:text-[#B98754]">Home</Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-[#B98754]">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services" className="hover:text-[#B98754]">Services</Link>
                    </li>
                    <li>
                      <Link href="/menu" className="hover:text-[#B98754]">Our Menu</Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-[#B98754]">Coffee Beans</Link>
                    </li>
                    <li>
                      <Link href="/projects" className="hover:text-[#B98754]">Roastery Gallery</Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-[#B98754]">Contact &amp; Booking</Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-[#B98754]">Coffee Journal</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Widget 3: Shop Location Google Maps */}
            <div className="col-xl-6 col-lg-6 col-sm-6">
              <div className="footer-widget mb-30">
                <div className="f-widget-title">
                  <h2 style={{ fontFamily: "'Caudex', Georgia, serif", color: "#FFFFFF" }}>Our Roastery Location</h2>
                </div>
                <div className="footer-link">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212867.83634504632!2d-112.24455686962897!3d33.52582710700138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b743829374b03%3A0xabaac255b1e43fbe!2sPlexus%20Worldwide!5e0!3m2!1sen!2sin!4v1618567685329!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "6px", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
                    allowFullScreen
                    loading="lazy"
                    title="AuraBrew Coffee Shop Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="copyright-wrap py-3"
        style={{
          backgroundColor: "#1D0F0A",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-left text-sm text-[#A89C94]">
              Copyright &copy; 2026 <strong>AuraBrew Coffee Co.</strong> All rights reserved.
            </div>
            <div className="col-lg-6 text-center text-lg-right mt-2 mt-lg-0">
              <div className="footer-social d-inline-flex" style={{ gap: "16px" }}>
                <a href="#" aria-label="Facebook" className="text-[#C8BCB3] hover:text-[#B98754]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Twitter" className="text-[#C8BCB3] hover:text-[#B98754]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram" className="text-[#C8BCB3] hover:text-[#B98754]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube" className="text-[#C8BCB3] hover:text-[#B98754]">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
