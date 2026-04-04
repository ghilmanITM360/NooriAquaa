"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckSquare, Truck, RotateCcw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us what you need",
    description:
      "Let us know the number of bottles, type of location, and your preferred delivery time.",
    chips: ["Quick & Easy", "No Commitment"],
  },
  {
    number: "02",
    icon: CheckSquare,
    title: "We confirm your delivery",
    description:
      "We review your request and confirm quantity, timing, and schedule within a few hours.",
    chips: ["Fast Confirmation", "Flexible Timing"],
  },
  {
    number: "03",
    icon: Truck,
    title: "We deliver across Karachi",
    description:
      "Our team delivers directly to your home, office, event venue, or business location.",
    chips: ["Same Day", "Citywide"],
  },
  {
    number: "04",
    icon: RotateCcw,
    title: "We continue recurring supply",
    description:
      "For ongoing clients, we set up weekly or monthly schedules with long-term contract options.",
    chips: ["Weekly Supply", "Long-Term Plans"],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#07111F" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(41,199,246,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Simple process.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fast delivery.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            From your first call to recurring supply — we make it seamless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{ background: "rgba(41,199,246,0.15)" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col gap-4 relative"
                >
                  {/* Step number + icon */}
                  <div className="flex lg:flex-col gap-4 items-start">
                    <div className="relative">
                      {/* Number circle */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                        style={{
                          background: "rgba(41,199,246,0.08)",
                          border: "1px solid rgba(41,199,246,0.2)",
                        }}
                      >
                        <span
                          className="text-2xl font-bold"
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
                    </div>
                    <div className="lg:hidden flex flex-col gap-1">
                      <h3
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center hidden lg:flex"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#29C7F6" }} />
                  </div>

                  {/* Title (desktop) */}
                  <h3
                    className="text-xl font-bold text-white hidden lg:block"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#94A3B8" }}
                  >
                    {step.description}
                  </p>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {step.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: "rgba(41,199,246,0.08)",
                          border: "1px solid rgba(41,199,246,0.15)",
                          color: "#29C7F6",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
