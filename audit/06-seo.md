# 06 - Technical SEO & Local SEO Audit

## 1. Temuan SEO Utama

### [SEO-001 - P1] Canonical URL Inheritance Bug pada Seluruh Subhalaman
- **Severity:** P1 (High)
- **Komponen / File:** `src/app/layout.tsx` & seluruh subhalaman di `src/app/`
- **Masalah:**
  - Di `src/app/layout.tsx` baris 64-66 terdapat konfigurasi:
    ```typescript
    alternates: {
      canonical: SITE_CONFIG.url, // https://kitchensetsukabumi.id
    }
    ```
  - Dalam Next.js App Router, jika sebuah subhalaman (seperti `/portfolio`, `/layanan`, `/proses`, `/material`, `/faq`, `/terms`, `/privacy`) mendefinisikan `metadata` tanpa mendeklarasikan `alternates.canonical`, halaman tersebut akan **mewarisi canonical tag milik root layout**.
- **Dampak Fatal:**
  - Tag HTML `<link rel="canonical" href="https://kitchensetsukabumi.id" />` akan muncul pada halaman `/portfolio`, `/layanan`, dan lainnya.
  - Googlebot akan menginstruksikan indexer bahwa halaman-halaman subdirektori tersebut hanyalah duplikat dari Beranda, sehingga subhalaman berpotensi tidak diindeks atau de-indexed dari hasil pencarian Google.
- **Rekomendasi:**
  - Hapus canonical absolut tunggal dari root layout atau jadikan dinamis per halaman dengan relative path (`alternates: { canonical: "/portfolio" }`).
- **Status:** OPEN

---

### [SEO-002 - P1] Sitemap Menyertakan Rute Redirect (`/privacy-policy`)
- **Severity:** P1 (High)
- **Komponen / File:** `src/app/sitemap.ts` baris 36
- **Masalah:**
  - File sitemap mendaftarkan URL: `${baseUrl}/privacy-policy`.
  - Halaman `src/app/privacy-policy/page.tsx` berisi: `redirect("/privacy")` (status redirect 307/308).
- **Dampak:** Google Search Console akan memunculkan peringatan *"Submitted URL redirects"* dan menurunkan skor kesehatan sitemap.
- **Rekomendasi:** Hapus `${baseUrl}/privacy-policy` dari `staticRoutes` di `sitemap.ts`.
- **Status:** OPEN

---

### [SEO-003 - P3] Verifikasi Media Sosial pada Schema `sameAs`
- **Severity:** P3 (Low)
- **Komponen / File:** `src/app/layout.tsx` baris 121-124
- **Masalah:** Schema LocalBusiness mencantumkan `"https://tiktok.com/@kitchensetsukabumi"`. Sesuai instruksi audit, hanya akun Instagram resmi `https://www.instagram.com/kitchensetsukabumi.id/` yang terkonfirmasi valid.
- **Rekomendasi:** Bersihkan referensi akun TikTok yang belum terverifikasi resmi dari array `sameAs`.
- **Status:** OPEN

---

## 2. Struktur Konten & Meta Tags
- **H1 Single Hierarchy:** Terpenuhi. Setiap halaman memiliki tepat 1 H1 utama yang deskriptif dan mencerminkan maksud pencarian lokal:
  - Homepage: `Kitchen Set yang Dirancang untuk ruang dan cara Anda hidup.`
  - Jadwalkan Survei: `Jadwalkan Kunjungan ke lokasi Anda.`
  - Portfolio: `Katalog Portofolio & galeri per folder pengerjaan.`
  - FAQ: `Sebelum Memulai project Anda.`
- **Local SEO & Keywords:** Natural integration untuk *"Kitchen Set Sukabumi"*, *"Jasa Kitchen Set Sukabumi"*, *"Custom Furniture Sukabumi"*, dan wilayah layanan terfokus (*Cisaat, Cibadak, Cicurug, Parungkuda, dsb.*). Tidak ada keyword stuffing.
- **NAP (Name, Address, Phone):** Konsisten di seluruh halaman footer, kontak, dan schema JSON-LD.
- **Robots.txt (`src/app/robots.ts`):** Mengizinkan indexing pada seluruh konten publik, dan memblokir rute `/admin`, `/admin/*`, serta `/api/*`.
