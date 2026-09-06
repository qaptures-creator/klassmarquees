const paths: Record<string, React.ReactNode> = {
  structure: (
    <path d="M4 27L16 7L28 27M9 27V17.5H23V27" strokeLinecap="round" strokeLinejoin="round" />
  ),
  drape: (
    <path
      d="M4 8C7 14 7 18 4 24M12 8C15 14 15 18 12 24M20 8C23 14 23 18 20 24M28 8C25 14 25 18 28 24"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  light: (
    <path
      d="M16 4V7M27 8L25 10M28 18H25M4 18H7M6 8L8 10M12.5 24H19.5M13 21A5 5 0 1119 21C19 22.5 18 23 18 24H14C14 23 13 22.5 13 21Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  furniture: (
    <path
      d="M6 14V26M26 14V26M6 15H26M9 15V9C9 7.5 10 6.5 11.5 6.5H20.5C22 6.5 23 7.5 23 9V15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  theme: (
    <path d="M16 3L27 16L16 29L5 16L16 3ZM16 3V29M5 16H27" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

export default function CapabilityIcon({ name }: { name: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      className="h-8 w-8"
    >
      {paths[name] ?? paths.theme}
    </svg>
  );
}
