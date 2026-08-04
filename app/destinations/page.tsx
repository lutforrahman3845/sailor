import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RiMapPin2Fill } from "react-icons/ri";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { getDestinations, getYachts } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Destinations",
  description: "The coastlines and islands the SAILOR fleet calls home.",
};

export default async function DestinationsPage() {
  const [destinations, yachts] = await Promise.all([getDestinations(), getYachts()]);
  const yachtCount = (destinationId: number) =>
    yachts.filter((y) => y.destination_id === destinationId).length;

  return (
    <main className="mx-5 md:mx-10 lg:mx-14">
      <PageHero
        eyebrow="where to sail"
        title="Popular Destinations"
        subtitle="From the Caribbean trade winds to the Aegean meltemi — pick a coastline and we'll put a yacht under you."
      />

      <section className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((d, i) => {
          const count = yachtCount(d.id);
          return (
            <Reveal
              key={d.id}
              delay={Math.min(i * 0.06, 0.3)}
              className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  src={d.image_path}
                  alt={d.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                  <RiMapPin2Fill className="size-4.5 text-primary shrink-0" />
                  {d.name}
                </h2>
                <p className="text-sm font-medium text-muted mt-1">{d.country}</p>
                <p className="text-secondary text-sm mt-3 flex-1">{d.blurb}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-muted">
                    {count} {count === 1 ? "yacht" : "yachts"} available
                  </span>
                  {count > 0 && (
                    <Link
                      href={`/yachts?destination=${d.slug}`}
                      className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      Explore
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>
    </main>
  );
}
