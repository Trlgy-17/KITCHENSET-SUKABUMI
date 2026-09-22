import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const srv = SERVICES_DATA.find((s) => s.slug === slug);
  if (!srv) return { title: "Layanan Interior Sukabumi" };

  const pageUrl = `${SITE_CONFIG.url}/layanan/${srv.slug}`;
  const ogImageUrl = srv.heroImage.startsWith("http")
    ? srv.heroImage
    : `${SITE_CONFIG.url}${srv.heroImage}`;

  return {
    title: `${srv.title} Sukabumi | KitchenSetSukabumi.id`,
    description: `${srv.shortDesc} Layanan profesional di Kota dan Kabupaten Sukabumi dengan material multiplek 18mm kokoh dan garansi 6 bulan.`,
    keywords: [
      srv.title.toLowerCase(),
      `jasa ${srv.title.toLowerCase()} sukabumi`,
      `spesialis ${srv.title.toLowerCase()} sukabumi`,
      "kitchen set sukabumi",
      "interior custom sukabumi",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${srv.title} Sukabumi | KitchenSetSukabumi.id`,
      description: srv.shortDesc,
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 800,
          alt: srv.title,
        },
      ],
      locale: "id_ID",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${srv.title} Sukabumi`,
      description: srv.shortDesc,
      images: [ogImageUrl],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const srv = SERVICES_DATA.find((s) => s.slug === slug);

  if (!srv) {
    notFound();
  }

  const pageUrl = `${SITE_CONFIG.url}/layanan/${srv.slug}`;
  const ogImageUrl = srv.heroImage.startsWith("http")
    ? srv.heroImage
    : `${SITE_CONFIG.url}${srv.heroImage}`;

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
        name: "Layanan",
        item: `${SITE_CONFIG.url}/layanan`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: srv.title,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: srv.title,
    description: srv.shortDesc,
    url: pageUrl,
    image: ogImageUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.city,
        addressRegion: SITE_CONFIG.address.region,
        addressCountry: "ID",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Sukabumi",
    },
  };

  const waPrefill = generateWhatsAppLink({
    service: srv.title,
    customMessage: `Halo Kitchen Set Sukabumi, saya ingin konsultasi mengenai layanan "${srv.title}". Mohon informasi alur pengerjaan dan estimasi survey ke rumah saya di Sukabumi.`,
  });

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb
          items={[
            { name: "Layanan", href: "/layanan" },
            { name: srv.title },
          ]}
        />

        {/* Hero Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="accent">Layanan Spesialis Sukabumi</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight leading-tight">
              {srv.title}
            </h1>
            <p className="text-xs font-semibold text-accent-dark bg-accent/5 p-3 rounded-lg border border-accent/15 leading-relaxed">
              &ldquo;{srv.oneLineBenefit}&rdquo;
            </p>
            <p className="text-sm sm:text-base text-editorial-700 leading-relaxed font-sans">
              {srv.shortDesc}
            </p>

            <div className="p-4 rounded-xl bg-editorial-50 border border-editorial-200 text-xs text-editorial-700 space-y-1">
              <span className="font-semibold text-editorial-900 block">Panduan Biaya:</span>
              <p>{srv.pricingNote}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/konsultasi">
                <Button variant="primary" size="lg">
                  Konsultasikan Kebutuhan Anda
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={waPrefill} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp Langsung
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src={srv.heroImage}
              alt={srv.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Features & Deliverables (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-editorial-200 shadow-sm space-y-4">
            <h2 className="font-serif text-xl font-bold text-editorial-900">
              Cakupan Fitur & Keunggulan
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-editorial-700">
              {srv.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-editorial-200 shadow-sm space-y-4">
            <h2 className="font-serif text-xl font-bold text-editorial-900">
              Apa yang Anda Dapatkan (Deliverables)
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-editorial-700">
              {srv.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service FAQs */}
        {srv.faqList && srv.faqList.length > 0 && (
          <div className="bg-white rounded-2xl p-8 border border-editorial-200 space-y-5">
            <h2 className="font-serif text-xl font-bold text-editorial-900">
              Tanya Jawab Seputar {srv.title}
            </h2>
            <div className="space-y-4">
              {srv.faqList.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-editorial-50 border border-editorial-200/80 space-y-1.5">
                  <h4 className="font-serif text-sm font-bold text-editorial-900">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-editorial-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contextual CTA */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">
            Mulai Diskusi Proyek {srv.title} Anda Hari Ini
          </h3>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-xl mx-auto">
            Dapatkan estimasi biaya awal dan jadwalkan survey pengukuran gratis oleh tim ahli ke rumah Anda di Sukabumi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/konsultasi">
              <Button variant="accent" size="md">
                Isi Formulir Konsultasi
              </Button>
            </Link>
            <a href={waPrefill} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="md">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp Admin
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
