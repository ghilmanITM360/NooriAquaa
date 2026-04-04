export interface BottleSize {
  size: string;
  label: string;
  use: string;
  heightPx: number;
  widthPx: number;
  popular?: boolean;
}

export interface CapColor {
  name: string;
  hex: string;
}

export interface LabelStyle {
  name: string;
  description: string;
  tag: string;
}

export const bottleSizes: BottleSize[] = [
  {
    size: "200ml",
    label: "Mini",
    use: "Events & Gift Packs",
    heightPx: 100,
    widthPx: 38,
  },
  {
    size: "500ml",
    label: "Standard",
    use: "Restaurants & Offices",
    heightPx: 148,
    widthPx: 50,
    popular: true,
  },
  {
    size: "1 Litre",
    label: "Premium",
    use: "Conferences & Hotels",
    heightPx: 192,
    widthPx: 60,
  },
  {
    size: "1.5L",
    label: "Large",
    use: "Tables & VIP Desks",
    heightPx: 232,
    widthPx: 68,
  },
];

export const capColors: CapColor[] = [
  { name: "White", hex: "#F8FAFC" },
  { name: "Black", hex: "#0D1B2A" },
  { name: "Cyan", hex: "#29C7F6" },
  { name: "Gold", hex: "#F59E0B" },
  { name: "Red", hex: "#EF4444" },
  { name: "Green", hex: "#10B981" },
];

export const labelStyles: LabelStyle[] = [
  {
    name: "Full-Wrap Label",
    description: "360° coverage — maximum brand visibility from every angle",
    tag: "Most Impactful",
  },
  {
    name: "Half-Body Label",
    description: "Classic placement, clean and professional",
    tag: "Most Popular",
  },
  {
    name: "Transparent Label",
    description: "See-through style — premium, modern aesthetic",
    tag: "Premium Look",
  },
  {
    name: "Matte Finish",
    description: "Non-glossy label surface — luxury tactile feel",
    tag: "Luxury",
  },
];

export const customizationChips = [
  "Your Logo",
  "Custom Colors",
  "Event Date",
  "QR Code",
  "Brand Tagline",
  "Custom Font",
  "Holographic Finish",
  "Eco Label",
];
