import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Calendar, Users, Code, Building2 } from "lucide-react";

type FilterKey = "all" | "fullstack" | "frontend" | "backend";

interface Project {
  id: number;
  title: string;
  company: string;
  description: string;
  tags: string[];
  category: FilterKey | "fullstack";
  githubUrl: string;
  liveUrl?: string;
  stats: { duration: string; team: string; lines: string };
  accent: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Asset Management System",
    company: "SMIXIT Solutions",
    description:
      "Comprehensive asset tracking platform for managing company assets lifecycle — acquisition, allocation, maintenance, and disposal — with real-time dashboards and reporting.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "4 months", team: "3 developers", lines: "30k+ lines" },
    accent: "var(--brand-1)",
  },
  {
    id: 2,
    title: "Udhyog Ecom Platform",
    company: "SMIXIT Solutions",
    description:
      "Full-featured B2B e-commerce platform for industrial goods with vendor management, bulk ordering, inventory tracking, and advanced search and filtering capabilities.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Redux"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "6 months", team: "4 developers", lines: "50k+ lines" },
    accent: "var(--brand-6)",
  },
  {
    id: 3,
    title: "Meta-Snap Editor",
    company: "SMIXIT Solutions",
    description:
      "Browser-based image and metadata editor for social media previews. Allows editing Open Graph tags, preview cards, and exporting optimized assets for multiple platforms.",
    tags: ["React", "Canvas API", "TailwindCSS", "Framer Motion"],
    category: "frontend",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "2 months", team: "2 developers", lines: "15k+ lines" },
    accent: "#e879f9",
  },
  {
    id: 4,
    title: "Charity Management System",
    company: "SMIXIT Solutions",
    description:
      "Non-profit management platform for charity organizations covering donor management, campaign tracking, fund allocation, transparency reports, and volunteer coordination.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "5 months", team: "3 developers", lines: "35k+ lines" },
    accent: "var(--brand-2)",
  },
  {
    id: 5,
    title: "QR Builder Pro",
    company: "INFYOM Technologies",
    description:
      "Advanced QR code generation platform supporting multiple QR types (URL, vCard, WiFi, etc.) with custom branding, analytics tracking, and bulk generation features.",
    tags: ["React", "Node.js", "MongoDB", "Canvas", "AWS S3"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "3 months", team: "2 developers", lines: "22k+ lines" },
    accent: "#f59e0b",
  },
  {
    id: 6,
    title: "Tone Compass",
    company: "SMIXIT Solutions",
    description:
      "AI-assisted writing tone analyzer that evaluates content sentiment, formality level, and brand voice consistency across different content types and platforms.",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "TailwindCSS"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "3 months", team: "3 developers", lines: "25k+ lines" },
    accent: "#ec4899",
  },
  {
    id: 7,
    title: "Blow30 Social Platform",
    company: "NETIZENS Technologies",
    description:
      "Short-form content social platform for the 30-and-under demographic with video uploads, story features, real-time notifications, and algorithmic feed.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "7 months", team: "5 developers", lines: "60k+ lines" },
    accent: "var(--brand-1)",
  },
  {
    id: 8,
    title: "FMCG Distribution Portal",
    company: "NETIZENS Technologies",
    description:
      "Supply chain management system for FMCG companies handling distributor networks, order processing, delivery tracking, and sales analytics across multiple regions.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Recharts"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "5 months", team: "4 developers", lines: "45k+ lines" },
    accent: "var(--brand-6)",
  },
  {
    id: 9,
    title: "Darjee Fashion App",
    company: "NETIZENS Technologies",
    description:
      "Mobile-first fashion e-commerce app for custom tailoring — customers can submit measurements, choose fabrics, track orders, and connect with local tailors.",
    tags: ["React", "Capacitor", "Node.js", "MongoDB", "Ionic"],
    category: "fullstack",
    githubUrl: "https://github.com/BhautikDavariya",
    stats: { duration: "4 months", team: "3 developers", lines: "32k+ lines" },
    accent: "#e879f9",
  },
];

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
];

export default function Projects() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const visible = PROJECTS.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(var(--brand-rgb),0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(var(--brand-rgb),0.04) 0%, transparent 70%)",
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
          <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--brand-1)" }}>
            What I've built
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span style={{ color: "var(--text-strong)" }}>Featured </span>
            <span
              style={{
                background: "linear-gradient(135deg, var(--brand-2), var(--brand-1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <div
            className="w-14 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, var(--brand-4), var(--brand-1))" }}
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f.key}
              onClick={() => setFilter(f.key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: filter === f.key ? "var(--brand-2)" : "var(--text-muted)",
                background: filter === f.key ? "var(--brand-fill)" : "transparent",
                border: `1px solid ${filter === f.key ? "var(--border-brand-strong)" : "var(--border-base)"}`,
              }}
            >
              {f.label}
              {filter === f.key && (
                <motion.div
                  layoutId="projectFilter"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{ border: "1px solid var(--border-brand-strong)" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden transition-all duration-400 cursor-default flex flex-col shimmer-border"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-brand-soft)",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `color-mix(in srgb, ${project.accent} 22%, transparent)`;
                  e.currentTarget.style.boxShadow = `var(--shadow-card-hover), 0 0 30px color-mix(in srgb, ${project.accent} 10%, transparent)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-brand-soft)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-0.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.accent}, color-mix(in srgb, ${project.accent} 30%, transparent), transparent)`,
                  }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Company badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-3.5 h-3.5" style={{ color: project.accent }} />
                    <span className="text-xs font-medium" style={{ color: project.accent }}>
                      {project.company}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-3 leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] rounded-md font-medium"
                        style={{
                          background: `color-mix(in srgb, ${project.accent} 8%, transparent)`,
                          color: project.accent,
                          border: `1px solid color-mix(in srgb, ${project.accent} 16%, transparent)`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div
                    className="flex items-center gap-4 text-[10px] mb-5 py-3 px-4 rounded-xl"
                    style={{ background: "var(--hover-white-overlay)", color: "var(--text-dim)" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {project.stats.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3 h-3" />
                      {project.stats.team}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3 h-3" />
                      {project.stats.lines}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 flex-1 justify-center"
                      style={{
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-base)",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-strong)";
                        e.currentTarget.style.borderColor = "var(--border-stronger)";
                        e.currentTarget.style.background = "var(--hover-white-overlay)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-muted)";
                        e.currentTarget.style.borderColor = "var(--border-base)";
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
                        style={{
                          color: project.accent,
                          border: `1px solid color-mix(in srgb, ${project.accent} 19%, transparent)`,
                          background: `color-mix(in srgb, ${project.accent} 6%, transparent)`,
                        }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
            Want to see more? Check out my GitHub profile.
          </p>
          <motion.a
            href="https://github.com/BhautikDavariya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
            style={{
              color: "var(--brand-2)",
              border: "1px solid var(--border-brand-strong)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--brand-fill)";
              e.currentTarget.style.borderColor = "var(--border-brand-stronger)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(var(--brand-rgb),0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border-brand-strong)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
