import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  RiAnchorLine,
  RiArrowRightLine,
  RiMoonClearLine,
  RiRouteLine,
} from "react-icons/ri";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { getTestimonials } from "@/lib/db/queries";
import TestimonialsSlider from "@/components/home/testimonials-slider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ten years of luxury yacht charter — who we are and why guests keep coming back.",
};

const STATS = [
  { value: "10", label: "Years at sea" },
  { value: "10k+", label: "Guests hosted" },
  { value: "5", label: "Crewed yachts" },
  { value: "7", label: "Coastlines" },
];

const VALUES = [
  {
    number: "01",
    icon: RiRouteLine,
    title: "Crafted itineraries",
    copy: "Routes drawn around your dates, your pace and the anchorages worth lingering in.",
  },
  {
    number: "02",
    icon: RiAnchorLine,
    title: "Crewed to perfection",
    copy: "Licensed captains and trained crew on every charter — you never lift more than a glass.",
  },
  {
    number: "03",
    icon: RiMoonClearLine,
    title: "Privacy & calm",
    copy: "Quiet bays over busy marinas, and a deck that is yours alone.",
  },
];

export default async function AboutPage() {
  const testimonials = await getTestimonials();

  return (
    <main className="mx-5 md:mx-10 lg:mx-14">
      <PageHero
        eyebrow="about us"
        title="Sail Excellence Is Our Promise"
        subtitle="Welcome to our premier yacht charter service, where luxury meets adventure on the open seas."
        image="/assets/page-hero-about.webp"
      />

      {/* Story intro — editorial split */}
      <section className="py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <Reveal className="relative pb-12">
          <div className="relative w-[74%] h-96 md:h-130 rounded-3xl overflow-hidden">
            <Image
              src="/assets/about-1.webp"
              alt="Yacht cruising along a rocky coastline"
              fill
              sizes="(min-width: 1024px) 37vw, 74vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-60 md:h-80 rounded-2xl overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/assets/about-2.webp"
              alt="Guests relaxing on a yacht deck"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute top-6 right-2 md:right-10 size-24 md:size-28 rounded-full bg-white shadow-xl ring-1 ring-black/5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-primary leading-none">
              10
            </span>
            <span className="mt-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              years
              <br />
              at sea
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-10 bg-primary" aria-hidden />
            Our story
          </p>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-secondary leading-tight">
            A decade of{" "}
            <span className="font-south-catalonia font-medium text-primary text-4xl md:text-6xl">
              quiet luxury
            </span>
            <br />
            on open water
          </h2>
          <p className="mt-7 text-secondary/80 leading-8">
            Today, we are the leading brand for luxury performance motor
            yachts. We offer the most diverse product portfolio in the world.
            Each with its own personality, our yachts are engineered with the
            owner in mind and standing at the helm.
          </p>
          <p className="mt-5 text-secondary/80 leading-8">
            What started ten years ago with a single day-sailer in the Greek
            Islands is now a crewed fleet spanning three oceans — same idea,
            bigger horizon.
          </p>
          <p className="mt-8 font-south-catalonia text-3xl text-secondary">
            — the Sailor crew
          </p>
          <Link
            href="/yachts"
            className="group mt-6 inline-flex items-center gap-2 font-bold text-primary"
          >
            Meet the fleet
            <RiArrowRightLine className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* Editorial stats row */}
      <Reveal>
        <section
          aria-label="Sailor in numbers"
          className="border-y border-secondary/10 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-secondary/10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <p className="text-5xl md:text-6xl font-extrabold tracking-tight text-secondary">
                {s.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* Navy quote band */}
      <Reveal>
        <section className="relative mt-20 md:mt-28 rounded-3xl overflow-hidden bg-secondary">
          <Image
            src="/assets/page-hero-about.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="relative px-6 py-20 md:py-28 text-center">
            <p className="font-south-catalonia text-4xl md:text-6xl text-white leading-snug max-w-3xl mx-auto">
              &ldquo;the boat is only half the holiday&rdquo;
            </p>
            <p className="mt-6 text-white/70 max-w-xl mx-auto text-sm md:text-base">
              The crew, the route and the little details are the other half —
              and they are ours to get right.
            </p>
            <Link
              href="/yachts"
              className="inline-block mt-10 px-9 py-4 bg-primary rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
            >
              Meet the Fleet
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Values row */}
      <section className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="why sail with sailor"
            title="It's the Details"
            className="mb-14"
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {VALUES.map((v, i) => (
            <Reveal key={v.number} delay={i * 0.1}>
              <div className="border-t border-secondary/15 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.3em] text-primary">
                    {v.number}
                  </span>
                  <v.icon className="size-6 text-primary" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-secondary">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20">
        <Reveal>
          <SectionHeading
            eyebrow="testimonial"
            title="The Voice of Experience"
            className="mb-12"
          />
          <TestimonialsSlider testimonials={testimonials} />
        </Reveal>
      </section>
    </main>
  );
}
