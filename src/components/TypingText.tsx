"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  phrases: string[];
  className?: string;
}

/**
 * Terminal-style typewriter effect. Cycles through phrases,
 * deletes, then types the next one. Falls back to a static
 * phrase when the user prefers reduced motion.
 */
export function TypingText({ phrases, className = "" }: TypingTextProps) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx % phrases.length] ?? "";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(current);
      return;
    }

    let delay = deleting ? 32 : 72;
    if (!deleting && text === current) delay = 1700;
    else if (deleting && text === "") delay = 420;

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      } else {
        setText(
          deleting
            ? current.slice(0, Math.max(text.length - 1, 0))
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, phraseIdx, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="type-cursor" aria-hidden="true">
        |
      </span>
      {/* Screen-reader / SEO friendly full text */}
      <span className="sr-only">{phrases.join(" • ")}</span>
    </span>
  );
}
