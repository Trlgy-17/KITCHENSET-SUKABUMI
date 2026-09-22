"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { AsciiCadBadge } from "@/components/ui/AsciiCadBadge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const trustHighlights = [
    "Konsultasi Awal Gratis",
    "RAB Transparan",
    "Layout 2D Setelah Survei",
    "Garansi Pemeliharaan 6 Bulan",
  ];

  // GSAP Sequenced Timeline for Hero
  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-telemetry", {
        opacity: 0,
        y: -10,
        duration: 0.6,
      })
        .from(
          ".hero-headline",
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-body",
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-cta",
          {
            opacity: 0,
            scale: 0.96,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        );

      if (!isMobile) {
        tl.from(
          ".hero-image-wrap",
          {
            opacity: 0,
            scale: 0.98,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        );
      } else {
        gsap.from(".hero-image-wrap", {
          scrollTrigger: {
            trigger: ".hero-image-wrap",
            start: "top 92%",
          },
          opacity: 0,
          scale: 0.97,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-[72px] pb-[72px] md:pt-[110px] md:pb-[100px] bg-[#F4F1EA] border-b border-[#DCD5CA] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8 max-w-[680px]">
            {/* Telemetry Bar with ASCII CAD Badge */}
            <div className="hero-telemetry flex flex-wrap items-center gap-3">
              <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8A6248] block leading-[1.4]">
                CUSTOM INTERIOR &bull; KITCHEN SET &bull; SUKABUMI
              </span>
              <AsciiCadBadge />
            </div>

            {/* Headline with Instrument Serif Emphasis */}
            <h1 className="hero-headline font-sans text-[clamp(38px,4.1vw,64px)] font-semibold text-[#181715] tracking-[-0.035em] leading-[1.02] uppercase">
              Kitchen Set yang Dirancang untuk{" "}
              <span className="font-serif italic font-normal text-[#8A6248] text-[1.1em] leading-[0.92] tracking-[-0.02em] block sm:inline normal-case">
                ruang dan cara Anda hidup.
              </span>
            </h1>

            {/* Concise Supporting Body */}
            <p className="hero-body text-[15.5px] sm:text-[16.5px] text-[#5F5B54] leading-[1.65] font-sans max-w-[560px] tracking-[-0.01em]">
              KitchenSet Sukabumi menghadirkan layanan desain, produksi, dan instalasi kitchen set serta interior custom dengan perencanaan matang, pilihan material transparan, dan pengerjaan yang terukur.
            </p>

            {/* CTA Hierarchy with micro-interaction */}
            <div className="hero-cta pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              {/* Primary: WhatsApp */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-[11px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-[13.5px] font-semibold tracking-normal transition-all shadow-xs shrink-0 active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>Konsultasi via WhatsApp</span>
              </a>

              {/* Secondary: Jadwalkan Survei */}
              <Link
                href="/jadwalkan-survei"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[11px] bg-[#181715] hover:bg-[#5E4434] text-white text-[13.5px] font-semibold tracking-normal transition-all shadow-xs shrink-0 active:scale-[0.97]"
              >
                <Calendar className="w-[17px] h-[17px] text-white/90 shrink-0" />
                <span>Jadwalkan Survei</span>
              </Link>

              {/* Tertiary: Lihat Portfolio Text Link */}
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-1.5 h-[52px] px-3 text-[14px] font-semibold text-[#181715] hover:text-[#8A6248] transition-colors group self-center sm:self-auto active:scale-[0.97]"
              >
                <span>Lihat Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#181715] group-hover:text-[#8A6248] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#DCD5CA] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {trustHighlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#49685A] shrink-0 stroke-[1.5]" />
                  <span className="text-[13.5px] font-medium text-[#57534D]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative hero-image-wrap gpu-layer">
            {/* Main Hero Photograph with 60fps card lift */}
            <div className="relative aspect-[4/3] sm:aspect-[14/11] rounded-[18px] overflow-hidden border border-[#DCD5CA] shadow-ambient bg-[#FAF8F3] card-lift-60fps">
              <Image
                src="/kitchen/1.jpeg"
                alt="Kitchen set modern dengan peninsula & kabinet full-height Sukabumi"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[center_36%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/75 via-[#181715]/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:left-[245px] text-white text-xs pointer-events-none">
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#E5DFD4] block">
                  HASIL TERPASANG &bull; SUKABUMI
                </span>
                <p className="text-[12.5px] sm:text-[13.5px] font-semibold mt-0.5 text-white/95 drop-shadow-sm leading-snug">
                  Kitchen set modern dengan peninsula &amp; kabinet full-height
                </p>
              </div>
            </div>

            {/* Genuine Featured Project Preview Card with Glassmorphism */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 z-20 w-[225px] p-3 rounded-[16px] glass-surface shadow-ambient items-center gap-3 transition-transform hover:translate-y-[-2px]">
              <div className="relative w-12 h-12 rounded-[8px] overflow-hidden shrink-0 border border-[#DCD5CA] bg-[#EBE5DA]">
                <Image
                  src="/kitchen/1.jpeg"
                  alt="Modern Peninsula Kitchen"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="min-w-0">
                <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#8A6248] block truncate">
                  PROJECT &bull; SUKABUMI
                </span>
                <p className="text-[12px] font-bold text-[#181715] truncate leading-tight">
                  Modern Peninsula
                </p>
                <Link
                  href="/portfolio/kitchen-set-modern-minimalis-sukabumi"
                  className="inline-flex items-center text-[10.5px] font-semibold text-[#5E4434] hover:text-[#181715] hover:underline mt-0.5"
                >
                  View Project &rarr;
                </Link>
              </div>
            </div>

            {/* Mobile Project Preview Card with Glassmorphism */}
            <div className="sm:hidden mt-4 p-3.5 rounded-[14px] glass-surface flex items-center gap-3 shadow-xs">
              <div className="relative w-12 h-12 rounded-[8px] overflow-hidden shrink-0 border border-[#DCD5CA] bg-[#EBE5DA]">
                <Image
                  src="/kitchen/1.jpeg"
                  alt="Modern Peninsula Kitchen"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#8A6248] block">
                  PROJECT &bull; SUKABUMI
                </span>
                <p className="text-[12px] font-bold text-[#181715] truncate">
                  Modern Peninsula
                </p>
                <Link
                  href="/portfolio/kitchen-set-modern-minimalis-sukabumi"
                  className="inline-flex items-center text-[11px] font-semibold text-[#5E4434] hover:underline"
                >
                  Lihat Detail Proyek &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
