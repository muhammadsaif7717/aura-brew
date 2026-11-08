import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us & Table Reservation | AuraBrew Roastery",
  description: "Connect with AuraBrew Coffee Roasters. Reserve a table, inquire about event catering, or visit our roastery cafe.",
  keywords: ['contact coffee shop', 'table reservation cafe', 'AuraBrew location', 'cafe hours'],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Table Reservation | AuraBrew Roastery",
    description: "Connect with AuraBrew Coffee Roasters. Reserve a table, inquire about event catering, or visit our roastery cafe.",
    url: "https://aurabrew-cafe.com/contact",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Contact Us & Table Reservation | AuraBrew Roastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Table Reservation | AuraBrew Roastery",
    description: "Connect with AuraBrew Coffee Roasters. Reserve a table, inquire about event catering, or visit our roastery cafe.",
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
                                    <h2>Contact Us</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            	
            
            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
                <div className="container">
             
					<div className="row justify-content-center align-items-center">
						
                         <div className="col-lg-4 order-1">
                             
                            <div className="contact-info">
                                  <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                        <div className="f-cta-icon">
                                            <i className="far fa-map"></i>
                                        </div>
                                        <h5>Office Address</h5>
                                        <p>380 St Kilda Road, Melbourne <br />
                                            VIC 3004, Australia</p>
                                    </div>
                                     <div className="single-cta pb-30 mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                        <div className="f-cta-icon">
                                            <i className="far fa-clock"></i>
                                        </div>
                                        <h5>Working Hours</h5>
                                        <p>Monday to Friday 09:00 to 18:30 <br /> 
                                            Saturday 15:30</p>
                                    </div>
                                     <div className="single-cta wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                                        <div className="f-cta-icon">
                                            <i className="far fa-envelope-open"></i>
                                        </div>
                                        <h5>Message Us</h5>
                                        <p> <a href="mailto:info@aurabrew-cafe.com">info@aurabrew-cafe.com</a><br /><a href="mailto:orders@aurabrew-cafe.com">orders@aurabrew-cafe.com</a></p>
                                    </div>
                                </div>							
                        </div>
                        <div className="col-lg-8 order-2">
                            <div className="contact-bg02">
                                <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h2>
                                  Get In Touch
                                </h2>
                                </div>                               
                                <ContactForm />                            
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
