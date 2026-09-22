import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Jadwalkan Survei Lokasi Gratis Kitchen Set Sukabumi",
  description:
    "Formulir reservasi survei dan pengukuran ruangan dapur gratis ke rumah Anda di Sukabumi. Dapatkan konsultasi denah layout 2D dan estimasi RAB transparan tanpa komitmen.",
  keywords: [
    "survei kitchen set sukabumi",
    "jadwal ukur dapur sukabumi",
    "konsultasi kitchen set gratis sukabumi",
    "survei lokasi gratis sukabumi",
    "biaya survei kitchen set sukabumi",
    "jasa survei interior sukabumi",
  ],
  openGraph: {
    title: "Jadwalkan Survei Lokasi Gratis Kitchen Set Sukabumi | KitchenSetSukabumi.id",
    description:
      "Pengukuran langsung ke rumah Anda di Sukabumi. Dapatkan layout 2D dan RAB transparan tanpa komitmen.",
    url: `${SITE_CONFIG.url}/jadwalkan-survei`,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
        width: 1200,
        height: 800,
        alt: "Jadwalkan Survei Kitchen Set Sukabumi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadwalkan Survei Lokasi Gratis Kitchen Set Sukabumi",
    description: "Pengukuran langsung ke rumah Anda di Sukabumi. Gratis layout 2D dan RAB transparan.",
    images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/jadwalkan-survei`,
  },
};

export default function JadwalkanSurveiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: "Jadwalkan Survei",
        item: `${SITE_CONFIG.url}/jadwalkan-survei`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
