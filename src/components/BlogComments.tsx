"use client";

import React, { useState } from "react";

interface Comment {
  id: string;
  name: string;
  date: string;
  comment: string;
  avatar: string;
}

const initialComments: Comment[] = [
  {
    id: "c-1",
    name: "Julian Vance",
    date: "November 5, 2024 at 10:24 AM",
    comment:
      "This breakdown of the 1:2 extraction ratio finally solved the astringent aftertaste I was getting with my Ethiopian light roast! Adjusting the water temperature down to 92°C made a night and day difference.",
    avatar: "/img/testimonial/testi_avatar.png",
  },
  {
    id: "c-2",
    name: "Clara Bennington",
    date: "November 6, 2024 at 2:15 PM",
    comment:
      "The tip about pre-infusion and channel prevention with a WDT needle was pure gold. Thank you AuraBrew team for sharing your real roastery techniques!",
    avatar: "/img/testimonial/testi_avatar_02.png",
  },
];

export default function BlogComments() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      name: name.trim(),
      date: "Just now",
      comment: commentText.trim(),
      avatar: "/img/testimonial/testi_avatar.png",
    };

    setComments((prev) => [...prev, newComment]);
    setName("");
    setEmail("");
    setCommentText("");
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  return (
    <div className="blog-comments-wrap mt-50">
      {/* Existing Comments */}
      <h3
        style={{
          fontFamily: "'Caudex', Georgia, serif",
          color: "#3f271e",
          fontSize: "1.6rem",
          fontWeight: 700,
          marginBottom: "24px",
        }}
      >
        Reader Discussion ({comments.length})
      </h3>

      <div className="comments-list mb-50" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {comments.map((c) => (
          <div
            key={c.id}
            style={{
              display: "flex",
              gap: "18px",
              padding: "20px",
              backgroundColor: "#fbf9f6",
              borderRadius: "10px",
              border: "1px solid #ede8e1",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                minWidth: "56px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #c59d5f",
              }}
            >
              <img src={c.avatar} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                <h5 style={{ margin: 0, color: "#3f271e", fontWeight: 700, fontSize: "1.05rem" }}>{c.name}</h5>
                <span style={{ fontSize: "0.8rem", color: "#949698" }}>{c.date}</span>
              </div>
              <p style={{ margin: 0, color: "#6f7172", fontSize: "0.92rem", lineHeight: 1.6 }}>{c.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a Reply Form */}
      <div
        className="comment-form-box p-4"
        style={{
          backgroundColor: "#fff8f0",
          borderRadius: "12px",
          border: "1px solid #eddcc6",
        }}
      >
        <h4
          style={{
            fontFamily: "'Caudex', Georgia, serif",
            color: "#3f271e",
            fontSize: "1.35rem",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Join The Conversation
        </h4>
        <p style={{ color: "#6f7172", fontSize: "0.9rem", marginBottom: "20px" }}>
          Your email address will not be published. Required fields are marked *
        </p>

        {successMsg && (
          <div
            style={{
              padding: "12px 18px",
              backgroundColor: "#2b1912",
              color: "#c59d5f",
              borderRadius: "6px",
              fontWeight: 600,
              fontSize: "0.9rem",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <i className="fas fa-check-circle"></i>
            Thank you! Your comment has been posted successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#3f271e", marginBottom: "4px" }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Liam Thorne"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1px solid #decbbe",
                  backgroundColor: "#ffffff",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            <div className="col-md-6">
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#3f271e", marginBottom: "4px" }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. liam@example.com"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1px solid #decbbe",
                  backgroundColor: "#ffffff",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              />
            </div>

            <div className="col-12">
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#3f271e", marginBottom: "4px" }}>
                Your Thoughts / Question *
              </label>
              <textarea
                required
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your brewing experience or ask our head roaster..."
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "6px",
                  border: "1px solid #decbbe",
                  backgroundColor: "#ffffff",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              ></textarea>
            </div>

            <div className="col-12 mt-3">
              <button
                type="submit"
                style={{
                  padding: "12px 28px",
                  backgroundColor: "#3f271e",
                  color: "#c59d5f",
                  border: "none",
                  borderRadius: "4px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c59d5f";
                  e.currentTarget.style.color = "#101010";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#3f271e";
                  e.currentTarget.style.color = "#c59d5f";
                }}
              >
                Post Comment
                <i className="fas fa-paper-plane" style={{ fontSize: "0.8rem" }}></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

