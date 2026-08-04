import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiCheckLine, RiCloseLine } from "react-icons/ri";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ServiceItem } from "@/components/home/services-section";
import { getServices, getTestimonials } from "@/lib/db/queries";
import TestimonialsSlider from "@/components/home/testimonials-slider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who Sailor is, how a crewed charter works, and exactly what is included when you book.",
};

const STATS = [
  { value: "10", label: "Years at sea" },
  { value: "10k+", label: "Guests hosted" },
  { value: "5", label: "Crewed yachts" },
  { value: "7", label: "Coastlines" },
];

const STEPS = [
  {
    number: "01",
    title: "Choose your yacht",
    copy: "Browse the fleet by coastline, guest count or budget. Every listing shows the real day rate, berths and crew size.",
  },
  {
    number: "02",
    title: "Send an enquiry",
    copy: "Tell us your dates and how many are sailing. We confirm availability within one business day — nothing is paid up front.",
  },
  {
    number: "03",
    title: "Plan the route",
    copy: "Your charter manager and the captain draft an itinerary around your pace, then adjust it until it is the trip you wanted.",
  },
  {
    number: "04",
    title: "Step aboard",
    copy: "Transfers, provisioning and paperwork are done before you arrive. The crew meets you at the dock and you sail.",
  },
];

const INCLUDED = [
  "Professional captain and crew",
  "All bedding, towels and linen",
  "Welcome provisioning on day one",
  "Paddleboards, snorkel gear and tenders",
  "Itinerary planning with your captain",
  "24/7 shore support while you sail",
];

const NOT_INCLUDED = [
  "Fuel, charged at cost on return",
  "Marina and mooring fees",
  "Food and drink beyond the welcome pack",
  "Crew gratuity, entirely at your discretion",
];

export default async function AboutPage() {
  const [testimonials, services] = await Promise.all([
    getTestimonials(),
    getServices(),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-2 md:px-4">
      <PageHero
        eyebrow="about us"
        title="Sail Excellence Is Our Promise"
        subtitle="A crewed charter company that owns its fleet — here is who we are, how a charter works and what you get."
      />

      {/* Story */}
      <section className="py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal className="relative pb-12">
          <div className="relative w-[74%] h-80 md:h-104 rounded-3xl overflow-hidden">
            <Image
              src="/assets/about-1.webp"
              alt="Yacht cruising along a rocky coastline"
              fill
              sizes="(min-width: 1024px) 37vw, 74vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-48 md:h-64 rounded-2xl overflow-hidden border-8 border-white shadow-xl">
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
          <h2 className="font-display mt-5 text-xl md:text-2xl text-secondary leading-snug">
            A decade of{" "}
            <span className="font-south-catalonia font-medium text-primary text-3xl md:text-4xl">
              quiet luxury
            </span>
            <br />
            on open water
          </h2>
          <p className="mt-7 text-secondary/80 leading-8">
            Sailor is a crewed charter company. We own and operate every yacht
            we list — five of them, across seven coastlines — so the boat you
            book, the captain you sail with and the person answering your email
            all work for the same company. Nothing is subcontracted to a broker.
          </p>
          <p className="mt-5 text-secondary/80 leading-8">
            Crewed means you never handle the boat. A captain and crew run it,
            cook aboard, and know which bays empty out by six. You choose the
            coastline and the pace; everything between those two decisions is
            ours to arrange.
          </p>
          <p className="mt-5 text-secondary/80 leading-8">
            It started ten years ago with one day-sailer in the Greek Islands.
            The fleet grew; the idea did not change.
          </p>
          <p className="mt-8 font-south-catalonia text-3xl text-secondary">
            — the Sailor crew
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <Reveal>
        <section
          aria-label="Sailor in numbers"
          className="border-y border-secondary/10 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-secondary/10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <p className="font-display text-3xl md:text-4xl text-secondary">
                {s.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* How a charter works */}
      <section className="py-14 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="from enquiry to anchor"
            title="How a Charter Works"
            className="mb-12"
          />
        </Reveal>
        <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <li className="border-t-2 border-primary/25 pt-5 h-full">
                <span className="text-sm font-bold tracking-[0.3em] text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-secondary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/yachts"
              className="inline-flex items-center gap-2 px-9 py-4 bg-primary rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
            >
              Start with the fleet
              <RiArrowRightLine className="size-5" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="py-14 md:py-20 border-t border-secondary/10">
        <Reveal>
          <SectionHeading
            eyebrow="what we handle"
            title="What We Take Care Of"
            className="mb-12"
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 0.06, 0.3)}>
              <ServiceItem service={s} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 font-bold text-primary"
            >
              See all services in detail
              <RiArrowRightLine className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* What's included */}
      <section className="py-14 md:py-20 border-t border-secondary/10">
        <Reveal>
          <SectionHeading
            eyebrow="no surprises"
            title="What's Included"
            className="mb-12"
          />
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full p-8 rounded-2xl bg-primary/5 ring-1 ring-primary/15">
              <h3 className="text-lg font-semibold text-secondary">
                Included in every charter
              </h3>
              <ul className="mt-5 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-secondary/85">
                    <RiCheckLine
                      className="size-5 shrink-0 text-primary mt-0.5"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full p-8 rounded-2xl bg-gray-50 ring-1 ring-secondary/10">
              <h3 className="text-lg font-semibold text-secondary">
                Billed separately
              </h3>
              <ul className="mt-5 space-y-3">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-secondary/85">
                    <RiCloseLine
                      className="size-5 shrink-0 text-muted mt-0.5"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted leading-6">
                We quote these as an estimated running cost with your itinerary,
                so the total is clear before you commit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quote band */}
      <Reveal>
        <section className="relative mt-4 rounded-3xl overflow-hidden bg-secondary">
          <Image
            src="/assets/page-hero-about.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="relative px-6 py-14 md:py-20 text-center">
            <p className="font-south-catalonia text-3xl md:text-5xl text-white leading-snug max-w-3xl mx-auto">
              &ldquo;the boat is only half the holiday&rdquo;
            </p>
            <p className="mt-6 text-white/70 max-w-xl mx-auto text-sm md:text-base">
              The crew, the route and the little details are the other half —
              and they are ours to get right.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 px-9 py-4 bg-primary rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
            >
              Talk to a charter manager
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Testimonials */}
      <section className="py-14">
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
