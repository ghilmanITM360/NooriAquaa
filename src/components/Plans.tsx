"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Small Orders",
    description: "Perfect for homes, small offices, and smaller events.",
    for: ["Homes", "Small Offices", "Small Events"],
    quantity: "10–50 bottles per order",
    frequency: "As Needed",
    highlighted: false,
  },
  {
    name: "Business Supply",
    description: "Our most popular plan — designed for businesses that need reliable, recurring delivery.",
    for: ["Restaurants & Cafés", "Hotels", "Corporate Offices"],
    quantity: "50–200 bottles per order",
    frequency: "Weekly / Monthly",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Large Events",
    description: "High-volume delivery for large-scale events, conferences, and celebrations.",
    for: ["Weddings & Ceremonies", "Conferences", "Tournaments"],
    quantity: "200+ bottles per event",
    frequency: "Per Event",
    highlighted: false,
  },
];

export default function Plans() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#07111F" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Flexible plans.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Built for every need.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            No rigid packages. Just the right delivery for your situation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: plan.highlighted ? -6 : -4, transition: { duration: 0.2 } }}
              className={`relative rounded-[32px] p-8 flex flex-col gap-6 cursor-default ${
                plan.highlighted ? "scale-105" : ""
              }`}
              style={
                plan.highlighted
                  ? {
                      background:
                        "linear-gradient(135deg, rgba(41,199,246,0.08) 0%, rgba(13,27,42,0.9) 100%)",
                      border: "1px solid rgba(41,199,246,0.4)",
                      boxShadow: "0 0 40px rgba(41,199,246,0.12)",
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                {plan.description}
              </p>

              {/* For list */}
              <div className="flex flex-col gap-2">
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#94A3B8" }}>
                  Ideal For
                </div>
                {plan.for.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#29C7F6" }}
                    />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(41,199,246,0.06)",
                  border: "1px solid rgba(41,199,246,0.12)",
                }}
              >
                <div className="text-xs font-semibold" style={{ color: "#94A3B8" }}>
                  Quantity Range
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {plan.quantity}
                </div>
                <div className="text-xs mt-2" style={{ color: "#94A3B8" }}>
                  Frequency: <span className="text-white">{plan.frequency}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={
                  plan.highlighted
                    ? {
                        background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(41,199,246,0.3)",
                      }
                    : {
                        background: "rgba(41,199,246,0.08)",
                        border: "1px solid rgba(41,199,246,0.2)",
                        color: "#29C7F6",
                      }
                }
              >
                Custom Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
