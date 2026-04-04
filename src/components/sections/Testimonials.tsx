"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="#F59E0B">
          <path d="M8 0l2.163 4.382L15 5.09l-3.5 3.41.826 4.813L8 11l-4.326 2.313L4.5 8.5 1 5.09l4.837-.708z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section
      style={{ background: "#F8FAFC" }}
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#29C7F6" }}
          >
            What Clients Say
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em]"
            style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
          >
            Brands that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              trust us.
            </span>
          </h2>
        </motion.div>

        {/* Layout: Featured (left, larger) + two stacked (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured card */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col gap-6 p-8 lg:p-10 rounded-[28px] relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #07111F, #0D1B2A)",
                border: "1px solid rgba(41,199,246,0.12)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-[260px] h-[260px] pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${featured.accentColor}10 0%, transparent 65%)`,
                }}
              />

              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `${featured.accentColor}14`,
                  border: `1px solid ${featured.accentColor}25`,
                }}
              >
                <Quote className="w-4 h-4" style={{ color: featured.accentColor }} />
              </div>

              {/* Stars */}
              <StarRow />

              {/* Quote */}
              <blockquote
                className="text-[20px] lg:text-[24px] font-medium leading-[1.4] text-white tracking-[-0.01em] flex-1"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                "{featured.quote}"
              </blockquote>

              {/* Meta row */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-white/[0.07]">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[14px] font-black"
                    style={{
                      background: `${featured.accentColor}22`,
                      border: `1px solid ${featured.accentColor}30`,
                      color: featured.accentColor,
                    }}
                  >
                    {featured.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white">{featured.name}</div>
                    <div className="text-[12px]" style={{ color: "#64748B" }}>
                      {featured.role} · {featured.company}
                    </div>
                  </div>
                </div>

                {/* Quantity badge */}
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold"
                    style={{
                      background: `${featured.accentColor}14`,
                      border: `1px solid ${featured.accentColor}25`,
                      color: featured.accentColor,
                    }}
                  >
                    {featured.quantity}
                  </span>
                  <span className="text-[11px] font-medium" style={{ color: "#475569" }}>
                    {featured.type}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Two smaller cards */}
          <div className="flex flex-col gap-5">
            {others.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col gap-4 p-6 rounded-[24px] flex-1"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                }}
              >
                {/* Stars */}
                <StarRow />

                {/* Quote */}
                <blockquote
                  className="text-[14px] leading-relaxed flex-1"
                  style={{ color: "#334155" }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Meta */}
                <div className="flex items-center gap-2.5 pt-2 border-t border-black/[0.05]">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[11px] font-black"
                    style={{
                      background: `${t.accentColor}14`,
                      border: `1px solid ${t.accentColor}25`,
                      color: t.accentColor,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-bold truncate" style={{ color: "#1E293B" }}>{t.name}</div>
                    <div className="text-[11px] truncate" style={{ color: "#94A3B8" }}>{t.company}</div>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-1 rounded-full shrink-0"
                    style={{
                      background: `${t.accentColor}10`,
                      border: `1px solid ${t.accentColor}20`,
                      color: t.accentColor,
                    }}
                  >
                    {t.quantity}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
