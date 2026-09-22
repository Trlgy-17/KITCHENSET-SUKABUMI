import React from "react";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SITE_CONFIG, contact } from "@/config/site";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan | KitchenSet Sukabumi",
  description: "Syarat dan ketentuan pengerjaan proyek custom kitchen set dan interior di KitchenSet Sukabumi.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#F4F1EA] min-h-screen py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ name: "Syarat & Ketentuan" }]} />

        <div className="bg-[#FAF8F4] rounded-[16px] p-8 sm:p-12 border border-[#D8D2C7] shadow-sm space-y-6 text-[#474741] text-xs sm:text-sm leading-relaxed">
          <h1 className="font-sans text-2xl sm:text-3xl font-bold text-[#191816] border-b border-[#D8D2C7] pb-4">
            Syarat &amp; Ketentuan Layanan
          </h1>

          <p>
            Selamat datang di <strong>KitchenSet Sukabumi</strong>. Ketentuan ini mengatur proses konsultasi, survei, pengembangan desain, produksi, instalasi, hingga garansi purna jual untuk pekerjaan kitchen set dan interior custom.
          </p>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            1. Konsultasi, Survei &amp; Desain Spasial
          </h3>
          <p>
            Konsultasi awal dan pengajuan estimasi anggaran diselenggarakan tanpa biaya dan tanpa komitmen. Survei lokasi dilakukan untuk memperoleh dimensi aktual ruangan. Setelah proses survei, Layout Spasial 2D diberikan sebagai gambaran awal penataan ruang. Pengembangan visualisasi render 3D dilanjutkan setelah konfirmasi deposit desain.
          </p>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            2. Persetujuan Spesifikasi &amp; Kontrak Kerja (SPK)
          </h3>
          <p>
            Pekerjaan produksi di workshop dimulai setelah desain final, dimensi ukuran, spesifikasi material, pilihan finishing, hardware engsel/rel, dan Rincian Anggaran Biaya (RAB) disetujui bersama oleh klien.
          </p>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            3. Mekanisme &amp; Skema Pembayaran
          </h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Deposit Desain:</strong> Dikenakan untuk pengembangan visualisasi 3D setelah layout 2D awal disetujui.</li>
            <li><strong>Down Payment (DP) 50%:</strong> Dibayarkan saat desain final dan spesifikasi dikunci untuk memulai belanja material dan fabrikasi di workshop.</li>
            <li><strong>Termin Kedua:</strong> Dilakukan ketika progres pekerjaan produksi mencapai sekitar &plusmn;40%.</li>
            <li><strong>Pelunasan:</strong> Dilakukan sebelum atau ketika proses serah terima pekerjaan di lokasi proyek.</li>
          </ul>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            4. Garansi Pemeliharaan 6 Bulan
          </h3>
          <p>
            KitchenSet Sukabumi memberikan pendampingan pasca serah terima dan garansi pemeliharaan selama 6 (enam) bulan sesuai ruang lingkup pekerjaan serta ketentuan proyek yang telah disepakati bersama.
          </p>

          <h3 className="font-sans text-base font-bold text-[#191816] pt-2">
            5. Layanan Kontak
          </h3>
          <p>
            Untuk pertanyaan seputar ketentuan proyek, Anda dapat menghubungi tim kami melalui WhatsApp di {contact.whatsappDisplay} atau email halo@kitchensetsukabumi.id.
          </p>
        </div>
      </div>
    </div>
  );
}
