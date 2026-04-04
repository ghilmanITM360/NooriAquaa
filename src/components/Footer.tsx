"use client";

import { Droplets } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Home Delivery", href: "#services" },
    { label: "Office Supply", href: "#services" },
    { label: "Event Supply", href: "#services" },
    { label: "Business Delivery", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Standards", href: "#standards" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#07111F", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #29C7F6, #5AB9FF)" }}
              >
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Noori Aqua
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#94A3B8" }}>
              Premium water delivery across Karachi. Trusted by businesses,
              restaurants, hotels, and events.
            </p>
            {/* Social-like badges */}
            <div className="flex gap-3 mt-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#25D366" }}
              />
              <span className="text-xs" style={{ color: "#94A3B8" }}>
                Available on WhatsApp
              </span>
            </div>
          </div>

          {/* Col 2 & 3: Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4
                className="text-sm font-bold text-white tracking-wider uppercase"
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
                      style={{ color: "#94A3B8" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-sm font-bold text-white tracking-wider uppercase"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Phone", value: "+92 300 123 4567", href: "tel:+923001234567" },
                { label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/923001234567" },
                { label: "Email", value: "info@nooriaqua.pk", href: "mailto:info@nooriaqua.pk" },
                { label: "Location", value: "Karachi, Pakistan", href: null },
              ].map((item) => (
                <li key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-xs" style={{ color: "#475569" }}>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors duration-200 hover:text-[#29C7F6]"
                      style={{ color: "#94A3B8" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "#94A3B8" }}>
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#475569" }}>
            © 2024 Noori Aqua. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "#475569" }}
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
