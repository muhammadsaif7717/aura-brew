"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export interface ShopProduct {
  id: string;
  name: string;
  category: "coffee-beans" | "brewing-gear" | "cold-brew" | "merchandise";
  categoryLabel: string;
  tag?: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  slug: string;
}

const initialProducts: ShopProduct[] = [
  {
    id: "sp-1",
    name: "Ethiopia Yirgacheffe Grade 1 (250g)",
    category: "coffee-beans",
    categoryLabel: "Whole Bean Coffee",
    tag: "Single Origin",
    price: 18.5,
    oldPrice: 22.0,
    rating: 5,
    reviewsCount: 38,
    description: "Washed heirloom Arabica with fragrant notes of jasmine blossoms, bergamot citrus, and wild mountain honey.",
    image: "/img/shop/details/large1.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-2",
    name: "Colombia Supremo Huila Reserve (250g)",
    category: "coffee-beans",
    categoryLabel: "Whole Bean Coffee",
    tag: "Bestseller",
    price: 17.0,
    oldPrice: 20.0,
    rating: 5,
    reviewsCount: 44,
    description: "Medium roast delivering sweet caramelized panela, roasted pecans, and a silky milk chocolate finish.",
    image: "/img/shop/img1.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-3",
    name: "Aura Roastery Blend No. 4 (500g)",
    category: "coffee-beans",
    categoryLabel: "Whole Bean Coffee",
    tag: "Signature Blend",
    price: 24.0,
    oldPrice: 28.0,
    rating: 5,
    reviewsCount: 62,
    description: "Our flagship espresso roast featuring dark Dutch cocoa, toasted hazelnut, and deep velvet body.",
    image: "/img/shop/img2.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-4",
    name: "Guatemala Antigua Peaberry (250g)",
    category: "coffee-beans",
    categoryLabel: "Whole Bean Coffee",
    tag: "Rare Harvest",
    price: 19.5,
    rating: 4.9,
    reviewsCount: 29,
    description: "Volcanic soil grown peaberry beans with complex smoky cedar, dark blackberry, and brown sugar sweetness.",
    image: "/img/shop/img3.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-5",
    name: "Matte Ceramic V60 Pour-Over Dripper",
    category: "brewing-gear",
    categoryLabel: "Brewing Gear",
    tag: "Artisanal",
    price: 32.0,
    oldPrice: 38.0,
    rating: 4.8,
    reviewsCount: 51,
    description: "Handcrafted conical ceramic dripper with spiral interior ribs for maximum flow control and clean clarity.",
    image: "/img/shop/img4.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-6",
    name: "Precision Hand Burr Coffee Grinder",
    category: "brewing-gear",
    categoryLabel: "Brewing Gear",
    tag: "Pro Barista",
    price: 65.0,
    oldPrice: 79.0,
    rating: 5,
    reviewsCount: 37,
    description: "48mm CNC stainless steel conical burrs with 40 stepless adjustment settings from espresso to cold brew.",
    image: "/img/shop/img5.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-7",
    name: "Aura Double-Wall Vacuum Tumbler (12oz)",
    category: "merchandise",
    categoryLabel: "Merchandise",
    tag: "Insulated",
    price: 24.0,
    rating: 4.7,
    reviewsCount: 33,
    description: "Matte espresso powder-coated stainless steel tumbler with spill-proof lid. Keeps coffee hot for 6 hours.",
    image: "/img/shop/img6.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-8",
    name: "Cold Brew Glass Immersion Pitcher (1.5L)",
    category: "cold-brew",
    categoryLabel: "Cold Brew Gear",
    tag: "Summer Essential",
    price: 36.0,
    oldPrice: 42.0,
    rating: 4.9,
    reviewsCount: 46,
    description: "Heavy borosilicate glass carafe with laser-cut ultra-fine stainless steel mesh core for silt-free cold brew.",
    image: "/img/shop/img7.jpg",
    slug: "/shop-details",
  },
  {
    id: "sp-9",
    name: "Heritage Waxed Canvas Barista Apron",
    category: "merchandise",
    categoryLabel: "Merchandise",
    tag: "Handcrafted",
    price: 45.0,
    rating: 5,
    reviewsCount: 22,
    description: "Water-resistant 16oz waxed canvas with genuine brass hardware and cross-back leather harness straps.",
    image: "/img/shop/img8.jpg",
    slug: "/shop-details",
  },
];

type CategoryFilter = "all" | "coffee-beans" | "brewing-gear" | "cold-brew" | "merchandise";
type SortOrder = "default" | "price-asc" | "price-desc" | "rating";

