import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Server, Globe, Smartphone } from "lucide-react";
import meImage from "@/asset/images/bhautik_d.jpeg";

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const start = () => setStarted(true);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return { count, start };
}

const HIGHLIGHTS = [
  {
    Icon: Code2,
    title: "Frontend Development",
    desc: "Responsive, interactive UIs with React, TypeScript, and modern CSS frameworks.",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
  },
  {
    Icon: Server,
    title: "Backend Development",
    desc: "Robust REST APIs with Node.js, Express, and MongoDB at scale.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.1)",
  },
  {
    Icon: Globe,
    title: "Full Stack Solutions",
    desc: "End-to-end application development from concept to production.",
    color: "#e879f9",
    bg: "rgba(232,121,249,0.1)",
  },
  {
    Icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Seamless cross-device experiences using Capacitor and responsive design.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.1)",
  },
];

const TECH = [
  "JavaScript", "TypeScript", "React", "Node.js",
  "MongoDB", "Express.js", "Next.js", "TailwindCSS",
  "Capacitor.js", "Redux",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const years = useCounter(3);
  const projects = useCounter(15);

  useEffect(() => {
    if (isInView) {
      years.start();
      projects.start();
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dot bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.4,
        }}
      />
      {/* Side glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: "#8b5cf6" }}
          >
            Get to know me
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-white">About </span>
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          <div
            className="w-14 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          />
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Decorative ring behind image */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.2))",
                  filter: "blur(20px)",
                }}
              />

              {/* Image */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(139,92,246,0.25)" }}
              >
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(5,6,14,0.6))",
                  }}
                />
                <img
                  src={meImage}
                  alt="Bhautik Davariya"
                  className="w-full object-cover"
                  style={{ filter: "brightness(0.92) contrast(1.05)" }}
                />
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 60px rgba(139,92,246,0.2), 0 0 120px rgba(139,92,246,0.06)",
                }}
              />

              {/* Years badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.75 }}
                className="absolute -top-5 -right-5 px-5 py-3 rounded-xl backdrop-blur-sm"
                style={{
                  background: "rgba(10,11,26,0.92)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  boxShadow: "0 0 30px rgba(139,92,246,0.15)",
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#a78bfa" }}
                >
                  {years.count}+
                </div>
                <div className="text-xs" style={{ color: "#475569" }}>Years Exp.</div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl backdrop-blur-sm"
                style={{
                  background: "rgba(10,11,26,0.92)",
                  border: "1px solid rgba(6,182,212,0.3)",
                  boxShadow: "0 0 30px rgba(6,182,212,0.12)",
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#22d3ee" }}
                >
                  {projects.count}+
                </div>
                <div className="text-xs" style={{ color: "#475569" }}>Projects Done</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-5"
          >
            <h3
              className="text-2xl lg:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Passionate about creating{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digital solutions
              </span>
            </h3>

            <p className="leading-relaxed" style={{ color: "#64748b" }}>
              I'm a dedicated Full Stack Developer with over 3 years of experience in the
              MERN stack. I love turning complex problems into simple, beautiful, and
              intuitive solutions that people enjoy using.
            </p>

            <p className="leading-relaxed" style={{ color: "#64748b" }}>
              My journey started with curiosity about how things work on the web. Since
              then, I've been constantly evolving — always striving to write clean, efficient
              code and deliver real impact for users and businesses alike.
            </p>

            <p className="leading-relaxed" style={{ color: "#64748b" }}>
              Currently working with companies like <span style={{ color: "#a78bfa" }}>SMIXIT Solutions</span>,{" "}
              <span style={{ color: "#22d3ee" }}>INFYOM Technologies</span>,{" "}
              <span style={{ color: "#f0abfc" }}>NETIZENS Technologies</span>, and{" "}
              <span style={{ color: "#34d399" }}>Sensussoft Software Pvt. Ltd.</span>, delivering
              production-ready full-stack applications across diverse industries.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 pt-3">
              {TECH.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.06 }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium cursor-default"
                  style={{
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.22)",
                    color: "#c4b5fd",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl cursor-default transition-all duration-300"
              style={{
                background: "rgba(10,11,26,0.6)",
                border: "1px solid rgba(139,92,246,0.1)",
                backdropFilter: "blur(20px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${h.color}35`;
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 30px ${h.color}18`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: h.bg }}
              >
                <h.Icon className="w-5 h-5" style={{ color: h.color }} />
              </div>
              <h4
                className="font-semibold text-sm text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {h.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
