"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, primaryPhone } from "@/config/site";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close the mobile menu when navigation happens by any means (back/forward
  // button included) — adjusting state during render rather than in an
  // effect, per https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    let raf = 0;
    function measure() {
      setScrolled(window.scrollY > 32);
    }
    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    }
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        solid
          ? "border-b border-ivory/10 bg-navy-deep/85 shadow-[0_1px_0_0_rgba(4,17,31,0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-navy/60 via-navy/15 to-transparent",
      )}
    >
      <div className="mx-auto flex h-[5.5rem] max-w-[90rem] items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-[0.1em] text-ivory transition-colors duration-500 sm:text-xl"
        >
          KLASS MARQUEES
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.8rem] font-semibold uppercase tracking-[0.1em] transition-colors duration-300",
                pathname === link.href ? "text-accent-light" : "text-ivory/85 hover:text-accent-light",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <a
            href={`tel:${primaryPhone.tel}`}
            className="text-[0.8rem] font-semibold tracking-wide text-ivory/85 transition-colors duration-300 hover:text-accent-light"
          >
            {primaryPhone.display}
          </a>
          <Button href="/contact" showArrow={false} className="!px-6 !py-3">
            Plan Your Event
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center text-ivory xl:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-300",
                menuOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
