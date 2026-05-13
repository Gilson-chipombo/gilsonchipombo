import { motion } from "framer-motion";
import { Github, Linkedin, Figma, Youtube, MapPin, ArrowRight } from "lucide-react";
import coverImage from "@/assets/foto_de_capa.png";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-between relative px-8 md:px-16 lg:px-20 py-12 pt-20 md:pt-12">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center h-screen relative z-10">
        {/* Top section with descriptions */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{t.hero.fullStackDeveloper}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {t.hero.fullStackDesc}
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">{t.hero.aiEnthusiast}</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {t.hero.aiDesc}
            </p>
          </div>
        </motion.div>

        {/* Center section with location and social links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-start gap-8"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-sm font-mono font-semibold">{t.hero.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/in/gilson-bravo-fernando-chipombo-aa0ba4209/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15 }}
              href="https://github.com/Gilson-chipombo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>

          {/* View Experience Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/experience")}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-900 transition-colors mt-4"
          >
            {t.hero.viewExperience}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Right side - Image with background text */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Large background text - Carousel effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden w-full">
          <motion.div
            animate={{ x: ["calc(100vw + 500px)", "calc(-100% - 500px)"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-9xl md:text-[150px] lg:text-[200px] font-bold text-muted-foreground/10 leading-none whitespace-nowrap absolute"
          >
            GILSON CHIPOMBO
          </motion.div>
        </div>

        {/* Cover image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative z-5 w-full max-w-md md:max-w-lg"
        >
          <img
            src={coverImage}
            alt="Gilson Chipombo"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
