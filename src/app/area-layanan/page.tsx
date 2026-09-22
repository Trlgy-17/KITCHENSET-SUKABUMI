import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICE_AREAS } from "@/data/areas";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Wilayah Area Layanan Kitchen Set Sukabumi & Sekitarnya",
  description:
    "Cakupan wilayah survey dan pembuatan kitchen set custom di Kota Sukabumi, Cisaat, Cibadak, Cicurug, Parungkuda, hingga Palabuhanratu.",
};

export default function AreaLayananPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Area Layanan" }]} />

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm space-y-4">
          <Badge variant="accent">Jangkauan Wilayah Layanan</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Area Layanan Kitchen Set & Interior di Sukabumi
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 max-w-3xl leading-relaxed font-sans">
            Dengan workshop yang berlokasi di Sukabumi, tim teknisi dan desainer kami siap menjangkau kediaman Anda untuk pengukuran akurat, pengantaran modul kabinet, hingga perakitan langsung di lokasi.
          </p>
        </div>

        {/* Grid of Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area) => (
            <Card key={area.slug} className="group border border-editorial-200 bg-white flex flex-col justify-between">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-editorial-100 text-accent">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <Badge variant="secondary" className="text-[10px]">
                    {area.badge}
                  </Badge>
                </div>

                <h2 className="font-serif text-xl font-bold text-editorial-900 group-hover:text-accent transition-colors">
                  {area.name}
                </h2>

                <p className="text-xs text-editorial-600 leading-relaxed line-clamp-3">
                  {area.intro}
                </p>

                <div className="pt-3 border-t border-editorial-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-editorial-800 block">
                    Cakupan Kecamatan & Kelurahan:
                  </span>
                  <ul className="text-[11px] text-editorial-600 space-y-1">
                    {area.coverageDetail.slice(0, 3).map((cov, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{cov}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/area-layanan/${area.slug}`}
                  className="w-full inline-flex items-center justify-between py-2 px-4 rounded-lg bg-editorial-100 hover:bg-editorial-200 text-editorial-800 text-xs font-semibold transition-colors"
                >
                  <span>Lihat Layanan {area.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
