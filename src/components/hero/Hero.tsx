"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/config";
import { useParallaxBottle } from "@/hooks/useParallaxBottle";
import FloatingBottle from "./FloatingBottle";
import HeroBadges from "./HeroBadges";
import { heroBottles } from "./heroBottleData";

const trustItems = [
  "500+ Brands Served",
  "24hr Mockup Turnaround",
  "Bulk Orders Available",
  "Karachi-Wide Delivery",
];

export default function Hero() {
  const { ref, offset } = useParallaxBottle(0.025);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#07111F" }}
    >
      {/* ── Background ambient glows ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 72% 42%, rgba(41,199,246,0.08) 0%, transparent 68%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 18% 72%, rgba(90,185,255,0.05) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col gap-7 lg:gap-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start"
            >
              <span
                className="px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase"
                style={{
                  background: "rgba(41,199,246,0.1)",
                  border: "1px solid rgba(41,199,246,0.25)",
                  color: "#29C7F6",
                }}
              >
                ✦ Custom Branded Water Bottles · Karachi
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="text-[52px] sm:text-[64px] lg:text-[72px] font-bold leading-[0.92] tracking-[-0.04em] text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Your Logo.
              <br />
              Your Bottle.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Brand.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-[17px] leading-[1.7] max-w-lg"
              style={{ color: "#94A3B8" }}
            >
              Send us your logo. Choose your bottle size. We manufacture premium
              custom branded water bottles for restaurants, hotels, events,
              conferences, schools, and organizations across Karachi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={WHATSAPP_LINKS.logo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  background: "#25D366",
                  boxShadow: "0 8px 28px rgba(37,211,102,0.28)",
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Send Your Logo on WhatsApp
              </a>

              <a
                href="#gallery"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(41,199,246,0.08)",
                  border: "1px solid rgba(41,199,246,0.3)",
                  color: "#29C7F6",
                }}
              >
                View Bottle Examples
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-x-5 gap-y-2 pt-1"
            >
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-[13px] font-medium"
                  style={{ color: "#64748B" }}
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: "#29C7F6" }}
                  />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Bottle Composition ── */}
          <div
            ref={ref}
            className="relative flex items-center justify-center"
            style={{ height: 560, minHeight: 440 }}
          >
            {/* Behind-all ambient pulse glow */}
            <div
              className="absolute inset-0 animate-glow-pulse pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 65% 58% at 50% 50%, rgba(41,199,246,0.16) 0%, transparent 70%)",
              }}
            />

            {/* Secondary diffuse blur glow */}
            <div
              className="absolute animate-glow-pulse pointer-events-none"
              style={{
                width: 300,
                height: 380,
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse, rgba(41,199,246,0.10) 0%, transparent 70%)",
                filter: "blur(44px)",
                animationDelay: "1.5s",
              }}
            />

            {/* ── 5 Satellite Bottles — unique shapes + positions ── */}
            {heroBottles.map((bottle) => (
              <FloatingBottle key={bottle.id} bottle={bottle} />
            ))}

            {/* ── Main Center Bottle (product image) ── */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 0.12s linear",
              }}
            >
              <div className="relative animate-float">
                {/* Bottle glow halo */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(41,199,246,0.30) 0%, transparent 68%)",
                    filter: "blur(28px)",
                    transform: "scale(1.35)",
                  }}
                />

                {/* Ground reflection */}
                <div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{
                    width: 130,
                    height: 18,
                    borderRadius: "50%",
                    background: "rgba(41,199,246,0.22)",
                    filter: "blur(12px)",
                  }}
                />

                <img
                  src="/waterBottle.png"
                  alt="Custom Branded Water Bottle by Noori Aqua Premium Drinking Water"
                  className="relative z-10 w-[200px] lg:w-[240px]"
                  style={{
                    filter:
                      "drop-shadow(0 40px 60px rgba(0,0,0,0.8)) drop-shadow(0 0 50px rgba(41,199,246,0.32))",
                    objectFit: "contain",
                  }}
                />
              </div>
            </motion.div>

            {/* ── 4 Floating Info Badges ── */}
            <HeroBadges />
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #07111F)",
        }}
      />
    </section>
  );
}
