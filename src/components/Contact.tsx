"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { Mail, MessageSquare, Copy, Check, Send, Sparkles } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.socials.email}?subject=${encodeURIComponent(
      `Pesan dari Portofolio: ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <section id="contact" className="py-12 border-b border-border/60">
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-500" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Mari Terhubung & Berkolaborasi
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl">
            Punya ide proyek menarik, butuh bantuan konsultasi arsitektur sistem fullstack, atau ingin berdiskusi peluang kerja? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Direct Email Card */}
          <div className="md:col-span-2 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Email Langsung
              </span>
              <p className="text-sm font-medium font-mono text-foreground break-all">
                {personal.socials.email}
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted/60 hover:bg-muted text-xs font-mono font-medium text-foreground transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Email Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Alamat Email</span>
                </>
              )}
            </button>

            <div className="pt-2 border-t border-border/60 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Profil Sosial
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-emerald-500 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>→ LinkedIn Profile</span>
                  </a>
                </div>
                <div>
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-emerald-500 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>→ GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur space-y-4 shadow-sm"
          >
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-mono font-medium text-foreground"
              >
                Nama Anda
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="cth. Budi Santoso"
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-mono font-medium text-foreground"
              >
                Email Anda
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="budi@example.com"
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-xs font-mono font-medium text-foreground"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ceritakan tentang proyek atau ide Anda..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-muted-foreground/60"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              {isSent ? (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>Membuka Email Client...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
