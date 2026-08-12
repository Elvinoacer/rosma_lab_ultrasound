import type { Metadata } from "next";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.name} website.`,
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 pb-24 pt-32 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Legal</p>
      <h1 className="display mt-3 text-4xl text-ink">Terms</h1>
      <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-soft">
        <p>
          This website describes services offered at {site.name} in Kasarani. It is not a diagnosis
          and does not replace a consultation with your clinician.
        </p>
        <p>
          A booking request is not a confirmed appointment until reception replies. Walk-in times
          depend on the rooms available that hour.
        </p>
        <p>
          Fees are quoted before a scan or draw begins. Results are clinical documents — treat them
          as confidential.
        </p>
        <p>
          Hours and the service menu may change. If something here disagrees with what reception
          tells you on the day, the person in the room is right.
        </p>
      </div>
    </article>
  );
}
