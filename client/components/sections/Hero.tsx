import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, ArrowRight, Download } from "lucide-react";

// Typewriter hook
function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () =>
          setDisplayed(
            deleting ? displayed.slice(0, -1) : word.slice(0, displayed.length + 1)
          ),
        deleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "React Specialist",
  "UI/UX Enthusiast",
];

const SOCIAL = [
  {
    icon: Github,
    href: "https://github.com/BhautikDavariya",
    label: "GitHub",
    hoverColor: "#a78bfa",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/bhautik-davariya-15b2b722a/",
    label: "LinkedIn",
    hoverColor: "#22d3ee",
  },
  {
    icon: Mail,
    href: "mailto:bhautikmerndevelopers@gmail.com",
    label: "Email",
    hoverColor: "#f0abfc",
  },
];

const STATS = [
  { value: "3+", label: "Years Exp." },
  { value: "15+", label: "Projects" },
  { value: "3", label: "Companies" },
];

// Fixed particle positions to avoid SSR/hydration mismatch
const PARTICLES = Array.from({ length: 45 }, (_, i) => ({
  size: (((i * 7 + 3) % 3) + 1) as number,
  x: ((i * 37 + 13) % 100) as number,
  y: ((i * 53 + 7) % 100) as number,
  color: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#22d3ee" : "#f0abfc",
  duration: ((i * 11 + 4) % 5) + 4,
  delay: ((i * 17) % 60) / 10,
  rise: ((i * 29 + 40) % 100) + 50,
}));

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityOut = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const role = useTypewriter(ROLES);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.section
      ref={ref}
      id="home"
      style={{ opacity: opacityOut }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* === Background === */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 60%), #05060e",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orbs */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700,
            height: 700,
            top: "5%",
            left: "10%",
            background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 550,
            height: 550,
            bottom: "10%",
            right: "8%",
            background: "radial-gradient(circle, rgba(6,182,212,0.11) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 22, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            top: "55%",
            left: "55%",
            background: "radial-gradient(circle, rgba(232,121,249,0.07) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{ scale: [1, 1.1, 1], x: [0, 18, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: p.color,
            }}
            animate={{ y: [0, -p.rise], opacity: [0, 0.55, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* === Content === */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 text-sm font-medium"
            style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.28)",
              color: "#c4b5fd",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#4ade80",
                boxShadow: "0 0 8px #4ade80",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            Available for new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
          >
            <span className="text-white">Bhautik </span>
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 55%, #f0abfc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Davariya
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 h-12"
            style={{ color: "#94a3b8" }}
          >
            <span style={{ color: "#475569" }} className="font-mono">{"<"}</span>
            <span style={{ color: "#c4b5fd", minWidth: "22ch", textAlign: "left" }}>{role}</span>
            <span
              className="w-0.5 h-7 rounded-full ml-0.5"
              style={{
                background: "#8b5cf6",
                animation: "blink-cursor 1s step-end infinite",
              }}
            />
            <span style={{ color: "#475569" }} className="font-mono">{"/>"}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting exceptional digital experiences with the MERN stack. Passionate about
            clean code, stunning interfaces, and scalable solutions that make a real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-base"
              style={{
                background: "linear-gradient(135deg, #6d28d9, #7c3aed, #8b5cf6)",
                boxShadow: "0 0 30px rgba(139,92,246,0.4), 0 4px 20px rgba(139,92,246,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 50px rgba(139,92,246,0.6), 0 8px 32px rgba(139,92,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(139,92,246,0.4), 0 4px 20px rgba(139,92,246,0.25)";
              }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1piLFz_XEOsD5wT69oaeJ8LUTsuYkOsnC/view?usp=drivesdk",
                  "_blank"
                )
              }
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
              style={{
                color: "#c4b5fd",
                border: "1px solid rgba(139,92,246,0.35)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.1)";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(139,92,246,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center gap-3 mb-16"
          >
            {SOCIAL.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.35 + i * 0.1 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{
                    color: "#64748b",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.hoverColor;
                    e.currentTarget.style.borderColor = `${s.hoverColor}40`;
                    e.currentTarget.style.background = `${s.hoverColor}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {s.label}
                </motion.a>
              );
            })}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center gap-12 sm:gap-20"
          >
            {STATS.map((st, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {st.value}
                </div>
                <div className="text-xs text-slate-500 tracking-wide">{st.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors duration-300 group"
        style={{ color: "#334155" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#8b5cf6")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </motion.section>
  );
}
