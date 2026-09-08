# Media Checklist

Every image and video the site expects is listed below with its exact path,
recommended size, orientation and intended subject. **Drop a real file at
the exact path and it replaces the placeholder automatically** — no code
changes needed (see `src/lib/media.ts` and `src/components/ui/EditorialImage.tsx`).

Until real photography is in place, each slot renders a tasteful abstract
placeholder in the brand palette rather than a broken image.

General guidance:
- Format: `.jpg` (or convert to `.avif`/`.webp` and update the extension in
  the relevant config file — Next/Image will still optimise whichever
  format you provide).
- Keep files reasonably optimised before adding them (aim under ~400KB for
  full-bleed shots) — Next/Image will further optimise and serve AVIF/WebP
  automatically at build/runtime.
- "Landscape" ≈ 3:2 or 16:9. "Portrait" ≈ 3:4 or 4:5. "Square" = 1:1.

## Hero

| Status | Path | Orientation | Section | Subject |
|---|---|---|---|---|
| ✅ Real | `public/images/hero/hero-poster.jpg` | Landscape | Home hero background (also the `<video>` poster) | A dressed marquee interior with a cascading hanging greenery installation above long banquet tables. |
| — Not added | `public/videos/hero.mp4` *(optional)* | Landscape | Home hero background video | A slow, steady establishing shot (drone flyover, slow dolly, or static with subtle movement like drapery/candles) — no fast cuts. Only add this if a genuinely cinematic clip is available; the poster image alone looks intentional on its own. |
| ✅ Real | `public/images/hero/image-break.jpg` | Portrait | Home "emotional break" full-width section, mid-page | Mirror disco balls suspended above a floral wedding stage. |

## Service Pages

| Status | Path | Orientation | Section | Subject |
|---|---|---|---|---|
| ✅ Real | `public/images/services/weddings-hero.jpg` | Portrait | Weddings page hero | Clear-roof marquee dressed for a South Asian wedding — crystal chandeliers, ornate mandap structures, petal-lined aisle. |
| ✅ Real (currently unused) | `public/images/services/weddings-break.jpg` | Portrait | Not wired to a component — the per-service "image break" this was written for was replaced by `ServiceStickyStory` (pulls from the `weddings` gallery images instead). File is in place for future use. | Marquee interior with a lighting rig and crystal chandeliers, tall white floral arrangements and a bar area. |
| — Placeholder | `public/images/services/private-events-hero.jpg` | Landscape | Private Events page hero | A private garden/driveway marquee dressed for a birthday or family celebration, early evening. |
| — Placeholder | `public/images/services/private-events-break.jpg` | Landscape | Not wired to a component (see `weddings-break.jpg` note above) | Guests relaxing in a lounge/bar area of a private event marquee. |
| — Placeholder | `public/images/services/corporate-hero.jpg` | Landscape | Corporate page hero | A clear-span marquee configured for a conference, launch or corporate hospitality. |
| — Placeholder | `public/images/services/corporate-break.jpg` | Landscape | Not wired to a component (see `weddings-break.jpg` note above) | A branded corporate event in progress — staging, AV, or a hospitality moment. |

## About

| Status | Path | Orientation | Section | Subject |
|---|---|---|---|---|
| — Placeholder | `public/images/about/about-hero.jpg` | Landscape | About page hero | The Klass Marquees team on-site, mid-build or finishing an interior — conveys hands-on craftsmanship. |

## Gallery (`/gallery`)

All gallery images are edited in `src/config/gallery.ts` (caption, alt text,
category and orientation live there). Filenames below match that config.

