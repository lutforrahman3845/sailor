import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiTimeLine } from "react-icons/ri";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { getBlogPosts } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on yachts, destinations and the charter lifestyle.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="w-full max-w-[96rem] mx-auto px-2 md:px-4">
      <PageHero
        eyebrow="blogs and articles"
        title="Articles on Yacht"
        subtitle="Guides, fleet news and stories from the water."
      />

      <section className="py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={Math.min(i * 0.06, 0.3)}>
          <Link
            href={`/blog/${post.slug}`}
            className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 overflow-hidden flex flex-col group h-full"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={post.cover_image_path}
                alt={post.title}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs font-medium text-muted flex items-center gap-2">
                <RiTimeLine className="size-4" />
                {formatDate(post.published_at)} · {post.author}
              </p>
              <h2 className="text-xl font-semibold text-secondary mt-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-secondary mt-2 flex-1">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-4">
                Read article
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
