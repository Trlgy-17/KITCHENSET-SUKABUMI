"use client";

import React, { useState, useMemo } from "react";
import { formatRupiah } from "@/lib/utils";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calculator, MessageCircle, AlertCircle, Sparkles, Check, ChevronRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface LayoutOption {
  id: string;
  name: string;
  minLen: number;
  maxLen: number;
  defaultLen: number;
  iconLabel: string;
}

const LAYOUTS: LayoutOption[] = [
  { id: "straight", name: "Single Line (Lurus)", minLen: 1.8, maxLen: 5.0, defaultLen: 2.5, iconLabel: "Straight" },
  { id: "letter_l", name: "Letter L (Sudut)", minLen: 2.5, maxLen: 7.0, defaultLen: 3.5, iconLabel: "Letter L" },
  { id: "letter_u", name: "Letter U", minLen: 4.0, maxLen: 9.0, defaultLen: 5.0, iconLabel: "Letter U" },
  { id: "island", name: "Dengan Island Table", minLen: 3.5, maxLen: 8.0, defaultLen: 4.5, iconLabel: "Island" },
];

export function BudgetEstimator() {
  const [layout, setLayout] = useState<string>("letter_l");
  const [lengthMeter, setLengthMeter] = useState<number>(3.5);
  const [cabinetType, setCabinetType] = useState<"both_standard" | "both_full_ceiling" | "bottom_only">("both_standard");
  const [coreMaterial, setCoreMaterial] = useState<"plywood" | "hmr">("plywood");
  const [finishType, setFinishType] = useState<"hpl_standard" | "hpl_premium" | "duco">("hpl_standard");
  const [topTable, setTopTable] = useState<"none" | "granit_nero" | "solid_surface" | "marmer">("granit_nero");

  // Price calculations based on realistic Sukabumi market standards for 18mm multiplek
  const calculation = useMemo(() => {
    // Base rate per meter lari kabinet bawah
    let bottomRate = 1950000;
    // Base rate per meter lari kabinet atas
    let upperRate = 1850000;

    if (cabinetType === "both_full_ceiling") {
      upperRate = 2500000; // full height to ceiling
    } else if (cabinetType === "bottom_only") {
      upperRate = 0;
    }

    // Material modifier
    if (coreMaterial === "hmr") {
      bottomRate += 150000;
      if (upperRate > 0) upperRate += 150000;
    }

    // Finishing modifier
    if (finishType === "hpl_premium") {
      bottomRate += 200000;
      if (upperRate > 0) upperRate += 200000;
    } else if (finishType === "duco") {
      bottomRate += 850000;
      if (upperRate > 0) upperRate += 850000;
    }

    // Top table per meter
    let topTableRate = 0;
    if (topTable === "granit_nero") {
      topTableRate = 1350000;
    } else if (topTable === "solid_surface") {
      topTableRate = 1750000;
    } else if (topTable === "marmer") {
      topTableRate = 2200000;
    }

    const totalRatePerMeter = bottomRate + upperRate + topTableRate;
    const estimatedBase = totalRatePerMeter * lengthMeter;

    // Island table surcharge if selected
    const islandSurcharge = layout === "island" ? 4500000 : 0;
    const finalCenter = estimatedBase + islandSurcharge;

    const minEstimate = Math.round((finalCenter * 0.95) / 100000) * 100000;
    const maxEstimate = Math.round((finalCenter * 1.1) / 100000) * 100000;

    return {
      minEstimate,
      maxEstimate,
      bottomRate,
      upperRate,
      topTableRate,
    };
  }, [layout, lengthMeter, cabinetType, coreMaterial, finishType, topTable]);

  const handleSendToWhatsApp = () => {
    trackEvent("consultation_form_submit", {
      cta_location: "budget_estimator",
      service_type: "Estimator Simulation",
    });

    const activeLayout = LAYOUTS.find((l) => l.id === layout)?.name || layout;
    const cabLabel =
      cabinetType === "both_standard"
        ? "Kabinet Atas Standar (80cm) + Bawah"
        : cabinetType === "both_full_ceiling"
        ? "Kabinet Atas Full Plafon + Bawah"
        : "Kabinet Bawah Saja";

    const matLabel = coreMaterial === "plywood" ? "Multiplek 18mm Grade A" : "HMR Hijau Moisture Resistant";
    const finLabel =
      finishType === "hpl_standard"
        ? "HPL Standard Wood/Solid"
        : finishType === "hpl_premium"
        ? "HPL Premium Textured"
        : "Cat Duco PU Satin";

    const topLabel =
      topTable === "granit_nero"
        ? "Granit Hitam Nero Absoluto"
        : topTable === "solid_surface"
        ? "Solid Surface Seamless"
        : topTable === "marmer"
        ? "Marmer Putih Carrara"
        : "Tanpa Top Table (Meja Cor/Milik Sendiri)";

    const msg = [
      "Halo Kitchen Set Sukabumi, saya sudah mencoba simulasi Kalkulator Biaya di website:",
      `• Bentuk Layout: ${activeLayout}`,
      `• Estimasi Panjang: ${lengthMeter} meter`,
      `• Pilihan Kabinet: ${cabLabel}`,
      `• Material Bodi: ${matLabel}`,
      `• Finishing: ${finLabel}`,
      `• Top Table: ${topLabel}`,
      `• Perkiraan Estimasi: ${formatRupiah(calculation.minEstimate)} - ${formatRupiah(calculation.maxEstimate)}`,
      "",
      "Apakah bisa dijadwalkan survey lokasi untuk cek ukuran pastinya di rumah saya?",
    ].join("\n");

    const url = generateWhatsAppLink({ customMessage: msg });
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl border border-editorial-200 shadow-float overflow-hidden">
      <div className="bg-editorial-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <Badge variant="accent" className="bg-accent/20 text-accent-light border-accent/40 font-semibold">
            <Calculator className="w-3.5 h-3.5 mr-1" />
            Kalkulator Transparan
          </Badge>
          <span className="text-xs text-editorial-400">
            Estimasi Awal Berbasis Spesifikasi Asli Sukabumi
          </span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Simulasi Estimasi Biaya Kitchen Set
        </h3>
        <p className="text-xs sm:text-sm text-editorial-300 max-w-2xl mt-1">
          Pilih tata letak, panjang dinding, bahan baku, dan penutup meja untuk melihat kisaran realistis sebelum konsultasi.
        </p>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Interactive Parameters */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Layout */}
          <div>
            <label className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-2">
              1. Pilih Bentuk Tata Letak (Layout)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {LAYOUTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setLayout(item.id);
                    setLengthMeter(item.defaultLen);
                  }}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    layout === item.id
                      ? "border-accent bg-accent/5 text-editorial-900 font-bold shadow-sm"
                      : "border-editorial-200 text-editorial-700 hover:bg-editorial-50"
                  }`}
                >
                  <span className="block text-xs">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Panjang Meter Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-editorial-800 uppercase tracking-wider">
                2. Estimasi Panjang Kabinet (Meter Lari)
              </label>
              <span className="text-sm font-bold text-accent bg-accent/10 px-2.5 py-0.5 rounded-md">
                {lengthMeter.toFixed(1)} Meter
              </span>
            </div>
            <input
              type="range"
              min="1.5"
              max="8.0"
              step="0.1"
              value={lengthMeter}
              onChange={(e) => setLengthMeter(parseFloat(e.target.value))}
              className="w-full h-2 bg-editorial-200 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-[10px] text-editorial-500 mt-1">
              <span>1.5m (Dapur Compact)</span>
              <span>4.0m (Dapur Sedang)</span>
              <span>8.0m (Dapur Luas)</span>
            </div>
          </div>

          {/* Step 3: Kabinet Atas / Bawah */}
          <div>
            <label className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-2">
              3. Konfigurasi Kabinet
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setCabinetType("both_standard")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  cabinetType === "both_standard"
                    ? "border-accent bg-accent/5 font-bold text-editorial-900"
                    : "border-editorial-200 text-editorial-700 hover:bg-editorial-50"
                }`}
              >
                <div className="text-xs">Atas + Bawah</div>
                <div className="text-[10px] text-editorial-500 font-normal">Tinggi standar 80cm</div>
              </button>

              <button
                type="button"
                onClick={() => setCabinetType("both_full_ceiling")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  cabinetType === "both_full_ceiling"
                    ? "border-accent bg-accent/5 font-bold text-editorial-900"
                    : "border-editorial-200 text-editorial-700 hover:bg-editorial-50"
                }`}
              >
                <div className="text-xs">Full Plafon (Penuh)</div>
                <div className="text-[10px] text-editorial-500 font-normal">Menyentuh langit-langit</div>
              </button>

              <button
                type="button"
                onClick={() => setCabinetType("bottom_only")}
                className={`p-3 rounded-xl border text-left transition-all ${
                  cabinetType === "bottom_only"
                    ? "border-accent bg-accent/5 font-bold text-editorial-900"
                    : "border-editorial-200 text-editorial-700 hover:bg-editorial-50"
                }`}
              >
                <div className="text-xs">Kabinet Bawah Saja</div>
                <div className="text-[10px] text-editorial-500 font-normal">Tanpa lemari gantung</div>
              </button>
            </div>
          </div>

          {/* Step 4: Finishing & Top Table (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-2">
                4. Jenis Finishing
              </label>
              <select
                value={finishType}
                onChange={(e) => setFinishType(e.target.value as "hpl_standard" | "hpl_premium" | "duco")}
                className="w-full p-2.5 rounded-xl border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-accent/20 outline-none"
              >
                <option value="hpl_standard">HPL Standar (Kayu / Solid Matte)</option>
                <option value="hpl_premium">HPL Premium (Marmer / Steel Texture)</option>
                <option value="duco">Cat Duco Polyurethane Satin</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-editorial-800 uppercase tracking-wider mb-2">
                5. Top Table (Meja Kerja)
              </label>
              <select
                value={topTable}
                onChange={(e) => setTopTable(e.target.value as "none" | "granit_nero" | "solid_surface" | "marmer")}
                className="w-full p-2.5 rounded-xl border border-editorial-300 text-xs bg-white text-editorial-800 focus:ring-2 focus:ring-accent/20 outline-none"
              >
                <option value="granit_nero">Granit Alam Hitam Nero (Favorit)</option>
                <option value="solid_surface">Solid Surface (Sambungan Mulus)</option>
                <option value="marmer">Marmer Import White Carrara</option>
                <option value="none">Tanpa Top Table (Meja Cor Lama / Sendiri)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Output & WhatsApp Action Card */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-editorial-50 p-6 border border-editorial-200">
          <div className="space-y-4">
            <div className="pb-3 border-b border-editorial-200/80">
              <span className="text-xs font-semibold text-editorial-500 uppercase tracking-wider">
                Estimasi Rentang Biaya
              </span>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-primary mt-1">
                {formatRupiah(calculation.minEstimate)}
                <span className="text-sm text-editorial-500 font-sans font-normal mx-1.5">s/d</span>
                {formatRupiah(calculation.maxEstimate)}
              </div>
              <p className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Sudah termasuk engsel hidrolik soft-close & survey Sukabumi
              </p>
            </div>

            <div className="space-y-2 text-xs text-editorial-700">
              <div className="flex justify-between">
                <span className="text-editorial-500">Material Bodi:</span>
                <span className="font-semibold text-editorial-900">Multiplek 18mm Grade A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-editorial-500">Perkiraan Panjang:</span>
                <span className="font-semibold text-editorial-900">{lengthMeter} Meter</span>
              </div>
              <div className="flex justify-between">
                <span className="text-editorial-500">Garansi:</span>
                <span className="font-semibold text-editorial-900">Pemeliharaan 6 Bulan</span>
              </div>
            </div>

            {/* Disclaimer (PRD requirement) */}
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Catatan Transparan:</strong> Estimasi kalkulator ini merupakan acuan simulasi awal. Nilai penawaran final (RAB) akan ditentukan setelah survey pengukuran aktual dan persetujuan desain 3D di lokasi.
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-editorial-200/80 space-y-3">
            <Button
              type="button"
              variant="whatsapp"
              size="lg"
              onClick={handleSendToWhatsApp}
              className="w-full shadow-md"
            >
              <MessageCircle className="w-4 h-4 mr-2 fill-white" />
              Kirim Hasil Simulasi ke WhatsApp
            </Button>
            <p className="text-[10px] text-editorial-500 text-center">
              Hasil simulasi akan langsung diformat rapi ke chat admin tanpa perlu mengetik ulang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
