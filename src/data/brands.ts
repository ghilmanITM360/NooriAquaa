export interface Brand {
  name: string;
  image: string;
  type: string;
  tier: "hero" | "supporting";
  glowColor: string;
  borderColor: string;
  description?: string;
  logoClass?: string;
}

export const brands: Brand[] = [
  {
    name: "MTJ",
    image: "/clients/mtj.png",
    type: "Luxury Fashion & Lifestyle",
    tier: "hero",
    glowColor: "#D4A84F",
    borderColor: "#D4A84F",
    description: "Premium branded bottles for flagship events and customer gifting.",
    logoClass: "max-h-[88px] w-auto object-contain",
  },
  {
    name: "Malka",
    image: "/clients/malka.png",
    type: "Restaurant & Hospitality",
    tier: "hero",
    glowColor: "#C62828",
    borderColor: "#C62828",
    description: "Custom branded bottles created for premium dining experiences.",
    logoClass: "max-h-[80px] w-auto object-contain scale-[0.95]",
  },
  {
    name: "Meezan Bank",
    image: "/clients/meezan.png",
    type: "Banking & Finance",
    tier: "supporting",
    glowColor: "#7C3AED",
    borderColor: "#7C3AED",
    logoClass: "max-h-[38px] w-auto object-contain scale-[0.9]",
  },
  {
    name: "Vital",
    image: "/clients/vital.png",
    type: "Beverage",
    tier: "supporting",
    glowColor: "#EF4444",
    borderColor: "#EF4444",
    logoClass: "max-h-[42px] w-auto object-contain",
  },
  {
    name: "Waheed",
    image: "/clients/waheed.png",
    type: "Restaurant",
    tier: "supporting",
    glowColor: "#DC2626",
    borderColor: "#B45309",
    logoClass: "max-h-[42px] w-auto object-contain",
  },
  {
    name: "AZ Traders",
    image: "/clients/az.png",
    type: "Trading",
    tier: "supporting",
    glowColor: "#3B82F6",
    borderColor: "#3B82F6",
    logoClass: "max-h-[46px] w-auto object-contain",
  },
  {
    name: "Vital Tea",
    image: "/clients/vitalTea.png",
    type: "Tea & Beverage",
    tier: "supporting",
    glowColor: "#16A34A",
    borderColor: "#16A34A",
    logoClass: "max-h-[42px] w-auto object-contain",
  },
  {
    name: "Vital Group",
    image: "/clients/vitalGroup.png",
    type: "Conglomerate",
    tier: "supporting",
    glowColor: "#0D9488",
    borderColor: "#0D9488",
    logoClass: "max-h-[46px] w-auto object-contain",
  },
];
