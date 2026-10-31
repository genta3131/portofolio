import React from "react";
import {
  Globe,
  Database,
  ShieldCheck,
  KeyRound,
  Layers,
  Cpu,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const normalized = name.toLowerCase();

  // Laravel
  if (normalized.includes("laravel")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#FF2D20] shrink-0`}
      >
        <path d="M21.5 5.5l-9-4-9 4v13l9 4 9-4v-13zm-9-2.2l6.8 3-2.9 1.3-6.8-3 2.9-1.3zm-7.2 4.2l6.2 2.8v8.2l-6.2-2.8v-8.2zm8.2 11v-8.2l6.2-2.8v8.2l-6.2-2.8z" />
      </svg>
    );
  }

  // PHP
  if (normalized.includes("php")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#777BB4] shrink-0`}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5 13H5.5l1.2-6H9c1.2 0 2 .7 2 1.8 0 1.4-1 2.2-2.2 2.2H7.7L7 15zm6.5 0H12l1.2-6h2.3c1.2 0 2 .7 2 1.8 0 1.4-1 2.2-2.2 2.2h-1.1L13.5 15zm5.5 0H17.5l.7-3.5h1.8c.8 0 1.3.4 1.3 1.1 0 .9-.6 1.4-1.3 1.4h-1z" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#00758F] dark:text-[#00a6cb] shrink-0`}
      >
        <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 1.34 7 2s-3.13 2-7 2-7-1.34-7-2 3.13-2 7-2zm-7 4.72c1.64 1.05 4.22 1.78 7 1.78s5.36-.73 7-1.78V12c0 .66-3.13 2-7 2s-7-1.34-7-2V9.72zm0 5c1.64 1.05 4.22 1.78 7 1.78s5.36-.73 7-1.78V17c0 .66-3.13 2-7 2s-7-1.34-7-2v-2.28z" />
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`${className} text-[#61DAFB] shrink-0`}
      >
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#3178C6] shrink-0`}
      >
        <rect width="20" height="20" x="2" y="2" rx="4" />
        <path fill="#fff" d="M6 8h6v2H9.5v7H7.5v-7H6V8zm8.5 4.5c.6-.3 1.2-.5 1.8-.5.7 0 1.2.3 1.2.8 0 .5-.4.8-1.2 1.1l-.8.3c-1.3.5-2 1.2-2 2.3 0 1.5 1.2 2.5 2.8 2.5.8 0 1.6-.2 2.2-.6v-1.8c-.6.4-1.3.6-1.9.6-.7 0-1.2-.3-1.2-.8 0-.5.4-.8 1.1-1.1l.8-.3c1.4-.5 2.1-1.2 2.1-2.4 0-1.4-1.1-2.4-2.7-2.4-.8 0-1.5.2-2.1.5v1.7z" />
      </svg>
    );
  }

  // Tailwind
  if (normalized.includes("tailwind")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#06B6D4] shrink-0`}
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker") || normalized.includes("sail")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#2496ED] shrink-0`}
      >
        <path d="M13.98 9.53h1.83V7.7h-1.83v1.83zm-2.4 0h1.83V7.7h-1.83v1.83zm-2.4 0h1.83V7.7H9.18v1.83zm7.2 0h1.83V7.7h-1.83v1.83zm-7.2-2.39h1.83V5.31H9.18v1.83zm2.4 0h1.83V5.31h-1.83v1.83zm2.4 0h1.83V5.31h-1.83v1.83zm9.05 4.85c-.41-.29-1.34-.37-2.13-.15-.17-.79-.64-1.46-1.32-1.88l-.51-.31-.38.46c-.52.63-.82 1.4-.87 2.21-.49-.07-1.02-.05-1.5.07H2.2c-.41 0-.78.26-.92.65-.92 2.65-.08 6.08 2.38 7.84 2.14 1.54 5.37 2.05 8.35 1.54 3.73-.64 6.78-3.3 7.89-6.93.38-.05.77-.16 1.12-.34.78-.4 1.34-1.07 1.55-1.89l.13-.53-.5-.36z" />
      </svg>
    );
  }

  // Git
  if (normalized.includes("git")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#F05032] shrink-0`}
      >
        <path d="M21.62 10.6l-8.22-8.22a2.4 2.4 0 0 0-3.39 0L8.03 4.36l3.41 3.41a2.85 2.85 0 0 1 3.6 3.6l3.29 3.29a2.84 2.84 0 0 1 3.29 3.3 2.85 2.85 0 0 1-5 0l-3.08-3.08v4.54a2.85 2.85 0 1 1-2.04 0v-4.8l-2.45-2.45v3.29a2.85 2.85 0 1 1-2.04 0v-5.33l-4.7 4.7a2.4 2.4 0 0 0 0 3.39l8.22 8.22a2.4 2.4 0 0 0 3.39 0l8.22-8.22a2.4 2.4 0 0 0 0-3.4z" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes("vite")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#646CFF] shrink-0`}
      >
        <path d="M21.45 3.34L12.59 21.8a.7.7 0 0 1-1.25 0L2.55 3.34a.7.7 0 0 1 .86-.98l8.2 2.8 8.98-2.8a.7.7 0 0 1 .86.98z" />
      </svg>
    );
  }

  // Inertia.js
  if (normalized.includes("inertia")) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-[#9553E9] shrink-0`}
      >
        <path d="M4 8l5-5h6l-5 5h6l-5 5h6l-9 9 3-8H5l5-6H4z" />
      </svg>
    );
  }

  // REST API
  if (normalized.includes("api") || normalized.includes("rest")) {
    return <Globe className={`${className} text-emerald-500 shrink-0`} />;
  }

  // Spatie RBAC / Security
  if (normalized.includes("rbac") || normalized.includes("spatie")) {
    return <ShieldCheck className={`${className} text-rose-500 shrink-0`} />;
  }

  // JWT / SSO / Auth
  if (normalized.includes("jwt") || normalized.includes("sso")) {
    return <KeyRound className={`${className} text-amber-500 shrink-0`} />;
  }

  // Eloquent ORM
  if (normalized.includes("eloquent") || normalized.includes("orm")) {
    return <Layers className={`${className} text-indigo-500 shrink-0`} />;
  }

  // Fallback
  return <Cpu className={`${className} text-muted-foreground shrink-0`} />;
}

