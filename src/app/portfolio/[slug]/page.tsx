import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS_DATA } from "@/data/projects";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import {
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Clock,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Proyek Kitchen Set Sukabumi" };

  return {
    title: `${project.title} | KitchenSetSukabumi.id`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 3);

  const waPrefill = generateWhatsAppLink({
    location: project.location,
    service: project.title,
    customMessage: `Halo Kitchen Set Sukabumi, saya melihat portofolio proyek "${project.title}" di website. Dapur di rumah saya memiliki kondisi dan ukuran yang mirip. Apakah bisa dijadwalkan konsultasi dan survey ke lokasi saya?`,
  });

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb
          items={[
            { name: "Portofolio", href: "/portfolio" },
            { name: project.title },
          ]}
        />

        {/* Project Header & Meta */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-editorial-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {project.location}, {project.city}
            </Badge>
            <Badge variant="secondary" className="uppercase text-[10px]">
              {project.style} Style
            </Badge>
            <Badge variant="secondary" className="uppercase text-[10px]">
              Layout {project.layout.replace("_", " ")}
            </Badge>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-editorial-700 leading-relaxed font-sans max-w-4xl">
            {project.summary}
          </p>

          {/* Key Specs Strip */}
          <div className="pt-6 border-t border-editorial-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-editorial-400 font-medium block">Tahun Selesai</span>
              <span className="font-semibold text-editorial-900 flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-editorial-400 font-medium block">Durasi Pengerjaan</span>
              <span className="font-semibold text-editorial-900 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {project.duration || "18 Hari"}
              </span>
            </div>
            <div>
              <span className="text-editorial-400 font-medium block">Top Table</span>
              <span className="font-semibold text-editorial-900 flex items-center gap-1.5 mt-0.5 truncate">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                {project.topTable || "Granit Hitam"}
              </span>
            </div>
            <div>
              <span className="text-editorial-400 font-medium block">Garansi</span>
              <span className="font-semibold text-editorial-900 flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Pemeliharaan 6 Bulan
              </span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-card border border-editorial-200 bg-editorial-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Storytelling Section (Section 14.2: Challenge -> Approach -> Execution -> Result) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-editorial-200 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-editorial-900 border-b border-editorial-100 pb-3">
                Kisah & Alur Solusi Proyek
              </h2>

              {/* 1. Challenge */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="font-serif text-base font-bold text-editorial-900 uppercase tracking-wide">
                    Tantangan Ruang (The Challenge)
                  </h3>
                </div>
                <p className="text-sm text-editorial-700 pl-8 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* 2. Approach */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h3 className="font-serif text-base font-bold text-editorial-900 uppercase tracking-wide">
                    Pendekatan Desain (The Approach)
                  </h3>
                </div>
                <p className="text-sm text-editorial-700 pl-8 leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* 3. Execution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h3 className="font-serif text-base font-bold text-editorial-900 uppercase tracking-wide">
                    Eksekusi Teknis & Fabrikasi (Execution)
                  </h3>
                </div>
                <p className="text-sm text-editorial-700 pl-8 leading-relaxed">
                  {project.execution}
                </p>
              </div>

              {/* 4. Result */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  <h3 className="font-serif text-base font-bold text-emerald-900 uppercase tracking-wide">
                    Hasil Akhir & Manfaat (The Result)
                  </h3>
                </div>
                <p className="text-sm text-editorial-800 pl-8 leading-relaxed font-medium bg-emerald-50/50 p-4 rounded-xl border border-emerald-200/60">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Gallery Shots */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-editorial-900">
                  Galeri Detail Pekerjaan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.slice(1).map((img) => (
                    <div
                      key={img.id}
                      className="rounded-xl overflow-hidden border border-editorial-200 bg-editorial-100 relative aspect-[4/3] group shadow-sm"
                    >
                      <Image
                        src={img.imageUrl}
                        alt={img.altText}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {img.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-2.5 text-white text-[11px]">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Specifications & Contextual CTA (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Technical Spec Card */}
            <div className="bg-white rounded-2xl p-6 border border-editorial-200 shadow-sm space-y-4">
              <h3 className="font-serif text-base font-bold text-editorial-900 border-b border-editorial-100 pb-2.5">
                Spesifikasi Teknis
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-editorial-400 font-medium block">Material Utama:</span>
                  <ul className="mt-1 space-y-1">
                    {project.materials.map((m, i) => (
                      <li key={i} className="font-semibold text-editorial-800 flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-editorial-400 font-medium block">Finishing Pintu & Luar:</span>
                  <ul className="mt-1 space-y-1">
                    {project.finishes.map((f, i) => (
                      <li key={i} className="font-semibold text-editorial-800 flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-editorial-400 font-medium block">Hardware / Aksesoris:</span>
                  <p className="font-semibold text-editorial-800 mt-1">{project.hardware}</p>
                </div>

                <div>
                  <span className="text-editorial-400 font-medium block">Ruang Lingkup (Scope):</span>
                  <ul className="mt-1 space-y-1">
                    {project.scope.map((s, i) => (
                      <li key={i} className="text-editorial-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contextual CTA Box (PRD Section 14.4) */}
            <div className="bg-primary text-white rounded-2xl p-6 shadow-md space-y-4">
              <Badge variant="accent" className="bg-accent/20 text-accent-light border-accent/40 font-semibold">
                Konsultasi Serupa
              </Badge>
              <h3 className="font-serif text-lg font-bold leading-snug">
                Punya ukuran atau kondisi dapur yang mirip?
              </h3>
              <p className="text-xs text-editorial-200 leading-relaxed">
                Diskusikan bersama konsultan desain kami untuk mendapatkan simulasi tata letak dan estimasi anggaran presisi.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={waPrefill}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Konsultasikan Proyek Serupa
                </a>
                <Link
                  href="/konsultasi"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                >
                  Isi Form Kualifikasi
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="pt-10 border-t border-editorial-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-editorial-900">
              Lihat Proyek Lainnya di Sukabumi
            </h3>
            <Link href="/portfolio" className="text-xs font-semibold text-accent hover:underline">
              Semua Portofolio &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <Card key={p.id} className="border border-editorial-200">
                <div className="relative aspect-[16/11]">
                  <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-accent">{p.location}</span>
                  <h4 className="font-serif text-sm font-bold text-editorial-900 line-clamp-1">{p.title}</h4>
                  <Link
                    href={`/portfolio/${p.slug}`}
                    className="text-xs font-semibold text-editorial-900 hover:text-accent inline-flex items-center gap-1"
                  >
                    Buka Detail &rarr;
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
