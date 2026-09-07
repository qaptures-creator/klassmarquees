"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { navLinks, primaryPhone, siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

function subscribeNoop() {
  return () => {};
}
function getClientSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  // Portalled to <body> rather than rendered inside <header> (which is
  // itself position:fixed with its own z-index and so forms a stacking
  // context) — nesting one fixed, full-viewport overlay inside another
  // is a well-known source of stacking/compositing bugs across browsers.
  // useSyncExternalStore (rather than a mount-effect + setState) is the
  // React-blessed way to read the client/server boundary without a
  // synchronous setState-in-effect.
  const mounted = useSyncExternalStore(subscribeNoop, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[55] flex flex-col bg-obsidian text-ivory lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: "easeOut" }}
        >
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-serif text-xl font-semibold tracking-[0.08em]">
              KLASS MARQUEES
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M1 1L21 21M21 1L1 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex flex-1 flex-col justify-center gap-2 px-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, delay: shouldReduceMotion ? 0 : 0.06 * i }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 font-serif text-4xl font-medium text-ivory transition-colors hover:text-bronze-light"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="space-y-5 border-t border-ivory/15 px-6 py-8">
            <Button href="/contact" onClick={onClose} className="w-full" showArrow={false}>
              Plan Your Event
            </Button>
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-ivory/70">
              <a href={`tel:${primaryPhone.tel}`} className="hover:text-bronze-light">
                {primaryPhone.display}
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze-light"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
