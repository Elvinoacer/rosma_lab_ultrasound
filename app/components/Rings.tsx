export default function Rings({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <div className="relative h-full w-full">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="pulse-ring absolute inset-0 rounded-full border border-white/20"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>
    </div>
  );
}
