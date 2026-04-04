"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/industries";

export default function IndustryShowcase() {
  const [restaurants, weddings, corporate, conferences, hotels] = industries;

  return (
    <section
      id="industries"
      className="py-24 lg:py-32 relative"
      style={{ background: "#07111F" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#29C7F6" }}>
            Industries We Serve
          </p>
          <h2
            className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[0.95] tracking-[-0.04em] text-white"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            One brand.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #29C7F6, #5AB9FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every occasion.
            </span>
          </h2>
          <p className="mt-5 text-lg" style={{ color: "#94A3B8" }}>
            Custom branded bottles for every business type and event in Karachi.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden xl:grid grid-cols-12 gap-6">

          {/* ─── Restaurants — large featured card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-5 h-[520px] group relative overflow-hidden rounded-[28px]"
            style={{ border: `1px solid ${restaurants.accent}20` }}
          >
            <img
              src={restaurants.image}
              alt={restaurants.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ opacity: 0.88, filter: "brightness(1.02) contrast(1.04)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(2,11,22,0.95) 0%, rgba(2,11,22,0.5) 40%, transparent 70%)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${restaurants.accent}18 0%, transparent 65%)` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col gap-3">
              <h3
                className="text-[40px] lg:text-[46px] leading-[0.9] tracking-[-0.04em] font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Restaurants
                <br />& Cafés
              </h3>
              <p
                className="text-[13px] leading-relaxed max-w-[260px] opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: "#CBD5E1" }}
              >
                Custom branded bottles designed for restaurants, cafés, dine-ins, and premium table service.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Logo Integration", "Bulk Orders", "Table Service"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{ background: `${restaurants.accent}15`, border: `1px solid ${restaurants.accent}30`, color: restaurants.accent }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── Right-side 2×2: Weddings / Corporate / Conferences / Hotels ─── */}
          <div className="col-span-7 grid grid-cols-2 gap-6 h-[520px]">

            {/* Weddings */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-[248px] group relative overflow-hidden rounded-[24px]"
              style={{ border: `1px solid ${weddings.accent}15` }}
            >
              <img
                src={weddings.image}
                alt={weddings.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ opacity: 0.78, filter: "brightness(1.0) saturate(1.1)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,11,22,0.92) 0%, rgba(2,11,22,0.45) 50%, transparent 80%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${weddings.accent}14 0%, transparent 65%)` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                <h3
                  className="text-[26px] lg:text-[30px] leading-[0.92] tracking-[-0.03em] font-bold text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Weddings &<br />Ceremonies
                </h3>
                <p
                  className="text-[12px] leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ color: "#94A3B8" }}
                >
                  Elegant personalized bottles for weddings, guest tables, and premium event setups.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {weddings.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em]"
                      style={{ background: `${weddings.accent}12`, border: `1px solid ${weddings.accent}25`, color: weddings.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Corporate */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="h-[248px] group relative overflow-hidden rounded-[24px]"
              style={{ border: `1px solid ${corporate.accent}15` }}
            >
              <img
                src={corporate.image}
                alt={corporate.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ opacity: 0.78, filter: "brightness(1.0) saturate(1.1)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,11,22,0.92) 0%, rgba(2,11,22,0.45) 50%, transparent 80%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${corporate.accent}14 0%, transparent 65%)` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                <h3
                  className="text-[26px] lg:text-[30px] leading-[0.92] tracking-[-0.03em] font-bold text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Corporate<br />Events
                </h3>
                <p
                  className="text-[12px] leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ color: "#94A3B8" }}
                >
                  Branded bottles for offices, company launches, seminars, and corporate meetings.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {corporate.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em]"
                      style={{ background: `${corporate.accent}12`, border: `1px solid ${corporate.accent}25`, color: corporate.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Conferences */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.26 }}
              className="h-[248px] group relative overflow-hidden rounded-[24px]"
              style={{ border: `1px solid ${conferences.accent}15` }}
            >
              <img
                src={conferences.image}
                alt={conferences.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ opacity: 0.78, filter: "brightness(1.0) saturate(1.1)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,11,22,0.92) 0%, rgba(2,11,22,0.45) 50%, transparent 80%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${conferences.accent}14 0%, transparent 65%)` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                <h3
                  className="text-[26px] lg:text-[30px] leading-[0.92] tracking-[-0.03em] font-bold text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Conferences<br />& Expos
                </h3>
                <p
                  className="text-[12px] leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ color: "#94A3B8" }}
                >
                  Premium custom bottles for exhibitions, trade shows, conferences, and speaker tables.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {conferences.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em]"
                      style={{ background: `${conferences.accent}12`, border: `1px solid ${conferences.accent}25`, color: conferences.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="h-[248px] group relative overflow-hidden rounded-[24px]"
              style={{ border: `1px solid ${hotels.accent}15` }}
            >
              <img
                src={hotels.image}
                alt={hotels.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                style={{ opacity: 0.78, filter: "brightness(1.0) saturate(1.1)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,11,22,0.92) 0%, rgba(2,11,22,0.45) 50%, transparent 80%)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${hotels.accent}14 0%, transparent 65%)` }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
                <h3
                  className="text-[26px] lg:text-[30px] leading-[0.92] tracking-[-0.03em] font-bold text-white"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  Hotels &<br />Resorts
                </h3>
                <p
                  className="text-[12px] leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ color: "#94A3B8" }}
                >
                  Luxury-branded bottles designed for hotel rooms, resorts, banquets, and hospitality events.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {hotels.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em]"
                      style={{ background: `${hotels.accent}12`, border: `1px solid ${hotels.accent}25`, color: hotels.accent }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* ─── Bottom row: Schools | MUN | Sports ─── */}

          {/* Schools */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-3 h-[240px] group relative overflow-hidden rounded-[24px]"
            style={{ border: "1px solid rgba(16,185,129,0.18)" }}
          >
            <img
              src="/industries/school.png"
              alt="Schools & Colleges"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              style={{ opacity: 0.75, filter: "brightness(1.02)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(2,11,22,0.92) 0%, rgba(2,11,22,0.38) 55%, transparent 80%)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.14) 0%, transparent 65%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
              <h3
                className="text-[24px] lg:text-[28px] leading-[0.92] tracking-[-0.03em] font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Schools &<br />Colleges
              </h3>
              <p
                className="text-[11px] leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: "#94A3B8" }}
              >
                Custom bottles for classrooms, student events, educational institutes, and campus activities.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Student Events", "Campus Branding"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em]"
                    style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", color: "#10B981" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MUN — secondary featured card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="col-span-6 h-[240px] group relative overflow-hidden rounded-[28px]"
            style={{ border: "1px solid rgba(99,102,241,0.22)" }}
          >
            <img
              src="/industries/mun.png"
              alt="MUN & Debate Conferences"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ opacity: 0.90, filter: "brightness(1.08) contrast(1.05)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(2,11,22,0.96) 0%, rgba(2,11,22,0.55) 45%, rgba(2,11,22,0.15) 80%)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(99,102,241,0.20) 0%, transparent 65%)" }}
            />
            <div className="absolute inset-y-0 left-0 flex flex-col justify-end p-7 gap-3">
              <h3
                className="text-[34px] lg:text-[38px] leading-[0.9] tracking-[-0.04em] font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                MUN &<br />Debate Conferences
              </h3>
              <p
                className="text-[12px] leading-relaxed max-w-[300px] opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: "#CBD5E1" }}
              >
                Custom branded bottles for MUNs, debate conferences, delegate desks, and student leadership events.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Delegate Desks", "Tournament Branding", "Student Events"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", color: "#818CF8" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sports Tournaments */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-3 h-[240px] group relative overflow-hidden rounded-[24px]"
            style={{ border: "1px solid rgba(249,115,22,0.18)" }}
          >
            <img
              src="/industries/sports.png"
              alt="Sports Tournaments"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              style={{ opacity: 0.75, filter: "brightness(1.02)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(2,11,22,0.92) 0%, rgba(2,11,22,0.38) 55%, transparent 80%)" }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.14) 0%, transparent 65%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
              <h3
                className="text-[24px] lg:text-[28px] leading-[0.92] tracking-[-0.03em] font-bold text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Sports<br />Tournaments
              </h3>
              <p
                className="text-[11px] leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ color: "#94A3B8" }}
              >
                Branded hydration bottles for sports events, school tournaments, teams, and competitions.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Team Logo", "Player Bottles"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em]"
                    style={{ background: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)", color: "#F97316" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mobile / Tablet Cards */}
        <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-[20px]"
              style={{ minHeight: 200, border: `1px solid ${ind.accent}18` }}
            >
              <img
                src={ind.image}
                alt={ind.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.75 }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,11,22,0.94) 0%, transparent 60%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2">
                <h3
                  className="text-[22px] font-bold text-white leading-tight tracking-[-0.03em]"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {ind.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase"
                      style={{
                        background: `${ind.accent}12`,
                        border: `1px solid ${ind.accent}25`,
                        color: ind.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
