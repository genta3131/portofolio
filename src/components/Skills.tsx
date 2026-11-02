import { portfolioData } from "../data/portfolio";
import { Cpu, Server, Laptop } from "lucide-react";
import { TechIcon } from "./TechIcon";

export function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("back")) {
      return <Server className="w-5 h-5 text-emerald-500" />;
    }
    return <Laptop className="w-5 h-5 text-cyan-500" />;
  };

  const getCategoryAccent = (category: string) => {
    if (category.toLowerCase().includes("back")) {
      return "border-emerald-500/20 from-emerald-500/5";
    }
    return "border-cyan-500/20 from-cyan-500/5";
  };

  return (
    <section id="skills" className="py-20 border-b border-border/40">
      <div className="space-y-10">
        {/* Title */}
        <div className="reveal flex items-center gap-3">
          <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <Cpu className="w-5 h-5 text-emerald-500" />
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
            Keahlian & Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((cat, catIdx) => (
            <div
              key={cat.category}
              className={`reveal delay-${(catIdx + 1) * 150} group rounded-2xl border bg-gradient-to-b to-transparent p-4 sm:p-6 space-y-4 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 ${getCategoryAccent(cat.category)}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-border/40">
                {getCategoryIcon(cat.category)}
                <span className="font-mono text-sm font-bold text-foreground">
                  {cat.category}
                </span>
                <span className="ml-auto text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-full">
                  {cat.items.length} tools
                </span>
              </div>

              {/* Skill Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {cat.items.map((skill, skillIdx) => (
                  <div
                    key={skill.name}
                    className="skill-chip flex items-center gap-2 px-3 py-2.5 rounded-xl bg-muted/40 dark:bg-muted/20 border border-border/60 cursor-default"
                    style={{
                      transitionDelay: `${skillIdx * 40}ms`,
                      animation: `fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${
                        catIdx * 120 + skillIdx * 45
                      }ms both`,
                    }}
                  >
                    <TechIcon
                      name={skill.icon || skill.name}
                      className="w-4 h-4 shrink-0"
                    />
                    <span className="text-xs font-mono font-medium text-foreground truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
