import React from "react";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export function PaymentTransparencySection() {
  const steps = [
    {
      step: "01",
      name: "Konsultasi",
      desc: "Gratis & tanpa komitmen",
    },
    {
      step: "02",
      name: "Deposit Desain",
      desc: "Untuk visualisasi render 3D",
    },
    {
      step: "03",
      name: "DP Produksi 50%",
      desc: "Saat desain & spesifikasi disetujui",
    },
    {
      step: "04",
      name: "Termin ±40%",
      desc: "Saat progres produksi berjalan",
    },
    {
      step: "05",
      name: "Pelunasan",
      desc: "Sebelum/saat proses serah terima",
    },
    {
      step: "06",
      name: "Garansi 6 Bulan",
      desc: "Pendampingan pemeliharaan",
    },
  ];

  return (
    <section className="py-16 bg-[#F4F1EA] border-b border-[#D8D2C7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-[16px] bg-[#FAF8F4] border border-[#D8D2C7] shadow-ambient space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] block">
                TRANSPARANSI PEMBAYARAN
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#191816]">
                Sistem Pembayaran yang Jelas Sejak Awal.
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6B63] max-w-xl">
                Detail nilai pembayaran mengikuti RAB dan ruang lingkup proyek yang disepakati tanpa biaya siluman.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#191816] bg-[#F4F1EA] px-4 py-2 rounded-full border border-[#D8D2C7]">
              <ShieldCheck className="w-4 h-4 text-[#486B56]" />
              <span>Garansi Pemeliharaan 6 Bulan</span>
            </div>
          </div>

          {/* Flow visual (Point 31) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {steps.map((st, idx) => (
              <div
                key={st.step}
                className="p-4 rounded-[12px] bg-[#F4F1EA] border border-[#D8D2C7] space-y-1.5 relative"
              >
                <span className="font-mono text-[10px] font-bold text-[#A86E4C] block">
                  Tahap {st.step}
                </span>
                <h4 className="font-sans text-sm font-bold text-[#191816]">
                  {st.name}
                </h4>
                <p className="text-[11px] text-[#6F6B63] leading-snug">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#D8D2C7] text-xs text-[#6F6B63] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              Semua rincian item, tipe rel, jenis HPL/cat, dan aksesoris tercantum transparan dalam RAB proyek.
            </span>
            <span className="font-medium text-[#191816]">
              RAB Dikunci Sebelum Pemotongan Bahan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
