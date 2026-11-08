"use client";

import React, { useState } from "react";
import Link from "next/link";

const IMAGES = [
  { thumb: "/img/shop/details/thumb1.jpg", large: "/img/shop/details/large1.jpg", label: "Front View" },
  { thumb: "/img/shop/details/thumb2.jpg", large: "/img/shop/details/large2.jpg", label: "Beans Close-Up" },
  { thumb: "/img/shop/details/thumb3.jpg", large: "/img/shop/details/large3.jpg", label: "Packaging" },
];

export default function ShopDetailsClient() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");
  const [cartToast, setCartToast] = useState<string | null>(null);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    setCartToast(`Added ${quantity}x Ethiopia Yirgacheffe Single Origin to your cart!`);
    setTimeout(() => {
      setCartToast(null);
    }, 4000);
  };

  return (
    <>
      {/* Breadcrumb */}
      <section
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: "url(/img/bg/bdrc-bg.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-center">
                <div className="breadcrumb-title">
                  <h2>Shop Details</h2>
                  <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="/shop">Shop</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Ethiopia Yirgacheffe Single Origin
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="shop-banner-area pt-120 pb-90">
        <div className="container">
          {cartToast && (
            <div
              className="alert mb-40 text-white d-flex align-items-center justify-content-between p-3"
              style={{
                backgroundColor: "#3f271e",
                borderLeft: "4px solid #b98754",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <i className="fas fa-check-circle text-[#b98754] mr-2"></i>
                <strong>{cartToast}</strong>
              </div>
              <Link
                href="/contact"
                className="btn"
                style={{
                  backgroundColor: "#b98754",
                  color: "#fff",
                  padding: "6px 18px",
                  fontSize: "13px",
                }}
              >
                Checkout
              </Link>
            </div>
          )}

          <div className="row">
            {/* Product Gallery */}
            <div className="col-xl-7">
              <div className="shop-thumb-tab mb-30">
                <ul className="nav" style={{ gap: "10px" }}>
                  {IMAGES.map((img, idx) => (
                    <li key={idx} className="nav-item">
                      <button
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`nav-link p-1 border ${
                          activeImageIndex === idx ? "border-[#b98754] shadow-sm" : "border-gray-200"
                        }`}
                        style={{
                          background: "transparent",
                          cursor: "pointer",
                          outline: activeImageIndex === idx ? "2px solid #b98754" : "none",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.thumb}
                          alt={img.label}
                          style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-details-img mb-30">
                <div
                  className="product-large-img"
                  style={{
                    border: "1px solid #eee",
                    overflow: "hidden",
                    backgroundColor: "#fdfbf9",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={IMAGES[activeImageIndex].large}
                    alt="Product Large"
                    className="img-fluid"
                    style={{ maxHeight: "500px", objectFit: "contain", margin: "0 auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-xl-5">
              <div className="product-details mb-30">
                <div className="product-details-title">
                  <p className="text-[#b98754] font-semibold text-uppercase tracking-wider">
                    AuraBrew Artisanal Reserve
                  </p>
                  <h1 className="font-serif text-[#3f271e] font-bold text-3xl mb-2">
                    Ethiopia Yirgacheffe Single Origin
                  </h1>
                  <div className="price details-price pb-20 mb-20 border-b border-gray-200">
                    <span className="text-2xl font-bold text-[#3f271e] mr-3">$24.00</span>
                    <span className="old-price text-gray-400 line-through">$28.00</span>
                    <span className="badge ml-3 bg-[#b98754] text-white px-2 py-1 text-xs">
                      Fresh Roast (Grade 1)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Elegantly floral with distinct notes of bergamot, jasmine blossoms, candied lemon,
                  and wild forest honey. Grown at 2,100m elevation in the misty highlands of
                  Yirgacheffe, wet-processed and roasted to a delicate light-medium profile to showcase
                  vibrant clarity.
                </p>
                <div className="product-cat mt-20 mb-30 text-sm">
                  <span className="font-bold text-[#3f271e]">Category: </span>
                  <span className="text-[#b98754]">Specialty Coffee, Single Origin, Whole Bean</span>
                  <br />
                  <span className="font-bold text-[#3f271e]">Roast Profile: </span>
                  <span>Light-Medium (Filter &amp; Espresso)</span>
                </div>

                <div className="product-details-action">
                  <form onSubmit={handleAddToCart} className="d-flex align-items-center flex-wrap" style={{ gap: "15px" }}>
                    <div
                      className="plus-minus d-flex align-items-center border border-gray-300"
                      style={{ height: "48px" }}
                    >
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 bg-transparent border-0 text-[#3f271e] font-bold cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={quantity}
                        className="text-center font-bold"
                        style={{ width: "45px", border: "none", outline: "none", color: "#3f271e" }}
                      />
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 bg-transparent border-0 text-[#3f271e] font-bold cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn"
                      type="submit"
                      style={{
                        backgroundColor: "#3f271e",
                        color: "#fff",
                        height: "48px",
                        padding: "0 30px",
                        fontWeight: 700,
                      }}
                    >
                      <i className="fas fa-shopping-bag mr-2"></i> Add To Cart
                    </button>
                  </form>
                </div>

                <div className="product-social mt-40">
                  <span className="mr-3 text-sm font-bold text-[#3f271e]">Share:</span>
                  <a href="#" className="mr-2 text-gray-500 hover:text-[#b98754]" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="mr-2 text-gray-500 hover:text-[#b98754]" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="mr-2 text-gray-500 hover:text-[#b98754]" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs Section */}
      <section className="product-desc-area pb-55">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bakix-details-tab">
                <ul
                  className="nav text-center justify-content-center pb-20 mb-40 border-b border-gray-200"
                  style={{ gap: "20px" }}
                >
                  <li className="nav-item">
                    <button
                      type="button"
                      onClick={() => setActiveTab("desc")}
                      className={`font-serif text-lg font-bold pb-2 border-0 bg-transparent cursor-pointer ${
                        activeTab === "desc"
                          ? "text-[#3f271e] border-b-2 border-[#b98754]"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      style={{ borderBottom: activeTab === "desc" ? "2px solid #b98754" : "none" }}
                    >
                      Tasting Notes &amp; Story
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      onClick={() => setActiveTab("specs")}
                      className={`font-serif text-lg font-bold pb-2 border-0 bg-transparent cursor-pointer ${
                        activeTab === "specs"
                          ? "text-[#3f271e] border-b-2 border-[#b98754]"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      style={{ borderBottom: activeTab === "specs" ? "2px solid #b98754" : "none" }}
                    >
                      Origin &amp; Roast Specs
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      onClick={() => setActiveTab("reviews")}
                      className={`font-serif text-lg font-bold pb-2 border-0 bg-transparent cursor-pointer ${
                        activeTab === "reviews"
                          ? "text-[#3f271e] border-b-2 border-[#b98754]"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                      style={{ borderBottom: activeTab === "reviews" ? "2px solid #b98754" : "none" }}
                    >
                      Customer Reviews (12)
                    </button>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                {activeTab === "desc" && (
                  <div className="event-text mb-40 max-w-4xl mx-auto leading-relaxed text-gray-600">
                    <h4 className="font-serif text-[#3f271e] font-bold mb-3">
                      The Gem of the Great Rift Valley
                    </h4>
                    <p className="mb-4">
                      Ethiopian Yirgacheffe is universally acknowledged as one of the world&apos;s greatest
                      terroir coffees. Hand-picked on fertile volcanic slopes in the Gedeo zone, these
                      heirloom Arabica varietals undergo meticulous 36-hour wet fermentation followed by
                      slow sun-drying on raised African beds for 14 days.
                    </p>
                    <p>
                      In the cup, you will experience an unmistakable tea-like delicacy, silky mouthfeel,
                      and an aromatic bouquet reminiscent of Earl Grey and Meyer lemon zest. Ideal for V60
                      pour-over, Chemex, cold drip, or vibrant modern espresso extractions.
                    </p>
                  </div>
                )}

                {activeTab === "specs" && (
                  <div className="additional-info max-w-3xl mx-auto">
                    <div className="table-responsive">
                      <table className="table border">
                        <tbody>
                          <tr>
                            <th className="bg-[#fdfbf9] text-[#3f271e] w-1/3 p-3">Country &amp; Region</th>
                            <td className="p-3">Yirgacheffe, Gedeo Zone, Ethiopia</td>
                          </tr>
                          <tr>
                            <th className="bg-[#fdfbf9] text-[#3f271e] p-3">Altitude</th>
                            <td className="p-3">1,950m – 2,200m ASL</td>
                          </tr>
                          <tr>
                            <th className="bg-[#fdfbf9] text-[#3f271e] p-3">Varietals</th>
                            <td className="p-3">Indigenous Heirloom (Kurume &amp; Dega)</td>
                          </tr>
                          <tr>
                            <th className="bg-[#fdfbf9] text-[#3f271e] p-3">Processing Method</th>
                            <td className="p-3">Fully Washed &amp; Sun Dried on Raised Beds</td>
                          </tr>
                          <tr>
                            <th className="bg-[#fdfbf9] text-[#3f271e] p-3">Roast Degree</th>
                            <td className="p-3">City Roast (Light-Medium)</td>
                          </tr>
                          <tr>
                            <th className="bg-[#fdfbf9] text-[#3f271e] p-3">Bag Weight</th>
                            <td className="p-3">250g / 8.8oz (Valve Sealed with Resealable Zipper)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="max-w-3xl mx-auto">
                    <div className="reviews-list mb-4">
                      <div className="review-item p-3 mb-3 border-b border-gray-100">
                        <div className="d-flex justify-content-between mb-2">
                          <strong className="text-[#3f271e]">Marcus Vance</strong>
                          <div className="text-[#b98754]">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          &ldquo;Hands down the cleanest Yirgacheffe I have brewed this year. Bursting with
                          jasmine aroma on a V60 at 92°C. Will subscribe for weekly bags!&rdquo;
                        </p>
                      </div>
                      <div className="review-item p-3 mb-3 border-b border-gray-100">
                        <div className="d-flex justify-content-between mb-2">
                          <strong className="text-[#3f271e]">Elena Rostova</strong>
                          <div className="text-[#b98754]">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          &ldquo;Makes incredible iced pour-over. Super bright lemon sweetness without any
                          harsh acidity.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

