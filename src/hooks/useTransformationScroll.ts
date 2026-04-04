"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { transformStages } from "@/data/transformStages";

export function useTransformationScroll() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = transformStages.length;

  const goToStage = useCallback((index: number) => {
    setActiveStage(index);
    setIsPlaying(false);
  }, []);

  const nextStage = useCallback(() => {
    setActiveStage((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    intervalRef.current = setInterval(nextStage, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, nextStage]);

  // Resume auto-play 6s after manual interaction
  useEffect(() => {
    if (isPlaying) return;
    const timer = setTimeout(() => setIsPlaying(true), 6000);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return { activeStage, goToStage, total, sectionRef };
}
