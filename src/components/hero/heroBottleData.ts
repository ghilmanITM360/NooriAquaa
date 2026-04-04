// ─── Label Themes ───────────────────────────────────────────────────────────
export type LabelTheme =
  | "gold-dark"
  | "rose-pink"
  | "navy-silver"
  | "navy-gold"
  | "cyan-blue";

export const labelThemes: Record<
  LabelTheme,
  { bg: string; topBar: string; text: string; subText: string; border: string }
> = {
  "gold-dark": {
    bg: "linear-gradient(160deg, #1A0D00 0%, #2A1800 100%)",
    topBar: "#D4A24A",
    text: "#F5D77A",
    subText: "#A07830",
    border: "rgba(212,162,74,0.45)",
  },
  "rose-pink": {
    bg: "linear-gradient(160deg, #280014 0%, #3A001E 100%)",
    topBar: "#EC4899",
    text: "#FBCFE8",
    subText: "#BE185D",
    border: "rgba(236,72,153,0.4)",
  },
  "navy-silver": {
    bg: "linear-gradient(160deg, #090F1D 0%, #10172A 100%)",
    topBar: "#94A3B8",
    text: "#E2E8F0",
    subText: "#64748B",
    border: "rgba(148,163,184,0.32)",
  },
  "navy-gold": {
    bg: "linear-gradient(160deg, #050C19 0%, #0A1424 100%)",
    topBar: "#C9A227",
    text: "#EDD97A",
    subText: "#8B6E1A",
    border: "rgba(201,162,39,0.42)",
  },
  "cyan-blue": {
    bg: "linear-gradient(160deg, #031525 0%, #052035 100%)",
    topBar: "#29C7F6",
    text: "#BAE6FD",
    subText: "#0EA5E9",
    border: "rgba(41,199,246,0.38)",
  },
};

// ─── Bottle Data Interface ───────────────────────────────────────────────────
export interface HeroBottle {
  id: string;
  /** Short display name — max 10 chars. Used on label and tooltip. */
  displayName: string;
  /** E.g. "500ml", "330ml", "1L" */
  size: string;
  /** Tooltip note */
  note: string;
  /** Total bottle width in px (desktop baseline) */
  width: number;
  /** Total bottle height in px (desktop baseline) */
  height: number;
  /** Cap width as fraction of bottle width, e.g. 0.48 */
  capWidthRatio: number;
  /** Cap height in px */
  capHeight: number;
  /** Neck width as fraction of bottle width */
  neckWidthRatio: number;
  /** Neck height in px */
  neckHeight: number;
  /**
   * Shoulder height in px — the trapezoid taper between neck and body.
   * Creates the distinctive PET water-bottle silhouette.
   */
  shoulderHeight: number;
  /** Hex cap color — used for cap, neck tint, body accent, and glow */
  capColor: string;
  /** Label visual theme */
  labelTheme: LabelTheme;
  /**
   * CSS position values for the absolute placement inside the composition area.
   * Use top/bottom + left/right. Avoid negative values.
   */
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  /** Entrance animation delay in seconds */
  animDelay: number;
  /** Float cycle duration in seconds (each satellite has different pace) */
  floatDuration: number;
  /** Peak float bob amplitude in pixels */
  floatAmplitude: number;
}

// ─── Satellite Bottle Config ─────────────────────────────────────────────────
// 5 satellite bottles arranged in a rough pentagon around the center image.
// Each one is deliberately a DIFFERENT shape via width/height/capRatio.
//
// Composition (right-side panel, ~600px × 560px desktop):
//   [Restaurant - short wide]         [Wedding - slim tall]
//         [Office - standard]   ⬤MAIN⬤   [Hotel - luxury narrow]
//                        [School - compact]
//
export const heroBottles: HeroBottle[] = [
  {
    // ── Short wide 500ml — top-left (ratio 0.52 — realistic water bottle)
    id: "restaurant",
    displayName: "Restaurant",
    size: "500ml",
    note: "Short premium 500ml",
    width: 96,
    height: 172,
    capWidthRatio: 0.50,
    capHeight: 14,
    neckWidthRatio: 0.44,
    neckHeight: 9,
    shoulderHeight: 20,
    capColor: "#D4A24A",
    labelTheme: "gold-dark",
    position: { top: "7%", left: "2%" },
    animDelay: 0.7,
    floatDuration: 5.5,
    floatAmplitude: 10,
  },
  {
    // ── Slim 330ml premium — top-right (ratio 0.46 — slim but still reads as water bottle)
    id: "wedding",
    displayName: "Wedding",
    size: "330ml",
    note: "Elegant slim bottle",
    width: 82,
    height: 160,
    capWidthRatio: 0.50,
    capHeight: 13,
    neckWidthRatio: 0.44,
    neckHeight: 8,
    shoulderHeight: 17,
    capColor: "#EC4899",
    labelTheme: "rose-pink",
    position: { top: "2%", right: "4%" },
    animDelay: 0.85,
    floatDuration: 6.5,
    floatAmplitude: 14,
  },
  {
    // ── 1L standard — bottom-left (ratio 0.50 — tall but wide enough)
    id: "office",
    displayName: "Office",
    size: "1L",
    note: "Modern 1L office bottle",
    width: 100,
    height: 200,
    capWidthRatio: 0.50,
    capHeight: 16,
    neckWidthRatio: 0.44,
    neckHeight: 10,
    shoulderHeight: 24,
    capColor: "#64748B",
    labelTheme: "navy-silver",
    position: { bottom: "4%", left: "1%" },
    animDelay: 0.9,
    floatDuration: 7.0,
    floatAmplitude: 8,
  },
  {
    // ── Luxury 330ml — middle-right (ratio 0.46 — reads as water bottle not perfume)
    id: "hotel",
    displayName: "Hotel",
    size: "330ml",
    note: "Luxury narrow bottle",
    width: 84,
    height: 168,
    capWidthRatio: 0.50,
    capHeight: 13,
    neckWidthRatio: 0.44,
    neckHeight: 8,
    shoulderHeight: 18,
    capColor: "#C9A227",
    labelTheme: "navy-gold",
    position: { top: "41%", right: "2%" },
    animDelay: 0.75,
    floatDuration: 6.0,
    floatAmplitude: 12,
  },
  {
    // ── Compact 500ml — bottom-right (ratio 0.54 — short and wide, looks sporty)
    id: "school",
    displayName: "School",
    size: "500ml",
    note: "MUN & School bottle",
    width: 90,
    height: 162,
    capWidthRatio: 0.50,
    capHeight: 13,
    neckWidthRatio: 0.44,
    neckHeight: 8,
    shoulderHeight: 19,
    capColor: "#29C7F6",
    labelTheme: "cyan-blue",
    position: { bottom: "5%", right: "9%" },
    animDelay: 0.95,
    floatDuration: 5.2,
    floatAmplitude: 9,
  },
];
