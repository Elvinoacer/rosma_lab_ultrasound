import type { Metadata } from "next";
import CtaBanner from "../components/CtaBanner";
import FaqAccordion from "../components/FaqAccordion";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Appointments, preparation, results, pricing and insurance at Rosma Laboratory, Kasarani.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title="The questions before the road."
        lede="Walk-ins, bladders, M-Pesa, how long a report takes. If yours is missing, book and ask — we answer in English or Kiswahili."
        image="/images/hero.jpg"
        imageAlt="A clinician ready to talk through a visit"
      />
      <section className="px-2.5 py-16 sm:px-4 sm:py-24 lg:px-5">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
