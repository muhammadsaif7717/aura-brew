"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimateProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targetSelectors = [
      ".section-title",
      ".product-card",
      ".product",
      ".meal-card",
      ".meal-container",
      ".single-team",
      ".single-post2",
      ".services-08-item",
      ".single-brand",
      ".booking-form",
      ".contact-bg02",
      ".s-about-content",
      ".s-about-img",
      ".skills-content",
      ".skills-img",
      ".skill-box",
      ".faq-card",
      ".blog-details-wrap",
      ".sidebar-widget",
      "[data-animate]",
      ".animate-card",
      ".review-card",
      ".testimonial-card",
      ".gallery-card-btn",
      ".masonry-item",
      ".scroll-animate",
    ];

    const selectorString = targetSelectors.join(", ");
    let observer: IntersectionObserver | null = null;
    let timerId: NodeJS.Timeout | null = null;

    const setupObserver = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(selectorString));

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.1,
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains("scroll-animate")) {
          el.classList.add("scroll-animate");
        }
        if (!el.classList.contains("in-view")) {
          const rect = el.getBoundingClientRect();
          // If already in top of the initial screen, reveal it smoothly
          if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
            el.classList.add("in-view");
          } else if (observer) {
            observer.observe(el);
          }
        }
      });
    };

    // Delay initialization until React hydration has completely settled
    timerId = setTimeout(setupObserver, 120);

    // Also observe new elements dynamically added (e.g. category filter clicks)
    const handleDocumentClick = () => {
      setTimeout(() => {
        if (observer) {
          const elements = Array.from(document.querySelectorAll<HTMLElement>(selectorString));
          elements.forEach((el) => {
            if (!el.classList.contains("in-view") && !el.classList.contains("scroll-animate")) {
              el.classList.add("scroll-animate");
              observer?.observe(el);
            }
          });
        }
      }, 80);
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      if (timerId) clearTimeout(timerId);
      if (observer) observer.disconnect();
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [pathname]);

  return null;
}
