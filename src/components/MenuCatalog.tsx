"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";

interface MenuItem {
  id: string;
  name: string;
  category: "hot-coffee" | "cold-brew" | "bakery" | "savory";
  categoryLabel: string;
  tag?: string;
  price: string;
  description: string;
  image: string;
  calories?: string;
}

const menuItems: MenuItem[] = [
  // 1. Hot Coffee & Espresso
  {
    id: "hot-1",
    name: "Aura Signature Caffe Latte",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    tag: "Signature",
    price: "$5.80",
    description: "Double shot of Colombian Supremo espresso with velvety microfoamed organic milk.",
    image: "/img/shop/img1.jpg",
    calories: "170 kcal",
  },
  {
    id: "hot-2",
    name: "Single-Origin Espresso Double",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    tag: "Single Origin",
    price: "$4.50",
    description: "Ethiopian Yirgacheffe pulled at 9 bars of pressure with floral notes and thick golden crema.",
    image: "/img/shop/img3.jpg",
    calories: "10 kcal",
  },
  {
    id: "hot-3",
    name: "Spanish Cortado",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    tag: "Barista Pick",
    price: "$5.20",
    description: "Equal 1:1 ratio of intense espresso and warm textured whole milk in an artisan glass.",
    image: "/img/shop/img7.jpg",
    calories: "90 kcal",
  },
  {
    id: "hot-4",
    name: "Cappuccino Classico",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    price: "$5.50",
    description: "Rich espresso topped with equal parts steamed milk and aerated foam, dusted with cocoa.",
    image: "/img/shop/img5.jpg",
    calories: "140 kcal",
  },
  {
    id: "hot-5",
    name: "Dark Chocolate Velvet Mocha",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    tag: "Chef's Special",
    price: "$6.50",
    description: "House-made 72% Belgian dark chocolate ganache, double espresso, and steamed milk.",
    image: "/img/shop/img4.jpg",
    calories: "280 kcal",
  },
  {
    id: "hot-6",
    name: "Bourbon Vanilla Bean Latte",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    price: "$6.20",
    description: "Real Madagascar bourbon vanilla bean syrup, espresso, and creamy steamed oat milk.",
    image: "/img/shop/img8.jpg",
    calories: "210 kcal",
  },
  {
    id: "hot-7",
    name: "Classic Americano Reserve",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    price: "$4.80",
    description: "Two shots of rich espresso stretched with triple-filtered hot spring water.",
    image: "/img/shop/img2.jpg",
    calories: "15 kcal",
  },
  {
    id: "hot-8",
    name: "Caramel Drizzle Macchiato",
    category: "hot-coffee",
    categoryLabel: "Espresso & Hot Brews",
    price: "$6.40",
    description: "Steamed vanilla milk stained with bold espresso and topped with golden butter caramel.",
    image: "/img/shop/img6.jpg",
    calories: "230 kcal",
  },

  // 2. Cold Brews & Nitro
  {
    id: "cold-1",
    name: "24-Hour Slow Steeped Cold Brew",
    category: "cold-brew",
    categoryLabel: "Cold Brew & Nitro",
    tag: "Slow Steeped",
    price: "$5.80",
    description: "Steeped cold for 24 hours in small batches. Deep cocoa notes, zero bitterness, served over ice.",
    image: "/img/shop/img6.jpg",
    calories: "20 kcal",
  },
  {
    id: "cold-2",
    name: "Nitro Velvet Draft Coffee",
    category: "cold-brew",
    categoryLabel: "Cold Brew & Nitro",
    tag: "Nitro On Tap",
    price: "$6.50",
    description: "Nitrogen-infused cold brew poured fresh from the draft tap with a creamy, stout-like head.",
    image: "/img/shop/img1.jpg",
    calories: "15 kcal",
  },
  {
    id: "cold-3",
    name: "Iced Spanish Dulce Latte",
    category: "cold-brew",
    categoryLabel: "Cold Brew & Nitro",
    tag: "Customer Favorite",
    price: "$6.40",
    description: "Double espresso poured over sweetened condensed milk, cold whole milk, and crushed ice.",
    image: "/img/shop/img2.jpg",
    calories: "250 kcal",
  },
  {
    id: "cold-4",
    name: "Sparkling Citrus Cold Brew Tonic",
    category: "cold-brew",
    categoryLabel: "Cold Brew & Nitro",
    tag: "Botanical",
    price: "$6.20",
    description: "Cold brew layered over artisanal Mediterranean tonic water with dehydrated blood orange.",
    image: "/img/shop/img4.jpg",
    calories: "60 kcal",
  },
  {
    id: "cold-5",
    name: "Salted Caramel Cloud Cold Brew",
    category: "cold-brew",
    categoryLabel: "Cold Brew & Nitro",
    price: "$6.60",
    description: "Rich cold brew topped with sea salt caramel cold foam that floats gently on top.",
    image: "/img/shop/img5.jpg",
    calories: "190 kcal",
  },
  {
    id: "cold-6",
    name: "Shakerato All'Italiana",
    category: "cold-brew",
    categoryLabel: "Cold Brew & Nitro",
    price: "$5.60",
    description: "Fresh double espresso vigorously shaken with crushed ice and organic brown sugar syrup.",
    image: "/img/shop/img7.jpg",
    calories: "45 kcal",
  },

  // 3. Artisanal Pastries & Bakery
  {
    id: "bakery-1",
    name: "French Almond Butter Croissant",
    category: "bakery",
    categoryLabel: "Artisanal Bakery",
    tag: "Fresh Baked Daily",
    price: "$5.20",
    description: "Twice-baked flaky French butter pastry filled with rich almond frangipane cream and toasted flakes.",
    image: "/img/shop/img3.jpg",
    calories: "340 kcal",
  },
  {
    id: "bakery-2",
    name: "Dark Chocolate Ganache Muffin",
    category: "bakery",
    categoryLabel: "Artisanal Bakery",
    price: "$4.80",
    description: "Tender cocoa crumb packed with melted 70% dark Belgian chocolate chips and hazelnut crunch.",
    image: "/img/shop/img5.jpg",
    calories: "380 kcal",
  },
  {
    id: "bakery-3",
    name: "Swedish Cardamom Sourdough Bun",
    category: "bakery",
    categoryLabel: "Artisanal Bakery",
    tag: "Roastery Classic",
    price: "$5.00",
    description: "Traditional twisted slow-ferment sourdough bun spiced with freshly crushed green cardamom.",
    image: "/img/shop/img8.jpg",
    calories: "310 kcal",
  },
  {
    id: "bakery-4",
    name: "Sicilian Pistachio Cannoli",
    category: "bakery",
    categoryLabel: "Artisanal Bakery",
    price: "$5.50",
    description: "Crispy hand-rolled shell stuffed with sweetened sheep's milk ricotta and Bronte pistachios.",
    image: "/img/shop/img1.jpg",
    calories: "290 kcal",
  },
  {
    id: "bakery-5",
    name: "Wild Blueberry & Lemon Glazed Scone",
    category: "bakery",
    categoryLabel: "Artisanal Bakery",
    price: "$4.50",
    description: "Golden buttery scone packed with wild Maine blueberries, drizzled with tart Meyer lemon glaze.",
    image: "/img/shop/img4.jpg",
    calories: "320 kcal",
  },
  {
    id: "bakery-6",
    name: "Toasted Banana Walnut Espresso Bread",
    category: "bakery",
    categoryLabel: "Artisanal Bakery",
    price: "$4.90",
    description: "Warm caramelized banana loaf served with whipped espresso honey butter.",
    image: "/img/shop/img2.jpg",
    calories: "350 kcal",
  },

  // 4. Breakfast & Savory
  {
    id: "savory-1",
    name: "Truffle Avocado Sourdough Tartine",
    category: "savory",
    categoryLabel: "Breakfast & Savory",
    tag: "Chef's Pick",
    price: "$11.50",
    description: "Crushed Hass avocado on toasted country sourdough, soft poached organic egg, chili flakes & black truffle oil.",
    image: "/img/shop/img7.jpg",
    calories: "420 kcal",
  },
  {
    id: "savory-2",
    name: "Smoked Salmon & Caper Bagel",
    category: "savory",
    categoryLabel: "Breakfast & Savory",
    price: "$13.20",
    description: "Wild Norwegian smoked salmon, whipped dill cream cheese, caper berries, and pickled shallots.",
    image: "/img/shop/img3.jpg",
    calories: "460 kcal",
  },
  {
    id: "savory-3",
    name: "Prosciutto Di Parma & Burrata Croissant",
    category: "savory",
    categoryLabel: "Breakfast & Savory",
    tag: "Gourmet",
    price: "$12.80",
    description: "Fresh warm butter croissant stuffed with 24-month aged prosciutto, creamy burrata, and baby arugula.",
    image: "/img/shop/img6.jpg",
    calories: "490 kcal",
  },
  {
    id: "savory-4",
    name: "Wild Forest Mushroom & Gruyère Quiche",
    category: "savory",
    categoryLabel: "Breakfast & Savory",
    price: "$10.50",
    description: "Deep buttery tart crust baked with sautéed cremini, chanterelles, fresh thyme, and aged Gruyère.",
    image: "/img/shop/img8.jpg",
    calories: "410 kcal",
  },
  {
    id: "savory-5",
    name: "Smoked Bacon & Sharp Cheddar Brioche",
    category: "savory",
    categoryLabel: "Breakfast & Savory",
    price: "$11.00",
    description: "Applewood smoked bacon, pasture-raised egg over-medium, melted cheddar, and house tomato relish.",
    image: "/img/shop/img2.jpg",
    calories: "520 kcal",
  },
];

