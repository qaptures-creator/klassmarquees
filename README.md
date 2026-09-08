# Klass Marquees — Website

A bespoke marketing site for Klass Marquees (luxury marquee hire — weddings,
private celebrations and corporate events), built with Next.js 16 (App
Router), TypeScript, Tailwind CSS v4 and Motion.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. The dev server respects `PORT` if set;
otherwise it defaults to 3000.

Other useful commands:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

## Project structure

```
src/
  app/                 Routes (App Router) — one folder per page, plus
                        api/health and api/enquiry route handlers
  components/
    ui/                Design-system primitives (Button, Container,
                        SectionHeading, EditorialImage, Reveal, …)
    layout/             Header, Footer, mobile menu, sticky mobile CTA
    home/               Homepage sections
    service-page/       Shared sections used by Weddings/Private Events/
                        Corporate (each page composes them in its own order)
    gallery/            Filterable gallery grid + accessible lightbox
    forms/              Enquiry form
  config/              Editable content — see below
  lib/                  Small helpers (media.ts, utils.ts)
  types/                Shared TypeScript types
```

## Where to update content

Everything a non-developer would want to change lives in `src/config/`:

| File | What it controls |
|---|---|
| `src/config/site.ts` | Business name, tagline, phone numbers, Instagram link, nav links, footer links, **email** and **WhatsApp** (blank until confirmed — see below) |
| `src/config/services.ts` | All copy for the Weddings / Private Events / Corporate pages (hero copy, intro, options, planning steps, FAQs) |
| `src/config/faqs.ts` | Homepage FAQ list |
| `src/config/testimonials.ts` | Client testimonials — **empty by design**; add real, attributed quotes here and the homepage section switches from its Instagram callout to real quotes automatically |
| `src/config/gallery.ts` | Every gallery image: path, alt text, caption, category, orientation |
| `src/config/process.ts` | "The Klass Experience" steps and "Signature Capabilities" list |

## Where to replace images and video

See **`MEDIA_CHECKLIST.md`** for the full list of expected file paths,
recommended dimensions, orientation and subject matter for every image slot
on the site (hero, service pages, about, and all gallery images), plus the
optional hero background video.

Drop a real file at the **exact path** listed (under `public/images/...` or
`public/videos/...`) and it replaces the placeholder automatically — nothing
else needs to change. Until then, each slot shows a tasteful abstract
placeholder in the brand palette rather than a broken image (see
`src/components/ui/EditorialImage.tsx` and `src/lib/media.ts`).

The brand mark itself (favicon, apple touch icon, and the icon + wordmark
lockup in the header/footer/mobile menu) is a real, committed asset rather
than a placeholder slot — see `src/components/ui/Logo.tsx` and
`public/images/brand/logo-mark.webp`. To swap it for an updated logo, replace
that file (keep the transparent background) and `src/app/icon.png` /
`src/app/apple-icon.png`.

## Connecting the enquiry form

The form at `/contact` posts to `src/app/api/enquiry/route.ts`. That route
already validates submissions server-side and is ready to wire up to a real
delivery mechanism:

- **Resend**: set the `RESEND_API_KEY` and `ENQUIRY_TO_EMAIL` environment
  variables (optionally `ENQUIRY_FROM_EMAIL`) — the route already calls the
  Resend HTTP API once both are present. Until then, submissions are
  logged server-side only (the form still works end-to-end, it just has
  nowhere to deliver to yet).
- **A CRM or other endpoint**: replace the body of `deliverEnquiry()` in
  that same file with a call to your CRM's API.

Never put API keys or secrets in client-side code — only in environment
variables read on the server (Railway → your service → Variables).

## Details that still need confirming

- **Business email address** — not set (`src/config/site.ts`). The site
  intentionally doesn't display an unconfirmed email address.
- **WhatsApp number** — not set. Add it to `site.ts` to enable the WhatsApp
  option in the mobile sticky CTA and contact page.
- **Testimonials** — none published yet; see above.
- **Remaining photography and hero video** — the real Klass Marquees logo
  and several real event photos are now in place; see `MEDIA_CHECKLIST.md`
  for exactly which slots still need photography (mostly Private Events,
  Corporate and About).

See `DEPLOYMENT.md` for hosting details (Railway project, environment
variables already set there, and current production URL).
