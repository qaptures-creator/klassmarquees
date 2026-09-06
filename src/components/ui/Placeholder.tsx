import type { GalleryCategory } from "@/types";

type PlaceholderCategory = GalleryCategory | "hero" | "process";

const CATEGORY_STOPS: Record<PlaceholderCategory, [string, string]> = {
  hero: ["#16150f", "#0b0b0a"],
  weddings: ["#ebe4d5", "#b9b1a5"],
  "private-events": ["#1c1a15", "#0b0b0a"],
  corporate: ["#b9b1a5", "#ebe4d5"],
  interiors: ["#b59a63", "#16150f"],
  "night-events": ["#16150f", "#0b0b0a"],
  process: ["#ebe4d5", "#d3bd8d"],
};

export default function Placeholder({
  category = "interiors",
  label,
  className,
}: {
  category?: PlaceholderCategory;
  label: string;
  className?: string;
}) {
  const [from, to] = CATEGORY_STOPS[category] ?? CATEGORY_STOPS.interiors;
  const gradientId = `grad-${category}`;

  return (
    <div role="img" aria-label={label} className={className ?? "absolute inset-0"}>
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${gradientId})`} />
        <rect x="14" y="14" width="372" height="472" fill="none" stroke="#b59a63" strokeOpacity="0.35" strokeWidth="1" />
        <path
          d="M140 300 L200 190 L260 300 M170 300 L200 245 L230 300"
          fill="none"
          stroke="#b59a63"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
