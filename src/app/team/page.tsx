import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Master Baristas & Roasting Specialists | AuraBrew Team",
  description: "Meet the passionate team behind AuraBrew: Q-Grader certified head roasters, world-class barista champions, and artisanal pastry chefs.",
  keywords: ['AuraBrew team', 'master baristas', 'coffee roasters', 'Q grader', 'latte art champion'],
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Master Baristas & Roasting Specialists | AuraBrew Team",
    description: "Meet the passionate team behind AuraBrew: Q-Grader certified head roasters, world-class barista champions, and artisanal pastry chefs.",
    url: "https://aurabrew-cafe.com/team",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/team/team01.jpg",
        width: 1200,
        height: 630,
        alt: "AuraBrew Team of Coffee Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Baristas & Roasting Specialists | AuraBrew Team",
    description: "Meet the passionate team behind AuraBrew: Q-Grader certified head roasters, world-class barista champions, and artisanal pastry chefs.",
    images: ["/img/team/team01.jpg"],
  },
};

const teamMembers = [
  {
    name: "Marcus Vance",
    role: "Head Roaster & Co-Founder",
    bio: "Certified Q-Grader with 14 years perfecting micro-batch drum profiles and origin varietal selections.",
    image: "/img/team/team01.jpg",
  },
  {
    name: "Elena Rostova",
    role: "Green Bean Sourcing Director",
    bio: "Spends 5 months yearly trekking origin farms in Yirgacheffe, Huila, and Antigua ensuring ethical direct trade.",
    image: "/img/team/team02.jpg",
  },
  {
    name: "Liam Thorne",
    role: "Master Barista & Latte Artist",
    bio: "Two-time national barista champion specializing in precision espresso calibration and silky microfoam art.",
    image: "/img/team/team03.jpg",
  },
  {
    name: "Chef Andre Moreau",
    role: "Executive Pastry Chef",
    bio: "French-trained viennoiserie baker crafting slow-fermented sourdough pastries and butter croissants daily.",
    image: "/img/team/team04.jpg",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb Header */}
        <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(/img/bg/bdrc-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-center">
                  <div className="breadcrumb-title">
                    <h1 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 700, margin: 0 }}>
                      Our Coffee Masters
                    </h1>
                    <div className="breadcrumb-wrap mt-15">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center" style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}>
                          <li className="breadcrumb-item"><Link href="/" style={{ color: "#ffffff", textDecoration: "none" }}>Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#c59d5f" }}>Team</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="team-area2 fix p-relative pt-105 pb-80" style={{ backgroundColor: "#ffffff" }}>
          <div className="container">
            <div className="row justify-content-center text-center mb-50">
              <div className="col-xl-8 col-lg-9">
                <span style={{ color: "#c59d5f", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 600, fontSize: "0.85rem", display: "inline-block", marginBottom: "8px" }}>
                  The Craft Behind Every Cup
                </span>
                <h2 style={{ fontFamily: "'Caudex', Georgia, serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#3f271e", fontWeight: 700 }}>
                  Meet Our Master Craftsmen &amp; Baristas
                </h2>
                <p style={{ color: "#6f7172", fontSize: "1rem", lineHeight: 1.7, maxWidth: "680px", margin: "10px auto 0 auto" }}>
                  Our diverse team unites seasoned roastmasters, agricultural origin specialists, and culinary pastry artisans dedicated to coffee excellence.
                </p>
              </div>
            </div>

            <div className="row g-4 justify-content-center">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="single-team text-center"
                    style={{
                      padding: "30px 20px",
                      backgroundColor: "#fbf9f6",
                      borderRadius: "12px",
                      border: "1px solid #eee5da",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="team-thumb mb-25"
                      style={{
                        width: "160px",
                        height: "160px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "3px solid #c59d5f",
                        boxShadow: "0 6px 18px rgba(63, 39, 30, 0.12)",
                      }}
                    >
                      <img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="team-info" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <h4 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif", fontSize: "1.25rem", fontWeight: 700, margin: "0 0 4px 0" }}>
                        {member.name}
                      </h4>
                      <p style={{ color: "#c59d5f", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 12px 0" }}>
                        {member.role}
                      </p>
                      <p style={{ color: "#6f7172", fontSize: "0.88rem", lineHeight: 1.55, margin: "0 0 16px 0", flexGrow: 1 }}>
                        {member.bio}
                      </p>
                      <div className="team-social">
                        <div style={{ display: "inline-flex", gap: "12px" }}>
                          <span style={{ color: "#c59d5f", fontSize: "0.9rem" }}><i className="fab fa-facebook-f"></i></span>
                          <span style={{ color: "#c59d5f", fontSize: "0.9rem" }}><i className="fab fa-twitter"></i></span>
                          <span style={{ color: "#c59d5f", fontSize: "0.9rem" }}><i className="fab fa-instagram"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craft Standards Section */}
        <section id="skill" className="skill-area p-relative fix" style={{ background: "#3f271e" }}>
          <div className="container py-5">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="skills-content s-about-content">
                  <div className="skills-title pb-20">
                    <h5><span className="circle-left"><img src="/img/bg/circle-left-w.png" alt="img" /></span> Roastery Standards</h5>
                    <h2 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif" }}>
                      Uncompromising Precision &amp; Bean Quality
                    </h2>
                  </div>
                  <p style={{ color: "rgba(255, 255, 255, 0.85)", lineHeight: 1.7 }}>
                    Every batch at AuraBrew undergoes strict moisture analysis, infrared colorimetry, and sensory cupping sessions to ensure repeatable excellence.
                  </p>
                  <div className="skills mt-20">
                    <div className="skill mb-25">
                      <div className="skill-name" style={{ color: "#ffffff", fontWeight: 600 }}>Ethical Direct Trade Sourcing (96%)</div>
                      <div className="skill-bar" style={{ backgroundColor: "rgba(255,255,255,0.15)", height: "8px", borderRadius: "4px" }}>
                        <div className="skill-per" style={{ width: "96%", backgroundColor: "#c59d5f", height: "100%", borderRadius: "4px" }}></div>
                      </div>
                    </div>
                    <div className="skill mb-25">
                      <div className="skill-name" style={{ color: "#ffffff", fontWeight: 600 }}>Drum Roasting Thermal Precision (92%)</div>
                      <div className="skill-bar" style={{ backgroundColor: "rgba(255,255,255,0.15)", height: "8px", borderRadius: "4px" }}>
                        <div className="skill-per" style={{ width: "92%", backgroundColor: "#c59d5f", height: "100%", borderRadius: "4px" }}></div>
                      </div>
                    </div>
                    <div className="skill mb-25">
                      <div className="skill-name" style={{ color: "#ffffff", fontWeight: 600 }}>Barista Sensory Calibration (98%)</div>
                      <div className="skill-bar" style={{ backgroundColor: "rgba(255,255,255,0.15)", height: "8px", borderRadius: "4px" }}>
                        <div className="skill-per" style={{ width: "98%", backgroundColor: "#c59d5f", height: "100%", borderRadius: "4px" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 pr-30 d-none d-lg-block">
                <div className="skills-img text-center">
                  <img src="/img/bg/skills-img.png" alt="Coffee craft skills" className="img" style={{ maxWidth: "100%", borderRadius: "10px" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Interactive Newsletter Component */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
