import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";
import { FAQS_DATA } from "@/data/faqs";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Pertanyaan yang Sering Diajukan (FAQ) | Kitchen Set Sukabumi",
  description:
    "Jawaban lengkap seputar biaya kitchen set per meter lari di Sukabumi, survey gratis, garansi, sistem pembayaran, dan pemilihan bahan anti rayap.",
  keywords: [
    "faq kitchen set sukabumi",
    "biaya kitchen set per meter sukabumi",
    "harga permeter kitchen set sukabumi",
    "tanya jawab kitchen set sukabumi",
    "garansi kitchen set sukabumi",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
};

export default function FAQPage() {
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
        name: "FAQ",
        item: `${SITE_CONFIG.url}/faq`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumb items={[{ name: "FAQ" }]} />
        <FAQSection />
      </div>
    </div>
  );
}

