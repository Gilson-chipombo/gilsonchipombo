import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <ThemeToggle />
      </div>
      
      <PortfolioSection />
      <Footer />
    </main>
  );
};

export default Portfolio;
