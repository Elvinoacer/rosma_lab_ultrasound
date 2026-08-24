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
      <div className="rounded-[1.6rem] border border-sea/15 bg-foam px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Request ready</p>
        <h3 className="display mt-3 text-3xl text-ink">Your email app should open now.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Send the prepared message to reception. Your visit is only confirmed after Rosma replies.
        </p>
        <a href={`mailto:${site.email}`} className="mt-6 inline-flex font-medium text-sea hover:underline">
          Email {site.email} directly →
        </a>
      </div>
    );
  }

  const field = "mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-3.5 py-3 text-ink placeholder:text-mist focus:border-sea focus:outline-none focus:ring-2 focus:ring-sea/15";

  return (
    <form onSubmit={onSubmit} className="rounded-[1.6rem] border border-ink/8 bg-white p-6 shadow-[0_20px_60px_rgba(16,24,32,0.06)] sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Request a slot</p>
        <h2 className="display mt-2 text-3xl text-ink">Tell reception what you need.</h2>
        <p className="mt-2 text-sm text-ink-soft">We will confirm the time and any preparation by reply.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">Full name<input name="name" required autoComplete="name" className={field} placeholder="Your name" /></label>
        <label className="text-sm font-medium text-ink">Phone<input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="07XX XXX XXX" /></label>
        <label className="text-sm font-medium text-ink">Email <span className="font-normal text-mist">(optional)</span><input name="email" type="email" autoComplete="email" className={field} placeholder="you@email.com" /></label>
        <label className="text-sm font-medium text-ink">Service<select name="service" required className={field} defaultValue=""><option value="" disabled>Choose a service</option>{serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}</select></label>
        <label className="text-sm font-medium text-ink">Preferred date<input name="date" type="date" className={field} /></label>
        <label className="text-sm font-medium text-ink">Preferred time<select name="time" className={field} defaultValue="morning"><option value="morning">Morning</option><option value="afternoon">Afternoon</option><option value="evening">Evening (weekdays)</option><option value="anytime">Anytime</option></select></label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">Anything we should know<textarea name="notes" rows={4} className={field} placeholder="Referral, pregnancy week, fasting already started…" /></label>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">Prepare booking email</button>
      <p className="mt-3 text-xs leading-relaxed text-mist">This does not confirm an appointment. Your email app will open with the request; reception confirms the final slot.</p>
    </form>
  );
}
