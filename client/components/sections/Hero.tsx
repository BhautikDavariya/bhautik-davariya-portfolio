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
  { key: "name",       value: '"Bhautik Davariya"',    color: "var(--brand-2)" },
  { key: "role",       value: '"Full Stack Dev"',       color: "var(--brand-2)" },
  { key: "stack",      value: '["MERN", "Next.js"]',   color: "var(--brand-3)" },
  { key: "aiTools",    value: '["Cursor", "Claude"]',  color: "var(--brand-3)" },
  { key: "available",  value: "true",                   color: "var(--brand-1)" },
  { key: "experience", value: '"3+ years"',             color: "var(--brand-2)" },
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
        <div className="absolute inset-0" style={{ background: "var(--page-bg)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 100% 0%, rgba(var(--brand-rgb),0.08) 0%, transparent 60%)," +
              "radial-gradient(ellipse 50% 40% at 0% 100%, rgba(var(--brand-rgb),0.05) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(var(--brand-rgb),0.04) 1px, transparent 1px)",
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
                  background: "var(--brand-fill-light)",
                  border: "1px solid var(--border-brand-soft)",
                  color: "var(--brand-2)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--brand-1)", boxShadow: "0 0 7px var(--brand-1)" }}
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
                                background: "linear-gradient(135deg, var(--brand-2) 0%, var(--brand-1) 55%, var(--brand-6) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }
                            : { color: "var(--text-strong)" }),
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
                <div className="w-10 h-px" style={{ background: "rgba(var(--brand-rgb),0.55)" }} />
                <span
                  className="text-[11px] font-mono tracking-[0.22em] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  Full Stack Developer · MERN Stack
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58, duration: 0.5 }}
                className="max-w-lg mb-10 leading-relaxed"
                style={{ fontSize: "0.9375rem", color: "var(--text-muted)" }}
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
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, var(--brand-5), var(--brand-4), var(--brand-1))",
                    color: "#ffffff",
                    boxShadow: "0 0 22px rgba(var(--brand-rgb),0.35), 0 4px 14px rgba(var(--brand-rgb),0.2)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 38px rgba(var(--brand-rgb),0.55), 0 8px 24px rgba(var(--brand-rgb),0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 22px rgba(var(--brand-rgb),0.35), 0 4px 14px rgba(var(--brand-rgb),0.2)")
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
                    color: "var(--text-muted)",
                    border: "1px solid var(--border-strong)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-base)";
                    e.currentTarget.style.borderColor = "var(--border-stronger)";
                    e.currentTarget.style.background = "var(--hover-white-overlay)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-strong)";
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
                      style={{ border: "1px solid var(--border-strong)", color: "var(--text-dim)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--brand-2)";
                        e.currentTarget.style.borderColor = "var(--border-brand-strong)";
                        e.currentTarget.style.background = "var(--brand-fill-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-dim)";
                        e.currentTarget.style.borderColor = "var(--border-strong)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <s.Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>

                <div
                  style={{ width: "1px", height: "18px", background: "var(--border-strong)" }}
                />

                {[
                  { v: "3+", l: "Years" },
                  { v: "15+", l: "Projects" },
                  { v: "5+", l: "AI Tools" },
                ].map((st) => (
                  <div key={st.l}>
                    <div
                      className="text-base font-bold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
                    >
                      {st.v}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: "var(--text-dim)" }}
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
                  background: "var(--terminal-bg)",
                  border: "1px solid var(--border-base)",
                  boxShadow: "var(--shadow-terminal)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{
                    borderColor: "var(--border-soft)",
                    background: "var(--titlebar-bg)",
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                  <span
                    className="ml-auto text-[11px] font-mono"
                    style={{ color: "var(--text-dim)" }}
                  >
                    developer.config.ts
                  </span>
                </div>

                {/* Code body */}
                <div className="p-6 font-mono text-[13px] leading-relaxed space-y-0.5">
                  <div style={{ color: "var(--text-dim)" }}>{"// Developer profile · 2025"}</div>
                  <div className="mt-2">
                    <span style={{ color: "var(--brand-2)" }}>const </span>
                    <span style={{ color: "var(--text-soft)" }}>dev</span>
                    <span style={{ color: "var(--text-muted)" }}>{" = {"}</span>
                  </div>
                  {CODE_LINES.map((line, i) => (
                    <motion.div
                      key={line.key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + i * 0.1, duration: 0.3 }}
                      className="pl-5"
                    >
                      <span style={{ color: "var(--brand-3)" }}>{line.key}</span>
                      <span style={{ color: "var(--text-muted)" }}>: </span>
                      <span style={{ color: line.color }}>{line.value}</span>
                      <span style={{ color: "var(--text-muted)" }}>,</span>
                    </motion.div>
                  ))}
                  <div style={{ color: "var(--text-muted)" }}>{"}"}</div>
                  <div
                    className="flex items-center gap-1.5 mt-3 pt-3"
                    style={{ borderTop: "1px solid var(--border-soft)" }}
                  >
                    <span style={{ color: "var(--text-dim)" }}>$</span>
                    <span style={{ color: "var(--text-muted)" }}> npm run build</span>
                    <motion.span
                      className="inline-block w-[7px] h-[14px] ml-0.5 rounded-sm"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "steps(1)" }}
                      style={{ background: "var(--brand-1)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Mini stat cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { label: "Companies", value: "4", color: "var(--brand-2)" },
                  { label: "Code Written", value: "300k+", color: "var(--brand-1)" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="px-4 py-3 rounded-xl"
                    style={{
                      background: "var(--surface-3)",
                      border: "1px solid var(--border-base)",
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
                      style={{ color: "var(--text-dim)" }}
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
        style={{ borderColor: "var(--border-soft)" }}
      >
        <div
          className="flex"
          style={{ animation: "ticker 30s linear infinite", willChange: "transform" }}
        >
          {[...TICKER, ...TICKER].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 flex items-center gap-3.5 px-5 text-[11px] font-mono tracking-widest uppercase"
              style={{ color: "var(--text-dim)" }}
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
