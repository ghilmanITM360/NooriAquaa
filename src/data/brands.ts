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
  cardClass?: string;
  glowClass?: string;
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
    logoClass: "max-h-[128px] lg:max-h-[140px] w-auto",
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
    logoClass: "max-h-[95px] lg:max-h-[108px] w-auto",
  },
  {
    name: "Meezan Bank",
    image: "/clients/meezan.png",
    type: "Islamic Banking",
    tier: "supporting",
    glowColor: "#7C3AED",
    borderColor: "#7C3AED",
    logoClass: "max-h-[54px] scale-[1.05] w-auto",
  },
  {
    name: "Vital",
    image: "/clients/vital.png",
    type: "Personal Care • FMCG",
    tier: "supporting",
    glowColor: "#EF4444",
    borderColor: "#EF4444",
    logoClass: "max-h-[58px] w-auto",
  },
  {
    name: "Waheed",
    image: "/clients/waheed.png",
    type: "Street Food Icon",
    tier: "supporting",
    glowColor: "#DC2626",
    borderColor: "#B45309",
    logoClass: "max-h-[56px] w-auto",
  },
  {
    name: "AY Traders",
    image: "/clients/az.png",
    type: "Natural Salt & Lamps",
    tier: "supporting",
    glowColor: "#3B82F6",
    borderColor: "#3B82F6",
    logoClass: "max-h-[42px] lg:max-h-[48px] w-auto scale-[1.55]",
    cardClass: "col-span-1 md:col-span-1 lg:col-span-2",
    glowClass: "w-28 h-16 bg-[#2F8FFF]/15 blur-2xl",
  },
  {
    name: "Vital Tea",
    image: "/clients/vitalTea.png",
    type: "Tea & Beverage",
    tier: "supporting",
    glowColor: "#16A34A",
    borderColor: "#16A34A",
    logoClass: "max-h-[64px] w-auto scale-[1.05]",
  },
  {
    name: "Vital Group",
    image: "/clients/vitalGroup.png",
    type: "FMCG Conglomerate",
    tier: "supporting",
    glowColor: "#0D9488",
    borderColor: "#0D9488",
    logoClass: "max-h-[34px] lg:max-h-[38px] w-auto scale-[1.7]",
    cardClass: "col-span-1 md:col-span-1 lg:col-span-2",
    glowClass: "w-32 h-16 bg-[#49C2B5]/12 blur-2xl",
  },
];

