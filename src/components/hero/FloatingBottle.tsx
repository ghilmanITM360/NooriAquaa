"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HeroBottle } from "./heroBottleData";
import BottleLabel from "./BottleLabel";

interface FloatingBottleProps {
  bottle: HeroBottle;
}

/**
 * FloatingBottle renders a unique CSS-drawn bottle based on its data config.
 *
 * Each bottle has:
 *   - distinctive width / height proportions
 *   - layered glass body (background tint + left highlight + right edge shadow + water fill)
 *   - gradient cap with rim highlight
 *   - gradient neck
 *   - BottleLabel centered on the body
 *   - ground drop shadow
 *   - ambient glow behind (on hover)
 *   - independent floating animation
 *   - hover: scale + glow + tooltip
 */
export default function FloatingBottle({ bottle }: FloatingBottleProps) {
  const [hovered, setHovered] = useState(false);

  const {
    width,
    height,
    capWidthRatio,
    capHeight,
    neckWidthRatio,
    neckHeight,
    shoulderHeight,
    capColor,
    labelTheme,
    displayName,
    size,
    floatAmplitude,
    floatDuration,
    animDelay,
    position,
  } = bottle;

  // Derived dims
  const capW = Math.round(width * capWidthRatio);
  const neckW = Math.round(width * neckWidthRatio);
  // % inset on each side so the shoulder trapezoid top aligns with the neck width
  const shoulderInsetPct = Math.round(((width - neckW) / 2 / width) * 100);
  // body height excludes cap + neck + shoulder
  const bodyH = height - capHeight - neckHeight - shoulderHeight;

  // Label vertical placement — sits in the lower-center third of the body
  const labelTopOffset = Math.round(bodyH * 0.30);

  // Glass stripe width (left highlight)
  const shineW = Math.max(3, Math.round(width * 0.06));
  // Right edge shadow width
  const edgeW = Math.max(4, Math.round(width * 0.09));

  return (
    <motion.div
      className="absolute z-10"
      style={{ cursor: "default", ...(position as React.CSSProperties) }}
      initial={{ opacity: 0, scale: 0.72, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: animDelay,
        duration: 0.65,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Independent floating animation ── */}
      <motion.div
        animate={{ y: [0, -floatAmplitude, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: animDelay * 0.3,
        }}
      >
        {/* ── Hover scale wrapper ── */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ position: "relative", display: "inline-flex" }}
        >
          {/* ── Ambient glow behind bottle (hover) ── */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: -10,
              borderRadius: 20,
              background: `radial-gradient(ellipse at 50% 45%, ${capColor}35 0%, transparent 68%)`,
              filter: "blur(10px)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />

          {/* ───── BOTTLE ───── */}
          <div
            style={{
              width,
              height,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* ── CAP ── */}
            <div
              style={{
                width: capW,
                height: capHeight,
                flexShrink: 0,
                borderRadius: "4px 4px 0 0",
                // Gradient: top face is lighter (light hitting the top)
                background: `linear-gradient(
                  160deg,
                  rgba(255,255,255,0.26) 0%,
                  rgba(255,255,255,0) 48%,
                  rgba(0,0,0,0.18) 100%
                ), ${capColor}`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.4), 0 3px 8px ${capColor}55`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Cap rim highlight */}
              <div
                style={{
                  position: "absolute",
                  top: 2,
                  left: "20%",
                  width: "18%",
                  height: "45%",
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.38)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* ── NECK (tapered transition) ── */}
            <div
              style={{
                width: neckW,
                height: neckHeight,
                flexShrink: 0,
                background: `linear-gradient(180deg, ${capColor}80 0%, ${capColor}28 100%)`,
              }}
            />

            {/* ── SHOULDER — trapezoid from neck width to full body width ── */}
            {/* Creates the distinctive PET water-bottle silhouette */}
            <div
              style={{
                width: "100%",
                height: shoulderHeight,
                flexShrink: 0,
                background: `linear-gradient(180deg, ${capColor}42 0%, ${capColor}18 100%)`,
                clipPath: `polygon(${shoulderInsetPct}% 0%, ${100 - shoulderInsetPct}% 0%, 100% 100%, 0% 100%)`,
              }}
            />

            {/* ── BODY ── */}
            <div
              style={{
                width: "100%",
                flex: 1,
                position: "relative",
                overflow: "hidden",
                borderRadius: "8px 8px 16px 16px",
                // Layered glass: subtle tint from cap accent color
                background: `linear-gradient(
                  160deg,
                  ${capColor}1A 0%,
                  ${capColor}0A 45%,
                  ${capColor}16 100%
                )`,
                border: `1px solid ${capColor}38`,
              }}
            >
              {/* Glass left highlight streak */}
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  left: "12%",
                  width: shineW,
                  height: "54%",
                  borderRadius: 6,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.06) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Right edge shadow (depth) */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: edgeW,
                  height: "100%",
                  background:
                    "linear-gradient(to right, transparent, rgba(0,0,0,0.22))",
                  borderRadius: "0 4px 15px 0",
                  pointerEvents: "none",
                }}
              />

              {/* PET groove 1 — horizontal compression ring ~33% from body top */}
              <div
                style={{
                  position: "absolute",
                  top: "33%",
                  left: 3,
                  right: 3,
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,0,0,0.14) 20%, rgba(0,0,0,0.16) 80%, transparent)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                }}
              />
              {/* PET groove 2 — horizontal compression ring ~60% from body top */}
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: 3,
                  right: 3,
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, rgba(0,0,0,0.14) 20%, rgba(0,0,0,0.16) 80%, transparent)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.06)",
                  pointerEvents: "none",
                }}
              />

              {/* Water fill gradient at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "30%",
                  background: `linear-gradient(0deg, ${capColor}20 0%, transparent 100%)`,
                  borderRadius: "0 0 14px 14px",
                  pointerEvents: "none",
                }}
              />

              {/* ── Label — centered horizontally, 13% from body top ── */}
              <div
                style={{
                  position: "absolute",
                  top: labelTopOffset,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <BottleLabel
                  displayName={displayName}
                  size={size}
                  theme={labelTheme}
                  bottleWidth={width}
                />
              </div>

              {/* Tiny horizontal accent line near bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 8,
                  left: "18%",
                  right: "18%",
                  height: 1,
                  background: `linear-gradient(to right, transparent, ${capColor}40, transparent)`,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* ── Ground drop shadow ── */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: width * 0.78,
                height: 6,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.32)",
                filter: "blur(4px)",
                pointerEvents: "none",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Hover tooltip — positioned below the outer motion.div ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 3 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              zIndex: 50,
              background: "rgba(7,17,31,0.94)",
              border: "1px solid rgba(41,199,246,0.22)",
              borderRadius: 8,
              padding: "4px 10px",
              backdropFilter: "blur(14px)",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#94A3B8",
                letterSpacing: "0.02em",
              }}
            >
              {displayName} · {size}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
