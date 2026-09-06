"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import GalleryFrame from "./GalleryFrame";
import type { GalleryImage } from "@/types";

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: (GalleryImage & { exists: boolean })[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const open = index !== null;
  const current = open ? images[index] : null;

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index! + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index! - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer: ${current.caption}`}
          tabIndex={-1}
          className="fixed inset-0 z-[70] flex flex-col bg-obsidian/97 outline-none backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-5 sm:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory/60">
              {index! + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image viewer"
              className="flex h-11 w-11 items-center justify-center text-ivory transition-colors hover:text-bronze-light"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M1 1L21 21M21 1L1 21"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-10">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((index! - 1 + images.length) % images.length);
              }}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory transition-colors hover:text-bronze-light sm:left-4"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M12 3L5 10L12 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.35 }}
              className="relative h-full max-h-[75vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <GalleryFrame
                src={current.src}
                alt={current.alt}
                category={current.category}
                exists={current.exists}
                className="h-full w-full"
                sizes="90vw"
                priority
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((index! + 1) % images.length);
              }}
              aria-label="Next image"
              className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-ivory transition-colors hover:text-bronze-light sm:right-4"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M8 3L15 10L8 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <p className="px-6 pb-8 text-center text-sm text-ivory/70">{current.caption}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
