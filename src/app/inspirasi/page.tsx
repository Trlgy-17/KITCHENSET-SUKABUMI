import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ARTICLES_DATA } from "@/data/articles";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspirasi & Tips Desain Kitchen Set Sukabumi",
  description:
    "Kumpulan artikel, tips menata dapur mungil tipe 36, panduan menghitung biaya per meter lari, dan rekomendasi material kitchen set awet di Sukabumi.",
};

export default function InspirasiPage() {
  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Inspirasi & Edukasi" }]} />

        {/* Header */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-sm space-y-4">
          <Badge variant="accent">Pusat Edukasi Konsumen</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Inspirasi & Panduan Kitchen Set
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 max-w-3xl leading-relaxed font-sans">
            Pelajari wawasan praktis seputar tata letak ergonomis, pemilihan bahan yang tidak mudah lapuk, trik menghemat anggaran tanpa mengurangi kualitas, serta tren interior dapur modern di Sukabumi.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((art) => (
            <Card key={art.slug} className="group border border-editorial-200 bg-white flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-editorial-100">
                  <Image
                    src={art.coverImage}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-editorial-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-editorial-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.publishedAt}
                    </span>
                  </div>

                  <h2 className="font-serif text-base font-bold text-editorial-900 group-hover:text-accent transition-colors line-clamp-2">
                    {art.title}
                  </h2>

                  <p className="text-xs text-editorial-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/inspirasi/${art.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-editorial-800 hover:text-accent pt-3 border-t border-editorial-100 transition-colors"
                >
                  <span>Baca Selengkapnya</span>
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
