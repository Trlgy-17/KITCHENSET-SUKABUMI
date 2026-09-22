import React from "react";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak & Alamat Workshop | Kitchen Set Sukabumi",
  description:
    "Hubungi tim Kitchen Set Sukabumi melalui WhatsApp resmi, telepon, email, atau kunjungi alamat studio workshop kami di Jl. Bhayangkara, Kota Sukabumi.",
};

export default function KontakPage() {
  const waUrl = generateWhatsAppLink({
    customMessage: "Halo Kitchen Set Sukabumi, saya ingin bertanya seputar layanan kitchen set dan jadwal survey lokasi ke rumah saya di Sukabumi.",
  });

  return (
    <div className="bg-editorial-50/40 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumb items={[{ name: "Kontak" }]} />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="accent">Hubungi Kami</Badge>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-editorial-900 tracking-tight">
            Konsultasi & Kunjungan Workshop
          </h1>
          <p className="text-sm sm:text-base text-editorial-600 font-sans">
            Kami siap melayani kebutuhan konsultasi online via WhatsApp maupun kunjungan survey langsung ke kediaman Anda di seluruh wilayah Sukabumi.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-editorial-900">WhatsApp Resmi</h3>
            <p className="text-xs text-editorial-600">{SITE_CONFIG.displayPhone}</p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-600 hover:underline inline-block pt-1"
            >
              Mulai Chat &rarr;
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-editorial-100 text-accent flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-editorial-900">Telepon Langsung</h3>
            <p className="text-xs text-editorial-600">{SITE_CONFIG.displayPhone}</p>
            <p className="text-[11px] text-editorial-400">Senin - Sabtu: Jam Kerja</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-editorial-100 text-accent flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-editorial-900">Email</h3>
            <p className="text-xs text-editorial-600">{SITE_CONFIG.email}</p>
            <p className="text-[11px] text-editorial-400">Untuk proposal / tender B2B</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-editorial-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-editorial-100 text-accent flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-editorial-900">Jam Operasional</h3>
            <p className="text-xs text-editorial-600">{SITE_CONFIG.operatingHours}</p>
          </div>
        </div>

        {/* Workshop Map & Address Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-editorial-200 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <Badge variant="outline">Alamat Studio & Workshop</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-editorial-900">
              Workshop Interior Sukabumi
            </h2>
            <div className="flex items-start gap-2.5 text-sm text-editorial-700">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span>
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.region} {SITE_CONFIG.address.postalCode}
              </span>
            </div>
            <p className="text-xs text-editorial-600 leading-relaxed">
              Lokasi kami berada di pusat kota Sukabumi, sangat mudah diakses untuk Anda yang ingin melihat sampel bahan HPL, granit, atau melihat proses pembuatan kabinet secara langsung.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/konsultasi">
                <Button variant="primary" size="md">
                  Isi Formulir Konsultasi Dapur
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="md">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Hubungi via WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-editorial-200 bg-editorial-100 aspect-[16/10] flex items-center justify-center text-center p-6">
            <div className="space-y-2">
              <MapPin className="w-10 h-10 text-accent mx-auto" />
              <h4 className="font-serif text-base font-bold text-editorial-900">
                Peta Lokasi Workshop Sukabumi
              </h4>
              <p className="text-xs text-editorial-600 max-w-sm">
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
              </p>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${SITE_CONFIG.name} ${SITE_CONFIG.address.street} ${SITE_CONFIG.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-accent hover:underline gap-1"
                >
                  Buka di Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
