import Link from "next/link";
import { siteConfig, phoneLines, footerNavGroups } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-navy text-ivory">
      <div className="mx-auto w-full max-w-[90rem] px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-serif text-2xl font-semibold tracking-[0.08em]">
              KLASS MARQUEES
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Bespoke luxury marquee hire for weddings, private celebrations and
              corporate events, based in {siteConfig.location.city}, {siteConfig.location.region}.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ivory/80 transition-colors hover:text-accent-light"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
              </svg>
              {siteConfig.instagramHandle}
            </a>
          </div>

          {footerNavGroups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {group.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Speak To Us
            </h3>
            <ul className="mt-5 space-y-3">
              {phoneLines.map((line) => (
                <li key={line.tel} className="text-sm text-ivory/70">
                  <span className="mr-2 text-ivory/40">{line.label}</span>
                  <a href={`tel:${line.tel}`} className="transition-colors hover:text-ivory">
                    {line.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.location.city}, {siteConfig.location.region}, United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
