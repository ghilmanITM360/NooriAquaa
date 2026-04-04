"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 5000, suffix: "+", label: "Bottles Delivered" },
  { number: 100, suffix: "+", label: "Businesses Served" },
  { display: "Same-Day", label: "Delivery Available" },
  { display: "Karachi-Wide", label: "Coverage" },
];

function CountUp({
  target,
  suffix,
  display,
  started,
}: {
  target?: number;
  suffix?: string;
  display?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started || !target) return;
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

  if (display) return <span>{display}</span>;
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
    <section ref={ref} style={{ background: "#0D1B2A" }} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex flex-col items-center text-center cursor-default group"
              style={{
                boxShadow: "0 0 0 1px rgba(41,199,246,0)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(41,199,246,0.06) 0%, transparent 70%)",
                }}
              />
              <div
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CountUp
                  target={stat.number}
                  suffix={stat.suffix}
                  display={stat.display}
                  started={inView}
                />
              </div>
              <div
                className="text-sm font-medium tracking-wide"
                style={{ color: "#94A3B8" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
