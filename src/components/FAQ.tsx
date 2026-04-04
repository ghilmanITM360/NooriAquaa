"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you deliver?",
    a: "Same-day delivery is available across Karachi for orders placed before noon. For large events, we recommend booking at least 24–48 hours in advance to ensure we have sufficient stock and logistics prepared.",
  },
  {
    q: "Do you deliver across all of Karachi?",
    a: "Yes! We cover all major areas of Karachi including DHA, Clifton, Gulshan, Gulistan-e-Jauhar, North Karachi, SITE, Korangi, Malir, Orangi, and more. Contact us if you're unsure about your area.",
  },
  {
    q: "Can I schedule recurring delivery?",
    a: "Absolutely. We offer weekly and monthly recurring delivery plans for businesses, restaurants, offices, and hotels. Once set up, deliveries happen automatically — no need to call each time.",
  },
  {
    q: "Do you provide water for large events?",
    a: "Yes, we specialize in bulk delivery for weddings, conferences, MUNs, tournaments, and corporate events. We can supply 200+ bottles for a single event and work with your event coordinator for timing.",
  },
  {
    q: "What bottle sizes do you offer?",
    a: "We primarily deliver 19L (gallon) water bottles, which are standard for dispensers used in offices, restaurants, and events. We can also arrange smaller bottle packs depending on your requirements.",
  },
  {
    q: "How do I request a quote?",
    a: "Simply fill out our contact form on this page, WhatsApp us directly, or call us. We'll get back to you within a few hours with a custom quote based on your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#F8FAFC" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "#0B1320", fontFamily: "'Sora', sans-serif" }}
          >
            Questions?{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We&apos;ve answered the common ones.
            </span>
          </h2>
          <p className="text-lg" style={{ color: "#475569" }}>
            Can&apos;t find what you&apos;re looking for? Reach out directly.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: openIndex === i
                  ? "1px solid rgba(41,199,246,0.3)"
                  : "1px solid rgba(0,0,0,0.08)",
                background: openIndex === i
                  ? "rgba(41,199,246,0.03)"
                  : "white",
                transition: "border-color 0.3s, background 0.3s",
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4 group"
              >
                <span
                  className="text-base font-semibold"
                  style={{ color: "#0B1320" }}
                >
                  {faq.q}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{
                    background:
                      openIndex === i
                        ? "rgba(41,199,246,0.12)"
                        : "rgba(0,0,0,0.04)",
                    border:
                      openIndex === i
                        ? "1px solid rgba(41,199,246,0.25)"
                        : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {openIndex === i ? (
                    <Minus className="w-4 h-4" style={{ color: "#29C7F6" }} />
                  ) : (
                    <Plus className="w-4 h-4" style={{ color: "#94A3B8" }} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="px-5 pb-5 text-base leading-relaxed"
                      style={{ color: "#475569" }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
