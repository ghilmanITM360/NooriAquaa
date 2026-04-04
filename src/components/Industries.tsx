"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Hotel,
  Building2,
  Heart,
  Presentation,
  GraduationCap,
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    description:
      "Keep your kitchen and dining tables supplied with fresh, purified water. We deliver on schedule so you can focus on your guests.",
    chips: ["Weekly Supply", "19L Bottles", "Fast Refill"],
    gradient: "from-[#1a4060] to-[#0a1f30]",
    accent: "#29C7F6",
    featured: true,
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description:
      "Reliable bulk water delivery for guest rooms, dining areas, pools, and banquet halls.",
    chips: ["Guest Rooms", "Dining Areas", "Bulk Delivery"],
    gradient: "from-[#1a3550] to-[#091825]",
    accent: "#5AB9FF",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description:
      "Keep your team hydrated with scheduled water delivery. Daily, weekly, or on-demand.",
    chips: ["Daily Supply", "Office Packs", "On-Demand"],
    gradient: "from-[#0f2a42] to-[#071520]",
    accent: "#29C7F6",
  },
  {
    icon: Heart,
    title: "Weddings & Ceremonies",
    description:
      "Large-volume water supply for your special day. We handle logistics so you don't have to.",
    chips: ["Bulk Orders", "Event Day", "Premium Service"],
    gradient: "from-[#1e2a40] to-[#0a1020]",
    accent: "#5AB9FF",
  },
  {
    icon: Presentation,
    title: "Conferences & Trade Shows",
    description:
      "We supply water for Karachi's biggest corporate events, trade fairs, and business conferences.",
    chips: ["Large Volume", "Same Day", "Setup Included"],
    gradient: "from-[#122038] to-[#060e1b]",
    accent: "#29C7F6",
  },
  {
    icon: GraduationCap,
    title: "MUN & Debate Tournaments",
    description:
      "Trusted water supply for educational events, MUNs, and student tournaments across Karachi.",
    chips: ["Student Events", "Bulk Supply", "Reliable"],
    gradient: "from-[#0e1c30] to-[#050c18]",
    accent: "#5AB9FF",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-24 lg:py-32"
      style={{ background: "#0D1B2A" }}
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            One supplier.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every occasion.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Noori Aqua delivers water wherever people gather, work, stay, and
            celebrate.
          </p>
        </motion.div>

        {/* Desktop Grid - hidden on mobile */}
        <div className="hidden md:grid grid-cols-3 gap-4 auto-rows-[240px]">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const isFeatured = ind.featured;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-[28px] overflow-hidden group cursor-default ${
                  isFeatured ? "row-span-2" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ind.gradient}`}
                />
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${ind.accent}18 0%, transparent 60%)`,
                  }}
                />
                {/* Border */}
                <div
                  className="absolute inset-0 rounded-[28px] opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ border: `1px solid ${ind.accent}40` }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${ind.accent}20`,
                      border: `1px solid ${ind.accent}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: ind.accent }} />
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3
                      className={`font-bold text-white mb-2 ${
                        isFeatured ? "text-2xl" : "text-lg"
                      }`}
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {ind.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: "#94A3B8" }}
                    >
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {ind.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: `${ind.accent}15`,
                            border: `1px solid ${ind.accent}25`,
                            color: ind.accent,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="snap-start flex-shrink-0 w-[280px] rounded-[28px] overflow-hidden relative"
                style={{ height: "320px" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ind.gradient}`}
                />
                <div
                  className="absolute inset-0 rounded-[28px]"
                  style={{ border: `1px solid ${ind.accent}30` }}
                />
                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${ind.accent}20`,
                      border: `1px solid ${ind.accent}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: ind.accent }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {ind.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#94A3B8" }}>
                      {ind.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.chips.map((chip) => (
                        <span
                          key={chip}
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            background: `${ind.accent}15`,
                            border: `1px solid ${ind.accent}25`,
                            color: ind.accent,
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
