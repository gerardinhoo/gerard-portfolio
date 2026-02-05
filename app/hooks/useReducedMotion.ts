'use client';

import { useReducedMotion } from 'framer-motion';

/**
 * Returns animation variants that respect prefers-reduced-motion.
 * When reduced motion is preferred, animations are disabled.
 */
export function useAccessibleAnimation() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
      };

  const fadeIn = prefersReducedMotion
    ? { initial: {}, animate: {}, transition: {} }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      };

  return {
    prefersReducedMotion,
    fadeInUp,
    fadeIn,
  };
}

export { useReducedMotion };
