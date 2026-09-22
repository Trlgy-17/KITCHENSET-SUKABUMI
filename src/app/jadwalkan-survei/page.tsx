"use client";

import React, { useState } from "react";
import Link from "next/link";
import { generateSurveyWhatsAppLink } from "@/lib/whatsapp";
import { Calendar, CheckCircle2, MessageCircle, Clock, MapPin, ShieldCheck, AlertCircle } from "lucide-react";

export default function JadwalkanSurveiPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [jobType, setJobType] = useState("Kitchen Set");
  const [propertyType, setPropertyType] = useState("Rumah");
  const [city, setCity] = useState("Kota Sukabumi");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const jobTypeOptions = [
    "Kitchen Set",
    "Backdrop TV",
    "Bedroom",
    "Wardrobe",
    "Lemari Bawah Tangga",
    "Interior Design",
    "Design & Build",
    "Renovation",
    "Custom Furniture",
    "Lainnya",
  ];

  const propertyOptions = [
    "Rumah",
    "Kantor",
    "Sekolah / Kampus",
    "Penginapan / Hotel",
    "Restoran / Cafe",
    "Klinik / Rumah Sakit",
    "Lainnya",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Nama lengkap wajib diisi.";
    if (!phone.trim()) {
      newErrors.phone = "Nomor WhatsApp wajib diisi.";
    } else {
      const cleanPhone = phone.replace(/[^0-9+]/g, "");
      if (cleanPhone.length < 9) {
        newErrors.phone = "Masukkan nomor WhatsApp yang valid.";
      }
    }
    if (!city.trim()) newErrors.city = "Kota / Kabupaten wajib diisi.";
    if (!address.trim()) newErrors.address = "Alamat lengkap wajib diisi.";
    if (!date) newErrors.date = "Tanggal kunjungan wajib dipilih.";
    if (!time) newErrors.time = "Jam kunjungan wajib dipilih.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const waUrl = generateSurveyWhatsAppLink({
      name,
      phone,
      emergencyPhone,
      jobType,
      propertyType,
      city,
      address,
      date,
      time,
    });

    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-[#F4F1EA] min-h-screen py-12 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Hero Section (Point 43) */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] block">
            SURVEI LOKASI
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#191816] tracking-tight uppercase leading-[1.15]">
            Jadwalkan Kunjungan ke{" "}
            <span className="font-serif italic font-normal text-[#76563E] lowercase block sm:inline">
              lokasi Anda.
            </span>
          </h1>
          <p className="text-[15px] text-[#474741] leading-relaxed">
            Sebelum desain dan produksi dimulai, tim melakukan pengukuran serta meninjau kondisi ruang secara langsung agar perencanaan didasarkan pada kondisi aktual. Isi formulir berikut dan detail pengajuan akan diteruskan melalui WhatsApp.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#191816] pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F4] border border-[#D8D2C7]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#486B56]" />
              Gratis &amp; Tanpa Komitmen
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F4] border border-[#D8D2C7]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#486B56]" />
              Layout 2D Gratis Setelah Survei
            </span>
          </div>
        </div>

        {/* Survey Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-[16px] bg-[#FAF8F4] border border-[#D8D2C7] shadow-ambient">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 1. Data Diri */}
              <div className="space-y-4">
                <h2 className="font-sans text-base font-bold text-[#191816] uppercase tracking-wide border-b border-[#D8D2C7] pb-2">
                  1. Data Diri
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="survey-name" className="block text-xs font-semibold text-[#191816] mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      id="survey-name"
                      type="text"
                      maxLength={100}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Ibu Rina / Bpk. Rudi"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="survey-phone" className="block text-xs font-semibold text-[#191816] mb-1">
                      Nomor WhatsApp *
                    </label>
                    <input
                      id="survey-phone"
                      type="tel"
                      maxLength={25}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="survey-emergency-phone" className="block text-xs font-semibold text-[#191816] mb-1">
                      Nomor Darurat (Opsional)
                    </label>
                    <input
                      id="survey-emergency-phone"
                      type="tel"
                      maxLength={25}
                      value={emergencyPhone}
                      onChange={(e) => setEmergencyPhone(e.target.value)}
                      placeholder="Nomor telepon kerabat/rumah jika WhatsApp sulit dihubungi"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Jenis Pekerjaan (Selectable Chips) */}
              <div className="space-y-3">
                <h2 className="font-sans text-base font-bold text-[#191816] uppercase tracking-wide border-b border-[#D8D2C7] pb-2">
                  2. Jenis Pekerjaan *
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {jobTypeOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setJobType(opt)}
                      className={`px-3.5 py-2 rounded-[8px] text-xs font-medium border transition-all ${
                        jobType === opt
                          ? "bg-[#191816] text-white border-[#191816] shadow-sm"
                          : "bg-white text-[#474741] border-[#D8D2C7] hover:border-[#191816]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Peruntukan Bangunan */}
              <div className="space-y-3">
                <h2 className="font-sans text-base font-bold text-[#191816] uppercase tracking-wide border-b border-[#D8D2C7] pb-2">
                  3. Peruntukan Bangunan *
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {propertyOptions.map((prop) => (
                    <button
                      type="button"
                      key={prop}
                      onClick={() => setPropertyType(prop)}
                      className={`px-3.5 py-2 rounded-[8px] text-xs font-medium border transition-all ${
                        propertyType === prop
                          ? "bg-[#191816] text-white border-[#191816] shadow-sm"
                          : "bg-white text-[#474741] border-[#D8D2C7] hover:border-[#191816]"
                      }`}
                    >
                      {prop}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Lokasi */}
              <div className="space-y-4">
                <h2 className="font-sans text-base font-bold text-[#191816] uppercase tracking-wide border-b border-[#D8D2C7] pb-2">
                  4. Lokasi Survei
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="survey-city" className="block text-xs font-semibold text-[#191816] mb-1">
                      Kota / Kabupaten *
                    </label>
                    <input
                      id="survey-city"
                      type="text"
                      maxLength={100}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Contoh: Kota Sukabumi / Cisaat / Cibadak"
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                    {errors.city && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.city}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="survey-address" className="block text-xs font-semibold text-[#191816] mb-1">
                      Alamat Lengkap *
                    </label>
                    <textarea
                      id="survey-address"
                      rows={3}
                      maxLength={300}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Nama jalan, nomor rumah, perumahan, patokan arah..."
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                    {errors.address && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.address}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. Jadwal Kunjungan */}
              <div className="space-y-4">
                <h2 className="font-sans text-base font-bold text-[#191816] uppercase tracking-wide border-b border-[#D8D2C7] pb-2">
                  5. Usulan Jadwal Kunjungan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="survey-date" className="block text-xs font-semibold text-[#191816] mb-1">
                      Tanggal Kunjungan *
                    </label>
                    <input
                      id="survey-date"
                      type="date"
                      value={date}
                      min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                    {errors.date && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.date}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="survey-time" className="block text-xs font-semibold text-[#191816] mb-1">
                      Jam Kunjungan *
                    </label>
                    <input
                      id="survey-time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[8px] border border-[#D8D2C7] bg-white text-xs text-[#191816] focus:outline-none focus:border-[#191816]"
                    />
                    {errors.time && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.time}</span>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-[#6F6B63] italic">
                  * Tanggal dan jam yang diajukan masih dapat disesuaikan berdasarkan ketersediaan Anda dan jadwal tim survei KitchenSet Sukabumi.
                </p>
              </div>

              {/* Privacy Notice & Submit Button */}
              <div className="pt-4 border-t border-[#D8D2C7] space-y-3">
                <p className="text-[11px] text-[#6F6B63]">
                  Dengan mengirimkan jadwal ini, Anda menyetujui{" "}
                  <Link href="/privacy" className="text-[#191816] underline font-medium hover:text-[#A86E4C]">
                    Kebijakan Privasi
                  </Link>{" "}
                  KitchenSet Sukabumi untuk keperluan koordinasi survei dan konsultasi desain.
                </p>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[10px] bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Kirim Jadwal via WhatsApp
                </button>
                <p className="text-[11px] text-[#6F6B63] text-center">
                  Formulir akan diformat rapi dan diteruskan ke chat admin WhatsApp resmi kami.
                </p>
              </div>
            </form>
          </div>

          {/* Side Info: Yang Didapat Setelah Survei (Point 51) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-[16px] bg-[#FAF8F4] border border-[#D8D2C7] space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A86E4C] block">
                YANG ANDA DAPATKAN
              </span>

              <div className="space-y-4 text-xs text-[#474741]">
                <div className="space-y-1">
                  <h4 className="font-bold text-[#191816]">Survei &amp; Pengukuran</h4>
                  <p className="text-[#6F6B63] leading-relaxed">
                    Pengukuran langsung berdasarkan kondisi ruang aktual Anda di Sukabumi.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#191816]">Draft Material &amp; Finishing</h4>
                  <p className="text-[#6F6B63] leading-relaxed">
                    Diskusi pilihan material sesuai kebutuhan dan kondisi kelembapan ruangan.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#191816]">Estimasi Awal Anggaran</h4>
                  <p className="text-[#6F6B63] leading-relaxed">
                    Gambaran awal biaya berdasarkan kebutuhan yang telah dibahas bersama.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-[#191816]">Layout Spasial 2D</h4>
                  <p className="text-[#6F6B63] leading-relaxed">
                    Layout awal sebagai gambaran perencanaan tata letak setelah proses survei.
                  </p>
                </div>
              </div>

              {/* Point 51 Mandatory Footer Note */}
              <div className="pt-4 border-t border-[#D8D2C7] text-[11px] text-[#A86E4C] font-semibold leading-relaxed flex items-start gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Visualisasi 3D dikerjakan setelah konfirmasi deposit desain.</span>
              </div>
            </div>

            <div className="p-6 rounded-[16px] bg-[#FAF8F4] border border-[#D8D2C7] space-y-2 text-xs text-[#6F6B63]">
              <span className="font-bold text-[#191816] block">
                Privasi Data Terjaga
              </span>
              <p className="leading-relaxed">
                Informasi yang Anda kirimkan hanya digunakan untuk keperluan koordinasi survei lokasi oleh tim KitchenSet Sukabumi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
