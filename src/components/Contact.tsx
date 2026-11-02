"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  Send,
  Sparkles,
  Github,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

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
    <section id="contact" className="py-20 border-b border-border/40">
      <div className="space-y-10">
        {/* Title */}
        <div className="reveal space-y-3">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <MessageSquare className="w-5 h-5 text-emerald-500" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
              Kontak & Kolaborasi
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed pl-0 sm:pl-14">
            Tertarik untuk berkolaborasi atau mendiskusikan peluang kerja? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info Card */}
          <div className="reveal delay-100 lg:col-span-2 flex flex-col gap-4">
            {/* Email Card */}
            <SpotlightCard className="glass-card rounded-2xl p-6 space-y-4 hover:border-emerald-500/20 transition-all duration-300">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                  Email Langsung
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <p className="text-sm font-mono font-semibold text-foreground break-all">
                    {personal.socials.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold border transition-all duration-200 ${
                  copied
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
                    : "border-border bg-muted/60 hover:bg-muted text-foreground hover:border-emerald-500/30"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Email Berhasil Disalin!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Salin Alamat Email
                  </>
                )}
              </button>
            </SpotlightCard>

            {/* Socials Card */}
            <SpotlightCard className="glass-card rounded-2xl p-6 space-y-3 hover:border-emerald-500/20 transition-all duration-300">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Profil & Lokasi
              </p>
              <div className="space-y-2.5">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-muted/30 hover:border-emerald-500/40 hover:bg-emerald-500/5 text-sm font-mono text-muted-foreground hover:text-foreground transition-all duration-200 group"
                >
                  <Github className="w-4 h-4 text-foreground" />
                  <span className="flex-1 font-medium">@genta3131</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-muted/30 hover:border-cyan-500/40 hover:bg-cyan-500/5 text-sm font-mono text-muted-foreground hover:text-foreground transition-all duration-200 group"
                  >
                    <span className="w-4 h-4 text-center text-blue-500 font-bold text-xs flex items-center justify-center shrink-0">in</span>
                    <span className="flex-1 font-medium">LinkedIn Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                )}
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border/40 bg-muted/20 text-sm font-mono text-muted-foreground">
                  <MapPin className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>{personal.location}</span>
                </div>
              </div>
             </SpotlightCard>
            </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal delay-200 lg:col-span-3 glass-card rounded-2xl p-6 sm:p-8 space-y-5 hover:border-emerald-500/15 transition-all duration-300"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Kirim Pesan
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono font-semibold text-foreground">
                  Nama Anda
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama lengkap / perusahaan"
                  className="input-glow w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-semibold text-foreground">
                  Email Anda
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@perusahaan.com"
                  className="input-glow w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono font-semibold text-foreground">
                Pesan
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ceritakan tentang peluang kerja atau kebutuhan proyek Anda..."
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="glow-btn w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200"
            >
              {isSent ? (
                <>
                  <Sparkles className="w-4 h-4" />
                  Membuka Email Client...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
