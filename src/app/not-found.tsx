"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-8xl font-black text-emerald-500 font-mono leading-none">404</p>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Halaman Tidak Ditemukan</h1>
          <p className="text-sm text-muted-foreground">
            Halaman yang kamu cari tidak ada atau sudah dipindahkan.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            <Home className="w-4 h-4" />
            Ke Halaman Utama
          </Link>
          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card text-foreground font-semibold text-sm hover:bg-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

