import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  size?: "display" | "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  size = "h1",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("max-w-3xl", isCenter && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow className={cn(isCenter && "justify-center")}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08} variant="mask">
        <h2 className={cn("mt-5 text-balance font-serif font-medium text-ivory", `text-${size}`)}>
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-5 text-lead text-pretty text-ivory/70">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
