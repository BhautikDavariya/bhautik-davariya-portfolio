import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye, Calendar, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // const projects = [
  //   {
  //     id: 1,
  //     title: "InfyPOS - Advanced Laravel POS with Inventory Management",
  //     description:
  //       "This is the Invoice Management System where users can manage all the invoices in one place and digitally. The client will get its separate login panel from where he can see the lists of his invoices and do payments. Here are some Key Features and Concepts that InfyInvoices provides. InfyInvoices – Laravel Invoice Management System.",
  //     image: "/placeholder.svg",
  //     tags: ["React", "PHP", "MySql", "Redux", "Bootstrap"],
  //     category: "Fot",
  //     liveUrl: "https://infypos.infyom.com/",
  //     githubUrl: "https://github.com/BhautikDavariya",
  //     featured: true,
  //     stats: {
  //       duration: "3 months",
  //       team: "2 developers",
  //       lines: "25k+ lines",
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Task Management App",
  //     description:
  //       "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
  //     image: "/placeholder.svg",
  //     tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
  //     category: "frontend",
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/BhautikDavariya",
  //     featured: true,
  //     stats: {
  //       duration: "2 months",
  //       team: "Solo project",
  //       lines: "18k+ lines",
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Weather Dashboard",
  //     description:
  //       "A beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.",
  //     image: "/placeholder.svg",
  //     tags: ["React", "Chart.js", "Weather API", "TailwindCSS"],
  //     category: "frontend",
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/BhautikDavariya",
  //     featured: false,
  //     stats: {
  //       duration: "3 weeks",
  //       team: "Solo project",
  //       lines: "8k+ lines",
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "Blog CMS",
  //     description:
  //       "A content management system for bloggers with rich text editing, media uploads, and SEO optimization.",
  //     image: "/placeholder.svg",
  //     tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
  //     category: "fullstack",
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/BhautikDavariya",
  //     featured: false,
  //     stats: {
  //       duration: "6 weeks",
  //       team: "2 developers",
  //       lines: "15k+ lines",
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: "API Gateway",
  //     description:
  //       "A scalable microservices API gateway with authentication, rate limiting, and comprehensive logging.",
  //     image: "/placeholder.svg",
  //     tags: ["Node.js", "Express", "Redis", "Docker"],
  //     category: "backend",
  //     liveUrl: null,
  //     githubUrl: "https://github.com/BhautikDavariya",
  //     featured: false,
  //     stats: {
  //       duration: "4 weeks",
  //       team: "3 developers",
  //       lines: "12k+ lines",
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "Real-time Chat App",
  //     description:
  //       "A modern chat application with end-to-end encryption, file sharing, and video calling capabilities.",
  //     image: "/placeholder.svg",
  //     tags: ["React", "Socket.io", "WebRTC", "MongoDB"],
  //     category: "fullstack",
  //     liveUrl: "https://example.com",
  //     githubUrl: "https://github.com/BhautikDavariya",
  //     featured: true,
  //     stats: {
  //       duration: "5 weeks",
  //       team: "Solo project",
  //       lines: "20k+ lines",
  //     },
  //   },
  // ];

const projects = [
  {
    id: 1,
    title: "Asset Management",
    company: "SMIXIT SOLUTIONS PRIVATE LIMITED",
    description:
      "Developed a React application to streamline asset and portfolio tracking. Includes portfolio analysis, reporting charts, and overall portfolio health monitoring.",
    image: "/placeholder.svg",
    tags: ["React", "Charts.js", "TailwindCSS"],
    category: "frontend",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    stats: {
      duration: "2 months",
      team: "2 developers",
      lines: "15k+ lines",
    },
  },
  {
    id: 2,
    title: "Udhyog Ecom",
    company: "SMIXIT SOLUTIONS PRIVATE LIMITED",
    description:
      "Built an e-commerce platform for Sand Selica suppliers using Next.js and Redux. Includes intuitive customer experience and admin inventory management tools.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Redux", "TailwindCSS"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    stats: {
      duration: "3 months",
      team: "3 developers",
      lines: "22k+ lines",
    },
  },
  {
    id: 3,
    title: "Meta-Snap-Editor",
    company: "SMIXIT SOLUTIONS PRIVATE LIMITED",
    description:
      "A web application to manage metadata for canvas headings and create SEO-optimized meta URLs using React.",
    image: "/placeholder.svg",
    tags: ["React", "SEO", "TailwindCSS"],
    category: "frontend",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    stats: {
      duration: "1 month",
      team: "Solo project",
      lines: "12k+ lines",
    },
  },
  {
    id: 4,
    title: "Charity Management",
    company: "SMIXIT SOLUTIONS PRIVATE LIMITED",
    description:
      "A React.js application for charities to manage donors and donations efficiently.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    stats: {
      duration: "1.5 months",
      team: "2 developers",
      lines: "14k+ lines",
    },
  },
  {
    id: 5,
    title: "QR Builder Application",
    company: "INFYOM TECHNOLOGIES PRIVATE LIMITED",
    description:
      "Developed a feature-rich QR code builder with URL shortener, analytics, and customizable QR designs using React.",
    image: "/placeholder.svg",
    tags: ["React", "Authentication", "TailwindCSS"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    stats: {
      duration: "2 months",
      team: "Solo project",
      lines: "18k+ lines",
    },
  },
  {
    id: 6,
    title: "Tone Compass",
    company: "SMIXIT SOLUTIONS PRIVATE LIMITED",
    description:
      "React application for color selection, shade exploration, and generating harmonious color palettes for designers.",
    image: "/placeholder.svg",
    tags: ["React", "Color Theory", "TailwindCSS"],
    category: "frontend",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    stats: {
      duration: "3 weeks",
      team: "Solo project",
      lines: "8k+ lines",
    },
  },
  {
    id: 7,
    title: "Blow30",
    company: "NETIZENS TECHNOLOGIES PRIVATE LIMITED",
    description:
      "Job search platform built with CapacitorJS, Next.js, Tailwind CSS for employees and employers to streamline hiring.",
    image: "/placeholder.svg",
    tags: ["Next.js", "CapacitorJS", "TailwindCSS"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    stats: {
      duration: "2 months",
      team: "3 developers",
      lines: "20k+ lines",
    },
  },
  {
    id: 8,
    title: "FMCG",
    company: "NETIZENS TECHNOLOGIES PRIVATE LIMITED",
    description:
      "Warehouse management and sales system using Ionic and CapacitorJS for FMCG businesses.",
    image: "/placeholder.svg",
    tags: ["Ionic", "CapacitorJS", "Mobile"],
    category: "backend",
    liveUrl: null,
    githubUrl: null,
    featured: false,
    stats: {
      duration: "6 weeks",
      team: "2 developers",
      lines: "16k+ lines",
    },
  },
  {
    id: 9,
    title: "Darjee",
    company: "NETIZENS TECHNOLOGIES PRIVATE LIMITED",
    description:
      "Dynamic e-commerce platform for clothing brands with role-based access using Next.js, Tailwind CSS, and ShadCN UI.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TailwindCSS", "ShadCN UI"],
    category: "fullstack",
    liveUrl: null,
    githubUrl: null,
    featured: true,
    stats: {
      duration: "3 months",
      team: "4 developers",
      lines: "25k+ lines",
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
                <div className="relative hidden h-48  overflow-hidden"> 
                  {/* h-48 */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-6xl opacity-40">🚀</div>
                  </div> */}

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
                href="https://github.com/BhautikDavariya"
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
