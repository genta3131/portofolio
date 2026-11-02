"use client";

import { portfolioData } from "../data/portfolio";
import { ArrowUp, Github, Mail, Code2 } from "lucide-react";

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 mt-4">
      {/* Divider */}
      <div className="h-px mb-10 bg-border" />

      <div className="space-y-8">
        {/* Top Row: Brand + Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 dark:text-emerald-400">
              <Code2 className="w-4 h-4" />
            </span>
            <span className="font-mono text-sm font-bold">
              <span className="text-emerald-500">
                {personal.name.split(" ")[0].toLowerCase()}
              </span>
              <span className="text-muted-foreground">.dev</span>
            </span>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-colors duration-200"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.socials.email}`}
              className="p-2 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-emerald-500/40 transition-colors duration-200"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright + Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="text-center sm:text-left space-y-0.5">
            <p>© {new Date().getFullYear()} {personal.name}.</p>
            <p className="text-[11px] opacity-60">
              Built with Next.js · Tailwind CSS · TypeScript
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card hover:bg-accent text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            title="Kembali ke atas"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
