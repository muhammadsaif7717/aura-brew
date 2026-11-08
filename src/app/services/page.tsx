import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Coffee Services, Roasting & Catering | AuraBrew",
  description: "Professional coffee services by AuraBrew: Mobile espresso bar, corporate event catering, wholesale roasting, and coffee bean subscriptions.",
  keywords: ['coffee catering', 'mobile espresso bar', 'wholesale coffee', 'coffee subscription', 'AuraBrew services'],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Coffee Services, Roasting & Catering | AuraBrew",
    description: "Professional coffee services by AuraBrew: Mobile espresso bar, corporate event catering, wholesale roasting, and coffee bean subscriptions.",
    url: "https://aurabrew-cafe.com/services",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Coffee Services, Roasting & Catering | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Services, Roasting & Catering | AuraBrew",
    description: "Professional coffee services by AuraBrew: Mobile espresso bar, corporate event catering, wholesale roasting, and coffee bean subscriptions.",
    images: ["/img/slider/slider_bg.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb Header Banner */}
        <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(/img/bg/bdrc-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-center">
                  <div className="breadcrumb-title">
                    <h1 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, margin: 0 }}>
                      Our Coffee Services
                    </h1>
                    <div className="breadcrumb-wrap mt-15">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                          <li className="breadcrumb-item"><Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#c59d5f" }}>Services</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Cards */}
        <section className="services-area services-08 pt-120 pb-90 p-relative">
          <div className="container">
            <div className="row justify-content-center text-center mb-50">
              <div className="col-xl-8 col-lg-9">
                <span style={{ color: "#c59d5f", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600, fontSize: "0.85rem", display: "inline-block", marginBottom: "8px" }}>
                  What We Specialize In
                </span>
                <h2 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#3f271e", fontWeight: 700 }}>
                  Craft Roasting, Events &amp; Catering Solutions
                </h2>
                <p style={{ color: "#6f7172", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px", margin: "10px auto 0 auto" }}>
                  From pop-up mobile espresso bars for luxury weddings to weekly wholesale coffee deliveries for boutique offices, AuraBrew delivers unparalleled coffee experiences.
                </p>
              </div>
            </div>

            <div className="row g-4 align-items-stretch">
              <div className="col-lg-3 col-md-6">
                <div className="services-08-item" style={{ height: "100%", padding: "35px 25px", border: "1px solid #ede8e1", borderRadius: "10px" }}>
                  <div className="services-08-thumb mb-20">
                    <img src="/img/icon/fe-icon01.png" alt="Mobile Espresso Bar" />
                  </div>
                  <div className="services-08-content">
                    <h3 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "1.2rem" }}><Link href="/single-service">Mobile Espresso Bar</Link></h3>
                    <p style={{ color: "#6f7172", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      Complete pop-up espresso bar with two-group La Marzocco, certified baristas, and custom drink menus for private events.
                    </p>
                    <Link href="/single-service" style={{ color: "#c59d5f", fontWeight: 700, fontSize: "0.88rem" }}>
                      Explore Service <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="services-08-item" style={{ height: "100%", padding: "35px 25px", border: "1px solid #ede8e1", borderRadius: "10px" }}>
                  <div className="services-08-thumb mb-20">
                    <img src="/img/icon/fe-icon04.png" alt="Wholesale Roasting" />
                  </div>
                  <div className="services-08-content">
                    <h3 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "1.2rem" }}><Link href="/single-service">Wholesale Roasting</Link></h3>
                    <p style={{ color: "#6f7172", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      Freshly roasted small-batch single-origin beans and custom house blends delivered weekly to cafes, restaurants, and hotels.
                    </p>
                    <Link href="/single-service" style={{ color: "#c59d5f", fontWeight: 700, fontSize: "0.88rem" }}>
                      Explore Service <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="services-08-item" style={{ height: "100%", padding: "35px 25px", border: "1px solid #ede8e1", borderRadius: "10px" }}>
                  <div className="services-08-thumb mb-20">
                    <img src="/img/icon/fe-icon05.png" alt="Coffee Subscriptions" />
                  </div>
                  <div className="services-08-content">
                    <h3 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "1.2rem" }}><Link href="/shop">Curated Subscriptions</Link></h3>
                    <p style={{ color: "#6f7172", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      Handpicked roaster's choice beans delivered to your doorstep bi-weekly with detailed origin tasting notes and brew guides.
                    </p>
                    <Link href="/shop" style={{ color: "#c59d5f", fontWeight: 700, fontSize: "0.88rem" }}>
                      Explore Shop <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="services-08-item" style={{ height: "100%", padding: "35px 25px", border: "1px solid #ede8e1", borderRadius: "10px" }}>
                  <div className="services-08-thumb mb-20">
                    <img src="/img/icon/fe-icon06.png" alt="Barista Workshops" />
                  </div>
                  <div className="services-08-content">
                    <h3 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "1.2rem" }}><Link href="/single-service">Barista Masterclasses</Link></h3>
                    <p style={{ color: "#6f7172", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      Hands-on sensory cupping, milk steaming, and pour-over calibration workshops taught by SCA-certified head baristas.
                    </p>
                    <Link href="/single-service" style={{ color: "#c59d5f", fontWeight: 700, fontSize: "0.88rem" }}>
                      Explore Service <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Booking Table Section */}
        <section id="booking" className="booking pt-60 pb-90" style={{ backgroundColor: "#3f271e" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-bg02 p-4 p-md-5" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "12px", border: "1px solid rgba(197, 157, 95, 0.3)" }}>
                  <div className="section-title center-align mb-30">
                    <h5><span className="circle-left"><img src="/img/bg/circle-left-w.png" alt="img" /></span> Inquiries &amp; Reservations</h5>
                    <h2 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif" }}>
                      Reserve A Tasting Or Event Table
                    </h2>
                  </div>
                  <BookingForm />
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="booking-img text-center">
                  <img src="/img/bg/booking-img.png" alt="AuraBrew Coffee Pour" style={{ maxWidth: "100%", borderRadius: "12px" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Interactive Testimonial Carousel */}
        <TestimonialSection />

        {/* Real Interactive Newsletter Component */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
