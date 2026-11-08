import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "About Our Heritage & Roasting Philosophy | AuraBrew",
  description: "Discover AuraBrew's dedication to sustainable direct-trade coffee farming, master roasters, and culinary craftsmanship.",
  keywords: ['about coffee roastery', 'coffee heritage', 'direct trade coffee', 'AuraBrew story'],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Heritage & Roasting Philosophy | AuraBrew",
    description: "Discover AuraBrew's dedication to sustainable direct-trade coffee farming, master roasters, and culinary craftsmanship.",
    url: "https://aurabrew-cafe.com/about",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "About Our Heritage & Roasting Philosophy | AuraBrew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Heritage & Roasting Philosophy | AuraBrew",
    description: "Discover AuraBrew's dedication to sustainable direct-trade coffee farming, master roasters, and culinary craftsmanship.",
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
                                    <h2>About</h2>    
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
            
             
            <section className="about-area about-p pt-120 pb-120 p-relative fix">
               
                <div className="animations-02"><img src="/img/bg/an-img-02.png" alt="contact-bg-an-01" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                                <img src="/img/features/about_img_02.png" alt="img" />   
                               <div className="about-icon">
                                     <img src="/img/features/about_img_03.png" alt="img" />   
                                </div>
                            </div>
                          
                        </div>
                        
					<div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content  wow fadeInRight  animated pl-30" data-animation="fadeInRight" data-delay=".4s">
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
            
            
            <section id="skill" className="skill-area p-relative fix" style={{ "background": "#3f271e" }}>
                 <div className="animations-01"><img src="/img/bg/an-img-05.png" alt="contact-bg-an-05" /></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
					   <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="skills-content s-about-content">
                                <div className="skills-title pb-20">                               
                                    <h5><span className="circle-left"><img src="/img/bg/circle-left-w.png" alt="img" /></span> Coffee We Use</h5>
                                <h2>
                                 We Offer Wide Selection of Coffee
                                </h2>                             
                                </div>
                                <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.</p>
                                 <div className="skills-content s-about-content mt-20">
                                <div className="skills">
                                    <div className="skill mb-30">
                                      <div className="skill-name">Qulity Production</div>
                                      <div className="skill-bar">
                                        <div className="skill-per" id="80"></div>
                                      </div>
                                    </div>
                                     <div className="skill mb-30">
                                      <div className="skill-name">Maintenance Services</div>
                                      <div className="skill-bar">
                                        <div className="skill-per" id="90"></div>
                                      </div>
                                    </div>
                                      <div className="skill mb-30">
                                      <div className="skill-name">Product Managment</div>
                                      <div className="skill-bar">
                                        <div className="skill-per" id="70"></div>
                                      </div>
                                    </div>

                                </div>


                                
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="skills-img">                               
                                  <img src="/img/bg/skills-img.png" alt="img" className="img" />              
                                </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            
          
              
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
                
                        
                    </div>
                </div>
            </section>
            
            <NewsletterSection />
            
        
      </main>
      <Footer />
    </>
  );
}
