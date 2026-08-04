import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiStarFill } from "react-icons/ri";

const STATS = [
  { value: "10+", label: "Years chartering" },
  { value: "10k+", label: "Happy guests" },
  { value: "7", label: "Dream coastlines" },
];

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
        <Image
          src="/assets/heroSection.jpg"
          alt="Superyacht at dusk over a turquoise reef"
          fill
          priority
          sizes="100vw"
          className="object-cover -z-10 anim-hero-zoom"
        />
        {/* legibility scrim */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-secondary/50 via-secondary/10 to-secondary/70" />

        <div className="flex min-h-[70svh] max-h-208 flex-col items-start justify-center px-6 md:px-14 py-16 pb-24 sm:pb-28 text-left">
          <p className="anim-fade-up flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            <span className="flex gap-0.5 text-amber-400" aria-hidden>
              <RiStarFill className="size-3.5" />
              <RiStarFill className="size-3.5" />
              <RiStarFill className="size-3.5" />
              <RiStarFill className="size-3.5" />
              <RiStarFill className="size-3.5" />
            </span>
            Trusted by luxury travellers since 2016
          </p>
          <h1
            className="anim-fade-up font-display mt-4 max-w-5xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
            style={{ "--anim-delay": "0.12s" } as CSSProperties}
          >
            Your Private All-Inclusive Yacht Vacation Begins{" "}
            <span className="text-primary">Here</span>
          </h1>
          <p
            className="anim-fade-up mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/85"
            style={{ "--anim-delay": "0.24s" } as CSSProperties}
          >
            Sail the coastline your way — with a crewed luxury yacht, private
            chef and an itinerary tailored entirely to you.
          </p>

          <div
            className="anim-fade-up mt-8 flex w-full flex-col sm:w-auto sm:flex-row items-center gap-3 sm:gap-4"
            style={{ "--anim-delay": "0.36s" } as CSSProperties}
          >
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-secondary font-bold shadow-md shadow-secondary/20 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Plan My Trip
            </Link>
            <Link
              href="/yachts"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary/80 backdrop-blur-md border border-white/20 text-white font-bold transition hover:bg-secondary"
            >
              Explore Our Yachts
              <RiArrowRightLine className="size-5" />
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
