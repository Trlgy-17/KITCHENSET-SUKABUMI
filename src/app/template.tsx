'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReduced ? 0.15 : 0.45,
        ease: [0.16, 1, 0.3, 1], // Architectural snappy ease-out
      }}
      className="min-h-screen flex flex-col"
    >
      {children}
    </motion.div>
  );
}
