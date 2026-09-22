import React from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";

export function BudgetEducationSection() {
  const costFactors = [
    {
      num: "01",
      title: "Panjang Meter Lari & Ketinggian Plafon",
      desc: "Dihitung per meter lari kabinet bawah dan atas. Kabinet gantung full plafon memerlukan perhitungan presisi serta volume material ekstra.",
    },
    {
      num: "02",
      title: "Spesifikasi Material & Jenis Finishing",
      desc: "Multiplek 18mm Meranti vs HMR hijau anti-lembap. Finishing HPL wood/solid matte populer atau cat Duco PU berprofil mewah.",
    },
    {
      num: "03",
      title: "Aksesoris Interior & Mekanisme Rel",
      desc: "Semua kabinet sudah ber-engsel hidrolik soft-close. Tambahan rak piring tarik stainless dan lampu LED strip disesuaikan kebutuhan.",
    },
    {
      num: "04",
      title: "Finishing Top Table Batu Alam vs Solid Surface",
      desc: "Granit alam hitam Nero Absoluto yang tahan panas tinggi, atau Solid Surface akrilik higienis dengan sambungan tanpa garis.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-hairline">
      <div className="max-w-architectural mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-terracotta">
              07 / Transparansi Anggaran
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-ink tracking-tight uppercase leading-[1.15]">
              Harga Kitchen Set Dibentuk Oleh{" "}
              <span className="font-serif italic font-normal text-walnut lowercase block sm:inline">
                faktor akurat bukan sekadar panjang meteran.
              </span>
            </h2>

            <p className="text-[15px] text-ink-soft leading-relaxed font-sans">
              Banyak vendor menawarkan &ldquo;Rp1.7jt/meter netto&rdquo; tapi begitu diukur, total melonjak drastis karena belum termasuk aksesoris, jenis top table, dan penyesuaian lapangan. Kami mengedepankan transparansi sejak awal.
            </p>

            {/* Formula box */}
            <div className="p-5 rounded-[16px] bg-surface border border-hairline space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-terracotta block">
                Rumus Estimasi Awal Kami:
              </span>
              <p className="text-sm font-medium text-ink leading-relaxed">
                (Panjang kabinet bawah + atas) &times; Rp 1.950.000 + pilihan material & top table = estimasi presisi tanpa jebakan biaya tersembunyi.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/estimator"
                className="inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-ink-soft rounded-[12px] px-6 py-3.5 text-sm font-semibold transition-all shadow-sm"
              >
                <Calculator className="w-4 h-4" />
                Hitung Kebutuhan Awal Dapur
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/konsultasi"
                className="inline-flex items-center justify-center gap-2 border border-hairline bg-surface hover:bg-surface-high text-ink rounded-[12px] px-6 py-3.5 text-sm font-semibold transition-all"
              >
                Konsultasi Budget Khusus
              </Link>
            </div>
          </div>

          {/* Right numbered cost factor rows */}
          <div className="lg:col-span-7 space-y-4">
            {costFactors.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-[16px] bg-surface border border-hairline transition-all duration-200 hover:border-walnut/40 flex items-start gap-5"
              >
                <span className="font-mono text-xs font-bold text-terracotta shrink-0 pt-0.5">
                  {item.num}
                </span>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-sans text-base font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
