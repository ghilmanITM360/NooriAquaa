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
    image: "/industries/restaurants.png",
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description:
      "Reliable bulk water delivery for guest rooms, dining areas, pools, and banquet halls.",
    chips: ["Guest Rooms", "Dining Areas", "Bulk Delivery"],
    gradient: "from-[#1a3550] to-[#091825]",
    accent: "#5AB9FF",
    image: "/industries/hotels.png",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description:
      "Keep your team hydrated with scheduled water delivery. Daily, weekly, or on-demand.",
    chips: ["Daily Supply", "Office Packs", "On-Demand"],
    gradient: "from-[#0f2a42] to-[#071520]",
    accent: "#29C7F6",
    image: "/industries/offices.png",
  },
  {
    icon: Heart,
    title: "Weddings & Ceremonies",
    description:
      "Large-volume water supply for your special day. We handle logistics so you don't have to.",
    chips: ["Bulk Orders", "Event Day", "Premium Service"],
    gradient: "from-[#1e2a40] to-[#0a1020]",
    accent: "#5AB9FF",
    image: "/industries/weddings.png",
  },
  {
    icon: Presentation,
    title: "Conferences & Trade Shows",
    description:
      "We supply water for Karachi's biggest corporate events, trade fairs, and business conferences.",
    chips: ["Large Volume", "Same Day", "Setup Included"],
    gradient: "from-[#122038] to-[#060e1b]",
    accent: "#29C7F6",
    image: "/industries/conferences.png",
  },
  {
    icon: GraduationCap,
    title: "MUN & Debate Tournaments",
    description:
      "Trusted water supply for educational events, MUNs, and student tournaments across Karachi.",
    chips: ["Student Events", "Bulk Supply", "Reliable"],
    gradient: "from-[#0e1c30] to-[#050c18]",
    accent: "#5AB9FF",
    image: "/industries/mun.png",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative pt-40 pb-28"
      style={{ background: "#0D1B2A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[900px] text-center"
        >
          <h2
            className="text-[44px] md:text-[72px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
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
          <p className="mx-auto mt-5 max-w-[720px] text-lg leading-8" style={{ color: "#94A3B8" }}>
            Noori Aqua delivers water wherever people gather, work, stay, and
            celebrate.
          </p>
        </motion.div>

        {/* Desktop Grid - hidden on mobile/tablet */}
        <div className="hidden xl:grid grid-cols-12 gap-6 items-start">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            const cardVariant =
              ind.title === "Restaurants & Cafés" ? "restaurants"
              : ind.title === "Hotels & Resorts" ? "hotels"
              : ind.title === "Corporate Offices" ? "offices"
              : ind.title === "Weddings & Ceremonies" ? "weddings"
              : ind.title === "Conferences & Trade Shows" ? "conferences"
              : "mun";

            const layoutClass =
              cardVariant === "restaurants" ? "col-span-4 row-span-2"
              : cardVariant === "mun" ? "col-span-8"
              : "col-span-4";

            const minH =
              cardVariant === "restaurants" ? "min-h-[520px]"
              : cardVariant === "mun" ? "min-h-[250px]"
              : "min-h-[240px]";

            const imageClass =
              cardVariant === "restaurants"
                ? "absolute inset-0 h-full w-full object-cover object-[72%_42%] transition-transform duration-700 group-hover:scale-[1.04]"
                : cardVariant === "hotels"
                ? "absolute inset-0 h-full w-full object-cover object-[68%_45%] transition-transform duration-700 group-hover:scale-[1.04]"
                : cardVariant === "offices"
                ? "absolute inset-0 h-full w-full object-cover object-[78%_50%] transition-transform duration-700 group-hover:scale-[1.04]"
                : cardVariant === "weddings"
                ? "absolute inset-0 h-full w-full object-cover object-[40%_45%] transition-transform duration-700 group-hover:scale-[1.04]"
                : cardVariant === "conferences"
                ? "absolute inset-0 h-full w-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-[1.04]"
                : "absolute inset-0 h-full w-full object-cover object-[center_55%] transition-transform duration-700 group-hover:scale-[1.04]";

            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[30px] border border-cyan-500/15 bg-[#071523]/90 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 ${layoutClass} ${minH}`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.gradient}`} />

                {/* Full-card image */}
                <div className="absolute inset-0">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className={imageClass}
                    style={{
                      opacity: cardVariant === "restaurants" ? 0.92 : 0.85,
                      filter: "brightness(1.05) contrast(1.05) saturate(1.05)",
                    }}
                  />
                  {cardVariant === "mun" ? (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020b14]/95 via-[#020b14]/82 to-transparent" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-[#020b14]/75 to-[#020b14]/10" />
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
                </div>

                {/* Icon */}
                <div className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#071523]/70 backdrop-blur-md">
                  <Icon className="w-5 h-5" style={{ color: ind.accent }} />
                </div>

                {/* Restaurants */}
                {cardVariant === "restaurants" && (
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <div className="max-w-[210px]">
                      <h3
                        className="text-[58px] leading-[0.88] tracking-[-0.05em] font-bold text-white"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        Restaurants
                        <br />
                        & Cafés
                      </h3>
                      <p className="mt-5 max-w-[220px] text-[15px] leading-7 text-slate-300 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Keep your kitchen and dining tables supplied with fresh, purified water delivered on schedule.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-6">
                      {ind.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hotels */}
                {cardVariant === "hotels" && (
                  <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    <div className="max-w-[180px]">
                      <h3
                        className="text-[34px] leading-[0.92] tracking-[-0.04em] font-bold text-white"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        Hotels & Resorts
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-slate-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Reliable bulk delivery for guest rooms, dining areas, pools, and banquet halls.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Corporate Offices */}
                {cardVariant === "offices" && (
                  <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    <div>
                      <h3
                        className="max-w-[180px] text-[30px] leading-[0.9] tracking-[-0.04em] font-bold text-white"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        Corporate
                        <br />
                        Offices
                      </h3>
                      <p className="mt-3 text-[14px] leading-6 text-slate-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Keep your team hydrated with scheduled delivery. Daily, weekly, or on-demand.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Weddings */}
                {cardVariant === "weddings" && (
                  <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    <div>
                      <h3
                        className="max-w-[170px] text-[28px] leading-[0.92] tracking-[-0.04em] font-bold text-white"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        Weddings &
                        <br />
                        Ceremonies
                      </h3>
                      <p className="mt-3 max-w-[220px] text-[14px] leading-6 text-slate-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Large-volume water supply for your special day. We handle logistics so you don&apos;t have to.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conferences */}
                {cardVariant === "conferences" && (
                  <div className="relative z-10 flex h-full flex-col justify-between p-5">
                    <div>
                      <h3
                        className="max-w-[180px] text-[30px] leading-[0.9] tracking-[-0.04em] font-bold text-white"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        Conferences
                        <br />
                        & Trade Shows
                      </h3>
                      <p className="mt-3 max-w-[220px] text-[14px] leading-6 text-slate-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Water supply for conferences, exhibitions, and corporate events.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ind.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* MUN */}
                {cardVariant === "mun" && (
                  <div className="relative z-10 flex h-full max-w-[420px] flex-col justify-center p-8">
                    <h3
                      className="text-[42px] leading-[0.92] tracking-[-0.05em] font-bold text-white"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      MUN & Debate
                      <br />
                      Tournaments
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-300 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Trusted water supply for student conferences, MUNs, and debate tournaments across Karachi.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {ind.chips.map((chip) => (
                        <span key={chip} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-300">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
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
                style={{ height: "380px" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ind.gradient}`}
                />
                {/* Industry Image — mobile */}
                <div className="absolute inset-x-0 top-0 h-[60%] overflow-hidden pointer-events-none">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover object-[center_20%]"
                    style={{
                      opacity: 0.88,
                      filter: "brightness(1.08) contrast(1.05) saturate(1.05)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(13,27,42,0.15) 40%, rgba(13,27,42,0.88) 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 20%, rgba(41,199,246,0.18) 0%, transparent 65%)",
                      mixBlendMode: "screen",
                    }}
                  />
                </div>
                {/* Icon — floats above the image, mobile */}
                <div
                  className="absolute top-5 left-5 z-20 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-xl"
                  style={{
                    background: "rgba(13,27,42,0.55)",
                    border: `1px solid ${ind.accent}40`,
                    boxShadow: `0 8px 24px ${ind.accent}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: ind.accent }} />
                </div>
                <div
                  className="absolute inset-0 rounded-[28px]"
                  style={{ border: `1px solid ${ind.accent}30` }}
                />
                <div className="relative z-10 h-full flex flex-col justify-end p-5 pt-[62%]">
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
