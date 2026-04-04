"use client";

import { motion } from "framer-motion";
import { brands } from "@/data/brands";

export default function TrustedBrands() {
  return (
    <section
      className="py-14 lg:py-16 relative overflow-hidden"
      style={{ background: "#07111F", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-bold uppercase tracking-[0.22em] mb-8"
          style={{ color: "rgba(148,163,184,0.45)" }}
        >
          Trusted by businesses, events &amp; organizations across Karachi
        </motion.p>

        {/* Brand strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-4"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cursor-default group transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Monogram mark */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black text-white shrink-0"
                style={{ background: `${brand.color}25`, border: `1px solid ${brand.color}30` }}
              >
                <span style={{ color: brand.color }}>{brand.initial}</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-[12px] font-semibold leading-tight text-white/70 group-hover:text-white/90 transition-colors"
                >
                  {brand.name}
                </span>
                <span className="text-[10px]" style={{ color: "rgba(148,163,184,0.4)" }}>
                  {brand.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
