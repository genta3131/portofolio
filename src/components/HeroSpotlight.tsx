"use client";

import { useEffect, useRef } from "react";

/**
 * Soft radial light that follows the mouse across the hero section.
 * Lives behind the content (pointer-events: none) and is disabled on
 * touch devices and for users who prefer reduced motion.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf.current);
      const { clientX, clientY } = e;
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${clientY - rect.top}px`);
        el.style.setProperty("--spot-opacity", "1");
      });
    };
    const onLeave = () => {
      el.style.setProperty("--spot-opacity", "0");
    };
    const onEnter = () => {
      el.style.setProperty("--spot-opacity", "1");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={ref} className="hero-spotlight" aria-hidden="true" />;
}
