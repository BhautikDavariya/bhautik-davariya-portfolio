import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handle active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-16"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PortfolioLayout;
