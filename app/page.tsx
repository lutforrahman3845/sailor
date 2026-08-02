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

      <div className="mx-5 md:mx-10 lg:mx-14">
        <AboutSection />

        <section id="yachts" className="py-14">
          <SectionHeading eyebrow="our popular" title="Yacht Series" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-8 md:mt-14 gap-10">
            {featuredYachts.map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} />
            ))}
          </div>
        </section>

        <section id="destinations" className="py-14">
          <SectionHeading eyebrow="where to sail" title="Popular Destinations" className="mb-12" />
          <DestinationsSlider destinations={sliderDestinations} />
        </section>

        <ServicesSection services={services} />

        <SeasonalOffer />

        <BlogSection posts={posts} />

        <section className="py-14">
          <SectionHeading eyebrow="testimonial" title="The Voice of Experience" className="mb-12" />
          <TestimonialsSlider testimonials={testimonials} />
        </section>

        <NewsletterSection />
      </div>
    </main>
  );
}
