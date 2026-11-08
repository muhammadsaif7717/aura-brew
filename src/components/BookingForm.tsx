"use client";

import React, { useState } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstn: "",
    email: "",
    phone: "",
    date: "",
    time: "9:30 PM",
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
        className="p-4 text-center mt-30"
        style={{
          backgroundColor: "#3f271e",
          border: "2px solid #b98754",
          color: "#fff",
          padding: "30px 20px",
        }}
      >
        <i
          className="fas fa-check-circle text-4xl mb-3"
          style={{ color: "#b98754", fontSize: "36px" }}
        ></i>
        <h4 className="text-white mt-2 font-serif">Table Reservation Confirmed!</h4>
        <p className="mb-3 text-[#eaedff]">
          Thank you, <strong>{formData.firstn}</strong>. We have received your booking request for{" "}
          <strong>{formData.date || "your selected date"}</strong> at{" "}
          <strong>{formData.time}</strong>.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({ firstn: "", email: "", phone: "", date: "", time: "9:30 PM" });
          }}
          className="btn"
          style={{ backgroundColor: "#b98754", color: "#fff", padding: "8px 24px" }}
        >
          Book Another Table
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
              id="firstn"
              name="firstn"
              placeholder="First Name"
              value={formData.firstn}
              onChange={(e) => setFormData({ ...formData, firstn: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="contact-field p-relative c-subject mb-20">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
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
              placeholder="Phone No."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="contact-field p-relative c-option mb-20">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-field p-relative c-option mb-20">
            <select
              name="services"
              id="sr"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="9:30 AM">9:30 AM</option>
              <option value="11:30 AM">11:30 AM</option>
              <option value="2:30 PM">2:30 PM</option>
              <option value="5:30 PM">5:30 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="9:30 PM">9:30 PM</option>
              <option value="10:30 PM">10:30 PM</option>
            </select>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="slider-btn mt-15">
            <button type="submit" className="btn ss-btn" disabled={loading}>
              <span>{loading ? "Booking Table..." : "Book Table Now"}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

