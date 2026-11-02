"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-emerald-500 via-cyan-400 to-violet-500 shadow-sm shadow-emerald-500/40"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
