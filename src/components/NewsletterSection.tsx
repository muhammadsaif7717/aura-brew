"use client";

import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Simulate instant network submission
    setTimeout(() => {
      setStatus("success");
      setMessage("🎉 Welcome to the AuraBrew Roastery Circle! Your 15% voucher has been sent to your inbox.");
      setEmail("");
    }, 600);
  };

  return (
    <section id="newsletter" className="newslater-area p-relative pt-120 pb-120" style={{ backgroundColor: "#f7f5f1" }}>
      <div className="animations-01">
        <img src="/img/bg/an-img-07.png" alt="animation" />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title center-align mb-35 text-center">
              <h5>
                <span className="circle-left mr-2">
                  <img src="/img/bg/circle-left.png" alt="icon" style={{ display: "inline-block" }} />
                </span>
                Weekly Roastery Dispatch
              </h5>
              <h2 style={{ fontFamily: "'Caudex', Georgia, serif", color: "#3f271e" }}>
                Get Special Offers &amp; Micro-Lot Releases
              </h2>
              <p style={{ color: "#6f7172", maxWidth: "560px", margin: "0 auto" }}>
                Subscribe to receive private coffee tastings invitations, harvest release notes, and enjoy 15% off your first bean order.
              </p>
            </div>

            {status === "success" ? (
              <div
                style={{
                  backgroundColor: "#eef7ee",
                  border: "1px solid #7bc379",
                  color: "#286626",
                  padding: "18px 24px",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "15px",
                  display: "inline-block",
                  animation: "fadeIn 0.3s ease",
                }}
              >
                {message}
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  style={{
                    display: "block",
                    margin: "10px auto 0 auto",
                    background: "none",
                    border: "none",
                    color: "#286626",
                    textDecoration: "underline",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form newslater" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div
                  className="form-group newsletter-pill-group"
                  style={{
                    position: "relative",
                    display: "flex",
                    backgroundColor: "#ffffff",
                    borderRadius: "50px",
                    padding: "6px",
                    boxShadow: "0 8px 25px rgba(63, 39, 30, 0.08)",
                    border: status === "error" ? "2px solid #e53e3e" : "1px solid #e6ded7",
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email address..."
                    required
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      padding: "14px 22px",
                      borderRadius: "50px",
                      fontSize: "15px",
                      color: "#3f271e",
                      background: "transparent",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn"
                    style={{
                      backgroundColor: "#3f271e",
                      color: "#ffffff",
                      borderRadius: "50px",
                      padding: "12px 28px",
                      fontWeight: 700,
                      fontSize: "14px",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#c59d5f";
                      e.currentTarget.style.color = "#1c120c";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#3f271e";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe Now"}
                  </button>
                </div>
                {status === "error" && (
                  <p style={{ color: "#e53e3e", fontSize: "13px", marginTop: "8px", fontWeight: 500 }}>
                    {message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

