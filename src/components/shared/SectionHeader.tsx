"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${centered ? "text-center mx-auto" : ""} mb-16 max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ color: "#29C7F6" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold leading-[0.95] tracking-[-0.04em]"
        style={{
          fontFamily: "'Sora', sans-serif",
          color: dark ? "#0B1320" : "#F8FAFC",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-5 text-lg leading-relaxed max-w-2xl mx-auto"
          style={{ color: dark ? "#475569" : "#94A3B8" }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
