# 04 - Security & Vulnerability Audit

## 1. Temuan Keamanan Utama

### [SEC-001 - P0] Broken Access Control & Raw Customer PII Exposure
- **Severity:** P0 (Blocker / Critical)
- **Komponen / File:**
  - `src/app/admin/page.tsx`
  - `src/app/api/leads/route.ts` (GET, POST)
  - `src/app/api/leads/[id]/route.ts` (GET, PATCH)
  - `src/components/admin/AdminPipeline.tsx`
- **Masalah:**
  - Rute `/admin` dan API endpoints `/api/leads` dapat diakses langsung oleh siapa saja di internet tanpa sesi login, token otorisasi, ataupun password.
  - Endpoint `GET /api/leads` mengembalikan seluruh array data prospek pelanggan (nama, nomor telepon WhatsApp, email, alamat, catatan interior, estimasi anggaran).
- **Dampak:**
  - Pelanggaran privasi berat (kebocoran data pribadi / PII calon klien).
  - Kompetitor atau pihak tak berwenang dapat mencuri data calon pelanggan atau memanipulasi status lead via `PATCH /api/leads/[id]`.
- **Penyebab:**
  - Prototype CRM lokal ditinggalkan aktif tanpa proteksi middleware atau sistem autentikasi di Next.js App Router.
- **Cara Reproduce:**
  1. Jalankan server produksi.
  2. Buka URL `https://kitchensetsukabumi.id/admin` di incognito window.
  3. Buka tab Network atau kirim request: `curl https://kitchensetsukabumi.id/api/leads`.
  4. Response mengembalikan JSON berisi data calon pelanggan lengkap dengan status 200 OK.
- **Rekomendasi:**
  - Proteksi endpoint `/api/leads` dan `/admin` dengan autentikasi berbasis environment secret (`ADMIN_SECRET_KEY` atau Basic Auth/Cookie header token).
  - Pastikan default return adalah 401 Unauthorized jika header kredensial tidak valid.
- **Status:** OPEN

---

### [SEC-002 - P1] Ketiadaan HTTP Security Headers & Kebocoran X-Powered-By
- **Severity:** P1 (High)
- **Komponen / File:** `next.config.ts`
- **Masalah:**
  - Server tidak mengirimkan header keamanan modern: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options, X-Frame-Options, Referrer-Policy, dan Permissions-Policy.
  - Header `X-Powered-By: Next.js` masih dikirimkan secara default pada HTTP response.
- **Dampak:**
  - Membuka peluang serangan Clickjacking, MIME-type sniffing, cross-site framing, dan memudahkan fingerprinting teknologi oleh penyerang.
- **Rekomendasi:**
  - Konfigurasikan `poweredByHeader: false` pada `nextConfig`.
  - Pasang header keamanan pada blok `async headers()` di `next.config.ts` dengan CSP yang mencakup domain tepercaya (Unsplash CDN, WhatsApp, Google Fonts).
- **Status:** OPEN

---

### [SEC-003 - P1] Ketiadaan File `.gitignore`
- **Severity:** P1 (High)
- **Komponen / File:** Project Root
- **Masalah:** File `.gitignore` tidak ada di root direktori project.
- **Dampak:** File database lokal `leads-db.json`, `.next/`, `node_modules/`, dan file `.env*` berisiko tinggi ter-commit ke public repository saat inisialisasi Git.
- **Rekomendasi:** Buat file `.gitignore` standar Next.js yang mengabaikan `.next`, `node_modules`, `*.log`, `leads-db.json`, dan `.env*`.
- **Status:** OPEN

---

## 2. OWASP Top 10 Checklist & Verifikasi
1. **A01:2021 - Broken Access Control:** GAGAL (SEC-001 pada `/admin` dan `/api/leads`).
2. **A02:2021 - Cryptographic Failures / Secret Exposure:** PASS. Tidak ditemukan API keys, secret token, password, ataupun private key yang hardcoded di dalam client bundle.
3. **A03:2021 - Injection & XSS:** PASS. Penggunaan JSX React 19 meng-escape seluruh input pengguna secara default. Satu-satunya `dangerouslySetInnerHTML` ada pada injeksi schema JSON-LD di `layout.tsx` menggunakan objek statis tersanitasi.
4. **A04:2021 - Insecure Design:** GAGAL (Lead store API publik).
5. **A05:2021 - Security Misconfiguration:** GAGAL (SEC-002 ketiadaan security headers).
6. **A06:2021 - Vulnerable and Outdated Components:** PASS / MODERATE (PostCSS build dependency vulnerability dilaporkan oleh `npm audit`, namun Next.js 15.1.7 runtime aman dari eksekusi style injection).
7. **A07:2021 - Identification and Authentication Failures:** GAGAL (Rute internal CRM tidak memiliki mekanisme autentikasi).
8. **A08:2021 - Software and Data Integrity Failures:** PASS. Menggunakan `package-lock.json` deterministic.
9. **A09:2021 - Security Logging and Monitoring Failures:** PASS. Tidak ada PII yang dicatat ke browser logging client.
10. **A10:2021 - Server-Side Request Forgery (SSRF):** PASS. Server tidak melakukan outbound HTTP fetch ke URL yang diberikan user.
