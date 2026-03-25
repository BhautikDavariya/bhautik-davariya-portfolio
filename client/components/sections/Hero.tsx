import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

const SOCIAL = [
  { Icon: Github, href: "https://github.com/BhautikDavariya", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/bhautik-davariya-15b2b722a/", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:bhautikmerndevelopers@gmail.com", label: "Email" },
];

const TICKER = [
  "React", "TypeScript", "Next.js", "Node.js", "MongoDB",
  "Express.js", "TailwindCSS", "Framer Motion", "Redux", "Socket.io",
  "Cursor AI", "Claude AI", "REST APIs", "JWT", "Capacitor", "Vercel", "Git",
];

const CODE_LINES = [
  { key: "name",       value: '"Bhautik Davariya"',    color: "#34d399" },
  { key: "role",       value: '"Full Stack Dev"',       color: "#34d399" },
  { key: "stack",      value: '["MERN", "Next.js"]',   color: "#f0abfc" },
  { key: "aiTools",    value: '["Cursor", "Claude"]',  color: "#f0abfc" },
  { key: "available",  value: "true",                   color: "#4ade80" },
  { key: "experience", value: '"3+ years"',             color: "#34d399" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacityOut = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.section
      ref={ref}
      id="home"
      style={{ opacity: opacityOut }}
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "#060810" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(99,102,241,0.1) 0%, transparent 60%)," +
              "radial-gradient(ellipse 50% 40% at 0% 100%, rgba(16,185,129,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(99,102,241,0.055) 1px, transparent 1px)",
            backgroundSize: "100% 90px",
            opacity: 0.6,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-10 max-w-7xl w-full">
          <div
            className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center py-20 lg:py-0"
            style={{ minHeight: "calc(100vh - 80px)" }}
          >

            {/* Left: text */}
            <div>
              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-10 text-[11px] font-mono tracking-widest uppercase"
                style={{
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.18)",
                  color: "#818cf8",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#4ade80", boxShadow: "0 0 7px #4ade80" }}
                />
                Available for opportunities
              </motion.div>

              {/* Name — line-by-line reveal */}
              <div className="mb-8 space-y-1">
                {["BHAUTIK", "DAVARIYA"].map((word, wi) => (
                  <div key={word} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 + wi * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span
                        className="block font-black leading-none tracking-tighter"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
                          ...(wi === 1
                            ? {
                                background: "linear-gradient(135deg, #818cf8 0%, #34d399 55%, #f0abfc 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }
                            : { color: "#ffffff" }),
                        }}
                      >
                        {word}
                      </span>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Role divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ delay: 0.48, duration: 0.55, ease: "easeOut" }}
                className="flex items-center gap-4 mb-7"
              >
                <div className="w-10 h-px" style={{ background: "rgba(99,102,241,0.55)" }} />
                <span
                  className="text-[11px] font-mono tracking-[0.22em] uppercase"
                  style={{ color: "#475569" }}
                >
                  Full Stack Developer · MERN Stack
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58, duration: 0.5 }}
                className="text-slate-400 max-w-lg mb-10 leading-relaxed"
                style={{ fontSize: "0.9375rem" }}
              >
                Building digital products with the MERN stack. I use AI tools like Cursor
                and Claude to ship faster, cleaner code — turning complex problems into
                elegant solutions.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo("projects")}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #3730a3, #4f46e5, #6366f1)",
                    boxShadow: "0 0 22px rgba(99,102,241,0.35), 0 4px 14px rgba(99,102,241,0.2)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 38px rgba(99,102,241,0.55), 0 8px 24px rgba(99,102,241,0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 22px rgba(99,102,241,0.35), 0 4px 14px rgba(99,102,241,0.2)")
                  }
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1piLFz_XEOsD5wT69oaeJ8LUTsuYkOsnC/view?usp=drivesdk",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    color: "#94a3b8",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#f1f5f9";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Download className="w-4 h-4" /> Resume
                </motion.button>
              </motion.div>

              {/* Social + mini stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="flex items-center gap-5 flex-wrap"
              >
                <div className="flex gap-2">
                  {SOCIAL.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.07 }}
                      whileHover={{ y: -3 }}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{ border: "1px solid rgba(255,255,255,0.07)", color: "#475569" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#a5b4fc";
                        e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)";
                        e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#475569";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <s.Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>

                <div
                  style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.07)" }}
                />

                {[
                  { v: "3+", l: "Years" },
                  { v: "15+", l: "Projects" },
                  { v: "5+", l: "AI Tools" },
                ].map((st) => (
                  <div key={st.l}>
                    <div
                      className="text-base font-bold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {st.v}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: "#334155" }}
                    >
                      {st.l}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(7,8,18,0.96)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow:
                    "0 30px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{
                    borderColor: "rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.018)",
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                  <span
                    className="ml-auto text-[11px] font-mono"
                    style={{ color: "#253040" }}
                  >
                    developer.config.ts
                  </span>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-[13px] leading-relaxed space-y-0.5">
                  <div style={{ color: "#253040" }}>{"// Developer profile · 2025"}</div>
                  <div className="mt-2">
                    <span style={{ color: "#818cf8" }}>const </span>
                    <span style={{ color: "#e2e8f0" }}>dev</span>
                    <span style={{ color: "#64748b" }}>{" = {"}</span>
                  </div>
                  {CODE_LINES.map((line, i) => (
                    <motion.div
                      key={line.key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + i * 0.1, duration: 0.3 }}
                      className="pl-5"
                    >
                      <span style={{ color: "#a5b4fc" }}>{line.key}</span>
                      <span style={{ color: "#475569" }}>: </span>
                      <span style={{ color: line.color }}>{line.value}</span>
                      <span style={{ color: "#475569" }}>,</span>
                    </motion.div>
                  ))}
                  <div style={{ color: "#64748b" }}>{"}"}</div>
                  <div
                    className="flex items-center gap-1.5 mt-3 pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <span style={{ color: "#253040" }}>$</span>
                    <span style={{ color: "#475569" }}> npm run build</span>
                    <motion.span
                      className="inline-block w-[7px] h-[14px] ml-0.5 rounded-sm"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
                      style={{ background: "#6366f1" }}
                    />
                  </div>
                </div>
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { label: "Companies", value: "4", color: "#818cf8" },
                  { label: "Code Written", value: "300k+", color: "#34d399" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(7,8,18,0.8)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="text-xl font-bold"
                      style={{ color: card.color, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {card.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-wide mt-0.5"
                      style={{ color: "#2a3a50" }}
                    >
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="relative z-10 border-t overflow-hidden py-3.5"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div
          className="flex"
          style={{ animation: "ticker 30s linear infinite", willChange: "transform" }}
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center gap-3.5 px-5 text-[11px] font-mono tracking-widest uppercase"
              style={{ color: "#253040" }}
            >
              {item}
              <span style={{ opacity: 0.35, fontSize: "7px" }}>◆</span>
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
