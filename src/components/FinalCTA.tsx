"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: "#07111F" }}
    >
      {/* Glow circles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(41,199,246,0.14) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(90,185,255,0.1) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(41,199,246,0.07) 0%, transparent 70%)",
          animationDelay: "1s",
        }}
      />

      {/* Faint bottle silhouette */}
      <div
        className="absolute right-10 lg:right-32 top-1/2 -translate-y-1/2 w-32 lg:w-48 pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <div
          className="w-full aspect-[1/3] rounded-[30px]"
          style={{
            background: "linear-gradient(180deg, #29C7F6, #5AB9FF)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Heading */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Ready for your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              next delivery?
            </span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg lg:text-xl leading-relaxed max-w-2xl"
            style={{ color: "#94A3B8" }}
          >
            Whether you need water for an office, restaurant, hotel, wedding, or
            conference, Noori Aqua is ready. Reach out today and get a custom
            quote within hours.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                boxShadow: "0 0 30px rgba(41,199,246,0.35)",
              }}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(37,211,102,0.12)",
                border: "1px solid rgba(37,211,102,0.4)",
                color: "#25D366",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust strip */}
          <p className="text-sm tracking-wide" style={{ color: "#475569" }}>
            Fast response •{" "}
            <span style={{ color: "#94A3B8" }}>Same-Day Delivery</span> •{" "}
            <span style={{ color: "#94A3B8" }}>Karachi-Wide</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
