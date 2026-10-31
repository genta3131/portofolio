import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Alex Pratama",
    title: "Fullstack Developer",
    headline: "Building scalable web applications, robust APIs, and modern user experiences.",
    location: "Jakarta, Indonesia",
    status: {
      available: true,
      text: "Tersedia untuk Freelance & Full-time",
    },
    bio: [
      "Halo! Saya seorang Fullstack Developer dengan fokus pada ekosistem JavaScript/TypeScript, React, Next.js, Node.js, dan database modern. Memiliki ketertarikan mendalam dalam merancang arsitektur sistem yang bersih, scalable, dan performan.",
      "Saya suka memecahkan masalah kompleks dari sisi backend (API design, database optimization) hingga menyajikan antarmuka frontend yang intuitif, responsif, dan mudah diakses.",
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alexpratama.dev@example.com",
      resumeUrl: "#", // Letakkan link Google Drive atau link file CV
    },
  },

  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React / Next.js" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Redux / Zustand" },
        { name: "HTML5 / CSS3 / ES6+" },
        { name: "Responsive & UI/UX Design" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js / Express" },
        { name: "NestJS" },
        { name: "RESTful APIs & GraphQL" },
        { name: "JWT & OAuth 2.0" },
        { name: "Microservices" },
        { name: "WebSockets" },
      ],
    },
    {
      category: "Database & Storage",
      items: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Redis (Caching)" },
        { name: "Prisma ORM" },
        { name: "Supabase" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git & GitHub Actions" },
        { name: "Docker" },
        { name: "Vercel / Cloudflare" },
        { name: "Linux / Nginx" },
        { name: "Postman" },
        { name: "Jest / Vitest" },
      ],
    },
  ],

  projects: [
    {
      title: "OmniStore - Modern E-Commerce Platform",
      description:
        "Platform e-commerce fullstack dengan arsitektur headless. Mengintegrasikan payment gateway otomatis, sistem manajemen inventaris real-time, dan dashboard analitik admin.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Midtrans"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Sistem checkout real-time dengan integrasi webhook payment gateway",
        "Dashboard admin interaktif dengan grafik penjualan dan manajemen inventaris",
        "Optimasi Lighthouse score 98+ pada mobile dan desktop",
      ],
      featured: true,
    },
    {
      title: "TaskFlow - Real-time Collaboration Workspace",
      description:
        "Aplikasi kolaborasi manajemen proyek bergaya Kanban board dengan fitur live-sync multi-user, komentar real-time, dan tracking tugas tim.",
      tags: ["React", "TypeScript", "Node.js", "Socket.io", "Redis", "MongoDB", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Sinkronisasi drag-and-drop kartu tugas secara real-time via WebSocket",
        "Role-based access control (Admin, Member, Viewer)",
        "Background email notification job menggunakan Redis queue",
      ],
      featured: true,
    },
    {
      title: "DevPulse - Developer API & Metric Monitoring",
      description:
        "Micro-SaaS monitoring uptime server, status endpoint API, dan pelaporan metrik latensi dengan integrasi alert via Telegram Bot dan Discord Webhook.",
      tags: ["Next.js", "Go / Node.js", "TimescaleDB", "Tailwind CSS", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Sistem cron worker berkala untuk checking endpoint otomatis",
        "Visualisasi grafik time-series latensi dan status response code",
        "Notifikasi instan ketika terjadi downtime",
      ],
      featured: true,
    },
    {
      title: "AI Prompt Studio - Generator & Marketplace Prompt",
      description:
        "Platform komunitas untuk berbagi, menguji, dan mengotomasi prompt LLM dengan fitur bookmark, playground live testing, dan sistem voting.",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      highlights: [
        "Streaming response AI menggunakan Server-Sent Events (SSE)",
        "Autentikasi aman dengan Supabase Auth & Row Level Security",
      ],
      featured: false,
    },
  ],

  experiences: [
    {
      role: "Senior Fullstack Developer",
      company: "Tech Solusindo Digital",
      period: "2023 - Sekarang",
      location: "Jakarta (Hybrid)",
      description: [
        "Memimpin pengembangan arsitektur web platform enterprise dengan Next.js dan microservices Node.js.",
        "Mengurangi waktu respons API hingga 35% melalui optimasi query database PostgreSQL dan implementasi Redis caching.",
        "Mementori 4 junior developer dan menerapkan standar code review serta CI/CD pipeline.",
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Redis", "AWS"],
    },
    {
      role: "Fullstack Web Developer",
      company: "Inovasi Media Kreasi",
      period: "2021 - 2023",
      location: "Bandung (Remote)",
      description: [
        "Mengembangkan 10+ modul aplikasi web klien mulai dari landing page hingga backend dashboard analitik.",
        "Mengintegrasikan third-party API seperti payment gateway, Google Maps API, dan CRM.",
        "Meningkatkan skor SEO dan performa web aplikasi secara menyeluruh.",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    },
    {
      role: "Junior Web Developer",
      company: "Kreasi Digital Studio",
      period: "2020 - 2021",
      location: "Jakarta",
      description: [
        "Membangun slicing UI/UX responsif dari desain Figma ke kode frontend yang rapi.",
        "Membantu maintenance database dan perbaikan bug sistem produksi.",
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP", "Bootstrap", "MySQL"],
    },
  ],

  education: [
    {
      degree: "S1 Teknik Informatika / Ilmu Komputer",
      institution: "Universitas Bina Nusantara",
      period: "2016 - 2020",
      description: "Fokus pada Rekayasa Perangkat Lunak, Arsitektur Sistem, dan Basis Data.",
    },
  ],
};
