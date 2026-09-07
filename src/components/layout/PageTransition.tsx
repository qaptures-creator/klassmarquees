"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";

/**
 * Restrained enter-only route transition. Keying on pathname remounts the
 * wrapper on navigation, which is enough for a tasteful fade + rise without
 * fighting the App Router's own streaming/suspense boundaries — a true
 * exit animation would need the old page kept alive past its unmount,
 * which isn't worth the complexity for a "polished, not flashy" transition.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
