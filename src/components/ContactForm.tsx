"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div
        className="p-5 text-center mt-30"
        style={{
          backgroundColor: "#3f271e",
          border: "2px solid #b98754",
          color: "#fff",
          borderRadius: "0px",
          padding: "40px 24px",
        }}
      >
        <i
          className="fas fa-check-circle text-4xl mb-3"
          style={{ color: "#b98754", fontSize: "40px" }}
        ></i>
        <h3 className="text-white mt-3 font-serif" style={{ fontSize: "28px" }}>
          Message Sent Successfully!
        </h3>
        <p className="mb-4 text-[#eaedff] max-w-lg mx-auto" style={{ fontSize: "16px" }}>
          Thank you, <strong>{formData.name}</strong>. Your message regarding &ldquo;
          {formData.subject || "Inquiry"}&rdquo; has been received. Our barista and support team will
          respond to <strong>{formData.email}</strong> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          }}
          className="btn"
          style={{ backgroundColor: "#b98754", color: "#fff", padding: "12px 32px" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form mt-30">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-field p-relative c-name mb-20">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-field p-relative c-email mb-20">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-field p-relative c-subject mb-20">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-field p-relative c-subject mb-20">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject / Event Inquiry"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-field p-relative c-message mb-30">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={6}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
          </div>
          <div className="slider-btn">
            <button
              type="submit"
              className="btn ss-btn"
              disabled={loading}
              style={{ minHeight: "48px" }}
            >
              <span>{loading ? "Sending Message..." : "Submit Message"}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

