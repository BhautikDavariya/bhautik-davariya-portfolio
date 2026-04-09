import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Heart, ArrowUp } from "lucide-react";

const QUICK_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SOCIAL = [
  { Icon: Github, href: "https://github.com/BhautikDavariya", label: "GitHub", color: "var(--brand-2)" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/bhautik-davariya-15b2b722a/", label: "LinkedIn", color: "var(--brand-1)" },
  { Icon: Mail, href: "mailto:bhautikmerndevelopers@gmail.com", label: "Email", color: "var(--brand-6)" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--page-bg)" }}>
      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(var(--brand-rgb),0.5), rgba(var(--brand-rgb),0.4), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--brand-4), var(--brand-1))" }}
              >
                <Code2 className="w-4 h-4" style={{ color: "#ffffff" }} />
              </div>
              <span className="font-mono text-lg font-bold">
                <span style={{ color: "var(--brand-1)" }}>&lt;</span>
                <span style={{ color: "var(--text-strong)" }}>Bhautik</span>
                <span style={{ color: "var(--brand-2)" }}> /&gt;</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Full Stack MERN Developer passionate about crafting exceptional digital experiences
              with clean code and modern technologies.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid var(--border-base)",
                    background: "var(--hover-white-overlay)",
                    color: "var(--text-dim)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = `color-mix(in srgb, ${s.color} 22%, transparent)`;
                    e.currentTarget.style.background = `color-mix(in srgb, ${s.color} 6%, transparent)`;
                    e.currentTarget.style.boxShadow = `0 0 15px color-mix(in srgb, ${s.color} 16%, transparent)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-dim)";
                    e.currentTarget.style.borderColor = "var(--border-base)";
                    e.currentTarget.style.background = "var(--hover-white-overlay)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <s.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3
              className="text-sm font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
            >
              Quick Links
            </h3>
            <div className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <motion.button
                  key={link}
                  onClick={() => scrollTo(link)}
                  whileHover={{ x: 4 }}
                  className="block text-sm transition-colors duration-200 text-left"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <span style={{ color: "#1a5c30", marginRight: "6px" }} className="font-mono text-[10px]">
                    ›
                  </span>
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3
              className="text-sm font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text-strong)" }}
            >
              Get in Touch
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Open to new opportunities and interesting projects. Let's build something amazing together.
            </p>
            <motion.a
              href="mailto:bhautikmerndevelopers@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-300"
              style={{
                color: "var(--brand-2)",
                border: "1px solid var(--border-brand-strong)",
                background: "var(--brand-fill-light)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-fill-mid)";
                e.currentTarget.style.borderColor = "var(--border-brand-stronger)";
                e.currentTarget.style.boxShadow = "0 0 16px rgba(var(--brand-rgb),0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--brand-fill-light)";
                e.currentTarget.style.borderColor = "var(--border-brand-strong)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <Mail className="w-3.5 h-3.5" />
              Say Hello →
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid var(--border-brand-soft)" }}
        >
          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} Bhautik Davariya. Built with
            <Heart className="w-3 h-3 inline" style={{ color: "var(--brand-1)" }} />
            and React.
          </p>
          <p className="text-xs" style={{ color: "var(--text-dim)" }}>
            Designed & Developed by Bhautik Davariya
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid var(--border-brand)",
              background: "var(--brand-fill-light)",
              color: "var(--brand-1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--brand-fill-mid)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(var(--brand-rgb),0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--brand-fill-light)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
