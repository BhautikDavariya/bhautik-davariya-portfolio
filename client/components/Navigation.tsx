import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({
  activeSection,
  setActiveSection,
  darkMode,
  toggleDarkMode,
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Placeholder for resume download functionality
    console.log("Resume download triggered");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-xl text-primary cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              &lt;DevName /&gt;
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResumeDownload}
                className="hidden sm:flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: darkMode ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {darkMode ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-3 rounded-md transition-colors ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-2"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResumeDownload}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black/20 z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
