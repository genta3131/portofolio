import { portfolioData } from "../data/portfolio";
import { Cpu, Layout, Server, Database, Wrench } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("front")) return <Layout className="w-4 h-4 text-sky-500" />;
    if (category.toLowerCase().includes("back")) return <Server className="w-4 h-4 text-emerald-500" />;
    if (category.toLowerCase().includes("data")) return <Database className="w-4 h-4 text-amber-500" />;
    return <Wrench className="w-4 h-4 text-purple-500" />;
  };

  return (
    <section id="skills" className="py-12 border-b border-border/60">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-emerald-500" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Keahlian & Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-xl border border-border bg-card/60 backdrop-blur hover:border-border/80 transition-all space-y-3"
            >
              <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-foreground border border-border/50 hover:border-emerald-500/40 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
