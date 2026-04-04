"use client";

import { motion } from "framer-motion";
import { Shield, Droplets, Layers, Package } from "lucide-react";

const standards = [
  {
    icon: Shield,
    title: "Food-Safe Materials",
    description:
      "All our bottles are manufactured from BPA-free, food-grade PET plastic certified for clean drinking water. Safe for offices, restaurants, and public events.",
    detail: "BPA-Free · Food-Grade PET",
    accent: "#29C7F6",
  },
  {
    icon: Layers,
    title: "Premium Print Quality",
    description:
      "We use high-resolution digital printing and pressure-sensitive label adhesives that deliver crisp logos, vibrant colors, and sharp text — every single time.",
    detail: "300+ DPI · Pantone Color Match",
    accent: "#5AB9FF",
  },
  {
    icon: Droplets,
    title: "Waterproof Labels",
    description:
      "Our labels are waterproof and condensation-resistant. Whether on ice in a cooler or at a humid outdoor event, your branding stays pristine.",
    detail: "Waterproof · Condensation-Resistant",
    accent: "#29C7F6",
  },
  {
    icon: Package,
    title: "Bulk Production Ready",
    description:
      "From 100 to 100,000 bottles — we handle bulk runs with consistent quality across every unit. No minimum order quantity surprises.",
    detail: "100 to 100,000+ Units",
    accent: "#5AB9FF",
  },
];

export default function Standards() {
  return (
    <section
      style={{ background: "#0D1B2A" }}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(41,199,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(41,199,246,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Glow top right */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(41,199,246,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#29C7F6" }}
          >
            Our Standards
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Quality you can{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              trust.
            </span>
          </h2>
          <p className="mt-5 text-lg" style={{ color: "#94A3B8" }}>
            Every bottle we produce meets the highest standards of safety, print quality, and consistency.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {standards.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col gap-5 p-7 rounded-[28px] transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.035), rgba(255,255,255,0.018))",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${s.accent}14`,
                    border: `1px solid ${s.accent}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: s.accent }} />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="text-[19px] font-bold leading-tight tracking-[-0.02em] text-white"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed flex-1"
                    style={{ color: "#64748B" }}
                  >
                    {s.description}
                  </p>
                </div>

                {/* Detail chip */}
                <div
                  className="px-3 py-1.5 rounded-xl text-[11px] font-semibold w-fit mt-auto"
                  style={{
                    background: `${s.accent}10`,
                    border: `1px solid ${s.accent}20`,
                    color: s.accent,
                  }}
                >
                  {s.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-[24px] overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { stat: "500+", label: "Brands Served" },
            { stat: "24hr", label: "Mockup Turnaround" },
            { stat: "100%", label: "Food-Safe Certified" },
            { stat: "0", label: "Compromise on Quality" },
          ].map((item) => (
            <div
              key={item.stat}
              className="flex flex-col gap-1 p-6 text-center"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <span
                className="text-[32px] font-black leading-none tracking-[-0.04em]"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.stat}
              </span>
              <span className="text-[12px] font-medium" style={{ color: "#64748B" }}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
