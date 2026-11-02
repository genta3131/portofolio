"use client";

import { useCallback, useRef } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable subtle 3D tilt following the cursor (desktop / fine pointer only). */
  tilt?: boolean;
}

export function SpotlightCard({
  children,
  className = "",
  tilt = false,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      cancelAnimationFrame(raf.current);
      const { clientX, clientY } = e;
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        el.style.setProperty("--spot-x", `${x}px`);
        el.style.setProperty("--spot-y", `${y}px`);
        if (tilt) {
          const rx = (y / rect.height - 0.5) * -4;
          const ry = (x / rect.width - 0.5) * 4;
          el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(
            2
          )}deg) rotateY(${ry.toFixed(2)}deg)`;
        }
      });
    },
    [tilt]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}
