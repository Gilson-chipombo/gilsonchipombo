import { motion } from "framer-motion";

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "PostgreSQL / MongoDB",
  "Docker / AWS",
  "Git / CI/CD",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
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
              Minha jornada na programação começou há alguns anos, e desde então
              venho me especializando em arquitetura de software, boas práticas
              de desenvolvimento e metodologias ágeis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atualmente, meu foco está em construir aplicações web escaláveis
              e performáticas, sempre buscando aprender novas tecnologias e
              aprimorar minhas habilidades.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-primary text-sm mb-4">
              Tecnologias que uso:
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
