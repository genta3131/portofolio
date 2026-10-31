"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "../data/portfolio";
import { FileText, Code2 } from "lucide-react";

export function Navbar() {
  const { personal } = portfolioData;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="p-1.5 rounded-lg bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
            <Code2 className="w-4 h-4" />
          </span>
          <span>{personal.name.split(" ")[0].toLowerCase()}.dev</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          {personal.socials.resumeUrl && (
            <a
              href={personal.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-full border border-border bg-card hover:bg-accent text-foreground transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </a>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
