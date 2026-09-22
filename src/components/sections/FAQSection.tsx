"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/faqs";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F1EA] border-b border-[#D8D2C7]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A86E4C] block">
              PERTANYAAN UMUM
            </span>

            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#191816] tracking-tight uppercase leading-[1.15]">
              Sebelum Memulai{" "}
              <span className="font-serif italic font-normal text-[#76563E] lowercase block sm:inline">
                project Anda.
              </span>
            </h2>

            <p className="text-[15px] text-[#474741] leading-relaxed font-sans">
              Informasi lengkap seputar alur survei, ketentuan desain 3D, skema pembayaran DP 50%, hingga garansi pemeliharaan 6 bulan.
            </p>

            <div className="pt-6 border-t border-[#D8D2C7]">
              <p className="text-xs text-[#6F6B63] mb-2">
                Ada pertanyaan lain seputar denah atau kondisi ruang Anda?
              </p>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#191816] hover:text-[#76563E] transition-colors active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Konsultasi Langsung via WhatsApp &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right accordion column with Framer Motion spring */}
          <div className="lg:col-span-7 divide-y divide-[#D8D2C7] border-y border-[#D8D2C7]">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id} className="py-5 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left flex items-center justify-between gap-6 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-base sm:text-lg font-semibold text-[#191816] group-hover:text-[#76563E] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A86E4C] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: prefersReduced ? 0.15 : 0.28,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-2 text-[14px] text-[#474741] leading-relaxed font-sans">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
