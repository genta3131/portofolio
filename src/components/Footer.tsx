"use client";

import { portfolioData } from "../data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/40">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <div>
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="text-[11px] text-muted-foreground/80 pt-1">
            Built with Next.js 14, Tailwind CSS & TypeScript • Hosted on Vercel
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-accent text-foreground transition-colors"
          title="Kembali ke atas"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
