"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimateProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const targetSelectors = [
      ".section-title",
      ".product-card",
      ".meal-card",
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
      ".faq-card",
      ".meal-container",
      ".blog-details-wrap",
      ".sidebar-widget",
      "[data-animate]",
      ".animate-card",
    ];

    const selectorString = targetSelectors.join(", ");
    let observer: IntersectionObserver | null = null;
    let timerId: NodeJS.Timeout | null = null;

    // Delay initialization until React hydration has completely settled
    timerId = setTimeout(() => {
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
          threshold: 0.12,
        }
      );

      elements.forEach((el) => {
        if (!el.classList.contains("scroll-animate")) {
          el.classList.add("scroll-animate");
        }
        if (!el.classList.contains("in-view")) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add("in-view");
          } else if (observer) {
            observer.observe(el);
          }
        }
      });
    }, 150);

    return () => {
      if (timerId) clearTimeout(timerId);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
