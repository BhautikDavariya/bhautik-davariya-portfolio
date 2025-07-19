import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 95, icon: "▲" },
        { name: "TailwindCSS", level: 92, icon: "🎨" },
        { name: "Framer Motion", level: 85, icon: "🎬" },
        { name: "HTML5", level: 98, icon: "🏗️" },
        { name: "CSS3", level: 95, icon: "✨" },
        { name: "Sass/SCSS", level: 88, icon: "💅" },
        { name: "Capacitor", level: 70, icon: "⚡" },
        { name: "Redux", level: 85, icon: "🤖" },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        // { name: "PostgreSQL", level: 80, icon: "🐘" },
        // { name: "GraphQL", level: 75, icon: "📊" },
        { name: "REST APIs", level: 92, icon: "🔗" },
        { name: "JWT", level: 85, icon: "🔐" },
        { name: "Socket.io", level: 78, icon: "🔌" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 92, icon: "📚" },
        // { name: "Docker", level: 80, icon: "🐳" },
        // { name: "AWS", level: 75, icon: "☁️" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "📝" },
        { name: "Postman", level: 88, icon: "📮" },
        { name: "Webpack", level: 78, icon: "📦" },
        { name: "Android", level: 50, icon: "🔄" },
        { name: "iOS", level: 50, icon: "🍏" },
      ],
    },
  };

  const categories = Object.keys(skillCategories) as Array<
    keyof typeof skillCategories
  >;

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical arsenal built through years of experience and
            continuous learning
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                  : "bg-background/20 text-muted-foreground border-border hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {skillCategories[category].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              {/* Liquid glass card */}
              <div className="relative p-6 rounded-2xl backdrop-blur-md bg-background/20 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Liquid background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Skill content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">
                        Proficiency
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={progressVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "9+", label: "Technologies" },
            { number: "99%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl backdrop-blur-md bg-background/10 border border-white/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-primary mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
