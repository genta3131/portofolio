"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

/**
 * Stat card with an animated count-up for numeric values ("30+", "22").
 * Non-numeric values ("Enterprise", "UNJ") are rendered as-is with a
 * subtle gradient accent. Counting starts when the card scrolls into view.
 */
export function StatCard({ value, label, className = "" }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const isNumeric = /^\d+/.test(value);
  const suffix = value.replace(/^\d+/, "");

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    const el = ref.current;
    if (!match || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = parseInt(match[1], 10);
    const rest = match[2] ?? "";
    const duration = 1200;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setDisplay(`${Math.round(eased * target)}${rest}`);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className={`spotlight-card group glass-card p-4 sm:p-5 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 cursor-default ${className}`}
    >
      <span
        className={`block text-2xl sm:text-3xl font-black font-mono group-hover:text-emerald-500 transition-colors duration-200 ${
          isNumeric ? "text-foreground" : "gradient-text"
        }`}
      >
        {isNumeric ? display : value}
        {suffix && isNumeric && (
          <span className="text-emerald-500">{suffix}</span>
        )}
      </span>
      <span className="text-xs text-muted-foreground mt-1 block leading-snug">
        {label}
      </span>
    </div>
  );
}
