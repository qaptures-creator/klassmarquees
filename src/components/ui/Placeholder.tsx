import type { GalleryCategory } from "@/types";

type PlaceholderCategory = GalleryCategory | "hero" | "process";

const CATEGORY_STOPS: Record<PlaceholderCategory, [string, string]> = {
  hero: ["#0b243a", "#04111f"],
  weddings: ["#12354f", "#0b243a"],
  "private-events": ["#071a2d", "#04111f"],
  corporate: ["#0b243a", "#12354f"],
  interiors: ["#1c4c6d", "#071a2d"],
  "night-events": ["#04111f", "#071a2d"],
  process: ["#12354f", "#0b243a"],
};

// Small deterministic hash so repeated placeholders in a dense grid (e.g.
// the gallery) don't all render as an identical stamped tile.
function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}

const GRADIENT_ANGLES: [number, number, number, number][] = [
  [0, 0, 100, 100],
  [100, 0, 0, 100],
  [0, 20, 100, 80],
  [100, 20, 0, 80],
];

export default function Placeholder({
  category = "interiors",
  label,
  seed,
  className,
}: {
  category?: PlaceholderCategory;
  label: string;
  seed?: string;
  className?: string;
}) {
  const [from, to] = CATEGORY_STOPS[category] ?? CATEGORY_STOPS.interiors;
  const hash = hashSeed(seed || label);
  const gradientId = `grad-${category}-${hash.toString(36)}`;
  const [x1, y1, x2, y2] = GRADIENT_ANGLES[hash % GRADIENT_ANGLES.length];
  const glyphOpacity = (0.4 + ((hash >> 3) % 25) / 100).toFixed(2);
  const glyphShiftX = ((hash >> 6) % 21) - 10;

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
          <linearGradient id={gradientId} x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}>
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#${gradientId})`} />
        <g transform={`translate(${glyphShiftX}, 0)`} opacity={glyphOpacity}>
          <path
            d="M140 300 L200 190 L260 300 M170 300 L200 245 L230 300"
            fill="none"
            stroke="#9cbed3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
