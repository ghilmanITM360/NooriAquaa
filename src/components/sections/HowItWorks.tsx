"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processSteps } from "@/data/process";
import { WHATSAPP_LINKS } from "@/data/config";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#F8FAFC" }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,19,32,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,19,32,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#29C7F6" }}
          >
            The Process
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em]"
            style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
          >
            From your logo to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your door.
            </span>
          </h2>
          <p className="mt-5 text-lg" style={{ color: "#64748B" }}>
            Four simple steps. From first contact to finished branded bottles in your hands.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — passes through the vertical center of all four badge blocks */}
          <div
            className="hidden lg:block absolute top-[34px] left-[12.5%] right-[12.5%] h-px z-0"
            style={{
              background:
                "linear-gradient(to right, rgba(41,199,246,0.2), rgba(41,199,246,0.7), rgba(41,199,246,0.2))",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col h-full min-h-[320px] rounded-[28px] p-6 lg:p-7"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(15,23,42,0.06)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Connector dot between steps */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-7 -right-4 items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-[#29C7F6]" />
                  </div>
                )}

                {/* Number badge + title in a single row */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 relative z-20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(41,199,246,0.12), rgba(90,185,255,0.08))",
                      border: "1px solid rgba(41,199,246,0.25)",
                    }}
                  >
                    <span
                      className="text-[22px] font-black"
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3
                      className="text-[22px] lg:text-[24px] font-bold leading-[1.05] tracking-[-0.03em]"
                      style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Content grows to fill card */}
                <div className="flex flex-col flex-1">
                  {/* Description */}
                  <p className="text-[14px] leading-relaxed" style={{ color: "#64748B" }}>
                    {step.description}
                  </p>

                  {/* Chips pinned to bottom */}
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: "rgba(41,199,246,0.08)",
                        border: "1px solid rgba(41,199,246,0.2)",
                        color: "#29C7F6",
                      }}
                    >
                      {step.chip}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-medium"
                      style={{ background: "rgba(0,0,0,0.04)", color: "#64748B" }}
                    >
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-14 text-center"
        >
          <a
            href={WHATSAPP_LINKS.logo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#25D366",
              boxShadow: "0 8px 28px rgba(37,211,102,0.22)",
            }}
          >
            Start With Your Logo
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
