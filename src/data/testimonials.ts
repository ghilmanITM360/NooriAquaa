export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  type: string;
  quantity: string;
  initials: string;
  accentColor: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We ordered 500 branded bottles for our annual corporate conference and the quality exceeded every expectation. The label printing was crisp, the design was spot-on, and delivery was on time. Every delegate noticed.",
    name: "Rehan Mirza",
    role: "Event Director",
    company: "TechSummit Karachi",
    type: "Corporate Conference",
    quantity: "500 bottles",
    initials: "RM",
    accentColor: "#29C7F6",
    featured: true,
  },
  {
    quote:
      "Our restaurant bottles with our logo make such a difference. Guests actually ask about them. It adds a professional touch you just can't get from generic water.",
    name: "Sana Tariq",
    role: "Operations Manager",
    company: "The Dining Room, DHA",
    type: "Restaurant",
    quantity: "200 bottles / month",
    initials: "ST",
    accentColor: "#F59E0B",
  },
  {
    quote:
      "The custom bottles for our wedding were absolutely beautiful. Our names on every bottle, exactly the design we had in mind. The guests loved them as keepsakes.",
    name: "Zara & Ali",
    role: "Wedding Clients",
    company: "Private Ceremony, Karachi",
    type: "Wedding & Event",
    quantity: "300 bottles",
    initials: "ZA",
    accentColor: "#EC4899",
  },
];
