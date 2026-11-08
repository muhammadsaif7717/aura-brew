"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  category: "brewing" | "origin" | "barista" | "roasting" | "pairing";
  categoryLabel: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Sacred Art of Espresso: Mastering the 1:2 Extraction Ratio",
    category: "brewing",
    categoryLabel: "Brewing Guide",
    readTime: "5 min read",
    author: "Marcus Vance",
    authorRole: "Head Roaster",
    date: "November 4, 2024",
    summary:
      "Understanding water temperature, grind granularity, and pump pressure to extract dense golden crema without bitter over-extraction.",
    image: "/img/blog/inner_b1.jpg",
    slug: "/blog-details",
  },
  {
    id: "post-2",
    title: "Single-Origin Bean Journey: Inside High-Altitude Ethiopian Farms",
    category: "origin",
    categoryLabel: "Origin Stories",
    readTime: "7 min read",
    author: "Elena Rostova",
    authorRole: "Green Bean Sourcing",
    date: "October 28, 2024",
    summary:
      "A travel journal through the fertile valleys of Yirgacheffe, documenting how heirloom varietals and washed processing yield signature jasmine floral notes.",
    image: "/img/blog/inner_b2.jpg",
    slug: "/blog-details",
  },
  {
    id: "post-3",
    title: "The Chemistry of Microfoam: Achieving Silk Texture & Latte Art",
    category: "barista",
    categoryLabel: "Barista Craft",
    readTime: "6 min read",
    author: "Liam Thorne",
    authorRole: "Lead Barista Trainer",
    date: "October 19, 2024",
    summary:
      "How to position steam wands, aerate organic milk at 62°C, and create silky velvet microfoam capable of holding intricate rosettas and swans.",
    image: "/img/blog/inner_b3.jpg",
    slug: "/blog-details",
  },
  {
    id: "post-4",
    title: "Why Small-Batch Drum Roasting Unlocks Richer Cocoa & Caramel Tones",
    category: "roasting",
    categoryLabel: "Roastery Culture",
    readTime: "8 min read",
    author: "Marcus Vance",
    authorRole: "Head Roaster",
    date: "October 11, 2024",
    summary:
      "Deep dive into First Crack, conductive heat transfer, and Maillard reactions that distinguish our artisanal batches from commercial dark roasts.",
    image: "/img/features/about_img_02.png",
    slug: "/blog-details",
  },
  {
    id: "post-5",
    title: "Cold Brew vs. Nitro Draft: The Physics of Nitrogen Bubbles",
    category: "brewing",
    categoryLabel: "Brewing Science",
    readTime: "5 min read",
    author: "Sophia Sterling",
    authorRole: "QA & Sensory Lab",
    date: "September 29, 2024",
    summary:
      "Why nitrogen infusion creates a creamy mouthfeel without adding dairy or sugar, and how 24-hour cold immersion preserves gentle sweet esters.",
    image: "/img/blog/inner_b2.jpg",
    slug: "/blog-details",
  },
  {
    id: "post-6",
    title: "Pairing French Almond Pastries with Single-Origin Pour-Overs",
    category: "pairing",
    categoryLabel: "Culinary Pairings",
    readTime: "6 min read",
    author: "Chef Andre Moreau",
    authorRole: "Master Baker",
    date: "September 15, 2024",
    summary:
      "Discover how the nutty frangipane in our signature croissants complements the citrus acidity of light-roasted Kenyan beans.",
    image: "/img/blog/inner_b1.jpg",
    slug: "/blog-details",
  },
];

type CategoryFilter = "all" | "brewing" | "origin" | "barista" | "roasting" | "pairing";

