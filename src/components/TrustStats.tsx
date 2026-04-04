"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  eyebrow: string;
  value: string;
  numericTarget?: number;
  numericSuffix?: string;
  description: string;
}

const stats: Stat[] = [
  {
    eyebrow: "TRUSTED DELIVERY",
    value: "5,000+",
    numericTarget: 5000,
    numericSuffix: "+",
    description: "Bottles delivered across Karachi",
  },
  {
    eyebrow: "ACTIVE CLIENTS",
    value: "100+",
    numericTarget: 100,
    numericSuffix: "+",
    description: "Restaurants, hotels & offices served",
  },
  {
    eyebrow: "FAST SERVICE",
    value: "Same-Day",
    description: "Average response & turnaround time",
  },
  {
    eyebrow: "FULL COVERAGE",
    value: "Karachi-Wide",
    description: "Coverage across all major areas",
  },
];

const industryPills = ["Restaurants", "Hotels", "Corporate Offices", "MUN Events"];
const statusPills = ["Lab Tested", "Food Safe", "Reliable"];

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section style={{ background: "#07111F" }} className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[34px] border border-white/8 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          style={{
            background:
              "linear-gradient(160deg, #0a1c2e 0%, #071523 45%, #091a2b 100%)",
          }}
        >
          {/* Ambient top glow */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[300px] w-[600px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, #29C7F6 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`group relative flex flex-col justify-between p-6 lg:p-8 cursor-default transition-colors duration-300 hover:bg-white/[0.025]${
                  i === 0 ? " border-r border-white/8" : ""
                }${i === 1 ? " lg:border-r border-white/8" : ""}${
                  i === 2
                    ? " border-r border-white/8 border-t border-white/8 lg:border-t-0"
                    : ""
                }${i === 3 ? " border-t border-white/8 lg:border-t-0" : ""}`}
              >
                {/* Hover radial glow from top */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(41,199,246,0.12) 0%, transparent 100%)",
                  }}
                />

                {/* Hover divider glow on right edge */}
                {i < 3 && (
                  <div
                    className="pointer-events-none absolute right-0 top-[15%] h-[70%] w-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent, rgba(41,199,246,0.5), transparent)",
                    }}
                  />
                )}

                <div className="relative transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Eyebrow */}
                  <p
                    className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: "rgba(41,199,246,0.6)" }}
                  >
                    {stat.eyebrow}
                  </p>

                  {/* Main stat value */}
                  <div
                    className={`font-bold tracking-[-0.04em] leading-[0.9] ${
                      i === 0
                        ? "text-[44px] lg:text-[56px]"
                        : i === 1
                        ? "text-[38px] lg:text-[48px]"
                        : i === 2
                        ? "text-[32px] lg:text-[40px]"
                        : "text-[28px] lg:text-[36px]"
                    }`}
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      background: "linear-gradient(135deg, #29C7F6 0%, #5AB9FF 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.numericTarget !== undefined ? (
                      <CountUp
                        target={stat.numericTarget}
                        suffix={stat.numericSuffix ?? ""}
                        started={inView}
                      />
                    ) : i === 3 ? (
                      <>
                        Karachi-
                        <br />
                        Wide
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className="mt-3 max-w-[200px] text-[13px] lg:text-[14px] leading-[1.65]"
                    style={{ color: "#94A3B8" }}
                  >
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal divider */}
          <div className="border-t border-white/8" />

          {/* Proof Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-6 lg:px-8 py-4 lg:py-5">
            <span
              className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: "rgba(148,163,184,0.55)" }}
            >
              TRUSTED BY
            </span>

            {industryPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-400"
              >
                {pill}
              </span>
            ))}

            <div className="ml-auto flex flex-wrap justify-end gap-2">
              {statusPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3 py-1 text-[11px] font-semibold text-emerald-400/80"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
