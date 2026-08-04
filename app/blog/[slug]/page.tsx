import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RiArrowLeftLine, RiTimeLine } from "react-icons/ri";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/db/queries";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="max-w-7xl mx-auto px-2 md:px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <nav className="text-sm font-medium text-muted mb-6">
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>{" "}
          / <span className="text-secondary">{post.title}</span>
        </nav>

        <h1 className="font-display text-xl md:text-2xl text-secondary leading-snug">{post.title}</h1>
        <p className="text-sm font-medium text-muted flex items-center gap-2 mt-4">
          <RiTimeLine className="size-4" />
          {formatDate(post.published_at)} · {post.author}
        </p>

        <div className="relative w-full h-72 md:h-105 rounded-2xl overflow-hidden mt-8">
          <Image
            src={post.cover_image_path}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-8 space-y-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-secondary leading-relaxed text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mt-10 px-7 py-3 border-2 border-primary rounded-xl text-primary font-bold hover:bg-primary hover:text-white transition-colors"
        >
          <RiArrowLeftLine className="size-4.5" />
          All articles
        </Link>
      </article>
    </main>
  );
}
