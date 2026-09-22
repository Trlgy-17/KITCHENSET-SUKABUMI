"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";
import { FOLDER_CATALOG } from "@/data/folderCatalog";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { MapPin, Layers, ArrowRight, Check, Folder, Grid, Image as ImageIcon, X } from "lucide-react";

export default function PortfolioPage() {
  const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"projects" | "gallery">("projects");
  const [activePreviewImage, setActivePreviewImage] = useState<string | null>(null);

  const folderTabs = [
    { label: "Semua Folder", value: "all", count: FOLDER_CATALOG.reduce((acc, f) => acc + f.totalImages, 0) },
    { label: "Kitchen Set", value: "kitchenset", count: FOLDER_CATALOG.find(f => f.slug === "kitchenset")?.totalImages || 22 },
    { label: "Backdrop TV", value: "bacdrop-tv", count: FOLDER_CATALOG.find(f => f.slug === "bacdrop-tv")?.totalImages || 9 },
    { label: "Lemari Bawah Tangga", value: "lemari-bawah-tangga", count: FOLDER_CATALOG.find(f => f.slug === "lemari-bawah-tangga")?.totalImages || 26 },
    { label: "Wardrobe", value: "wardrobe", count: FOLDER_CATALOG.find(f => f.slug === "wardrobe")?.totalImages || 31 },
    { label: "Bedroom", value: "bedroom", count: FOLDER_CATALOG.find(f => f.slug === "bedroom")?.totalImages || 8 },
    { label: "Interior Toko", value: "interior-toko", count: FOLDER_CATALOG.find(f => f.slug === "interior-toko")?.totalImages || 5 },
    { label: "Apartemen", value: "apartemen", count: FOLDER_CATALOG.find(f => f.slug === "apartemen")?.totalImages || 4 },
    { label: "Before & After", value: "before-after", count: FOLDER_CATALOG.find(f => f.slug === "before-after")?.totalImages || 2 },
  ];

  // Filter projects by folderCategory
  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (selectedFolder !== "all" && p.folderCategory !== selectedFolder) return false;
    return true;
  });

  // Filter folder catalog for gallery view
  const filteredCatalog = FOLDER_CATALOG.filter((f) => {
    if (selectedFolder !== "all" && f.slug !== selectedFolder) return false;
    return true;
  });

  return (
    <div className="bg-[#F4F1EA] min-h-screen py-8 md:py-12 border-b border-[#D8D2C7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumb items={[{ name: "Portofolio Proyek" }]} />

        {/* Page Header */}
        <div className="bg-[#FAF8F4] rounded-[20px] p-8 sm:p-12 border border-[#D8D2C7] shadow-ambient space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5" />
              DOKUMENTASI ASLI LOKAL (PORTOFOLIO SUKABUMI)
            </span>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#EBE5DA] rounded-full border border-[#D8D2C7]">
              <button
                type="button"
                onClick={() => setViewMode("projects")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "projects"
                    ? "bg-[#171715] text-[#FCFBF8] shadow-xs"
                    : "text-[#65625B] hover:text-[#171715]"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Studi Kasus</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("gallery")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  viewMode === "gallery"
                    ? "bg-[#171715] text-[#FCFBF8] shadow-xs"
                    : "text-[#65625B] hover:text-[#171715]"
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Galeri Foto ({FOLDER_CATALOG.reduce((a, b) => a + b.totalImages, 0)})</span>
              </button>
            </div>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-[#171715] tracking-tight uppercase leading-[1.12]">
            Katalog Portofolio &{" "}
            <span className="font-serif italic font-normal text-[#76563E] lowercase block sm:inline">
              galeri per folder pengerjaan.
            </span>
          </h1>

          <p className="text-[15px] text-[#5C5954] max-w-3xl leading-relaxed">
            Seluruh foto di bawah ini merupakan dokumentasi nyata hasil pengerjaan tim KitchenSet Sukabumi yang dipisahkan rapi berdasarkan folder kategorinya masing-masing: Kitchen Set, Backdrop TV, Lemari Bawah Tangga, Wardrobe, Bedroom, Interior Toko, Apartemen, dan Before-After.
          </p>

          {/* Folder Category Pills Filter */}
          <div className="pt-4 border-t border-[#D8D2C7] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {folderTabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setSelectedFolder(t.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedFolder === t.value
                    ? "bg-[#171715] text-[#FCFBF8] shadow-sm"
                    : "bg-[#EBE5DA]/80 text-[#5C5954] hover:bg-[#EBE5DA] hover:text-[#171715] border border-[#D8D2C7]/60"
                }`}
              >
                <span>{t.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedFolder === t.value
                      ? "bg-white/20 text-white"
                      : "bg-[#D8D2C7]/70 text-[#474741]"
                  }`}
                >
                  {t.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* MODE 1: PROJECT CASE STUDIES */}
        {viewMode === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-[18px] overflow-hidden border border-[#D8D2C7] bg-[#FAF8F4] shadow-ambient transition-all duration-300 hover:border-[#171715]"
              >
                <div>
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#D8CDBF]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#171715]/85 backdrop-blur-md text-white text-[10.5px] px-3 py-1 rounded-full font-semibold flex items-center gap-1.5 shadow-sm">
                        <MapPin className="w-3 h-3 text-[#A86E4C]" />
                        {project.location}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#FAF8F4]/90 backdrop-blur-md text-[#171715] text-[10px] px-2.5 py-1 rounded-full uppercase font-bold tracking-wider border border-[#D8D2C7]">
                        {project.folderName || project.style}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#A86E4C] block">
                      FOLDER: {project.folderName} &bull; {project.gallery.length} FOTO
                    </span>
                    <h3 className="font-sans text-lg font-bold text-[#171715] group-hover:text-[#76563E] transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#5C5954] line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="pt-3 border-t border-[#E5E0D8] space-y-1.5 text-[11px] text-[#5C5954]">
                      <div className="flex items-center gap-1.5 truncate">
                        <Layers className="w-3.5 h-3.5 text-[#A86E4C] shrink-0" />
                        <span className="font-semibold text-[#171715]">Bahan:</span>
                        <span className="truncate">{project.materials[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Check className="w-3.5 h-3.5 text-[#486B56] shrink-0" />
                        <span className="font-semibold text-[#171715]">Spesifikasi:</span>
                        <span className="truncate">{project.finishes[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-[10px] bg-[#171715] hover:bg-[#76563E] text-[#FCFBF8] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Buka Detail & Galeri ({project.gallery.length} Foto)
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODE 2: GALLERY PER FOLDER */}
        {viewMode === "gallery" && (
          <div className="space-y-16">
            {filteredCatalog.map((catalog) => (
              <div
                key={catalog.slug}
                id={`folder-${catalog.slug}`}
                className="bg-[#FAF8F4] rounded-[20px] p-6 sm:p-8 border border-[#D8D2C7] shadow-ambient space-y-6"
              >
                {/* Folder Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#D8D2C7] pb-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#A86E4C] flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5" />
                      FOLDER: {catalog.folderName}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#171715]">
                      {catalog.displayName}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5C5954]">
                      {catalog.description}
                    </p>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-[#EBE5DA] text-[#171715] font-mono text-xs font-bold shrink-0 self-start sm:self-auto border border-[#D8D2C7]">
                    {catalog.totalImages} Foto Tersedia
                  </span>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {catalog.images.map((img) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActivePreviewImage(img.publicUrl)}
                      className="group relative aspect-square rounded-[14px] overflow-hidden border border-[#D8D2C7] bg-[#EBE5DA] shadow-xs hover:border-[#171715] transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#171715]"
                    >
                      <Image
                        src={img.publicUrl}
                        alt={img.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171715]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-white text-[11px] font-medium tracking-wide">
                          Klik untuk memperbesar
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal Preview */}
        {activePreviewImage && (
          <div
            className="fixed inset-0 z-50 bg-[#171715]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActivePreviewImage(null)}
          >
            <button
              type="button"
              onClick={() => setActivePreviewImage(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Tutup Preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-h-[80vh] rounded-[16px] overflow-hidden shadow-2xl border border-white/20">
                <Image
                  src={activePreviewImage}
                  alt="Preview Foto Portofolio"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
