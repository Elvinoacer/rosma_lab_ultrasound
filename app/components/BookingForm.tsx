"use client";

import { useState } from "react";
import { serviceOptions, site } from "@/app/lib/site";

export default function BookingForm() {
  const [prepared, setPrepared] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const date = String(form.get("date") || "Any date");
    const time = String(form.get("time") || "Anytime");
    const notes = String(form.get("notes") || "None");
    const subject = encodeURIComponent(`Visit request — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not provided"}\nService: ${service}\nPreferred date: ${date}\nPreferred time: ${time}\nNotes: ${notes}`,
    );

    setPrepared(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  if (prepared) {
    return (
      <div className="hero-glass rounded-[1.6rem] px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Request ready</p>
        <h3 className="display mt-3 text-3xl text-bone">Your email app should open now.</h3>
        <p className="mx-auto mt-3 max-w-md text-bone/70">
          Send the prepared message to reception. Your visit is only confirmed after Rosma replies.
        </p>
        <a href={`mailto:${site.email}`} className="mt-6 inline-flex font-medium text-sand hover:text-white">
          Email {site.email} directly →
        </a>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-3 text-bone placeholder:text-bone/35 focus:border-sand/50 focus:outline-none focus:ring-2 focus:ring-sand/20";

  return (
    <form onSubmit={onSubmit} className="hero-glass rounded-[1.6rem] p-6 sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Request a slot</p>
        <h2 className="display mt-2 text-3xl text-bone">Tell reception what you need.</h2>
        <p className="mt-2 text-sm text-bone/70">We will confirm the time and any preparation by reply.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-bone">
          Full name
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-bone">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="07XX XXX XXX" />
        </label>
        <label className="text-sm font-medium text-bone">
          Email <span className="font-normal text-bone/45">(optional)</span>
          <input name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" />
        </label>
        <label className="text-sm font-medium text-bone">
          Service
          <select name="service" required className={field} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt} className="text-ink">
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-bone">
          Preferred date
          <input name="date" type="date" className={field} />
        </label>
        <label className="text-sm font-medium text-bone">
          Preferred time
          <select name="time" className={field} defaultValue="morning">
            <option value="morning" className="text-ink">
              Morning
            </option>
            <option value="afternoon" className="text-ink">
              Afternoon
            </option>
            <option value="evening" className="text-ink">
              Evening (weekdays)
            </option>
            <option value="anytime" className="text-ink">
              Anytime
            </option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-bone">
        Anything we should know
        <textarea
          name="notes"
          rows={4}
          className={field}
          placeholder="Referral, pregnancy week, fasting already started…"
        />
      </label>
      <button type="submit" className="hero-book mt-6 inline-flex w-full justify-center sm:w-auto">
        Prepare booking email
      </button>
      <p className="mt-3 text-xs leading-relaxed text-bone/45">
        This does not confirm an appointment. Your email app will open with the request; reception confirms the final slot.
      </p>
    </form>
  );
}
