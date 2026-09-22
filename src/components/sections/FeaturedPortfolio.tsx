"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function FeaturedPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const p1 = PROJECTS_DATA[0]; // Kitchen Modern Ibu Diana
  const p2 = PROJECTS_DATA[1]; // Kitchen Semi Classic Pesona Bali
  const p3 = PROJECTS_DATA[3]; // Backdrop TV Cibadak

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 88%",
        },
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".portfolio-hero-card", {
        scrollTrigger: {
          trigger: ".portfolio-hero-card",
          start: "top 85%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      const sideCards = gsap.utils.toArray<HTMLElement>(".portfolio-side-card");
      sideCards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
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
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F4F1EA] border-b border-[#DCD5CA]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="portfolio-header flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6248] block">
              SELECTED PROJECTS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#181715] leading-tight tracking-[-0.03em]">
              Lihat Hasilnya,{" "}
              <span className="font-serif italic font-normal text-[#8A6248]">
                bukan hanya janjinya.
              </span>
            </h2>
            <p className="text-[15.5px] text-[#5F5B54] max-w-xl font-normal leading-relaxed">
              Dokumentasi nyata hasil pengerjaan kitchen set dan interior custom di Sukabumi.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center text-[13.5px] font-semibold text-[#181715] hover:text-[#8A6248] transition-colors group pb-1 border-b border-[#181715] self-start md:self-auto active:scale-[0.98]"
          >
            <span>Lihat Semua Portfolio</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Portfolio Composition (7 Cols + 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start portfolio-grid">
          {/* Left Hero Project Card (7 Cols) */}
          <div className="lg:col-span-7 portfolio-hero-card gpu-layer">
            <Link
              href={`/portfolio/${p1.slug}`}
              className="group block rounded-[18px] overflow-hidden border border-[#DCD5CA] bg-[#FAF8F3] shadow-ambient transition-all duration-300 hover:border-[#181715] card-lift-60fps"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EBE5DA]">
                <Image
                  src={p1.coverImage}
                  alt={p1.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full glass-pill text-[11px] font-semibold text-[#181715] shadow-xs">
                    {p1.location.toUpperCase()} &bull; 2024
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3.5">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8A6248]">
                  KITCHEN SET &bull; MULTIPLEKS 18MM &bull; {p1.topTable?.toUpperCase()}
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#181715] group-hover:text-[#8A6248] transition-colors leading-snug">
                    {p1.title}
                  </h3>
                  <span className="p-2.5 rounded-full border border-[#DCD5CA] text-[#181715] group-hover:bg-[#181715] group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <p className="text-[14.5px] text-[#5F5B54] leading-relaxed line-clamp-2">
                  {p1.summary}
                </p>
              </div>
            </Link>
          </div>

          {/* Right Column Stack (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Card 2 */}
            <div className="portfolio-side-card gpu-layer">
              <Link
                href={`/portfolio/${p2.slug}`}
                className="group block rounded-[18px] overflow-hidden border border-[#DCD5CA] bg-[#FAF8F3] shadow-ambient transition-all duration-300 hover:border-[#181715] card-lift-60fps"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EBE5DA]">
                  <Image
                    src={p2.coverImage}
                    alt={p2.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full glass-pill text-[11px] font-semibold text-[#181715] shadow-xs">
                      {p2.location.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A6248]">
                    KITCHEN SET &bull; DUCO FINISH
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-sans text-lg font-bold text-[#181715] group-hover:text-[#8A6248] transition-colors leading-snug">
                      {p2.title}
                    </h3>
                    <span className="p-2 rounded-full border border-[#DCD5CA] text-[#181715] group-hover:bg-[#181715] group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="portfolio-side-card gpu-layer">
              <Link
                href={`/portfolio/${p3.slug}`}
                className="group block rounded-[18px] overflow-hidden border border-[#DCD5CA] bg-[#FAF8F3] shadow-ambient transition-all duration-300 hover:border-[#181715] card-lift-60fps"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EBE5DA]">
                  <Image
                    src={p3.coverImage}
                    alt={p3.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 rounded-full glass-pill text-[11px] font-semibold text-[#181715] shadow-xs">
                      {p3.location.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A6248]">
                    CUSTOM INTERIOR &bull; LIVING ROOM
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-sans text-lg font-bold text-[#181715] group-hover:text-[#8A6248] transition-colors leading-snug">
                      {p3.title}
                    </h3>
                    <span className="p-2 rounded-full border border-[#DCD5CA] text-[#181715] group-hover:bg-[#181715] group-hover:text-white transition-colors shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
