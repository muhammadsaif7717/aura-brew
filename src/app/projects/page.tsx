import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coffeehouse & Roastery Gallery | AuraBrew",
  description: "Immerse in the visual journey of AuraBrew — Our roasting machines, barista craft, cozy cafe interiors, and community events.",
  keywords: ['coffee gallery', 'cafe interior', 'roastery photos', 'latte art gallery'],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Coffeehouse & Roastery Gallery | AuraBrew",
    description: "Immerse in the visual journey of AuraBrew — Our roasting machines, barista craft, cozy cafe interiors, and community events.",
    url: "https://aurabrew-cafe.com/projects",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Coffeehouse & Roastery Gallery | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffeehouse & Roastery Gallery | AuraBrew",
    description: "Immerse in the visual journey of AuraBrew — Our roasting machines, barista craft, cozy cafe interiors, and community events.",
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
                                    <h2>Gallery</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Gallery </li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            
         
            <section className="profile fix">
                <div className="container-fluid"> 
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="masonry-gallery-huge">
                        <div className="grid col2">

                            <div className="grid-item financial">   
                                <a className="popup-image" href="/img/gallery/protfolio-img01.png">
                                    <figure className="gallery-image">
                                      <img src="/img/gallery/protfolio-img01.png" alt="img" className="img" />   
                                    </figure>
                                </a>

                            </div>
                            <div className="grid-item banking">
                                  <a className="popup-image" href="/img/gallery/protfolio-img02.png">
                                        <figure className="gallery-image">
                                          <img src="/img/gallery/protfolio-img02.png" alt="img" className="img" /> 
                                        </figure>
                                    </a>


                            </div>
                             <div className="grid-item insurance">
                               <a className="popup-image" href="/img/gallery/protfolio-img03.png">
                                        <figure className="gallery-image">
                                          <img src="/img/gallery/protfolio-img03.png" alt="img" className="img" />     
                                        </figure>
                                    </a>

                            </div>
                                <div className="grid-item family">    
                                    <a className="popup-image" href="/img/gallery/protfolio-img04.png">
                                        <figure className="gallery-image">
                                          <img src="/img/gallery/protfolio-img04.png" alt="img" className="img" />    
                                        </figure>
                                    </a>
                            </div>
                            <div className="grid-item business">
                             <a className="popup-image" href="/img/gallery/protfolio-img05.png">
                                        <figure className="gallery-image">
                                          <img src="/img/gallery/protfolio-img05.png" alt="img" className="img" />
                                        </figure>
                                    </a>

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
