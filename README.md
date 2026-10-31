# ⚡ Modern Minimalist Fullstack Developer Portfolio

Portofolio modern, minimalis, dan berkinerja tinggi yang dibangun dengan **Next.js 14 (App Router)**, **TypeScript**, dan **Tailwind CSS**. Didesain khusus untuk Fullstack Developer untuk menampilkan proyek, keahlian, pengalaman, dan kontak secara profesional.

---

## 🚀 Fitur Utama

- **Aesthetic & Minimalist Design**: Tampilan bersih, fokus pada keterbacaan, dan gaya modern ala tech lead / senior engineer.
- **Dark & Light Mode**: Switcher tema instan dengan persistensi lokal (`next-themes`).
- **Single-File Data Source**: Semua teks, biografi, keahlian, tautan sosial, dan proyek dikelola di satu file: `src/data/portfolio.ts`.
- **Responsive Layout**: Optimal di semua ukuran layar (Mobile, Tablet, Desktop).
- **Interactive Components**:
  - Live availability badge (*"Available for work"*)
  - Bento/Card-style project showcase dengan tag teknologi, tautan GitHub, dan link Live Demo
  - Grouped tech stack badges (Frontend, Backend, Database, Cloud & DevOps)
  - Timeline pengalaman kerja & riwayat pendidikan
  - Formulir kontak cepat & one-click copy email
- **Zero-Config Hosting di Vercel**: Siap dideploy gratis hanya dalam 2 menit.

---

## 🛠️ Cara Menjalankan Secara Lokal

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
2. Buka browser di [http://localhost:3000](http://localhost:3000).

3. **Build untuk Produksi**:
   ```bash
   npm run build
   npm run start
   ```

---

## ✍️ Cara Mengubah Isi Portofolio

Cukup buka file:
👉 `src/data/portfolio.ts`

Di file tersebut, Anda bisa mengganti:
1. **Nama, Title, dan Bio**:
   ```typescript
   personal: {
     name: "Nama Lengkap Anda",
     title: "Fullstack Developer",
     headline: "Satu kalimat penjelas keahlian Anda...",
     location: "Kota, Negara",
     ...
   }
   ```
2. **Sosial Media & Resume**:
   Ganti link GitHub, LinkedIn, Email, dan link resume (Google Drive PDF atau file CV).
3. **Keahlian (Skills)**:
   Tambahkan teknologi yang Anda kuasai pada kategori Frontend, Backend, Database, atau DevOps.
4. **Daftar Proyek**:
   Tambahkan proyek aplikasi Anda lengkap dengan deskripsi fitur, tech stack yang dipakai, link demo, dan link GitHub repo.

---

## ☁️ Panduan Deploy Gratis ke Vercel

### Langkah 1: Push ke GitHub
1. Buat repository baru di GitHub (misal: `portfolio`).
2. Di terminal folder proyek ini:
   ```bash
   git init
   git add .
   git commit -m "feat: initial minimalist portfolio"
   git branch -M main
   git remote add origin https://github.com/<username-kamu>/portfolio.git
   git push -u origin main
   ```

### Langkah 2: Hubungkan ke Vercel (100% Gratis)
1. Buka [https://vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Pilih repository `portfolio` yang baru saja Anda push.
4. Pada konfigurasi framework, Vercel akan otomatis mendeteksi **Next.js**. Klik **"Deploy"**.
5. Dalam 1-2 menit, portofolio Anda langsung online dengan domain gratis seperti `namamu.vercel.app`!
6. *(Opsional)* Anda dapat menghubungkan domain kustom sendiri (seperti `namamu.dev`) di menu Settings > Domains secara gratis lengkap dengan SSL otomatis.
