"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/types/gallery";

const LAYOUT_TRANSITION = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

interface GalleryCardProps {
  item: GalleryItem;
  isExpanded?: boolean;
  interactive?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function GalleryCard({
  item,
  isExpanded = false,
  interactive = true,
  onHoverStart,
  onHoverEnd,
}: GalleryCardProps) {
  return (
    <motion.div
      layout
      onHoverStart={interactive ? onHoverStart : undefined}
      onHoverEnd={interactive ? onHoverEnd : undefined}
      transition={{ layout: LAYOUT_TRANSITION }}
      className={cn(
        "group relative h-full overflow-hidden rounded-[26px]",
        "border border-white/8 bg-[#07111F]/60 backdrop-blur-md",
        "transition-all duration-700",
        isExpanded
          ? "shadow-[0_30px_80px_rgba(0,0,0,0.45)] border-white/20"
          : "hover:border-white/16"
      )}
    >
      {/* Full-bleed image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 1280px) 100vw, (max-width: 1536px) 50vw, 25vw"
        className={cn(
          "object-cover transition-all duration-700",
          isExpanded ? "scale-[1.06]" : "group-hover:scale-[1.03]"
        )}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/92 via-[#07111F]/35 to-transparent" />

      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at bottom, ${item.accent}22 0%, transparent 65%)`,
        }}
      />

      {/* Content block */}
      <div
        className={cn(
          "absolute bottom-0 left-0 z-10",
          isExpanded ? "p-7 lg:p-8" : "p-5 lg:p-6"
        )}
      >
        <span
          className="mb-3 inline-flex rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md"
          style={{
            color: item.accent,
            background: `${item.accent}14`,
          }}
        >
          {item.category}
        </span>

        <h3
          className={cn(
            "font-bold leading-[0.95] tracking-[-0.03em] text-white transition-all duration-500",
            isExpanded
              ? "text-[30px] lg:text-[38px]"
              : "text-[18px] lg:text-[22px]"
          )}
        >
          {item.title}
        </h3>

        <p
          className={cn(
            "mt-3 max-w-[90%] text-[13px] leading-relaxed text-slate-400 transition-all duration-500",
            isExpanded ? "opacity-100" : "opacity-80"
          )}
        >
          {item.description}
        </p>

        <div
          className="mt-4 h-[2px] rounded-full transition-all duration-500"
          style={{
            width: isExpanded ? "64px" : "40px",
            background: `linear-gradient(to right, ${item.accent}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}
