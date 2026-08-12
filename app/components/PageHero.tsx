import Image from "next/image";
import Rings from "./Rings";

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
    <section className="ink-wash grain relative overflow-hidden pt-28 sm:pt-32">
      <Rings className="-right-16 top-10 h-72 w-72 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-end gap-10 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pb-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand">{kicker}</p>
          <h1 className="display mt-4 max-w-xl text-4xl leading-[1.08] text-bone sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-bone/72 sm:text-lg">{lede}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width:1024px) 42vw, 100vw" priority />
        </div>
      </div>
    </section>
  );
}
