import Link from "next/link";
import { site } from "@/app/lib/site";

const reasons = [
  {
    title: "Accurate results",
    body: "Modern equipment, trusted professionals.",
    icon: "stethoscope" as const,
  },
  {
    title: "Timely service",
    body: "Same-day results for most tests.",
    icon: "clock" as const,
  },
  {
    title: "Patient first",
    body: "Clear process, friendly care, every step.",
    icon: "heart" as const,
  },
  {
    title: "Trusted by thousands",
    body: "Quality care you can rely on.",
    icon: "shield" as const,
  },
];

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${site.map.lat},${site.map.lng}`;

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c1c22]" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero_design/hero_pc_bg.webp" type="image/webp" />
          <img
            src="/hero_design/hero_mobile_bg.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_28%] lg:object-center"
          />
        </picture>
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex min-h-[100svh] flex-col p-2.5 sm:p-4 lg:p-5">
        <div className="hero-frame flex min-h-[calc(100svh-1.25rem)] flex-1 flex-col rounded-[1.35rem] px-4 pb-4 pt-[4.75rem] sm:min-h-[calc(100svh-2rem)] sm:rounded-[1.65rem] sm:px-6 sm:pb-5 sm:pt-20 lg:min-h-[calc(100svh-2.5rem)] lg:rounded-[1.85rem] lg:px-8 lg:pb-6 lg:pt-[5.25rem] xl:px-10">
          <div className="grid flex-1 items-center gap-8 pb-2 lg:grid-cols-[minmax(0,1fr)_minmax(280px,22rem)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(300px,24rem)] xl:gap-14">
            <div className="max-w-2xl">
              <p className="reveal text-[11px] font-medium uppercase tracking-[0.28em] text-sand sm:text-xs">
                Karibu – Kasarani
              </p>
              <h1
                id="hero-title"
                className="display reveal reveal-d1 mt-4 text-[2.7rem] leading-[1.02] text-bone sm:text-6xl lg:text-[4.35rem] lg:leading-[1.02] xl:text-[4.85rem]"
              >
                Diagnostics without the maze.
              </h1>
              <span className="mt-5 block h-px w-10 bg-[#cbb892] lg:hidden" aria-hidden />
              <p className="reveal reveal-d2 mt-5 max-w-md text-[0.98rem] leading-relaxed text-bone/82 sm:text-lg lg:mt-6 lg:max-w-lg">
                Ultrasound and laboratory testing on Kasarani–Mwiki Road. See what you need,
                prepare correctly, and know what happens next.
              </p>
              <div className="reveal reveal-d3 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link href="/book" className="hero-book inline-flex w-full justify-between px-5 sm:w-auto sm:justify-center sm:px-[1.45rem]">
                  <Icon name="calendar" className="h-[18px] w-[18px] lg:hidden" />
                  Book a visit
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-dir inline-flex w-full justify-between px-5 sm:w-auto sm:justify-center sm:px-[1.45rem]"
                >
                  <Icon name="pin" className="h-[18px] w-[18px] lg:hidden" />
                  Get directions
                  <Icon name="send" className="h-4 w-4" />
                </a>
              </div>
            </div>

            <WhyRosma />
          </div>

          <StatsBar />
        </div>
      </div>
    </section>
  );
}

function WhyRosma() {
  return (
    <aside className="hero-glass reveal reveal-d2 rounded-[1.45rem] p-5 sm:p-6">
      <h2 className="text-lg font-medium text-bone sm:text-xl">Why Rosma?</h2>

      <div className="mt-5 grid grid-cols-2 lg:hidden">
        {reasons.map((item, i) => (
          <div
            key={item.title}
            className={`flex gap-3 py-3.5 ${i % 2 === 1 ? "border-l border-white/10 pl-4" : "pr-4"} ${
              i >= 2 ? "border-t border-white/10" : ""
            }`}
          >
            <span className="hero-ico mt-0.5">
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.92rem] font-medium leading-snug text-bone">{item.title}</p>
              <p className="mt-1 text-[0.78rem] leading-snug text-bone/65">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <ul className="mt-5 hidden lg:block">
        {reasons.slice(0, 3).map((item, i) => (
          <li
            key={item.title}
            className={`flex gap-3.5 py-3.5 ${i > 0 ? "border-t border-white/10" : "pt-0"}`}
          >
            <span className="hero-ico">
              <Icon name={item.icon} className="h-[18px] w-[18px]" />
            </span>
            <div>
              <p className="text-[0.98rem] font-medium text-bone">{item.title}</p>
              <p className="mt-0.5 text-sm leading-snug text-bone/65">{item.body}</p>
            </div>
          </li>
        ))}
        <li className="mt-2 rounded-2xl border border-white/12 bg-white/[0.06] px-3.5 py-3.5">
          <div className="flex gap-3.5">
            <span className="hero-ico">
              <Icon name={reasons[3].icon} className="h-[18px] w-[18px]" />
            </span>
            <div>
              <p className="text-[0.98rem] font-medium text-bone">{reasons[3].title}</p>
              <p className="mt-0.5 text-sm leading-snug text-bone/65">{reasons[3].body}</p>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
}

function StatsBar() {
  const items = [
    {
      label: "Walk-ins",
      icon: "walk" as const,
      value: (
        <>
          Welcome for
          <br className="hidden lg:block" /> most services
        </>
      ),
    },
    {
      label: "Hours",
      icon: "clock" as const,
      value: (
        <>
          <span className="lg:hidden">
            Mon–Sat
            <br />
            7am–7pm
            <br />
            Sun 8am–4pm
          </span>
          <span className="hidden lg:inline">
            Mon–Sat 7am–7pm
            <br />
            Sun 8am–4pm
          </span>
        </>
      ),
    },
    {
      label: "Payment",
      icon: "card" as const,
      value: (
        <>
          Cash or
          <br className="lg:hidden" /> M-Pesa
        </>
      ),
    },
    {
      label: "Languages",
      icon: "globe" as const,
      value: (
        <>
          English,
          <br className="lg:hidden" /> Kiswahili
        </>
      ),
    },
  ];

  return (
    <dl className="hero-glass reveal reveal-d4 mt-8 grid grid-cols-4 rounded-[1.35rem] sm:mt-10 lg:mt-6">
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`flex flex-col items-center px-1 py-4 text-center sm:px-3 sm:py-5 lg:flex-row lg:items-center lg:gap-3.5 lg:px-5 lg:py-5 lg:text-left ${
            i > 0 ? "border-l border-white/10" : ""
          }`}
        >
          <span className="hero-ico mb-2 lg:mb-0">
            <Icon name={item.icon} className="h-4 w-4" />
          </span>
          <div>
            <dt className="text-[9px] font-medium uppercase tracking-[0.18em] text-sand sm:text-[10px]">
              {item.label}
            </dt>
            <dd className="mt-1 text-[11px] leading-snug text-bone sm:text-xs lg:text-sm">{item.value}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

function Icon({
  name,
  className,
}: {
  name: "stethoscope" | "clock" | "heart" | "shield" | "walk" | "card" | "globe" | "calendar" | "arrow" | "pin" | "send";
  className?: string;
}) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "stethoscope":
      return (
        <svg {...props}>
          <path d="M6 4v7a4 4 0 0 0 8 0V4" />
          <path d="M6 4H4.8A1.8 1.8 0 0 0 3 5.8V7" />
          <path d="M14 4h1.2A1.8 1.8 0 0 1 17 5.8V7" />
          <path d="M14 11a6 6 0 0 0 6 6h0a2 2 0 1 0 0-4h-.5" />
          <circle cx="10" cy="19" r="2.2" />
          <path d="M10 16.8V15" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.2" />
          <path d="M12 8.2V12l2.8 1.8" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path d="M12 19s-6.4-4.1-8.3-7.2C2.2 9.6 3.1 6.6 5.8 5.7c1.6-.5 3.3.1 4.3 1.4C11.1 5.8 12.8 5.2 14.4 5.7c2.7.9 3.6 3.9 2.1 6.1C14.6 14.9 12 19 12 19z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3.5 5.5 6v5.2c0 4 2.7 6.8 6.5 8.3 3.8-1.5 6.5-4.3 6.5-8.3V6L12 3.5z" />
          <path d="m9 12 2 2 4-4.5" />
        </svg>
      );
    case "walk":
      return (
        <svg {...props}>
          <circle cx="13" cy="5" r="1.6" />
          <path d="m8.5 20 2.2-4.2L13 13.5 11 10.5l3.2-1.2 2.3 3.2 2 6.5" />
          <path d="m11 10.5-3 2.2-1.8 4.8" />
        </svg>
      );
    case "card":
      return (
        <svg {...props}>
          <rect x="3.5" y="6.5" width="17" height="11.5" rx="2" />
          <path d="M3.5 10.5h17" />
          <path d="M7 14.5h4" />
        </svg>
      );
    case "globe":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.2" />
          <path d="M3.8 12h16.4M12 3.8c2.2 2.3 3.4 5.2 3.4 8.2s-1.2 5.9-3.4 8.2c-2.2-2.3-3.4-5.2-3.4-8.2s1.2-5.9 3.4-8.2Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...props}>
          <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
          <path d="M8 3.5v4M16 3.5v4M3.5 10h17" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...props}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M12 21s6-5.2 6-10.2A6 6 0 0 0 6 10.8C6 15.8 12 21 12 21z" />
          <circle cx="12" cy="10.8" r="1.8" />
        </svg>
      );
    case "send":
      return (
        <svg {...props}>
          <path d="m4.5 12 15-7.5L12 19.5l-1.2-6.3z" />
          <path d="M19.5 4.5 10.8 13.2" />
        </svg>
      );
  }
}
