import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, ShieldCheck, Wrench, HeartHandshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami - Workshop & Tim Ahli Kitchen Set Sukabumi",
  description:
    "Profil spesialis manufaktur kitchen set custom dan interior hunian di Sukabumi. Berpengalaman, mengutamakan standar multiplek 18mm anti-lembab, transparansi RAB, dan garansi resmi 6 bulan.",
  keywords: [
    "tentang kitchen set sukabumi",
    "workshop interior sukabumi",
    "tukang kitchen set sukabumi",
    "spesialis interior sukabumi",
    "jasa interior terpercaya sukabumi",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/tentang-kami`,
  },
  openGraph: {
    title: "Tentang Kami - Spesialis Kitchen Set Sukabumi",
    description:
      "Dedikasi manufaktur interior custom berkualitas tinggi di Sukabumi dengan material kokoh dan transparansi penuh.",
    url: `${SITE_CONFIG.url}/tentang-kami`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
        width: 1200,
        height: 800,
        alt: "Workshop Kitchen Set Sukabumi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kitchen Set Sukabumi",
    description: "Kenali dedikasi kami dalam menghadirkan dapur impian berkualitas di Sukabumi.",
    images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
  },
};

export default function TentangKamiPage() {
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
        name: "Tentang Kami",
        item: `${SITE_CONFIG.url}/tentang-kami`,
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Tentang Kitchen Set Sukabumi",
    description:
      "Profil spesialis manufaktur interior dan kitchen set custom di Kota dan Kabupaten Sukabumi.",
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.region,
        addressCountry: "ID",
      },
    },
  };

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "Tentang Kami" }]} />

        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="accent">Tentang Kitchen Set Sukabumi</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight leading-tight">
              Dedikasi Kami untuk Dapur Rumah yang Bertahan Lama
            </h1>
            <p className="text-sm sm:text-base text-editorial-700 leading-relaxed font-sans">
              Kitchen Set Sukabumi lahir dari keprihatinan melihat banyaknya pemilik rumah di Sukabumi yang kecewa dengan furnitur pabrikan murah berbahan serbuk kayu yang mudah hancur dan berjamur akibat kelembapan iklim lokal.
            </p>
            <p className="text-sm text-editorial-600 leading-relaxed">
              Kami hadir sebagai spesialis manufaktur interior lokal yang mengedepankan ketepatan ukuran melalui survey laser presisi, transparansi material Multiplek 18mm, serta kejujuran dalam Rincian Anggaran Biaya (RAB) tanpa biaya tersembunyi.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/konsultasi">
                <Button variant="primary" size="md">
                  Konsultasi Bersama Tim Kami
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="md">
                  Lihat Hasil Pekerjaan Kami
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop"
              alt="Workshop Interior Kitchen Set Sukabumi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* 4 Pilar Nilai Kami */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="accent">Prinsip & Nilai</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-editorial-900">
              Prinsip Pengerjaan yang Kami Pegang Teguh
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-editorial-100 flex items-center justify-center text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-editorial-900">Tanpa Serbuk Kayu</h3>
              <p className="text-xs text-editorial-600 leading-relaxed">
                Menolak penggunaan particle board atau MDF murah pada bodi basah. Kami hanya menggunakan Multiplek 18mm & HMR tahan air.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-editorial-100 flex items-center justify-center text-accent">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-editorial-900">Workshop Sendiri</h3>
              <p className="text-xs text-editorial-600 leading-relaxed">
                Seluruh kabinet diproduksi oleh tukang kayu interior terlatih di workshop Sukabumi, menjamin kontrol kualitas ketat.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-editorial-100 flex items-center justify-center text-accent">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-editorial-900">Kejujuran Anggaran</h3>
              <p className="text-xs text-editorial-600 leading-relaxed">
                RAB dibuat transparan per meter lari. Tidak ada biaya tambahan di tengah proyek yang membuat konsumen terkejut.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-editorial-100 flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-editorial-900">Akar Lokal Sukabumi</h3>
              <p className="text-xs text-editorial-600 leading-relaxed">
                Responsif dan mudah dihubungi jika suatu saat Anda membutuhkan penyesuaian atau servis purna jual di Sukabumi.
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Info */}
        <div className="bg-white rounded-2xl p-8 border border-editorial-200 space-y-4">
          <h2 className="font-serif text-xl font-bold text-editorial-900">
            Kunjungi Workshop & Studio Kami
          </h2>
          <p className="text-xs sm:text-sm text-editorial-600 leading-relaxed max-w-2xl">
            Anda dipersilakan berkunjung untuk melihat langsung proses pemotongan bahan, perakitan engsel hidrolik, dan katalog sampel warna HPL & Granit di studio workshop kami:
          </p>
          <div className="p-4 rounded-xl bg-editorial-50 border border-editorial-200 text-xs text-editorial-800 space-y-1">
            <p className="font-bold text-editorial-900">{SITE_CONFIG.name} Workshop</p>
            <p>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.region} {SITE_CONFIG.address.postalCode}</p>
            <p>Jam Kunjungan: {SITE_CONFIG.operatingHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
