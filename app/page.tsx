import Image from "next/image";
import Link from "next/link";
import CtaBanner from "./components/CtaBanner";
import FaqAccordion from "./components/FaqAccordion";
import Rings from "./components/Rings";
import SectionHeading from "./components/SectionHeading";
import { faqs, journey, scans, site } from "./lib/site";

const quickStart = [
  { href: "/ultrasound", label: "I need a scan", body: "See the ultrasound types, preparation and what to expect.", action: "View scans" },
  { href: "/laboratory", label: "I need a test", body: "Find common laboratory tests and panels before you travel.", action: "View tests" },
  { href: "/prepare", label: "I'm coming today", body: "Check fasting, water and other preparation in one place.", action: "Prepare" },
] as const;

const practical = [
  ["Walk-ins", "Welcome for most services"],
  ["Hours", site.hoursShort],
  ["Payment", "Cash or M-Pesa"],
  ["Languages", "English · Kiswahili"],
] as const;

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#0c1c22]">
        <div className="absolute inset-0">
          <Image src="/hero_design/hero_pc_bg.webp" alt="" fill priority className="hidden object-cover md:block" sizes="100vw" />
          <Image src="/hero_design/hero_mobile_bg.webp" alt="" fill priority className="object-cover md:hidden" sizes="100vw" />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c1c22]/0 via-[#0c1c22]/5 to-[#0c1c22]/35" />
        <Rings className="-right-28 top-24 hidden h-[30rem] w-[30rem] opacity-35 md:block" />
        <Rings className="-left-28 bottom-16 h-64 w-64 opacity-25 md:hidden" />

        <div className="relative mx-auto grid min-h-[92svh] max-w-6xl items-end gap-4 px-4 pb-9 pt-28 sm:px-6 sm:pb-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:pb-16">
          <div className="relative z-20 max-w-xl pb-2 lg:pb-10">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-sand">Karibu · Kasarani</p>
            <h1 className="display reveal reveal-d1 mt-4 max-w-2xl text-[3.35rem] leading-[0.93] text-bone sm:text-[4.6rem] lg:text-[5.1rem]">Diagnostics without the maze.</h1>
            <p className="reveal reveal-d2 mt-6 max-w-lg text-base leading-relaxed text-bone/80 sm:text-lg">Ultrasound and laboratory testing on Kasarani–Mwiki Road. See what you need, prepare correctly, and know what happens next.</p>
            <div className="reveal reveal-d3 mt-7 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">Book a visit</Link>
              <Link href="/visit" className="btn-light">Get directions</Link>
            </div>
            <dl className="reveal reveal-d4 mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {practical.map(([k, v]) => <div key={k}><dt className="text-[10px] uppercase tracking-[0.16em] text-sand">{k}</dt><dd className="mt-1 text-xs leading-relaxed text-bone sm:text-sm">{v}</dd></div>)}
            </dl>
          </div>

          <div className="relative z-10 min-h-[20rem] sm:min-h-[28rem] lg:min-h-[38rem]">
            <Image src="/hero_design/hero_pc.webp" alt="" fill priority className="hidden object-contain object-right-bottom md:block" sizes="(min-width:1024px) 62vw, 100vw" />
            <Image src="/hero_design/hero_mobile.webp" alt="" fill priority className="object-contain object-right-bottom md:hidden" sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/8 bg-white px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-clay">Start here</p><h2 className="display mt-1 text-2xl text-ink sm:text-3xl">What do you need today?</h2></div>
            <Link href="/faq" className="hidden text-sm font-medium text-sea sm:inline-flex">Common questions →</Link>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {quickStart.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-ink/8 bg-paper p-5 transition hover:-translate-y-0.5 hover:border-sea/20 hover:shadow-[0_16px_40px_rgba(16,24,32,0.07)]"><h3 className="text-lg font-semibold text-ink">{item.label}</h3><p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p><span className="mt-4 inline-flex text-sm font-medium text-sea group-hover:underline">{item.action} →</span></Link>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading kicker="Services" title="Two rooms. One straightforward visit." lede="Come for imaging, blood work, or both. The important information is easy to find before you arrive." />
          <p className="display text-2xl leading-snug text-sea sm:text-3xl">Local diagnostics for the everyday questions that should not require a full hospital trip.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-2">
          <Link href="/ultrasound" className="group relative min-h-[28rem] overflow-hidden rounded-[1.8rem]"><Image src="/images/care.jpg" alt="A clinician reviewing diagnostic images" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c1c22] via-[#0c1c22]/35 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-8"><p className="text-xs uppercase tracking-[0.2em] text-sand">Imaging</p><h3 className="display mt-2 text-3xl text-bone sm:text-4xl">Ultrasound</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-bone/75">Obstetric, abdominal, pelvic, breast, Doppler and small-parts imaging.</p><span className="mt-5 inline-flex items-center gap-2 text-sm text-sand">See the scans <span aria-hidden>→</span></span></div></Link>
          <Link href="/laboratory" className="group relative min-h-[28rem] overflow-hidden rounded-[1.8rem]"><Image src="/images/lab.jpg" alt="Laboratory analyzers in a clinical lab" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width:1024px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-[#0c1c22] via-[#0c1c22]/40 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-8"><p className="text-xs uppercase tracking-[0.2em] text-sand">Pathology</p><h3 className="display mt-2 text-3xl text-bone sm:text-4xl">Laboratory</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-bone/75">Haematology, biochemistry, microbiology and infectious-disease testing.</p><span className="mt-5 inline-flex items-center gap-2 text-sm text-sand">See the tests <span aria-hidden>→</span></span></div></Link>
        </div>
      </section>

      <section className="bg-foam px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading kicker="Before you come" title="Get the preparation right." lede="A few scans need fasting or a full bladder. Check first so you do not make a wasted trip." /><Link href="/prepare" className="btn-ghost">Full preparation guide <span aria-hidden>→</span></Link></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Abdominal</p><p className="mt-2 text-sm leading-relaxed text-ink-soft"><strong className="text-ink">Fast 6–8 hours.</strong> Small sips of water are fine.</p></div>
            <div className="rounded-2xl bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Pelvic / early pregnancy</p><p className="mt-2 text-sm leading-relaxed text-ink-soft"><strong className="text-ink">Comfortably full bladder.</strong> We confirm the exact prep when you book.</p></div>
            <div className="rounded-2xl bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">Most other scans</p><p className="mt-2 text-sm leading-relaxed text-ink-soft"><strong className="text-ink">Usually no special prep.</strong> Check your scan page before travelling.</p></div>
          </div>
        </div>
      </section>

      <section className="ink-wash grain relative px-4 py-20 sm:px-6 sm:py-24">
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading light kicker="Your visit" title="Four steps. No maze." lede="Book or walk in, prepare, get the test or scan, then collect your result." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{journey.map((item) => <li key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"><p className="display text-3xl text-clay">{item.step}</p><h3 className="mt-4 text-lg text-bone">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-bone/65">{item.body}</p></li>)}</ol>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading kicker="Ultrasound" title="The scans people come for." lede="See the common scan types and their preparation before you book." /><Link href="/ultrasound" className="btn-ghost">All imaging <span aria-hidden>→</span></Link></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{scans.map((scan, i) => <Link key={scan.slug} href={`/ultrasound#${scan.slug}`} className="group rounded-[1.4rem] border border-ink/8 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(16,24,32,0.08)]"><p className="text-[11px] uppercase tracking-[0.18em] text-clay">{String(i + 1).padStart(2, "0")} · {scan.kicker}</p><h3 className="display mt-3 text-2xl text-ink">{scan.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-soft">{scan.summary}</p><span className="mt-4 inline-flex text-sm font-medium text-sea group-hover:underline">Preparation →</span></Link>)}</div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-sea-deep lg:grid-cols-2"><div className="relative min-h-[20rem]"><Image src="/images/nairobi.jpg" alt="Nairobi, looking toward the city from the north" fill className="object-cover opacity-80" sizes="(min-width:1024px) 50vw, 100vw" /></div><div className="flex flex-col justify-center px-8 py-12 text-bone sm:px-12"><p className="text-xs uppercase tracking-[0.2em] text-sand">Find us</p><h2 className="display mt-3 text-3xl sm:text-4xl">Kwa Wangari, on the road you already use.</h2><p className="mt-4 text-bone/70">{site.address.note}</p><p className="mt-4 text-sm text-sand">{site.hoursShort}</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/visit" className="btn-light">Map &amp; hours</Link><Link href="/book" className="btn-primary">Book a slot</Link></div></div></div>
      </section>

      <section className="px-4 pb-8 sm:px-6"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]"><SectionHeading kicker="Questions" title="Before you leave the house." lede="Fasting, bladders, walk-ins, M-Pesa — the things people actually ask." /><FaqAccordion items={faqs.slice(0, 5)} /></div><div className="mx-auto mt-6 max-w-6xl text-right"><Link href="/faq" className="text-sm font-medium text-sea hover:underline">All questions →</Link></div></section>
      <CtaBanner />
    </>
  );
}
