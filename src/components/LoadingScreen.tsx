"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets } from "lucide-react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "#07111F" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #29C7F6, #5AB9FF)" }}
              >
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Noori Aqua
              </span>
            </div>

            {/* Progress bar */}
            <div
              className="w-48 h-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #29C7F6, #5AB9FF)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            <p
              className="text-sm tracking-widest uppercase"
              style={{ color: "#94A3B8" }}
            >
              Custom Branded Bottles
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
