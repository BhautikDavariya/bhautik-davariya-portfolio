import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Server, Globe, Bot } from "lucide-react";
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
    color: "var(--brand-1)",
    bg: "rgba(var(--brand-rgb),0.1)",
  },
  {
    Icon: Server,
    title: "Backend Development",
    desc: "Robust REST APIs with Node.js, Express, and MongoDB at scale.",
    color: "var(--brand-6)",
    bg: "rgba(var(--brand-rgb),0.1)",
  },
  {
    Icon: Globe,
    title: "Full Stack Solutions",
    desc: "End-to-end application development from concept to production.",
    color: "var(--brand-2)",
    bg: "rgba(var(--brand-rgb),0.1)",
  },
  {
    Icon: Bot,
    title: "AI-Powered Development",
    desc: "Leveraging Cursor AI and Claude to write smarter code, ship faster, and build production-ready solutions with AI-assisted workflows.",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
  },
];

const TECH = [
  "JavaScript", "TypeScript", "React", "Node.js",
  "MongoDB", "Express.js", "Next.js", "TailwindCSS",
  "Capacitor.js", "Redux", "Cursor AI", "Claude AI",
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
          backgroundImage: "radial-gradient(circle, rgba(var(--brand-rgb),0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.4,
        }}
      />
      {/* Side glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(var(--brand-rgb),0.06) 0%, transparent 70%)",
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
            style={{ color: "var(--brand-1)" }}
          >
            Get to know me
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: "var(--text-strong)" }}>About </span>
            <span
              style={{
                background: "linear-gradient(135deg, var(--brand-2), var(--brand-1))",
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
            style={{ background: "linear-gradient(90deg, var(--brand-4), var(--brand-1))" }}
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
                    "linear-gradient(135deg, rgba(var(--brand-rgb),0.3), rgba(var(--brand-rgb),0.2))",
                  filter: "blur(20px)",
                }}
              />

              {/* Image */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid var(--border-brand)" }}
              >
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "var(--overlay-image-fade)",
                  }}
                />
                <img
                  src={meImage}
                  alt="Bhautik Davariya"
                  className="w-full object-cover"
                  style={{ filter: "var(--img-filter)" }}
                />
              </div>

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 60px rgba(var(--brand-rgb),0.15), 0 0 120px rgba(var(--brand-rgb),0.05)",
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
                  background: "var(--surface-2-strong)",
                  border: "1px solid var(--border-brand-strong)",
                  boxShadow: "0 0 30px rgba(var(--brand-rgb),0.12)",
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--brand-2)" }}
                >
                  {years.count}+
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>Years Exp.</div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl backdrop-blur-sm"
                style={{
                  background: "var(--surface-2-strong)",
                  border: "1px solid var(--border-brand-strong)",
                  boxShadow: "0 0 30px rgba(var(--brand-rgb),0.12)",
                }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{ color: "var(--brand-1)" }}
                >
                  {projects.count}+
                </div>
                <div className="text-xs" style={{ color: "var(--text-muted)" }}>Projects Done</div>
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
              className="text-2xl lg:text-3xl font-bold leading-snug"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
            >
              Passionate about creating{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--brand-2), var(--brand-1))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digital solutions
              </span>
            </h3>

            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I'm a dedicated Full Stack Developer with over 3 years of experience in the
              MERN stack. I love turning complex problems into simple, beautiful, and
              intuitive solutions that people enjoy using.
            </p>

            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              My journey started with curiosity about how things work on the web. Since
              then, I've been constantly evolving — leveraging AI tools like{" "}
              <span style={{ color: "var(--brand-2)" }}>Cursor</span> and{" "}
              <span style={{ color: "var(--brand-1)" }}>Claude</span> to accelerate development,
              write smarter code, and deliver real impact faster.
            </p>

            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Currently working with companies like <span style={{ color: "var(--brand-2)" }}>SMIXIT Solutions</span>,{" "}
              <span style={{ color: "var(--brand-1)" }}>INFYOM Technologies</span>,{" "}
              <span style={{ color: "var(--brand-6)" }}>NETIZENS Technologies</span>, and{" "}
              <span style={{ color: "#fbbf24" }}>Sensussoft Software Pvt. Ltd.</span>, delivering
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
                    background: "var(--brand-fill-light)",
                    border: "1px solid var(--border-brand)",
                    color: "var(--brand-2)",
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
              className="p-6 rounded-2xl cursor-default transition-all duration-300 shimmer-border"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border-brand-soft)",
                backdropFilter: "blur(20px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `color-mix(in srgb, ${h.color} 22%, transparent)`;
                e.currentTarget.style.boxShadow = `var(--shadow-card-hover), 0 0 30px color-mix(in srgb, ${h.color} 10%, transparent)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-brand-soft)";
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
                className="font-semibold text-sm mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
              >
                {h.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
