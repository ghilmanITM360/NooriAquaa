"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/config";

export default function FinalCTA() {
  return (
    <section
      style={{ background: "#07111F" }}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background mesh glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(41,199,246,0.06) 1px, transparent 0)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(41,199,246,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.16em] mb-6"
            style={{
              background: "rgba(41,199,246,0.1)",
              border: "1px solid rgba(41,199,246,0.22)",
              color: "#29C7F6",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#29C7F6" }} />
            Get Started Today
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[44px] sm:text-[56px] lg:text-[72px] font-bold leading-[0.9] tracking-[-0.045em] text-white mb-6"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Ready to brand{" "}
          <br className="hidden sm:block" />
          <span
            style={{
              background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            every sip?
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[17px] lg:text-[19px] leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: "#94A3B8" }}
        >
          Send us your logo on WhatsApp and get a custom bottle mockup within 24 hours.
          Karachi-wide delivery, bulk orders, no hidden costs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href={WHATSAPP_LINKS.logo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-[16px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,211,102,0.3)]"
            style={{
              background: "#25D366",
              boxShadow: "0 8px 28px rgba(37,211,102,0.22)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Send Your Logo on WhatsApp
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "#94A3B8",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            View Bottle Examples
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-10"
        >
          {[
            "500+ Brands Served",
            "24hr Mockup",
            "Free Revisions",
            "Karachi-Wide",
            "No Min. Order Limit",
          ].map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden lg:block w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
              )}
              <span className="text-[12px] font-semibold" style={{ color: "#475569" }}>
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