export default function ShopCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: "all", label: "All Roastery Goods", count: initialProducts.length },
    {
      key: "coffee-beans",
      label: "Whole Bean Coffee",
      count: initialProducts.filter((p) => p.category === "coffee-beans").length,
    },
    {
      key: "brewing-gear",
      label: "Brewing Gear & Drippers",
      count: initialProducts.filter((p) => p.category === "brewing-gear").length,
    },
    {
      key: "cold-brew",
      label: "Cold Brew Equipment",
      count: initialProducts.filter((p) => p.category === "cold-brew").length,
    },
    {
      key: "merchandise",
      label: "Barista Merchandise",
      count: initialProducts.filter((p) => p.category === "merchandise").length,
    },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let list = initialProducts.filter((p) => {
      const matchCat = activeCategory === "all" ? true : p.category === activeCategory;
      const matchSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (sortOrder === "price-asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortOrder === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, sortOrder, searchQuery]);

  const handleAddToCart = (productName: string) => {
    setToastMessage(`✓ Added "${productName}" to your roastery cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <section className="shop-area pt-90 pb-120" style={{ backgroundColor: "#ffffff" }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            backgroundColor: "#2b1912",
            color: "#ffffff",
            padding: "14px 22px",
            borderRadius: "8px",
            border: "1px solid #c59d5f",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
            fontSize: "0.95rem",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "fadeIn 0.25s ease-in-out",
          }}
        >
          <i className="fas fa-check-circle" style={{ color: "#c59d5f", fontSize: "1.2rem" }}></i>
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="container">
        {/* Intro Banner */}
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
              Direct From The Roastery
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
              Specialty Beans &amp; Barista Equipment
            </h1>
            <p style={{ color: "#6f7172", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              Shop our freshly drum-roasted single-origin coffees, handcrafted pour-over drippers, precision conical burr grinders, and roastery essentials.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="shop-filter-bar mb-40"
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
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      padding: "2px 6px",
                      borderRadius: "10px",
                      backgroundColor: isActive ? "rgba(197, 157, 95, 0.25)" : "#ede9e2",
                      color: isActive ? "#ffffff" : "#6f7172",
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Sort Area */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", flex: "1 1 280px", justifyContent: "flex-end" }}>
            {/* Search */}
            <div style={{ position: "relative", minWidth: "180px", maxWidth: "240px", flex: 1 }}>
              <i
                className="fas fa-search"
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#949698",
                  fontSize: "0.85rem",
                }}
              ></i>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "6px 12px 6px 32px",
                  borderRadius: "20px",
                  border: "1px solid #ded8cf",
                  fontSize: "0.88rem",
                  color: "#101010",
                  backgroundColor: "#ffffff",
                  outline: "none",
                }}
              />
            </div>

            {/* Sort Select */}
            <select
              aria-label="Sort products"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid #ded8cf",
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "#3f271e",
                backgroundColor: "#ffffff",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value="default">Default Ranking</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Count Status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <p style={{ margin: 0, color: "#949698", fontSize: "0.9rem" }}>
            Showing <strong>{filteredAndSortedProducts.length}</strong> artisanal coffee products
          </p>
        </div>

        {/* Product Cards Grid */}
        {filteredAndSortedProducts.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "#f7f5f1",
              borderRadius: "12px",
            }}
          >
            <i className="fas fa-box-open" style={{ fontSize: "3rem", color: "#c59d5f", marginBottom: "16px" }}></i>
            <h3 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif" }}>No Products Found</h3>
            <p style={{ color: "#6f7172" }}>No products matched your search or category selection.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
                setSortOrder("default");
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
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div
                  className="product-card"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #eee8df",
                    boxShadow: "0 3px 12px rgba(63, 39, 30, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(63, 39, 30, 0.1)";
                    e.currentTarget.style.borderColor = "#c59d5f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 3px 12px rgba(63, 39, 30, 0.04)";
                    e.currentTarget.style.borderColor = "#eee8df";
                  }}
                >
                  {/* Photo & Badge */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "250px",
                      backgroundColor: "#f9f8f6",
                      overflow: "hidden",
                    }}
                  >
                    <Link href={product.slug} style={{ display: "block", width: "100%", height: "100%" }}>
                      <img
                        src={product.image}
                        alt={product.name}
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
                    </Link>

                    {product.tag && (
                      <span
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          backgroundColor: "#3f271e",
                          color: "#c59d5f",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                          padding: "3px 10px",
                          borderRadius: "14px",
                          border: "1px solid rgba(197, 157, 95, 0.3)",
                        }}
                      >
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>
                    {/* Category & Star Rating */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          color: "#949698",
                          fontWeight: 600,
                        }}
                      >
                        {product.categoryLabel}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "2px", color: "#c59d5f", fontSize: "0.8rem" }}>
                        <i className="fas fa-star"></i>
                        <span style={{ color: "#3f271e", fontWeight: 700, marginLeft: "4px" }}>{product.rating}</span>
                        <span style={{ color: "#949698", fontSize: "0.75rem" }}>({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3
                      style={{
                        margin: "0 0 8px 0",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        fontFamily: "'Caudex', Georgia, serif",
                        color: "#3f271e",
                        lineHeight: 1.3,
                      }}
                    >
                      <Link
                        href={product.slug}
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
                        {product.name}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        color: "#6f7172",
                        fontSize: "0.88rem",
                        lineHeight: 1.55,
                        margin: "0 0 16px 0",
                        flexGrow: 1,
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Price & Add to Cart Action */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "14px",
                        borderTop: "1px solid #f2ede6",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                        <span
                          style={{
                            fontSize: "1.35rem",
                            fontWeight: 700,
                            fontFamily: "'Caudex', Georgia, serif",
                            color: "#c59d5f",
                          }}
                        >
                          ${product.price.toFixed(2)}
                        </span>
                        {product.oldPrice && (
                          <span
                            style={{
                              fontSize: "0.9rem",
                              color: "#949698",
                              textDecoration: "line-through",
                            }}
                          >
                            ${product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(product.name)}
                        style={{
                          backgroundColor: "#3f271e",
                          color: "#c59d5f",
                          border: "1px solid #3f271e",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          letterSpacing: "0.5px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#c59d5f";
                          e.currentTarget.style.color = "#101010";
                          e.currentTarget.style.borderColor = "#c59d5f";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#3f271e";
                          e.currentTarget.style.color = "#c59d5f";
                          e.currentTarget.style.borderColor = "#3f271e";
                        }}
                      >
                        <i className="fas fa-shopping-bag" style={{ fontSize: "0.8rem" }}></i>
                        Add Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

