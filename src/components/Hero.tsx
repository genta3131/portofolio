import { portfolioData } from "../data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileDown,
  FolderGit2,
  ArrowDown,
} from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="hero-orb w-[500px] h-[500px] bg-emerald-500/8 dark:bg-emerald-500/6 top-[-80px] right-[-120px]" />
      <div className="hero-orb w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-500/4 bottom-[60px] left-[-80px]" />

      {/* Grid BG */}
      <div className="absolute inset-0 grid-bg opacity-100 dark:opacity-60" />

      <div className="relative z-10 space-y-8">
        {/* Status Badge */}
        {personal.status.available && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold animate-[fadeIn_0.5s_ease_0.2s_both] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {personal.status.text}
          </div>
        )}

        {/* Name & Title */}
        <div className="space-y-3 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.15s_both]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
            <span className="text-foreground">{personal.name.split(" ")[0]} </span>
            <span className="gradient-text">{personal.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-block px-3 py-1 text-sm sm:text-base font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/8 rounded-lg border border-emerald-500/20">
              {personal.title.split("|")[0].trim()}
            </span>
            {personal.title.includes("|") && (
              <>
                <span className="text-border font-mono">|</span>
                <span className="text-sm sm:text-base text-muted-foreground font-mono">
                  {personal.title.split("|")[1].trim()}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Headline Quote */}
        <div className="animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
            <span className="text-emerald-500/80 font-mono text-2xl leading-none">&ldquo;</span>
            {personal.headline}
            <span className="text-emerald-500/80 font-mono text-2xl leading-none">&rdquo;</span>
          </p>
        </div>

        {/* Location & Quick Social Links */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-muted-foreground animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.45s_both]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 border border-border/50">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            {personal.location}
          </span>
          <span className="hidden sm:block text-border">•</span>
          <div className="flex items-center gap-2">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 border border-border/50 text-foreground hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>genta3131</span>
            </a>
            {personal.socials.linkedin && (
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 border border-border/50 text-foreground hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}
            <a
              href={`mailto:${personal.socials.email}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/60 border border-border/50 text-foreground hover:border-emerald-500/50 hover:text-emerald-500 transition-all duration-200"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.55s_both]">
          <a
            href="#projects"
            className="glow-btn inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-all duration-200"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Lihat Portofolio</span>
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:border-emerald-500/50 hover:bg-accent transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
          {personal.socials.resumeUrl && (
            <a
              href={personal.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-200"
            >
              <FileDown className="w-4 h-4" />
              <span>Unduh CV</span>
            </a>
          )}
        </div>

        {/* Scroll Hint */}
        <div className="pt-8 animate-[fadeIn_1s_ease_1.2s_both]">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-emerald-500 transition-colors text-xs font-mono group"
          >
            <span>scroll down</span>
            <ArrowDown className="w-4 h-4 animate-bounce-slow group-hover:text-emerald-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
