"use client";

import type { LabelTheme } from "./heroBottleData";
import { labelThemes } from "./heroBottleData";

interface BottleLabelProps {
  displayName: string;
  size: string;
  theme: LabelTheme;
  /** Total bottle body width in px — label takes 70% of this */
  bottleWidth: number;
}

/**
 * BottleLabel renders the printed label that sits on the bottle body.
 *
 * Width is derived from bottleWidth * 0.70 so it always fits without overflow.
 * Font size is computed from labelWidth / displayName.length so text
 * is always readable and never clips or overflows.
 */
export default function BottleLabel({
  displayName,
  size,
  theme,
  bottleWidth,
}: BottleLabelProps) {
  const t = labelThemes[theme];

  // Label width = 80% of bottle width — generous fit for multi-line names
  const labelWidth = Math.round(bottleWidth * 0.8);

  // Font size: largest size at which displayName fits in a single line.
  // Approximation: each uppercase char is ~0.56 × fontSize wide.
  // We add 6px padding on each side → usable width = labelWidth - 12.
  const usableWidth = labelWidth - 12;
  const rawFontSize = Math.floor(usableWidth / (displayName.length * 0.56));
  const nameFontSize = Math.max(5, Math.min(13, rawFontSize));
  const subFontSize = Math.max(4, nameFontSize - 2);

  // Monogram circle size — slightly larger than nameFontSize
  const monoSize = nameFontSize + 4;

  return (
    <div
      style={{
        width: labelWidth,
        borderRadius: 4,
        overflow: "hidden",
        background: t.bg,
        border: `1px solid ${t.border}`,
        // Realistic label shadow + inner highlight
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {/* ── Top accent color bar ── */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${t.topBar}BB, ${t.topBar}FF, ${t.topBar}BB)`,
        }}
      />

      {/* ── Label body ── */}
      <div
        style={{
          paddingTop: 5,
          paddingBottom: 6,
          paddingLeft: 6,
          paddingRight: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Noori Aqua monogram placeholder (Ñ circle) */}
        <div
          style={{
            width: monoSize,
            height: monoSize,
            borderRadius: "50%",
            background: `${t.topBar}22`,
            border: `1px solid ${t.topBar}50`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: nameFontSize - 1,
              fontWeight: 900,
              color: t.topBar,
              lineHeight: 1,
              fontFamily: "'Sora', sans-serif",
            }}
          >
            N
          </span>
        </div>

        {/* Thin separator */}
        <div
          style={{
            width: "55%",
            height: 1,
            background: t.topBar,
            opacity: 0.28,
            borderRadius: 1,
          }}
        />

        {/* ── Display name — NEVER overflows ── */}
        <span
          style={{
            fontSize: nameFontSize,
            fontWeight: 800,
            color: t.text,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            // Allow wrapping to 2 lines so full name is always visible
            whiteSpace: "normal",
            wordBreak: "break-word",
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          {displayName}
        </span>

        {/* ── Size tag ── */}
        <span
          style={{
            fontSize: subFontSize,
            fontWeight: 500,
            color: t.topBar,
            opacity: 0.85,
            display: "block",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {size}
        </span>
      </div>

      {/* ── Bottom shimmer ── */}
      <div
        style={{
          height: 1,
          background: `linear-gradient(to right, transparent, ${t.topBar}28, transparent)`,
        }}
      />
    </div>
  );
}
