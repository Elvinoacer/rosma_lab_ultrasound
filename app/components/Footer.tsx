import Link from "next/link";
import { nav, site } from "@/app/lib/site";
import WaveMark from "./WaveMark";

export default function Footer() {
  return (
    <footer className="ink-wash grain relative mt-auto text-bone">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <WaveMark className="h-6 w-6" />
            </span>
            <span>
              <span className="display block text-xl leading-none">{site.name}</span>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-sand">
                Kasarani · Nairobi
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone/70">
            {site.description}
          </p>
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
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-sand hover:text-white"
          >
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

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-bone/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
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
    </footer>
  );
}