export default function BlogCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" ? true : post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "All Articles" },
    { key: "brewing", label: "Brewing Guides" },
    { key: "origin", label: "Origin Stories" },
    { key: "barista", label: "Barista Craft" },
    { key: "roasting", label: "Roastery Culture" },
    { key: "pairing", label: "Culinary Pairings" },
  ];

  return (
    <section className="inner-blog pt-90 pb-120" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        {/* Header & Subtitle */}
        <div className="row justify-content-center text-center mb-50">
          <div className="col-xl-8 col-lg-9">
            <span
              style={{
                color: "#c59d5f",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontWeight: 600,
                fontSize: "0.85rem",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              Coffee Knowledge & Culture
            </span>
            <h1
              style={{
                fontFamily: "'Caudex', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#3f271e",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              The AuraBrew Coffee Journal
            </h1>
            <p style={{ color: "#6f7172", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              Explore comprehensive brewing tutorials, coffee farm origins, roasting secrets, and sensory tasting guides curated by our master baristas and roasters.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="blog-filters-bar mb-50"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "16px 20px",
            backgroundColor: "#f7f5f1",
            borderRadius: "12px",
            border: "1px solid #e9e4dc",
          }}
        >
          {/* Category Tabs */}
          <div
            className="category-tabs"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
            role="tablist"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.key)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "30px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    border: isActive ? "1px solid #c59d5f" : "1px solid #ded8cf",
                    backgroundColor: isActive ? "#3f271e" : "#ffffff",
                    color: isActive ? "#c59d5f" : "#4a352d",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div
            style={{
              position: "relative",
              minWidth: "240px",
              flex: "1 1 240px",
              maxWidth: "340px",
            }}
          >
            <i
              className="fas fa-search"
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#949698",
                fontSize: "0.9rem",
              }}
            ></i>
            <input
              type="text"
              placeholder="Search coffee articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 14px 8px 36px",
                borderRadius: "30px",
                border: "1px solid #ded8cf",
                fontSize: "0.9rem",
                color: "#101010",
                backgroundColor: "#ffffff",
                outline: "none",
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "#949698",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "#f7f5f1",
              borderRadius: "12px",
            }}
          >
            <i className="fas fa-book-open" style={{ fontSize: "3rem", color: "#c59d5f", marginBottom: "16px" }}></i>
            <h3 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif" }}>No Articles Found</h3>
            <p style={{ color: "#6f7172" }}>Try adjusting your search keyword or selecting another topic.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              style={{
                marginTop: "12px",
                padding: "8px 20px",
                backgroundColor: "#3f271e",
                color: "#c59d5f",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <article
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #eee8df",
                    boxShadow: "0 4px 12px rgba(63, 39, 30, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(63, 39, 30, 0.12)";
                    e.currentTarget.style.borderColor = "#c59d5f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(63, 39, 30, 0.05)";
                    e.currentTarget.style.borderColor = "#eee8df";
                  }}
                >
                  {/* Thumbnail Image */}
                  <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden", backgroundColor: "#f5f5f5" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        backgroundColor: "#3f271e",
                        color: "#c59d5f",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        border: "1px solid rgba(197, 157, 95, 0.4)",
                      }}
                    >
                      {post.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Meta info */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "0.82rem",
                        color: "#949698",
                        marginBottom: "12px",
                      }}
                    >
                      <span>
                        <i className="far fa-calendar-alt" style={{ marginRight: "6px", color: "#c59d5f" }}></i>
                        {post.date}
                      </span>
                      <span>
                        <i className="far fa-clock" style={{ marginRight: "6px", color: "#c59d5f" }}></i>
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Caudex', Georgia, serif",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#3f271e",
                        lineHeight: 1.35,
                        marginBottom: "12px",
                        flexGrow: 0,
                      }}
                    >
                      <Link
                        href={post.slug}
                        style={{
                          color: "#3f271e",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#c59d5f";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#3f271e";
                        }}
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p
                      style={{
                        color: "#6f7172",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        marginBottom: "20px",
                        flexGrow: 1,
                      }}
                    >
                      {post.summary}
                    </p>

                    {/* Footer Author & CTA */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1px solid #f0eae1",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "#3f271e" }}>
                          {post.author}
                        </div>
                        <div style={{ fontSize: "0.76rem", color: "#949698" }}>
                          {post.authorRole}
                        </div>
                      </div>

                      <Link
                        href={post.slug}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#c59d5f",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          textDecoration: "none",
                          transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        Read More
                        <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }}></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

