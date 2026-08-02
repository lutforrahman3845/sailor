import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiTwitterXFill,
} from "react-icons/ri";
import Logo from "@/components/logo";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-semibold uppercase tracking-wider">{children}</h3>
      <div className="flex gap-1 mb-2 mt-2">
        <div className="w-4 h-1 bg-primary rounded-md" />
        <div className="w-12 h-1 bg-white/80 rounded-md" />
      </div>
    </div>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: RiInstagramLine },
  { label: "Facebook", href: "#", Icon: RiFacebookFill },
  { label: "X", href: "#", Icon: RiTwitterXFill },
];

export default function SiteFooter() {
  return (
    <footer className="bg-footer text-white">
      <div className="px-8 md:px-10 lg:px-16 2xl:px-36 pt-16 md:pt-20 pb-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-12 justify-between">
          <aside className="max-w-xs">
            <Logo tone="light" />
            <p className="mt-4 mb-8 text-white/80 leading-relaxed">
              Welcome to our premier yacht charter service, where luxury meets
              adventure on the open seas.
            </p>
            <div>
              <h3 className="text-base font-semibold">Follow Us:</h3>
              <div className="flex gap-2.5 mt-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid size-11 place-items-center bg-footer-dark rounded-full transition-colors hover:bg-primary"
                  >
                    <Icon className="size-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <nav className="flex flex-col gap-3" aria-label="Contact">
            <ColumnHeading>Contact</ColumnHeading>
            <p className="flex items-start gap-2.5 text-white/85">
              <RiMapPin2Line className="size-5 shrink-0 mt-0.5 text-primary" />
              <span>
                3915 NW 25th St,
                <br /> Miami, Florida, USA
              </span>
            </p>
            <a
              className="flex items-center gap-2.5 text-white/85 hover:text-primary transition-colors"
              href="mailto:contact@sailor.com"
            >
              <RiMailLine className="size-5 shrink-0 text-primary" />
              contact@sailor.com
            </a>
            <a
              className="flex items-center gap-2.5 text-white/85 hover:text-primary transition-colors"
              href="tel:305-905-8099"
            >
              <RiPhoneLine className="size-5 shrink-0 text-primary" />
              305-905-8099
            </a>
          </nav>

          <nav className="flex flex-col gap-3" aria-label="Destinations">
            <Link href="/destinations">
              <ColumnHeading>Destinations</ColumnHeading>
            </Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/destinations">Italy</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/destinations">Australia</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/destinations">France</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/destinations">Greece</Link>
          </nav>

          <nav className="flex flex-col gap-3" aria-label="About us">
            <Link href="/about">
              <ColumnHeading>About Us</ColumnHeading>
            </Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/blog">Our blogs</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/contact">Join us</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/services">Services</Link>
          </nav>

          <nav className="flex flex-col gap-3" aria-label="More">
            <ColumnHeading>More</ColumnHeading>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/yachts">Sail fees</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/yachts">Booking</Link>
            <Link className="text-white/85 hover:text-primary transition-colors" href="/contact">Low fare tips</Link>
          </nav>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} SAILOR Yacht Charter. All rights reserved.</p>
          <p>Luxury on the open seas.</p>
        </div>
      </div>
    </footer>
  );
}
