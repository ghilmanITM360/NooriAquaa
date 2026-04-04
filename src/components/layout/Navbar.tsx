"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/data/config";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Bottle Sizes", href: "#bottle-sizes" },
  { label: "Industries", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={
          scrolled
            ? {
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              <div
                className="relative overflow-hidden rounded-full transition-all duration-300 group-hover:scale-105"
                style={{
                  width: "66px",
                  height: "40px",
                  border: scrolled
                    ? "1px solid rgba(41,199,246,0.2)"
                    : "1px solid rgba(41,199,246,0.14)",
                  background: scrolled ? "white" : "rgba(10,20,35,0.75)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Noori Aqua"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-[19px] font-bold tracking-[-0.03em] transition-colors duration-300"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: scrolled ? "#0B1320" : "#F8FAFC",
                }}
              >
                Noori Aqua
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors duration-200"
                    style={{
                      color: isActive
                        ? "#29C7F6"
                        : scrolled
                        ? "#334155"
                        : "#94A3B8",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#29C7F6")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = isActive
                        ? "#29C7F6"
                        : scrolled
                        ? "#334155"
                        : "#94A3B8")
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={WHATSAPP_LINKS.quote}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "#25D366",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.25)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Get Quote on WhatsApp
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 transition-colors duration-200"
              style={{ color: scrolled ? "#0B1320" : "white" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] flex flex-col lg:hidden"
            style={{ background: "#07111F", paddingTop: "76px" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-6 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-2xl font-bold tracking-[-0.02em] text-white hover:text-[#29C7F6] transition-colors"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={WHATSAPP_LINKS.quote}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4 flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white"
                style={{ background: "#25D366", width: "100%", justifyContent: "center" }}
                onClick={() => setMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                Get Quote on WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
