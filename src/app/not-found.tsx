import React from "react";
import Link from "next/link";
import { Home, MessageCircle, LayoutGrid } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F4F1EA] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-[#FAF8F4] p-8 sm:p-10 rounded-[16px] border border-[#D8D2C7] shadow-ambient">
        <div className="w-16 h-16 rounded-full bg-[#A86E4C]/10 text-[#A86E4C] flex items-center justify-center mx-auto font-mono text-xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="font-sans text-2xl font-bold text-[#191816]">
            Ruang Ini Belum Kami Bangun.
          </h1>
          <p className="text-xs text-[#6F6B63] leading-relaxed">
            Halaman yang Anda tuju tidak ditemukan atau telah dialihkan ke penataan baru.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] bg-[#191816] hover:bg-[#76563E] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] border border-[#D8D2C7] bg-white text-[#191816] text-xs font-semibold hover:bg-[#F4F1EA] transition-colors"
          >
            <LayoutGrid className="w-4 h-4 text-[#A86E4C]" />
            Lihat Galeri Portfolio
          </Link>
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] border border-[#D8D2C7] bg-white text-[#191816] text-xs font-semibold hover:bg-[#F4F1EA] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
