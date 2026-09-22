import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Alur & Tahapan Kerja Pembuatan Kitchen Set | KitchenSetSukabumi.id",
  description:
    "9 tahapan kerja pembuatan kitchen set custom Sukabumi dari konsultasi awal, survey laser, desain 3D render, RAB transparan, produksi workshop, hingga instalasi dan garansi.",
};

export default function ProsesPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Tahapan Kerja" }]} />

        {/* Intro */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm space-y-4">
          <Badge variant="accent">Transparansi Penuh</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Alur Kerja Pembuatan Kitchen Set
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 max-w-3xl leading-relaxed font-sans">
            Kami menerapkan SOP manufaktur terstruktur agar Anda mendapatkan kepastian waktu, transparansi rincian biaya, dan ketepatan bahan tanpa kekhawatiran proyek terbengkalai.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-editorial-700">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              Rata-rata 14 - 25 Hari Kerja
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Survey Sukabumi Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Garansi Pemeliharaan 6 Bulan
            </span>
          </div>
        </div>

        {/* The 9-step timeline component */}
        <ProcessTimeline />

        {/* CTA */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Mulai Tahap 1 Anda Sekarang
          </h2>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-xl mx-auto">
            Sesi konsultasi pertama tidak mengikat dan bebas biaya. Diskusikan denah dan kebutuhan dapur Anda bersama konsultan kami.
          </p>
          <div className="pt-2">
            <Link href="/konsultasi">
              <Button variant="accent" size="lg">
                Jadwalkan Konsultasi & Survey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
