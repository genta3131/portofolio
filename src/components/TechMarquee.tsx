import { portfolioData } from "../data/portfolio";
import { TechIcon } from "./TechIcon";

/**
 * Infinite auto-scrolling strip of the tech stack.
 * Pure CSS animation (paused on hover) — no client JS needed.
 */
export function TechMarquee() {
  const items = portfolioData.skills.flatMap((cat) => cat.items);

  return (
    <div
      className="marquee-mask relative overflow-hidden py-2"
      aria-label="Tech stack"
    >
      <div className="marquee">
        {[0, 1].map((half) => (
          <div
            key={half}
            className="flex items-center gap-10 shrink-0"
            aria-hidden={half === 1}
          >
            {items.map((skill) => (
              <span
                key={`${half}-${skill.name}`}
                className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground whitespace-nowrap"
              >
                <TechIcon
                  name={skill.icon || skill.name}
                  className="w-3.5 h-3.5"
                />
                {skill.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
