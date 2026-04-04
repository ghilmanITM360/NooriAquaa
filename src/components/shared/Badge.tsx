"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "green" | "amber" | "neutral";
  className?: string;
}

const variants = {
  cyan: {
    background: "rgba(41,199,246,0.1)",
    border: "1px solid rgba(41,199,246,0.25)",
    color: "#29C7F6",
  },
  green: {
    background: "rgba(16,185,129,0.1)",
    border: "1px solid rgba(16,185,129,0.3)",
    color: "#10B981",
  },
  amber: {
    background: "rgba(245,158,11,0.1)",
    border: "1px solid rgba(245,158,11,0.3)",
    color: "#F59E0B",
  },
  neutral: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#94A3B8",
  },
};

export default function Badge({
  children,
  variant = "cyan",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.06em] uppercase ${className}`}
      style={variants[variant]}
    >
      {children}
    </span>
  );
}
