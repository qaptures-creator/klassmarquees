"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import GalleryFrame from "@/components/gallery/GalleryFrame";
import type { GalleryCategory } from "@/types";

export interface StoryBeat {
  title: string;
  description: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  exists: boolean;
}

function BeatLayer({
  index,
  total,
  scrollYProgress,
  children,
}: {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  children: (opacity: MotionValue<number>, y: MotionValue<number>) => ReactNode;
}) {
  const feather = 0.1;
  const start = index / total;
  const end = (index + 1) / total;
  const input =
    index === 0
      ? [start, end - feather, end]
      : index === total - 1
        ? [start, start + feather, end]
        : [start, start + feather, end - feather, end];
  const output = index === 0 ? [1, 1, 0] : index === total - 1 ? [0, 1, 1] : [0, 1, 1, 0];
  const opacity = useTransform(scrollYProgress, input, output);
  const y = useTransform(opacity, [0, 1], [16, 0]);
  return <>{children(opacity, y)}</>;
}

export default function StickyStoryClient({ beats }: { beats: StoryBeat[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} style={{ height: `${beats.length * 100}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen w-full items-end overflow-hidden bg-navy">
        {beats.map((beat, i) => (
          <BeatLayer key={beat.title} index={i} total={beats.length} scrollYProgress={scrollYProgress}>
            {(opacity) => (
              <motion.div style={{ opacity }} className="absolute inset-0">
                <GalleryFrame
                  src={beat.src}
                  alt={beat.alt}
                  category={beat.category}
                  exists={beat.exists}
                  fill
                  priority={i === 0}
                />
              </motion.div>
            )}
          </BeatLayer>
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-20 sm:px-8 lg:px-12">
          <div className="relative h-44 sm:h-32">
            {beats.map((beat, i) => (
              <BeatLayer key={beat.title} index={i} total={beats.length} scrollYProgress={scrollYProgress}>
                {(opacity, y) => (
                  <motion.div
                    style={{ opacity, y: shouldReduceMotion ? 0 : y }}
                    className="absolute inset-x-0 bottom-0 max-w-2xl"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-light">
                      {String(i + 1).padStart(2, "0")} / {String(beats.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-serif text-h2 font-medium text-ivory text-balance">
                      {beat.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base">
                      {beat.description}
                    </p>
                  </motion.div>
                )}
              </BeatLayer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
