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
    <section className="relative isolate overflow-hidden px-2.5 pb-6 sm:px-4 sm:pb-8 lg:px-5">
      <div className="hero-frame relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.65rem] lg:rounded-[1.85rem]">
        <div className="absolute inset-0">
          <img
            src="/hero_design/hero_pc_bg.webp"
            alt=""
            className="h-full w-full object-cover object-[center_40%]"
          />
        </div>
        <div className="hero-scrim pointer-events-none absolute inset-0" />
        <div className="relative px-6 py-12 sm:px-12 sm:py-16">
          <div className="hero-glass max-w-xl rounded-[1.45rem] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand">Karibu</p>
            <h2 className="display mt-3 text-3xl text-bone sm:text-4xl">{title}</h2>
            <p className="mt-4 text-bone/72">{lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="hero-book inline-flex justify-center">
                Book a visit
              </Link>
              <Link href="/visit" className="hero-dir inline-flex justify-center">
                Directions & hours
              </Link>
            </div>
            <p className="mt-6 text-sm text-sand/80">{site.address.full}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
