"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { transformStages } from "@/data/transformStages";

function StageBottle({ stage }: { stage: number }) {
  const stages = [
    {
      // 0: Blank bottle
      bodyBg: "rgba(200,220,240,0.12)",
      capColor: "#64748B",
      hasLabel: false,
      hasLogo: false,
      labelStyle: {},
      shine: true,
    },
    {
      // 1: Logo placed
      bodyBg: "rgba(200,220,240,0.18)",
      capColor: "#64748B",
      hasLabel: true,
      hasLogo: true,
      labelStyle: { background: "white" },
      shine: true,
    },
    {
      // 2: Label designed
      bodyBg: "rgba(200,220,240,0.2)",
      capColor: "#29C7F6",
      hasLabel: true,
      hasLogo: true,
      labelStyle: {
        background: "linear-gradient(135deg, #0D1B2A, #1E3755)",
      },
      shine: true,
    },
    {
      // 3: Digital mockup
      bodyBg: "rgba(41,199,246,0.08)",
      capColor: "#29C7F6",
      hasLabel: true,
      hasLogo: true,
      labelStyle: {
        background: "linear-gradient(135deg, #07111F, #0D1B2A)",
        border: "1px solid rgba(41,199,246,0.3)",
      },
      shine: true,
    },
    {
      // 4: In production
      bodyBg: "rgba(41,199,246,0.1)",
      capColor: "#29C7F6",
      hasLabel: true,
      hasLogo: true,
      labelStyle: {
        background: "linear-gradient(135deg, #07111F, #0D1B2A)",
        border: "1px solid rgba(41,199,246,0.4)",
      },
      shine: true,
    },
    {
      // 5: Delivered
      bodyBg: "rgba(41,199,246,0.14)",
      capColor: "#25D366",
      hasLabel: true,
      hasLogo: true,
      labelStyle: {
        background: "linear-gradient(135deg, #07111F, #0D1B2A)",
        border: "1px solid rgba(41,199,246,0.5)",
        boxShadow: "0 4px 20px rgba(41,199,246,0.3)",
      },
      shine: true,
    },
  ];

  const s = stages[stage] ?? stages[0];
  const isMultiple = stage === 4;

  return (
    <div className="flex items-end gap-4 justify-center">
      {isMultiple && (
        <div className="flex flex-col items-center" style={{ width: 46, height: 120, opacity: 0.55, transform: "scale(0.85) translateY(8px)" }}>
          <div style={{ width: 18, height: 10, borderRadius: "3px 3px 0 0", background: s.capColor }} />
          <div style={{ width: 14, height: 8, background: `${s.capColor}60` }} />
          <div
            className="w-full flex-1 relative"
            style={{
              borderRadius: "2px 2px 8px 8px",
              ...s.bodyBg ? { background: s.bodyBg } : {},
              border: "1px solid rgba(200,220,240,0.15)",
            }}
          />
        </div>
      )}

      {/* Main bottle */}
      <div className="flex flex-col items-center relative" style={{ width: 80, height: 220 }}>
        {/* Glow if delivered */}
        {stage === 5 && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 120% 80% at 50% 60%, rgba(41,199,246,0.2) 0%, transparent 70%)",
            }}
          />
        )}
        {/* Cap */}
        <div
          style={{
            width: 34,
            height: 18,
            borderRadius: "5px 5px 0 0",
            background: s.capColor,
            boxShadow: `0 2px 12px ${s.capColor}50`,
            flexShrink: 0,
          }}
        />
        {/* Neck */}
        <div
          style={{
            width: 26,
            height: 16,
            background: `${s.capColor}45`,
            flexShrink: 0,
          }}
        />
        {/* Body */}
        <div
          className="w-full flex-1 relative overflow-hidden"
          style={{
            borderRadius: "4px 4px 14px 14px",
            background: s.bodyBg,
            border: "1px solid rgba(200,230,255,0.18)",
          }}
        >
          {/* Label area */}
          {s.hasLabel && (
            <div
              className="absolute flex flex-col items-center justify-center gap-1.5"
              style={{
                top: "12%",
                left: "9%",
                right: "9%",
                height: "52%",
                borderRadius: 4,
                ...s.labelStyle,
              }}
            >
              {s.hasLogo && (
                <>
                  {/* Logo icon placeholder */}
                  <div
                    style={{
                      width: "60%",
                      height: 3,
                      borderRadius: 2,
                      background: stage >= 2 ? "#29C7F6" : "#64748B",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      color: stage >= 2 ? "#29C7F6" : "#64748B",
                    }}
                  >
                    YOUR BRAND
                  </div>
                  {stage >= 2 && (
                    <div
                      style={{ width: "40%", height: 2, borderRadius: 2, background: "rgba(41,199,246,0.4)" }}
                    />
                  )}
                </>
              )}
            </div>
          )}
          {/* Shine */}
          {s.shine && (
            <div
              className="absolute"
              style={{
                top: 8,
                left: "14%",
                width: 6,
                height: "52%",
                borderRadius: 5,
                background: "rgba(255,255,255,0.25)",
              }}
            />
          )}
          {/* Stage number watermark */}
          {stage === 0 && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                fontSize: 10,
                color: "rgba(200,220,240,0.3)",
                letterSpacing: "0.12em",
                fontWeight: 700,
              }}
            >
              BLANK
            </div>
          )}
        </div>
      </div>

      {isMultiple && (
        <div className="flex flex-col items-center" style={{ width: 46, height: 120, opacity: 0.55, transform: "scale(0.85) translateY(8px)" }}>
          <div style={{ width: 18, height: 10, borderRadius: "3px 3px 0 0", background: s.capColor }} />
          <div style={{ width: 14, height: 8, background: `${s.capColor}60` }} />
          <div
            className="w-full flex-1 relative"
            style={{
              borderRadius: "2px 2px 8px 8px",
              background: s.bodyBg,
              border: "1px solid rgba(200,220,240,0.15)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function TransformationJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveStage((prev) => (prev + 1) % transformStages.length);
  }, []);

  const goTo = (i: number) => {
    setActiveStage(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(advance, 3000);
    return () => clearInterval(interval);
  }, [isPaused, advance]);

  const current = transformStages[activeStage];

  return (
    <section
      style={{ background: "#07111F", position: "relative", overflow: "hidden" }}
      className="py-24 lg:py-32"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(41,199,246,0.08) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(41,199,246,0.06) 0%, transparent 65%)",
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
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#29C7F6" }}>
            The Transformation
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Watch your bottle{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              come alive.
            </span>
          </h2>
          <p className="mt-5 text-lg" style={{ color: "#94A3B8" }}>
            From a blank canvas to a branded bottle — every step in the process.
          </p>
        </motion.div>

        {/* Main interactive section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bottle visual */}
          <div className="flex flex-col items-center gap-10">
            <div
              className="relative w-full max-w-[320px] mx-auto"
              style={{ minHeight: 320 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <StageBottle stage={activeStage} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-full max-w-[320px] mx-auto">
              <div
                className="w-full h-px"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <motion.div
                  className="h-full"
                  style={{ background: "linear-gradient(to right, #29C7F6, #5AB9FF)" }}
                  animate={{ width: `${((activeStage + 1) / transformStages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Right: Stage info */}
          <div className="flex flex-col gap-8">
            {/* Stage count */}
            <div className="flex items-center gap-3">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "#29C7F6" }}
              >
                Step
              </span>
              <motion.span
                key={activeStage}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[60px] font-black leading-none"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, rgba(41,199,246,0.4), rgba(90,185,255,0.2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                0{activeStage + 1}
              </motion.span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-4"
              >
                <h3
                  className="text-[36px] lg:text-[44px] font-bold leading-[0.9] tracking-[-0.04em] text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {current.label}
                </h3>
                <p className="text-[16px] leading-relaxed" style={{ color: "#94A3B8" }}>
                  {current.description}
                </p>
                {current.environment && (
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-xl w-fit"
                    style={{
                      background: "rgba(41,199,246,0.08)",
                      border: "1px solid rgba(41,199,246,0.18)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#29C7F6" }} />
                    <span className="text-[12px] font-semibold" style={{ color: "#29C7F6" }}>
                      {current.environment}
                    </span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Stage dots + nav */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => goTo((activeStage - 1 + transformStages.length) % transformStages.length)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-center gap-2">
                {transformStages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === activeStage ? 24 : 8,
                      height: 8,
                      borderRadius: 999,
                      background: i === activeStage ? "#29C7F6" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo((activeStage + 1) % transformStages.length)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{
                  background: "rgba(41,199,246,0.12)",
                  border: "1px solid rgba(41,199,246,0.25)",
                }}
              >
                <ChevronRight className="w-4 h-4" style={{ color: "#29C7F6" }} />
              </button>
            </div>

            {/* Stage list */}
            <div className="flex flex-col gap-1 pt-2">
              {transformStages.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => goTo(i)}
                  className="flex items-center gap-3 py-2 px-3 rounded-xl text-left transition-all duration-200 hover:bg-white/[0.04]"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
                    style={{
                      background:
                        i < activeStage
                          ? "#29C7F6"
                          : i === activeStage
                          ? "rgba(41,199,246,0.2)"
                          : "rgba(255,255,255,0.05)",
                      border:
                        i === activeStage
                          ? "1px solid rgba(41,199,246,0.5)"
                          : "transparent",
                      color:
                        i < activeStage
                          ? "white"
                          : i === activeStage
                          ? "#29C7F6"
                          : "#475569",
                    }}
                  >
                    {i < activeStage ? "✓" : i + 1}
                  </span>
                  <span
                    className="text-[13px] font-medium transition-colors"
                    style={{
                      color:
                        i === activeStage
                          ? "white"
                          : i < activeStage
                          ? "#94A3B8"
                          : "#475569",
                    }}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
