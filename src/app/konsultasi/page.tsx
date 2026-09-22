import React from "react";
import { Metadata } from "next";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Ruler, Calendar, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Konsultasi & Jadwalkan Survey Dapur Sukabumi | KitchenSetSukabumi.id",
  description:
    "Formulir pendaftaran konsultasi desain kitchen set dan survey lokasi gratis ke rumah Anda di wilayah Kota Sukabumi dan Kabupaten Sukabumi.",
};

export default function KonsultasiPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Konsultasi & Survey" }]} />

        {/* Introduction */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="accent">Jalur Konsultasi Resmi</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Konsultasikan Kebutuhan Dapur Anda
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 font-sans">
            Lengkapi formulir singkat di bawah ini. Tim teknisi desainer kami akan meninjau estimasi anggaran dan mengatur jadwal survey lokasi tanpa biaya di wilayah Sukabumi.
          </p>
        </div>

        {/* Multi-step Form */}
        <ConsultationForm />

        {/* Trust Points */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
          <div className="space-y-1">
            <Ruler className="w-5 h-5 text-accent mx-auto" />
            <h4 className="font-serif text-xs font-bold text-editorial-900">Survey Laser Akurat</h4>
            <p className="text-[11px] text-editorial-600">Pengukuran presisi sampai milimeter</p>
          </div>
          <div className="space-y-1">
            <Sparkles className="w-5 h-5 text-accent mx-auto" />
            <h4 className="font-serif text-xs font-bold text-editorial-900">Desain 3D Fotorealistik</h4>
            <p className="text-[11px] text-editorial-600">Visualisasi jelas sebelum diproduksi</p>
          </div>
          <div className="space-y-1">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto" />
            <h4 className="font-serif text-xs font-bold text-editorial-900">Garansi Purna Jual</h4>
            <p className="text-[11px] text-editorial-600">Garansi pemeliharaan 6 bulan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
