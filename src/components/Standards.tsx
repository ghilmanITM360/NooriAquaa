"use client";

import { motion } from "framer-motion";
import { Droplets, Shield, Package, Star } from "lucide-react";

const standards = [
  {
    icon: Droplets,
    title: "Purified Drinking Water",
    description:
      "Our water goes through a multi-stage purification process to ensure it meets the highest safety standards.",
    chip: "Certified",
    chipColor: "#29C7F6",
  },
  {
    icon: Shield,
    title: "Sealed & Hygienic Bottles",
    description:
      "Every bottle is sealed at source, ensuring zero contamination from filling to delivery.",
    chip: "Lab Tested",
    chipColor: "#5AB9FF",
  },
  {
    icon: Package,
    title: "Food-Grade Packaging",
    description:
      "We use only BPA-free, food-grade 19L bottles that are safe for all ages and uses.",
    chip: "Guaranteed",
    chipColor: "#29C7F6",
  },
  {
    icon: Star,
    title: "Trusted by Karachi Businesses",
    description:
      "Over 100 businesses across Karachi rely on Noori Aqua for consistent, reliable water supply.",
    chip: "Verified",
    chipColor: "#5AB9FF",
  },
];

const proofItems = [
  { label: "Purification System", icon: Droplets, desc: "Multi-stage filtration" },
  { label: "Bottle Storage", icon: Package, desc: "Hygiene-controlled facility" },
  { label: "Delivery Fleet", icon: Shield, desc: "Timely, city-wide delivery" },
];

export default function Standards() {
  return (
    <section
      id="standards"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(41,199,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Every bottle.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Held to a higher standard.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Quality and hygiene are non-negotiable at Noori Aqua.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {standards.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 flex flex-col gap-4 cursor-default group"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${s.chipColor}10 0%, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `${s.chipColor}15`,
                    border: `1px solid ${s.chipColor}25`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: s.chipColor }} />
                </div>

                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {s.title}
                </h3>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "#94A3B8" }}>
                  {s.description}
                </p>

                {/* Status chip */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit"
                  style={{
                    background: `${s.chipColor}15`,
                    border: `1px solid ${s.chipColor}25`,
                    color: s.chipColor,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.chipColor }} />
                  {s.chip}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Proof items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {proofItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative rounded-[24px] overflow-hidden h-44 group cursor-default"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(41,199,246,0.08) 0%, rgba(13,27,42,0.9) 100%)",
                  border: "1px solid rgba(41,199,246,0.12)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(41,199,246,0.12) 0%, transparent 60%)",
                  }}
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(41,199,246,0.1)",
                      border: "1px solid rgba(41,199,246,0.2)",
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: "#29C7F6" }} />
                  </div>
                  <div className="text-center">
                    <div className="text-base font-bold text-white">{item.label}</div>
                    <div className="text-xs mt-1" style={{ color: "#94A3B8" }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
