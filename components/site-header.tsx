"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiAnchorLine, RiCloseLine, RiMenu4Line } from "react-icons/ri";
import Logo from "@/components/logo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/yachts", label: "Yachts" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-gray-100">
      <nav className="container mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">
        <Logo />

        <ul className="hidden lg:flex items-center lg:gap-6 xl:gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative py-2 text-sm xl:text-[15px] font-semibold uppercase tracking-wide transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-300 ${
                  isActive(link.href)
                    ? "text-primary after:w-full"
                    : "text-gray-500 hover:text-primary after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/yachts"
            className="hidden md:inline-flex items-center gap-2 px-5 xl:px-7 py-2.5 xl:py-3 rounded-xl bg-primary text-sm xl:text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <RiAnchorLine className="size-5" />
            Book Now
          </Link>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="lg:hidden grid size-11 place-items-center rounded-xl text-primary hover:bg-primary/10 transition-colors cursor-pointer"
          >
            <RiMenu4Line className="size-7" />
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-secondary/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-b-3xl px-5 pt-4 pb-8 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-xl text-secondary hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <RiCloseLine className="size-7" />
              </button>
            </div>

            <ul className="mt-6 divide-y divide-gray-100">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3.5 text-center text-base font-semibold uppercase tracking-wide ${
                      isActive(link.href) ? "text-primary" : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/yachts"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-bold"
            >
              <RiAnchorLine className="size-5" />
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
