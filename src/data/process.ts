export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  chip: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Send Your Logo",
    description:
      "WhatsApp or email us your logo file, preferred colors, bottle size, and quantity required.",
    chip: "PNG · AI · PDF",
    detail: "24hr response guaranteed",
  },
  {
    number: "02",
    title: "We Build Your Mockup",
    description:
      "Our design team creates a realistic digital bottle mockup with your logo and label applied.",
    chip: "24hr Turnaround",
    detail: "Full label preview included",
  },
  {
    number: "03",
    title: "Approve The Design",
    description:
      "Review your mockup and request any revisions. We refine until you're completely satisfied.",
    chip: "Free Revisions",
    detail: "Your approval before production",
  },
  {
    number: "04",
    title: "We Print & Deliver",
    description:
      "Once approved, we produce your branded bottles in bulk and deliver them across Karachi.",
    chip: "Bulk Production",
    detail: "Karachi-wide delivery",
  },
];
