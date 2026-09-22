"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeItem = TESTIMONIALS_DATA[currentIndex];

  const clientImages = [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
  ];

  return (
    <section className="py-20 md:py-28 bg-canvas border-b border-hairline">
      <div className="max-w-architectural mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] rounded-[16px] overflow-hidden border border-hairline shadow-ambient bg-surface-high">
              <Image
                src={clientImages[currentIndex % clientImages.length]}
                alt={activeItem.clientName}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Kunjungan Pasca-Instalasi & Serah Terima
                </p>
                <p className="text-[11px] text-white/75 mt-0.5">
                  {activeItem.projectType} &bull; {activeItem.area}
                </p>
              </div>
            </div>
          </div>

          {/* Right large quote */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-terracotta">
                08 / Kata Mereka Yang Sudah Mencoba
              </span>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(activeItem.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[32px] text-ink leading-[1.3]">
              &ldquo;{activeItem.content}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-sans text-sm font-bold uppercase tracking-[0.08em] text-ink">
                  {activeItem.clientName}
                </h4>
                <p className="text-xs text-ink-muted mt-0.5">
                  {activeItem.area} &bull; Proyek: {activeItem.projectType}
                </p>
              </div>

              {/* Navigation arrows for switching quotes */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
                    )
                  }
                  className="w-10 h-10 rounded-full border border-hairline bg-surface hover:bg-surface-high flex items-center justify-center text-ink transition-colors"
                  aria-label="Testimoni sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-medium text-ink-muted px-1">
                  0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-10 h-10 rounded-full border border-hairline bg-surface hover:bg-surface-high flex items-center justify-center text-ink transition-colors"
                  aria-label="Testimoni berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
