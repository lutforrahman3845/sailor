"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

/** Subscribe to an Embla-derived primitive via useSyncExternalStore. */
function useEmblaValue<T extends number | boolean>(
  emblaApi: EmblaCarouselType | undefined,
  read: (api: EmblaCarouselType) => T,
  fallback: T
): T {
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", onChange).on("reInit", onChange);
      return () => {
        emblaApi.off("select", onChange).off("reInit", onChange);
      };
    },
    [emblaApi]
  );
  return useSyncExternalStore(
    subscribe,
    () => (emblaApi ? read(emblaApi) : fallback),
    () => fallback
  );
}

export function usePrevNext(emblaApi: EmblaCarouselType | undefined) {
  const canPrev = useEmblaValue(emblaApi, (api) => api.canScrollPrev(), false);
  const canNext = useEmblaValue(emblaApi, (api) => api.canScrollNext(), false);
  return {
    canPrev,
    canNext,
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
  };
}

export function useCarouselDots(emblaApi: EmblaCarouselType | undefined) {
  const selectedIndex = useEmblaValue(emblaApi, (api) => api.selectedScrollSnap(), 0);
  const count = useEmblaValue(emblaApi, (api) => api.scrollSnapList().length, 0);
  return {
    selectedIndex,
    count,
    scrollTo: (i: number) => emblaApi?.scrollTo(i),
  };
}

export function ArrowButton({
  direction,
  onClick,
  disabled = false,
  label,
  className = "",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  label: string;
  className?: string;
}) {
  const Icon = direction === "prev" ? RiArrowLeftSLine : RiArrowRightSLine;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`grid size-10 md:size-12 place-items-center rounded-full bg-white text-secondary shadow-sm ring-1 ring-black/5 transition hover:bg-primary hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-secondary cursor-pointer ${className}`}
    >
      <Icon className="size-5 md:size-6" />
    </button>
  );
}

export function CarouselDots({
  count,
  selectedIndex,
  onSelect,
  className = "",
}: {
  count: number;
  selectedIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  if (count <= 1) return null;
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === selectedIndex}
          onClick={() => onSelect(i)}
          className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            i === selectedIndex ? "w-7 bg-primary" : "w-2.5 bg-primary/25 hover:bg-primary/50"
          }`}
        />
      ))}
    </div>
  );
}
