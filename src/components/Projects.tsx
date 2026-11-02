import { portfolioData } from "../data/portfolio";
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  Star,
  ShieldCheck,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-b border-border/40">
      <div className="space-y-10">
        {/* Title */}
        <div className="reveal flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <FolderGit2 className="w-5 h-5 text-emerald-500" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
              Proyek & Case Study
            </h2>
          </div>
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-full border border-border/50">
            {projects.length} proyek
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <SpotlightCard
              tilt
              key={idx}
              className={`reveal delay-${(idx + 1) * 150} group relative rounded-2xl border overflow-hidden transition-all duration-500 ${
                project.caseStudy
                  ? "border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-card to-card dark:from-emerald-950/30 shadow-xl shadow-emerald-500/5"
                  : "border-border/60 bg-card hover:border-emerald-500/30 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
              }`}
            >
              {/* Case Study shimmer border effect */}
              {project.caseStudy && (
                <div className="absolute inset-0 shimmer-border rounded-2xl pointer-events-none" />
              )}

              {/* Glow orb (case study only) */}
              {project.caseStudy && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
              )}

              <div className="relative p-6 sm:p-8 space-y-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.caseStudy && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-mono px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/25 text-emerald-500 font-bold border border-emerald-500/30">
                          <Star className="w-3 h-3 fill-current" />
                          Case Study Utama
                        </span>
                      )}
                      {project.featured && !project.caseStudy && (
                        <span className="text-[11px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3
                      className={`font-bold leading-snug transition-colors duration-200 group-hover:text-emerald-500 ${
                        project.caseStudy
                          ? "text-xl sm:text-2xl text-foreground"
                          : "text-lg sm:text-xl text-foreground"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/60 hover:bg-muted text-xs font-mono font-medium text-muted-foreground hover:text-foreground transition-all"
                        title="Lihat di GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold hover:bg-emerald-500/15 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-3 pt-2 border-t border-border/40">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-foreground/80 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Rincian Teknis
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.highlights.map((item, hIdx) => {
                        const colonIdx = item.indexOf(":");
                        const hasPrefix = colonIdx > 0 && colonIdx < 20;
                        return (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 p-3 rounded-xl bg-muted/40 dark:bg-muted/20 border border-border/40 text-xs leading-relaxed"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {hasPrefix ? (
                                <>
                                  <strong className="text-foreground font-semibold block">
                                    {item.slice(0, colonIdx)}
                                  </strong>
                                  {item.slice(colonIdx + 1).trim()}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-muted/60 dark:bg-muted/30 text-muted-foreground border border-border/50 hover:border-emerald-500/30 hover:text-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
