import Link from "next/link";
import { nav, site } from "@/app/lib/site";
import WaveMark from "./WaveMark";

export default function Footer() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden text-bone">
      <div className="absolute inset-0">
        <img
          src="/hero_design/hero_pc_bg.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />

      <div className="relative z-10 p-2.5 sm:p-4 lg:p-5">
        <div className="hero-frame rounded-[1.35rem] px-5 py-12 sm:rounded-[1.65rem] sm:px-8 sm:py-14 lg:rounded-[1.85rem] lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5">
                <WaveMark className="h-10 w-10" />
                <span>
                  <span className="display block text-xl leading-none">{site.name}</span>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-sand">
                    Kasarani · Nairobi
                  </span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/70">{site.description}</p>
              <p className="mt-4 text-xs text-sand/80">{site.licensed}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Visit</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/80">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.city}
              </p>
              <p className="mt-3 text-sm text-bone/70">{site.hoursShort}</p>
              <a href={`mailto:${site.email}`} className="mt-3 inline-block text-sm text-sand hover:text-white">
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Explore</p>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-bone/80 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/book" className="text-sm text-bone/80 hover:text-white">
                    Book a visit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-bone">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-bone">
                Terms
              </Link>
              <span>English · Kiswahili</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
