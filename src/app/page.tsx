import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { PaymentTransparencySection } from "@/components/sections/PaymentTransparencySection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { MaterialEducationSection } from "@/components/sections/MaterialEducationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FinalConversionSection } from "@/components/sections/FinalConversionSection";
import { FAQS_DATA } from "@/data/faqs";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Jasa Kitchen Set Sukabumi | Custom Interior & Kitchen Minimalis Modern",
  description:
    "Pusat pembuatan kitchen set custom berkualitas di Sukabumi. Menggunakan bahan multiplek 18mm, PVC board waterproof, finishing HPL Taco, survei lokasi gratis, dan garansi 6 bulan.",
  keywords: [
    "kitchen set sukabumi",
    "jasa kitchen set sukabumi",
    "harga kitchen set sukabumi",
    "kitchen set minimalis sukabumi",
    "kitchen set modern sukabumi",
    "kitchen set cisaat",
    "kitchen set cibadak",
    "kitchen set cicurug",
    "kitchen set palabuhanratu",
    "kitchen set sukaraja",
    "pembuatan kitchen set sukabumi",
    "tukang kitchen set sukabumi",
    "renovasi dapur sukabumi",
    "custom furniture sukabumi",
    "interior dapur sukabumi",
  ],
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_DATA.slice(0, 8).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero Section (Point 17) */}
      <HeroSection />

      {/* 2. Trust Strip (Point 18) */}
      <TrustStrip />

      {/* 3. About / Philosophy (Points 19-20) */}
      <AboutSection />

      {/* 4. Core Services / Layanan 01 - 05 */}
      <ServicesSection />

      {/* 5. Selected Projects / Portfolio (Points 28-29) */}
      <FeaturedPortfolio />

      {/* 6. 5-Step Process Timeline & Photographic Storytelling */}
      <ProcessTimeline />

      {/* 7. 6 Alasan Memilih KitchenSet Sukabumi & Conversion CTA */}
      <WhyUsSection />

      {/* 8. Payment Transparency (Point 31) */}
      <PaymentTransparencySection />

      {/* 8b. Transformasi Ruang / Before-After (Point 38) */}
      <BeforeAfterSection />

      {/* 9. Material Education & Explorer (Points 32-37) */}
      <MaterialEducationSection />

      {/* 10. FAQ Accordion - 8 Mandatory Items (Point 39) */}
      <FAQSection />

      {/* 11. Instagram / Social Proof (Point 52) */}
      <InstagramSection />

      {/* 12. Final Consultation CTA (Point 40) */}
      <FinalConversionSection />
    </>
  );
}
