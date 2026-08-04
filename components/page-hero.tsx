import type { CSSProperties } from "react";
import Image from "next/image";

/** Small banner used at the top of inner pages. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/assets/hero-banner.webp",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden py-16 md:py-24 px-4">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 anim-hero-zoom"
      />
      <div className="absolute inset-0 bg-linear-to-b from-secondary/60 to-secondary/35 -z-10" />
      <p className="anim-fade-up font-south-catalonia text-center text-xl md:text-2xl text-white">
        {eyebrow}
      </p>
      <h1
        className="anim-fade-up text-center text-3xl md:text-5xl text-white font-extrabold uppercase mt-2"
        style={{ "--anim-delay": "0.12s" } as CSSProperties}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="anim-fade-up text-center text-white/90 max-w-2xl mx-auto mt-4 text-sm md:text-base"
          style={{ "--anim-delay": "0.24s" } as CSSProperties}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
