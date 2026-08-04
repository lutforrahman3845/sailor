import type { CSSProperties } from "react";

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
    <div className="rounded-2xl overflow-hidden py-16 md:py-24 px-4 bg-linear-to-b from-secondary to-footer">
      <p className="anim-fade-up font-south-catalonia text-center text-xl md:text-2xl text-white">
        {eyebrow}
      </p>
      <h1
        className="anim-fade-up text-center text-3xl md:text-5xl text-white font-extrabold uppercase mt-2"
        style={{ "--anim-delay": "0.12s" } as CSSProperties}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="anim-fade-up text-center text-white/90 max-w-2xl mx-auto mt-4 text-sm md:text-base"
          style={{ "--anim-delay": "0.24s" } as CSSProperties}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
