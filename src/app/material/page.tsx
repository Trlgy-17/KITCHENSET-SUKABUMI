import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { MATERIALS_DATA } from "@/data/materials";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Check, X, ArrowRight } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Panduan & Katalog Material Kitchen Set Sukabumi | Multiplek 18mm & HPL Taco",
  description:
    "Edukasi bahan kitchen set Sukabumi: Multiplek 18mm meranti, HMR anti air, HPL Taco, Duco PU, Top Table Granit Nero, Solid Surface, dan hardware soft-close bergaransi.",
  keywords: [
    "material kitchen set sukabumi",
    "multiplek kitchen set sukabumi",
    "hpl taco sukabumi",
    "top table granit sukabumi",
    "kitchen set anti rayap sukabumi",
    "harga bahan kitchen set",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/material`,
  },
  openGraph: {
    title: "Panduan & Katalog Material Kitchen Set Sukabumi | KitchenSetSukabumi.id",
    description:
      "Perbandingan objektif material bodi plywood/multiplek 18mm vs serbuk kayu, finishing HPL vs Duco, dan top table granit.",
    url: `${SITE_CONFIG.url}/material`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/materials/plywood.webp`,
        width: 1200,
        height: 800,
        alt: "Material Plywood Multiplek Kitchen Set Sukabumi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panduan & Material Kitchen Set Sukabumi",
    description: "Kenali bahan baku kitchen set berkualitas agar dapur tahan belasan tahun.",
    images: [`${SITE_CONFIG.url}/images/materials/plywood.webp`],
  },
};

export default function MaterialPage() {
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
        name: "Material & Finishing",
        item: `${SITE_CONFIG.url}/material`,
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
        <Breadcrumb items={[{ name: "Material & Finishing" }]} />

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm space-y-4">
          <Badge variant="accent">Edukasi & Spesifikasi</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Katalog & Panduan Material Kitchen Set
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 max-w-3xl leading-relaxed font-sans">
            Kekuatan dapur Anda 100% ditentukan oleh kualitas bahan di dalamnya. Kami percaya pada transparansi mutlak tanpa menyembunyikan kekurangan atau kelebihan setiap opsi material.
          </p>
        </div>

        {/* Comparison Highlight: Plywood vs Serbuk Kayu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-600/30 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block">
              Standar Bodi Kami
            </span>
            <h2 className="font-serif text-2xl font-bold text-editorial-900">
              Plywood / Multiplek 18mm
            </h2>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Tersusun dari lembaran kayu solid meranti yang dipress silang bertingkat dengan perekat kedap air.
            </p>
            <ul className="space-y-2 text-xs text-editorial-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kekuatan cengkeram sekrup engsel sangat kuat</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tahan kelembapan tinggi dan kebocoran air pipa</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Masa pakai panjang hingga 10-15 tahun ke atas</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-300 opacity-90 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-full inline-block">
              Jangan Dipakai untuk Dapur
            </span>
            <h2 className="font-serif text-2xl font-bold text-editorial-900">
              Particle Board (Serbuk Gergaji)
            </h2>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Terbuat dari serbuk limbah kayu gergajian yang dipadatkan dengan lem biasa. Sering dijual murah oleh retail furnitur knockdown.
            </p>
            <ul className="space-y-2 text-xs text-editorial-700">
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Hancur seperti bubur jika terkena air dalam hitungan bulan</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Pintu kabinet mudah jebol dan engsel tidak bisa diperbaiki</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Sangat rentan terhadap rayap dan jamur lembap</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Grid of Materials */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-editorial-900">
            Daftar Material & Pilihan Finishing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MATERIALS_DATA.map((mat) => (
              <Card key={mat.slug} className="group border border-editorial-200 bg-white flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-editorial-100">
                    <Image
                      src={mat.imageUrl}
                      alt={mat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-editorial-900/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                        Tier {mat.priceLevel}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="font-serif text-base font-bold text-editorial-900 group-hover:text-accent transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-editorial-600 leading-relaxed">
                      {mat.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-editorial-100 text-[11px] text-editorial-600">
                      <span className="font-semibold text-editorial-800">Ideal Untuk: </span>
                      <span>{mat.bestFor}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href={`/material/${mat.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-editorial-800 hover:text-accent transition-colors pt-2 border-t border-editorial-100"
                  >
                    <span>Baca Karakteristik & Kelebihan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
