import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { ServiceItem } from "@/components/home/services-section";
import { getServices } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Services",
  description: "Everything the SAILOR crew handles so you don't have to.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="max-w-7xl mx-auto px-2 md:px-4">
      <PageHero
        eyebrow="sail with sailor"
        title="Our Services"
        subtitle="A charter is more than a boat. These are the things our team takes care of on every booking."
      />

      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Reveal
              key={s.id}
              delay={Math.min(i * 0.06, 0.3)}
              className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100"
            >
              <ServiceItem service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-10">
        <Reveal>
          <SectionHeading eyebrow="ready when you are" title="Sail with us" className="mb-8" />
          <div className="flex flex-col xl:flex-row items-center gap-10 justify-center">
          <Image
            src="/assets/yacht-illustration.webp"
            alt="Yacht illustration"
            width={1600}
            height={900}
            className="w-full max-w-2xl h-auto"
          />
          <div className="text-center xl:text-left">
            <p className="text-secondary max-w-md text-base md:text-lg">
              Tell us your dates and the coastline you&apos;re dreaming of — our
              concierge team will match you with the right yacht and crew.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 px-9 py-4 bg-primary rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Link>
          </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
