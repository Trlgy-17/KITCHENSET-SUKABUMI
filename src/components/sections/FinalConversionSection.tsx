import React from "react";
import Link from "next/link";
import { contact } from "@/config/site";
import { MessageCircle, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export function FinalConversionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#191816] text-[#FAF8F4] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] block">
              MULAI DARI RUANG ANDA
            </span>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[46px] font-semibold text-white tracking-tight uppercase leading-[1.12]">
              Ceritakan Kitchen yang Sedang{" "}
              <span className="font-serif italic font-normal text-[#A86E4C] lowercase block sm:inline">
                Anda rencanakan.
              </span>
            </h2>

            <p className="text-[15px] sm:text-base text-[#D8CDBF] leading-relaxed max-w-2xl">
              Belum tahu harus mulai dari material, layout atau budget? Kirim kebutuhan Anda melalui WhatsApp. Tim KitchenSet Sukabumi akan membantu memetakan langkah awal sebelum Anda mengambil keputusan lebih jauh.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-[10px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-ambient"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Konsultasi via WhatsApp
              </a>

              <Link
                href="/jadwalkan-survei"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-[#FAF8F4] hover:bg-[#A86E4C] hover:text-white text-[#191816] font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Calendar className="w-4 h-4" />
                Jadwalkan Survei
              </Link>
            </div>

            <div className="pt-6 border-t border-[#FAF8F4]/15 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#D8CDBF]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#486B56]" />
                Konsultasi Awal Gratis &amp; Tanpa Komitmen
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#486B56]" />
                Layout 2D Gratis Setelah Survei
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#486B56]" />
                Garansi Pemeliharaan 6 Bulan
              </span>
            </div>
          </div>

          {/* Right Direct Contact Info Card */}
          <div className="lg:col-span-4 p-8 rounded-[16px] bg-[#292722] border border-[#FAF8F4]/15 space-y-4">
            <h3 className="font-sans text-lg font-bold text-white uppercase tracking-tight">
              Kontak Resmi
            </h3>
            <div className="space-y-3 text-xs text-[#D8CDBF]">
              <div>
                <span className="text-[#A86E4C] block font-mono text-[10px] uppercase">
                  WhatsApp Utama
                </span>
                <span className="text-sm font-semibold text-white">
                  {contact.whatsappDisplay}
                </span>
              </div>
              <div>
                <span className="text-[#A86E4C] block font-mono text-[10px] uppercase">
                  Instagram
                </span>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:underline"
                >
                  {contact.instagramHandle}
                </a>
              </div>
              <div>
                <span className="text-[#A86E4C] block font-mono text-[10px] uppercase">
                  Area Operasional
                </span>
                <span className="text-white">
                  Kota &amp; Kabupaten Sukabumi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
