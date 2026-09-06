import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  size?: "display" | "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "dark",
  size = "h1",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const textTone = tone === "light" ? "text-ivory" : "text-ink";
  const descTone = tone === "light" ? "text-ivory/70" : "text-ink/65";

  return (
    <div className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow className={cn(isCenter && "justify-center")}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className={cn("mt-5 text-balance font-serif font-medium", `text-${size}`, textTone)}>
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className={cn("mt-5 text-lead text-pretty", descTone)}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
