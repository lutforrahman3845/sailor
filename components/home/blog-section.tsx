import Image from "next/image";
import Link from "next/link";
import { RiTimeLine } from "react-icons/ri";
import SectionHeading from "@/components/section-heading";
import type { BlogPostRow } from "@/lib/db/schema";

function formatMonth(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function BlogTile({ post, large = false }: { post: BlogPostRow; large?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="relative block h-full group overflow-hidden rounded-xl"
    >
      <Image
        src={post.cover_image_path}
        alt={post.title}
        width={800}
        height={large ? 900 : 440}
        className="w-full h-full min-h-44 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-secondary/90 via-secondary/40 to-transparent" />
      <div className="absolute inset-x-3 bottom-5 md:bottom-7 text-center text-white flex items-center flex-col justify-center">
        <p className={`${large ? "text-[10px] md:text-sm" : "text-[10px]"} font-medium flex items-center gap-1.5 text-white/85`}>
          <RiTimeLine className={large ? "size-4 md:size-5" : "size-3.5"} />
          {formatMonth(post.published_at)} · {post.author}
        </p>
        <h3
          className={`mt-1 group-hover:underline decoration-primary decoration-2 underline-offset-4 ${
            large
              ? "text-base md:text-lg lg:text-2xl xl:text-3xl font-bold"
              : "text-sm xl:text-lg font-bold"
          }`}
        >
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

export default function BlogSection({ posts }: { posts: BlogPostRow[] }) {
  const [first, second, third, fourth] = posts;
  if (!first || !second || !third || !fourth) return null;
  return (
    <section id="blogs" className="py-14">
      <SectionHeading eyebrow="blogs and articles" title="Articles on Yacht" className="mb-12" />
      <div className="grid xs:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-3 xl:gap-5">
        <div className="md:col-span-2 md:row-span-3">
          <BlogTile post={first} large />
        </div>
        <div className="md:col-span-2 md:row-span-2">
          <BlogTile post={second} large />
        </div>
        <div className="md:row-span-1">
          <BlogTile post={third} />
        </div>
        <div className="md:row-span-1">
          <BlogTile post={fourth} />
        </div>
      </div>
    </section>
  );
}
