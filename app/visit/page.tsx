import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";
import PageHero from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Find Rosma Laboratory on Kasarani–Mwiki Road, Kwa Wangari, near Magunas Supermarket. Hours, map and how to arrive.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        kicker="Visit"
        title="On Kasarani–Mwiki Road."
        lede="Kwa Wangari, next to Magunas. If you reach Seasons Stage you are already close — ask for Rosma Laboratory."
        image="/images/nairobi.jpg"
        imageAlt="Nairobi from the north of the city"
      />

      <section className="px-2.5 py-16 sm:px-4 sm:py-24 lg:px-5">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hero-glass rounded-[1.45rem] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Address</p>
            <h2 className="display mt-3 text-3xl text-bone">{site.address.line1}</h2>
            <p className="mt-2 text-bone/70">
              {site.address.line2}
              <br />
              {site.address.city}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-bone/70">{site.address.note}</p>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-sand">Hours</p>
            <ul className="mt-4 space-y-3">
              {site.hours.map((row) => (
                <li key={row.day} className="flex justify-between gap-4 border-b border-white/10 pb-3 text-sm">
                  <span className="text-bone">{row.day}</span>
                  <span className="text-bone/70">{row.time}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-sand">Contact</p>
            <p className="mt-3 text-sm text-bone/70">
              Walk-ins welcome. Prefer a held slot?{" "}
              <Link href="/book" className="font-medium text-sand hover:text-white">
                Book online
              </Link>
              . Email{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-sand hover:text-white">
                {site.email}
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-bone/70">
              Cash and M-Pesa. Insurance letters can be discussed at reception.
            </p>
            <a
              href={site.map.directions}
              target="_blank"
              rel="noreferrer"
              className="hero-dir mt-8 inline-flex justify-center"
            >
              Open in OpenStreetMap
            </a>
          </div>

          <div className="hero-frame overflow-hidden rounded-[1.6rem]">
            <iframe
              title="Map of Rosma Laboratory, Kasarani"
              src={site.map.embed}
              className="h-[28rem] w-full border-0 lg:h-full min-h-[28rem]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="px-2.5 pb-16 sm:px-4 lg:px-5">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.8rem]">
          <div className="relative aspect-[21/9] min-h-[14rem]">
            <Image
              src="/images/nairobi.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c1c22]/80 to-transparent" />
            <p className="absolute bottom-8 left-8 max-w-md text-sm text-bone/80">
              North of the city, on the Mwiki road. Come when the light is easy — mornings are
              quietest.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
