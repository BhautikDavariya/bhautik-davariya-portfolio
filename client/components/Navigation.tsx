import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Code2, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "skills", label: "Skills", num: "03" },
  { id: "projects", label: "Projects", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMobileOpen(false);
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1piLFz_XEOsD5wT69oaeJ8LUTsuYkOsnC/view?usp=drivesdk",
      "_blank"
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 backdrop-blur-xl border-b"
            : "py-5 bg-transparent"
        }`}
        style={
          isScrolled
            ? {
                background: "var(--surface-1)",
                borderColor: "var(--border-brand-soft)",
              }
            : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("home")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--brand-rgb),0.5)]"
              style={{
                background: "linear-gradient(135deg, var(--brand-4), var(--brand-1))",
              }}
            >
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-mono text-lg font-bold tracking-tight">
              <span style={{ color: "var(--brand-1)" }}>&lt;</span>
              <span style={{ color: "var(--text-strong)" }}>Bhautik</span>
              <span style={{ color: "var(--brand-2)" }}> /&gt;</span>
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{
                  color: activeSection === item.id ? "var(--brand-2)" : "var(--text-muted)",
                }}
              >
                <span className="font-mono text-[10px] mr-1" style={{ color: "rgba(var(--brand-rgb),0.3)" }}>
                  {item.num}.
                </span>
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navActive"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(var(--brand-rgb), 0.1)",
                      border: "1px solid rgba(var(--brand-rgb), 0.2)",
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Resume button */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: 12 }}
              whileTap={{ scale: 0.92 }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                color: "var(--brand-2)",
                border: "1px solid var(--border-brand-strong)",
                background: "var(--brand-fill-light)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={openResume}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: "var(--brand-2)",
                border: "1px solid var(--border-brand-strong)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--brand-fill)";
                e.currentTarget.style.borderColor = "var(--border-brand-stronger)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--brand-rgb), 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "var(--border-brand-strong)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.button>

            {/* Mobile toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg transition-all duration-200"
              style={{
                border: "1px solid var(--border-slate)",
                color: "var(--text-muted)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t"
              style={{
                background: "var(--surface-1-solid)",
                backdropFilter: "blur(20px)",
                borderColor: "var(--border-brand-soft)",
              }}
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-3 px-4 rounded-xl flex items-center gap-3 transition-all duration-200"
                    style={{
                      color: activeSection === item.id ? "var(--brand-2)" : "var(--text-muted)",
                      background:
                        activeSection === item.id
                          ? "var(--brand-fill)"
                          : "transparent",
                      border:
                        activeSection === item.id
                          ? "1px solid var(--border-brand)"
                          : "1px solid transparent",
                    }}
                  >
                    <span className="font-mono text-[10px] text-green-700">{item.num}</span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.07 }}
                  onClick={openResume}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 mt-2 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color: "var(--brand-2)",
                    border: "1px solid var(--border-brand-strong)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="md:hidden fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
