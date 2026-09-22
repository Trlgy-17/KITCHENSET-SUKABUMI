import React from "react";
import { Metadata } from "next";
import { BudgetEstimator } from "@/components/estimator/BudgetEstimator";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kalkulator Estimasi Biaya Kitchen Set Sukabumi | KitchenSetSukabumi.id",
  description:
    "Hitung perkiraan biaya pembuatan kitchen set custom Anda di Sukabumi berdasarkan bentuk layout, panjang meter lari, material multiplek, dan pilihan top table.",
};

export default function EstimatorPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Kalkulator Estimasi Biaya" }]} />

        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="accent">Alat Transparansi Biaya</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Kalkulator Estimasi Kitchen Set Sukabumi
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 font-sans">
            Dapatkan gambaran realistis biaya dapur Anda dalam hitungan detik sebelum memutuskan berkonsultasi lebih lanjut.
          </p>
        </div>

        {/* Interactive Calculator Component */}
        <BudgetEstimator />

        {/* Supporting Educational Content under the Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white rounded-xl p-6 border border-editorial-200 space-y-2">
            <h3 className="font-serif text-base font-bold text-editorial-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Formula Meter Lari (m1)
            </h3>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Dihitung berdasarkan panjang horizontal dinding dapur. 1 meter lari sudah mencakup struktur rangka, ambalan laci, dan pintu kabinet.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 space-y-2">
            <h3 className="font-serif text-base font-bold text-editorial-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Tanpa Serbuk Kayu Murahan
            </h3>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Perhitungan kami mengacu pada standar Multiplek Meranti 18mm atau HMR tahan air, bukan serbuk kayu MDF tipis yang rentan hancur.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 space-y-2">
            <h3 className="font-serif text-base font-bold text-editorial-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-primary" />
              Langkah Setelah Menghitung
            </h3>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Kirimkan hasil simulasi ke WhatsApp kami untuk penjadwalan survey lokasi dan pembuatan desain 3D gratis ke rumah Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
