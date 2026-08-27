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

      <section className="px-2.5 py-16 sm:px-4 sm:py-24 lg:px-5">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="display text-3xl text-bone">What happens next</h2>
            <ol className="mt-8 space-y-6">
              {[
                "You send the request — name, phone, service, a preferred time.",
                "We reply with a confirmed slot and prep notes (fast, water, or nothing).",
                "You arrive. If plans change, a message is enough.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="display text-2xl text-[#d2652e]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="pt-1 text-bone/70">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-sand/80">
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
