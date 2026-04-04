"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bottleSizes, capColors, labelStyles, customizationChips } from "@/data/bottleOptions";

interface CSSBottleProps {
  heightPx: number;
  widthPx: number;
  capColor: string;
  labelBg?: string;
  popular?: boolean;
  size: string;
}

function CSSBottle({ heightPx, widthPx, capColor, labelBg = "white", popular, size }: CSSBottleProps) {
  const capW = Math.round(widthPx * 0.44);
  const capH = Math.round(heightPx * 0.08);
  const neckW = Math.round(widthPx * 0.33);
  const neckH = Math.round(heightPx * 0.07);

  return (
    <div className="flex flex-col items-center relative" style={{ width: widthPx, height: heightPx }}>
      {popular && (
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.06em] whitespace-nowrap"
          style={{ background: "linear-gradient(135deg, #29C7F6, #5AB9FF)", color: "white" }}
        >
          Most Popular
        </div>
      )}
      {/* Cap */}
      <div
        style={{
          width: capW,
          height: capH,
          borderRadius: "4px 4px 0 0",
          background: capColor,
          flexShrink: 0,
          boxShadow: `0 2px 8px ${capColor}60`,
        }}
      />
      {/* Neck */}
      <div
        style={{
          width: neckW,
          height: neckH,
          background: `${capColor}50`,
          flexShrink: 0,
        }}
      />
      {/* Body */}
      <div
        className="w-full flex-1 relative overflow-hidden"
        style={{
          borderRadius: "3px 3px 10px 10px",
          background: "rgba(200,230,255,0.12)",
          border: "1px solid rgba(200,230,255,0.22)",
        }}
      >
        {/* Label */}
        <div
          className="absolute flex flex-col items-center justify-center gap-0.5"
          style={{
            top: "18%",
            left: "10%",
            right: "10%",
            height: "44%",
            background: labelBg,
            borderRadius: 3,
          }}
        >
          <div
            style={{ width: "55%", height: 4, borderRadius: 2, background: capColor }}
          />
          <span
            style={{
              fontSize: Math.max(6, Math.round(widthPx * 0.1)),
              fontWeight: 800,
              color: "#0B1320",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            YOUR
          </span>
          <span
            style={{
              fontSize: Math.max(6, Math.round(widthPx * 0.1)),
              fontWeight: 800,
              color: "#0B1320",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            BRAND
          </span>
        </div>
        {/* Shine */}
        <div
          className="absolute"
          style={{
            top: 6,
            left: "12%",
            width: Math.max(3, Math.round(widthPx * 0.06)),
            height: "46%",
            borderRadius: 4,
            background: "rgba(255,255,255,0.3)",
          }}
        />
        {/* Size label at bottom */}
        <div
          className="absolute bottom-3 left-0 right-0 flex justify-center"
        >
          <span
            style={{
              fontSize: Math.max(6, Math.round(widthPx * 0.1)),
              fontWeight: 700,
              color: capColor,
              opacity: 0.7,
              letterSpacing: "0.04em",
            }}
          >
            {size}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BottleOptions() {
  const [selectedCap, setSelectedCap] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState(0);

  return (
    <section
      id="bottle-sizes"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(41,199,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#29C7F6" }}>
            Customization Options
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Built exactly{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              how you need it.
            </span>
          </h2>
          <p className="mt-5 text-lg" style={{ color: "#94A3B8" }}>
            Choose your size, cap color, and label style. Every detail is customizable.
          </p>
        </motion.div>

        {/* Bottle sizes */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-8 text-center" style={{ color: "rgba(148,163,184,0.5)" }}>
            Bottle Sizes
          </p>

          <div className="flex items-end justify-center gap-8 lg:gap-16 pb-6">
            {bottleSizes.map((b, i) => (
              <motion.div
                key={b.size}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-4"
              >
                <CSSBottle
                  heightPx={b.heightPx}
                  widthPx={b.widthPx}
                  capColor={capColors[selectedCap].hex}
                  popular={b.popular}
                  size={b.size}
                />
                <div className="text-center mt-2">
                  <p className="text-[13px] font-bold text-white">{b.size}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "#64748B" }}>{b.label}</p>
                  <p className="text-[11px] mt-1" style={{ color: "#475569" }}>{b.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two column: Cap colors + Label styles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {/* Cap colors */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] p-7"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(148,163,184,0.6)" }}>
              Cap Colors
            </p>
            <div className="flex flex-wrap gap-3">
              {capColors.map((cap, i) => (
                <button
                  key={cap.name}
                  onClick={() => setSelectedCap(i)}
                  className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
                >
                  <div
                    className="w-9 h-9 rounded-full transition-all duration-200"
                    style={{
                      background: cap.hex === "#F8FAFC" ? "#E2E8F0" : cap.hex,
                      border:
                        selectedCap === i
                          ? "2px solid #29C7F6"
                          : "2px solid transparent",
                      boxShadow:
                        selectedCap === i
                          ? "0 0 0 3px rgba(41,199,246,0.3)"
                          : "0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  />
                  <span className="text-[10px] font-medium" style={{ color: "#64748B" }}>
                    {cap.name}
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[12px] mt-4" style={{ color: "#475569" }}>
              Custom cap colors available — match your brand palette exactly.
            </p>
          </motion.div>

          {/* Label styles */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] p-7"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(148,163,184,0.6)" }}>
              Label Styles
            </p>
            <div className="flex flex-col gap-3">
              {labelStyles.map((ls, i) => (
                <button
                  key={ls.name}
                  onClick={() => setSelectedLabel(i)}
                  className="flex items-start gap-3 p-3 rounded-2xl text-left transition-all duration-200"
                  style={{
                    background:
                      selectedLabel === i
                        ? "rgba(41,199,246,0.08)"
                        : "rgba(255,255,255,0.02)",
                    border:
                      selectedLabel === i
                        ? "1px solid rgba(41,199,246,0.3)"
                        : "1px solid transparent",
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 shrink-0 mt-0.5 transition-all duration-200"
                    style={{
                      borderColor: selectedLabel === i ? "#29C7F6" : "#334155",
                      background: selectedLabel === i ? "#29C7F6" : "transparent",
                    }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-white">{ls.name}</span>
                      <span
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(41,199,246,0.1)",
                          border: "1px solid rgba(41,199,246,0.2)",
                          color: "#29C7F6",
                        }}
                      >
                        {ls.tag}
                      </span>
                    </div>
                    <p className="text-[12px] mt-0.5" style={{ color: "#64748B" }}>
                      {ls.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Customization chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(148,163,184,0.5)" }}>
            Also Available
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {customizationChips.map((chip) => (
              <span
                key={chip}
                className="px-4 py-2 rounded-full text-[12px] font-semibold"
                style={{
                  background: "rgba(41,199,246,0.06)",
                  border: "1px solid rgba(41,199,246,0.15)",
                  color: "#94A3B8",
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
