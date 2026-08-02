"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { RiMapPin2Fill } from "react-icons/ri";
import type { DestinationRow } from "@/lib/db/schema";
import {
  ArrowButton,
  CarouselDots,
  useCarouselDots,
  usePrevNext,
} from "@/components/carousel-nav";

export default function DestinationsSlider({
  destinations,
}: {
  destinations: DestinationRow[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const { scrollPrev, scrollNext } = usePrevNext(emblaApi);
  const { selectedIndex, count, scrollTo } = useCarouselDots(emblaApi);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container -ml-4 md:-ml-6">
          {destinations.map((d, i) => {
            const active = i === selectedIndex;
            return (
              <div
                key={d.id}
                className="embla__slide pl-4 md:pl-6 flex-[0_0_82%] xs:flex-[0_0_74%] sm:flex-[0_0_55%] lg:flex-[0_0_40%] xl:flex-[0_0_33%]"
              >
                <div
                  className={`relative aspect-3/4 max-h-140 w-full overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                    active ? "scale-100 shadow-lg" : "scale-[0.88] opacity-60"
                  }`}
                >
                  <Image
                    src={d.image_path}
                    alt={d.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 55vw, 82vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-secondary/85 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 flex flex-col items-center text-center text-white">
                    <p className="flex items-center gap-2 text-base md:text-xl font-bold drop-shadow">
                      <RiMapPin2Fill className="size-4 md:size-5 shrink-0" />
                      {d.name}
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-white/80 line-clamp-2 max-w-xs">
                      {d.blurb}
                    </p>
                    <Link
                      href="/destinations"
                      tabIndex={active ? 0 : -1}
                      className={`mt-4 px-6 py-2.5 md:px-9 md:py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/40 text-sm md:text-base font-semibold transition hover:bg-primary hover:border-primary ${
                        active ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ArrowButton
        direction="prev"
        label="Previous destination"
        onClick={scrollPrev}
        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-10"
      />
      <ArrowButton
        direction="next"
        label="Next destination"
        onClick={scrollNext}
        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-10"
      />

      <CarouselDots
        count={count}
        selectedIndex={selectedIndex}
        onSelect={scrollTo}
        className="mt-8"
      />
    </div>
  );
}
