"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  variant?: "rise" | "mask";
  once?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.9,
  className,
  variant = "rise",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const d = shouldReduceMotion ? 0.01 : duration;
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const riseVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0, transition: { duration: d, delay, ease } },
  };

  const maskVariants: Variants = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)", transition: { duration: d, delay, ease } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={variant === "mask" ? maskVariants : riseVariants}
    >
      {children}
    </motion.div>
  );
}
