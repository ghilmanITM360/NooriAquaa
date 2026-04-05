"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";
import HeroClientCard from "@/components/sections/HeroClientCard";
import BrandTile from "@/components/sections/BrandTile";

export default function TrustedBrands() {
  const heroClients = brands.filter((b) => b.tier === "hero");
  const supportingClients = brands.filter((b) => b.tier === "supporting");

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        background: `radial-gradient(circle at 50% 50%, rgba(20,60,120,0.18) 0%, rgba(7,17,31,1) 60%), #07111F`,
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(41,199,246,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #07111F, transparent)" }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to top, #07111F, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-10 lg:mb-12"
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.28em] mb-2"
            style={{ color: "rgba(148,163,184,0.38)" }}
          >
            Trusted By
          </p>
          <h2
            className="text-[22px] lg:text-[26px] font-bold tracking-tight"
            style={{
              color: "rgba(248,250,252,0.85)",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Leading Brands
          </h2>
          <div
            className="w-10 h-px mx-auto mt-3"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(41,199,246,0.5), transparent)",
            }}
          />
        </motion.div>

        {/* Hero client cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {heroClients.map((brand, i) => (
            <HeroClientCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>

        {/* Supporting client tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {supportingClients.map((brand, i) => (
            <BrandTile key={brand.name} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

