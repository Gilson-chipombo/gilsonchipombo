import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <ThemeToggle />
      </div>
      
      <ExperienceSection />
      <Footer />
    </main>
  );
};

export default Experience;
