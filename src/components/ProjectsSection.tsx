import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamentos integrado, painel administrativo e dashboard de vendas em tempo real.",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/seuusuario/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "Aplicação de gerenciamento de tarefas com drag and drop, notificações em tempo real, colaboração em equipe e integração com calendário.",
    image: project2,
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    githubUrl: "https://github.com/seuusuario/taskapp",
    liveUrl: "https://taskapp-demo.com",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Chat em tempo real com suporte a grupos, compartilhamento de arquivos, mensagens de voz e videochamadas integradas.",
    image: project3,
    technologies: ["React", "Socket.io", "MongoDB", "WebRTC"],
    githubUrl: "https://github.com/seuusuario/chatapp",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold mb-12">
          <span className="font-mono text-primary text-lg md:text-xl">02.</span>
          <span>Meus Projetos</span>
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
