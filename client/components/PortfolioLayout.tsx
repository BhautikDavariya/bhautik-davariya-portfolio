import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-16"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PortfolioLayout;
