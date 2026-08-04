import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiCompass3Line } from "react-icons/ri";

const STATS = [
  { value: "10+", label: "Years chartering" },
  { value: "10k+", label: "Happy guests" },
  { value: "7", label: "Dream coastlines" },
];

export default function Hero() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-14">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
        <Image
          src="/assets/hero-banner-new.webp"
          alt="Superyacht anchored in a turquoise bay"
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 anim-hero-zoom"
        />
        {/* legibility scrim */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-secondary/50 via-secondary/10 to-secondary/70" />

        <div className="px-6 md:px-14 pt-20 pb-28 sm:pt-24 sm:pb-32 md:pt-28 md:pb-36 lg:pt-36 lg:pb-44 text-center">
          <p className="anim-fade-up font-south-catalonia text-2xl md:text-3xl text-white/95">
            welcome aboard
          </p>
          <h1
            className="anim-fade-up mt-2 font-south-catalonia text-white font-medium select-none leading-none text-[14vw] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ "--anim-delay": "0.12s" } as CSSProperties}
          >
            Sail into Luxury
          </h1>
          <p
            className="anim-fade-up mx-auto mt-6 md:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-white/85"
            style={{ "--anim-delay": "0.24s" } as CSSProperties}
          >
            Crewed yachts, hidden anchorages and coastlines worth crossing
            oceans for — your charter starts here.
          </p>

          <div
            className="anim-fade-up mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ "--anim-delay": "0.36s" } as CSSProperties}
          >
            <Link
              href="/yachts"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-md shadow-secondary/20 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore the Fleet
              <RiArrowRightLine className="size-5" />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/15 backdrop-blur-md border border-white/40 text-white font-bold transition hover:bg-white/25"
            >
              <RiCompass3Line className="size-5" />
              View Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* floating stats strip — sits where the old search bar used to */}
      <div
        className="anim-fade-up relative -mt-12 sm:-mt-14 mx-auto w-11/12 sm:w-fit"
        style={{ "--anim-delay": "0.5s" } as CSSProperties}
      >
        <dl className="grid grid-cols-3 divide-x divide-gray-200 rounded-2xl bg-white/85 backdrop-blur-xl shadow-md ring-1 ring-black/5 px-2 py-5 sm:px-6 md:px-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-3 sm:px-8 md:px-12 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl md:text-3xl font-extrabold text-primary">
                {stat.value}
              </dd>
              <dd className="mt-1 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
