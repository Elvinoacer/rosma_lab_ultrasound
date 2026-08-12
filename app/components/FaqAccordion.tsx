"use client";

import { useState } from "react";
import { faqs } from "@/app/lib/site";

export default function FaqAccordion({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/8 rounded-[1.4rem] border border-ink/8 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-base font-medium text-ink">{item.q}</span>
              <span
                className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/10 text-sea transition ${
                  isOpen ? "rotate-45 bg-foam" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-ink-soft sm:px-6">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
