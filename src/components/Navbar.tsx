"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Standards", href: "#standards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
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
                background: "rgba(13,27,42,0.85)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div
                className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-0.5"
              >
                {/* Glow behind logo */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    filter: "blur(16px)",
                    background: "rgba(41,199,246,0.18)",
                    transform: "scale(1.15)",
                  }}
                />

                {/* Logo image in original oval shape */}
                <div
                  className="relative overflow-hidden rounded-full"
                  style={{
                    width: "72px",
                    height: "44px",
                    border: "1px solid rgba(41,199,246,0.14)",
                    background: "rgba(10,20,35,0.75)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35), 0 0 18px rgba(41,199,246,0.10)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Noori Aqua"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center",
                      filter: "saturate(0.92) brightness(0.96) contrast(1.02)",
                    }}
                  />
                  {/* Subtle cyan overlay to integrate with navbar colors */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(41,199,246,0.06), transparent 75%)",
                    }}
                  />
                </div>
              </div>
              <span
                className="text-[20px] lg:text-[22px] font-bold tracking-[-0.03em] transition-colors duration-300 group-hover:text-white"
                style={{ fontFamily: "'Sora', sans-serif", color: "#F8FAFC" }}
              >
                Noori Aqua
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative"
                  style={{
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "#29C7F6"
                        : "#94A3B8",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#F8FAFC")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      activeSection === link.href.replace("#", "")
                        ? "#29C7F6"
                        : "#94A3B8")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: "#29C7F6",
                  border: "1px solid rgba(41,199,246,0.4)",
                }}
              >
                Get Quote
              </a>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] flex flex-col lg:hidden"
            style={{ background: "#07111F", paddingTop: "80px" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-3xl font-bold text-white hover:text-[#29C7F6] transition-colors"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-4 w-full max-w-xs mt-4">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full py-3 rounded-full text-center font-semibold text-[#29C7F6]"
                  style={{ border: "1px solid rgba(41,199,246,0.4)" }}
                >
                  Get Quote
                </a>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-center font-semibold text-white flex items-center justify-center gap-2"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
