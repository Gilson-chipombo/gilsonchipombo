import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, Code } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const softSkills = [
  "Comunicação efetiva",
  "Trabalho em equipe",
  "Resolução de problemas",
  "Pensamento crítico",
  "Adaptabilidade",
  "Gestão de tempo",
  "Liderança",
  "Criatividade",
  "Empatia",
  "Proatividade",
];

const hardSkills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "PHP / Laravel",
  "Node.js / Nest",
  "PostgreSQL / MySQL",
  "Java / Spring Boot",
  "Docker",
  "Git / GitHub",
  "REST APIs",
  "Testes automatizados",
  "Linux / Shell Script",
];

const education = [
  {
    period: "Atual",
    title: "42 Luanda",
    description: "Formação intensiva em programação",
  },
  {
    period: "2022 - Atual",
    title: "Engenharia Informática",
    description: "4º Ano - Ensino Superior",
  },
  {
    period: "2018 - 2022",
    title: "Instituto de Telecomunicações (ITEL)",
    description: "Informática - Ensino Médio",
  },
];

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillsModal = ({ isOpen, onClose, title, skills, icon }: SkillsModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
          
          <ul className="grid grid-cols-2 gap-3">
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">▹</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AboutSection = () => {
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [showHardSkills, setShowHardSkills] = useState(false);

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <SkillsModal
        isOpen={showSoftSkills}
        onClose={() => setShowSoftSkills(false)}
        title="Soft Skills"
        skills={softSkills}
        icon={<Brain size={24} />}
      />
      <SkillsModal
        isOpen={showHardSkills}
        onClose={() => setShowHardSkills(false)}
        title="Hard Skills"
        skills={hardSkills}
        icon={<Code size={24} />}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-8">
          <span className="font-mono text-primary text-lg md:text-xl">01.</span>
          <span>Sobre Mim</span>
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sou um desenvolvedor fullstack apaixonado por criar soluções digitais
              que fazem a diferença. Com experiência em desenvolvimento web moderno,
              trabalho com as tecnologias mais recentes do mercado para entregar
              aplicações de alta qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha jornada na programação começou em 2018 e desde então
              venho me especializando em arquitetura de software, boas práticas
              de desenvolvimento e metodologias ágeis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atualmente, meu foco está em construir aplicações web escaláveis
              e performáticas, sempre buscando aprender novas tecnologias e
              aprimorar minhas habilidades.
            </p>
          </div>

          <div className="space-y-8">
            {/* Skills Buttons */}
            <div id="skills" className="flex gap-3 scroll-mt-24">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSoftSkills(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-mono text-sm transition-colors"
              >
                <Brain size={18} />
                Soft Skills
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowHardSkills(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-mono text-sm transition-colors"
              >
                <Code size={18} />
                Hard Skills
              </motion.button>
            </div>

            <div id="technologies" className="scroll-mt-24">
              <h3 className="text-primary text-sm mb-4 font-semibold tracking-wide uppercase">
                Tecnologias que uso:
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-default"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8"
                    />
                    <span className="text-xs text-muted-foreground font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div id="education" className="scroll-mt-24">
              <h3 className="font-mono text-primary text-sm mb-4">
                Formação Acadêmica:
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
                
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative pl-6"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-primary border-2 border-background" />
                      
                      <span className="text-xs font-mono text-primary">
                        {item.period}
                      </span>
                      <h4 className="font-semibold text-foreground text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
