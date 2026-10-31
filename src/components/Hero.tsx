import { portfolioData } from "../data/portfolio";
import { Github, Linkedin, Mail, MapPin, ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="pt-12 sm:pt-20 pb-12 border-b border-border/60">
      <div className="space-y-6">
        {/* Status Badge */}
        {personal.status.available && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {personal.status.text}
          </div>
        )}

        {/* Title & Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400 font-mono">
            {personal.title}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {personal.headline}
          </p>
        </div>

        {/* Location & Socials */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-2">
          <div className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            <span>{personal.location}</span>
          </div>
          <span className="text-border">•</span>
          <div className="flex items-center gap-3">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-emerald-500 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-foreground hover:text-emerald-500 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personal.socials.email}`}
              className="inline-flex items-center gap-1 text-foreground hover:text-emerald-500 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            <span>Lihat Proyek</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-card text-foreground font-medium text-sm hover:bg-accent transition-colors"
          >
            <span>Hubungi Saya</span>
            <ArrowDown className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
