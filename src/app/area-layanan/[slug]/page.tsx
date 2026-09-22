import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SERVICE_AREAS } from "@/data/areas";
import { PROJECTS_DATA } from "@/data/projects";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Ruler } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: "Area Layanan Sukabumi" };

  const canonicalUrl = `${SITE_CONFIG.url}/area-layanan/${slug}`;

  return {
    title: `${area.seoTitle} | KitchenSetSukabumi.id`,
    description: area.seoDescription,
    keywords: [
      `kitchen set ${area.name.toLowerCase()}`,
      `jasa kitchen set ${area.name.toLowerCase()}`,
      `kitchen set minimalis ${area.name.toLowerCase()}`,
      `pembuatan kitchen set ${area.name.toLowerCase()}`,
      `kitchen set sukabumi`,
      `custom interior ${area.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `${area.seoTitle} | KitchenSetSukabumi.id`,
      description: area.seoDescription,
      url: canonicalUrl,
      images: [
        {
          url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
          width: 1200,
          height: 800,
          alt: `Kitchen Set Area ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${area.seoTitle} | KitchenSetSukabumi.id`,
      description: area.seoDescription,
      images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Area Layanan",
        item: `${SITE_CONFIG.url}/area-layanan`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: `${SITE_CONFIG.url}/area-layanan/${slug}`,
      },
    ],
  };

  const serviceAreaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Jasa Pembuatan Kitchen Set & Interior Custom ${area.name}`,
    description: area.seoDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${area.name}, Sukabumi, Jawa Barat`,
    },
  };

  // Filter projects in or near this area
  const areaProjects = PROJECTS_DATA.filter((p) =>
    p.location.toLowerCase().includes(area.name.toLowerCase()) ||
    p.area.toLowerCase().includes(area.name.toLowerCase()) ||
    p.city.toLowerCase().includes(area.name.toLowerCase())
  );

  const displayProjects = areaProjects.length > 0 ? areaProjects : PROJECTS_DATA.slice(0, 2);

  const waPrefill = generateWhatsAppLink({
    location: area.name,
    service: `Kitchen Set Area ${area.name}`,
    customMessage: `Halo Kitchen Set Sukabumi, saya berdomisili di area ${area.name}. Saya ingin konsultasi pembuatan kitchen set dan mengetahui jadwal survey lokasi ke rumah saya. Terima kasih.`,
  });

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb
          items={[
            { name: "Area Layanan", href: "/area-layanan" },
            { name: area.name },
          ]}
        />

        {/* Hero Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              Layanan Lokal Sukabumi
            </Badge>
            <Badge variant="secondary">{area.badge}</Badge>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight leading-tight">
            Jasa Pembuatan Kitchen Set di {area.name}
          </h1>

          <p className="text-base sm:text-lg text-editorial-700 leading-relaxed font-sans max-w-4xl">
            {area.intro}
          </p>

          <p className="text-sm text-editorial-600 leading-relaxed max-w-4xl">
            {area.description}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link href="/konsultasi">
              <Button variant="primary" size="lg">
                Jadwalkan Survey ke {area.name}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <a href={waPrefill} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp Admin
              </Button>
            </a>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-editorial-200 shadow-sm space-y-4">
            <h2 className="font-serif text-xl font-bold text-editorial-900">
              Cakupan Wilayah & Kelurahan di {area.name}
            </h2>
            <p className="text-xs text-editorial-600">
              Tim kami dapat berkunjung langsung ke titik lokasi rumah Anda di wilayah berikut:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-editorial-700 pt-1">
              {area.coverageDetail.map((cov, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{cov}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-editorial-200 shadow-sm space-y-4">
            <h2 className="font-serif text-xl font-bold text-editorial-900">
              Standar Pengerjaan Kami di {area.name}
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-editorial-700">
              <div className="flex items-start gap-2.5">
                <Ruler className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-editorial-900 block">Survey Lokasi & Pengukuran:</strong>
                  <span>Pengukuran laser presisi untuk memastikan modul kabinet pas dengan sudut dinding.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-editorial-900 block">Garansi Resmi Tertulis:</strong>
                  <span>Garansi pemeliharaan 6 bulan pasca serah terima sesuai ketentuan proyek.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Area FAQs */}
        {area.localFaq && area.localFaq.length > 0 && (
          <div className="bg-white rounded-2xl p-8 border border-editorial-200 space-y-4">
            <h2 className="font-serif text-xl font-bold text-editorial-900">
              FAQ Khusus Wilayah {area.name}
            </h2>
            <div className="space-y-3">
              {area.localFaq.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-editorial-50 border border-editorial-200/80 space-y-1">
                  <h4 className="font-serif text-sm font-bold text-editorial-900">{faq.q}</h4>
                  <p className="text-xs text-editorial-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Proyek di sekitar area */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-editorial-900">
                Proyek Selesai di Sekitar {area.name}
              </h2>
              <p className="text-xs text-editorial-600">
                Bukti hasil kerja nyata di lingkungan perumahan Sukabumi
              </p>
            </div>
            <Link href="/portfolio" className="text-xs font-semibold text-accent hover:underline">
              Semua Portofolio &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((p) => (
              <Card key={p.id} className="border border-editorial-200 bg-white">
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-accent">{p.location}</span>
                  <h3 className="font-serif text-sm font-bold text-editorial-900 line-clamp-1">{p.title}</h3>
                  <p className="text-xs text-editorial-600 line-clamp-2">{p.summary}</p>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="text-xs font-semibold text-accent hover:underline pt-2 inline-flex items-center gap-1"
                  >
                    Buka Studi Kasus &rarr;
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contextual CTA */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold">
            Tinggal di {area.name} dan Mau Buat Kitchen Set Baru?
          </h3>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-xl mx-auto">
            Hubungi kami sekarang untuk mengatur jadwal kunjungan survey pengukuran langsung ke rumah Anda tanpa dipungut biaya transportasi.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/konsultasi">
              <Button variant="accent" size="md">
                Jadwalkan Kunjungan Survey
              </Button>
            </Link>
            <a href={waPrefill} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="md">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
