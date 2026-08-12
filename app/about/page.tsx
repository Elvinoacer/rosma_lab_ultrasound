import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { site, values } from "../lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rosma Laboratory is a licensed Class C diagnostic lab in Kasarani, Nairobi — ultrasound and clinical testing on Kasarani–Mwiki Road.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="The laboratory"
        title="Built for the neighbourhood, not the corridor."
        lede="Rosma is a licensed Class C medical laboratory in Kasarani. We exist so a dating scan or a malaria test does not mean a trip across town, or an afternoon in a hospital queue."
        image="/images/hero.jpg"
        imageAlt="A clinician in the consulting room"
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="Who we are"
              title="Licensed. Local. Plain-spoken."
              lede="Kenya’s laboratory board requires a Class C facility to keep certified technologists and support staff on the bench. We take that seriously — and we take the person in the chair seriously too."
            />
            <p className="mt-6 text-ink-soft">
              Official public listings for small Kasarani labs are thin. This site is the front door
              we should have had: hours, preparation, and a way to book, in English and Kiswahili.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-clay">Licence</dt>
                <dd className="mt-1 text-sm text-ink">{site.licensed}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-clay">Place</dt>
                <dd className="mt-1 text-sm text-ink">{site.address.full}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-clay">Languages</dt>
                <dd className="mt-1 text-sm text-ink">{site.languages.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-clay">Visit</dt>
                <dd className="mt-1 text-sm text-ink">{site.hoursShort}</dd>
              </div>
            </dl>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
            <Image
              src="/images/nairobi.jpg"
              alt="Nairobi at dusk"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="rounded-[1.4rem] border border-ink/8 bg-white p-8">
              <h2 className="display text-2xl text-ink">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
