"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { CheckCircle2, ArrowRight, ArrowLeft, Upload, Send, MessageCircle, Loader2 } from "lucide-react";

export function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [photoSelected, setPhotoSelected] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Kota Sukabumi",
    propertyType: "Rumah Baru" as const,
    statusProperty: "Sudah Serah Terima" as const,
    service: "Kitchen Set Custom",
    estimatedSize: "Panjang ~3 meter",
    budgetRange: "Rp 15 - 25 Juta",
    timeline: "< 1 Bulan" as const,
    hasDesign: "Belum Ada (Butuh Dibantu)" as const,
    message: "",
    privacyConsent: true,
  });

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.name.trim() || formData.name.length < 2) {
        setErrorMessage("Mohon isi nama lengkap Anda.");
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 9) {
        setErrorMessage("Mohon masukkan nomor WhatsApp yang valid.");
        return;
      }
    }
    setErrorMessage("");
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setErrorMessage("Mohon setujui persetujuan privasi untuk melanjutkan.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    trackEvent("consultation_form_submit", {
      cta_location: "consultation_full_form",
      service_type: formData.service,
    });

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          service: formData.service,
          propertyType: formData.propertyType,
          statusProperty: formData.statusProperty,
          estimatedSize: formData.estimatedSize,
          budgetRange: formData.budgetRange,
          timeline: formData.timeline,
          hasDesign: formData.hasDesign,
          message: formData.message,
          hasPhoto: photoSelected,
          readyForSurvey: formData.timeline === "< 1 Bulan",
          source: "Form Kualifikasi Lengkap",
          landingPage: "/konsultasi",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Gagal memproses formulir");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Terjadi kendala teknis. Anda dapat langsung berkonsultasi via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const getWaPrefill = () => {
    return generateWhatsAppLink({
      name: formData.name,
      location: formData.location,
      service: formData.service,
      size: formData.estimatedSize,
      budget: formData.budgetRange,
      timeline: formData.timeline,
      customMessage: [
        "Halo Kitchen Set Sukabumi, saya ingin konsultasi.",
        `Nama: ${formData.name}`,
        `Lokasi: ${formData.location}`,
        `Kebutuhan: ${formData.service}`,
        `Tipe Properti: ${formData.propertyType} (${formData.statusProperty})`,
        `Estimasi Ukuran: ${formData.estimatedSize}`,
        `Budget: ${formData.budgetRange}`,
        `Target pengerjaan: ${formData.timeline}`,
        `Catatan: ${formData.message || "Mohon info jadwal survey & estimasi."}`,
        "Sumber: Website Kualifikasi Lengkap",
      ].join("\n"),
    });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-editorial-200 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-float space-y-5">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-editorial-900">
          Konsultasi Anda Berhasil Dikirimkan!
        </h3>
        <p className="text-sm text-editorial-600 leading-relaxed max-w-md mx-auto">
          Terima kasih {formData.name}. Tim desainer kami telah menerima spesifikasi kebutuhan Anda dan sedang meninjau estimasi serta jadwal survey ke wilayah {formData.location}.
        </p>

        <div className="p-4 rounded-xl bg-editorial-50 border border-editorial-200 text-xs text-editorial-700 text-left space-y-1">
          <p className="font-semibold text-editorial-900">Ringkasan Kebutuhan:</p>
          <p>&bull; Layanan: {formData.service} ({formData.estimatedSize})</p>
          <p>&bull; Alokasi Budget: {formData.budgetRange}</p>
          <p>&bull; Target: {formData.timeline}</p>
        </div>

        <div className="pt-3">
          <a
            href={getWaPrefill()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            Lanjutkan Chat Langsung ke WhatsApp
          </a>
          <p className="text-[11px] text-editorial-500 mt-2">
            Klik tombol di atas jika Anda ingin mengirimkan foto dapur atau denah langsung ke admin.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-editorial-200 shadow-float overflow-hidden max-w-3xl mx-auto">
      {/* Progress Bar (PRD Section 42) */}
      <div className="bg-editorial-100/70 px-6 py-4 border-b border-editorial-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  currentStep === step
                    ? "bg-primary text-white"
                    : currentStep > step
                    ? "bg-emerald-600 text-white"
                    : "bg-editorial-300 text-editorial-700"
                }`}
              >
                {currentStep > step ? "✓" : step}
              </div>
              {step < 3 && (
                <div
                  className={`w-8 sm:w-16 h-0.5 mx-1 transition-colors ${
                    currentStep > step ? "bg-emerald-600" : "bg-editorial-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <span className="text-xs font-semibold text-editorial-700">
          Langkah {currentStep} dari 3
        </span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 text-rose-700 text-xs border border-rose-200">
            {errorMessage}
          </div>
        )}

        {/* STEP 1: Kontak & Lokasi */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-lg font-bold text-editorial-900">
                Informasi Kontak & Lokasi Anda
              </h3>
              <p className="text-xs text-editorial-500">
                Agar tim kami dapat menghubungi Anda dan menjadwalkan survey lokasi.
              </p>
            </div>

            <div>
              <label htmlFor="consult-name" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                Nama Lengkap *
              </label>
              <input
                id="consult-name"
                type="text"
                maxLength={100}
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Contoh: Ibu Rina Marlina"
                className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="consult-phone" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  id="consult-phone"
                  type="tel"
                  maxLength={25}
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="081234567890"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>

              <div>
                <label htmlFor="consult-email" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                  Alamat Email (Opsional)
                </label>
                <input
                  id="consult-email"
                  type="email"
                  maxLength={100}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nama@email.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="consult-location" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                Wilayah / Kecamatan di Sukabumi *
              </label>
              <select
                id="consult-location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
              >
                {SITE_CONFIG.serviceAreas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* STEP 2: Karakter Properti & Kebutuhan */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-lg font-bold text-editorial-900">
                Karakteristik Properti & Ruangan
              </h3>
              <p className="text-xs text-editorial-500">
                Membantu desainer kami menyiapkan gambaran layout yang tepat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="consult-property-type" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                  Jenis Properti
                </label>
                <select
                  id="consult-property-type"
                  value={formData.propertyType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      propertyType: e.target.value as typeof formData.propertyType,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="Rumah Baru">Rumah Baru (Belum Pernah Dihuni)</option>
                  <option value="Renovasi Rumah Lama">Renovasi Rumah Lama (Sudah Ada Dapur)</option>
                  <option value="Apartemen">Apartemen / Studio</option>
                  <option value="Ruko / Komersial">Ruko / Kafe / Komersial</option>
                </select>
              </div>

              <div>
                <label htmlFor="consult-status-property" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                  Status Properti
                </label>
                <select
                  id="consult-status-property"
                  value={formData.statusProperty}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      statusProperty: e.target.value as typeof formData.statusProperty,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="Sudah Serah Terima">Sudah Serah Terima (Siap Masuk)</option>
                  <option value="Sedang Dibangun">Sedang Tahap Pembangunan / Finishing</option>
                  <option value="Dihuni">Sudah Dihuni</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="consult-service" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                Layanan yang Diinginkan
              </label>
              <select
                id="consult-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="Kitchen Set Custom">Kitchen Set Custom Baru</option>
                <option value="Renovasi Dapur Lama">Renovasi Meja Cor Beton / Dapur Lama</option>
                <option value="Interior Rumah & Backdrop TV">Interior Rumah Lengkap / Backdrop TV</option>
                <option value="Custom Wardrobe">Lemari Pakaian Custom (Wardrobe)</option>
              </select>
            </div>

            <div>
              <label htmlFor="consult-size" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                Perkiraan Ukuran Ruang Dapur
              </label>
              <input
                id="consult-size"
                type="text"
                maxLength={150}
                value={formData.estimatedSize}
                onChange={(e) => setFormData({ ...formData, estimatedSize: e.target.value })}
                placeholder="Contoh: Dinding lurus 3 meter, atau Letter L 2.5m x 2m"
                className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 3: Anggaran, Timeline & Upload */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-lg font-bold text-editorial-900">
                Alokasi Anggaran & Target Waktu
              </h3>
              <p className="text-xs text-editorial-500">
                Data ini membantu kami menyesuaikan material yang paling optimal tanpa pemborosan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="consult-budget" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                  Rentang Anggaran (Budget)
                </label>
                <select
                  id="consult-budget"
                  value={formData.budgetRange}
                  onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="Di bawah Rp 15 Juta">&lt; Rp 15 Juta (Dapur Compact Ringkas)</option>
                  <option value="Rp 15 - 25 Juta">Rp 15 - 25 Juta (Paling Populer)</option>
                  <option value="Rp 25 - 40 Juta">Rp 25 - 40 Juta (L-Shape Full-Ceiling / Island)</option>
                  <option value="Di atas Rp 40 Juta">&gt; Rp 40 Juta (Luxury Custom / Full Duco)</option>
                  <option value="Belum Menentukan Budget">Belum Tahu (Ingin Saran Terbaik)</option>
                </select>
              </div>

              <div>
                <label htmlFor="consult-timeline" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                  Target Pemasangan
                </label>
                <select
                  id="consult-timeline"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      timeline: e.target.value as typeof formData.timeline,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
                >
                  <option value="< 1 Bulan">Segera / Dalam 1 Bulan (Prioritas)</option>
                  <option value="1 - 3 Bulan">1 - 3 Bulan ke Depan</option>
                  <option value="> 3 Bulan">&gt; 3 Bulan</option>
                  <option value="Masih Rencana / Survey Dulu">Masih Rencana Awal / Survey Dulu</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="consult-design" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                Kesiapan Desain
              </label>
              <select
                id="consult-design"
                value={formData.hasDesign}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    hasDesign: e.target.value as typeof formData.hasDesign,
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-lg border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="Belum Ada (Butuh Dibantu)">Belum Ada Desain (Butuh Dibantu Total)</option>
                <option value="Baru Ada Sketsa / Foto Referensi">Punya Foto Referensi dari Medsos/Pinterest</option>
                <option value="Sudah Punya Desain 3D">Sudah Ada Gambar Denah / Gambar Arsitek</option>
              </select>
            </div>

            {/* Photo upload simulator */}
            <div className="p-4 rounded-xl border-2 border-dashed border-editorial-300 bg-editorial-50/50 text-center space-y-2">
              <Upload className="w-6 h-6 text-editorial-500 mx-auto" />
              <div className="text-xs font-semibold text-editorial-800">
                {photoSelected ? "✓ Foto Lokasi Dipilih" : "Lampirkan Foto Dapur Eksisting (Opsional)"}
              </div>
              <p className="text-[10px] text-editorial-500 max-w-xs mx-auto">
                Mendukung foto kondisi dapur saat ini atau denah (JPG/PNG).
              </p>
              <button
                type="button"
                onClick={() => setPhotoSelected(!photoSelected)}
                className="text-xs font-semibold text-accent hover:underline inline-block"
              >
                {photoSelected ? "Ganti / Hapus File" : "+ Pilih File Foto"}
              </button>
            </div>

            <div>
              <label htmlFor="consult-message" className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-1">
                Catatan Kebutuhan Tambahan
              </label>
              <textarea
                id="consult-message"
                rows={2}
                maxLength={500}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Misal: Ingin space untuk microwave, kompor tanam 2 tungku, atau warna kabinet abu matte..."
                className="w-full px-3.5 py-2 rounded-lg border border-editorial-300 text-xs focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>

            {/* Privacy Consent Checkbox (PRD Section 17.3, 33) */}
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="consent"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                className="mt-0.5 rounded border-editorial-300 text-primary focus:ring-primary/20"
              />
              <label htmlFor="consent" className="text-[11px] text-editorial-600 leading-snug">
                Saya menyetujui data kontak ini digunakan oleh tim Kitchen Set Sukabumi untuk menghubungi saya terkait konsultasi desain dapur.
              </label>
            </div>
          </div>
        )}

        {/* Buttons Navigation */}
        <div className="pt-4 border-t border-editorial-200 flex items-center justify-between">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" size="md" onClick={prevStep}>
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Sebelumnya
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <Button type="button" variant="primary" size="md" onClick={nextStep}>
              Langkah Berikutnya
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={loading}
              className="shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Mengirim Konsultasi...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Kirim & Jadwalkan Survey
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
