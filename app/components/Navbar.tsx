"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/app/lib/site";
import WaveMark from "./WaveMark";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="p-2.5 sm:p-4 lg:p-5">
        <div
          className={`flex items-center justify-between rounded-[1.35rem] px-4 py-3 transition-all duration-300 sm:px-5 ${
            solid ? "hero-glass" : "border border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <WaveMark className="h-10 w-10 sm:h-11 sm:w-11" />
            <span className="flex flex-col leading-none">
              <span className="display text-[1.2rem] tracking-tight text-bone sm:text-[1.35rem]">
                {site.shortName}
              </span>
              <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-sand sm:text-[10px]">
                Laboratory
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[0.95rem] transition ${
                  isActive(item.href) ? "text-white" : "text-bone/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="hero-book hidden justify-center px-5 py-2.5 text-sm shadow-[0_10px_24px_rgba(210,101,46,0.34)] lg:inline-flex"
            >
              Book a visit
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/5 text-bone backdrop-blur-md lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 8h14M5 12h14M5 16h10" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="hero-glass mt-2 rounded-2xl p-2 lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-xl px-3 py-3 text-base ${
                  isActive(item.href) ? "bg-white/10 text-white" : "text-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book" className="hero-book mt-1 flex w-full justify-center rounded-xl py-3">
              Book a visit
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
