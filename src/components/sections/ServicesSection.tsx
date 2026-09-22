"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const otherServices = [
    {
      num: "02",
      tag: "Perencanaan Ruang & Konsep",
      title: "Interior Design",
      image: "/process/03-design.webp",
      imageBadge: "Visualisasi 3D & Denah ME",
      desc: "Perencanaan ruang yang mempertimbangkan sirkulasi, proporsi, kapasitas penyimpanan, material, warna dan pencahayaan sebelum masuk ke tahap produksi agar setiap keputusan desain memiliki dasar yang terukur.",
      scope: [
        "Studi layout & sirkulasi ruang",
        "Material moodboard & sample palette",
        "Visualisasi render 3D setelah deposit",
        "Gambar kerja teknis & denah ME",
      ],
    },
    {
      num: "03",
      tag: "Dari Konsep Hingga Instalasi",
      title: "Design & Build",
      image: "/about/workshop-fabrikasi.webp",
      imageBadge: "Fabrikasi & Pengawasan Berkala",
      desc: "Layanan terintegrasi satu pintu mulai dari pengembangan konsep desain, perencanaan teknis, pemilihan material, fabrikasi workshop, pengawasan berkala hingga instalasi akhir di lokasi Anda.",
      scope: [
        "Project coordination satu pintu",
        "Rincian Anggaran Biaya (RAB) transparan",
        "Quality control bertahap di workshop",
        "Produksi & instalasi terpadu",
        "Garansi pemeliharaan 6 bulan",
      ],
    },
    {
      num: "04",
      tag: "Transformasi Ruang Eksisting",
      title: "Renovation",
      image: "/portfolio/before-after/after.webp",
      imageBadge: "Transformasi Ruang Eksisting",
      desc: "Penyesuaian atau pembaruan ruang yang mempertimbangkan kondisi eksisting, layout baru, finishing, pencahayaan, dan kebutuhan utilitas pipa maupun kelistrikan terkait desain.",
      scope: [
        "Existing condition review di lokasi",
        "Layout optimization ruang lama",
        "Koordinasi utilitas pipa & listrik",
        "Solusi pembongkaran / meja cor lama",
        "Finishing dinding & lighting",
      ],
    },
    {
      num: "05",
      tag: "Furniture Dibuat Mengikuti Ruang",
      title: "Custom Furniture",
      image: "/portfolio/drive/wardrobe/wardrobe-1.webp",
      imageBadge: "Bespoke Built-in Cabinetry",
      desc: "Furniture custom dibuat berdasarkan dimensi aktual dan kebutuhan spesifik ruang agar fungsi penyimpanan dan karakter visual menyatu harmonis dengan arsitektur interior hunian Anda.",
      scope: [
        "Wardrobe & lemari full plafon",
        "Bedroom cabinetry & meja vanity",
        "Backdrop TV & kisi-kisi kayu",
        "Lemari bawah tangga built-in",
        "Penyimpanan utilitas & pantry",
      ],
    },
  ];

  // GSAP ScrollTrigger for staggered editorial reveals
  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".service-header", {
        scrollTrigger: {
          trigger: ".service-header",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".service-primary", {
        scrollTrigger: {
          trigger: ".service-primary",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-cards-container",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F4F1EA] border-b border-[#DCD5CA]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="service-header max-w-3xl mb-16 md:mb-20 space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6248] block">
            LAYANAN
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#181715] tracking-[-0.03em] uppercase leading-[1.12]">
            Dari Kitchen Set hingga{" "}
            <span className="font-serif italic font-normal text-[#8A6248] text-[1.08em] lowercase block sm:inline">
              interior yang dirancang menyatu dengan ruang.
            </span>
          </h2>
          <p className="text-[15.5px] text-[#5F5B54] leading-relaxed max-w-2xl font-sans">
            KitchenSet Sukabumi menangani proses mulai dari perencanaan, desain, pemilihan material, produksi furniture custom hingga instalasi di lokasi.
          </p>
        </div>

        {/* 01 PRIMARY SERVICE: KITCHEN SET CUSTOM */}
        <div className="service-primary border-t border-[#DCD5CA] pt-12 md:pt-16 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Content & Specifications */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-[#8A6248] tracking-wider">
                  01
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DCD5CA]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8A6248]">
                  PRIMARY SERVICE · FOKUS UTAMA
                </span>
              </div>

              <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#181715] tracking-tight uppercase leading-tight">
                Kitchen Set Custom
              </h3>

              <p className="text-[15.5px] text-[#5F5B54] leading-relaxed font-sans max-w-xl">
                Perencanaan dan produksi kitchen set yang dibuat berdasarkan ukuran aktual ruangan, kebutuhan storage, pola aktivitas memasak pengguna, pilihan material, dan karakter visual interior.
              </p>

              {/* Service Scope */}
              <div className="pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#181715] block mb-3">
                  Cakupan Pengerjaan:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[13.5px] text-[#474741] font-sans">
                  {[
                    "Kitchen & tall cabinet",
                    "Upper & lower cabinet",
                    "Pantry & island table",
                    "Countertop integration",
                    "Storage optimization",
                    "Lighting & finishing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-[#8A6248]/10 text-[#8A6248] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs with micro-interactions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={generateWhatsAppLink({
                    service: "Kitchen Set Custom",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[10px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Konsultasikan Kitchen Anda
                </a>
                <Link
                  href="/jadwalkan-survei"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-[#181715] hover:bg-[#8A6248] text-white text-xs font-bold uppercase tracking-wider transition-colors active:scale-[0.97]"
                >
                  Jadwalkan Survei
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Architectural Specification Block */}
              <div className="pt-6 border-t border-[#DCD5CA] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.16em] text-[#8A6248]">
                    STANDAR PENGERJAAN KAMI
                  </span>
                  <span className="text-[11px] font-semibold text-[#181715] tracking-wide">
                    Garansi 6 Bulan Pemeliharaan
                  </span>
                </div>
                <p className="text-xs text-[#6F6B63] leading-relaxed">
                  Setiap modul dibuat dengan material sesuai spesifikasi proyek (Multipleks 18mm atau HMR/PVC waterproof), engsel hidrolik soft-close, melalui pengukuran laser langsung di lokasi sebelum masuk proses produksi workshop.
                </p>
              </div>
            </div>

            {/* Right: Large Authentic Kitchen Photography with 60fps card lift */}
            <div className="lg:col-span-5 relative gpu-layer">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] rounded-[16px] overflow-hidden border border-[#DCD5CA] bg-[#FAF8F3] shadow-ambient group card-lift-60fps">
                <Image
                  src="/portfolio/local/kitchenset/kitchenset-10-2.webp"
                  alt="Kitchen Set Custom Sukabumi dengan integrasi island dan pencahayaan kabinet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-[12px] glass-surface-dark text-white text-xs flex items-center justify-between shadow-ambient">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#DCD5CA]">
                    Proyek Nyata Sukabumi
                  </span>
                  <span className="text-[11px] font-medium text-white/90">
                    Multipleks 18mm · Island Table
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER SERVICES (02 - 05): MODERN ARCHITECTURAL CARDS GRID */}
        <div className="pt-16 md:pt-20 border-t border-[#DCD5CA]">
          {/* Subheader */}
          <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#8A6248] block mb-2">
                SOLUSI RUANG & INTERIOR TERPADU
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#181715] tracking-tight uppercase">
                Layanan Spesialisasi Kami Lainnya
              </h3>
            </div>
            <p className="text-sm text-[#5F5B54] max-w-md font-sans leading-relaxed">
              Dari visualisasi 3D presisi, manajemen design & build menyeluruh, renovasi ruang lama, hingga modul furniture built-in terpasang sempurna.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="service-cards-container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {otherServices.map((srv) => (
              <div
                key={srv.num}
                className="service-card group relative bg-[#FAF8F3] hover:bg-white border border-[#DCD5CA] hover:border-[#8A6248]/50 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_4px_20px_rgba(24,23,21,0.03)] hover:shadow-[0_16px_40px_rgba(138,98,72,0.12)] card-lift-60fps gpu-layer"
              >
                <div>
                  {/* Card Header: Number & Tag */}
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#EBE5DB]">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#8A6248]/10 text-[#8A6248] border border-[#8A6248]/20">
                        {srv.num}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#656159]">
                        {srv.tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8A6248] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                      TERVERIFIKASI
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-sans text-2xl sm:text-[26px] font-bold text-[#181715] tracking-tight uppercase group-hover:text-[#8A6248] transition-colors">
                    {srv.title}
                  </h4>

                  {/* Authentic Photography Preview */}
                  <div className="relative aspect-[16/9] w-full rounded-[14px] overflow-hidden my-5 border border-[#E5DFD5] bg-[#EBE7DF]">
                    <Image
                      src={srv.image}
                      alt={`${srv.title} - KitchenSet Sukabumi`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-[10px] glass-surface-dark text-white text-xs flex items-center justify-between shadow-ambient">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#DCD5CA]">
                        Layanan #{srv.num}
                      </span>
                      <span className="text-[11px] font-medium text-white/95">
                        {srv.imageBadge}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[14.5px] text-[#5F5B54] leading-relaxed font-sans mb-5">
                    {srv.desc}
                  </p>

                  {/* Scope of Work Pills */}
                  <div className="mb-6">
                    <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#181715] block mb-2.5">
                      Cakupan Pekerjaan:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.scope.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 px-3 py-2 rounded-[9px] bg-[#F4F1EA] group-hover:bg-[#FAF8F3] border border-[#E8E2D8] text-[12px] text-[#3D3A35] transition-colors"
                        >
                          <span className="w-3.5 h-3.5 rounded-full bg-[#8A6248]/15 text-[#8A6248] flex items-center justify-center shrink-0">
                            <Check className="w-2 h-2" />
                          </span>
                          <span className="truncate font-sans font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="pt-4 border-t border-[#EBE5DB]">
                  <a
                    href={generateWhatsAppLink({
                      service: srv.title,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-[12px] bg-[#181715] group-hover:bg-[#8A6248] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      Diskusikan Kebutuhan {srv.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
