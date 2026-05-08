import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

const Awards = () => {
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
      
      <AwardsSection />
      <Footer />
    </main>
  );
};

export default Awards;
