import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <ThemeToggle />
      </div>

      {/* Language Switcher */}
      <LanguageSwitcher />
      
      <div id="hero">
        <HeroSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
