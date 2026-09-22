import React from "react";
import Link from "next/link";
import Image from "next/image";
import { contact, SITE_CONFIG } from "@/config/site";
import { MessageCircle, Instagram, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const navLinks = [
    { name: "Tentang Kami", href: "/#about" },
    { name: "Layanan", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Proses", href: "/#process" },
    { name: "Material", href: "/#materials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Jadwalkan Survei", href: "/jadwalkan-survei" },
  ];

  return (
    <footer className="bg-[#191816] text-[#FAF8F4]/80 pt-16 pb-12 border-t border-[#292722]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Brand Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#FAF8F4]/10">
          <div className="space-y-3 max-w-xl">
            <div className="relative h-[42px] w-[165px]">
              <Image
                src="/logo-white.png"
                alt="KitchenSet Sukabumi"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#D8CDBF] leading-relaxed">
              Custom kitchen set, interior dan furniture yang dirancang mengikuti kebutuhan ruang, diproduksi secara terukur, dan dipasang melalui proses kerja yang transparan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              WhatsApp {contact.whatsappDisplay}
            </a>

            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] border border-[#FAF8F4]/20 bg-white/5 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#A86E4C]" />
              {contact.instagramHandle}
            </a>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#FAF8F4]/10 text-xs">
          {/* Col 1: Navigasi */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[#A86E4C] font-bold">
              Navigasi
            </h4>
            <ul className="space-y-2 text-[#D8CDBF]">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: WhatsApp & Instagram */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[#A86E4C] font-bold">
              WhatsApp &amp; Instagram
            </h4>
            <div className="space-y-2.5 text-[#D8CDBF]">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#D8CDBF] hover:text-white transition-colors group p-2.5 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="font-semibold text-white block leading-tight">WhatsApp</span>
                  <span className="text-[11px] text-[#D8CDBF]/80 group-hover:text-white">
                    {contact.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-[#D8CDBF] hover:text-white transition-colors group p-2.5 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
                <div>
                  <span className="font-semibold text-white block leading-tight">Instagram</span>
                  <span className="text-[11px] text-[#D8CDBF]/80 group-hover:text-white">
                    {contact.instagramHandle}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Col 3: Jam Kerja & Area */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[#A86E4C] font-bold">
              Operasional
            </h4>
            <div className="space-y-2 text-[#D8CDBF]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#A86E4C] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.operatingHours}</span>
              </div>
              <p className="pt-1 text-[11px] text-[#D8CDBF]/70">
                Fokus layanan: Kota Sukabumi, Cisaat, Cibadak, Cicurug, Parungkuda, dan wilayah sekitarnya.
              </p>
            </div>
          </div>

          {/* Col 4: Jaminan Kerja */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.14em] text-[#A86E4C] font-bold">
              Jaminan Kerja
            </h4>
            <div className="p-3.5 rounded-[12px] bg-[#292722] border border-[#FAF8F4]/10 space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-[#A86E4C]" />
                Garansi Pemeliharaan 6 Bulan
              </div>
              <p className="text-[11px] text-[#D8CDBF] leading-relaxed">
                KitchenSet Sukabumi memberikan pendampingan pasca serah terima dan garansi pemeliharaan selama 6 bulan sesuai ketentuan proyek.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8CDBF]/60">
          <div>
            &copy; {new Date().getFullYear()} KitchenSet Sukabumi. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
