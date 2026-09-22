'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface LottieBadgeProps {
  className?: string;
  size?: number;
}

/**
 * High-performance vector Lottie-style craftsmanship guarantee animation.
 * Runs on 60fps canvas, respects accessible-animation reduce query,
 * and scales responsively.
 */
export function LottieGuaranteeBadge({ className = '', size = 56 }: LottieBadgeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let progress = 0;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const render = (t: number) => {
      ctx.clearRect(0, 0, size, size);
      const center = size / 2;
      const radius = size * 0.42;

      // 1. Rotating architectural dashed circle (slow 60fps spin)
      ctx.save();
      ctx.translate(center, center);
      if (!prefersReduced) {
        ctx.rotate((t * 0.0008) % (Math.PI * 2));
      }
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#DCD5CA';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.restore();

      // 2. Shield / Seal polygon
      ctx.save();
      ctx.translate(center, center);
      ctx.beginPath();
      const points = 8;
      const innerR = radius * 0.72;
      const outerR = radius * 0.88;
      for (let i = 0; i < points * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (i * Math.PI) / points;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = '#8A6248';
      ctx.fill();

      // 3. Animated checkmark with pulsing scale
      const scale = prefersReduced ? 1 : 1 + Math.sin(t * 0.003) * 0.04;
      ctx.scale(scale, scale);
      ctx.beginPath();
      ctx.moveTo(-7, 0);
      ctx.lineTo(-2, 5);
      ctx.lineTo(8, -5);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      ctx.restore();

      if (!prefersReduced) {
        animId = requestAnimationFrame(render);
      }
    };

    if (prefersReduced) {
      render(0);
    } else {
      animId = requestAnimationFrame(render);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [size, prefersReduced]);

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="w-full h-full"
      />
    </div>
  );
}
