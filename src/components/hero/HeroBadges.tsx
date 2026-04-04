"use client";

import { motion } from "framer-motion";

// Reduced from 5 chips to 4 — fewer = more premium
const chips = [
  {
    label: "✦ Your Logo Here",
    style: { top: "15%", left: "25%" },
    animClass: "animate-float-chip-1",
    delay: 1.1,
  },
  {
    label: "24hr Mockup",
    style: { top: "6%", left: "48%" },
    animClass: "animate-float-chip-2",
    delay: 1.2,
  },
  {
    label: "Bulk Orders",
    style: { bottom: "22%", left: "18%" },
    animClass: "animate-float-chip-3",
    delay: 1.25,
  },
  {
    label: "Food-Safe PET",
    style: { top: "68%", right: "20%" },
    animClass: "animate-float-chip-1",
    delay: 1.3,
  },
];

export default function HeroBadges() {
  return (
    <>
      {chips.map((chip) => (
        <div
          key={chip.label}
          className={`absolute z-30 ${chip.animClass}`}
          style={chip.style as React.CSSProperties}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: chip.delay, duration: 0.45 }}
          >
            <div
              className="px-3 py-1.5 rounded-xl text-[11px] font-semibold text-white whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(18px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.28)",
                letterSpacing: "0.01em",
              }}
            >
              {chip.label}
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
}