type CategoryFilter = "all" | "hot-coffee" | "cold-brew" | "bakery" | "savory";

export default function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" ? true : item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: "all", label: "All Items", count: menuItems.length },
    {
      key: "hot-coffee",
      label: "Espresso & Hot Brews",
      count: menuItems.filter((m) => m.category === "hot-coffee").length,
    },
    {
      key: "cold-brew",
      label: "Cold Brews & Nitro",
      count: menuItems.filter((m) => m.category === "cold-brew").length,
    },
    {
      key: "bakery",
      label: "Artisanal Bakery",
      count: menuItems.filter((m) => m.category === "bakery").length,
    },
    {
      key: "savory",
      label: "Breakfast & Savory",
      count: menuItems.filter((m) => m.category === "savory").length,
    },
  ];

  return (
    <section className="meal-select-section pt-90 pb-120 p-relative" style={{ backgroundColor: "#ffffff" }}>
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
              Crafted With Passion & Precision
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
              Our Complete Artisanal Menu
            </h1>
            <p style={{ color: "#6f7172", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "680px", margin: "0 auto" }}>
              Explore our full catalog of ethically sourced single-origin coffees, handcrafted espresso creations, chilled nitro brews, and freshly baked bakery delicacies.
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          className="menu-filters-bar mb-50"
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

          {/* Quick Search Input */}
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
              placeholder="Search coffee, tea, pastries..."
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

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              backgroundColor: "#f7f5f1",
              borderRadius: "12px",
            }}
          >
            <i className="fas fa-coffee" style={{ fontSize: "3rem", color: "#c59d5f", marginBottom: "16px" }}></i>
            <h3 style={{ color: "#3f271e", fontFamily: "'Caudex', Georgia, serif" }}>No Menu Items Found</h3>
            <p style={{ color: "#6f7172" }}>Try adjusting your search query or select another category above.</p>
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
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-xl-6 col-lg-6 col-md-12">
                <div
                  className="meal-card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "18px 20px",
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    border: "1px solid #eee8df",
                    boxShadow: "0 2px 8px rgba(63, 39, 30, 0.04)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    minHeight: "120px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(63, 39, 30, 0.08)";
                    e.currentTarget.style.borderColor = "#c59d5f";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(63, 39, 30, 0.04)";
                    e.currentTarget.style.borderColor = "#eee8df";
                  }}
                >
                  {/* Photo */}
                  <div
                    style={{
                      width: "84px",
                      height: "84px",
                      minWidth: "84px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "2px solid #c59d5f",
                      position: "relative",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* Details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: "10px",
                        marginBottom: "4px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "1.12rem",
                            fontWeight: 700,
                            fontFamily: "'Caudex', Georgia, serif",
                            color: "#3f271e",
                          }}
                        >
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "0.5px",
                              padding: "2px 8px",
                              backgroundColor: "rgba(197, 157, 95, 0.15)",
                              color: "#a67642",
                              borderRadius: "12px",
                              border: "1px solid rgba(197, 157, 95, 0.3)",
                            }}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#c59d5f",
                          fontFamily: "'Caudex', Georgia, serif",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </div>
                    </div>

                    {/* Dotted Leader & Description */}
                    <p
                      style={{
                        color: "#6f7172",
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        margin: "4px 0 6px 0",
                      }}
                    >
                      {item.description}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          fontSize: "0.76rem",
                          color: "#949698",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.categoryLabel}
                      </span>
                      {item.calories && (
                        <span
                          style={{
                            fontSize: "0.76rem",
                            color: "#b98754",
                            fontWeight: 500,
                          }}
                        >
                          • {item.calories}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dietary / Origin Transparency Notice */}
        <div
          style={{
            marginTop: "60px",
            padding: "24px 30px",
            backgroundColor: "#fff8f0",
            borderRadius: "10px",
            border: "1px dashed #c59d5f",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <h4 style={{ margin: "0 0 6px 0", color: "#3f271e", fontFamily: "'Caudex', Georgia, serif", fontSize: "1.15rem" }}>
              🌱 Dietary Accommodations & Custom Roasts
            </h4>
            <p style={{ margin: 0, color: "#6f7172", fontSize: "0.92rem", lineHeight: 1.6 }}>
              All espresso beverages can be customized with organic Oatly oat milk, almond milk, or decaffeinated Swiss Water Process espresso upon request at no extra charge. Please notify your barista of any dietary allergies.
            </p>
          </div>
          <a
            href="/contact"
            style={{
              padding: "10px 24px",
              backgroundColor: "#3f271e",
              color: "#c59d5f",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            Ask A Barista
            <i className="fas fa-arrow-right" style={{ fontSize: "0.8rem" }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}

