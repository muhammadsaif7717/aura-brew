import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | AuraBrew Cafe",
  description: "Find answers regarding AuraBrew's coffee sourcing, table bookings, vegan milk options, brewing guides, and delivery.",
  keywords: ['coffee FAQ', 'cafe questions', 'table booking FAQ', 'coffee bean brewing'],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | AuraBrew Cafe",
    description: "Find answers regarding AuraBrew's coffee sourcing, table bookings, vegan milk options, brewing guides, and delivery.",
    url: "https://aurabrew-cafe.com/faq",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions | AuraBrew Cafe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | AuraBrew Cafe",
    description: "Find answers regarding AuraBrew's coffee sourcing, table bookings, vegan milk options, brewing guides, and delivery.",
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
                                    <h2>Faq</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Faq </li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
			 
                        <section id="faq" className="faq-area pt-120 pb-120">             
                <div className="container">   
                    <div className="section-title center-align mb-50 text-center">
                        <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Frequently Asked Questions</h5>
                        <h2>Everything You Need To Know About AuraBrew</h2>
                        <p>Have questions about our artisanal roasting, reservations, wholesale, or catering? Find quick answers below.</p>
                    </div>
                    <FaqAccordion />
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
            
                
            <section className="team-area2 fix p-relative pt-105 pb-80">  
                <div className="container">  
                    <div className="row">   
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-40 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5><span className="circle-left"><img src="/img/bg/circle-left.png" alt="img" /></span> Our Team</h5>
                                <h2>
                                     Best Expert Coffee
                                </h2>
                                <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel </p>
                            </div>
                        </div>                        
                         
                    </div>
                   <div className="row team-active">                   
                        <div className="col-xl-4">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="/img/team/team01.jpg" alt="img" />
                                        
                                    </div>
                                </div>
                                <div className="team-info">
                                    <h4>Howard Holmes</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i className="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="/img/team/team02.jpg" alt="img" />
                                    </div>                                     
                                </div>
                                <div className="team-info">
                                    <h4>Ella Thompson</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i className="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-xl-4">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="/img/team/team03.jpg" alt="img" />
                                    </div>
                                    
                                </div>
                                <div className="team-info">
                                    <h4>Vincent Cooper</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i className="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div className="col-xl-4">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                         <img src="/img/team/team04.jpg" alt="img" />
                                    </div>
                                
                                </div>
                                <div className="team-info">
                                    <h4>Danielle Bryant</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i className="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="col-xl-4">
                            <div className="single-team mb-40" >
                                <div className="team-thumb">
                                    <div className="brd">
                                        <img src="/img/team/team05.jpg" alt="img" />
                                    </div>
                                    
                                </div>
                                <div className="team-info">
                                    <h4>Vincent Cooper</h4>
                                    <p>Designer</p>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i className="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>   
                                        </ul>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
             
        
      </main>
      <Footer />
    </>
  );
}
