"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Brand } from "@/data/brands";

interface Props {
  brand: Brand;
  index: number;
}

export default function HeroClientCard({ brand, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.35, ease: "easeOut" } }}
      className="relative overflow-hidden rounded-[32px] cursor-default group"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        minHeight: "220px",
      }}
    >
      {/* Ambient resting glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 80%, ${brand.glowColor}22 0%, transparent 65%)`,
        }}
      />

      {/* Hover glow intensification */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${brand.glowColor}26 0%, transparent 68%)`,
        }}
      />

      {/* Glass highlight line along top edge */}
      <div
        className="absolute top-0 left-8 right-8 h-px pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)`,
        }}
      />

      {/* Shimmer sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
        <div
          className="animate-card-shimmer absolute top-0 left-0 w-[45%] h-full"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.045) 50%, transparent 65%)",
            animationDelay: `${index * 2.2}s`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full p-8 lg:p-10 gap-4">
        {/* Category label */}
        <span
          className="text-[10px] font-bold uppercase tracking-[0.24em]"
          style={{ color: `${brand.glowColor}99` }}
        >
          {brand.category}
        </span>

        {/* Logo with soft glow halo */}
        <div className="relative flex items-center justify-center py-2">
          <div
            className="absolute w-[180px] h-[90px] blur-[50px] opacity-25 group-hover:opacity-45 transition-opacity duration-700"
            style={{ background: brand.glowColor }}
          />
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={brand.image}
              alt={brand.name}
              width={240}
              height={120}
              className={brand.logoClass || "max-h-[88px] w-auto object-contain"}
              priority
            />
          </motion.div>
        </div>

        {/* Descriptor */}
        <p
          className="text-[12px] leading-relaxed max-w-[260px]"
          style={{ color: "rgba(148,163,184,0.48)" }}
        >
          {brand.description}
        </p>

        {/* Accent line */}
        <div
          className="w-10 h-[1.5px] rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${brand.glowColor}55, transparent)`,
          }}
        />
      </div>

      {/* Hover border highlight */}
      <div
        className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ border: `1px solid ${brand.glowColor}30` }}
      />
    </motion.div>
  );
}
