# 05 - Performance & Core Web Vitals Audit

## 1. Production Build Metrics
Hasil eksekusi `next build` resmi:
- **First Load JS shared by all:** 103 kB
  - `chunks/1255-7316b50163a428e6.js`: 46.4 kB
  - `chunks/4bd1b696-f785427dddbba9fb.js`: 54.2 kB
  - Other shared chunks: 2 kB
- **Page Route Bundles:**
  - Homepage (`/`): 12.6 kB (Total First Load JS: 224 kB)
  - Portfolio (`/portfolio`): 8 kB (Total First Load JS: 127 kB)
  - Jadwalkan Survei (`/jadwalkan-survei`): 4.74 kB (Total First Load JS: 107 kB)
  - Static Pages (`/privacy`, `/terms`, `/proses`): 147 B - 811 B (Total First Load JS: ~103 - 106 kB)

Status bundle sangat efisien untuk aplikasi Next.js 15 dengan GSAP dan Motion.

---

## 2. Core Web Vitals Projections & Diagnostics

### 2.1. Largest Contentful Paint (LCP)
- **Kandidat LCP:** Gambar Hero Section (`/kitchen/1.jpeg`).
- **Analisis Optimasi:**
  - Komponen `<Image />` memiliki atribut `priority` dan `sizes="(max-width: 1024px) 100vw, 55vw"`.
  - Format aset: JPEG berkualitas tinggi yang dioptimalkan Next.js Image Optimization Pipeline.
  - Estimasi LCP pada koneksi 4G seluler: ~1.4s - 1.8s (Memenuhi target Google CWV < 2.5s).

### 2.2. Cumulative Layout Shift (CLS)
- **Status:** EXCELLENT (Estimasi CLS < 0.05).
- **Faktor Pendukung:**
  - Seluruh elemen gambar memiliki `fill` dengan kontainer berrasio aspek pasti (`aspect-[4/3]`, `aspect-[16/9]`, `aspect-[16/10]`).
  - Font Google dimuat dengan `display: swap` dan fallback geometris yang stabil via `next/font/google` (`--font-sans: Manrope`, `--font-serif: Instrument_Serif`).
  - Animasi hover menggunakan pseudo-elemen `::after` (`.card-lift-60fps`) dan GPU compositor transforms (`transform: translateY(-4px)`), bukan manipulasi layout `margin` atau `height`.

### 2.3. Interaction to Next Paint (INP)
- **Status:** EXCELLENT (Estimasi INP < 100ms).
- **Faktor Pendukung:**
  - Event listener scroll dioptimalkan dengan `{ passive: true }`.
  - Pergerakan slider Before-After menggunakan `requestAnimationFrame` untuk membatasi frekuensi render hingga 60fps tanpa membebani main thread.
  - State lokal terisolasi di masing-masing komponen tanpa global state re-renders.

---

## 3. Temuan Kinerja Aset [PERF-001 - P2]
- **Severity:** P2 (Medium)
- **Komponen / File:** `src/app/layout.tsx`, `src/data/materials.ts`
- **Masalah:** Default OpenGraph image di `layout.tsx` dan katalog material di `materials.ts` masih mengarah ke URL remote Unsplash CDN (`https://images.unsplash.com/...`), bukan aset lokal teroptimasi di `public/`.
- **Dampak:** Memerlukan DNS lookup, SSL handshake, dan koneksi eksternal tambahan ke Unsplash saat membagikan link situs atau merender halaman material.
- **Rekomendasi:** Arahkan ke aset WebP lokal di `public/materials/` dan `public/kitchen/`.
- **Status:** OPEN
