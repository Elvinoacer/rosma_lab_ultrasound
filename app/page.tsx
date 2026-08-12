import Image from "next/image";
import Link from "next/link";
import CtaBanner from "./components/CtaBanner";
import FaqAccordion from "./components/FaqAccordion";
import Rings from "./components/Rings";
import SectionHeading from "./components/SectionHeading";
import { faqs, journey, scans, site, values } from "./lib/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/images/nairobi.jpg"
          alt="Nairobi at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1c22]/55 via-[#0c1c22]/70 to-[#0c1c22]" />
        <Rings className="-right-24 top-16 h-[28rem] w-[28rem] opacity-50" />
        <Rings className="-left-32 bottom-10 h-80 w-80 opacity-30" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-sand">
            Karibu · Kasarani
          </p>
          <h1 className="display reveal reveal-d1 mt-4 max-w-3xl text-5xl leading-[0.98] text-bone sm:text-6xl lg:text-[5.2rem]">
            Quiet answers.
            <br />
            Close to home.
          </h1>
          <p className="reveal reveal-d2 mt-6 max-w-xl text-lg leading-relaxed text-bone/75">
            {site.name} is a licensed Class C laboratory on Kasarani–Mwiki Road.
            Ultrasound when you need to see. Blood work when you need numbers.
            English or Kiswahili — unhurried either way.
          </p>
          <div className="reveal reveal-d3 mt-8 flex flex-wrap items-center gap-3">
            <Link href="/book" className="btn-primary">
              Book a visit
            </Link>
            <Link href="/ultrasound" className="btn-light">
              Explore ultrasound
            </Link>
          </div>
          <dl className="reveal reveal-d4 mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {[
              ["Licensed", "Class C · 2026"],
              ["Hours", "7 days"],
              ["Walk-ins", "Welcome"],
              ["Languages", "EN · SW"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-sand">{k}</dt>
                <dd className="mt-1 text-sm text-bone">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            kicker="What we do"
            title="Two rooms. One careful visit."
            lede="Come for a dating scan, a full blood count, or both. We keep the path from reception to results short."
          />
          <p className="display text-2xl leading-snug text-sea sm:text-3xl">
            Neighbourhood diagnostics — not a hospital corridor, not a guess on your phone.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-2">
          <Link
            href="/ultrasound"
            className="group relative min-h-[28rem] overflow-hidden rounded-[1.8rem]"
          >
            <Image
              src="/images/care.jpg"
              alt="A clinician reviewing diagnostic images"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c22] via-[#0c1c22]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-sand">Imaging</p>
              <h3 className="display mt-2 text-3xl text-bone sm:text-4xl">Ultrasound</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/75">
                Obstetric, abdominal, pelvic, breast, Doppler and small parts — reported in language you can take home.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-sand">
                See the scans
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>

          <Link
            href="/laboratory"
            className="group relative min-h-[28rem] overflow-hidden rounded-[1.8rem]"
          >
            <Image
              src="/images/lab.jpg"
              alt="Laboratory analyzers in a clinical lab"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c22] via-[#0c1c22]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-sand">Pathology</p>
              <h3 className="display mt-2 text-3xl text-bone sm:text-4xl">Laboratory</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/75">
                Haematology, biochemistry, microbiology and infectious-disease screening — same-day for most routine work.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-sand">
                See the panels
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/ultrasound.jpg"
                alt="Close work at the microscope"
                fill
                className="object-cover"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 hidden w-56 overflow-hidden rounded-2xl border-4 border-paper shadow-2xl sm:block lg:-right-8">
              <Image
                src="/images/hero.jpg"
                alt="A clinician in the consulting room"
                width={400}
                height={480}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:pl-8">
            <SectionHeading
              kicker="Why Rosma"
              title="A quieter way to get answers."
              lede="Kasarani already has busy hospitals. We built a smaller room for the everyday questions: Is the baby growing? Is it malaria? Why does this side hurt?"
            />
            <ul className="mt-10 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="border-t border-ink/8 pt-5">
                  <h3 className="text-lg font-medium text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ink-wash grain relative px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            light
            kicker="Your visit"
            title="Four steps. No maze."
            lede="From the road to a printed report — this is how a morning at Rosma usually goes."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="display text-3xl text-clay">{item.step}</p>
                <h3 className="mt-4 text-lg text-bone">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              kicker="Ultrasound"
              title="The scans people come for."
              lede="Typical neighbourhood imaging — quoted before we begin, prepared for in plain language."
            />
            <Link href="/ultrasound" className="btn-ghost">
              All imaging
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scans.map((scan, i) => (
              <Link
                key={scan.slug}
                href="/ultrasound"
                className="group rounded-[1.4rem] border border-ink/8 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(16,24,32,0.08)]"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-clay">
                  {String(i + 1).padStart(2, "0")} · {scan.kicker}
                </p>
                <h3 className="display mt-3 text-2xl text-ink">{scan.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{scan.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-sea-deep lg:grid-cols-2">
          <div className="relative min-h-[20rem]">
            <Image
              src="/images/nairobi.jpg"
              alt="Nairobi, looking toward the city from the north"
              fill
              className="object-cover opacity-80"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center px-8 py-12 text-bone sm:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-sand">Find us</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">Kwa Wangari, on the road you already use.</h2>
            <p className="mt-4 text-bone/70">{site.address.note}</p>
            <p className="mt-4 text-sm text-sand">{site.hoursShort}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/visit" className="btn-light">
                Map & hours
              </Link>
              <Link href="/book" className="btn-primary">
                Book a slot
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            kicker="Questions"
            title="Before you leave the house."
            lede="Fasting, bladders, walk-ins, M-Pesa — the things people actually ask."
          />
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
        <div className="mx-auto mt-6 max-w-6xl text-right">
          <Link href="/faq" className="text-sm font-medium text-sea hover:underline">
            All questions →
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
