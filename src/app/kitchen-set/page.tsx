import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { PROJECTS_DATA } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import {
  Ruler,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Layout,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kitchen Set Custom Sukabumi - Desain, Material & Pembuatan",
  description:
    "Jasa pembuatan kitchen set custom minimalis, modern, letter-L, dan island di Sukabumi. Material multiplek 18mm, engsel soft-close, survey gratis dan 3D render.",
};

export default function KitchenSetPage() {
  const layouts = [
    {
      name: "Letter L (Sudut)",
      slug: "letter-l",
      desc: "Optimal untuk memanfaatkan sudut ruang dapur, memisahkan area kompor dan wastafel dengan alur kerja efisien.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Straight (Single Line Lurus)",
      slug: "straight",
      desc: "Pilihan terbaik untuk lorong dapur rumah tipe 36 atau 45 agar lalu lalang tetap lapang dan tidak terhalang.",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Letter U",
      slug: "letter-u",
      desc: "Memberikan ruang penyimpanan maksimal dan meja saji terluas bagi keluarga yang hobi baking dan memasak rutin.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dengan Meja Island",
      slug: "island",
      desc: "Menghadirkan kesan mewah modern, berfungsi ganda sebagai meja bar sarapan, saji, dan pusat kumpul keluarga.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Breadcrumb items={[{ name: "Kitchen Set" }]} />

        {/* Hero Spesifik Kitchen Set */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="accent">Commercial Hub &bull; Kitchen Set Custom</Badge>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight leading-tight">
              Spesialis Kitchen Set Custom Berkualitas &amp; Bergaransi di Sukabumi
            </h1>
            <p className="text-sm sm:text-base text-editorial-700 leading-relaxed font-sans">
              Setiap dapur dirancang khusus berdasarkan ukuran riil dinding rumah Anda, kebutuhan alat masak, dan alur pergerakan kerja (work triangle). Menggunakan bahan Multiplek 18mm berkualitas tinggi dan finishing rapi bergaransi.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/konsultasi">
                <Button variant="primary" size="lg">
                  Konsultasikan Dapur Saya
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/estimator">
                <Button variant="outline" size="lg">
                  Hitung Estimasi Biaya
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
              alt="Kitchen Set Sukabumi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Section 2: Pilihan Bentuk Layout Dapur */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="accent">Pilihan Layout</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-editorial-900">
              Menentukan Tata Letak yang Tepat untuk Ruang Anda
            </h2>
            <p className="text-xs sm:text-sm text-editorial-600">
              Layout yang tepat menjamin kenyamanan memasak tanpa rasa sumpek atau tabrakan pintu lemari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layouts.map((item) => (
              <Card key={item.slug} className="group border border-editorial-200">
                <div className="relative aspect-[16/10] overflow-hidden bg-editorial-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2.5">
                  <h3 className="font-serif text-base font-bold text-editorial-900">
                    {item.name}
                  </h3>
                  <p className="text-xs text-editorial-600 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/kitchen-set/${item.slug}`}
                      className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      Lihat Inspirasi {item.name} &rarr;
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 3: Proyek Kitchen Set Nyata */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-editorial-900">
                Hasil Proyek Kitchen Set Nyata
              </h2>
              <p className="text-xs text-editorial-600">
                Dokumentasi pekerjaan terpasang di Sukabumi
              </p>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-semibold text-accent hover:underline"
            >
              Semua Proyek &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_DATA.filter((p) => p.projectType === "kitchen_set")
              .slice(0, 3)
              .map((p) => (
                <Card key={p.id} className="border border-editorial-200">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-accent">
                      {p.location}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-editorial-900 line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-xs text-editorial-600 line-clamp-2">
                      {p.summary}
                    </p>
                    <Link
                      href={`/portfolio/${p.slug}`}
                      className="text-xs font-semibold text-editorial-900 hover:text-accent pt-2 inline-flex items-center gap-1"
                    >
                      Lihat Detail & Spesifikasi &rarr;
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* CTA Bottom Strip */}
        <div className="bg-editorial-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Ingin Tahu Berapa Biaya Kitchen Set untuk Ukuran Dapur Anda?
          </h2>
          <p className="text-xs sm:text-sm text-editorial-300 max-w-xl mx-auto">
            Gunakan kalkulator estimasi kami atau jadwalkan survey pengukuran gratis oleh tim ahli ke rumah Anda.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/estimator">
              <Button variant="accent" size="md">
                Buka Kalkulator Estimasi
              </Button>
            </Link>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="md">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat WhatsApp Desainer
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
