"use client";

import React from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";

function IconInstagram({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { SITE_CONFIG, WHATSAPP_LINKS } from "@/data/config";

const footerLinks = {
  Solutions: [
    { label: "Custom Labels", href: "#solutions" },
    { label: "Bottle Sizes", href: "#bottle-sizes" },
    { label: "Bulk Orders", href: "#solutions" },
    { label: "Event Supply", href: "#industries" },
  ],
  Industries: [
    { label: "Restaurants", href: "#industries" },
    { label: "Hotels", href: "#industries" },
    { label: "Conferences", href: "#industries" },
    { label: "Weddings", href: "#industries" },
    { label: "MUN & Schools", href: "#industries" },
  ],
  Company: [
    { label: "Gallery", href: "#gallery" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Standards", href: "#standards" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050D18",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-3 w-fit group">
              <div
                className="relative overflow-hidden rounded-full"
                style={{
                  width: "60px",
                  height: "36px",
                  border: "1px solid rgba(41,199,246,0.15)",
                  background: "rgba(10,20,35,0.75)",
                }}
              >
                <img src="/logo.png" alt="Noori Aqua" className="w-full h-full object-cover" />
              </div>
              <span
                className="text-[18px] font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Noori Aqua
              </span>
            </a>

            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#64748B" }}>
              Karachi's premier custom branded water bottle manufacturer for
              businesses, events, and organizations.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-2.5 mt-1">
              <a
                href={WHATSAPP_LINKS.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-[#25D366]"
                style={{ color: "#94A3B8" }}
              >
                <MessageCircle className="w-4 h-4 shrink-0" style={{ color: "#25D366" }} />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-[#29C7F6]"
                style={{ color: "#94A3B8" }}
              >
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#29C7F6" }} />
                {SITE_CONFIG.email}
              </a>
              <span className="flex items-center gap-2.5 text-sm" style={{ color: "#94A3B8" }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#29C7F6" }} />
                {SITE_CONFIG.location}
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href={SITE_CONFIG.instagram}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" style={{ color: "#94A3B8" }} />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                aria-label="Facebook"
              >
                <IconFacebook className="w-4 h-4" style={{ color: "#94A3B8" }} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4
                className="text-[11px] font-bold text-white tracking-[0.15em] uppercase"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "#64748B" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "#334155" }}>
            © {new Date().getFullYear()} Noori Aqua. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "#334155" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
