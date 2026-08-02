import Image from "next/image";
import Link from "next/link";

/**
 * Brand lockup built around the sailboat mark in public/assets/logo.png
 * (also the source of the favicon). `tone="light"` renders the footer
 * variant on dark backgrounds — the mark is inverted to white via CSS.
 */
export default function Logo({
  tone = "color",
  className = "",
}: {
  tone?: "color" | "light";
  className?: string;
}) {
  const wordmark = tone === "light" ? "text-white" : "text-secondary";
  const caption = tone === "light" ? "text-white/60" : "text-muted";

  return (
    <Link
      href="/"
      aria-label="SAILOR — home"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/assets/logo.png"
        alt=""
        width={141}
        height={205}
        priority
        className={`h-9 md:h-10 w-auto ${tone === "light" ? "brightness-0 invert" : ""}`}
      />

      <span className="flex flex-col leading-none">
        <span className={`text-lg md:text-xl font-extrabold tracking-[0.28em] ${wordmark}`}>
          SAILOR
        </span>
        <span className={`mt-1 text-[9px] md:text-[10px] font-semibold tracking-[0.3em] uppercase ${caption}`}>
          Yacht Charter
        </span>
      </span>
    </Link>
  );
}
