export type OccasionCategory = "weddings" | "private-events" | "corporate";

export interface NavLink {
  label: string;
  href: string;
}

export interface PhoneLine {
  label: string;
  display: string;
  tel: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
  context?: string;
}

export type GalleryCategory =
  | "weddings"
  | "private-events"
  | "corporate"
  | "interiors"
  | "night-events";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  orientation: "landscape" | "portrait" | "square";
  featured?: boolean;
}

export interface ServicePageContent {
  slug: string;
  category: OccasionCategory;
  navLabel: string;
  eyebrow: string;
  heroHeadline: string;
  heroSubhead: string;
  heroImage: string;
  introHeading: string;
  introParagraphs: string[];
  options: ServiceCapability[];
  planningSteps: ProcessStep[];
  faqs: FAQ[];
  galleryCategory: GalleryCategory;
  ctaHeadline: string;
}
