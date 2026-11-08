import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Artisanal Coffee & Culinary Menu | AuraBrew",
  description: "Explore the AuraBrew menu — Single-origin pour-overs, specialty espresso, nitro cold brews, and freshly baked artisanal pastries.",
  keywords: ['coffee menu', 'espresso drinks', 'cafe food', 'cold brew menu', 'AuraBrew menu'],
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Artisanal Coffee & Culinary Menu | AuraBrew",
    description: "Explore the AuraBrew menu — Single-origin pour-overs, specialty espresso, nitro cold brews, and freshly baked artisanal pastries.",
    url: "https://aurabrew-cafe.com/menu",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Artisanal Coffee & Culinary Menu | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisanal Coffee & Culinary Menu | AuraBrew",
    description: "Explore the AuraBrew menu — Single-origin pour-overs, specialty espresso, nitro cold brews, and freshly baked artisanal pastries.",
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
                                    <h2>Our Menu</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Our Menu</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
			  
            <section className="meal-select-section pt-120 pb-90 p-relative">
              <div className="animations-02"><img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" /></div>
             <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="populer-meal">
                                <ul>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img1.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Coffe Latte
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                  <strong>$12.90</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img2.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Coffe Americano
                                                </h5>   
                                               <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img3.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Macchiato
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img4.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Coffe Mocha
                                                </h5>   
                                                 <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img5.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                   Cappuccino
                                                </h5>   
                                                 <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img6.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Iced Coffe
                                                </h5>   
                                               <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img7.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Chocolate Mocha
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img8.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Vanilla Latte
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                     <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img1.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    Iced Latte
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img3.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                   Espresso
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img5.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                   Caramel Latte
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                     <li>
                                        <div className="meal-container">
                                            <div className="meal-img">
                                                <img src="/img/shop/img7.jpg" alt="img" />
                                            </div>
                                            <div className="meal-content">
                                                <h5>
                                                    <strong> Cortado </strong>
                                                </h5>   
                                                <p>Espresso and Light Layer of Crema</p>
                                            </div>
                                            <div className="line">
                                                <hr />
                                            </div>
                                             <div className="meal-price">
                                                 <strong>$13.00</strong>
                                             </div>
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>  
                    </div>
                    
                </div>
        </section>
        
                      
            <section  className="product-slider pt-120 pb-90 p-relative fix" style={{ "backgroundColor": "#f7f5f1" }}>
                 <div className="animations-01"><img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" /></div>
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Our Online Shop</h5>
                                <h2>
                                    Buy Our Featured Products
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                           
                        </div>
                         
                    </div>
                    <div className="row home-blog-active">
                        <div className="col-lg-4 col-md-12">
                             
                          <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img1.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">Add Cart</a>

                                </div>
                            </div>
                            <div className="product__content pt-30">
                             
                                <h4 className="pro-title"><a href="/shop-details">Caramel Macchiato</a></h4>
                                <div className="price">
                                   <span className="old-price">$20</span>
                                    <span>$15</span>
                                </div>
                            </div>
                        </div> 
                             
                         
                        </div>
                         <div className="col-lg-4 col-md-12">
                             
                            <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img2.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">Add Cart</a>

                                </div>
                            </div>
                            <div className="product__content pt-30">
                  
                                <h4 className="pro-title"><a href="/shop-details">Mocha</a></h4>
                                <div className="price">
                                   <span className="old-price">$20</span>
                                    <span>$15</span>
                                </div>
                            </div>
                        </div> 
                               
                             
                         
                        </div>
                        <div className="col-lg-4 col-md-12">
                             
                            <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img3.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">Add Cart</a>

                                </div>
                            </div>
                            <div className="product__content pt-30">
    
                                <h4 className="pro-title"><a href="/shop-details">French Vanilla</a></h4>
                                <div className="price">
                                   <span className="old-price">$20</span>
                                    <span>$15</span>
                                </div>
                            </div>
                        </div> 
                             
                             
                         
                        </div>
                         <div className="col-lg-4 col-md-12">
                             
                            <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img4.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">Add Cart</a>

                                </div>
                            </div>
                            <div className="product__content pt-30">
                       
                                <h4 className="pro-title"><a href="/shop-details">Latte</a></h4>
                                <div className="price">                                    
                                   <span className="old-price">$20</span>
                                    <span>$15</span>
                                </div>
                            </div>
                        </div> 
                             
                        </div>
                        <div className="col-lg-4 col-md-12">
                             
                            <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img5.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">Add Cart</a>

                                </div>
                            </div>
                            <div className="product__content pt-30">
                       
                                <h4 className="pro-title"><a href="/shop-details">French Vanilla</a></h4>
                                <div className="price">
                                    <span className="old-price">$20</span>
                                    <span>$15</span>
                                </div>
                            </div>
                        </div> 
                             
                        </div>
                        <div className="col-lg-4 col-md-12">
                             
                            <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img6.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">Add Cart</a>

                                </div>
                            </div>
                            <div className="product__content pt-30">
                       
                                <h4 className="pro-title"><a href="/shop-details">Latte</a></h4>
                                <div className="price">
                                    <span>$95.00</span>
                                    <span className="old-price">$120.00</span>
                                </div>
                            </div>
                        </div> 
                             
                        </div>
                        
                    </div>
                </div>
            </section>
            
               
            <section className="testimonial-area pt-120 pb-90 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Our Online Shop</h5>
                                <h2>
                                   What Our Clients Says
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                           
                        </div>
                        <div className="col-lg-12">
                            <div className="testimonial-active">
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Jina Nilson</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                               <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_02.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Braitly Dcosta</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                   <div className="review-icon">
                                        <img src="/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                      <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                               <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Jina Nilson</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src="/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                    <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                               <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src="/img/testimonial/testi_avatar_02.png" alt="img" />
                                        <div className="ta-info">
                                            <h6>Braitly Dcosta</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                   <div className="review-icon">
                                        <img src="/img/testimonial/review-icon.png" alt="img" />
                                     </div>
                                      <p>“Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam”.</p>
                                    
                                    <div className="qt-img">
                                    <img src="/img/testimonial/qt-icon.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
             
            <section className="newslater-area p-relative pt-120 pb-120" style={{ "backgroundColor": "#f7f5f1" }}>
                <div className="animations-01"><img src="/img/bg/an-img-07.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-xl-9 col-lg-9">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Newsletter</h5>
                                <h2>
                                    Get Best Offers On The Coffee
                                </h2>
                                <p>With the subscription, enjoy your favourite coffees without having to think about it</p>
                            </div>
                            <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                               <div className="form-group">
                                  <input className="form-control" id="email2" name="email" type="email" placeholder="Your Email Address" defaultValue="" required /> 
                                  <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                               </div>
                               	
                            </form>
                        </div>
                       
                    </div>
                   
                </div>
            </section>
            
        
      </main>
      <Footer />
    </>
  );
}
