import PortfolioLayout from "@/components/PortfolioLayout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/Footer";
import {
  Skills,
  Projects,
  Contact,
} from "@/components/sections/PlaceholderSections";

const Portfolio = () => {
  return (
    <PortfolioLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioLayout>
  );
};

export default Portfolio;
