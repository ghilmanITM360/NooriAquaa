"use client";

import { type CSSProperties, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { transformStages } from "@/data/transformStages";

function StageBottle({ stage }: { stage: number }) {
  const BOTTLE_W = 96;
  const CAP_H = 18;
  const NECK_H = 14;
  const BODY_H = 173; // 205 total − 18 cap − 14 neck

  const stageCfg = [
    { bodyBg: "rgba(180,215,240,0.09)", capColor: "#64748B", hasLabel: false, capGlow: false, glowColor: "" },
    { bodyBg: "rgba(190,218,240,0.13)", capColor: "#64748B", hasLabel: true,  capGlow: false, glowColor: "" },
    { bodyBg: "rgba(200,220,240,0.16)", capColor: "#29C7F6", hasLabel: true,  capGlow: false, glowColor: "" },
    { bodyBg: "rgba(41,199,246,0.08)",  capColor: "#29C7F6", hasLabel: true,  capGlow: true,  glowColor: "rgba(41,199,246,0.18)" },
    { bodyBg: "rgba(41,199,246,0.10)",  capColor: "#29C7F6", hasLabel: true,  capGlow: true,  glowColor: "rgba(41,199,246,0.14)" },
    { bodyBg: "rgba(41,199,246,0.14)",  capColor: "#25D366", hasLabel: true,  capGlow: true,  glowColor: "rgba(41,199,246,0.30)" },
  ];

  const cfg = stageCfg[stage] ?? stageCfg[0];
  const isProduction = stage === 4;

  // Label position per stage — all within the body element, safe from the neck
  const getLabelPos = () => {
    if (stage === 1) return { top: "30%", left: "26%", right: "26%", height: "34%" };
    if (stage === 2) return { top: "26%", left: "16%", right: "16%", height: "48%" };
    return { top: "24%", left: "14%", right: "14%", height: "52%" };
  };

  // Label visual styles per stage
  const getLabelStyle = (): CSSProperties => {
    if (stage === 1) return { background: "rgba(255,255,255,0.96)", borderRadius: 4 };
    if (stage === 2) return { background: "linear-gradient(160deg, #0D1B2A, #1E3755)", borderRadius: 5, border: "1px solid rgba(41,199,246,0.20)" };
    if (stage === 3) return { background: "linear-gradient(160deg, #07111F, #0D1B2A)", borderRadius: 6, border: "1px solid rgba(41,199,246,0.40)", boxShadow: "0 2px 18px rgba(41,199,246,0.20)" };
    if (stage === 4) return { background: "linear-gradient(160deg, #07111F, #0D1B2A)", borderRadius: 6, border: "1px solid rgba(41,199,246,0.40)", boxShadow: "0 2px 18px rgba(41,199,246,0.20)" };
    return { background: "linear-gradient(160deg, #07111F, #0D1B2A)", borderRadius: 6, border: "1px solid rgba(41,199,246,0.60)", boxShadow: "0 4px 28px rgba(41,199,246,0.38)" };
  };

  // Label content per stage — progressively richer
  const getLabelContent = () => {
    // Stage 02: simple white sticker
    if (stage === 1) {
      return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.10em", color: "#0D1B2A" }}>NOORI AQUA</div>
          <div style={{ width: 28, height: 1, background: "#94A3B8", borderRadius: 1 }} />
          <div style={{ fontSize: 6.5, letterSpacing: "0.14em", color: "#64748B", textTransform: "uppercase" }}>Custom Bottles</div>
        </div>
      );
    }
    // Stage 03: full dark label with brand strip
    if (stage === 2) {
      return (
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: 3 }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg, #29C7F6, #5AB9FF)", borderRadius: "5px 5px 0 0" }} />
          <div style={{ width: 30, height: 1.5, borderRadius: 1, background: "#29C7F6" }} />
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: "0.12em", color: "#29C7F6" }}>NOORI AQUA</div>
          <div style={{ width: 22, height: 0.75, borderRadius: 1, background: "rgba(41,199,246,0.35)" }} />
          <div style={{ fontSize: 6, letterSpacing: "0.16em", color: "#94A3B8", textTransform: "uppercase" }}>Custom Bottles</div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(41,199,246,0.25)", borderRadius: "0 0 5px 5px" }} />
        </div>
      );
    }
    // Stages 04–06: progressively more polished
    const brandOpacity = stage === 3 ? 0.75 : stage === 4 ? 0.88 : 1.0;
    return (
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", gap: 2 }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, rgba(41,199,246,${brandOpacity}), rgba(90,185,255,${brandOpacity}))`, borderRadius: "6px 6px 0 0" }} />
        <div style={{ width: 32, height: 1.5, borderRadius: 1, background: `rgba(41,199,246,${brandOpacity})` }} />
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: "0.12em", color: `rgba(41,199,246,${brandOpacity})` }}>NOORI AQUA</div>
        <div style={{ width: "65%", height: 0.75, background: `rgba(41,199,246,${brandOpacity * 0.4})`, borderRadius: 1 }} />
        <div style={{ fontSize: 6, letterSpacing: "0.16em", color: "#94A3B8", textTransform: "uppercase" }}>Pure Water</div>
        <div style={{ fontSize: 5.5, color: "#475569", letterSpacing: "0.08em" }}>500ml</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: `rgba(41,199,246,${brandOpacity * 0.22})`, borderRadius: "0 0 6px 6px" }} />
      </div>
    );
  };

  // Smaller side bottle used in "In Production" stage
  const sideBottle = (dy: number, opacity: number) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 58, opacity, transform: `translateY(${dy}px)` }}>
      <div style={{ width: 24, height: 11, borderRadius: "3px 3px 0 0", background: cfg.capColor, flexShrink: 0, boxShadow: `0 1px 8px ${cfg.capColor}50` }} />
      <div style={{ width: 18, height: 8, background: `${cfg.capColor}40`, flexShrink: 0 }} />
      <div style={{ width: "100%", position: "relative", overflow: "hidden", height: 110, borderRadius: "5px 5px 12px 12px", background: cfg.bodyBg, border: "1px solid rgba(200,230,255,0.14)" }}>
        {/* Side bottle label */}
        <div style={{ position: "absolute", top: "26%", left: "14%", right: "14%", height: "46%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(160deg, #07111F, #0D1B2A)", borderRadius: 3, border: "1px solid rgba(41,199,246,0.28)" }}>
          <div style={{ fontSize: 5.5, fontWeight: 900, letterSpacing: "0.10em", color: "rgba(41,199,246,0.80)" }}>NOORI AQUA</div>
          <div style={{ width: 18, height: 0.75, background: "rgba(41,199,246,0.25)", borderRadius: 1, marginTop: 2 }} />
        </div>
        {/* Left glass highlight */}
        <div style={{ position: "absolute", left: "12%", top: "8%", height: "55%", width: 5, borderRadius: 999, background: "rgba(255,255,255,0.15)" }} />
        {/* Right shadow */}
        <div style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "16%", background: "rgba(0,0,0,0.09)" }} />
      </div>
    </div>
  );

  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 12, justifyContent: "center" }}>
      {isProduction && sideBottle(10, 0.48)}

      {/* Main bottle */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", width: BOTTLE_W }}>
        {/* Stage glow */}
        {cfg.glowColor && (
          <div style={{ position: "absolute", top: -24, bottom: -24, left: -30, right: -30, background: `radial-gradient(ellipse 70% 60% at 50% 58%, ${cfg.glowColor} 0%, transparent 68%)`, pointerEvents: "none", zIndex: 0 }} />
        )}
        {/* Cap */}
        <div style={{ width: 40, height: CAP_H, borderRadius: "5px 5px 0 0", background: cfg.capColor, boxShadow: cfg.capGlow ? `0 2px 16px ${cfg.capColor}60` : "0 1px 4px rgba(0,0,0,0.3)", flexShrink: 0, position: "relative", zIndex: 2 }} />
        {/* Neck */}
        <div style={{ width: 30, height: NECK_H, background: `${cfg.capColor}42`, flexShrink: 0, position: "relative", zIndex: 2 }} />
        {/* Body */}
        <div style={{ width: BOTTLE_W, height: BODY_H, borderRadius: "8px 8px 18px 18px", background: cfg.bodyBg, border: "1px solid rgba(200,230,255,0.18)", position: "relative", overflow: "hidden", zIndex: 1 }}>
          {/* Label */}
          {cfg.hasLabel && (
            <div style={{ position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", ...getLabelPos(), ...getLabelStyle() }}>
              {getLabelContent()}
            </div>
          )}
          {/* Left glass highlight */}
          <div style={{ position: "absolute", left: "12%", top: "8%", height: "58%", width: 7, borderRadius: 999, background: "rgba(255,255,255,0.20)" }} />
          {/* Right shadow */}
          <div style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "18%", background: "rgba(0,0,0,0.10)" }} />
          {/* Bottom reflection */}
          <div style={{ position: "absolute", bottom: 0, left: "18%", right: "18%", height: 12, borderRadius: 999, background: "rgba(100,220,255,0.10)", filter: "blur(6px)" }} />
          {/* Delivered green floor glow */}
          {stage === 5 && (
            <div style={{ position: "absolute", bottom: 0, left: "8%", right: "8%", height: 22, borderRadius: 999, background: "rgba(37,211,102,0.12)", filter: "blur(8px)" }} />
          )}
        </div>
      </div>

      {isProduction && sideBottle(-8, 0.48)}
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
