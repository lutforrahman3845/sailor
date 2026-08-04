import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { RiAnchorLine, RiGroupLine, RiHotelBedLine, RiUserStarLine } from "react-icons/ri";

function Stat({ Icon, value, label }: { Icon: IconType; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="grid size-13 place-items-center bg-white/25 backdrop-blur-md rounded-xl text-white">
        <Icon className="size-6.5" />
      </div>
      <p className="mt-2 text-xl md:text-2xl font-bold text-white">{value}</p>
      <p className="text-sm md:text-base font-medium text-white/85 uppercase tracking-wide">{label}</p>
    </div>
  );
}

export default function SeasonalOffer() {
  return (
    <section id="seasonal-offer" className="py-10">
      <div className="relative w-full rounded-2xl overflow-hidden">
        <Image
          src="/assets/offer-pattern.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-secondary/60 via-transparent to-transparent lg:bg-linear-to-l" />
        <div className="py-16 md:py-20 flex items-center">
          <div className="hidden lg:block lg:w-1/2 xl:w-3/5" />
          <div className="lg:w-1/2 xl:w-2/5 mx-6 md:mx-10">
            <p className="text-xl md:text-2xl text-white font-south-catalonia font-medium mb-2">
              Seasonal Offer
            </p>
            <h2 className="font-display text-xl md:text-2xl text-white max-w-sm mb-8 leading-snug">
              15% off for booking this summer.
            </h2>
            <div className="flex items-center gap-8 xl:gap-12 mb-10">
              <Stat Icon={RiGroupLine} value="40" label="Guests" />
              <Stat Icon={RiHotelBedLine} value="25" label="Beds" />
              <Stat Icon={RiUserStarLine} value="5" label="Crew" />
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full sm:w-fit">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 py-4 px-9 bg-primary rounded-xl font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <RiAnchorLine className="size-5" />
                Get In Touch
              </Link>
              <Link
                href="/yachts"
                className="inline-flex items-center justify-center py-4 px-9 border-2 border-white rounded-xl font-bold text-white text-center transition-colors hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
