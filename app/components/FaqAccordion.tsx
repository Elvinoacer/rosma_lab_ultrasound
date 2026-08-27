"use client";

import { useState } from "react";
import { faqs } from "@/app/lib/site";

export default function FaqAccordion({ items = faqs }: { items?: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="hero-glass divide-y divide-white/10 rounded-[1.45rem]">
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
              <span className="text-base font-medium text-bone">{item.q}</span>
              <span
                className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-sand transition ${
                  isOpen ? "rotate-45 bg-white/10" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-bone/70 sm:px-6">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
