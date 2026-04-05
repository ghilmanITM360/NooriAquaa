"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { WHATSAPP_LINKS } from "@/data/config";
import { ArrowUpRight } from "lucide-react";

function GalleryCard({
  item,
  index,
  featured = false,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  featured?: boolean;
}) {
  const contentPadding = featured ? "p-7 lg:p-8" : "p-5 lg:p-6";
  const titleClass = featured
    ? "text-[30px] lg:text-[38px] font-bold leading-[0.95] tracking-[-0.03em] text-white"
    : "text-[18px] font-bold leading-tight tracking-[-0.02em] text-white";
  const quoteClass = featured ? "text-[15px] leading-relaxed flex-1" : "text-[13px] leading-relaxed flex-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[24px] flex flex-col h-full"
      style={{
        border: `1px solid ${item.accent}18`,
        background: "#0D1B2A",
      }}
    >
      {/* Image / visual area */}
      <div className="relative overflow-hidden flex-1">
        {/* Fallback gradient */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
          style={{
            background: `radial-gradient(ellipse 80% 100% at 30% 0%, ${item.accent}22 0%, transparent 65%), linear-gradient(180deg, ${item.accent}10 0%, #07111F 100%)`,
          }}
        />
        {/* Real image */}
        <img
          src={item.image}
          alt={item.title}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />

        {/* Bottle silhouette (fallback) */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none">
          <div
            className="flex flex-col items-center opacity-60"
            style={{ width: 88, height: 210 }}
          >
            <div style={{ width: 34, height: 16, borderRadius: "4px 4px 0 0", background: item.accent, opacity: 0.9 }} />
            <div style={{ width: 26, height: 14, background: `${item.accent}60` }} />
            <div
              className="w-full flex-1 relative"
              style={{
                borderRadius: "3px 3px 12px 12px",
                background: `${item.accent}14`,
                border: `1px solid ${item.accent}25`,
              }}
            >
              <div
                className="absolute"
                style={{
                  top: "15%", left: "10%", right: "10%", height: "46%",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: 3,
                  border: `1px solid ${item.accent}20`,
                }}
              />
              <div
                className="absolute"
                style={{ top: 8, left: "14%", width: 6, height: "44%", borderRadius: 4, background: "rgba(255,255,255,0.15)" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom gradient — blends image into content */}
        <div
          className="absolute inset-x-0 bottom-0 h-[45%]"
          style={{ background: "linear-gradient(to top, rgba(7,17,31,0.95), transparent)" }}
        />

        {/* Top chips */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.06em]"
            style={{
              background: `${item.accent}18`,
              border: `1px solid ${item.accent}30`,
              color: item.accent,
              backdropFilter: "blur(8px)",
            }}
          >
            {item.type}
          </span>
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{
              background: "rgba(7,17,31,0.7)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94A3B8",
              backdropFilter: "blur(8px)",
            }}
          >
            {item.quantity}
          </span>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${item.accent}18 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Card content */}
      <div className={`${contentPadding} flex flex-col gap-3`}>
        <h3
          className={titleClass}
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {item.title}
        </h3>
        <p className={quoteClass} style={{ color: "#64748B" }}>
          &ldquo;{item.quote}&rdquo;
        </p>
        {/* Accent line */}
        <div
          className="h-px w-12 mt-1"
          style={{ background: `linear-gradient(to right, ${item.accent}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 relative"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#29C7F6" }}>
              Portfolio
            </p>
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em]"
              style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
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
              Hundreds of businesses across Karachi trust us with their branded water bottles.
            </p>
          </div>

          <a
            href={WHATSAPP_LINKS.examples}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[14px] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            style={{
              background: "#07111F",
              color: "white",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            See More Examples
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Desktop editorial grid */}
        <div className="hidden lg:grid grid-cols-12 gap-6 auto-rows-[320px]">
          {/* [0] Annual Tech Summit — large feature, spans 2 rows */}
          <div className="col-span-8 row-span-2">
            <GalleryCard item={galleryItems[0]} index={0} featured />
          </div>
          {/* [1] Wedding — medium right */}
          <div className="col-span-4">
            <GalleryCard item={galleryItems[1]} index={1} />
          </div>
          {/* [2] The Grill House — medium right */}
          <div className="col-span-4">
            <GalleryCard item={galleryItems[2]} index={2} />
          </div>
          {/* [3] Karachi MUN — small bottom-left */}
          <div className="col-span-3">
            <GalleryCard item={galleryItems[3]} index={3} />
          </div>
          {/* [4] Pearl Grand Hotel — wide center */}
          <div className="col-span-6">
            <GalleryCard item={galleryItems[4]} index={4} />
          </div>
          {/* [5] Apex Corp AGM — small bottom-right */}
          <div className="col-span-3">
            <GalleryCard item={galleryItems[5]} index={5} />
          </div>
        </div>

        {/* Mobile / tablet grid */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5" style={{ gridAutoRows: "340px" }}>
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-[13px]"
          style={{ color: "#94A3B8" }}
        >
          All bottle designs are custom-made. WhatsApp us your logo to get your own mockup in 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
