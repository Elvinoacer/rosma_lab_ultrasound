import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
      <div className="absolute inset-0">
        <img
          src="/hero_design/hero_pc_bg.webp"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="hero-glass relative max-w-lg rounded-[1.6rem] px-8 py-12">
        <p className="text-xs uppercase tracking-[0.22em] text-sand">404</p>
        <h1 className="display mt-4 text-4xl text-bone sm:text-5xl">This page is not on the map.</h1>
        <p className="mt-4 text-bone/70">
          The room you wanted is not here. Reception is — start again from home, or book a visit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="hero-dir inline-flex justify-center">
            Back home
          </Link>
          <Link href="/book" className="hero-book inline-flex justify-center">
            Book a visit
          </Link>
        </div>
      </div>
    </section>
  );
}
