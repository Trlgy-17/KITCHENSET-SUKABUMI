import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Alur & Tahapan Kerja Pembuatan Kitchen Set Sukabumi | Transparan & Tepat Waktu",
  description:
    "Tahapan terstruktur pengerjaan kitchen set custom di Sukabumi: konsultasi gratis, survey laser presisi, desain 3D render, RAB transparan, produksi workshop 14-25 hari, instalasi rapi, dan garansi pemeliharaan 6 bulan.",
  keywords: [
    "tahapan pembuatan kitchen set",
    "proses pengerjaan kitchen set",
    "survey kitchen set sukabumi",
    "desain 3d kitchen set sukabumi",
    "lama pembuatan kitchen set",
    "kitchen set sukabumi bergaransi",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/proses`,
  },
  openGraph: {
    title: "Tahapan Kerja Pembuatan Kitchen Set Sukabumi | KitchenSetSukabumi.id",
    description:
      "Alur manufaktur kitchen set transparan dari survey laser hingga instalasi selesai dengan garansi resmi 6 bulan.",
    url: `${SITE_CONFIG.url}/proses`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
        width: 1200,
        height: 800,
        alt: "Tahapan Kerja Kitchen Set Sukabumi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alur Kerja Pembuatan Kitchen Set Sukabumi",
    description: "SOP manufaktur presisi dari survey hingga serah terima garansi.",
    images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
  },
};

export default function ProsesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tahapan Kerja",
        item: `${SITE_CONFIG.url}/proses`,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cara dan Tahapan Pembuatan Kitchen Set Custom di Sukabumi",
    description:
      "Panduan alur terstruktur pengerjaan kitchen set custom dari survey awal sampai serah terima instalasi.",
    totalTime: "P25D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Konsultasi Kebutuhan & Desain Awal",
        text: "Diskusikan kebutuhan ruang, fungsi, preferensi desain dan kisaran budget bersama tim KitchenSet Sukabumi tanpa biaya awal.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Survei Lokasi & Pengukuran Laser",
        text: "Pengukuran langsung dengan meteran laser serta memeriksa kondisi ruang, kontur dinding, pipa dan kelistrikan di rumah Anda di Sukabumi.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Desain 3D Render & Finalisasi Layout",
        text: "Pembuatan visualisasi 3D fotorealistik sesuai ukuran ruang aktual untuk memastikan kesesuaian tata letak dan estetika sebelum produksi.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Rincian Anggaran Biaya (RAB) Transparan",
        text: "Penyusunan penawaran harga detail per meter lari, spesifikasi bahan multiplek 18mm, tipe finishing HPL, dan aksesoris.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Produksi di Workshop",
        text: "Fabrikasi kabinet di workshop menggunakan mesin presisi, perakitan modul, dan pelapisan finishing rapi selama 14-25 hari kerja.",
      },
      {
        "@type": "HowToStep",
        position: 6,
        name: "Instalasi & Finishing di Lokasi",
        text: "Pemasangan modul kabinet, top table, kompor tanam, sink, fitting lampu LED, dan pengecekan kerapian oleh tim profesional.",
      },
      {
        "@type": "HowToStep",
        position: 7,
        name: "Serah Terima & Garansi Pemeliharaan",
        text: "Pemeriksaan fungsi bersama klien, serah terima kunci & aksesoris, serta aktivasi garansi pemeliharaan resmi selama 6 bulan.",
      },
    ],
  };

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Tahapan Kerja" }]} />

        {/* Intro */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm space-y-4">
          <Badge variant="accent">Transparansi Penuh</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Alur Kerja Pembuatan Kitchen Set
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 max-w-3xl leading-relaxed font-sans">
            Kami menerapkan SOP manufaktur terstruktur agar Anda mendapatkan kepastian waktu, transparansi rincian biaya, dan ketepatan bahan tanpa kekhawatiran proyek terbengkalai.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-editorial-700">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              Rata-rata 14 - 25 Hari Kerja
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Survey Sukabumi Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Garansi Pemeliharaan 6 Bulan
            </span>
          </div>
        </div>

        {/* The 9-step timeline component */}
        <ProcessTimeline />

        {/* CTA */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Mulai Tahap 1 Anda Sekarang
          </h2>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-xl mx-auto">
            Sesi konsultasi pertama tidak mengikat dan bebas biaya. Diskusikan denah dan kebutuhan dapur Anda bersama konsultan kami.
          </p>
          <div className="pt-2">
            <Link href="/konsultasi">
              <Button variant="accent" size="lg">
                Jadwalkan Konsultasi & Survey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
