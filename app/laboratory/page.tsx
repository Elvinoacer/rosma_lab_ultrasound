import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { labPanels } from "../lib/site";

export const metadata: Metadata = {
  title: "Laboratory",
  description:
    "Clinical laboratory testing at Rosma — haematology, biochemistry, microbiology and infectious-disease screening in Kasarani.",
};

export default function LaboratoryPage() {
  return (
    <>
      <PageHero
        kicker="Pathology"
        title="Numbers you can trust, the same day."
        lede="A licensed Class C laboratory for the tests Kasarani actually needs: blood counts, malaria, HIV, sugars, kidneys, cultures. Drawn carefully. Reported clearly."
        image="/images/lab.jpg"
        imageAlt="Clinical laboratory analyzers"
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="The bench"
            title="What we test."
            lede="A full Class C menu. If you arrive with a clinician’s form, bring it — we will match the request."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labPanels.map((panel) => (
              <article
                key={panel.title}
                className="rounded-[1.4rem] border border-ink/8 bg-white p-7"
              >
                <h2 className="display text-2xl text-ink">{panel.title}</h2>
                <ul className="mt-4 space-y-2">
                  {panel.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] bg-sea-deep lg:grid-cols-2">
          <div className="relative min-h-[18rem]">
            <Image
              src="/images/ultrasound.jpg"
              alt="Detailed laboratory microscopy"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
          <div className="px-8 py-12 text-bone sm:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-sand">Turnaround</p>
            <h2 className="display mt-3 text-3xl">Most routine results before evening.</h2>
            <p className="mt-4 text-bone/70">
              Full blood counts, malaria, HIV rapid tests and many chemistry panels are typically
              same-day. Cultures and specialised assays take longer — we will tell you at draw.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-bone/75">
              <li>Fasting is only needed when the test requires it — we say so first.</li>
              <li>Collect in person, or leave a number for when the report is ready.</li>
              <li>Pair a draw with an ultrasound in one visit when both are needed.</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Come in for a draw."
        lede="Walk-ins welcome all week. If you are fasting, book a morning slot and we will be ready."
      />
    </>
  );
}
