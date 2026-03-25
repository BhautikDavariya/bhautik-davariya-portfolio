import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type CategoryKey = "frontend" | "backend" | "ai" | "tools";

const CATEGORIES: Record<
  CategoryKey,
  { label: string; color: string; skills: { name: string; level: number }[] }
> = {
  frontend: {
    label: "Frontend",
    color: "#6366f1",
    skills: [
      { name: "React",         level: 95 },
      { name: "TypeScript",    level: 90 },
      { name: "Next.js",       level: 95 },
      { name: "TailwindCSS",   level: 92 },
      { name: "HTML5",         level: 98 },
      { name: "CSS3",          level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Redux",         level: 85 },
      { name: "Sass/SCSS",     level: 88 },
      { name: "Capacitor",     level: 70 },
    ],
  },
  backend: {
    label: "Backend",
    color: "#10b981",
    skills: [
      { name: "Node.js",    level: 90 },
      { name: "REST APIs",  level: 92 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB",    level: 85 },
      { name: "JWT Auth",   level: 85 },
      { name: "Socket.io",  level: 78 },
    ],
  },
  ai: {
    label: "AI & Tools",
    color: "#f59e0b",
    skills: [
      { name: "Cursor AI",           level: 90 },
      { name: "Claude AI",           level: 88 },
      { name: "Prompt Engineering",  level: 85 },
      { name: "ChatGPT",             level: 82 },
      { name: "GitHub Copilot",      level: 78 },
      { name: "OpenAI API",          level: 75 },
    ],
  },
  tools: {
    label: "Tools & DevOps",
    color: "#e879f9",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code",      level: 95 },
      { name: "Vercel",       level: 90 },
      { name: "Postman",      level: 88 },
      { name: "Figma",        level: 85 },
      { name: "Webpack",      level: 78 },
      { name: "Android (Capacitor)", level: 50 },
      { name: "iOS (Capacitor)",     level: 50 },
    ],
  },
};

const FAMILIAR = [
  "Docker", "AWS", "PostgreSQL", "GraphQL", "Redis",
  "Jest", "Cypress", "GitHub Actions", "Vite", "Claude Code", "LangChain",
];

const TIERS = [
  { label: "Expert",       min: 90 },
  { label: "Advanced",     min: 75 },
  { label: "Intermediate", min: 0  },
];

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>("frontend");
  const cat = CATEGORIES[active];

  const tiers = TIERS.map((t, ti) => ({
    label: t.label,
    skills: cat.skills.filter(
      (s) => s.level >= t.min && (ti === 0 || s.level < TIERS[ti - 1].min)
    ),
  })).filter((t) => t.skills.length > 0);

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
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
          <p
            className="text-xs font-mono tracking-widest uppercase mb-4"
            style={{ color: "#6366f1" }}
          >
            What I work with
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-white">My </span>
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #34d399)",
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
            style={{ background: "linear-gradient(90deg, #4f46e5, #10b981)" }}
          />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-2 mb-14 flex-wrap"
        >
          {(Object.entries(CATEGORIES) as [CategoryKey, typeof CATEGORIES[CategoryKey]][]).map(
            ([key, c]) => (
              <motion.button
                key={key}
                onClick={() => setActive(key)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
                style={{
                  color: active === key ? c.color : "#475569",
                  background: active === key ? `${c.color}12` : "transparent",
                  border: `1px solid ${active === key ? `${c.color}35` : "rgba(255,255,255,0.06)"}`,
                }}
              >
                {c.label}
                {active === key && (
                  <motion.div
                    layoutId="skillTabUnderline"
                    className="absolute -bottom-px left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full"
                    style={{ background: c.color }}
                  />
                )}
              </motion.button>
            )
          )}
        </motion.div>

        {/* Skills — tier-based pill layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {tiers.map((tier) => (
              <div key={tier.label}>
                {/* Tier header */}
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="text-[10px] font-mono uppercase tracking-[0.18em] flex-shrink-0"
                    style={{ color: "#334155" }}
                  >
                    {tier.label}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {tier.skills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.045, duration: 0.25 }}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200"
                      style={{
                        background: `${cat.color}0e`,
                        border: `1px solid ${cat.color}22`,
                        color: cat.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${cat.color}1c`;
                        e.currentTarget.style.borderColor = `${cat.color}45`;
                        e.currentTarget.style.boxShadow = `0 0 16px ${cat.color}1a`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${cat.color}0e`;
                        e.currentTarget.style.borderColor = `${cat.color}22`;
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
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
          <div className="flex items-center gap-4 max-w-xl mx-auto mb-5">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.04)" }} />
            <p className="text-[10px] font-mono text-slate-500 tracking-[0.18em] uppercase flex-shrink-0">
              Also familiar with
            </p>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.04)" }} />
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {FAMILIAR.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.07 }}
                className="px-3 py-1.5 text-xs rounded-lg cursor-default transition-all duration-200"
                style={{
                  color: "#334155",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#64748b";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#334155";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
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
