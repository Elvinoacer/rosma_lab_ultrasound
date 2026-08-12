import type { Metadata } from "next";
import BookingForm from "../components/BookingForm";
import PageHero from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Book a visit",
  description:
    "Request an ultrasound or laboratory slot at Rosma Laboratory, Kasarani. Walk-ins remain welcome.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        kicker="Book"
        title="Hold a quiet slot."
        lede="Tell us what you need and when you can come. Reception will confirm the time and any preparation. Walk-ins are still welcome if today is the day."
        image="/images/scan.jpg"
        imageAlt="Speaking with a clinician before a visit"
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="display text-3xl text-ink">What happens next</h2>
            <ol className="mt-8 space-y-6">
              {[
                "You send the request — name, phone, service, a preferred time.",
                "We reply with a confirmed slot and prep notes (fast, water, or nothing).",
                "You arrive. If plans change, a message is enough.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="display text-2xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                  <p className="pt-1 text-ink-soft">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-mist">
              {site.address.full}
              <br />
              {site.hoursShort}
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
