import { motion } from "framer-motion";
import { Code, FolderOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <Code className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This section will showcase my technical skills, programming
            languages, frameworks, and tools I work with daily.
          </p>
          <div className="mt-12">
            <div className="text-sm text-muted-foreground/60 uppercase tracking-wider">
              Coming Soon
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <FolderOpen className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my latest work, showcasing full-stack applications,
            web solutions, and open-source contributions.
          </p>
          <div className="mt-12">
            <div className="text-sm text-muted-foreground/60 uppercase tracking-wider">
              Coming Soon
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <MessageCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold rounded-full"
          >
            Get In Touch
          </Button>
          <div className="mt-8">
            <div className="text-sm text-muted-foreground/60 uppercase tracking-wider">
              Contact Form Coming Soon
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
