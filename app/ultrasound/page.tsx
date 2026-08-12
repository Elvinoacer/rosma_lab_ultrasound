import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { scans } from "../lib/site";

export const metadata: Metadata = {
  title: "Ultrasound",
  description:
    "Obstetric, abdominal, pelvic, breast, Doppler and small-parts ultrasound at Rosma Laboratory, Kasarani.",
};

export default function UltrasoundPage() {
  return (
    <>
      <PageHero
        kicker="Imaging"
        title="See what the body is saying."
        lede="Unhurried ultrasound on Kasarani–Mwiki Road. We explain the view on the screen, and we write the report in language you can take to your clinician — or simply take home."
        image="/images/care.jpg"
        imageAlt="A clinician reviewing diagnostic images"
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="The menu"
            title="Scans we perform."
            lede="Quoted before we begin. Prepared for in plain English or Kiswahili."
          />
          <div className="mt-12 space-y-8">
            {scans.map((scan, i) => (
              <article
                key={scan.slug}
                id={scan.slug}
                className="grid overflow-hidden rounded-[1.8rem] border border-ink/8 bg-white lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="relative min-h-[16rem]">
                  <Image
                    src={scan.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 38vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-clay">
                    {String(i + 1).padStart(2, "0")} · {scan.kicker}
                  </p>
                  <h2 className="display mt-2 text-3xl text-ink">{scan.title}</h2>
                  <p className="mt-3 text-ink-soft">{scan.summary}</p>
                  <p className="mt-5 text-sm leading-relaxed text-sea">
                    <span className="font-semibold">Prepare: </span>
                    {scan.prep}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "On the day",
              body: "Arrive a little early. Wear something you can loosen at the waist. Leave jewellery at home for neck scans.",
            },
            {
              title: "In the room",
              body: "Gel, a probe, a quiet screen. We talk through what we can see. One companion is welcome when it helps.",
            },
            {
              title: "The report",
              body: "Often ready before you leave. Complex studies may need a short review. Print, or collect later the same day.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[1.4rem] bg-foam p-7">
              <h3 className="display text-2xl text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-6xl">
          <Link href="/prepare" className="text-sm font-medium text-sea hover:underline">
            Full preparation guide →
          </Link>
        </div>
      </section>

      <CtaBanner
        title="Need a scan this week?"
        lede="Walk in, or book a quieter slot. We will confirm any fasting or water before you travel."
      />
    </>
  );
}
