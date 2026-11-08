import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Coffee Journal & Roasting Culture | AuraBrew Blog",
  description: "Read expert articles on manual brewing techniques, espresso recipes, origin farm trips, and coffeehouse news from AuraBrew.",
  keywords: ['coffee blog', 'brewing guides', 'latte art tips', 'coffee roasting journal'],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Coffee Journal & Roasting Culture | AuraBrew Blog",
    description: "Read expert articles on manual brewing techniques, espresso recipes, origin farm trips, and coffeehouse news from AuraBrew.",
    url: "https://aurabrew-cafe.com/blog",
    siteName: "AuraBrew Coffee Co.",
    images: [
      {
        url: "/img/slider/slider_bg.png",
        width: 1200,
        height: 630,
        alt: "Coffee Journal & Roasting Culture | AuraBrew Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Journal & Roasting Culture | AuraBrew Blog",
    description: "Read expert articles on manual brewing techniques, espresso recipes, origin farm trips, and coffeehouse news from AuraBrew.",
    images: ["/img/slider/slider_bg.png"],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>

            
            
		<div className="modal fade bs-example-modal-lg search-bg popup1" tabIndex={-1} role="dialog">
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content search-popup">
					<div className="text-center">
						<a href="#" className="close2" data-dismiss="modal" aria-label="Close">× close</a>
					</div>
					<div className="row search-outer">
						<div className="col-md-11"><input type="text" placeholder="Search for products..." /></div>
						<div className="col-md-1 text-right"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></div>
					</div>
				</div>
			</div>
		</div>
		
            
            <section className="breadcrumb-area d-flex align-items-center" style={{ "backgroundImage": "url(/img/bg/bdrc-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>Blog</h2>    
                                    <div className="breadcrumb-wrap">
                              
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                    </ol>
                                </nav>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            
             
            <section className="inner-blog pt-120 pb-105">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb">
                                    <img src="/img/blog/inner_b1.jpg" alt="" />
                                </div>
                                <div className="bsingle__content">
                                   <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h2><a href="/blog-details">Lorem ipsum dolor sit amet, consectetur
                                            cing elit, sed do eiusmod tempor.</a></h2>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="blog__btn">
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb video-p">
                                    <img src="/img/blog/inner_b2.jpg" alt="" />
                                    <a href="https://www.youtube.com/watch?v=vKSA_idPZkc" className="video-i popup-video"><i className="fas fa-play"></i></a>
                                </div>
                                <div className="bsingle__content">
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h2><a href="/blog-details">There are many variations passages of like consectetur lorem ipsum available.</a></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="blog__btn">
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb blog-active">
                                    <div className="slide-post">
                                        <img src="/img/blog/inner_b3.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="/img/blog/inner_b2.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="/img/blog/inner_b1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="bsingle__content">
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h2><a href="/blog-details">I must explain to you how all this mistaken idea of denouncing pleasure.</a></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                                    <div className="blog__btn">
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pagination-wrap">
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
                         <div className="col-sm-12 col-md-12 col-lg-4">
                           <aside className="sidebar-widget">
                              <section id="search-3" className="widget widget_search">
                                 <h2 className="widget-title">Search</h2>
                                 <form role="search" method="get" className="search-form" action="http://wordpress.zcube.in/finco/">
                                    <label>
                                    <span className="screen-reader-text">Search for:</span>
                                    <input type="search" className="search-field" placeholder="Search &hellip;" defaultValue="" name="s" />
                                    </label>
                                    <input type="submit" className="search-submit" defaultValue="Search" />
                                 </form>
                              </section>
                              <section id="custom_html-5" className="widget_text widget widget_custom_html">
                                 <h2 className="widget-title">Follow Us</h2>
                                 <div className="textwidget custom-html-widget">
                                    <div className="widget-social">
                                       <a href="#"><i className="fab fa-twitter"></i></a>
                                       <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                       <a href="#"><i className="fab fa-facebook-f"></i></a>
                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                       <a href="#"><i className="fab fa-wordpress"></i></a>
                                    </div>
                                 </div>
                              </section>
                              <section id="categories-1" className="widget widget_categories">
                                 <h2 className="widget-title">Categories</h2>
                                 <ul>
                                    <li className="cat-item cat-item-16"><a href="#">Branding</a> (4)</li>
                                    <li className="cat-item cat-item-23"><a href="#">Corporat</a> (3)</li>
                                    <li className="cat-item cat-item-18"><a href="#">Design</a> (3)</li>
                                    <li className="cat-item cat-item-22"><a href="#">Gallery</a> (3)</li>
                                 </ul>
                              </section>
                              <section id="recent-posts-4" className="widget widget_recent_entries">
                                 <h2 className="widget-title">Recent Posts</h2>
                                 <ul>
                                    <li>
                                       <a href="#">User Experience Psychology And Performance Smshing</a>
                                       <span className="post-date">August 19, 2020</span>
                                    </li>
                                    <li>
                                       <a href="#">Monthly Web Development Up Cost Of JavaScript</a>
                                       <span className="post-date">August 19, 2020</span>
                                    </li>
                                    <li>
                                       <a href="#">There are many variation passages of like available.</a>
                                       <span className="post-date">August 19, 2020</span>
                                    </li>
                                 </ul>
                              </section>
                              <section id="tag_cloud-1" className="widget widget_tag_cloud">
                                 <h2 className="widget-title">Tag</h2>
                                 <div className="tagcloud">
                                     <a href="#" className="tag-cloud-link tag-link-28 tag-link-position-1" style={{ "fontSize": "8pt" }} aria-label="app (1 item)">app</a>
                                    <a href="#" className="tag-cloud-link tag-link-17 tag-link-position-2" style={{ "fontSize": "8pt" }} aria-label="Branding (1 item)">Branding</a>
                                    <a href="#" className="tag-cloud-link tag-link-20 tag-link-position-3" style={{ "fontSize": "8pt" }} aria-label="corporat (1 item)">corporat</a>
                                    <a href="#" className="tag-cloud-link tag-link-24 tag-link-position-4" style={{ "fontSize": "16.4pt" }} aria-label="Design (2 items)">Design</a>
                                    <a href="#" className="tag-cloud-link tag-link-25 tag-link-position-5" style={{ "fontSize": "22pt" }} aria-label="gallery (3 items)">gallery</a>
                                    <a href="#" className="tag-cloud-link tag-link-26 tag-link-position-6" style={{ "fontSize": "8pt" }} aria-label="video (1 item)">video</a>
                                    <a href="#" className="tag-cloud-link tag-link-29 tag-link-position-7" style={{ "fontSize": "16.4pt" }} aria-label="web design (2 items)">web design</a>
                                 </div>
                              </section>
                           </aside>
                        </div>
                    </div>
                </div>
            </section>
            
        
      </main>
      <Footer />
    </>
  );
}
