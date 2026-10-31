import { portfolioData } from "../data/portfolio";
import { Terminal } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-12 border-b border-border/60">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-emerald-500" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Tentang Saya
          </h2>
        </div>

        <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
          {personal.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Quick specs / metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur">
            <span className="block text-2xl font-extrabold text-foreground font-mono">
              3+
            </span>
            <span className="text-xs text-muted-foreground">Tahun Pengalaman</span>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur">
            <span className="block text-2xl font-extrabold text-foreground font-mono">
              15+
            </span>
            <span className="text-xs text-muted-foreground">Proyek Selesai</span>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur">
            <span className="block text-2xl font-extrabold text-foreground font-mono">
              99%
            </span>
            <span className="text-xs text-muted-foreground">Uptime & Reliability</span>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card/60 backdrop-blur">
            <span className="block text-2xl font-extrabold text-foreground font-mono">
              Clean
            </span>
            <span className="text-xs text-muted-foreground">Code & Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}
