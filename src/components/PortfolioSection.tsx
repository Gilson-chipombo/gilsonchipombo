import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Code2, Zap, Users, Layers } from "lucide-react";

// Import project images
import arrendaaqui from "@/assets/arrendaaqui.png";
import api from "@/assets/api.jpeg";
import wabot from "@/assets/WA-BOT.jpg";
import shopeyetu from "@/assets/shopeyetu.png";
import route from "@/assets/route.png";
import ussd from "@/assets/ussd.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com sistema de pagamentos integrado, gerenciamento de inventário e dashboard administrativo.",
    image: arrendaaqui,
    category: "Full-Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
    features: [
      "Autenticação JWT",
      "Carrinho de compras",
      "Sistema de pagamentos",
      "Painel administrativo",
      "Notificações em tempo real"
    ],
    link: "#",
    github: "#",
    status: "Completo"
  },
  {
    id: 2,
    title: "API REST Escalável",
    description: "API REST robusta e escalável com arquitetura de microsserviços, documentação completa e testes de cobertura alta.",
    image: api,
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Jest"],
    features: [
      "Autenticação OAuth2",
      "Rate limiting",
      "Cache com Redis",
      "Logging estruturado",
      "CI/CD pipeline"
    ],
    link: "#",
    github: "#",
    status: "Completo"
  },
  {
    id: 3,
    title: "WhatsApp Bot + Gemini IA",
    description: "Desenvolvimento de sistema SaaS para atendimento automatizado via WhatsApp",
    image: wabot,
    category: "Back-End",
    technologies: ["WhatsApp API", "Gemini API", "NestJS", "Prisma"],
    features: [
      "Integração com WhatsApp Cloud API (envio, recebimento e processamento de webhooks)",
      "Integração com IA (Gemini) para geração automática de respostas",
      "Persistência de histórico de conversas utilizando PostgreSQL e Prisma ORM",
    ],
    link: "#",
    github: "#",
    status: "Completo"
  },
  {
    id: 4,
    title: "Chat Application",
    description: "Aplicação de chat em tempo real com suporte a múltiplas salas, notificações push e sincronização de mensagens.",
    image: shopeyetu,
    category: "Full-Stack",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Firebase"],
    features: [
      "Chat em tempo real",
      "Salas privadas",
      "Notificações push",
      "Histórico de mensagens",
      "Autenticação social"
    ],
    link: "#",
    github: "#",
    status: "Em desenvolvimento"
  },
  {
    id: 5,
    title: "42 Route API",
    description: "Aplicação de gerenciamento de tarefas com colaboração em tempo real, comentários e sistema de notificações.",
    image: route,
    category: "Full-Stack",
    technologies: ["Vue.js", "Firebase", "Vuetify", "JavaScript", "PWA"],
    features: [
      "Colaboração em tempo real",
      "Comentários em tarefas",
      "Atribuição de responsáveis",
      "PWA offline",
      "Sincronização automática"
    ],
    link: "#",
    github: "#",
    status: "Completo"
  },
  {
    id: 6,
    title: "Weather App",
    description: "Aplicação de previsão do tempo com integração de API externa, geolocalização e previsão estendida.",
    image: ussd,
    category: "Frontend",
    technologies: ["React", "OpenWeather API", "Axios", "Tailwind CSS", "Geolocation"],
    features: [
      "Autenticação OAuth2",
      "Rate limiting",
      "Cache com Redis",
      "Logging estruturado",
      "CI/CD pipeline"
    ],
    link: "#",
    github: "#",
    status: "Completo"
  }

];

const categories = ["Todos", "Full-Stack", "Frontend", "Backend"];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-black" />
            <span className="text-sm font-mono text-black">PORTFÓLIO</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-black" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Projetos</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos mais recentes. Cada projeto representa dedicação, qualidade e inovação.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-mono text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-black text-white shadow-lg"
                  : "bg-black/10 text-black hover:bg-black/20"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group"
            >
              {/* Card */}
              <div className="h-full flex flex-col rounded-2xl bg-gradient-to-br from-black/5 to-black/10 border border-black/20 overflow-hidden hover:border-black/40 transition-all hover:shadow-2xl">
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-black/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 backdrop-blur-sm"
                  >
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </motion.div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm ${
                      project.status === "Completo"
                        ? "bg-green-500/90 text-white"
                        : "bg-yellow-500/90 text-black"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Title & Category */}
                  <div className="mb-3">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-black/10 text-black rounded-full text-xs font-mono font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold mb-2 tracking-wide uppercase text-black">Features:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs bg-black/10 px-2 py-1 rounded text-black/70">
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-xs bg-black/10 px-2 py-1 rounded text-black/70">
                          +{project.features.length - 3}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-bold mb-3 tracking-wide uppercase text-black">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-black/5 hover:bg-black/10 text-black rounded text-xs font-mono font-medium border border-black/10 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-black/5 to-black/10 border border-black/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Tem um projeto em mente?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vamos transformar suas ideias em realidade. Entre em contato para discutirmos como posso ajudar no seu próximo grande projeto.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:fernandochipombo@email.com"
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all"
          >
            Começar um Projeto
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-black mb-2">{projects.length}+</div>
            <p className="text-sm md:text-base text-muted-foreground">Projetos Desenvolvidos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-black mb-2">
              5+
            </div>
            <p className="text-sm md:text-base text-muted-foreground">Tecnologias</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-black mb-2">100%</div>
            <p className="text-sm md:text-base text-muted-foreground">Satisfação</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
