export const SITE_CONFIG = {
  brandName: "Noori Aqua",
  tagline: "Custom Branded Water Bottles",
  description:
    "Karachi's premier custom branded water bottle manufacturer for businesses, events, and organizations.",
  whatsapp: "923001234567",
  email: "info@nooriaqua.pk",
  location: "Karachi, Pakistan",
  phone: "+92 300 XXX XXXX",
  instagram: "#",
  facebook: "#",
};

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hi, I'm interested in custom branded water bottles for my business. Can you share more details?"
  )}`,
  quote: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to get a quote for custom branded water bottles. My requirements are:"
  )}`,
  logo: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hi, I want to send my logo and get a custom water bottle mockup. Please let me know the next steps."
  )}`,
  examples: `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to see examples of your custom branded bottle work."
  )}`,
};
