/**
 * The only data-access seam. Components never import table arrays directly —
 * everything goes through these async functions so a real database or API can
 * replace the mock tables without touching the UI.
 */
import type {
  BlogPostRow,
  BookingRow,
  ContactMessageRow,
  DestinationRow,
  ServiceRow,
  TestimonialRow,
  YachtImageRow,
  YachtRow,
} from "./schema";
import { blogPosts } from "./blog-posts";
import { bookings } from "./bookings";
import { contactMessages } from "./contact-messages";
import { destinations } from "./destinations";
import { services } from "./services";
import { testimonials } from "./testimonials";
import { yachtImages } from "./yacht-images";
import { yachts } from "./yachts";

export type YachtWithDestination = YachtRow & { destination: DestinationRow };
export type YachtDetail = YachtWithDestination & { images: YachtImageRow[] };

function joinDestination(yacht: YachtRow): YachtWithDestination {
  const destination = destinations.find((d) => d.id === yacht.destination_id);
  if (!destination) {
    throw new Error(`yachts.destination_id ${yacht.destination_id} has no destinations row`);
  }
  return { ...yacht, destination };
}

// --- yachts ---

export async function getYachts(filter?: {
  destination_slug?: string;
}): Promise<YachtWithDestination[]> {
  let rows = yachts.map(joinDestination);
  if (filter?.destination_slug) {
    rows = rows.filter((y) => y.destination.slug === filter.destination_slug);
  }
  return rows;
}

export async function getFeaturedYachts(): Promise<YachtWithDestination[]> {
  return yachts.filter((y) => y.is_featured).map(joinDestination);
}

export async function getYachtBySlug(slug: string): Promise<YachtDetail | null> {
  const yacht = yachts.find((y) => y.slug === slug);
  if (!yacht) return null;
  const images = yachtImages
    .filter((i) => i.yacht_id === yacht.id)
    .sort((a, b) => a.sort_order - b.sort_order);
  return { ...joinDestination(yacht), images };
}

// --- destinations ---

export async function getDestinations(): Promise<DestinationRow[]> {
  return [...destinations];
}

export async function getDestinationBySlug(
  slug: string
): Promise<DestinationRow | null> {
  return destinations.find((d) => d.slug === slug) ?? null;
}

// --- services ---

export async function getServices(): Promise<ServiceRow[]> {
  return [...services];
}

// --- testimonials ---

export async function getTestimonials(): Promise<TestimonialRow[]> {
  return [...testimonials];
}

// --- blog ---

export async function getBlogPosts(): Promise<BlogPostRow[]> {
  return [...blogPosts].sort((a, b) =>
    b.published_at.localeCompare(a.published_at)
  );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostRow | null> {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

// --- mutations ---

export async function createBooking(
  data: Omit<BookingRow, "id" | "status" | "created_at">
): Promise<BookingRow> {
  const row: BookingRow = {
    ...data,
    id: bookings.length + 1,
    status: "pending",
    created_at: new Date().toISOString(),
  };
  bookings.push(row);
  return row;
}

export async function createContactMessage(
  data: Omit<ContactMessageRow, "id" | "created_at">
): Promise<ContactMessageRow> {
  const row: ContactMessageRow = {
    ...data,
    id: contactMessages.length + 1,
    created_at: new Date().toISOString(),
  };
  contactMessages.push(row);
  return row;
}
