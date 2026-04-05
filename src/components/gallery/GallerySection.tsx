"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/config";
import GalleryGrid from "./GalleryGrid";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 relative overflow-hidden bg-white"
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-10"
        >
          <div className="max-w-2xl">
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "#29C7F6" }}
            >
              Portfolio
            </p>
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-slate-900"
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
            <p className="mt-4 text-lg text-slate-500">
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
              background: "rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.12)",
              color: "#0f172a",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            See More Examples
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Gallery grid */}
        <GalleryGrid />

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-[13px] text-slate-400"
        >
          All bottle designs are custom-made. WhatsApp us your logo to get your
          own mockup in 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
