export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  accent: string;
  /** Number of grid columns this card occupies on desktop */
  colSpan: 1 | 2;
}

/**
 * Layout (4-column desktop grid, 3 rows):
 *   Row 1: [conferences ×2] [hotels ×1]  [weddings ×1]
 *   Row 2: [offices ×1]    [restaurants ×2] [mun ×1]
 *   Row 3: [school ×2]     [sports ×2]
 */
export const galleryItems: GalleryItem[] = [
  // ── Row 1 ──────────────────────────────────────────────────────────────────
  {
    id: "conferences",
    title: "Corporate Conferences",
    category: "Premium Events",
    description:
      "High-profile summits and corporate gatherings branded bottle-to-bottle.",
    image: "/industries/conferences.png",
    accent: "#6366F1",
    colSpan: 2,
  },
  {
    id: "hotels",
    title: "Luxury Hotels",
    category: "Hospitality",
    description:
      "Custom-labeled water that elevates every guest room and fine-dining table.",
    image: "/industries/hotels.png",
    accent: "#29C7F6",
    colSpan: 1,
  },
  {
    id: "weddings",
    title: "Premium Weddings",
    category: "Celebrations",
    description:
      "Elegant keepsake bottles that make every guest feel the love.",
    image: "/industries/weddings.png",
    accent: "#EC4899",
    colSpan: 1,
  },
  // ── Row 2 ──────────────────────────────────────────────────────────────────
  {
    id: "offices",
    title: "Corporate Offices",
    category: "Workplace",
    description: "Daily branded hydration that keeps teams proud of their space.",
    image: "/industries/offices.png",
    accent: "#10B981",
    colSpan: 1,
  },
  {
    id: "restaurants",
    title: "Fine Dining",
    category: "F&B Industry",
    description:
      "Elevate table presentation — guests notice the premium touch.",
    image: "/industries/restaurants.png",
    accent: "#F59E0B",
    colSpan: 2,
  },
  {
    id: "mun",
    title: "MUN Tournaments",
    category: "Academic Events",
    description:
      "Professional branding on every delegate desk at Karachi MUN 2024.",
    image: "/industries/mun.png",
    accent: "#8B5CF6",
    colSpan: 1,
  },
  // ── Row 3 ──────────────────────────────────────────────────────────────────
  {
    id: "school",
    title: "Schools & Universities",
    category: "Education",
    description: "Campus-branded bottles that build school pride every day.",
    image: "/industries/school.png",
    accent: "#06B6D4",
    colSpan: 2,
  },
  {
    id: "sports",
    title: "Sports Events",
    category: "Athletics",
    description:
      "Keep athletes hydrated with your brand front and center on every bottle.",
    image: "/industries/sports.png",
    accent: "#EF4444",
    colSpan: 2,
  },
];
