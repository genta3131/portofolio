import { portfolioData } from "../data/portfolio";
import Image from "next/image";
import { TechMarquee } from "./TechMarquee";
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
      <div className="absolute inset-0 grid-bg opacity-100 dark:opacity-60" />

      {/* Grid Layout: 1 Kolom di HP, 2 Kolom di Laptop (lg) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

        {/* Kolom Kiri: Teks & Tombol */}
        <div className="space-y-8">
          {/* Status Badge */}
          {personal.status.available && (
            <div className="inline-flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold animate-[fadeIn_0.5s_ease_0.2s_both]">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              {personal.status.text}
            </div>
          )}

          {/* Foto Profil khusus Mobile (tampil di atas nama/headline pada layar HP & Tablet) */}
          <div className="flex lg:hidden justify-start animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
            <div className="relative w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-border">
                <Image
                  src="/profile.png"
                  alt={personal.name}
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-3 animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.15s_both]">
            <h1 className="text-3xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none break-words">
              <span className="text-foreground">{personal.name.split(" ")[0]} </span>
              <span className="text-emerald-600 dark:text-emerald-400">{personal.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {personal.title.replace(" | ", " · ")}
            </p>
          </div>

          {/* Headline Quote */}
          <div className="animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              {personal.headline}
            </p>
          </div>

          {/* Location & Quick Social Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.45s_both]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {personal.location}
            </span>
            <span className="hidden sm:block text-border">•</span>
            <div className="flex items-center gap-4">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-200"
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
                  className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              <a
                href={`mailto:${personal.socials.email}`}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-200"
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
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors duration-200"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Lihat Portofolio</span>
            </a>
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border text-foreground font-semibold text-sm hover:bg-accent transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>
            {personal.socials.resumeUrl && (
              <a
                href={personal.socials.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-1.5 py-3 text-emerald-600 dark:text-emerald-400 font-semibold text-sm hover:text-foreground transition-colors duration-200"
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
              className="inline-flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-emerald-500 transition-colors text-xs group"
            >
              <span>scroll down</span>
              <ArrowDown className="w-4 h-4 animate-bounce-slow group-hover:text-emerald-500" />
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Foto Profil (Khusus Layar Desktop/Laptop) */}
        <div className="hidden lg:flex justify-end animate-[fadeUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.6s_both]">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            {/* Pastikan file profilmu bernama 'profile.png' dan ada di folder public */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-border">
              <Image
                src="/profile.png"
                alt={personal.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Tech Marquee — strip stack berjalan */}
      <div className="relative z-10 mt-16 sm:mt-20 max-w-4xl mx-auto animate-[fadeIn_1s_ease_1.4s_both]">
        <TechMarquee />
      </div>
    </section>
  );
}