"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MaterialEducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      gsap.from(".material-header", {
        scrollTrigger: {
          trigger: ".material-header",
          start: "top 88%",
        },
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
      });

      const cards = gsap.utils.toArray<HTMLElement>(".material-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          y: 28,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const materials = [
    {
      category: "KAYU OLAHAN INTI",
      title: "Blockboard 18 mm",
      desc: "Material berbahan inti kayu solid yang disusun sejajar lalu dilapisi veneer berkualitas. Memiliki bobot lebih ringan dibanding multipleks, tetap kokoh, serta lebih stabil terhadap perubahan bentuk. Sangat cocok digunakan untuk kabinet, lemari, dan furniture built-in pada area kering.",
      bestUse: "Kabinet gantung, lemari pakaian (wardrobe), ambalan interior, area kering.",
      image: "/materials/blockboard-actual.webp",
    },
    {
      category: "KAYU LAPIS STRUKTUR",
      title: "Multipleks / Plywood",
      desc: "Material kayu lapis berlapis silang dengan kekuatan struktural tinggi. Dikenal memiliki daya tahan yang sangat baik terhadap beban, sekrup, dan penggunaan jangka panjang. Menjadi pilihan utama untuk kitchen set, wardrobe, dan furniture yang membutuhkan konstruksi kuat.",
      bestUse: "Konstruksi utama kitchen set, kabinet laci beban berat, furniture built-in.",
      image: "/materials/multipleks-actual.webp",
    },
    {
      category: "MATERIAL ANTI AIR",
      title: "PVC Board Waterproof",
      desc: "Material sintetis berbahan PVC yang 100% tahan air, anti lembap, serta tidak mudah lapuk maupun dimakan rayap. Sangat ideal untuk area dengan kelembapan tinggi seperti kabinet bawah kitchen set, kamar mandi, laundry, maupun area utilitas.",
      bestUse: "Kabinet bawah sink dapur, area basah, laundry room, modul utilitas lembap.",
      image: "/materials/pvc-actual.webp",
    },
    {
      category: "BINGKAI & LIS ARSITEKTURAL",
      title: "Aluminium Profile",
      desc: "Material aluminium presisi dengan finishing powder coating atau anodized yang tahan karat dan minim perawatan. Memberikan tampilan modern, rapi, dan elegan, sekaligus berfungsi sebagai bingkai pintu kaca, handle profile, maupun aksen dekoratif pada furniture.",
      bestUse: "Bingkai pintu kaca lemari, handle profile tersembunyi, lis aksen modern.",
      image: "/materials/kitchen-actual.webp",
    },
  ];

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F4F1EA] border-b border-[#DCD5CA]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="material-header max-w-3xl mb-14 md:mb-18 space-y-3.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6248] block">
            EDUKASI MATERIAL
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#181715] tracking-[-0.03em] uppercase leading-[1.12]">
            Pilih Material Berdasarkan Kebutuhan,{" "}
            <span className="font-serif italic font-normal text-[#8A6248] text-[1.08em] lowercase block sm:inline">
              bukan sekadar tampilan.
            </span>
          </h2>
          <p className="text-[15.5px] text-[#5F5B54] leading-relaxed max-w-2xl font-sans">
            Setiap material memiliki karakter, kekuatan struktural, dan area penggunaan yang berbeda. Kami memastikan pemilihan material disesuaikan secara transparan dengan fungsi ruang, ketahanan kelembapan, dan anggaran proyek Anda.
          </p>
        </div>

        {/* 4-Column Material Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((mat) => (
            <div
              key={mat.title}
              className="material-card rounded-[18px] border border-[#DCD5CA] bg-[#FAF8F3] overflow-hidden flex flex-col justify-between hover:border-[#181715] transition-all duration-300 shadow-sm hover:shadow-ambient card-lift-60fps group"
            >
              <div>
                {/* Image Container with Dark Pill Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DCD5CA]">
                  <Image
                    src={mat.image}
                    alt={mat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-[#181715]/85 backdrop-blur-sm text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#FAF8F4] border border-white/15">
                      {mat.category}
                    </span>
                  </div>
                </div>

                {/* Card Title & Full Description */}
                <div className="p-6 space-y-3">
                  <h3 className="font-sans text-xl sm:text-[21px] font-bold text-[#181715] tracking-tight">
                    {mat.title}
                  </h3>
                  <p className="text-[13.5px] text-[#5F5B54] leading-[1.65] font-sans">
                    {mat.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer: Best Use & Consultation CTA */}
              <div className="p-6 pt-0 space-y-4">
                <div className="p-3.5 rounded-[12px] bg-[#F4F1EA] border border-[#DCD5CA]/80 text-xs text-[#5F5B54] space-y-1">
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#181715] block">
                    Area Penggunaan:
                  </span>
                  <p className="leading-relaxed">
                    {mat.bestUse}
                  </p>
                </div>

                <div className="pt-1">
                  <a
                    href={generateWhatsAppLink({
                      customMessage: `Halo KitchenSet Sukabumi, saya ingin konsultasi pemilihan material ${mat.title} untuk kebutuhan proyek interior saya.`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#181715] hover:text-[#8A6248] transition-colors group/link"
                  >
                    <span>Konsultasikan Material</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
