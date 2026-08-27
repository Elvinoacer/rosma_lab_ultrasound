"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/app/lib/site";
import WaveMark from "./WaveMark";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const open = menuFor === pathname;
  const darkHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/") return null;

  const solid = scrolled || open || !darkHero;
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 ${solid ? "border border-white/60 bg-[rgba(251,248,242,0.88)] shadow-[0_14px_40px_rgba(16,24,32,0.08)] backdrop-blur-xl" : "bg-transparent"}`}>
          <Link href="/" className="flex items-center gap-2.5">
            <span className={`relative flex h-10 w-10 items-center justify-center rounded-full ${solid ? "bg-sea-deep" : "bg-white/10"}`}><WaveMark className="h-6 w-6" /></span>
            <span className="flex flex-col leading-none">
              <span className={`display text-[1.15rem] tracking-tight ${solid ? "text-ink" : "text-bone"}`}>{site.shortName}</span>
              <span className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] ${solid ? "text-sea" : "text-sand"}`}>Laboratory</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {nav.map((item) => <Link key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-sm transition ${isActive(item.href) ? solid ? "bg-sea/10 text-sea-deep" : "bg-white/10 text-white" : solid ? "text-ink-soft hover:bg-sea/10 hover:text-sea-deep" : "text-bone/80 hover:bg-white/10 hover:text-white"}`}>{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/book" className="hidden rounded-full bg-clay px-4 py-2 text-sm font-medium text-white shadow-lg shadow-clay/25 sm:inline-flex">Book a visit</Link>
            <button type="button" className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${solid ? "text-ink" : "text-bone"}`} aria-expanded={open} aria-label="Menu" onClick={() => setMenuFor((p) => (p === pathname ? null : pathname))}>
              <span className="sr-only">Menu</span>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}</svg>
            </button>
          </div>
        </div>
        {open && <div className="mt-2 rounded-2xl border border-white/60 bg-[rgba(251,248,242,0.96)] p-3 shadow-xl backdrop-blur-xl lg:hidden">
          {nav.map((item) => <Link key={item.href} href={item.href} className={`block rounded-xl px-3 py-3 text-base ${isActive(item.href) ? "bg-foam text-sea-deep" : "text-ink"}`}>{item.label}</Link>)}
          <Link href="/book" className="mt-2 flex items-center justify-center rounded-xl bg-clay px-3 py-3 font-medium text-white">Book a visit</Link>
        </div>}
      </div>
    </header>
  );
}
