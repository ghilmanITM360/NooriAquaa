"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Noori Aqua has become our permanent supplier. Deliveries always arrive on time and we never worry about running out during busy days. Their service is genuinely world-class for Karachi.",
    name: "Ahmed Hassan",
    role: "Restaurant Manager",
    company: "The Grand Café, Karachi",
    initials: "AH",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Our office has never been without water since we switched to Noori Aqua. The recurring schedule just works — no follow-ups needed.",
    name: "Sarah K.",
    role: "Operations Manager",
    company: "TechCorp Karachi",
    initials: "SK",
    rating: 5,
  },
  {
    quote:
      "They delivered for our entire conference. 200 bottles, perfectly on time, with zero issues. Will use again for every event.",
    name: "Zara Malik",
    role: "Event Coordinator",
    company: "KHI Events",
    initials: "ZM",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          style={{ color: "#F59E0B", fill: "#F59E0B" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-24 lg:py-32" style={{ background: "#EEF3F6" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
          >
            Trusted by businesses{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              across Karachi.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Real businesses. Real results. Real water, on time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 rounded-[32px] p-8 lg:p-10 flex flex-col gap-6"
            style={{
              background: "linear-gradient(135deg, #07111F 0%, #0D1B2A 100%)",
              border: "1px solid rgba(41,199,246,0.15)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <StarRating count={featured.rating} />

            <p
              className="text-xl lg:text-2xl leading-relaxed font-medium text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 mt-auto">
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                }}
              >
                {featured.initials}
              </div>
              <div>
                <div className="font-semibold text-white">{featured.name}</div>
                <div className="text-sm" style={{ color: "#94A3B8" }}>
                  {featured.role}, {featured.company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller cards */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex-1 rounded-[28px] p-6 flex flex-col gap-4 bg-white"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <StarRating count={t.rating} />

                <p
                  className="text-base leading-relaxed flex-1"
                  style={{ color: "#475569" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "#0B1320" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "#94A3B8" }}>
                      {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
