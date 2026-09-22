import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { FloatingWhatsApp } from "@/components/shared/FloatingWhatsApp";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Kitchen Set Sukabumi | Custom Interior & Furniture",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Jasa kitchen set dan interior custom di Sukabumi. Mulai dari konsultasi, survei, desain, pemilihan material, produksi hingga instalasi dengan alur kerja dan RAB yang transparan.",
  keywords: [
    "kitchen set sukabumi",
    "kitchen set custom sukabumi",
    "jasa kitchen set sukabumi",
    "kitchen set minimalis sukabumi",
    "kitchen set modern sukabumi",
    "kitchen set cisaat",
    "kitchen set cibadak",
    "renovasi dapur sukabumi",
    "custom furniture sukabumi",
    "interior sukabumi",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Jasa Pembuatan Kitchen Set Custom Sukabumi`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/portfolio/portfolio-1.webp",
        width: 1200,
        height: 800,
        alt: "Kitchen Set Custom Sukabumi",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema (PRD Section 20.2)
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
    "@id": SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.9277,
      longitude: 106.9298,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Sukabumi`,
    })),
    sameAs: [
      "https://instagram.com/kitchensetsukabumi.id",
    ],
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${instrumentSerif.variable} font-sans min-h-screen flex flex-col antialiased bg-[#F4F1EA] text-[#181715]`}>
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
