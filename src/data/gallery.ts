export interface GalleryItem {
  title: string;
  type: string;
  quantity: string;
  quote: string;
  image: string;
  accent: string;
  labelColor: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Annual Tech Summit",
    type: "Corporate Conference",
    quantity: "500 bottles",
    quote: "Crisp printing, delivered on schedule.",
    image: "/gallery/conference.jpg",
    accent: "#8B5CF6",
    labelColor: "#8B5CF680",
  },
  {
    title: "Sabrina & Omar Wedding",
    type: "Wedding Ceremony",
    quantity: "300 bottles",
    quote: "Beautiful keepsakes for every guest.",
    image: "/gallery/wedding.jpg",
    accent: "#EC4899",
    labelColor: "#EC489980",
  },
  {
    title: "The Grill House",
    type: "Restaurant · Monthly",
    quantity: "200 bottles / mo",
    quote: "Our tables look professional now.",
    image: "/gallery/restaurant.jpg",
    accent: "#F59E0B",
    labelColor: "#F59E0B80",
  },
  {
    title: "Karachi MUN 2024",
    type: "MUN Tournament",
    quantity: "450 bottles",
    quote: "Every delegate desk, branded.",
    image: "/gallery/mun.jpg",
    accent: "#10B981",
    labelColor: "#10B98180",
  },
  {
    title: "Pearl Grand Hotel",
    type: "Hotel Guest Rooms",
    quantity: "800 bottles / mo",
    quote: "Guests notice the premium touch.",
    image: "/gallery/hotel.jpg",
    accent: "#29C7F6",
    labelColor: "#29C7F680",
  },
  {
    title: "Apex Corp AGM",
    type: "Corporate Event",
    quantity: "600 bottles",
    quote: "Brand on every surface. Loved it.",
    image: "/gallery/corporate.jpg",
    accent: "#64748B",
    labelColor: "#64748B80",
  },
];
