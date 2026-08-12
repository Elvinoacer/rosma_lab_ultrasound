export default function WaveMark({
  className = "h-8 w-8",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const ring = tone === "light" ? "#f4efe6" : "#1c4d56";
  const core = tone === "light" ? "#c4623a" : "#c4623a";

  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" stroke={ring} strokeOpacity="0.35" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="15" stroke={ring} strokeOpacity="0.55" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="8" stroke={ring} strokeWidth="1.4" />
      <circle cx="24" cy="24" r="3.2" fill={core} />
    </svg>
  );
}
