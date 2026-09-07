"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Persistent, fixed backdrop mounted once at the root layout — stays behind
 * every page's content (negative z-index) rather than living inside any one
 * section, so its soft light blooms and the marquee-outline mark drift at
 * their own slow, bounded rates for the whole scroll journey instead of
 * resetting per-page. Kept to transform/opacity only (no layout-triggering
 * properties) and fully still under prefers-reduced-motion.
 */
export default function AtmosphericBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const range = (to: number) => (shouldReduceMotion ? [0, 0] : [0, to]);

  const bloomOneY = useTransform(scrollYProgress, [0, 1], range(-140));
  const bloomTwoY = useTransform(scrollYProgress, [0, 1], range(-70));
  const bloomThreeY = useTransform(scrollYProgress, [0, 1], range(-210));
  const glyphY = useTransform(scrollYProgress, [0, 1], range(-90));
  const glyphScale = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [1, 1] : [1, 1.18]);
  const glyphOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    shouldReduceMotion ? [0.4, 0.4, 0.4] : [0.34, 0.5, 0.16],
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -8%, rgba(80,122,154,0.20), transparent 62%)",
        }}
      />

      <motion.div
        style={{ y: bloomOneY }}
        className="absolute -left-[20%] top-[6%] h-[42rem] w-[42rem] rounded-full bg-accent/[0.09] blur-[130px] sm:h-[54rem] sm:w-[54rem]"
      />
      <motion.div
        style={{ y: bloomTwoY }}
        className="absolute -right-[15%] top-[42%] h-[36rem] w-[36rem] rounded-full bg-accent-light/[0.06] blur-[150px] sm:h-[46rem] sm:w-[46rem]"
      />
      <motion.div
        style={{ y: bloomThreeY }}
        className="absolute left-[10%] top-[78%] h-[30rem] w-[30rem] rounded-full bg-accent/[0.07] blur-[130px] sm:h-[38rem] sm:w-[38rem]"
      />

      <motion.svg
        style={{ y: glyphY, scale: glyphScale, opacity: glyphOpacity }}
        viewBox="0 0 400 300"
        className="absolute left-1/2 top-1/2 h-[64vmin] w-[85vmin] max-w-[54rem] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M20 260 L200 40 L380 260"
          fill="none"
          stroke="var(--color-accent-light)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M100 260 L200 132 L300 260"
          fill="none"
          stroke="var(--color-accent-light)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>

      <div className="grain-overlay" />
    </div>
  );
}
