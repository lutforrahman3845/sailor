import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import YachtCard from "@/components/yacht-card";
import Hero from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import DestinationsSlider from "@/components/home/destinations-slider";
import ServicesSection from "@/components/home/services-section";
import SeasonalOffer from "@/components/home/seasonal-offer";
import BlogSection from "@/components/home/blog-section";
import TestimonialsSlider from "@/components/home/testimonials-slider";
import NewsletterSection from "@/components/home/newsletter-section";
import {
  getBlogPosts,
  getDestinations,
  getFeaturedYachts,
  getServices,
  getTestimonials,
} from "@/lib/db/queries";

export default async function HomePage() {
  const [featuredYachts, destinations, services, testimonials, posts] =
    await Promise.all([
      getFeaturedYachts(),
      getDestinations(),
      getServices(),
      getTestimonials(),
      getBlogPosts(),
    ]);

  const sliderDestinations = destinations.filter((d) =>
    ["levanto", "french-riviera", "greek-islands", "whitsunday-islands", "amalfi-coast"].includes(d.slug)
  );

  return (
    <main>
      <Hero />

      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <Reveal>
          <AboutSection />
        </Reveal>

        <section id="yachts" className="py-10">
          <Reveal>
            <SectionHeading eyebrow="our popular" title="Yacht Series" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-8 md:mt-14 gap-6">
            {featuredYachts.map((yacht, i) => (
              <Reveal key={yacht.id} delay={Math.min(i * 0.06, 0.3)}>
                <YachtCard yacht={yacht} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="destinations" className="py-10">
          <Reveal>
            <SectionHeading eyebrow="where to sail" title="Popular Destinations" className="mb-12" />
            <DestinationsSlider destinations={sliderDestinations} />
          </Reveal>
        </section>

        <Reveal>
          <ServicesSection services={services} />
        </Reveal>

        <Reveal>
          <SeasonalOffer />
        </Reveal>

        <Reveal>
          <BlogSection posts={posts} />
        </Reveal>

        <section className="py-10">
          <Reveal>
            <SectionHeading eyebrow="testimonial" title="The Voice of Experience" className="mb-12" />
            <TestimonialsSlider testimonials={testimonials} />
          </Reveal>
        </section>

        <Reveal>
          <NewsletterSection />
        </Reveal>
      </div>
    </main>
  );
}
