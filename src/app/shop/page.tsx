import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
  description: "Buy freshly roasted whole bean coffee, manual pour-over drippers, French presses, and AuraBrew merchandise online.",
  keywords: ['buy coffee beans online', 'fresh roasted coffee', 'coffee gear shop', 'single origin whole bean'],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
    description: "Buy freshly roasted whole bean coffee, manual pour-over drippers, French presses, and AuraBrew merchandise online.",
    url: "https://aurabrew-cafe.com/shop",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialty Coffee Beans & Brewing Gear Shop | AuraBrew",
    description: "Buy freshly roasted whole bean coffee, manual pour-over drippers, French presses, and AuraBrew merchandise online.",
    images: ["/img/slider/slider_bg.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>

            
      
            <section className="breadcrumb-area d-flex align-items-center" style={{ "backgroundImage": "url(/img/bg/bdrc-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Shop</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop </li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            
			
            <section className="shop-area pt-120 pb-120 p-relative " data-animation="fadeInUp animated" data-delay=".2s">
                <div className="container">
					<div className="row">
						<div className="col-lg-6 col-sm-6">
						<h6 className="mt-20 mb-30">Showing 1–9 of 10 results</h6>
						</div>
						<div className="col-lg-6 col-sm-6 text-right">
							<select name="orderby" className="orderby" aria-label="Shop order">
								<option value="menu_order" >Default sorting</option>
								<option value="popularity">Sort by popularity</option>
								<option value="rating">Sort by average rating</option>
								<option value="date">Sort by latest</option>
								<option value="price">Sort by price: low to high</option>
								<option value="price-desc">Sort by price: high to low</option>
							</select>
						</div>
					</div>
                    <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img4.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Chair</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Bakari Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img5.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Cloths</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Romada Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img6.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Light</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Sikkar Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img7.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Headphone</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Minners Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img8.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">table</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Dolando Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img9.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Cloths</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Romada Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
									<div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img1.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Cloths</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Medidove Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img2.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Cloths</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Legend Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product mb-40">
                                            <div className="product__img">
                                                <a href="/shop-details"><img src="/img/shop/img3.jpg" alt="" /></a>
                                                <div className="product-action text-center">
                                                   
                                                    <a href="/shop-details">Add Cart</a>
                                                    
                                                </div>
                                            </div>
                                            <div className="product__content text-center pt-30">
                                                <span className="pro-cat"><a href="#">Table</a></span>
                                                <h4 className="pro-title"><a href="/shop-details">Akari Product</a></h4>
                                                <div className="price">
                                                    <span>$95.00</span>
                                                    <span className="old-price">$120.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                    </div>
					<div className="row">
                    <div className="col-12">
                        <div className="pagination-wrap mt-50 text-center">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item"><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                        <li className="page-item active"><a href="#">1</a></li>
                                        <li className="page-item"><a href="#">2</a></li>
                                        <li className="page-item"><a href="#">3</a></li>
                                        <li className="page-item"><a href="#">...</a></li>
                                        <li className="page-item"><a href="#">10</a></li>
                                        <li className="page-item"><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                    </div>
                <div></div></div>
                </div>
            </section>
            
        
        
      </main>
      <Footer />
    </>
  );
}
