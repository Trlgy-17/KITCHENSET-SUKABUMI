import React from "react";
import { Metadata } from "next";
import { BudgetEstimator } from "@/components/estimator/BudgetEstimator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Kalkulator Estimasi Biaya Kitchen Set Sukabumi | Hitung Harga Transparan",
  description:
    "Hitung estimasi akurat biaya kitchen set custom Anda di Sukabumi dalam hitungan detik. Simulasi bentuk I, L, U, Island, bahan Multiplek 18mm, dan top table granit.",
  keywords: [
    "harga kitchen set sukabumi",
    "biaya kitchen set sukabumi",
    "kalkulator kitchen set",
    "estimasi kitchen set sukabumi",
    "kitchen set per meter sukabumi",
    "simulasi biaya kitchen set",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/estimator`,
  },
  openGraph: {
    title: "Kalkulator Estimasi Biaya Kitchen Set Sukabumi | Hitung Harga Transparan",
    description:
      "Simulasi biaya kitchen set custom Sukabumi berdasarkan layout, panjang meter lari, dan pilihan finishing tanpa biaya tersembunyi.",
    url: `${SITE_CONFIG.url}/estimator`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
        width: 1200,
        height: 800,
        alt: "Kalkulator Estimasi Kitchen Set Sukabumi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Biaya Kitchen Set Sukabumi",
    description: "Hitung perkiraan biaya kitchen set custom Anda secara transparan.",
    images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
  },
};

export default function EstimatorPage() {
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
        name: "Kalkulator Estimasi Biaya",
        item: `${SITE_CONFIG.url}/estimator`,
      },
    ],
  };

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Kalkulator Estimasi Biaya" }]} />

        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="accent">Alat Transparansi Biaya</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Kalkulator Estimasi Kitchen Set Sukabumi
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 font-sans">
            Dapatkan gambaran realistis biaya dapur Anda dalam hitungan detik sebelum memutuskan berkonsultasi lebih lanjut.
          </p>
        </div>

        {/* Interactive Calculator Component */}
        <BudgetEstimator />

        {/* Supporting Educational Content under the Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white rounded-xl p-6 border border-editorial-200 space-y-2">
            <h3 className="font-serif text-base font-bold text-editorial-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Formula Meter Lari (m1)
            </h3>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Dihitung berdasarkan panjang horizontal dinding dapur. 1 meter lari sudah mencakup struktur rangka, ambalan laci, dan pintu kabinet.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 space-y-2">
            <h3 className="font-serif text-base font-bold text-editorial-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Tanpa Serbuk Kayu Murahan
            </h3>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Perhitungan kami mengacu pada standar Multiplek Meranti 18mm atau HMR tahan air, bukan serbuk kayu MDF tipis yang rentan hancur.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 space-y-2">
            <h3 className="font-serif text-base font-bold text-editorial-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-primary" />
              Langkah Setelah Menghitung
            </h3>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Kirimkan hasil simulasi ke WhatsApp kami untuk penjadwalan survey lokasi dan pembuatan desain 3D gratis ke rumah Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
