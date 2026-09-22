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
    default: "Kitchen Set Sukabumi | Custom Interior & Kitchen Minimalis Modern",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Jasa kitchen set dan interior custom di Sukabumi. Spesialis kitchen set minimalis modern, backdrop TV, lemari bawah tangga, dan wardrobe. Survei lokasi gratis, RAB transparan, dan garansi pemeliharaan 6 bulan.",
  keywords: [
    "kitchen set sukabumi",
    "jasa kitchen set sukabumi",
    "harga kitchen set sukabumi",
    "kitchen set custom sukabumi",
    "kitchen set minimalis sukabumi",
    "kitchen set modern sukabumi",
    "kitchen set cisaat",
    "kitchen set cibadak",
    "kitchen set cicurug",
    "kitchen set palabuhanratu",
    "kitchen set sukaraja",
    "pembuatan kitchen set sukabumi",
    "tukang kitchen set sukabumi",
    "kitchen set hpl sukabumi",
    "lemari dapur sukabumi",
    "custom furniture sukabumi",
    "renovasi dapur sukabumi",
    "interior sukabumi",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | Jasa Pembuatan Kitchen Set Custom Sukabumi`,
    description:
      "Jasa kitchen set custom berkualitas di Sukabumi. Multiplek 18mm, PVC anti-rayap, finishing HPL Taco, survei lokasi gratis, dan garansi 6 bulan.",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
        width: 1200,
        height: 800,
        alt: "Kitchen Set Custom Sukabumi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Jasa Pembuatan Kitchen Set Custom Sukabumi`,
    description:
      "Jasa kitchen set custom di Sukabumi. Survei gratis, layout 2D, RAB transparan, dan garansi pemeliharaan 6 bulan.",
    images: [`${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  // Enhanced Schema.org LocalBusiness & HomeAndConstructionBusiness
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "GeneralContractor"],
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    image: `${SITE_CONFIG.url}/images/portfolio/portfolio-1.webp`,
    "@id": `${SITE_CONFIG.url}/#organization`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "Rp 1.950.000 - Rp 3.500.000 / meter",
    currenciesAccepted: "IDR",
    paymentAccepted: "Cash, Bank Transfer",
    description: SITE_CONFIG.description,
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
      "@type": "AdministrativeArea",
      name: `${area}, Sukabumi, Jawa Barat`,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Kitchen Set & Interior Custom Sukabumi",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pembuatan Kitchen Set Minimalis & Modern",
            description: "Custom kitchen set berbahan multipleks 18mm & PVC waterproof dengan finishing HPL atau Duco.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backdrop TV & Lemari Partisi Ruang",
            description: "Backdrop TV modern dengan kisi-kisi wall panel, storage terintegrasi, dan ambient LED strip.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lemari Bawah Tangga Custom",
            description: "Pemanfaatan sudut mati bawah tangga menjadi lemari simpan cerdas, rak sepatu, dan pantry.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Wardrobe & Lemari Pakaian",
            description: "Wardrobe full-plafon dengan pintu sliding kaca tinted atau swing profil mewah.",
          },
        },
      ],
    },
    sameAs: [
      "https://www.instagram.com/kitchensetsukabumi.id/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "Sundanese"],
    },
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
