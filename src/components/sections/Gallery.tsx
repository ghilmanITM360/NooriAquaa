"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { WHATSAPP_LINKS } from "@/data/config";
import { ArrowUpRight } from "lucide-react";

// ─── Card ────────────────────────────────────────────────────────────────────

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const isFeatured = item.colSpan === 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.07 }}
      whileHover={{ scale: 1.016, transition: { duration: 0.35, ease: "easeOut" } }}
      className="group relative overflow-hidden rounded-[22px] h-full cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* ── Full-bleed image ── */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        {/* Base darkening gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(3,9,20,0.95) 0%, rgba(3,9,20,0.45) 45%, rgba(3,9,20,0.08) 100%)",
          }}
        />
        {/* Accent glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse 70% 55% at 50% 85%, ${item.accent}28 0%, transparent 70%)`,
          }}
        />
        {/* Specular sheen on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.045) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* ── Category badge ── */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="inline-block px-3 py-[5px] rounded-full text-[10px] font-bold uppercase tracking-[0.09em]"
          style={{
            background: `${item.accent}1A`,
            border: `1px solid ${item.accent}45`,
            color: item.accent,
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          {item.category}
        </span>
      </div>

      {/* ── Bottom content panel (glass) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-10 translate-y-[6px] group-hover:translate-y-0 transition-transform duration-500 ease-out"
      >
        <div
          className="rounded-[14px] p-4 lg:p-5"
          style={{
            background: "rgba(3,9,20,0.58)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h3
            className={`font-bold leading-tight tracking-[-0.02em] text-white ${
              isFeatured
                ? "text-[20px] lg:text-[24px] mb-2"
                : "text-[15px] lg:text-[17px] mb-1.5"
            }`}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {item.title}
          </h3>
          <p
            className="text-[12px] lg:text-[13px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ color: "#94A3B8" }}
          >
            {item.description}
          </p>
          {/* Accent rule */}
          <div
            className="h-[2px] w-8 mt-3 rounded-full"
            style={{
              background: `linear-gradient(to right, ${item.accent}, transparent)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#030914" }}
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "#29C7F6" }}
            >
              Portfolio
            </p>
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Real brands.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Custom bottles.
              </span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: "#64748B" }}>
              Hundreds of businesses across Karachi trust us with their branded
              water bottles.
            </p>
          </div>

          <a
            href={WHATSAPP_LINKS.examples}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14px] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "white",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            See More Examples
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* ── Desktop: premium 4-column modular grid ── */}
        {/*
         *  Row 1: conferences (span-2) | hotels (span-1) | weddings (span-1)
         *  Row 2: offices (span-1)     | restaurants (span-2) | mun (span-1)
         *  Row 3: school (span-2)      | sports (span-2)
         */}
        <div
          className="hidden lg:grid grid-cols-4 gap-5"
          style={{ gridTemplateRows: "400px 360px 380px" }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              style={{ gridColumn: `span ${item.colSpan}` }}
            >
              <GalleryCard item={item} index={i} />
            </div>
          ))}
        </div>

        {/* ── Mobile / tablet: 2-column stacked grid ── */}
        <div
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4"
          style={{ gridAutoRows: "300px" }}
        >
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-[13px]"
          style={{ color: "#475569" }}
        >
          All bottle designs are custom-made. WhatsApp us your logo to get your
          own mockup in 24 hours.
        </motion.p>
      </div>
    </section>
  );
}

