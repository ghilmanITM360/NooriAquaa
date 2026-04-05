"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/data/brands";

interface Props {
  brand: Brand;
  index: number;
}

export default function BrandTile({ brand, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.45 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative overflow-hidden rounded-2xl flex items-center justify-center cursor-default group"
      style={{
        height: "120px",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Hover ambient glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${brand.glowColor}18 0%, transparent 70%)`,
        }}
      />

      {/* Logo + type label */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 flex flex-col items-center gap-2.5 px-3"
      >
        <Image
          src={brand.image}
          alt={brand.name}
          width={130}
          height={65}
          className={brand.logoClass || "max-h-[54px] lg:max-h-[64px] w-auto object-contain"}
        />
        <span
          className="text-[9px] font-bold uppercase tracking-[0.2em] text-center leading-tight"
          style={{ color: "rgba(148,163,184,0.45)" }}
        >
          {brand.type}
        </span>
      </motion.div>

      {/* Hover border highlight */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ border: `1px solid ${brand.glowColor}25` }}
      />
    </motion.div>
  );
}
