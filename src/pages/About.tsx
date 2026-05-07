import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <ThemeToggle />
      </div>
      
      <AboutSection />
      <Footer />
    </main>
  );
};

export default About;
