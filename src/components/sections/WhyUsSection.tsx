"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { LottieGuaranteeBadge } from "@/components/ui/LottieGuaranteeBadge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const reasons = [
    {
      num: "01",
      title: "Proses Terstruktur dari Awal hingga Akhir",
      desc: "Mulai dari konsultasi, survei lokasi, desain 3D, produksi workshop hingga instalasi di lapangan dikelola dalam satu alur kerja yang terukur dan jelas.",
    },
    {
      num: "02",
      title: "Pilihan Material & Finishing Fleksibel",
      desc: "Material (Multipleks 18mm, HMR, PVC waterproof), warna dan finishing (HPL, akrilik, duco) dapat disesuaikan dengan kebutuhan desain, fungsi ruang, serta budget proyek.",
    },
    {
      num: "03",
      title: "Biaya Lebih Jelas & Terencana (RAB)",
      desc: "Kebutuhan proyek dirinci secara transparan melalui Rencana Anggaran Biaya (RAB) resmi sebelum pemotongan bahan. Tidak ada biaya siluman selama pengerjaan.",
    },
    {
      num: "04",
      title: "Garansi Pemeliharaan 6 Bulan",
      desc: "KitchenSet Sukabumi memberikan garansi pemeliharaan selama 6 bulan setelah proses serah terima untuk memastikan fungsi engsel, rel, dan kerapian kabinet tetap prima.",
    },
    {
      num: "05",
      title: "Pengerjaan Terjadwal & Terkendali",
      desc: "Timeline pengerjaan disusun terukur: estimasi fabrikasi workshop 14–21 hari kerja dan instalasi lokasi 1–5 hari dengan pengawasan kualitas berkala.",
    },
    {
      num: "06",
      title: "Konsultasi Awal Bebas Biaya",
      desc: "Diskusikan kebutuhan tata ruang, kapasitas storage, dan estimasi biaya bersama tim KitchenSet Sukabumi tanpa dipungut biaya konsultasi awal.",
      note: "*Syarat & ketentuan berlaku.",
    },
  ];

  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".reason-item", {
        scrollTrigger: {
          trigger: ".reasons-grid",
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F4F1EA] border-b border-[#DCD5CA]"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header with Lottie Guarantee Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A6248] block">
              KENAPA KITCHENSET SUKABUMI
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#181715] tracking-[-0.03em] uppercase leading-[1.12]">
              6 Alasan Memilih{" "}
              <span className="font-serif italic font-normal text-[#8A6248] text-[1.08em] lowercase block sm:inline">
                interior custom yang terencana.
              </span>
            </h2>
            <p className="text-[15.5px] text-[#5F5B54] leading-relaxed max-w-2xl font-sans">
              Membangun kitchen set dan interior bukan sekadar mengisi perabot, melainkan menciptakan ruang fungsional yang tahan lama dengan keputusan material yang tepat.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-[14px] glass-surface border border-[#DCD5CA] shrink-0">
            <LottieGuaranteeBadge size={48} />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#181715] block">
                Standard Garansi 6 Bulan
              </span>
              <span className="text-[10.5px] font-mono text-[#8A6248]">
                BAST Resmi &bull; Teknisi Sukabumi
              </span>
            </div>
          </div>
        </div>

        {/* 6 REASONS SEQUENTIAL EDITORIAL LIST */}
        <div className="border-t border-[#DCD5CA] divide-y divide-[#DCD5CA] reasons-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCD5CA]">
            {/* Col Left: 01, 03, 05 */}
            <div className="divide-y divide-[#DCD5CA]">
              {[reasons[0], reasons[2], reasons[4]].map((r) => (
                <div key={r.num} className="reason-item py-10 lg:pr-12 space-y-3 group card-lift-60fps">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#8A6248] tracking-widest">
                      {r.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DCD5CA]" />
                    <h3 className="font-sans text-xl sm:text-[22px] font-bold text-[#181715] leading-snug group-hover:text-[#8A6248] transition-colors">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-[14.5px] text-[#5F5B54] leading-relaxed font-sans pl-7">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Col Right: 02, 04, 06 */}
            <div className="divide-y divide-[#DCD5CA]">
              {[reasons[1], reasons[3], reasons[5]].map((r) => (
                <div key={r.num} className="reason-item py-10 lg:pl-12 space-y-3 group card-lift-60fps">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#8A6248] tracking-widest">
                      {r.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DCD5CA]" />
                    <h3 className="font-sans text-xl sm:text-[22px] font-bold text-[#181715] leading-snug group-hover:text-[#8A6248] transition-colors">
                      {r.title}
                    </h3>
                  </div>
                  <p className="text-[14.5px] text-[#5F5B54] leading-relaxed font-sans pl-7">
                    {r.desc}
                  </p>
                  {r.note && (
                    <p className="text-xs text-[#8A6248] font-mono pl-7">
                      {r.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-14 pt-8 border-t border-[#DCD5CA] flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#5F5B54] font-sans">
            Ingin berkonsultasi mengenai rencana layout atau pemilihan bahan?
          </p>
          <div className="flex items-center gap-3">
            <a
              href={generateWhatsAppLink({ service: "Konsultasi 6 Alasan" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat WhatsApp
            </a>
            <Link
              href="/jadwalkan-survei"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-[10px] bg-[#181715] hover:bg-[#8A6248] text-white text-xs font-bold uppercase tracking-wider transition-colors active:scale-[0.97]"
            >
              <span>Jadwalkan Survei</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
