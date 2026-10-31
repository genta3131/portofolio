import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Genta Abdi Fathir",
    title: "Backend Developer | Fresh Graduate",
    headline: "Membangun sistem backend yang skalabel, aman, dan efisien.",
    location: "Jakarta, Indonesia",
    status: {
      available: true,
      text: "Fresh Graduate • Available for Work",
    },
    bio: [
      "Halo! Saya Genta, seorang Fresh Graduate Pendidikan Informatika dari Universitas Negeri Jakarta. Saya memiliki fokus kuat dalam pengembangan sisi server (Backend), terutama menggunakan ekosistem Laravel dan PHP.",
      "Bagi saya, coding bukan hanya tentang menulis fungsi, tetapi memecahkan masalah sistematis. Pengalaman saya merancang sistem manajemen risiko tingkat enterprise (SimRisk) serta mengajar informatika telah membentuk saya menjadi developer yang tidak hanya kuat secara teknis, tetapi juga komunikatif dan berorientasi pada solusi.",
    ],
    socials: {
      github: "https://github.com/genta3131",
      email: "gentaabdi31@gmail.com",
      resumeUrl: "#", // Tautan ke file CV / Resume PDF
    },
  },

  stats: [
    { value: "30+", label: "REST API Endpoints" },
    { value: "22", label: "Database Migrations" },
    { value: "Enterprise", label: "SimRisk Case Study" },
    { value: "UNJ", label: "Pendidikan Informatika" },
  ],

  skills: [
    {
      category: "Backend & Architecture",
      items: [
        { name: "Laravel 12", icon: "laravel" },
        { name: "PHP 8.2", icon: "php" },
        { name: "MySQL", icon: "mysql" },
        { name: "REST API", icon: "api" },
        { name: "Eloquent ORM", icon: "database" },
        { name: "Spatie RBAC", icon: "security" },
        { name: "JWT / SSO", icon: "key" },
      ],
    },
    {
      category: "Frontend & Tools",
      items: [
        { name: "Inertia.js", icon: "inertia" },
        { name: "React 19", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Vite", icon: "vite" },
        { name: "Git", icon: "git" },
        { name: "Docker / Laravel Sail", icon: "docker" },
      ],
    },
  ],

  projects: [
    {
      title: "SimRisk — Sistem Manajemen Risiko Skala Enterprise",
      description:
        "Sebuah platform manajemen risiko institusional untuk Universitas Negeri Jakarta yang dibangun dari nol untuk mengidentifikasi, menganalisis, dan memitigasi risiko organisasi secara terpusat.",
      tags: [
        "Laravel 12",
        "PHP 8.2",
        "MySQL",
        "REST API",
        "Eloquent ORM",
        "Spatie RBAC",
        "JWT / SSO",
        "SIPEG API",
        "State Machine",
      ],
      highlights: [
        "Arsitektur & Skala: Merancang 30+ endpoint REST API dengan arsitektur Laravel MVC, 22 database migration, dan 12 Eloquent Model.",
        "Fitur Utama: Multi-level approval workflow (state machine), Role-Based Access Control (Spatie) dengan permission per unit organisasi.",
        "Integrasi: SSO Microsoft via Firebase PHP-JWT untuk staf universitas dan sinkronisasi auto-sync data pegawai (SIPEG API).",
        "Output: Sistem ekspor laporan PDF & Excel otomatis terintegrasi.",
      ],
      featured: true,
      caseStudy: true,
      githubUrl: "https://github.com/genta3131",
    },
    {
      title: "Platform Relawan & Event",
      description:
        "Desain sistem dan prototipe interaktif untuk platform pencarian relawan dan pendaftaran event sosial kepemudaan.",
      tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "User Research"],
      highlights: [
        "Merancang high-fidelity prototype untuk platform pencarian relawan menggunakan Figma.",
        "Menyusun alur pengguna (user flow) yang intuitif untuk kemudahan registrasi relawan dan pelacakan event.",
      ],
      featured: false,
      caseStudy: false,
      githubUrl: "https://github.com/genta3131",
    },
  ],

  experiences: [
    {
      role: "Backend Developer (Internship)",
      company: "PUSTIKOM Universitas Negeri Jakarta",
      period: "2024 – 2025",
      location: "Jakarta, Indonesia",
      description: [
        "Merancang dan membangun platform manajemen risiko skala enterprise (SimRisk) untuk institusi Universitas Negeri Jakarta dari nol.",
        "Mengembangkan arsitektur Laravel MVC dengan 30+ endpoint REST API, 22 database migration, dan 12 Eloquent Model yang teroptimasi.",
        "Mengimplementasikan multi-level approval workflow (state machine) dan Role-Based Access Control (Spatie RBAC) per unit organisasi.",
        "Mengintegrasikan SSO Microsoft via Firebase PHP-JWT untuk staf universitas dan sinkronisasi auto-sync data pegawai (SIPEG API).",
        "Membangun modul ekspor otomatis laporan berkala dalam format PDF dan spreadsheet Excel.",
      ],
      technologies: [
        "Laravel 12",
        "PHP 8.2",
        "MySQL",
        "REST API",
        "Spatie RBAC",
        "Firebase PHP-JWT",
        "SIPEG API",
        "Eloquent ORM",
      ],
    },
    {
      role: "Guru Informatika (Part-Time)",
      company: "SMA Negeri 53 Jakarta",
      period: "2024 – Sekarang",
      location: "Jakarta, Indonesia",
      description: [
        "Menyederhanakan konsep komputasi yang kompleks menjadi materi ajar yang mudah dipahami siswa SMA.",
        "Mengajarkan logika dasar pemrograman, algoritma sistematis, dan keterampilan pemecahan masalah (computational thinking).",
        "Mengasah kemampuan komunikasi teknis, penyampaian gagasan secara terstruktur, dan manajemen waktu.",
      ],
      technologies: [
        "Algoritma & Pemrograman",
        "Logika Komputasi",
        "Komunikasi Teknis",
        "Mentoring",
      ],
    },
    {
      role: "UI/UX Designer",
      company: "Platform Relawan & Event",
      period: "2023",
      location: "Jakarta, Indonesia",
      description: [
        "Merancang high-fidelity prototype untuk platform pencarian relawan menggunakan Figma.",
        "Melakukan evaluasi usability dan perancangan antarmuka yang bersih serta mudah diakses pengguna.",
      ],
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    },
  ],

  education: [
    {
      degree: "S1 Pendidikan Informatika",
      institution: "Universitas Negeri Jakarta (UNJ)",
      period: "2020 – 2025 (Fresh Graduate)",
      description:
        "Fokus studi pada Rekayasa Perangkat Lunak, Arsitektur Sistem Sisi Server (Backend), Basis Data Relasional, serta Pedagogi & Komunikasi Teknis.",
    },
  ],
};
