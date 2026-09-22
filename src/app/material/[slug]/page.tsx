import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MATERIALS_DATA } from "@/data/materials";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Check, X, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mat = MATERIALS_DATA.find((m) => m.slug === slug);
  if (!mat) return { title: "Material Kitchen Set Sukabumi" };

  const pageUrl = `${SITE_CONFIG.url}/material/${mat.slug}`;
  const ogImageUrl = mat.imageUrl.startsWith("http")
    ? mat.imageUrl
    : `${SITE_CONFIG.url}${mat.imageUrl}`;

  return {
    title: `${mat.name} - Spesifikasi & Karakteristik Material | KitchenSetSukabumi.id`,
    description: `${mat.shortDesc} Pelajari kelebihan, ketahanan air, dan penerapannya untuk kitchen set custom di Sukabumi.`,
    keywords: [
      mat.name.toLowerCase(),
      `material ${mat.name.toLowerCase()} sukabumi`,
      `spesifikasi ${mat.name.toLowerCase()}`,
      "bahan kitchen set sukabumi",
      "kitchen set custom sukabumi",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${mat.name} - Material Kitchen Set Sukabumi`,
      description: mat.shortDesc,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 800,
          alt: mat.name,
        },
      ],
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${mat.name} - Spesifikasi Material`,
      description: mat.shortDesc,
      images: [ogImageUrl],
    },
  };
}

export default async function MaterialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mat = MATERIALS_DATA.find((m) => m.slug === slug);

  if (!mat) {
    notFound();
  }

  const pageUrl = `${SITE_CONFIG.url}/material/${mat.slug}`;

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
      {
        "@type": "ListItem",
        position: 3,
        name: mat.name,
        item: pageUrl,
      },
    ],
  };

  const waPrefill = generateWhatsAppLink({
    service: `Spesifikasi Bahan ${mat.name}`,
    customMessage: `Halo Kitchen Set Sukabumi, saya ingin tanya lebih lanjut tentang penggunaan material "${mat.name}" untuk kitchen set rumah saya. Apakah cocok untuk dapur saya?`,
  });

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb
          items={[
            { name: "Material", href: "/material" },
            { name: mat.name },
          ]}
        />

        {/* Hero Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <Badge variant="accent">Katalog Spesifikasi</Badge>
              <span className="text-xs uppercase font-bold text-editorial-500">
                Tier: {mat.priceLevel}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-editorial-900 tracking-tight leading-tight">
              {mat.name}
            </h1>

            <p className="text-sm sm:text-base text-editorial-700 leading-relaxed font-sans">
              {mat.fullDesc}
            </p>

            <div className="p-4 rounded-xl bg-editorial-50 border border-editorial-200 text-xs text-editorial-800">
              <span className="font-semibold text-editorial-900">Rekomendasi Pemakaian: </span>
              {mat.bestFor}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={waPrefill} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="md">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Tanyakan Penggunaan Material Ini
                </Button>
              </a>
              <Link href="/estimator">
                <Button variant="outline" size="md">
                  Simulasi Biaya Bahan Ini
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src={mat.imageUrl}
              alt={mat.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Kelebihan & Pertimbangan (Pros & Cons) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-editorial-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                ✓
              </span>
              <h2 className="font-serif text-xl font-bold text-editorial-900">
                Keunggulan (Pros)
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-editorial-700">
              {mat.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-editorial-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">
                !
              </span>
              <h2 className="font-serif text-xl font-bold text-editorial-900">
                Pertimbangan (Cons)
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-editorial-700">
              {mat.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 text-center space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            Ingin Memeriksa Sampel Fisik Material Ini?
          </h3>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-lg mx-auto">
            Saat tim kami datang untuk survey lokasi ke rumah Anda di Sukabumi, kami membawa katalog sampel fisik HPL, granit, dan potongan bodi multiplek 18mm untuk Anda sentuh langsung.
          </p>
          <div className="pt-2">
            <Link href="/konsultasi">
              <Button variant="accent" size="md">
                Jadwalkan Survey Lokasi & Cek Sampel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
