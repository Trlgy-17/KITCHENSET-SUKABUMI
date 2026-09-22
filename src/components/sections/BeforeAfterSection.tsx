"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, SlidersHorizontal } from "lucide-react";

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  // Smooth position updater with bounds check
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const x = clientX - rect.left;
    const rawPercent = (x / rect.width) * 100;
    const clampedPercent = Math.max(0, Math.min(100, rawPercent));
    setSliderPosition(clampedPercent);
  }, []);

  // Global window listeners during dragging so tracking never drops even when moving outside container
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        updatePosition(e.clientX);
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
        }
        rafIdRef.current = requestAnimationFrame(() => {
          updatePosition(e.touches[0].clientX);
        });
      }
    };

    const handleStop = () => {
      setIsDragging(false);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handleStop);
    window.addEventListener("pointercancel", handleStop);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleStop);
    window.addEventListener("touchcancel", handleStop);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handleStop);
      window.removeEventListener("pointercancel", handleStop);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStop);
      window.removeEventListener("touchcancel", handleStop);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isDragging, updatePosition]);

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="transformation" className="py-20 md:py-28 bg-[#F4F1EA] border-b border-[#D8D2C7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              TRANSFORMASI RUANG NYATA
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#191816] tracking-tight uppercase leading-[1.14]">
              Perubahan yang Terlihat.{" "}
              <span className="font-serif italic font-normal text-[#76563E] lowercase block sm:inline">
                perencanaan presisi di baliknya.
              </span>
            </h2>
            <p className="text-[15px] text-[#5C5954] leading-relaxed">
              Tarik atau klik garis geser interaktif di bawah untuk melihat perbedaan kondisi awal ruangan sebelum renovasi dibanding hasil akhir pengerjaan kabinet interior custom kami di Sukabumi.
            </p>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EBE5DA] rounded-full border border-[#D8D2C7] self-start lg:self-end shrink-0 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setSliderPosition(100)}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-300 uppercase tracking-wider text-[11px] ${
                sliderPosition >= 95
                  ? "bg-[#171715] text-[#FCFBF8] shadow-xs"
                  : "text-[#65625B] hover:text-[#171715]"
              }`}
            >
              Sebelum
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-300 uppercase tracking-wider text-[11px] ${
                sliderPosition > 20 && sliderPosition < 80
                  ? "bg-[#171715] text-[#FCFBF8] shadow-xs"
                  : "text-[#65625B] hover:text-[#171715]"
              }`}
            >
              50 : 50
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(0)}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-300 uppercase tracking-wider text-[11px] ${
                sliderPosition <= 5
                  ? "bg-[#171715] text-[#FCFBF8] shadow-xs"
                  : "text-[#65625B] hover:text-[#171715]"
              }`}
            >
              Sesudah
            </button>
          </div>
        </div>

        {/* High-Performance Hardware-Accelerated Comparison Container */}
        <div
          ref={containerRef}
          role="slider"
          aria-label="Perbandingan Sebelum dan Sesudah Renovasi"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={(e) => {
            setIsDragging(true);
            updatePosition(e.clientX);
          }}
          onTouchStart={(e) => {
            if (e.touches.length > 0) {
              setIsDragging(true);
              updatePosition(e.touches[0].clientX);
            }
          }}
          onClick={(e) => {
            updatePosition(e.clientX);
          }}
          className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[640px] w-full rounded-[18px] overflow-hidden border border-[#D8D2C7] shadow-ambient bg-[#FAF8F4] select-none cursor-ew-resize group focus:outline-none focus:ring-2 focus:ring-[#171715]/20 touch-none"
        >
          {/* AFTER Image (Bottom Base Layer) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Image
              src="/portfolio/before-after/after.webp"
              alt="Setelah Renovasi Kitchen Set Sukabumi"
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover pointer-events-none select-none"
              draggable={false}
              priority
            />
          </div>

          {/* BEFORE Image (Top Layer clipped via GPU hardware-accelerated clipPath) */}
          <div
            className="absolute inset-0 w-full h-full pointer-events-none will-change-[clip-path]"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              transition: isDragging
                ? "none"
                : "clip-path 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/portfolio/before-after/before.webp"
              alt="Sebelum Renovasi Ruang Dapur"
              fill
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover pointer-events-none select-none"
              draggable={false}
              priority
            />
          </div>

          {/* Vertical Divider Line with Glow */}
          <div
            className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.5)] will-change-[left]"
            style={{
              left: `${sliderPosition}%`,
              transition: isDragging
                ? "none"
                : "left 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* High-Precision Circular Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#171715] text-[#FCFBF8] shadow-[0_4px_24px_rgba(0,0,0,0.45)] border-2 border-white flex items-center justify-center transition-transform duration-200 group-hover:scale-110 active:scale-95 pointer-events-none">
              <div className="flex items-center gap-0.5 pointer-events-none">
                <ChevronLeft className="w-4 h-4 text-white" />
                <div className="w-[1.5px] h-3.5 bg-white/40 rounded-full" />
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Persistent Floating Badges - Fixed zIndex 30 above all layers, solid background so GPU never drops it */}
          <div
            style={{ zIndex: 30 }}
            className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#181715] text-[#FCFBF8] text-[10px] sm:text-[11px] font-bold tracking-[0.08em] uppercase border border-white/20 shadow-lg pointer-events-none select-none"
          >
            Sebelum Renovasi
          </div>
          <div
            style={{ zIndex: 30 }}
            className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#181715] text-[#FCFBF8] text-[10px] sm:text-[11px] font-bold tracking-[0.08em] uppercase border border-white/20 shadow-lg pointer-events-none select-none"
          >
            Sesudah (Hasil Jadi)
          </div>

          {/* Hint Overlay - Fixed zIndex 30 above divider line */}
          <div
            style={{ zIndex: 30 }}
            className="absolute top-3.5 sm:top-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#181715] text-white text-[11px] font-medium tracking-wide pointer-events-none flex items-center gap-2 shadow-lg border border-white/20 select-none whitespace-nowrap"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A86E4C]" />
            <span>Tarik atau klik untuk menggeser</span>
          </div>
        </div>

        {/* Caption and Consultation CTA Card */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-[16px] bg-[#FAF8F4] border border-[#D8D2C7] shadow-xs">
          <div className="text-xs text-[#5C5954] space-y-1">
            <span className="font-bold text-[#171715] text-sm block">
              Dapur Lama Anda Memiliki Meja Cor atau Sudut Ruang Sulit?
            </span>
            <p className="max-w-2xl leading-relaxed">
              Tim kami berpengalaman dalam renovasi dapur: mulai dari pembongkaran bersih meja cor lama hingga pemanfaatan struktur eksisting untuk efisiensi anggaran tanpa mengorbankan estetika dan kerapian.
            </p>
          </div>

          <Link
            href="/jadwalkan-survei"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-[#171715] hover:bg-[#76563E] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-sm group"
          >
            Konsultasikan Dapur Anda
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
