"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#07111F" }}
    >
      {/* Background glow circles */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(41,199,246,0.12) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(90,185,255,0.08) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <span
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(41,199,246,0.12)",
                  border: "1px solid rgba(41,199,246,0.25)",
                  color: "#29C7F6",
                }}
              >
                ✦ Premium Water Delivery • Karachi
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Pure Water.{" "}
              <br className="hidden sm:block" />
              Delivered{" "}
              <span className="gradient-text">Without Delay.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "#94A3B8" }}
            >
              Noori Aqua provides premium water bottle delivery across Karachi for
              homes, restaurants, offices, hotels, events, conferences, and
              educational tournaments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  boxShadow: "0 0 20px rgba(41,199,246,0.3)",
                }}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.4)",
                  color: "#25D366",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              {["Same Day Delivery", "Karachi-Wide", "Trusted by Businesses"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: "#94A3B8" }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: "#29C7F6" }} />
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* RIGHT: Bottle + Chips */}
          <div className="relative flex items-center justify-center h-[480px] lg:h-[600px]">
            {/* Glow behind bottle */}
            <div
              className="absolute inset-0 rounded-[40px] animate-glow-pulse"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(41,199,246,0.2) 0%, transparent 65%)",
              }}
            />

            {/* Bottle container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="animate-float relative z-10"
            >
              {/* Stylized 19L Bottle */}
              <div className="flex flex-col items-center">
                {/* Cap */}
                <div
                  className="w-16 h-8 rounded-t-full mb-0"
                  style={{ background: "linear-gradient(180deg, #29C7F6, #1a9bc4)" }}
                />
                {/* Neck */}
                <div
                  className="w-10 h-12"
                  style={{ background: "linear-gradient(180deg, #1a9bc4, #0e6e8a)" }}
                />
                {/* Body */}
                <div
                  className="w-48 h-64 rounded-[30px] relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(41,199,246,0.25) 0%, rgba(14,30,50,0.8) 50%, rgba(41,199,246,0.15) 100%)",
                    border: "2px solid rgba(41,199,246,0.35)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      "0 0 40px rgba(41,199,246,0.2), inset 0 0 30px rgba(41,199,246,0.05)",
                  }}
                >
                  {/* Water fill effect */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-3/4 rounded-b-[28px]"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(41,199,246,0.15) 0%, rgba(41,199,246,0.4) 100%)",
                    }}
                  />
                  {/* Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "#29C7F6", fontFamily: "'Sora', sans-serif" }}
                      >
                        19L
                      </div>
                      <div className="text-xs font-semibold text-white tracking-widest uppercase">
                        Noori Aqua
                      </div>
                      <div className="text-xs mt-1" style={{ color: "#94A3B8" }}>
                        Pure Water
                      </div>
                    </div>
                  </div>
                  {/* Shine */}
                  <div
                    className="absolute top-4 left-4 w-8 h-16 rounded-full opacity-20"
                    style={{
                      background: "linear-gradient(180deg, white 0%, transparent 100%)",
                      transform: "rotate(-15deg)",
                    }}
                  />
                </div>
                {/* Base */}
                <div
                  className="w-40 h-6 rounded-b-[20px]"
                  style={{
                    background: "linear-gradient(180deg, rgba(41,199,246,0.2), rgba(41,199,246,0.1))",
                    border: "1px solid rgba(41,199,246,0.2)",
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Chips */}
            {/* Chip 1 - Same Day */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-16 left-0 animate-float-chip-1"
            >
              <div
                className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-white flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#29C7F6]" />
                Same Day
              </div>
            </motion.div>

            {/* Chip 2 - 24/7 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-1/3 right-0 animate-float-chip-2"
            >
              <div
                className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-white flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                24/7 Supply
              </div>
            </motion.div>

            {/* Chip 3 - Deliveries */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-24 left-4 animate-float-chip-3"
            >
              <div
                className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-white flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#5AB9FF]" />
                100+ Deliveries
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
