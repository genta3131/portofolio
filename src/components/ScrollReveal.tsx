"use client";

import { useEffect, useRef, useCallback } from "react";

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onEntry = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onEntry, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    });

    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-scale"
    );
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [onEntry]);

  return <div ref={ref}>{children}</div>;
}

