"use client";

import { motion } from "framer-motion";
import { Clock, Leaf, RefreshCw } from "lucide-react";

const features = [
  { icon: Clock, label: "Same-Day Delivery" },
  { icon: Leaf, label: "BPA-Free Bottles" },
  { icon: RefreshCw, label: "Recurring Supply Plans" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "#EEF3F6" }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#29C7F6" }}
            >
              About Noori Aqua
            </span>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
            >
              Trusted supply.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Delivered every time.
              </span>
            </h2>

            <p className="text-lg leading-relaxed" style={{ color: "#475569" }}>
              Noori Aqua was founded to solve one of Karachi&apos;s most persistent
              business problems — unreliable water supply. Whether you run a restaurant,
              manage a hotel, or organize large-scale events, we ensure you never face
              a shortage.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#475569" }}>
              Our commitment to timely delivery, hygienic bottling, and flexible
              recurring supply plans has made us the trusted water partner for
              businesses across Karachi — from small offices to large corporate
              gatherings.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3 mt-2">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    background: "rgba(41,199,246,0.1)",
                    border: "1px solid rgba(41,199,246,0.25)",
                    color: "#0B1320",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#29C7F6" }} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[520px] group"
          >
            {/* Background glow */}
            <div
              className="absolute -inset-4 rounded-[40px] opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(41,199,246,0.3) 0%, transparent 70%)",
              }}
            />

            {/* Main visual container */}
            <div
              className="w-full h-full rounded-[32px] overflow-hidden relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #0D1B2A 0%, #10273D 50%, #07111F 100%)",
                border: "1px solid rgba(41,199,246,0.15)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.3)",
              }}
            >
              {/* Decorative bottles grid */}
              <div className="flex gap-6 items-end pb-8">
                {[
                  { h: "h-48", opacity: "opacity-60" },
                  { h: "h-64", opacity: "opacity-90" },
                  { h: "h-56", opacity: "opacity-70" },
                  { h: "h-40", opacity: "opacity-50" },
                ].map((b, i) => (
                  <div
                    key={i}
                    className={`w-14 ${b.h} ${b.opacity} rounded-[20px] relative overflow-hidden`}
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(41,199,246,0.3) 0%, rgba(14,30,50,0.9) 50%, rgba(41,199,246,0.15) 100%)",
                      border: "1px solid rgba(41,199,246,0.25)",
                    }}
                  >
                    <div
                      className="absolute top-3 left-3 w-2 h-8 rounded-full opacity-30"
                      style={{
                        background:
                          "linear-gradient(180deg, white, transparent)",
                        transform: "rotate(-10deg)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 flex items-center justify-center">
                      <span
                        className="text-xs font-bold text-center"
                        style={{ color: "#29C7F6" }}
                      >
                        19L
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Label overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    background: "rgba(41,199,246,0.1)",
                    border: "1px solid rgba(41,199,246,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: "#29C7F6" }}
                    />
                    <span className="text-sm font-semibold text-white">
                      Premium 19L Purified Water Bottles
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
