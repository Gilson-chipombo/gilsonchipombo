import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Brain, Code, Award, Target } from "lucide-react";

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
          className="bg-card border border-border rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-purple-500 rounded-lg text-white">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>
          </div>
          
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground p-2 bg-muted/30 rounded-lg"
              >
                <span className="text-primary text-lg">●</span>
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
    <section id="about" className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-background via-background/50 to-background">
      <SkillsModal
        isOpen={showSoftSkills}
        onClose={() => setShowSoftSkills(false)}
        title="Soft Skills"
        skills={softSkills}
        icon={<Brain size={28} />}
      />
      <SkillsModal
        isOpen={showHardSkills}
        onClose={() => setShowHardSkills(false)}
        title="Hard Skills"
        skills={hardSkills}
        icon={<Code size={28} />}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
              02. SOBRE MIM
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-400/30 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Quem é <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Gilson</span>?
          </h2>

          {/* About Description */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor fullstack apaixonado por criar soluções digitais
                que fazem a diferença. Com experiência em desenvolvimento web moderno,
                trabalho com as tecnologias mais recentes do mercado para entregar
                aplicações de alta qualidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada na programação começou em 2018 e desde então
                venho me especializando em arquitetura de software, boas práticas
                de desenvolvimento e metodologias ágeis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atualmente, meu foco está em construir aplicações web escaláveis
                e performáticas, sempre buscando aprender novas tecnologias e
                aprimorar minhas habilidades.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Desenvolvedor Fullstack</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-5 h-5 text-primary" />
                  <span>6+ anos de experiência</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8">Minhas Competências</h3>

          {/* Skills Buttons */}
          <div className="flex gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSoftSkills(true)}
              className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-medium transition-all hover:bg-neutral-900 border border-black/50"
            >
              <Brain size={20} />
              Soft Skills
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHardSkills(true)}
              className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-medium transition-all hover:bg-neutral-900 border border-black/50"
            >
              <Code size={20} />
              Hard Skills
            </motion.button>
          </div>

          {/* Technologies Grid */}
          <div>
            <h4 className="text-sm font-mono text-primary mb-6 tracking-wide uppercase">
              Tecnologias que uso:
            </h4>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 hover:from-muted/80 hover:to-muted/40 transition-all border border-border/50 hover:border-primary/30 cursor-default"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-10 h-10 filter drop-shadow-md"
                  />
                  <span className="text-xs text-muted-foreground font-medium text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">Formação Acadêmica</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-mono text-primary block mb-1">
                      {item.period}
                    </span>
                    <h4 className="font-bold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
