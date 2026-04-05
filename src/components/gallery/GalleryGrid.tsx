"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { galleryItems } from "@/data/gallery";
import GalleryCard from "./GalleryCard";

const LAYOUT_TRANSITION = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

export default function GalleryGrid() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <>
      {/* Desktop: 4×2 interactive grid — 220px base row height per spec */}
      <div className="hidden xl:grid grid-cols-4 auto-rows-[220px] gap-5">
        {galleryItems.map((item) => {
          const isExpanded = activeCard === item.id && item.expandable;
          return (
            <motion.div
              key={item.id}
              layout
              transition={{ layout: LAYOUT_TRANSITION }}
              className={cn(
                "relative",
                isExpanded ? "col-span-2 row-span-2 z-20" : "col-span-1 row-span-1"
              )}
            >
              <GalleryCard
                item={item}
                isExpanded={isExpanded}
                interactive
                onHoverStart={() => item.expandable && setActiveCard(item.id)}
                onHoverEnd={() => setActiveCard(null)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / tablet: simple 2-column grid, no expand */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:hidden">
        {galleryItems.map((item) => (
          <div key={item.id} className="h-[320px]">
            <GalleryCard item={item} interactive={false} />
          </div>
        ))}
      </div>
    </>
  );
}
