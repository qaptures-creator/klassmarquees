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

| Path | Recommended size | Orientation | Section | Subject |
|---|---|---|---|---|
| `public/images/hero/hero-poster.jpg` | 2400×1500px+ | Landscape | Home hero background (also the `<video>` poster) | A striking, atmospheric shot of a dressed marquee interior — ideally at dusk/evening with visible lighting, that reads well with dark text overlay in the lower third. |
| `public/videos/hero.mp4` *(optional)* | 1920×1080 min, H.264, muted-safe, ≤15MB, ≤20s loop | Landscape | Home hero background video | A slow, steady establishing shot (drone flyover, slow dolly, or static with subtle movement like drapery/candles) — no fast cuts. Only add this if a genuinely cinematic clip is available; the poster image alone looks intentional on its own. |
| `public/images/hero/image-break.jpg` | 2400×1400px+ | Landscape | Home "emotional break" full-width section, mid-page | Guests gathered under festoon/string lighting at dusk — a warm, atmospheric, slightly candid moment. |

## Service Pages

| Path | Recommended size | Orientation | Section | Subject |
|---|---|---|---|---|
| `public/images/services/weddings-hero.jpg` | 2400×1500px+ | Landscape | Weddings page hero | Dramatic wide shot of a dressed wedding marquee — draping, chandelier, aisle or reception in view. |
| `public/images/services/weddings-break.jpg` | 2000×1400px+ | Landscape | Weddings page image break | An intimate, emotional wedding moment inside the marquee (first dance, toast, or detail shot). |
| `public/images/services/private-events-hero.jpg` | 2400×1500px+ | Landscape | Private Events page hero | A private garden/driveway marquee dressed for a birthday or family celebration, early evening. |
| `public/images/services/private-events-break.jpg` | 2000×1400px+ | Landscape | Private Events page image break | Guests relaxing in a lounge/bar area of a private event marquee. |
| `public/images/services/corporate-hero.jpg` | 2400×1500px+ | Landscape | Corporate page hero | A clear-span marquee configured for a conference, launch or corporate hospitality. |
| `public/images/services/corporate-break.jpg` | 2000×1400px+ | Landscape | Corporate page image break | A branded corporate event in progress — staging, AV, or a hospitality moment. |

## About

| Path | Recommended size | Orientation | Section | Subject |
|---|---|---|---|---|
| `public/images/about/about-hero.jpg` | 2400×1500px+ | Landscape | About page hero | The Klass Marquees team on-site, mid-build or finishing an interior — conveys hands-on craftsmanship. |

## Gallery (`/gallery`)

All gallery images are edited in `src/config/gallery.ts` (caption, alt text,
category and orientation live there). Filenames below match that config.

| Path | Orientation | Category | Subject |
|---|---|---|---|
| `public/images/gallery/wedding-01.jpg` | Landscape | Weddings | Draped wedding marquee interior, chandelier + long banquet table |
| `public/images/gallery/wedding-02.jpg` | Portrait | Weddings | First dance under festoon lighting |
| `public/images/gallery/wedding-03.jpg` | Landscape | Weddings | Ceremony aisle, floral + drape styling |
| `public/images/gallery/wedding-04.jpg` | Square | Weddings | Table setting / glassware detail |
| `public/images/gallery/private-01.jpg` | Landscape | Private Events | Garden marquee at dusk, birthday celebration |
| `public/images/gallery/private-02.jpg` | Portrait | Private Events | Lounge furniture + bar styling |
| `public/images/gallery/private-03.jpg` | Landscape | Private Events | Family celebration, themed décor |
| `public/images/gallery/corporate-01.jpg` | Landscape | Corporate | Clear-span structure, product launch |
| `public/images/gallery/corporate-02.jpg` | Portrait | Corporate | Branded hospitality suite |
| `public/images/gallery/corporate-03.jpg` | Landscape | Corporate | Conference seating configuration |
| `public/images/gallery/interior-01.jpg` | Portrait | Interiors | Ceiling drape + chandelier close-up |
| `public/images/gallery/interior-02.jpg` | Square | Interiors | Wall lining / soft furnishing detail |
| `public/images/gallery/interior-03.jpg` | Landscape | Interiors | Glass-clear wall, garden view from inside |
| `public/images/gallery/interior-04.jpg` | Portrait | Interiors | Dressed dining table, fine linen/glassware |
| `public/images/gallery/night-01.jpg` | Landscape | Night Events | Marquee glowing at night, viewed across garden |
| `public/images/gallery/night-02.jpg` | Portrait | Night Events | Uplighting + festoon atmosphere after dark |
| `public/images/gallery/night-03.jpg` | Landscape | Night Events | Guests dancing at night |
| `public/images/gallery/night-04.jpg` | Square | Night Events | Aerial view of an illuminated marquee at night |

To add more gallery images beyond this list, add entries to
`galleryImages` in `src/config/gallery.ts` — the gallery grid, filters and
lightbox all read from that one file.

## Open Graph / Social Preview

The social share image (`opengraph-image.tsx`) is generated automatically
from brand colours and copy — no file to add. Update its text directly in
`src/app/opengraph-image.tsx` if the tagline changes.

## Favicon

`src/app/icon.svg` is a simple placeholder mark (bronze chevron on
obsidian). Replace with the real Klass Marquees brand mark as an SVG at the
same path once available.

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
