import type { Metadata } from "next";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles personal and health information.`,
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 pb-24 pt-32 sm:px-6">
      <div className="hero-glass rounded-[1.6rem] p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Legal</p>
        <h1 className="display mt-3 text-4xl text-bone">Privacy</h1>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-bone/70">
          <p>
            When you book, visit, or email {site.name}, we collect only what we need to see you and
            to report your results: name, phone, and the clinical details you share.
          </p>
          <p>
            Health information stays with the laboratory. We do not sell it. We share it only with
            you, a clinician you name, or when Kenyan law requires it.
          </p>
          <p>
            Booking requests submitted on this site are used to confirm an appointment. They are not
            a public record.
          </p>
          <p>
            Questions:{" "}
            <a href={`mailto:${site.email}`} className="text-sand hover:text-white">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
