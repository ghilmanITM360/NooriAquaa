"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const genericNegatives = [
  "Forgettable — no brand identity",
  "Looks cheap in a professional setting",
  "Zero marketing value",
  "Every competitor uses the same bottle",
  "Guests remember nothing about your brand",
];

const customPositives = [
  "Instant brand recognition on every surface",
  "Elevates the professional image of your business",
  "Free marketing — seen by every guest",
  "Sets your brand apart from the competition",
  "Guests remember and associate the experience",
];

function GenericBottle() {
  return (
    <div className="relative flex flex-col items-center mx-auto" style={{ width: 90, height: 220 }}>
      {/* Cap */}
      <div style={{ width: 34, height: 18, borderRadius: "4px 4px 0 0", background: "#94A3B8", flexShrink: 0 }} />
      {/* Neck */}
      <div style={{ width: 26, height: 16, background: "#CBD5E150", flexShrink: 0 }} />
      {/* Body */}
      <div
        className="w-full flex-1 relative overflow-hidden"
        style={{
          borderRadius: "4px 4px 12px 12px",
          background: "rgba(203,213,225,0.18)",
          border: "1px solid rgba(203,213,225,0.25)",
        }}
      >
        {/* Blank label area */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            top: "20%",
            left: "10%",
            right: "10%",
            height: "42%",
            background: "rgba(255,255,255,0.06)",
            border: "1px dashed rgba(203,213,225,0.2)",
            borderRadius: 3,
          }}
        >
          <span style={{ fontSize: 10, color: "rgba(148,163,184,0.5)", letterSpacing: "0.08em" }}>
            NO LOGO
          </span>
        </div>
        {/* Shine */}
        <div
          className="absolute"
          style={{ top: 8, left: "14%", width: 5, height: "48%", borderRadius: 4, background: "rgba(255,255,255,0.18)" }}
        />
      </div>
    </div>
  );
}

function BrandedBottle() {
  return (
    <div className="relative flex flex-col items-center mx-auto" style={{ width: 90, height: 220 }}>
      {/* Cap */}
      <div style={{ width: 34, height: 18, borderRadius: "4px 4px 0 0", background: "#29C7F6", flexShrink: 0 }} />
      {/* Neck */}
      <div style={{ width: 26, height: 16, background: "rgba(41,199,246,0.45)", flexShrink: 0 }} />
      {/* Body */}
      <div
        className="w-full flex-1 relative overflow-hidden"
        style={{
          borderRadius: "4px 4px 12px 12px",
          background: "rgba(41,199,246,0.12)",
          border: "1px solid rgba(41,199,246,0.3)",
        }}
      >
        {/* Brand label */}
        <div
          className="absolute flex flex-col items-center justify-center gap-0.5"
          style={{
            top: "18%",
            left: "8%",
            right: "8%",
            height: "46%",
            background: "white",
            borderRadius: 3,
          }}
        >
          <div
            style={{
              width: 32,
              height: 6,
              borderRadius: 2,
              background: "#29C7F6",
            }}
          />
          <span style={{ fontSize: 8, fontWeight: 800, color: "#0B1320", letterSpacing: "0.06em" }}>
            YOUR BRAND
          </span>
          <div style={{ width: 24, height: 2, borderRadius: 1, background: "#E2E8F0" }} />
        </div>
        {/* Shine */}
        <div
          className="absolute"
          style={{ top: 8, left: "14%", width: 5, height: "48%", borderRadius: 4, background: "rgba(255,255,255,0.35)" }}
        />
        {/* Glow */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(41,199,246,0.12) 0%, transparent 60%)",
          }}
        />
      </div>
    </div>
  );
}

export default function WhyCustomBottles() {
  return (
    <section
      id="solutions"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(41,199,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#29C7F6" }}>
            Why It Matters
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Every bottle is a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              branding opportunity.
            </span>
          </h2>
          <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Generic bottles are forgotten the moment guests put them down.
            Custom branded bottles make every sip a brand impression.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 relative">
          {/* Divider label */}
          <div className="hidden lg:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center justify-center z-20 gap-3">
            <div className="h-full w-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div
              className="shrink-0 rounded-full px-3 py-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-white"
              style={{ background: "#0D1B2A", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              VS
            </div>
            <div className="h-full w-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Generic side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] p-8 lg:p-10 flex flex-col gap-7"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "rgba(148,163,184,0.5)" }}
              >
                Generic Bottle
              </span>
              <h3
                className="mt-2 text-[28px] font-bold text-white/50 leading-tight tracking-[-0.03em]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Plain. Forgettable.
                <br />
                Wasted potential.
              </h3>
            </div>

            {/* CSS bottle */}
            <div className="py-4">
              <GenericBottle />
            </div>

            {/* Negatives */}
            <ul className="flex flex-col gap-3">
              {genericNegatives.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.2)" }}
                  >
                    <X className="w-3 h-3" style={{ color: "#EF4444" }} />
                  </div>
                  <span className="text-[14px] leading-snug" style={{ color: "#64748B" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Custom side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative rounded-[32px] p-8 lg:p-10 flex flex-col gap-7"
            style={{
              background: "linear-gradient(135deg, rgba(41,199,246,0.06) 0%, rgba(13,27,42,0.8) 100%)",
              border: "1px solid rgba(41,199,246,0.2)",
              boxShadow: "0 0 60px rgba(41,199,246,0.06)",
            }}
          >
            {/* Top label */}
            <div
              className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold text-white"
              style={{ background: "linear-gradient(135deg, #29C7F6, #5AB9FF)" }}
            >
              Recommended
            </div>

            <div>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "#29C7F6" }}
              >
                Custom Branded Bottle
              </span>
              <h3
                className="mt-2 text-[28px] font-bold text-white leading-tight tracking-[-0.03em]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Premium. Memorable.
                <br />
                Brand every sip.
              </h3>
            </div>

            {/* CSS branded bottle */}
            <div className="py-4">
              <BrandedBottle />
            </div>

            {/* Positives */}
            <ul className="flex flex-col gap-3">
              {customPositives.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(41,199,246,0.12)", border: "1px solid rgba(41,199,246,0.3)" }}
                  >
                    <Check className="w-3 h-3" style={{ color: "#29C7F6" }} />
                  </div>
                  <span className="text-[14px] leading-snug" style={{ color: "#94A3B8" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
