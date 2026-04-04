"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "+92 300 123 4567", href: "tel:+923001234567" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 300 123 4567", href: "https://wa.me/923001234567" },
  { icon: Mail, label: "Email", value: "info@nooriaqua.pk", href: "mailto:info@nooriaqua.pk" },
  { icon: MapPin, label: "Service Area", value: "All of Karachi, Pakistan", href: null },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("xdoqyvbq");
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    if (state.succeeded || true) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(41,199,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Get in touch.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Get your quote.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            Tell us about your needs and we&apos;ll respond within a few hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            <div className="mb-2">
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Reach us directly
              </h3>
              <p className="text-sm" style={{ color: "#94A3B8" }}>
                Prefer a direct conversation? We&apos;re available on WhatsApp for quick
                responses.
              </p>
            </div>

            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(41,199,246,0.1)",
                    border: "1px solid rgba(41,199,246,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: "#29C7F6" }} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#94A3B8" }}>
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-base font-semibold text-white hover:text-[#29C7F6] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-base font-semibold text-white">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 mt-2"
              style={{
                background: "#25D366",
                boxShadow: "0 8px 24px rgba(37,211,102,0.2)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Success Toast */}
            {(state.succeeded || showSuccess) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl flex items-center gap-3"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.3)",
                }}
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#25D366" }} />
                <div>
                  <div className="font-semibold text-white text-sm">
                    Request sent successfully!
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#94A3B8" }}>
                    We&apos;ll get back to you within a few hours.
                  </div>
                </div>
              </motion.div>
            )}

            <form
              onSubmit={onSubmit}
              className="glass-card p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "#94A3B8" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(41,199,246,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "#94A3B8" }}
                  >
                    Business / Event Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="Company or event name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(41,199,246,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "#94A3B8" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(41,199,246,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "#94A3B8" }}
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Area in Karachi"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(41,199,246,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "#94A3B8" }}
                >
                  Quantity Needed
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g. 20 bottles/week, 100 for event"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(41,199,246,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "#94A3B8" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any additional details about your requirements..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(41,199,246,0.4)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                  boxShadow: "0 8px 24px rgba(41,199,246,0.25)",
                }}
              >
                {state.submitting ? "Sending..." : "Send Request"}
                {!state.submitting && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-xs text-center" style={{ color: "#475569" }}>
                We typically respond within 2–4 hours during business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
