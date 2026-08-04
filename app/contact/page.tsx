import type { Metadata } from "next";
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the SAILOR charter team.",
};

export default function ContactPage() {
  return (
    <main className="mx-5 md:mx-10 lg:mx-14">
      <PageHero
        eyebrow="get in touch"
        title="Contact Us"
        subtitle="Questions, custom itineraries or press — we answer within one business day."
      />

      <section className="py-10 grid grid-cols-1 xl:grid-cols-3 gap-10">
        <Reveal className="xl:col-span-1 space-y-6">
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-bold text-secondary flex items-center gap-2">
              <RiMapPin2Line className="size-5 text-primary" /> Visit us
            </h2>
            <p className="text-secondary mt-2">
              3915 NW 25th St,
              <br />
              Miami, Florida, USA
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-bold text-secondary flex items-center gap-2">
              <RiMailLine className="size-5 text-primary" /> Email
            </h2>
            <a href="mailto:contact@sailor.com" className="text-primary font-medium mt-2 inline-block hover:underline">
              contact@sailor.com
            </a>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100">
            <h2 className="text-lg font-bold text-secondary flex items-center gap-2">
              <RiPhoneLine className="size-5 text-primary" /> Phone
            </h2>
            <a href="tel:305-905-8099" className="text-primary font-medium mt-2 inline-block hover:underline">
              305-905-8099
            </a>
            <p className="text-sm text-muted mt-1">Mon–Sat, 9am–6pm EST</p>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          className="xl:col-span-2 p-6 md:p-10 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100"
        >
          <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
          <ContactForm />
        </Reveal>
      </section>
    </main>
  );
}
