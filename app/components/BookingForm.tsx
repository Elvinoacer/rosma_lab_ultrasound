"use client";

import { useState } from "react";
import { serviceOptions } from "@/app/lib/site";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.6rem] border border-sea/15 bg-foam px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Asante</p>
        <h3 className="display mt-3 text-3xl text-ink">We have your request.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Reception will confirm your slot and any preparation — fasting, water, or nothing at all.
          If it is urgent, walk in; we will see you as soon as a room is free.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-ink/10 bg-white px-3.5 py-3 text-ink placeholder:text-mist";

  return (
    <form onSubmit={onSubmit} className="rounded-[1.6rem] border border-ink/8 bg-white p-6 shadow-[0_20px_60px_rgba(16,24,32,0.06)] sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-ink">
          Full name
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-ink">
          Phone
          <input name="phone" type="tel" required className={field} placeholder="07XX XXX XXX" />
        </label>
        <label className="text-sm font-medium text-ink">
          Email <span className="font-normal text-mist">(optional)</span>
          <input name="email" type="email" className={field} placeholder="you@email.com" />
        </label>
        <label className="text-sm font-medium text-ink">
          Service
          <select name="service" required className={field} defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-ink">
          Preferred date
          <input name="date" type="date" className={field} />
        </label>
        <label className="text-sm font-medium text-ink">
          Preferred time
          <select name="time" className={field} defaultValue="morning">
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening (weekdays)</option>
            <option value="anytime">Anytime</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-ink">
        Anything we should know
        <textarea
          name="notes"
          rows={4}
          className={field}
          placeholder="Referral, pregnancy week, fasting already started…"
        />
      </label>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send booking request
      </button>
      <p className="mt-3 text-xs text-mist">
        This holds a request — not a confirmed slot until reception replies. Walk-ins remain welcome.
      </p>
    </form>
  );
}
