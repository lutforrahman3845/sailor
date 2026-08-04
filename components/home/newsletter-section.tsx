import Image from "next/image";
import { RiMailLine, RiSendPlaneFill } from "react-icons/ri";

export default function NewsletterSection() {
  return (
    <section className="py-10">
      <div className="relative w-full rounded-2xl overflow-hidden">
        <Image
          src="/assets/newsletter-pattern.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-secondary/60 via-transparent to-transparent lg:bg-linear-to-l" />
        <div className="py-16 md:py-20 flex items-center">
          <div className="hidden lg:block lg:w-1/2 xl:w-3/5" />
          <div className="lg:w-1/2 xl:w-2/5 mx-6 md:mx-10 w-full">
            <p className="text-xl md:text-2xl text-white font-south-catalonia font-medium mb-2">
              Offer updates
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-semibold max-w-sm mb-2">
              Newsletter Subscription
            </h2>
            <p className="text-sm md:text-base font-normal text-white/90 max-w-md mb-10">
              Be the first to know about upcoming trends and get insider tips on
              yachting lifestyle to the fullest.
            </p>
            <form className="flex items-center gap-2 bg-white rounded-xl pl-4 pr-2 py-2 w-full max-w-md shadow-sm">
              <RiMailLine className="size-5.5 shrink-0 text-primary" />
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                className="min-w-0 grow py-2 bg-transparent text-secondary placeholder:text-muted outline-none"
                placeholder="Your email address…"
              />
              <button
                type="submit"
                className="shrink-0 py-2.5 px-4 sm:px-5 bg-primary rounded-lg text-white text-sm font-semibold flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-90"
              >
                <span className="hidden xs:block">Send</span>
                <RiSendPlaneFill className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
