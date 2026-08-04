import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import YachtCard from "@/components/yacht-card";
import { getYachts } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Our Yachts",
  description: "Browse the SAILOR charter fleet — from nimble day-sailers to tri-deck motor yachts.",
};

export default async function YachtsPage({
  searchParams,
}: {
  searchParams: Promise<{ destination?: string; yacht?: string }>;
}) {
  const { destination, yacht } = await searchParams;
  let yachts = await getYachts(destination ? { destination_slug: destination } : undefined);
  if (yacht) {
    yachts = yachts.filter((y) => y.slug === yacht);
  }

  return (
    <main className="container mx-auto px-2 md:px-4">
      <PageHero
        eyebrow="our fleet"
        title="Yacht Series"
        subtitle="Every yacht comes fully crewed, provisioned and ready to sail. Pick your boat — we handle the rest."
      />

      <section className="py-10">
        {yachts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl font-bold text-secondary">
              No yachts match that search.
            </p>
            <Link href="/yachts" className="inline-block mt-4 text-primary font-bold underline">
              View the whole fleet
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {yachts.map((y, i) => (
              <Reveal key={y.id} delay={Math.min(i * 0.06, 0.3)}>
                <YachtCard yacht={y} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
