"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-reveal]";

export function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (nodes.length === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.classList.add("is-revealed");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    nodes.forEach((node) => {
      const delay = node.dataset.revealDelay ?? "0";
      node.style.setProperty("--reveal-delay", `${delay}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
