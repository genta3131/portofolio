import { portfolioData } from "../data/portfolio";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-border/40">
      <div className="space-y-14">
        {/* Work Experience */}
        <div className="space-y-8">
          <div className="reveal space-y-0.5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
              Pengalaman Kerja
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-3 bottom-3 w-[2px] timeline-line rounded-full" />

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`reveal delay-${(idx + 1) * 150} group relative flex gap-3.5 sm:gap-6`}
                >
                  {/* Timeline Dot */}
                  <div className="shrink-0 flex flex-col items-center z-10">
                    <div className="relative w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-emerald-500 transition-colors duration-200">
                      <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-2">
                    <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-3 hover:border-emerald-500/30 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          {exp.location && (
                            <div className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </div>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-1.5">
                        {exp.description.map((desc, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 shrink-0 mt-2" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/30">
                          {exp.technologies.map((t) => (
                            <span
                              key={t}
                              className="text-[11px] px-2.5 py-1 rounded-md bg-muted/60 dark:bg-muted/30 border border-border/50 text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <div className="reveal space-y-0.5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
              Pendidikan
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[22px] top-3 bottom-3 w-[2px] bg-border rounded-full" />
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className={`reveal delay-${(idx + 1) * 150} group relative flex gap-3.5 sm:gap-6`}
                >
                  <div className="shrink-0 flex flex-col items-center z-10">
                    <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center group-hover:border-emerald-500 transition-colors duration-200">
                      <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="glass-card rounded-2xl p-4 sm:p-6 space-y-2 hover:border-emerald-500/30 transition-colors duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md shrink-0 h-fit">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                      {edu.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
