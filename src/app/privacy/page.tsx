import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { contact } from "@/config/site";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | KitchenSet Sukabumi",
  description: "Kebijakan privasi dan perlindungan data konsumen KitchenSet Sukabumi.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F4F1EA] min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ name: "Kebijakan Privasi" }]} />

        <div className="bg-[#FAF8F4] rounded-[16px] p-8 sm:p-12 border border-[#D8D2C7] shadow-sm space-y-6 text-[#474741] text-xs sm:text-sm leading-relaxed">
          <h1 className="font-sans text-2xl sm:text-3xl font-bold text-[#191816] border-b border-[#D8D2C7] pb-4">
            Kebijakan Privasi
          </h1>

          <p>
            Di <strong>KitchenSet Sukabumi</strong>, kami menghargai dan menjaga kerahasiaan data pribadi setiap calon pelanggan dan pengguna situs kami.
          </p>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            1. Informasi yang Dikumpulkan
          </h3>
          <p>
            Kami hanya mengumpulkan data yang Anda kirimkan secara sukarela untuk keperluan konsultasi dan penjadwalan survei, seperti:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nama lengkap dan nomor WhatsApp aktif.</li>
            <li>Alamat atau lokasi proyek di Sukabumi untuk penjadwalan survei lokasi.</li>
            <li>Rincian kebutuhan pekerjaan interior / kitchen set dan preferensi material.</li>
          </ul>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            2. Penggunaan Informasi
          </h3>
          <p>
            Data yang Anda kirimkan hanya digunakan untuk:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Menghubungi Anda perihal konfirmasi jadwal survei lokasi dan konsultasi awal.</li>
            <li>Penyusunan perkiraan anggaran (RAB) dan komunikasi teknis proyek.</li>
            <li>Koordinasi pengiriman dan instalasi oleh tim pengerjaan kami.</li>
          </ul>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            3. Kerahasiaan Data
          </h3>
          <p>
            Kami tidak menjual atau membagikan data Anda kepada pihak ketiga manapun untuk keperluan pemasaran spam. Seluruh informasi disimpan dengan aman dalam lingkup operasional internal KitchenSet Sukabumi.
          </p>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            4. Kontak Privasi
          </h3>
          <p>
            Jika Anda memiliki pertanyaan mengenai data Anda, silakan hubungi tim kami via WhatsApp di {contact.whatsappDisplay} atau email halo@kitchensetsukabumi.id.
          </p>
        </div>
      </div>
    </div>
  );
}
