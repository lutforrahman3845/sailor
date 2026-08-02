/**
 * Row types mirroring the future SQL schema.
 * Conventions: `id` primary keys, `*_id` foreign keys, snake_case columns,
 * ISO strings for dates. Relations are by id only — joins happen in queries.ts.
 */

export interface DestinationRow {
  id: number;
  slug: string;
  name: string;
  country: string;
  image_path: string;
  blurb: string;
}

export interface YachtRow {
  id: number;
  slug: string;
  name: string;
  destination_id: number; // -> destinations.id
  price_per_day: number; // USD
  max_guests: number;
  beds: number;
  crew: number;
  length_m: number;
  description: string;
  image_path: string; // primary card image
  is_featured: boolean;
}

export interface YachtImageRow {
  id: number;
  yacht_id: number; // -> yachts.id
  image_path: string;
  alt: string;
  sort_order: number;
}

export interface ServiceRow {
  id: number;
  slug: string;
  title: string;
  description: string;
  /** stable key mapped to an icon component in the UI layer */
  icon_key: string;
}

export interface TestimonialRow {
  id: number;
  author_name: string;
  avatar_path: string;
  rating: number; // 0–5
  quote: string;
  published_at: string; // ISO date
}

export interface BlogPostRow {
  id: number;
  slug: string;
  title: string;
  author: string;
  cover_image_path: string;
  excerpt: string;
  body: string[]; // paragraphs; becomes TEXT in SQL
  published_at: string; // ISO date
}

export interface BookingRow {
  id: number;
  yacht_id: number; // -> yachts.id
  customer_name: string;
  email: string;
  check_in: string; // ISO date
  check_out: string; // ISO date
  guests: number;
  status: "pending" | "confirmed" | "cancelled";
  created_at: string; // ISO datetime
}

export interface ContactMessageRow {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string; // ISO datetime
}
