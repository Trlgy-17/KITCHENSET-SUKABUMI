import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Portofolio Kitchen Set & Interior Custom Sukabumi",
  description:
    "Lihat galeri proyek nyata kitchen set minimalis, modern, backdrop TV, lemari bawah tangga, dan wardrobe yang telah kami selesaikan di Sukabumi. Foto dokumentasi asli pengerjaan workshop dan lokasi.",
  keywords: [
    "portofolio kitchen set sukabumi",
    "contoh kitchen set sukabumi",
    "foto kitchen set sukabumi",
    "hasil jadi kitchen set sukabumi",
    "kitchen set cisaat",
    "kitchen set cibadak",
    "desain dapur sukabumi",
    "galeri kitchen set sukabumi",
  ],
  openGraph: {
    title: "Portofolio Kitchen Set & Interior Custom Sukabumi | KitchenSetSukabumi.id",
    description:
      "Katalog lengkap dokumentasi proyek nyata kitchen set dan interior custom di Sukabumi.",
    url: `${SITE_CONFIG.url}/portfolio`,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
        width: 1200,
        height: 800,
        alt: "Portofolio Kitchen Set Sukabumi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio Kitchen Set & Interior Custom Sukabumi",
    description: "Katalog dokumentasi proyek nyata kitchen set dan interior custom di Sukabumi.",
    images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.url}/portfolio`,
  },
};

export default function PortfolioLayout({
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
        name: "Portofolio",
        item: `${SITE_CONFIG.url}/portfolio`,
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
