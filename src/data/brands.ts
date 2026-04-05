export interface Brand {
  name: string;
  image: string;
  type: string;
  tier: "hero" | "supporting";
  glowColor: string;
  borderColor: string;
  description?: string;
  descriptor?: string;
  tags?: string;
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
    descriptor:
      "Premium branded bottles created for flagship MTJ events, customer gifting, and premium hospitality experiences.",
    tags: "Fashion Brand • Premium Events • Karachi",
    logoClass: "max-h-[120px] lg:max-h-[135px] w-auto object-contain",
  },
  {
    name: "Malka",
    image: "/clients/malka.png",
    type: "Restaurant & Hospitality",
    tier: "hero",
    glowColor: "#C62828",
    borderColor: "#C62828",
    description: "Custom branded bottles created for premium dining experiences.",
    descriptor:
      "Custom branded bottles supplied for Malka's premium dining experience and hospitality service.",
    tags: "Food Brand • Restaurant Chain • Vital Group",
    logoClass: "max-h-[92px] lg:max-h-[105px] w-auto object-contain",
  },
  {
    name: "Meezan Bank",
    image: "/clients/meezan.png",
    type: "Islamic Banking",
    tier: "supporting",
    glowColor: "#7C3AED",
    borderColor: "#7C3AED",
    logoClass: "max-h-[58px] w-auto object-contain",
  },
  {
    name: "Vital",
    image: "/clients/vital.png",
    type: "Personal Care • FMCG",
    tier: "supporting",
    glowColor: "#EF4444",
    borderColor: "#EF4444",
    logoClass: "max-h-[60px] w-auto object-contain",
  },
  {
    name: "Waheed",
    image: "/clients/waheed.png",
    type: "Street Food Icon",
    tier: "supporting",
    glowColor: "#DC2626",
    borderColor: "#B45309",
    logoClass: "max-h-[54px] w-auto object-contain",
  },
  {
    name: "AY Traders",
    image: "/clients/az.png",
    type: "Natural Salt & Lamps",
    tier: "supporting",
    glowColor: "#3B82F6",
    borderColor: "#3B82F6",
    logoClass: "max-h-[42px] lg:max-h-[48px] w-auto object-contain",
  },
  {
    name: "Vital Tea",
    image: "/clients/vitalTea.png",
    type: "Tea & Beverage",
    tier: "supporting",
    glowColor: "#16A34A",
    borderColor: "#16A34A",
    logoClass: "max-h-[60px] w-auto object-contain",
  },
  {
    name: "Vital Group",
    image: "/clients/vitalGroup.png",
    type: "FMCG Conglomerate",
    tier: "supporting",
    glowColor: "#0D9488",
    borderColor: "#0D9488",
    logoClass: "max-h-[38px] opacity-80 group-hover:opacity-100 w-auto object-contain",
  },
];
