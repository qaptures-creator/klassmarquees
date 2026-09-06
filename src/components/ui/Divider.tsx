import { cn } from "@/lib/utils";

export default function Divider({ className }: { className?: string }) {
  return <hr className={cn("hairline border-0", className)} />;
}
