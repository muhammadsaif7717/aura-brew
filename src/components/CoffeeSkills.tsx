"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SkillItem {
  id: string;
  name: string;
  targetPercent: number;
  description: string;
}

const skillsData: SkillItem[] = [
  {
    id: "single-origin",
    name: "Ethical Single-Origin Direct Trade",
    targetPercent: 96,
    description: "Direct relationship sourcing from heirloom altitude farms in Ethiopia, Colombia, & Guatemala.",
  },
  {
    id: "roasting",
    name: "Small-Batch Drum Roasting Precision",
    targetPercent: 92,
    description: "Cast-iron Probat roasters calibrated in real-time to accentuate origin sweetness & aromatic notes.",
  },
  {
    id: "extraction",
    name: "Master Barista Extraction Calibration",
    targetPercent: 98,
    description: "PID-controlled double-boiler temperature stability & exact 1:2 extraction pressure profiling.",
  },
];

export default function CoffeeSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    "single-origin": 0,
    "roasting": 0,
    "extraction": 0,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let animId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);

          if (animId) cancelAnimationFrame(animId);

          // Animate percentage numbers smoothly from 0 to target at a relaxed, graceful pace
          const duration = 2200; // ms (smooth 2.2s count-up)
          const startTime = performance.now();

          const updateNumbers = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic formula
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const updated: { [key: string]: number } = {};
            skillsData.forEach((skill) => {
              updated[skill.id] = Math.round(skill.targetPercent * easedProgress);
            });
            setCounts(updated);

            if (progress < 1) {
              animId = requestAnimationFrame(updateNumbers);
            } else {
              // Ensure exact target numbers at end
              const finalCounts: { [key: string]: number } = {};
              skillsData.forEach((s) => {
                finalCounts[s.id] = s.targetPercent;
              });
              setCounts(finalCounts);
            }
          };

          animId = requestAnimationFrame(updateNumbers);
        } else {
          // When scrolling away (up or down), reset so it re-animates smoothly next time
          if (animId) cancelAnimationFrame(animId);
          setHasAnimated(false);
          setCounts({
            "single-origin": 0,
            "roasting": 0,
            "extraction": 0,
          });
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="skill"
      ref={sectionRef}
      className="skill-area p-relative fix pt-120 pb-120"
      style={{
        backgroundColor: "#1c120c",
        backgroundImage: "linear-gradient(135deg, #2b1912 0%, #170d08 100%)",
        position: "relative",
      }}
      aria-label="Coffee Quality and Sourcing Metrics"
    >
      <div className="animations-01">
        <img
          src="/img/bg/an-img-05.png"
          alt=""
          aria-hidden="true"
          style={{ opacity: 0.35, pointerEvents: "none" }}
        />
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Left Column: Metrics & Animated Progress Bars */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="skills-content s-about-content">
              <div className="skills-title pb-20">
                <h5 style={{ color: "#c59d5f", display: "inline-flex", alignItems: "center" }}>
                  <span className="circle-left mr-2" style={{ display: "inline-block" }}>
                    <img src="/img/bg/circle-left-w.png" alt="" aria-hidden="true" />
                  </span>
                  Coffee We Use
                </h5>
                <h2 style={{ color: "#ffffff", fontFamily: "'Caudex', Georgia, serif", fontSize: "38px", lineHeight: "1.25" }}>
                  We Offer A Wide Selection of Specialty Coffee
                </h2>
              </div>
              <p style={{ color: "#d2c7bf", fontSize: "16px", lineHeight: "1.7", marginBottom: "30px" }}>
                We partner directly with sustainable, regenerative coffee farms in Ethiopia, Colombia, and Guatemala to source the world&apos;s finest Arabica cherries, roasted in small batches to preserve their unique terroir and aromatics.
              </p>

              {/* Animated Progress Bars */}
              <div className="skills-list" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {skillsData.map((skill) => {
                  const currentPercent = counts[skill.id] || 0;
                  return (
                    <div key={skill.id} className="skill-box" style={{ width: "100%" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: "10px",
                        }}
                      >
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "16px",
                            fontWeight: 600,
                            letterSpacing: "0.2px",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            color: "#c59d5f",
                            fontFamily: "'Caudex', Georgia, serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            minWidth: "55px",
                            textAlign: "right",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {currentPercent}%
                        </span>
                      </div>

                      {/* Bar Track */}
                      <div
                        style={{
                          width: "100%",
                          height: "10px",
                          backgroundColor: "rgba(255, 255, 255, 0.12)",
                          borderRadius: "10px",
                          overflow: "hidden",
                          position: "relative",
                          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
                        }}
                      >
                        {/* Bar Fill with Smooth Animation */}
                        <div
                          style={{
                            height: "100%",
                            width: hasAnimated ? `${skill.targetPercent}%` : "0%",
                            background: "linear-gradient(90deg, #b98754 0%, #c59d5f 50%, #e0b879 100%)",
                            borderRadius: "10px",
                            transition: "width 2.4s cubic-bezier(0.22, 1, 0.36, 1)",
                            position: "relative",
                            boxShadow: "0 0 12px rgba(197, 157, 95, 0.55)",
                          }}
                        >
                          {/* Inner glowing pulse line */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              right: 0,
                              bottom: 0,
                              width: "16px",
                              background: "rgba(255, 255, 255, 0.45)",
                              borderRadius: "10px",
                              filter: "blur(2px)",
                            }}
                          />
                        </div>
                      </div>

                      <p
                        style={{
                          color: "rgba(210, 199, 191, 0.72)",
                          fontSize: "13px",
                          marginTop: "6px",
                          marginBottom: 0,
                          lineHeight: "1.4",
                        }}
                      >
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Illustration */}
          <div className="col-lg-6 col-md-12 col-sm-12 pr-30 mt-40 mt-lg-0 text-center">
            <div
              className="skills-img"
              style={{
                position: "relative",
                display: "inline-block",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <img
                src="/img/bg/skills-img.png"
                alt="AuraBrew Artisanal Roasting and Pour-Over Craft"
                className="img-fluid"
                style={{
                  maxHeight: "480px",
                  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.45))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