| Status | Path | Orientation | Category | Subject |
|---|---|---|---|---|
| ✅ Real | `public/images/gallery/wedding-01.jpg` | Landscape | Weddings | Cascading hanging greenery installation above long banquet tables |
| ✅ Real | `public/images/gallery/wedding-02.jpg` | Portrait | Weddings | Mirror disco balls suspended above a floral wedding stage |
| — Placeholder | `public/images/gallery/wedding-03.jpg` | Landscape | Weddings | Ceremony aisle, floral + drape styling |
| ✅ Real | `public/images/gallery/wedding-04.jpg` | Portrait | Weddings | Clear-roof marquee dressed for a South Asian wedding, ornate mandap + petal-lined aisle |
| — Placeholder | `public/images/gallery/private-01.jpg` | Landscape | Private Events | Garden marquee at dusk, birthday celebration |
| — Placeholder | `public/images/gallery/private-02.jpg` | Portrait | Private Events | Lounge furniture + bar styling |
| — Placeholder | `public/images/gallery/private-03.jpg` | Landscape | Private Events | Family celebration, themed décor |
| — Placeholder | `public/images/gallery/corporate-01.jpg` | Landscape | Corporate | Clear-span structure, product launch |
| — Placeholder | `public/images/gallery/corporate-02.jpg` | Portrait | Corporate | Branded hospitality suite |
| — Placeholder | `public/images/gallery/corporate-03.jpg` | Landscape | Corporate | Conference seating configuration |
| — Placeholder | `public/images/gallery/interior-01.jpg` | Portrait | Interiors | Ceiling drape + chandelier close-up |
| — Placeholder | `public/images/gallery/interior-02.jpg` | Square | Interiors | Wall lining / soft furnishing detail |
| — Placeholder | `public/images/gallery/interior-03.jpg` | Landscape | Interiors | Glass-clear wall, garden view from inside |
| — Placeholder | `public/images/gallery/interior-04.jpg` | Portrait | Interiors | Dressed dining table, fine linen/glassware |
| — Placeholder | `public/images/gallery/night-01.jpg` | Landscape | Night Events | Marquee glowing at night, viewed across garden |
| ✅ Real | `public/images/gallery/night-02.jpg` | Portrait | Night Events | Lighting rig + crystal chandeliers above florals and a bar area |
| — Placeholder | `public/images/gallery/night-03.jpg` | Landscape | Night Events | Guests dancing at night |
| — Placeholder | `public/images/gallery/night-04.jpg` | Square | Night Events | Aerial view of an illuminated marquee at night |

To add more gallery images beyond this list, add entries to
`galleryImages` in `src/config/gallery.ts` — the gallery grid, filters and
lightbox all read from that one file.

## Open Graph / Social Preview

The social share image (`opengraph-image.tsx`) is generated automatically
from brand colours and copy — no file to add. Update its text directly in
`src/app/opengraph-image.tsx` if the tagline changes.

## Brand mark

✅ **Real** — the actual Klass Marquees gold chevron mark is now in place:

| Path | Used for |
|---|---|
| `src/app/icon.png` (512×512) | Browser tab favicon |
| `src/app/apple-icon.png` (180×180) | iOS/iPadOS home-screen icon |
| `public/images/brand/logo-mark.webp` | The icon + wordmark lockup in the header, footer and mobile menu (`src/components/ui/Logo.tsx`) — background removed and cropped to the mark itself so it sits cleanly next to the "KLASS MARQUEES" text on any navy surface. |

## Content still requiring confirmation

These are **not** media, but should be reviewed before this site is
considered final — see also `DEPLOYMENT.md` and `README.md`:

- **Testimonials** (`src/config/testimonials.ts`) — currently empty by
  design (no fabricated quotes). Add real, attributed client reviews here
  and the homepage testimonial section will render them automatically.
- **Business email address** — not set in `src/config/site.ts` (`email`
  field is blank) as none was confirmed. The contact page and footer only
  render an email link once this is filled in.
- **WhatsApp number** — not set (`whatsapp` field in `src/config/site.ts`).
  The sticky mobile CTA and contact page will only show a WhatsApp option
  once a confirmed number is added.
- **Service area precision** — copy currently says Slough (HQ), London and
  Midlands, based on the phone lines provided. Confirm exact coverage
  before publishing anything more specific.
