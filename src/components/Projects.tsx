import { portfolioData } from "../data/portfolio";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Star,
  ShieldCheck,
} from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 border-b border-border/40">
      <div className="space-y-10">
        {/* Title */}
        <div className="reveal flex items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
            Proyek &amp; Case Study
          </h2>
          <span className="text-xs text-muted-foreground">
            {projects.length} proyek
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`reveal delay-${(idx + 1) * 150} group relative rounded-2xl border overflow-hidden transition-colors duration-200 ${
                project.caseStudy
                  ? "border-emerald-500/40 bg-card"
                  : "border-border/60 bg-card hover:border-emerald-500/30"
              }`}
            >
            <div className="relative p-6 sm:p-8 space-y-5">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      {project.caseStudy && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                          <Star className="w-3 h-3 fill-current" />
                          Case study utama
                        </span>
                      )}
                      {project.featured && !project.caseStudy && (
                        <span className="text-[11px] font-medium text-muted-foreground">
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/60 hover:bg-muted text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold hover:bg-emerald-500/15 transition-colors"
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
                    <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      Rincian Teknis
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.highlights.map((item, hIdx) => {
                        const colonIdx = item.indexOf(":");
                        const hasPrefix = colonIdx > 0 && colonIdx < 20;
                        return (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 p-3 rounded-lg bg-muted/40 dark:bg-muted/20 border border-border/40 text-xs leading-relaxed"
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
                      className="text-[11px] px-2.5 py-1 rounded-md bg-muted/60 dark:bg-muted/30 text-muted-foreground border border-border/50 hover:text-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
