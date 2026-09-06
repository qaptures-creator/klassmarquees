import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "onDark" | "outlineDark" | "outlineLight";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
  onClick?: () => void;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-bronze text-obsidian hover:bg-bronze-light",
  onDark: "bg-ivory text-obsidian hover:bg-bronze-light",
  outlineDark: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  outlineLight: "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory hover:text-obsidian",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  showArrow = true,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-[44px] items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ease-out",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          aria-hidden="true"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          className="shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          <path
            d="M0.5 5H15M15 5L11 1M15 5L11 9"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
