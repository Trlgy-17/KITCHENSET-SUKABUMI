"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleOpenChat = () => {
    trackEvent("whatsapp_click", {
      cta_location: "floating_whatsapp",
      cta_text: "Hubungi via WhatsApp",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden gpu-layer">
      {/* Quick message card tooltip with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12, scale: prefersReduced ? 1 : 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: prefersReduced ? 0 : 8, scale: prefersReduced ? 1 : 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-80 rounded-[18px] glass-surface p-4 shadow-ambient transition-all"
          >
            <div className="flex items-start justify-between pb-3 border-b border-hairline/60">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-white/90 border border-hairline p-1 flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                  <Image
                    src="/logo-icon.png"
                    alt="KS"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink leading-tight">
                    Konsultasi Desain Dapur
                  </h4>
                  <p className="text-[11px] text-forest font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                    Online &bull; Respon Cepat Sukabumi
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ink-muted hover:text-ink p-1 transition-colors rounded-full hover:bg-black/5 active:scale-95"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-ink-soft py-3 leading-relaxed">
              Halo! Ada yang bisa kami bantu seputar ukuran, estimasi harga, atau jadwal survey kitchen set di Sukabumi?
            </p>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenChat}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-[12px] bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-sm transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              Mulai Chat WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with tactile micro-interaction */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: prefersReduced ? 1 : 1.04 }}
        whileTap={{ scale: prefersReduced ? 1 : 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-ambient transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-forest/30"
        aria-label="Chat WhatsApp Admin Kitchen Set Sukabumi"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
          Konsultasi WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
