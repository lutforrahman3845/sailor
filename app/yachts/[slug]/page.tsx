import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiMapPin2Fill } from "react-icons/ri";
import BookingForm from "@/components/booking-form";
import { getYachtBySlug, getYachts } from "@/lib/db/queries";

export async function generateStaticParams() {
  const yachts = await getYachts();
  return yachts.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const yacht = await getYachtBySlug(slug);
  if (!yacht) return { title: "Yacht not found" };
  return { title: yacht.name, description: yacht.description };
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl text-center">
      <p className="text-xl md:text-2xl font-bold text-secondary">{value}</p>
      <p className="text-sm font-medium text-muted uppercase">{label}</p>
    </div>
  );
}

export default async function YachtDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const yacht = await getYachtBySlug(slug);
  if (!yacht) notFound();

  const [primary, ...gallery] = yacht.images;

  return (
    <main className="container mx-auto px-2 md:px-4 py-8">
      <nav className="text-sm font-medium text-muted mb-6">
        <Link href="/yachts" className="hover:text-primary">
          Yachts
        </Link>{" "}
        / <span className="text-secondary">{yacht.name}</span>
      </nav>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <div className="relative w-full h-105 rounded-2xl overflow-hidden">
            <Image
              src={primary?.image_path ?? yacht.image_path}
              alt={primary?.alt ?? yacht.name}
              fill
              priority
              sizes="(min-width: 1280px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          {gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-3">
              {gallery.map((img) => (
                <div key={img.id} className="relative h-32 rounded-xl overflow-hidden">
                  <Image src={img.image_path} alt={img.alt} fill sizes="20vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="font-south-catalonia text-xl md:text-2xl text-primary">our fleet</p>
          <h1 className="font-display text-xl md:text-3xl text-secondary mt-2 leading-snug">
            {yacht.name}
          </h1>
          <p className="text-secondary text-base font-medium flex items-center gap-2 mt-3">
            <RiMapPin2Fill className="size-4.5 text-primary" />
            {yacht.destination.name}, {yacht.destination.country}
          </p>

          <p className="text-secondary mt-5 leading-relaxed">{yacht.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <Spec label="Guests" value={String(yacht.max_guests)} />
            <Spec label="Beds" value={String(yacht.beds)} />
            <Spec label="Crew" value={String(yacht.crew)} />
            <Spec label="Length" value={`${yacht.length_m} m`} />
          </div>

          <div className="flex items-baseline gap-2 mt-8">
            <span className="text-4xl font-extrabold text-primary">${yacht.price_per_day}</span>
            <span className="text-muted font-medium">/ day</span>
          </div>

          <div className="mt-6 p-6 border-2 border-gray-100 rounded-2xl shadow-sm">
            <h2 className="text-xl font-bold text-secondary mb-4">Request this yacht</h2>
            <BookingForm yachtSlug={yacht.slug} maxGuests={yacht.max_guests} />
          </div>
        </div>
      </div>
    </main>
  );
}
