import type { ProcessStep, ServiceCapability } from "@/types";

export const klassExperience: ProcessStep[] = [
  {
    index: "01",
    title: "Consultation",
    description:
      "We begin with an unhurried conversation about your occasion, your venue and the atmosphere you want to create — in person, on-site or by video call.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Your structure, interior and lighting are drawn up as one composition, tailored to your space and guest count rather than pulled from a fixed package.",
  },
  {
    index: "03",
    title: "Preparation",
    description:
      "Every drape, finish and fixture is scheduled, sourced and checked well ahead of your date, so nothing is left to chance in the final week.",
  },
  {
    index: "04",
    title: "Build & Delivery",
    description:
      "Our team installs, dresses and finishes the space with precision, then returns to strike it down — so you can simply arrive and enjoy the day.",
  },
];

export const signatureCapabilities: (ServiceCapability & { icon: string })[] = [
  {
    icon: "structure",
    title: "Marquee Structures",
    description:
      "From glass-clear frame marquees to expansive clear-span structures, engineered to sit elegantly within your garden, venue or grounds.",
  },
  {
    icon: "drape",
    title: "Interiors & Draping",
    description:
      "Ceiling and wall draping, linings and soft partitions that transform a bare structure into a considered, atmospheric room.",
  },
  {
    icon: "light",
    title: "Lighting",
    description:
      "Layered lighting design — from festoon and uplighting to chandeliers — used to shape mood as the day moves into evening.",
  },
  {
    icon: "furniture",
    title: "Furniture",
    description:
      "Tables, seating and lounge furniture selected to suit your theme, from long banquet tables to soft, intimate lounge settings.",
  },
  {
    icon: "theme",
    title: "Bespoke Themes",
    description:
      "A cohesive design language across colour, texture and styling, developed around your vision rather than a standard template.",
  },
];
