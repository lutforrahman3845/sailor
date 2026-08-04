import Image from "next/image";
import Link from "next/link";
import { RiSailboatLine } from "react-icons/ri";
import SectionHeading from "@/components/section-heading";
import VideoModal from "@/components/video-modal";

const AVATARS = ["/assets/avatar-1.webp", "/assets/avatar-2.webp", "/assets/avatar-3.webp"];

export default function AboutSection() {
  return (
    <section id="about" className="py-10">
      <SectionHeading eyebrow="about us" title="Sail excellence is our promise" />

      <div className="mt-10 flex flex-col xl:flex-row items-center gap-12 xl:gap-16">
        <div className="w-full xl:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pb-8">
            {/* taller image, anchored by the experience card */}
            <div className="relative hidden sm:block">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/about-1.webp"
                  alt="Yacht cruising"
                  fill
                  sizes="(min-width: 1280px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-3 right-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <RiSailboatLine className="size-7 shrink-0 text-primary" />
                <p className="text-sm font-semibold leading-tight text-secondary">
                  <span className="block text-xl font-extrabold leading-none text-primary">
                    10
                  </span>
                  Years of experience
                </p>
              </div>
            </div>

            {/* offset image carrying the video badge */}
            <div className="relative sm:mt-12">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
                <Image
                  src="/assets/about-2.webp"
                  alt="Guests on deck"
                  fill
                  sizes="(min-width: 1280px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-xl backdrop-blur-sm sm:size-28">
                <VideoModal />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2">
          <h3 className="font-display md:max-w-xl text-lg md:text-xl lg:text-2xl text-secondary mt-8 xl:mt-0 leading-snug">
            Book Your Dream Yacht Today!
          </h3>
          <p className="md:max-w-xl text-base md:text-lg font-normal text-secondary/90 mt-3 leading-relaxed">
            Today, we are the leading brand for luxury performance motor yachts.
            We offer the most diverse product portfolio in the world. Each with
            its own personality, our yachts are engineered with the owner in
            mind and standing at the helm.
          </p>
          <div className="flex items-end gap-3">
            <div className="flex -space-x-5 mt-6">
              {AVATARS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full border-2 border-white object-cover bg-gray-100"
                />
              ))}
            </div>
            <div>
              <p className="text-xl md:text-2xl text-secondary font-bold">10k+</p>
              <p className="text-base font-medium text-muted">Sailed Horizon</p>
            </div>
          </div>
          <Link
            href="/about"
            className="inline-block mt-8 px-7 py-3 border-2 border-primary rounded-xl text-base font-bold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
