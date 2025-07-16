import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye, Calendar, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and real-time notifications.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: {
        duration: "3 months",
        team: "4 developers",
        lines: "25k+ lines",
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: {
        duration: "2 months",
        team: "Solo project",
        lines: "18k+ lines",
      },
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.",
      image: "/placeholder.svg",
      tags: ["React", "Chart.js", "Weather API", "TailwindCSS"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: {
        duration: "3 weeks",
        team: "Solo project",
        lines: "8k+ lines",
      },
    },
    {
      id: 4,
      title: "Blog CMS",
      description:
        "A content management system for bloggers with rich text editing, media uploads, and SEO optimization.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: {
        duration: "6 weeks",
        team: "2 developers",
        lines: "15k+ lines",
      },
    },
    {
      id: 5,
      title: "API Gateway",
      description:
        "A scalable microservices API gateway with authentication, rate limiting, and comprehensive logging.",
      image: "/placeholder.svg",
      tags: ["Node.js", "Express", "Redis", "Docker"],
      category: "backend",
      liveUrl: null,
      githubUrl: "https://github.com/example",
      featured: false,
      stats: {
        duration: "4 weeks",
        team: "3 developers",
        lines: "12k+ lines",
      },
    },
    {
      id: 6,
      title: "Real-time Chat App",
      description:
        "A modern chat application with end-to-end encryption, file sharing, and video calling capabilities.",
      image: "/placeholder.svg",
      tags: ["React", "Socket.io", "WebRTC", "MongoDB"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: {
        duration: "5 weeks",
        team: "Solo project",
        lines: "20k+ lines",
      },
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "featured",
      label: "Featured",
      count: projects.filter((p) => p.featured).length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `linear-gradient(45deg, ${
                i % 2 === 0
                  ? "rgba(139, 69, 255, 0.1)"
                  : "rgba(99, 102, 241, 0.1)"
              }, transparent)`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, Math.random() * 0.8 + 0.6, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring full-stack applications and
            innovative solutions
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-background/20 text-muted-foreground border-border hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filter.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeFilter === filter.id
                      ? "bg-primary-foreground/20"
                      : "bg-primary/20"
                  }`}
                >
                  {filter.count}
                </span>
              </span>
              {activeFilter === filter.id && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-primary rounded-full"
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Liquid glass card */}
              <div className="relative rounded-2xl backdrop-blur-md bg-background/10 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      Featured
                    </motion.div>
                  </div>
                )}

                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-40">🚀</div>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="backdrop-blur-sm bg-background/20 border-white/20 hover:bg-primary hover:border-primary"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="backdrop-blur-sm bg-background/20 border-white/20 hover:bg-primary hover:border-primary"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {project.stats.duration}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {project.stats.team}
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Code className="w-3 h-3" />
                      {project.stats.lines}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Check out my GitHub profile for more projects and contributions to
              open source
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
