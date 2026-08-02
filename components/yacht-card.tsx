import Image from "next/image";
import Link from "next/link";
import { RiGroupLine, RiHotelBedLine, RiMapPin2Fill } from "react-icons/ri";
import type { YachtWithDestination } from "@/lib/db/queries";

export default function YachtCard({ yacht }: { yacht: YachtWithDestination }) {
  return (
    <Link
      href={`/yachts/${yacht.slug}`}
      className="group block p-3 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative w-full aspect-4/5 rounded-t-2xl rounded-bl-2xl overflow-hidden">
        <Image
          src={yacht.image_path}
          alt={yacht.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* signature corner-cutout price badge */}
        <div className="absolute w-28 h-28 -bottom-2 -right-2 bg-white rounded-3xl circle-cutout p-4">
          <div className="absolute inset-3 bg-primary rounded-3xl">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-xs text-white/85 font-medium">Per Day</p>
              <p className="text-base text-white font-bold">${yacht.price_per_day}</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl md:text-2xl text-secondary font-bold mt-3 group-hover:text-primary transition-colors">
        {yacht.name}
      </h3>
      <p className="text-muted text-sm font-medium flex items-center gap-1.5 mt-1 mb-4">
        <RiMapPin2Fill className="size-4 text-primary shrink-0" />
        {yacht.destination.name}
      </p>
      <div className="flex gap-5 items-center pb-1">
        <p className="text-secondary text-sm font-semibold flex items-center gap-1.5">
          <RiGroupLine className="size-4.5 text-primary" />
          {yacht.max_guests} Guests
        </p>
        <p className="text-secondary text-sm font-semibold flex items-center gap-1.5">
          <RiHotelBedLine className="size-4.5 text-primary" />
          {yacht.beds} Beds
        </p>
      </div>
    </Link>
  );
}
