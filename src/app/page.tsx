import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import BookingForm from "@/components/BookingForm";
import TestimonialSection from "@/components/TestimonialSection";
import NewsletterSection from "@/components/NewsletterSection";
import GallerySection from "@/components/GallerySection";
import CoffeeSkills from "@/components/CoffeeSkills";

export const metadata: Metadata = {
  title: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
  description: "Welcome to AuraBrew — Experience freshly roasted single-origin beans, precision espresso, handcrafted pour-overs, and gourmet cafe pastries.",
  keywords: ['AuraBrew', 'coffee shop', 'specialty coffee', 'artisanal roastery', 'espresso bar', 'single origin coffee', 'table booking'],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
    description: "Welcome to AuraBrew — Experience freshly roasted single-origin beans, precision espresso, handcrafted pour-overs, and gourmet cafe pastries.",
    url: "https://aurabrew-cafe.com/",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraBrew | Artisanal Coffee Shop & Specialty Roastery",
    description: "Welcome to AuraBrew — Experience freshly roasted single-origin beans, precision espresso, handcrafted pour-overs, and gourmet cafe pastries.",
    images: ["/img/slider/slider_bg.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />

            <div className="brand-area pt-60 pb-60" style={{ "background": "#3f271e" }}>
                <div className="container">
                    <div className="row brand-active">
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src="/img/brand/b-logo1.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src="/img/brand/b-logo2.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src="/img/brand/b-logo3.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                  <img src="/img/brand/b-logo4.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src="/img/brand/b-logo5.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
             
            <section id="about" className="about-area about-p pt-120 pb-120 p-relative fix">
               
                <div className="animations-02"><img src="/img/bg/an-img-02.png" alt="contact-bg-an-01" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative" data-animate="fade-left">
                                <img src="/img/features/about_img_02.png" alt="img" />   
                               <div className="about-icon">
                                     <img src="/img/features/about_img_03.png" alt="img" />   
                                </div>
                            </div>
                          
                        </div>
                        
					<div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content pl-30" data-animate="fade-right">
                                <div className="about-title second-title pb-25">  
                                    <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> About Us</h5>
                                    <h2>Would You Like Delicious Coffee</h2>                                   
                                </div>
                                   <p>Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.</p>
                                    <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.</p>
                                    <div className="about-content3 mt-30">
                                    <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6">
                                        <div className="signature">
                                            <img src="/img/features/signature.png" alt="img" />   
                                            <h3 className="mt-10">Vincent Smith</h3>
                                        </div>
                                     
                                    </div>
                                         <div className="col-md-6 text-right">
                                              <div className="slider-btn">                                          
                                                     <a href="/about" className="btn ss-btn smoth-scroll">Discover More</a>				
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            
            
            <section id="features" className="pt-120 pb-380 p-relative" style={{ "backgroundColor": "#f7f5f1" }}>
                 <div className="animations-01"><img src="/img/bg/an-img-01.png" alt="an-img-01" /></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Our Features</h5>
                                <h2>
                                  What We Provide You
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                           
                        </div>
                         <div className="col-lg-3 col-md-3">
                                <div className="services-08-item">
                                    <div className="services-08-thumb">
                                     <img src="/img/icon/fe-icon01.png" alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3><a href="/single-service"> High Quality Coffee</a></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="/single-service">Read More <i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-3 col-md-3">
                                <div className="services-08-item">
                                    <div className="services-08-thumb">
                                   <img src="/img/icon/fe-icon04.png" alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3><a href="/single-service">Barista Coffee Shops</a></h3>
                                       <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <a href="/single-service">Read More <i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-3 col-md-3">
                                <div className="services-08-item">
                                    <div className="services-08-thumb">
                                     <img src="/img/icon/fe-icon05.png" alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3><a href="/single-service">Shop Coffee Online</a></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <a href="/single-service">Read More <i className="fal fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-3 col-md-3">
                                <div className="services-08-item">
                                    <div className="services-08-thumb">
                                    <img src="/img/icon/fe-icon06.png" alt="img" />
                                    </div>
                                    <div className="services-08-content">
                                        <h3><a href="/single-service">Best Coffe Machine</a></h3>
                                        <p>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                         <a href="/single-service">Read More <i className="fal fa-long-arrow-right"></i></a>
                                       
                                    </div>
                                </div>
                            </div>
                     
                    </div>
                </div>
            </section>
            
            
            
            <section id="booking" className="booking pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                             <div className="contact-bg02">
                                <div className="section-title center-align">
                                    <h5><span className="circle-left"><img src="/img/bg/circle-left-w.png" alt="img" /></span> Contact Us</h5>
                                    <h2>
                                       Book Your Table Now !
                                    </h2>
                                </div>                                
                                <BookingForm />                            
                            </div>  
                                             
                        </div>
                        <div className="col-lg-6">
                             <div className="booking-img">
                                 <img src="/img/bg/booking-img.png" alt="img" />
                            </div>
                        </div>
					   <div className="booking-img2">
                                 <img src="/img/bg/booking-img-2.png" alt="img" />
                            </div>
                    </div>
                </div>
            </section>
            	
            
            <section id="menu" className="meal-select-section pt-120 pb-120 p-relative">
              <div className="animations-02"><img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" /></div>
             <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Our Menu</h5>
                                <h2>
                                 What We Have In Here
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            </div>
                           
                        </div>
                    </div>
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
                        <div className="col-md-12 text-center">
                              <div className="slider-btn">                                          
                                     <a href="/menu" className="btn ss-btn smoth-scroll">Discover More</a>				
                                </div>
                        </div>
                    </div>
                    
                </div>
        </section>
        
                       
            <section id="shop" className="product-slider pt-120 pb-90 p-relative fix" style={{ "backgroundColor": "#f7f5f1" }}>
                 <div className="animations-01"><img src="/img/bg/an-img-04.png" alt="contact-bg-an-01" /></div>
                <div className="container">
                    <div className="row">   
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> In-Store Roastery Shop</h5>
                                <h2>
                                    Featured Coffee &amp; Roastery Collection
                                </h2>
                                <p>Discover our artisanal single-origin beans, precision roast blends, and specialty brewing gear exclusively available for physical purchase and tasting at our coffee shop.</p>
                            </div>
                           
                        </div>
                         
                    </div>
                    <div className="row home-blog-active">
                        <div className="col-lg-4 col-md-12">
                             
                          <div className="product mb-40">
                            <div className="product__img">
                                <a href="/shop-details"><img src="/img/shop/img1.jpg" alt="" /></a>
                                <div className="product-action text-center">

                                    <a href="/shop-details">View Details</a>

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

                                    <a href="/shop-details">View Details</a>

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

                                    <a href="/shop-details">View Details</a>

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

                                    <a href="/shop-details">View Details</a>

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

                                    <a href="/shop-details">View Details</a>

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

                                    <a href="/shop-details">View Details</a>

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
            
               
            <TestimonialSection />
            
            <CoffeeSkills />
              
            <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
                 <div className="animations-02"><img src="/img/bg/an-img-06.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row align-items-center"> 
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Coffee Journal</h5>
                                <h2>
                                    Stories From The Roastery
                                </h2>
                                <p>Explore roasting tutorials, single-origin sourcing travels, and barista craft secrets from the AuraBrew coffee lab.</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-lg-4 col-md-6">
                            <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <a href="/blog-details"><img src="/img/blog/inner_b1.jpg" alt="The Sacred Art of Espresso" /></a>
                                </div>                    
                                <div className="blog-content2">    
                                    <div className="date-home">
                                        4th November 2024
                                    </div>
                                    <h4><a href="/blog-details">The Sacred Art of Espresso: Mastering the 1:2 Extraction Ratio</a></h4> 
                                    <p>Discover how water pressure, grind granularity, and brew temperature create velvet golden crema.</p>
                                    <div className="blog-btn"><a href="/blog-details">Read More</a></div>
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <a href="/blog-details"><img src="/img/blog/inner_b2.jpg" alt="Ethiopian Single-Origin Coffee Journey" /></a>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                       28th October 2024
                                    </div>
                                    <h4><a href="/blog-details">Single-Origin Bean Journey: High-Altitude Ethiopian Farms</a></h4> 
                                    <p>An origin travelogue through Yirgacheffe documenting heirloom varieties and floral tasting notes.</p>
                                    <div className="blog-btn"><a href="/blog-details">Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <a href="/blog-details"><img src="/img/blog/inner_b3.jpg" alt="The Chemistry of Microfoam" /></a>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                        19th October 2024
                                    </div>
                                    <h4><a href="/blog-details">The Chemistry of Microfoam: Achieving Silk Texture & Latte Art</a></h4> 
                                    <p>How to steam organic milk to exactly 62°C and pour delicate rosettas and swans with ease.</p>
                                    <div className="blog-btn"><a href="/blog-details">Read More</a></div>
                                </div>
                            </div>
                        </div>
                
                        <div className="col-12 text-center mt-50">
                            <div className="slider-btn">
                                <a
                                    href="/blog"
                                    className="btn ss-btn d-inline-flex align-items-center justify-content-center"
                                    style={{
                                        backgroundColor: "#3f271e",
                                        color: "#ffffff",
                                        padding: "16px 36px",
                                        borderRadius: "4px",
                                        fontWeight: 700,
                                        fontSize: "14px",
                                        letterSpacing: "1px",
                                        border: "1px solid rgba(197, 157, 95, 0.4)",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 6px 20px rgba(63, 39, 30, 0.15)",
                                    }}
                                >
                                    Read All Blogs <i className="fal fa-long-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <NewsletterSection />
            <GallerySection />
             
        
      </main>
      <Footer />
    </>
  );
}
