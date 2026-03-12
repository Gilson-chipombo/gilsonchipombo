import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import API from "@/assets/api.jpeg";
import arrende from "@/assets/arrendaaqui.png";
import route42 from "@/assets/route.png";

const projects = [
  {
    title: "ArrendeAqui",
    description:
      "ArrendeAqui é uma plataforma de que permite aos usuários encontrar casas para arrendar de forma simplificada e segura, conectando locatários e proprietários em um marketplace eficiente.",
    image: arrende,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/Gilson-chipombo/ArrendeAqui",
    liveUrl: "https://arrenda-aqui.vercel.app/",
  },
  {
    title: "ShopeYetu -E-commerce",
    description:
      "Plataforma de e-commerce completa com carrinho de compras, sistema de pagamentos integrado, painel administrativo e dashboard de vendas em tempo real.",
    image: project1,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/Gilson-chipombo/shopeYetu",
    liveUrl: "https://shope-yetu.vercel.app/",
  },
  {
    title: "API para App de transporte",
    description:
      "Aplicação de gerenciamento de rotas, conectando estudantes e motoristas, permitindo notificações em tempo real e controle da localização.",
    image: API,
    technologies: ["Nest.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/Gilson-chipombo/42RouteAPI-42Luanda",
    liveUrl: "https://four2routeapi.onrender.com/api/docs",
  },
  {
    title: "42Route Web",
    description:
      "Aplicação de gerenciamento de rotas, conectando estudantes e motoristas, permitindo notificações em tempo real e controle da localização.",
    image: route42,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Gilson-chipombo/42RouteAPI-42Luanda",
    liveUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Chat em tempo real com suporte a grupos, compartilhamento de arquivos, mensagens de voz e videochamadas integradas.",
    image: project3,
    technologies: ["React", "Socket.io", "MongoDB", "WebRTC"],
    githubUrl: "https://github.com/Gilson-chipombo",
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
