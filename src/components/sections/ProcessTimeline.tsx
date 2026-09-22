"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Konsultasi Gratis",
      duration: "1–3 Hari",
      desc: "Diskusikan kebutuhan ruang, fungsi, preferensi desain dan kisaran budget bersama tim KitchenSet Sukabumi tanpa biaya awal.",
      deliverable: "Rekomendasi konsep & estimasi biaya awal",
      note: "Konsultasi awal gratis tanpa komitmen",
      image: "/process/01-konsultasi.webp",
      alt: "Konsultasi awal desain kitchen set bersama klien",
      tag: "Tahap Konsep",
    },
    {
      num: "02",
      title: "Survei Lokasi",
      duration: "1–3 Hari",
      desc: "Tim melakukan pengukuran langsung dengan meteran laser serta memeriksa kondisi ruang, kontur dinding, pipa dan kelistrikan.",
      deliverable: "Pengukuran aktual & draft layout 2D",
      note: "Layout 2D gratis disiapkan pasca survei",
      image: "/process/02-survey.webp",
      alt: "Survei pengukuran presisi laser di lokasi klien",
      tag: "Pengukuran Presisi",
    },
    {
      num: "03",
      title: "Proses Desain",
      duration: "3–7 Hari",
      desc: "Layout 2D dikembangkan berdasarkan survei. Visualisasi 3D fotorealistik dilanjutkan setelah konfirmasi deposit desain dan penyusunan RAB transparan.",
      deliverable: "Visualisasi 3D render & RAB detail terkunci",
      note: "Deposit desain memotong nilai kontrak",
      image: "/process/03-design.webp",
      alt: "Pengembangan visualisasi render 3D kitchen set",
      tag: "Visualisasi 3D",
    },
    {
      num: "04",
      title: "Produksi",
      duration: "14–21 Hari Kerja",
      desc: "Setelah desain dan spesifikasi teknis disetujui, modul cabinetry diproduksi di workshop kami dengan standar multipleks 18mm dan QC bertahap.",
      deliverable: "Modul cabinetry presisi siap rakit",
      note: "DP 50% di awal, termin progres ±40%",
      image: "/process/04-produksi.webp",
      alt: "Fabrikasi modul kabinet di workshop Sukabumi",
      tag: "Fabrikasi Workshop",
    },
    {
      num: "05",
      title: "Instalasi & Serah Terima",
      duration: "1–5 Hari",
      desc: "Furniture dikirim ke lokasi hunian, dipasang rapi, dilakukan final adjustment engsel & rel, hingga penandatanganan Berita Acara Serah Terima (BAST).",
      deliverable: "Pemasangan rapi & sertifikat garansi",
      note: "Garansi pemeliharaan 6 bulan tertulis",
      image: "/process/05-instalasi.webp",
      alt: "Instalasi kabinet dan serah terima dokumen BAST",
      tag: "Serah Terima & Garansi",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 88%",
        },
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
      });

      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
          y: 32,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF8F3] border-b border-[#DCD5CA] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="process-header max-w-3xl mb-14 md:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8A6248]/10 border border-[#8A6248]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#8A6248]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6248]">
              ALUR KERJA TERSTRUKTUR · 5 TAHAP PRESISI
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#181715] tracking-[-0.03em] uppercase leading-[1.12]">
            5 Langkah Menuju{" "}
            <span className="font-serif italic font-normal text-[#8A6248] text-[1.08em] lowercase block sm:inline">
              interior yang siap digunakan.
            </span>
          </h2>
          <p className="text-[15.5px] text-[#5F5B54] leading-relaxed max-w-2xl font-sans">
            Alur kerja yang transparan, terjadwal, dan berorientasi pada kepastian spesifikasi material sejak awal sebelum produksi dimulai.
          </p>
        </div>

        {/* 5 MODERN ARCHITECTURAL PROCESS CARDS */}
        <div className="process-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 items-stretch">
          {steps.map((st) => (
            <div
              key={st.num}
              className="process-card group relative bg-white hover:bg-[#FAF8F3] border border-[#DCD5CA] hover:border-[#8A6248]/60 rounded-[20px] p-5 flex flex-col justify-between transition-all duration-500 shadow-[0_4px_20px_rgba(24,23,21,0.03)] hover:shadow-[0_16px_36px_rgba(138,98,72,0.12)] card-lift-60fps gpu-layer"
            >
              <div>
                {/* Card Top: Number & Duration Badge */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#EBE5DB]">
                  <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#8A6248]/10 text-[#8A6248] border border-[#8A6248]/20">
                    {st.num}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10.5px] font-mono font-semibold uppercase tracking-wider text-[#656159] bg-[#F4F1EA] px-2 py-0.5 rounded-full border border-[#E5DFD5]">
                    <Clock className="w-2.5 h-2.5 text-[#8A6248]" />
                    {st.duration}
                  </span>
                </div>

                {/* Step Photography Preview */}
                <div className="relative aspect-[16/11] w-full rounded-[12px] overflow-hidden my-4 border border-[#EAE4DA] bg-[#EBE7DF]">
                  <Image
                    src={st.image}
                    alt={st.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-1.5 rounded-[8px] glass-surface-dark text-white text-[10.5px] flex items-center justify-between shadow-ambient">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#DCD5CA]">
                      Tahap {st.num}
                    </span>
                    <span className="text-[10px] font-medium text-white/95 truncate">
                      {st.tag}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sans text-[17px] font-bold text-[#181715] group-hover:text-[#8A6248] transition-colors leading-snug tracking-tight uppercase">
                  {st.title}
                </h3>

                {/* Description */}
                <p className="text-[12.5px] text-[#5F5B54] leading-relaxed font-sans mt-2">
                  {st.desc}
                </p>

                {/* Deliverable & Note Box */}
                <div className="mt-4 pt-3 border-t border-[#EBE5DB] space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#8A6248]/10 text-[#8A6248] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-2 h-2" />
                    </span>
                    <span className="text-[11px] text-[#181715] font-semibold leading-tight">
                      {st.deliverable}
                    </span>
                  </div>
                  <div className="text-[10.5px] text-[#8A6248] font-mono pl-5 leading-tight">
                    {st.note}
                  </div>
                </div>
              </div>

              {/* Bottom Step Forward Indicator */}
              <div className="mt-4 pt-3 border-t border-[#F0EBE1] flex items-center justify-between text-[10.5px] font-mono text-[#8A6248]">
                <span className="tracking-wider">LANGKAH {st.num} / 05</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ARCHITECTURAL REASSURANCE & CTA BANNER */}
        <div className="mt-14 p-6 sm:p-8 rounded-[20px] bg-white border border-[#DCD5CA] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#8A6248] block">
              KONSULTASI AWAL BEBAS RISIKO
            </span>
            <h4 className="font-sans text-xl sm:text-2xl font-bold text-[#181715] tracking-tight">
              Ingin mulai merancang dapur atau interior rumah Anda?
            </h4>
            <p className="text-sm text-[#5F5B54] font-sans">
              Mulai dari survei pengukuran laser dan estimasi layout 2D tanpa biaya komitmen awal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={generateWhatsAppLink({
                service: "Konsultasi Alur Kerja Proyek",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Konsultasi WhatsApp
            </a>
            <Link
              href="/jadwalkan-survei"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#181715] hover:bg-[#8A6248] text-white text-xs font-bold uppercase tracking-wider transition-colors active:scale-[0.97]"
            >
              <Calendar className="w-4 h-4" />
              Jadwalkan Survei
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
