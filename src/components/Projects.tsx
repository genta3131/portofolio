import { portfolioData } from "../data/portfolio";
import { FolderGit2, ExternalLink, Github, CheckCircle2 } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-12 border-b border-border/60">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Proyek Pilihan
            </h2>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            {projects.length} Proyek
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur hover:border-emerald-500/40 transition-all space-y-4 shadow-sm group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-3 text-xs font-mono">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      title="Source Code"
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
                      className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-1">
                  {project.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/80 text-foreground border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
