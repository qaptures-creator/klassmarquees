"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ivory/10 bg-navy/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <Button href="/contact" showArrow={false} className="w-full">
        Plan Your Event
      </Button>
    </div>
  );
}
