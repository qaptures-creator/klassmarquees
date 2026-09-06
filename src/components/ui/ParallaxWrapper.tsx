"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Client-only scroll transform. Deliberately does not import EditorialImage
 * (which reads the filesystem) — the parent server component renders the
 * image and passes it in as children, keeping fs-using code out of the
 * client bundle.
 */
export default function ParallaxWrapper({
  children,
  className,
  range = 6,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : [`-${range}%`, `${range}%`],
  );

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <motion.div style={{ y }} className={className ?? "absolute inset-x-0 -top-[8%] -bottom-[8%]"}>
        {children}
      </motion.div>
    </div>
  );
}
