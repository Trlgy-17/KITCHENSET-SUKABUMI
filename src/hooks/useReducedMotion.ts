'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect and listen for OS prefers-reduced-motion preference.
 * Conforms to accessible-animation skill tiering guidelines.
 */
export function useReducedMotion(): boolean {
  const query = '(prefers-reduced-motion: reduce)';
  const get = () =>
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia(query).matches
      : false;

  const [reduced, setReduced] = useState<boolean>(get);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
