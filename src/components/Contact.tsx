"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  MapPin,
  ArrowRight,
} from "lucide-react";

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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground section-title">
            Kontak &amp; Kolaborasi
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            Tertarik untuk berkolaborasi atau mendiskusikan peluang kerja? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info Card */}
          <div className="reveal delay-100 lg:col-span-2 flex flex-col gap-4">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">
                  Email Langsung
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <p className="text-sm font-mono font-semibold text-foreground break-all">
                    {personal.socials.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs rounded-lg border transition-colors duration-200 font-semibold ${
                  copied
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "border-border bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground"
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
            </div>

            {/* Socials Card */}
            <div className="glass-card rounded-2xl p-6 space-y-3">
              <p className="text-xs font-medium text-muted-foreground">
                Profil &amp; Lokasi
              </p>
              <div className="space-y-2">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/30 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  <Github className="w-4 h-4 text-foreground" />
                  <span className="flex-1 font-medium">@genta3131</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                {personal.socials.linkedin && (
                  <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/30 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                  >
                    <Linkedin className="w-4 h-4 text-foreground" />
                    <span className="flex-1 font-medium">LinkedIn Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                <div className="flex items-center gap-3 rounded-lg border border-border/40 bg-muted/20 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal delay-200 lg:col-span-3 glass-card rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <p className="text-xs font-medium text-muted-foreground">
              Kirim Pesan
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-foreground">
                  Nama Anda
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama lengkap / perusahaan"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-foreground">
                  Email Anda
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@perusahaan.com"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-foreground">
                Pesan
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Ceritakan tentang peluang kerja atau kebutuhan proyek Anda..."
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-colors placeholder:text-muted-foreground/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors duration-200"
            >
              {isSent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
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
