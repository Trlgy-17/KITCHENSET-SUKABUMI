"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 88%",
        },
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
      });

      const cards = gsap.utils.toArray<HTMLElement>(".about-photo-col");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          y: 30,
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F4F1EA] border-b border-[#DCD5CA]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="about-text lg:col-span-6 space-y-6 sm:space-y-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6248] block">
              TENTANG KITCHENSET SUKABUMI
            </span>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#181715] tracking-[-0.03em] uppercase leading-[1.12]">
              Interior yang Berangkat dari{" "}
              <span className="font-serif italic font-normal text-[#8A6248] text-[1.1em] lowercase block sm:inline">
                kebutuhan nyata.
              </span>
            </h2>

            <div className="space-y-4 text-[15.5px] text-[#5F5B54] leading-[1.68] font-sans max-w-[580px]">
              <p>
                KitchenSet Sukabumi adalah layanan Interior Design &amp; Build dengan fokus pada kitchen set dan furniture custom untuk hunian maupun ruang komersial.
              </p>
              <p>
                Setiap proyek dimulai dengan memahami kebutuhan pengguna, kondisi ruang, kebiasaan sehari-hari, preferensi visual, serta budget yang tersedia.
              </p>
              <p>
                Proses dilanjutkan melalui pengukuran, pengembangan desain, pemilihan material, produksi, instalasi, hingga layanan after sales dalam satu alur kerja yang terstruktur.
              </p>
            </div>

            {/* Architectural Numbers Strip */}
            <div className="pt-6 border-t border-[#DCD5CA] grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <span className="font-sans text-2xl font-bold text-[#181715] block">
                  18mm
                </span>
                <span className="text-[11px] text-[#656159] uppercase tracking-wider block font-medium">
                  Standar Multipleks
                </span>
              </div>
              <div className="space-y-1 border-x border-[#DCD5CA]">
                <span className="font-sans text-2xl font-bold text-[#181715] block">
                  2D &amp; 3D
                </span>
                <span className="text-[11px] text-[#656159] uppercase tracking-wider block font-medium">
                  Perencanaan Spasial
                </span>
              </div>
              <div className="space-y-1">
                <span className="font-sans text-2xl font-bold text-[#181715] block">
                  6 Bulan
                </span>
                <span className="text-[11px] text-[#656159] uppercase tracking-wider block font-medium">
                  Garansi Pemeliharaan
                </span>
              </div>
            </div>
          </div>

          {/* Right Photographic Storytelling Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
            <div className="about-photo-col space-y-4">
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden border border-[#DCD5CA] bg-[#FAF8F3]">
                <Image
                  src="/about/workshop-fabrikasi.webp"
                  alt="Produksi dan fabrikasi modul cabinetry di workshop KitchenSet Sukabumi"
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>
              <div className="p-4 rounded-[12px] bg-[#FAF8F3] border border-[#DCD5CA]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A6248] block">
                  01 / Produksi &amp; Fabrikasi
                </span>
                <p className="text-xs text-[#5F5B54] mt-1 leading-relaxed">
                  Pemotongan terukur dan fabrikasi modul berstandar presisi di workshop Sukabumi.
                </p>
              </div>
            </div>

            <div className="about-photo-col space-y-4 pt-6">
              <div className="p-4 rounded-[12px] bg-[#FAF8F3] border border-[#DCD5CA]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A6248] block">
                  02 / Instalasi &amp; Serah Terima
                </span>
                <p className="text-xs text-[#5F5B54] mt-1 leading-relaxed">
                  Pengiriman rapi, pemasangan di lokasi, hingga penandatanganan BAST bersama klien.
                </p>
              </div>
              <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden border border-[#DCD5CA] bg-[#FAF8F3]">
                <Image
                  src="/about/instalasi-lokasi.webp"
                  alt="Instalasi dan serah terima BAST kitchen set bersama klien"
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
