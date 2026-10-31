# Developer Portfolio Guidelines & Architecture Rules

## 1. Single Source of Truth Architecture
- All portfolio content (personal bio, contact links, skill categories, projects, work experience, education) must strictly reside in `src/data/portfolio.ts`.
- Component files in `src/components/` must remain purely presentational and typed via `src/types/portfolio.ts`. Never hardcode user bio or project data directly inside JSX/TSX components.

## 2. Design System & Minimalist Aesthetic
- Maintain the minimalist developer theme using Tailwind CSS classes.
- Ensure all components support both dark and light modes seamlessly using `next-themes` and CSS variables (`bg-background`, `text-foreground`, `border-border`).
- Preserve subtle interactions: backdrop blur on sticky navigation, interactive micro-animations, and visual feedback on actions (e.g., copying email to clipboard).

## 3. Performance & Build Integrity
- Ensure the application continues to build as a lightweight static page with zero TypeScript compilation errors (`npm run build`).
- Keep dependencies minimal; prefer native web APIs (like `navigator.clipboard` and `mailto:`) over heavy third-party packages whenever possible.

