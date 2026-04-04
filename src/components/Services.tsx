"use client";

import { motion } from "framer-motion";
import { Home, Package, RefreshCw, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Home & Office Delivery",
    description:
      "Reliable daily and weekly water bottle delivery for homes, offices, clinics, and workplaces across Karachi.",
    chips: ["Daily Delivery", "Flexible Schedule", "Any Location"],
  },
  {
    icon: Package,
    title: "Bulk Event Supply",
    description:
      "Large-volume delivery for weddings, conferences, ceremonies, tournaments, and corporate gatherings.",
    chips: ["Large Volume", "Event Ready", "Same Day"],
  },
  {
    icon: RefreshCw,
    title: "Recurring Business Supply",
    description:
      "Scheduled water delivery for restaurants, hotels, cafés, and businesses that need uninterrupted supply.",
    chips: ["Weekly Plans", "Restaurant Ready", "Auto-Schedule"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ background: "#F8FAFC" }}
    >
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
          >
            Everything your business needs.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nothing it doesn&apos;t.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Three service tiers designed for every type of Karachi business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-[32px] p-8 flex flex-col gap-6 cursor-default group"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "0 0 40px rgba(41,199,246,0.12)",
                    border: "1px solid rgba(41,199,246,0.15)",
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(41,199,246,0.15), rgba(90,185,255,0.1))",
                    border: "1px solid rgba(41,199,246,0.2)",
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#29C7F6" }} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed flex-1" style={{ color: "#475569" }}>
                  {svc.description}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {svc.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(41,199,246,0.08)",
                        border: "1px solid rgba(41,199,246,0.2)",
                        color: "#0B8FA8",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                  style={{ color: "#29C7F6" }}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
