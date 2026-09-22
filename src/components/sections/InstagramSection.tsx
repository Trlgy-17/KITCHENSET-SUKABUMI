"use client";

import React from "react";
import Image from "next/image";
import { contact } from "@/config/site";
import { Instagram, ArrowUpRight } from "lucide-react";

export function InstagramSection() {
  const posts = [
    {
      image: "/kitchen/1.jpeg",
      caption: "Kitchen set modern dengan peninsula & kabinet full-height.",
    },
    {
      image: "/kitchen/2.jpeg",
      caption: "Kabinet hijau, aksen kayu & lighting terintegrasi.",
    },
    {
      image: "/kitchen/7.jpg",
      caption: "Kitchen set grey dengan peninsula & storage maksimal.",
    },
    {
      image: "/kitchen/11.jpeg",
      caption: "Kitchen set compact dengan dining area terintegrasi.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF8F4] border-b border-[#D8D2C7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] block">
              DOKUMENTASI MEDIA SOSIAL
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#191816] tracking-tight uppercase leading-tight">
              Ikuti Proses &amp;{" "}
              <span className="font-serif italic font-normal text-[#76563E] lowercase block sm:inline">
                project terbaru kami.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6B63]">
              Update berkala seputar proses workshop, instalasi lapangan, dan dokumentasi proyek nyata di Sukabumi.
            </p>
          </div>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] border border-[#D8D2C7] bg-[#F4F1EA] hover:bg-[#191816] text-[#191816] hover:text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.97]"
          >
            <Instagram className="w-4 h-4 text-[#A86E4C]" />
            <span>Lihat Instagram {contact.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4-Column Image Grid with Real Authentic Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-[16px] overflow-hidden border border-[#D8D2C7] bg-[#D8CDBF] block card-lift-60fps shadow-ambient"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181715]/85 via-[#181715]/20 to-transparent flex items-end p-3.5 sm:p-4">
                <p className="text-[11px] sm:text-[12px] font-medium text-white leading-snug drop-shadow-sm">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
