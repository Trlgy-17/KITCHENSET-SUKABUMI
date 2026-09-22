import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Pertanyaan yang Sering Diajukan (FAQ) | Kitchen Set Sukabumi",
  description:
    "Jawaban lengkap seputar biaya kitchen set per meter lari di Sukabumi, survey gratis, garansi, sistem pembayaran, dan pemilihan bahan anti rayap.",
};

export default function FAQPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumb items={[{ name: "FAQ" }]} />
        <FAQSection />
      </div>
    </div>
  );
}
