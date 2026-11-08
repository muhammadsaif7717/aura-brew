"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS_COL1: FaqItem[] = [
  {
    id: 1,
    question: "Where do you source your single-origin coffee beans?",
    answer:
      "We partner directly with sustainable, fair-trade coffee estates across Ethiopia, Colombia, Guatemala, and Kenya. Every batch is ethically sourced and roasted in-house in small batches to preserve nuanced flavor profiles.",
  },
  {
    id: 2,
    question: "Do you offer dairy-free and vegan beverage options?",
    answer:
      "Yes, absolutely! We offer barista-grade oat milk, almond milk, and coconut milk for all our espresso-based and cold brew drinks, along with vegan pastries freshly baked every morning.",
  },
  {
    id: 3,
    question: "How can I reserve a table for private meetings or groups?",
    answer:
      "You can easily book a table using our online booking form on the contact page or by calling our reservation concierge directly at 1800-121-3637. We accommodate both intimate cafe dates and large group gatherings.",
  },
  {
    id: 4,
    question: "What brewing methods are available at your espresso bar?",
    answer:
      "Our baristas are certified in manual pour-over (V60, Chemex, Kalita Wave), AeroPress, siphon, cold drip towers, and classic dual-boiler espresso extraction.",
  },
];

const FAQS_COL2: FaqItem[] = [
  {
    id: 5,
    question: "Do you ship freshly roasted beans nationwide?",
    answer:
      "Yes, we roast to order and dispatch within 24 hours of degassing. Whole beans and ground coffee are sealed in nitrogen-flushed valve bags to ensure maximum freshness delivered straight to your door.",
  },
  {
    id: 6,
    question: "Can I purchase whole beans and have them ground for my brewer?",
    answer:
      "Certainly. When ordering online or visiting our shop, select your brewing method (Espresso, Moka Pot, Filter/Pour-Over, French Press, or Cold Brew), and we will grind with precision burr grinders.",
  },
  {
    id: 7,
    question: "What are your opening hours and holiday schedules?",
    answer:
      "Our main cafe and roastery are open Monday through Friday from 9:00 AM to 7:00 PM, and Saturdays from 10:00 AM to 8:00 PM. Special holiday hours are announced on our blog and social media.",
  },
  {
    id: 8,
    question: "Do you offer catering for corporate coffee breaks and events?",
    answer:
      "Yes! Our mobile espresso bar and mobile barista team cater corporate conferences, weddings, and private parties with full artisan beverage menus and custom latte art.",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const renderFaqCard = (item: FaqItem) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className="card mb-30"
        style={{
          border: "1px solid #e4e4e4",
          borderRadius: 0,
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: isOpen ? "0 4px 15px rgba(63,39,30,0.08)" : "none",
        }}
      >
        <div
          className="card-header"
          style={{
            backgroundColor: isOpen ? "#3f271e" : "#fdfbf9",
            padding: 0,
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onClick={() => toggleFaq(item.id)}
        >
          <h2 className="mb-0">
            <button
              className="faq-btn"
              type="button"
              style={{
                width: "100%",
                textAlign: "left",
                padding: "18px 24px",
                background: "transparent",
                border: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: isOpen ? "#ffffff" : "#3f271e",
                fontWeight: 700,
                fontSize: "17px",
                fontFamily: "'Caudex', Georgia, serif",
                cursor: "pointer",
              }}
            >
              <span>{item.question}</span>
              <i
                className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}
                style={{
                  color: isOpen ? "#b98754" : "#3f271e",
                  fontSize: "14px",
                  marginLeft: "12px",
                  flexShrink: 0,
                }}
              ></i>
            </button>
          </h2>
        </div>
        {isOpen && (
          <div
            className="collapse show"
            style={{
              padding: "20px 24px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #eee",
              color: "#6f7172",
              fontSize: "15px",
              lineHeight: "1.7",
            }}
          >
            <div className="card-body" style={{ padding: 0 }}>
              {item.answer}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-lg-6">{FAQS_COL1.map(renderFaqCard)}</div>
      <div className="col-lg-6">{FAQS_COL2.map(renderFaqCard)}</div>
    </div>
  );
}

