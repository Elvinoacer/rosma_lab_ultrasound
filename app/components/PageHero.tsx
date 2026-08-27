import Image from "next/image";

export default function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c1c22]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="hero-scrim pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex min-h-[70svh] flex-col p-2.5 sm:min-h-[64svh] sm:p-4 lg:p-5">
        <div className="hero-frame flex flex-1 flex-col justify-end rounded-[1.35rem] px-5 pb-8 pt-[5.5rem] sm:rounded-[1.65rem] sm:px-8 sm:pb-10 sm:pt-24 lg:rounded-[1.85rem] lg:px-10 lg:pb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sand sm:text-xs">
            {kicker}
          </p>
          <h1 className="display mt-4 max-w-3xl text-[2.5rem] leading-[1.05] text-bone sm:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/80 sm:text-lg">{lede}</p>
        </div>
      </div>
    </section>
  );
}
