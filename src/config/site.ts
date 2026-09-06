import type { NavLink, PhoneLine } from "@/types";

/**
 * Central, editable source of truth for verified business details.
 * Only confirmed facts live here — see README.md and DEPLOYMENT.md for
 * what still needs confirming (email address, WhatsApp number, service
 * radius, founding year, etc.) before publishing claims about them.
 */
export const siteConfig = {
  name: "Klass Marquees",
  legalName: "Klass Marquees",
  tagline: "Unique. Bespoke. Innovative.",
  metaTitle: "Klass Marquees | Luxury Marquee Hire for Weddings & Events",
  description:
    "Bespoke luxury marquee hire for weddings, private celebrations and corporate events — designed around your occasion and delivered with meticulous care.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://klassmarquees.up.railway.app",
  location: {
    city: "Slough",
    region: "Berkshire",
    country: "GB",
  },
  instagram: "https://www.instagram.com/klassmarquee/",
  instagramHandle: "@klassmarquee",
  // Not confirmed — add once verified, the UI only renders this if set.
  email: "",
  // Not confirmed — the UI only renders a WhatsApp CTA if this is set.
  whatsapp: "",
} as const;

export const phoneLines: PhoneLine[] = [
  { label: "HQ · Slough", display: "01753 577778", tel: "+441753577778" },
  { label: "London", display: "020 8089 8555", tel: "+442080898555" },
  { label: "Midlands", display: "0121 790 1555", tel: "+441217901555" },
  { label: "Mobile", display: "07743 803356", tel: "+447743803356" },
];

export const primaryPhone = phoneLines[0];

export const navLinks: NavLink[] = [
  { label: "Weddings", href: "/weddings" },
  { label: "Private Events", href: "/private-events" },
  { label: "Corporate", href: "/corporate" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavGroups = [
  {
    heading: "Occasions",
    links: [
      { label: "Weddings", href: "/weddings" },
      { label: "Private Events", href: "/private-events" },
      { label: "Corporate", href: "/corporate" },
    ],
  },
  {
    heading: "Studio",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Privacy", href: "/privacy" },
    ],
  },
];
