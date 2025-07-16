import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications using Node.js, Express, and MongoDB.",
    },
    {
      icon: Globe,
      title: "Full Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment and maintenance.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Ensuring seamless experiences across all devices with responsive and accessible design principles.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Profile image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Profile image placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 flex items-center justify-center">
                <div className="text-6xl lg:text-8xl text-primary/40">👨‍💻</div>
              </div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
              Passionate about creating digital solutions
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Full Stack Developer with over 3 years of
              experience in the MERN stack. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in web development started with a curiosity about how
              things work on the internet. Since then, I've been constantly
              learning and adapting to new technologies, always striving to
              write clean, efficient code that makes a difference.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "MongoDB",
                "Express",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlights grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-3">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
