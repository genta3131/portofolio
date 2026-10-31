import { portfolioData } from "../data/portfolio";
import { Terminal } from "lucide-react";

export function About() {
  const { personal, stats } = portfolioData;

  return (
    <section id="about" className="py-20 border-b border-border/40">
      <div className="space-y-10">
        {/* Section Title */}
        <div className="reveal flex items-center gap-3">
          <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <Terminal className="w-5 h-5 text-emerald-500" />
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
            Tentang Saya
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Bio Text */}
          <div className="lg:col-span-3 space-y-4 reveal delay-100">
            {personal.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed text-sm sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats Grid */}
          {stats && stats.length > 0 && (
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`reveal reveal-scale delay-${(idx + 2) * 100} group glass-card p-4 sm:p-5 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 cursor-default`}
                >
                  <span className="block text-2xl sm:text-3xl font-black text-foreground font-mono group-hover:text-emerald-500 transition-colors duration-200">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
