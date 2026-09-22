import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Layanan Desain Interior & Kitchen Set Custom Sukabumi",
  description:
    "Layanan komprehensif kitchen set custom, renovasi dapur lama, interior rumah tinggal, dan lemari pakaian (wardrobe) custom di Kota dan Kabupaten Sukabumi.",
};

export default function LayananPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Layanan" }]} />

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm space-y-4">
          <Badge variant="accent">Solusi Interior & Dapur</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Layanan Custom Interior & Kitchen Set Sukabumi
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 max-w-3xl leading-relaxed font-sans">
            Kami menghadirkan keahlian rancang bangun interior untuk hunian pribadi, villa, dan properti komersial. Setiap proyek dikerjakan dengan standar bahan multiplek kokoh, visualisasi 3D akurat, serta jaminan garansi purna jual.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className={`bg-white rounded-2xl border border-editorial-200 p-6 sm:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <Badge variant="outline" className="text-[11px] font-medium text-editorial-700">
                  Layanan #{idx + 1}
                </Badge>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-editorial-900">
                  {srv.title}
                </h2>
                <p className="text-xs font-semibold text-accent-dark bg-accent/5 p-3 rounded-lg border border-accent/15">
                  &ldquo;{srv.oneLineBenefit}&rdquo;
                </p>
                <p className="text-sm text-editorial-600 leading-relaxed">
                  {srv.shortDesc}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-editorial-800 mb-2">
                    Fitur & Keunggulan:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-editorial-700">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <Link href={`/layanan/${srv.slug}`}>
                    <Button variant="primary" size="md">
                      Pelajari Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </Link>
                  <Link href="/konsultasi">
                    <Button variant="outline" size="md">
                      Konsultasi Layanan Ini
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={srv.heroImage}
                  alt={srv.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
