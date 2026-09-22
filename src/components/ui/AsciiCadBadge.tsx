'use client';

import React, { useState, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { motion, AnimatePresence } from 'motion/react';

interface AsciiCadBadgeProps {
  className?: string;
}

const BADGE_FRAMES = [
  "SINCE 2018 // 3800+ PROJECT TERPASANG",
  "AREA LAYANAN: JABAR - JABODETABEK - JATENG - JATIM",
  "SINCE 2018 • 3800+ PROJECT TERPASANG",
  "AREA LAYANAN: JABAR - JABODETABEK - JATENG - JATIM",
];

export function AsciiCadBadge({ className = '' }: AsciiCadBadgeProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % BADGE_FRAMES.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [prefersReduced]);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#FAF8F3]/90 border border-[#DCD5CA] text-[#8A6248] font-mono text-[10.5px] sm:text-[11px] tracking-wider select-none shadow-xs overflow-hidden ${className}`}
      aria-label="Informasi Proyek dan Area Layanan"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-[#8A6248] animate-pulse shrink-0" />
      <AnimatePresence mode="wait">
        <motion.span
          key={frameIndex}
          initial={{ opacity: 0, y: prefersReduced ? 0 : 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReduced ? 0 : -4 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap"
        >
          {BADGE_FRAMES[frameIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
