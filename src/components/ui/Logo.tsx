import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Icon + wordmark lockup, used in the header, footer and mobile menu. The
 * mark is decorative (the adjacent wordmark already gives the link its
 * accessible name), so it's rendered with an empty alt and hidden from
 * assistive tech rather than announced twice.
 */
export default function Logo({
  className,
  markClassName = "h-8 w-auto",
  textClassName,
  onClick,
  priority = false,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  onClick?: () => void;
  priority?: boolean;
}) {
  return (
    <Link href="/" onClick={onClick} className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/brand/logo-mark.webp"
        alt=""
        aria-hidden="true"
        width={80}
        height={41}
        priority={priority}
        className={cn("shrink-0", markClassName)}
      />
      <span className={cn("font-serif font-semibold text-ivory", textClassName)}>KLASS MARQUEES</span>
    </Link>
  );
}
