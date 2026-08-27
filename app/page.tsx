import Image from "next/image";
import Link from "next/link";
import CtaBanner from "./components/CtaBanner";
import FaqAccordion from "./components/FaqAccordion";
import HomeHero from "./components/HomeHero";
import SectionHeading from "./components/SectionHeading";
import { faqs, journey, scans, site } from "./lib/site";

const quickStart = [
  { href: "/ultrasound", label: "I need a scan", body: "See the ultrasound types, preparation and what to expect.", action: "View scans" },
  { href: "/laboratory", label: "I need a test", body: "Find common laboratory tests and panels before you travel.", action: "View tests" },
  { href: "/prepare", label: "I'm coming today", body: "Check fasting, water and other preparation in one place.", action: "Prepare" },
] as const;

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="px-2.5 py-10 sm:px-4 sm:py-12 lg:px-5">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand">Start here</p>
              <h2 className="display mt-1 text-2xl text-bone sm:text-3xl">What do you need today?</h2>
            </div>
            <Link href="/faq" className="hidden text-sm font-medium text-sand hover:text-white sm:inline-flex">
              Common questions →
            </Link>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {quickStart.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hero-glass group rounded-[1.45rem] p-5 transition hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-semibold text-bone">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/70">{item.body}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-sand group-hover:text-white">
                  {item.action} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-2.5 py-16 sm:px-4 sm:py-24 lg:px-5">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            kicker="Services"
            title="Two rooms. One straightforward visit."
            lede="Come for imaging, blood work, or both. The important information is easy to find before you arrive."
          />
          <p className="display text-2xl leading-snug text-sand sm:text-3xl">
            Local diagnostics for the everyday questions that should not require a full hospital trip.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-2">
          <Link href="/ultrasound" className="group relative min-h-[28rem] overflow-hidden rounded-[1.8rem]">
            <Image src="/images/care.jpg" alt="A clinician reviewing diagnostic images" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c22] via-[#0c1c22]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-sand">Imaging</p>
              <h3 className="display mt-2 text-3xl text-bone sm:text-4xl">Ultrasound</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/75">Obstetric, abdominal, pelvic, breast, Doppler and small-parts imaging.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-sand">See the scans <span aria-hidden>→</span></span>
            </div>
          </Link>
          <Link href="/laboratory" className="group relative min-h-[28rem] overflow-hidden rounded-[1.8rem]">
            <Image src="/images/lab.jpg" alt="Laboratory analyzers in a clinical lab" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c22] via-[#0c1c22]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-sand">Pathology</p>
              <h3 className="display mt-2 text-3xl text-bone sm:text-4xl">Laboratory</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/75">Haematology, biochemistry, microbiology and infectious-disease testing.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-sand">See the tests <span aria-hidden>→</span></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="px-2.5 py-16 sm:px-4 sm:py-20 lg:px-5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              kicker="Before you come"
              title="Get the preparation right."
              lede="A few scans need fasting or a full bladder. Check first so you do not make a wasted trip."
            />
            <Link href="/prepare" className="hero-dir inline-flex justify-center">
              Full preparation guide <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="hero-glass rounded-[1.45rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Abdominal</p>
              <p className="mt-2 text-sm leading-relaxed text-bone/70">
                <strong className="text-bone">Fast 6–8 hours.</strong> Small sips of water are fine.
              </p>
            </div>
            <div className="hero-glass rounded-[1.45rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Pelvic / early pregnancy</p>
              <p className="mt-2 text-sm leading-relaxed text-bone/70">
                <strong className="text-bone">Comfortably full bladder.</strong> We confirm the exact prep when you book.
              </p>
            </div>
            <div className="hero-glass rounded-[1.45rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sand">Most other scans</p>
              <p className="mt-2 text-sm leading-relaxed text-bone/70">
                <strong className="text-bone">Usually no special prep.</strong> Check your scan page before travelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2.5 py-16 sm:px-4 sm:py-24 lg:px-5">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Your visit" title="Four steps. No maze." lede="Book or walk in, prepare, get the test or scan, then collect your result." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item) => (
              <li key={item.step} className="hero-glass rounded-[1.45rem] p-6">
                <p className="display text-3xl text-[#d2652e]">{item.step}</p>
                <h3 className="mt-4 text-lg text-bone">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-2.5 py-16 sm:px-4 sm:py-24 lg:px-5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading kicker="Ultrasound" title="The scans people come for." lede="See the common scan types and their preparation before you book." />
            <Link href="/ultrasound" className="hero-dir inline-flex justify-center">
              All imaging <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {scans.map((scan, i) => (
              <Link
                key={scan.slug}
                href={`/ultrasound#${scan.slug}`}
                className="hero-glass group rounded-[1.45rem] p-6 transition hover:-translate-y-0.5"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-sand">
                  {String(i + 1).padStart(2, "0")} · {scan.kicker}
                </p>
                <h3 className="display mt-3 text-2xl text-bone">{scan.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/70">{scan.summary}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-sand group-hover:text-white">Preparation →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-2.5 pb-16 sm:px-4 lg:px-5">
        <div className="hero-frame mx-auto grid max-w-6xl overflow-hidden rounded-[1.8rem] lg:grid-cols-2">
          <div className="relative min-h-[20rem]">
            <Image src="/images/nairobi.jpg" alt="Nairobi, looking toward the city from the north" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div className="hero-glass flex flex-col justify-center rounded-none px-8 py-12 text-bone sm:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-sand">Find us</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">Kwa Wangari, on the road you already use.</h2>
            <p className="mt-4 text-bone/70">{site.address.note}</p>
            <p className="mt-4 text-sm text-sand">{site.hoursShort}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/visit" className="hero-dir inline-flex justify-center">Map &amp; hours</Link>
              <Link href="/book" className="hero-book inline-flex justify-center">Book a slot</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2.5 pb-8 sm:px-4 lg:px-5">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading kicker="Questions" title="Before you leave the house." lede="Fasting, bladders, walk-ins, M-Pesa — the things people actually ask." />
          <FaqAccordion items={faqs.slice(0, 5)} />
        </div>
        <div className="mx-auto mt-6 max-w-6xl text-right">
          <Link href="/faq" className="text-sm font-medium text-sand hover:text-white">All questions →</Link>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
