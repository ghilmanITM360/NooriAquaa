"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

interface CTAButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "whatsapp" | "ghost" | "outline";
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const variants = {
  primary: {
    background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
    color: "white",
    border: "none",
    boxShadow: "0 0 24px rgba(41,199,246,0.35)",
  },
  whatsapp: {
    background: "#25D366",
    color: "white",
    border: "none",
    boxShadow: "0 8px 24px rgba(37,211,102,0.25)",
  },
  ghost: {
    background: "rgba(41,199,246,0.08)",
    color: "#29C7F6",
    border: "1px solid rgba(41,199,246,0.3)",
    boxShadow: "none",
  },
  outline: {
    background: "transparent",
    color: "#F8FAFC",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "none",
  },
};

const sizes = {
  sm: "px-5 py-2.5 text-sm rounded-full",
  md: "px-7 py-3.5 text-sm rounded-full",
  lg: "px-9 py-4 text-base rounded-full",
};

export default function CTAButton({
  href,
  label,
  variant = "primary",
  icon,
  size = "md",
  external = false,
  className = "",
}: CTAButtonProps) {
  const isWhatsApp = variant === "whatsapp";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5 ${sizes[size]} ${className}`}
      style={variants[variant] as React.CSSProperties}
    >
      {isWhatsApp && !icon && <MessageCircle className="w-4 h-4" />}
      {icon && !isWhatsApp && icon}
      {label}
      {!isWhatsApp && !icon && <ArrowRight className="w-4 h-4" />}
    </a>
  );
}
