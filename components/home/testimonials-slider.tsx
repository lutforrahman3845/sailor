"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RiDoubleQuotesL, RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import type { TestimonialRow } from "@/lib/db/schema";
import {
  ArrowButton,
  CarouselDots,
  useCarouselDots,
  usePrevNext,
} from "@/components/carousel-nav";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-400" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        if (rating >= i - 0.25) return <RiStarFill key={i} className="size-4" />;
        if (rating >= i - 0.75) return <RiStarHalfFill key={i} className="size-4" />;
        return <RiStarLine key={i} className="size-4" />;
      })}
    </span>
  );
}

export default function TestimonialsSlider({
  testimonials,
}: {
  testimonials: TestimonialRow[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true }),
  ]);
  const { scrollPrev, scrollNext } = usePrevNext(emblaApi);
  const { selectedIndex, count, scrollTo } = useCarouselDots(emblaApi);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container -ml-6 py-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="embla__slide pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] xl:flex-[0_0_33.33%] 2xl:flex-[0_0_25%]"
            >
              <figure className="flex h-full flex-col rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar_path}
                    alt=""
                    width={56}
                    height={56}
                    className="size-14 rounded-2xl object-cover bg-gray-100"
                  />
                  <div className="min-w-0">
                    <figcaption className="font-bold text-secondary truncate">
                      {t.author_name}
                    </figcaption>
                    <p className="text-xs font-medium text-muted mt-0.5">
                      {formatDate(t.published_at)}
                    </p>
                  </div>
                  <RiDoubleQuotesL className="ml-auto size-8 shrink-0 text-primary/20" />
                </div>

                <blockquote className="mt-4 flex-1 text-sm md:text-base leading-relaxed text-secondary/90">
                  {t.quote}
                </blockquote>

                <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4">
                  <Stars rating={t.rating} />
                  <span className="text-sm font-bold text-secondary">{t.rating.toFixed(1)}</span>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <ArrowButton direction="prev" label="Previous testimonial" onClick={scrollPrev} />
        <CarouselDots count={count} selectedIndex={selectedIndex} onSelect={scrollTo} />
        <ArrowButton direction="next" label="Next testimonial" onClick={scrollNext} />
      </div>
    </div>
  );
}
