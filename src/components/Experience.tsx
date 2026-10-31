import { portfolioData } from "../data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience" className="py-12 border-b border-border/60">
      <div className="space-y-10">
        {/* Work Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Pengalaman Kerja
            </h2>
          </div>

          <div className="relative pl-6 border-l border-border/80 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-500 bg-background group-hover:bg-emerald-500 transition-colors" />

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-foreground">
                      {exp.role}{" "}
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        @ {exp.company}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  )}

                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground pt-1">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1 pt-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Pendidikan
            </h2>
          </div>

          <div className="relative pl-6 border-l border-border/80 space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-border bg-background group-hover:border-emerald-500 transition-colors" />
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground pt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
