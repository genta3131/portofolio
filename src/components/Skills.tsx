import { portfolioData } from "../data/portfolio";
import { Server, Laptop } from "lucide-react";
import { TechIcon } from "./TechIcon";

export function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    const Icon = category.toLowerCase().includes("back") ? Server : Laptop;
    return <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
  };

  return (
    <section id="skills" className="py-20 border-b border-border/40">
      <div className="space-y-10">
        {/* Title */}
        <div className="reveal space-y-0.5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
            Keahlian &amp; Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="reveal glass-card rounded-2xl p-4 sm:p-6 space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-border/40">
                {getCategoryIcon(cat.category)}
                <span className="font-semibold text-foreground">
                  {cat.category}
                </span>
                <span className="ml-auto text-xs text-muted-foreground">
                  {cat.items.length} tools
                </span>
              </div>

              {/* Skill Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-chip flex items-center gap-2 px-3 py-2.5 rounded-lg bg-muted/40 dark:bg-muted/20 border border-border/60 cursor-default"
                  >
                    <TechIcon
                      name={skill.icon || skill.name}
                      className="w-4 h-4 shrink-0"
                    />
                    <span className="text-xs font-medium text-foreground truncate">
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
