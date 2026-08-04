import Image from "next/image";
import type { IconType } from "react-icons";
import {
  RiAnchorLine,
  RiCompass3Line,
  RiCustomerService2Line,
  RiHotelBedLine,
  RiPriceTag3Line,
  RiSailboatLine,
  RiUserStarLine,
} from "react-icons/ri";
import SectionHeading from "@/components/section-heading";
import type { ServiceRow } from "@/lib/db/schema";

const SERVICE_ICONS: Record<string, IconType> = {
  fleet: RiSailboatLine,
  cabin: RiHotelBedLine,
  pricing: RiPriceTag3Line,
  crew: RiUserStarLine,
  itinerary: RiCompass3Line,
  concierge: RiCustomerService2Line,
};

export function ServiceItem({ service }: { service: ServiceRow }) {
  const Icon = SERVICE_ICONS[service.icon_key] ?? RiAnchorLine;
  return (
    <div className="flex gap-5 items-start">
      <div className="shrink-0 grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-7" />
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-secondary">{service.title}</h3>
        <p className="text-sm md:text-base text-secondary/85 font-normal mt-1 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection({ services }: { services: ServiceRow[] }) {
  return (
    <section id="services" className="py-10">
      <SectionHeading eyebrow="sail with sailor" title="Why Sail with Us" className="mb-12" />
      <div className="flex flex-col xl:flex-row items-center gap-14 xl:gap-20 justify-center">
        <div className="w-full xl:w-1/3 2xl:w-1/4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8 lg:gap-10">
          {services.slice(0, 3).map((s) => (
            <ServiceItem key={s.id} service={s} />
          ))}
        </div>
        <div className="w-full xl:w-2/3 flex justify-center xl:justify-end">
          <Image
            src="/assets/yacht-illustration.webp"
            alt="Yacht illustration"
            width={1600}
            height={900}
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
