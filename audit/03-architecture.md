# 03 - Architecture & Component Boundary Audit

## 1. App Router & Rendering Architecture
- **Framework:** Next.js 15 App Router
- **Root Layout:** Server Component murni (`src/app/layout.tsx`). Font Google diinjeksi melalui CSS variables (`--font-sans`, `--font-serif`) dengan subset `latin`.
- **RSC vs Client Component Boundary:**
  - Halaman konten statis (`/privacy`, `/terms`, `/faq`, `/area-layanan`, `/kitchen-set`, `/material`, `/tentang-kami`) dirender sebagai React Server Components (RSC) secara efisien.
  - Interactive islands diberi direktif `"use client"` secara terisolasi:
    - `Header.tsx`: Mengelola scroll spy, mobile drawer state, dynamic underline indicator.
    - `Footer.tsx`: Komponen statis murni tanpa state client.
    - `HeroSection.tsx`: GSAP timeline sequence & scroll reveals.
    - `ServicesSection.tsx`: GSAP ScrollTrigger staggered card animation.
    - `ProcessTimeline.tsx`: GSAP ScrollTrigger timeline reveals.
    - `BeforeAfterSection.tsx`: Interactive image slider dengan pointer capture & touch listeners.
    - `FAQSection.tsx`: Accordion spring interaction dengan `motion/react`.
    - `ConsultationForm.tsx` & `JadwalkanSurveiPage`: Multi-step form management.

---

## 2. Shared State & Logic Layer
- Tidak ada state management berlebihan (Redux / Zustand tidak dipasang karena kebutuhan state bersifat lokal per-komponen).
- Single Source of Truth:
  - `src/config/site.ts`: Menyimpan nomor WhatsApp resmi, link Instagram, alamat, NAP, jam operasional, dan domain produksi secara terpusat.
  - `src/lib/whatsapp.ts`: Generator link WhatsApp yang menjamin sanitasi dan `encodeURIComponent` pada parameter pesan.
  - `src/hooks/useReducedMotion.ts`: Abstraksi mendengarkan `window.matchMedia('(prefers-reduced-motion: reduce)')` untuk menjamin aksesibilitas gerakan.

---

## 3. Server Layer & Data Isolation
- `src/server/leadStore.ts`: Modul pembacaan dan penulisan file `leads-db.json`.
- **Finding ARCH-001 (P1):**
  - Modul `leadStore.ts` menggunakan API Node.js `fs` dan `path`. Modul ini dipanggil oleh API route `src/app/api/leads/route.ts` dan `src/app/api/leads/[id]/route.ts`.
  - Pada hosting platform serverless yang bersifat read-only filesystem (misal: AWS Lambda / Vercel Serverless Functions), pemanggilan `fs.writeFileSync` ke root direktori akan gagal saat runtime (`EROFS: read-only file system`).
  - Lead generation utama website mengandalkan WhatsApp direct deep links (`generateWhatsAppLink` & `generateSurveyWhatsAppLink`), sehingga kegagalan `fs.writeFileSync` tidak memblokir flow utama pemesanan via WhatsApp. Namun API leads ini harus diamankan atau dibatasi.
