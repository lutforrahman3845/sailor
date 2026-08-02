import Image from "next/image";
import Link from "next/link";
import { RiSailboatLine } from "react-icons/ri";
import SectionHeading from "@/components/section-heading";
import VideoModal from "@/components/video-modal";

const AVATARS = ["/assets/avatar-1.webp", "/assets/avatar-2.webp", "/assets/avatar-3.webp"];

export default function AboutSection() {
  return (
    <section id="about" className="py-14">
      <SectionHeading eyebrow="about us" title="Sail excellence is our promise" />

      <div className="mt-10 flex flex-col xl:flex-row items-center gap-8">
        <div className="w-full xl:w-7/12 md:grid md:grid-cols-8 gap-12">
          <div className="col-span-4 hidden md:block">
            <div className="relative w-full h-122.5 rounded-2xl overflow-hidden">
              <Image
                src="/assets/about-1.webp"
                alt="Yacht cruising"
                fill
                sizes="(min-width: 1280px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
            <p className="text-lg md:text-xl font-bold text-secondary flex items-center gap-3 justify-end mt-6">
              <span className="text-2xl md:text-3xl lg:text-4xl text-primary">10</span>
              <RiSailboatLine className="size-9 text-primary" />
              Years Of Experience
            </p>
          </div>
          <div className="col-span-4 2xl:col-span-3 w-full h-96 md:h-131.5 md:mt-10 relative rounded-t-3xl rounded-bl-3xl overflow-hidden">
            <Image
              src="/assets/about-2.webp"
              alt="Guests on deck"
              fill
              sizes="(min-width: 1280px) 30vw, 50vw"
              className="object-cover"
            />
            <div className="absolute w-28 h-28 -bottom-2 -right-2 bg-white rounded-tl-[50%] circle-cutout p-4">
              <VideoModal />
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[35%]">
          <h3 className="md:max-w-xl text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary font-bold mt-8 xl:mt-0">
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
