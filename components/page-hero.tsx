import type { CSSProperties } from "react";

/** Text-only heading block at the top of inner pages. */
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
    <div className="pt-10 md:pt-14 pb-4 text-center">
      <p className="anim-fade-up font-south-catalonia text-xl md:text-2xl text-primary">
        {eyebrow}
      </p>
      <h1
        className="anim-fade-up font-display text-xl md:text-3xl text-secondary mt-2 max-w-3xl mx-auto leading-snug"
        style={{ "--anim-delay": "0.12s" } as CSSProperties}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className="anim-fade-up text-muted max-w-2xl mx-auto mt-4 text-sm md:text-base"
          style={{ "--anim-delay": "0.24s" } as CSSProperties}
        >
          {subtitle}
        </p>
      )}
      <span
        className="anim-fade-up block h-px w-24 mx-auto mt-6 bg-secondary/15"
        style={{ "--anim-delay": "0.36s" } as CSSProperties}
        aria-hidden
      />
    </div>
  );
}
