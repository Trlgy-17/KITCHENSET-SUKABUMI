import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimoni & Pengalaman Konsumen Kitchen Set Sukabumi",
  description:
    "Ulasan asli dari pemilik rumah di Kota Sukabumi, Cisaat, Cibadak, Selabintana yang telah mempercayakan pengerjaan kitchen set dan interior mereka kepada kami.",
};

export default function TestimoniPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Testimoni" }]} />

        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="accent">Kepuasan Pelanggan Sukabumi</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-editorial-900 tracking-tight">
            Ulasan Asli Pemilik Rumah di Sukabumi
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 font-sans">
            Keberhasilan setiap proyek kami ukur dari senyuman keluarga saat pertama kali menggunakan dapur baru mereka.
          </p>

          <div className="pt-2 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-editorial-800 ml-2">5.0 / 5.0 Rating Kepuasan</span>
          </div>
        </div>

        <TestimonialsSection />

        <div className="bg-editorial-900 text-white rounded-2xl p-8 text-center space-y-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            Ingin Dapur Rumah Anda Menjadi Kisah Sukses Berikutnya?
          </h3>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-lg mx-auto">
            Konsultasikan kebutuhan Anda bersama desainer kami sekarang. Jadwalkan survey pengukuran tanpa biaya untuk wilayah Sukabumi.
          </p>
          <div className="pt-2">
            <Link href="/konsultasi">
              <Button variant="accent" size="md">
                Jadwalkan Survey Lokasi Anda
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
