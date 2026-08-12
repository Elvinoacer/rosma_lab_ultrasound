import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { scans } from "../lib/site";

export const metadata: Metadata = {
  title: "Prepare for your visit",
  description:
    "How to prepare for ultrasound and laboratory tests at Rosma Laboratory, Kasarani — fasting, water, and what to bring.",
};

const labPrep = [
  {
    title: "Fasting bloods",
    body: "Sugars, lipids and some chemistry panels need 8–12 hours without food. Water is fine. Take regular medicines unless your clinician said otherwise.",
  },
  {
    title: "No fasting",
    body: "Full blood count, malaria, HIV rapid tests, most cultures and many hormone tests do not need fasting. Eat as usual.",
  },
  {
    title: "What to bring",
    body: "A clinician’s request form if you have one, your ID, and any previous reports. Wear sleeves you can roll.",
  },
];

export default function PreparePage() {
  return (
    <>
      <PageHero
        kicker="Patient guide"
        title="A little preparation. A better picture."
        lede="Most visits need nothing more than arriving. A few need an empty stomach or a full bladder. Here is the short version — we will still confirm when you book."
        image="/images/scan.jpg"
        imageAlt="A calm consultation before a scan"
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="Ultrasound"
            title="Before the gel."
            lede="If you are unsure, book and tell us the scan. We would rather you travel once."
          />
          <div className="mt-10 divide-y divide-ink/8 overflow-hidden rounded-[1.6rem] border border-ink/8 bg-white">
            {scans.map((scan) => (
              <div key={scan.slug} className="grid gap-2 px-6 py-6 sm:grid-cols-[12rem_1fr] sm:px-8">
                <h2 className="font-medium text-ink">{scan.title}</h2>
                <p className="text-sm leading-relaxed text-ink-soft">{scan.prep}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Laboratory" title="Before the draw." />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {labPrep.map((item) => (
              <article key={item.title} className="rounded-[1.4rem] bg-foam p-7">
                <h2 className="display text-2xl text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            Infection control follows Ministry of Health guidance. Tell us before you arrive if you
            have a fever or cough.{" "}
            <Link href="/book" className="font-medium text-sea hover:underline">
              Book and we will send prep notes
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBanner title="We will remind you." lede="Book a slot and reception will confirm fasting, water, or nothing at all." />
    </>
  );
}
