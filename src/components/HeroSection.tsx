import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Brain, Code, Laptop, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
            <img
              src={profileImage}
              alt="Foto de perfil"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 glow-primary"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary mb-4 text-sm md:text-base"
        >
          Seja bem-vindo ao meu portifólio, chamo-me 
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="text-gradient">Gilson  Chipombo</span>
        </motion.h1>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6"
        >
          Dev. Full Stack com foco em Backend e Testes
        </motion.h5>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground max-w-xl mx-auto mb-8 text-base md:text-lg"
        >
          Transformo ideias em aplicações web modernas e escaláveis.
          Focado em tecnologias como React, Laravel e Node.js.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <a
            href="https://github.com/Gilson-chipombo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gilson-bravo-fernando-chipombo-aa0ba4209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="fernandochipombo@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="font-mono text-sm border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Ver Projetos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("skills")}
            className="flex items-center gap-2 font-mono text-sm border border-muted-foreground/30 text-muted-foreground px-4 py-3 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Brain size={16} />
            Skills
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("technologies")}
            className="flex items-center gap-2 font-mono text-sm border border-muted-foreground/30 text-muted-foreground px-4 py-3 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Laptop size={16} />
            Tecnologias
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("education")}
            className="flex items-center gap-2 font-mono text-sm border border-muted-foreground/30 text-muted-foreground px-4 py-3 rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            <GraduationCap size={16} />
            Formação
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
