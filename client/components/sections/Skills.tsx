import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type CategoryKey = "frontend" | "backend" | "tools";

const CATEGORIES: Record<CategoryKey, { label: string; color: string; glowColor: string; skills: { name: string; level: number }[] }> = {
  frontend: {
    label: "Frontend",
    color: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.2)",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 95 },
      { name: "TailwindCSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Sass/SCSS", level: 88 },
      { name: "Capacitor", level: 70 },
      { name: "Redux", level: 85 },
    ],
  },
  backend: {
    label: "Backend",
    color: "#06b6d4",
    glowColor: "rgba(6,182,212,0.2)",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "JWT Auth", level: 85 },
      { name: "Socket.io", level: 78 },
    ],
  },
  tools: {
    label: "Tools & DevOps",
    color: "#e879f9",
    glowColor: "rgba(232,121,249,0.2)",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Webpack", level: 78 },
      { name: "Android (Capacitor)", level: 50 },
      { name: "iOS (Capacitor)", level: 50 },
    ],
  },
};

const FAMILIAR = ["Docker", "AWS", "PostgreSQL", "GraphQL", "Redis", "Jest", "Cypress", "GitHub Actions", "Vite"];

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>("frontend");
  const cat = CATEGORIES[active];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Left orb */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Right orb */}
      <div
        className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
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
          className="text-center mb-14"
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "#8b5cf6" }}>
            What I work with
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-white">My </span>
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
          <div
            className="w-14 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }}
          />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {(Object.entries(CATEGORIES) as [CategoryKey, typeof CATEGORIES[CategoryKey]][]).map(([key, c]) => (
            <motion.button
              key={key}
              onClick={() => setActive(key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
              style={{
                color: active === key ? c.color : "#475569",
                background: active === key ? `${c.color}12` : "transparent",
                border: `1px solid ${active === key ? `${c.color}40` : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {c.label}
              {active === key && (
                <motion.div
                  layoutId="skillTabUnderline"
                  className="absolute -bottom-px left-1/2 -translate-x-1/2 h-0.5 w-10 rounded-full"
                  style={{ background: c.color }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {cat.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.045, duration: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-5 rounded-2xl transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(10,11,26,0.65)",
                  border: "1px solid rgba(139,92,246,0.1)",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cat.color}35`;
                  e.currentTarget.style.boxShadow = `0 12px 30px rgba(0,0,0,0.4), 0 0 20px ${cat.color}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.1)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Skill header */}
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: cat.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Track */}
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {/* Animated bar */}
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${cat.color}, ${cat.color}80)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                  />
                </div>

                {/* Level label */}
                <div className="mt-2 text-[10px]" style={{ color: "#334155" }}>
                  {skill.level >= 90
                    ? "Expert"
                    : skill.level >= 80
                    ? "Advanced"
                    : skill.level >= 65
                    ? "Intermediate"
                    : "Familiar"}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Also familiar with */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-slate-500 tracking-widest uppercase mb-5">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {FAMILIAR.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="px-3.5 py-1.5 text-xs rounded-lg cursor-default transition-all duration-200"
                style={{
                  color: "#475569",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.055)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#94a3b8";
                  e.currentTarget.style.borderColor = "rgba(139,92,246,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#475569";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.055)";
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
