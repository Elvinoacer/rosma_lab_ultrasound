export default function SectionHeading({
  kicker,
  title,
  lede,
  light = false,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            light ? "text-sand" : "text-clay"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`display mt-3 text-3xl leading-tight sm:text-4xl ${
          light ? "text-bone" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-bone/70" : "text-ink-soft"}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
