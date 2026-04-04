export interface Brand {
  name: string;
  type: string;
  initial: string;
  color: string;
}

export const brands: Brand[] = [
  { name: "The Grand Café", type: "Restaurant", initial: "TG", color: "#F59E0B" },
  { name: "Pearl Continental", type: "Hotel", initial: "PC", color: "#29C7F6" },
  { name: "Korangi Industrial", type: "Corporate", initial: "KI", color: "#64748B" },
  { name: "Meher Events", type: "Wedding Planner", initial: "ME", color: "#EC4899" },
  { name: "TechSummit KHI", type: "Conference", initial: "TS", color: "#8B5CF6" },
  { name: "Karachi MUN", type: "MUN / Education", initial: "KM", color: "#10B981" },
  { name: "Alif Foundation", type: "NGO", initial: "AF", color: "#F97316" },
  { name: "Emaar Events", type: "Corporate Events", initial: "EE", color: "#06B6D4" },
];
