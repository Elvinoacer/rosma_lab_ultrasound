import Link from "next/link";

export default function NotFound() {
  return (
    <section className="ink-wash grain relative flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-sand">404</p>
      <h1 className="display mt-4 max-w-lg text-4xl text-bone sm:text-5xl">
        This page is not on the map.
      </h1>
      <p className="mt-4 max-w-md text-bone/70">
        The room you wanted is not here. Reception is — start again from home, or book a visit.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-light">
          Back home
        </Link>
        <Link href="/book" className="btn-primary">
          Book a visit
        </Link>
      </div>
    </section>
  );
}
