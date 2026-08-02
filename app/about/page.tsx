import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import { getTestimonials } from "@/lib/db/queries";
import TestimonialsSlider from "@/components/home/testimonials-slider";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ten years of luxury yacht charter — who we are and why guests keep coming back.",
};

const STATS = [
  { value: "10", label: "Years of Experience" },
  { value: "10k+", label: "Sailed Horizons" },
  { value: "5", label: "Yachts in the Fleet" },
  { value: "7", label: "Destinations" },
];

export default async function AboutPage() {
  const testimonials = await getTestimonials();

  return (
    <main className="mx-5 md:mx-10 lg:mx-14">
      <PageHero
        eyebrow="about us"
        title="Sail Excellence Is Our Promise"
        subtitle="Welcome to our premier yacht charter service, where luxury meets adventure on the open seas."
      />

      <section className="py-14 flex flex-col xl:flex-row items-center gap-10">
        <div className="w-full xl:w-1/2 grid grid-cols-2 gap-6">
          <div className="relative h-80 md:h-[440px] rounded-2xl overflow-hidden">
            <Image src="/assets/about-1.webp" alt="Yacht cruising" fill sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover" />
          </div>
          <div className="relative h-80 md:h-[440px] mt-10 rounded-2xl overflow-hidden">
            <Image src="/assets/about-2.webp" alt="Guests on deck" fill sizes="(min-width: 1280px) 25vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="w-full xl:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary">
            Book Your Dream Yacht Today!
          </h2>
          <p className="text-secondary mt-4 leading-relaxed">
            Today, we are the leading brand for luxury performance motor yachts.
            We offer the most diverse product portfolio in the world. Each with
            its own personality, our yachts are engineered with the owner in
            mind and standing at the helm.
          </p>
          <p className="text-secondary mt-4 leading-relaxed">
            What started ten years ago with a single day-sailer in the Greek
            Islands is now a crewed fleet spanning three oceans. The idea never
            changed: the boat is only half the holiday — the crew, the route and
            the little details are the other half, and they are ours to get
            right.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {STATS.map((s) => (
              <div key={s.label} className="p-4 bg-gray-50 rounded-xl text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="text-xs md:text-sm font-medium text-secondary mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/yachts"
            className="inline-block mt-8 px-9 py-4 bg-primary rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
          >
            Meet the Fleet
          </Link>
        </div>
      </section>

      <section className="py-14">
        <SectionHeading eyebrow="testimonial" title="The Voice of Experience" className="mb-12" />
        <TestimonialsSlider testimonials={testimonials} />
      </section>
    </main>
  );
}
