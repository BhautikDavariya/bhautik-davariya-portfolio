import PortfolioLayout from "@/components/PortfolioLayout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
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
    </PortfolioLayout>
  );
};

export default Portfolio;
