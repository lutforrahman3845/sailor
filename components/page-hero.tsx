import Image from "next/image";

/** Small banner used at the top of inner pages. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden py-16 md:py-24 px-4">
      <Image
        src="/assets/hero-banner.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-linear-to-b from-secondary/60 to-secondary/35 -z-10" />
      <p className="font-south-catalonia text-center text-xl md:text-2xl text-white">{eyebrow}</p>
      <h1 className="text-center text-3xl md:text-5xl text-white font-extrabold uppercase mt-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-center text-white/90 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
