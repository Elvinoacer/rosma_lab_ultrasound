import Link from "next/link";
import { site } from "@/app/lib/site";

export default function CtaBanner({
  title = "Come in when you are ready.",
  lede = "Walk-ins welcome. Booking keeps a quiet slot and sends you prep notes in English or Kiswahili.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="ink-wash grain relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12 sm:py-16">
        <div className="relative max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand">Karibu</p>
          <h2 className="display mt-3 text-3xl text-bone sm:text-4xl">{title}</h2>
          <p className="mt-4 text-bone/72">{lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">
              Book a visit
            </Link>
            <Link href="/visit" className="btn-light">
              Directions & hours
            </Link>
          </div>
          <p className="mt-6 text-sm text-sand/80">{site.address.full}</p>
        </div>
      </div>
    </section>
  );
}
