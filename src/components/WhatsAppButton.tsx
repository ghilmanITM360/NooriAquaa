"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINKS.general}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[150] flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-200 hover:scale-110"
      style={{
        background: "#25D366",
        boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
      }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-pulse-ring"
        style={{ background: "rgba(37,211,102,0.4)" }}
      />
      <MessageCircle className="w-6 h-6 text-white relative z-10" />
    </a>
  );
}
