export interface Industry {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: string;
  image: string;
  bottleLabel: string;
  featured?: boolean;
}

export const industries: Industry[] = [
  {
    title: "Restaurants & Cafés",
    subtitle: "Table-top branding",
    description:
      "Every bottle on your dining table carries your logo. Premium branded water that elevates the guest experience.",
    tags: ["Logo Integration", "Bulk Orders", "Table Service"],
    accent: "#F59E0B",
    image: "/industries/restaurants.png",
    bottleLabel: "Restaurant",
    featured: true,
  },
  {
    title: "Weddings & Ceremonies",
    subtitle: "Bridal & event branding",
    description:
      "Personalized bottles for every guest table. Elegant labels with couple names, event dates, and custom design.",
    tags: ["Guest Names", "Event Date", "Premium Label"],
    accent: "#EC4899",
    image: "/industries/weddings.png",
    bottleLabel: "Wedding",
  },
  {
    title: "Corporate Events",
    subtitle: "Brand every moment",
    description:
      "Custom branded bottles for annual dinners, product launches, team events, and company gatherings.",
    tags: ["Company Logo", "Bulk Supply", "Event Branding"],
    accent: "#64748B",
    image: "/industries/offices.png",
    bottleLabel: "Corporate",
  },
  {
    title: "Conferences & Expos",
    subtitle: "Maximum brand visibility",
    description:
      "Hundreds of branded bottles at your conference — every speaker desk, every delegate seat.",
    tags: ["Speaker Desks", "Delegate Packs", "Large Volume"],
    accent: "#8B5CF6",
    image: "/industries/conferences.png",
    bottleLabel: "Conference",
  },
  {
    title: "Hotels & Resorts",
    subtitle: "Guest experience luxury",
    description:
      "Premium guest room bottles and banquet hall supply, branded to match your hotel's identity.",
    tags: ["Guest Rooms", "Banquet Halls", "Auto-Supply"],
    accent: "#29C7F6",
    image: "/industries/hotels.png",
    bottleLabel: "Hotel",
  },
  {
    title: "MUN & Schools",
    subtitle: "Educational event branding",
    description:
      "Every delegate, chair, and session supplied with branded bottles — build tournament identity.",
    tags: ["Delegate Desks", "Tournament Branding", "Student Events"],
    accent: "#10B981",
    image: "/industries/mun.png",
    bottleLabel: "MUN",
  },
];
