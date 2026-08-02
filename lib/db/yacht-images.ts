import type { YachtImageRow } from "./schema";

export const yachtImages: YachtImageRow[] = [
  { id: 1, yacht_id: 1, image_path: "/assets/yacht-serenity-seeker.webp", alt: "Serenity Seeker at anchor", sort_order: 1 },
  { id: 2, yacht_id: 1, image_path: "/assets/about-1.webp", alt: "Serenity Seeker underway", sort_order: 2 },
  { id: 3, yacht_id: 1, image_path: "/assets/hero-banner.webp", alt: "Serenity Seeker in the Caribbean", sort_order: 3 },

  { id: 4, yacht_id: 2, image_path: "/assets/yacht-ocean-whisperer.webp", alt: "Ocean Whisperer at sea", sort_order: 1 },
  { id: 5, yacht_id: 2, image_path: "/assets/destination-amalfi.webp", alt: "Ocean Whisperer off the Amalfi Coast", sort_order: 2 },

  { id: 6, yacht_id: 3, image_path: "/assets/yacht-majestic-pearl.webp", alt: "Majestic Pearl profile", sort_order: 1 },
  { id: 7, yacht_id: 3, image_path: "/assets/destination-french-riviera.webp", alt: "Majestic Pearl on the Riviera", sort_order: 2 },
  { id: 8, yacht_id: 3, image_path: "/assets/about-2.webp", alt: "Majestic Pearl aft deck", sort_order: 3 },

  { id: 9, yacht_id: 4, image_path: "/assets/yacht-celestial-voyager.webp", alt: "Celestial Voyager cruising", sort_order: 1 },
  { id: 10, yacht_id: 4, image_path: "/assets/destination-whitsunday.webp", alt: "Celestial Voyager in the Whitsundays", sort_order: 2 },

  { id: 11, yacht_id: 5, image_path: "/assets/yacht-carpe-diem.webp", alt: "Carpe Diem under sail", sort_order: 1 },
  { id: 12, yacht_id: 5, image_path: "/assets/destination-greek-islands.webp", alt: "Carpe Diem in the Greek Islands", sort_order: 2 },
];
