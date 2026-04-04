export interface TransformStage {
  number: string;
  label: string;
  title: string;
  description: string;
  environment?: string;
}

export const transformStages: TransformStage[] = [
  {
    number: "01",
    label: "Blank Canvas",
    title: "A plain bottle — ready for your brand",
    description:
      "Every custom bottle starts the same. Clear, food-safe, food-grade material — the perfect surface.",
  },
  {
    number: "02",
    label: "Logo Applied",
    title: "Your logo positioned perfectly",
    description:
      "We place your logo file onto the bottle surface at exact proportions and optimal placement.",
  },
  {
    number: "03",
    label: "Label Designed",
    title: "A full label built around your identity",
    description:
      "Brand colors, typography, tagline, and design elements — all composed into a cohesive label.",
  },
  {
    number: "04",
    label: "Digital Mockup",
    title: "Photorealistic preview, ready for approval",
    description:
      "You see the finished result before a single bottle is printed. Revisions are free.",
  },
  {
    number: "05",
    label: "In Production",
    title: "Labels printed and applied in bulk",
    description:
      "High-quality label printing applied to food-safe bottles. Your order in full production.",
  },
  {
    number: "06",
    label: "Delivered",
    title: "Your branded bottles at your door",
    description:
      "Boxed, delivered, and ready to serve — exactly as you envisioned, on time, across Karachi.",
  },
];
