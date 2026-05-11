import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const experiences = [
  {
    id: 1,
    role: "Desenvolvedor Backend",
    company: "Clou Business Lda",
    location: "Angola",
    period: "2026 — Atual",
    description: "Desenvolvimento e manutenção de sistema SaaS multi-tenant para automação de atendimento e gestão de leads. Responsável pela arquitetura backend e integração com serviços terceiros.",
    responsibilities: [
      "Desenvolvi APIs com NestJS e PostgreSQL aplicando DDD, princípios de SOLID e Clean Architecture",
      "Coordenei a equipe de desenvolvimento",
      "Deploy com CI/CD e github Actions",
      "Integrei com APIs externas (WhatsApp Cloud API, serviços de IA)",
      "Processamento assíncrono com filas (BullMQ + Redis)",
      "Modelei e otimização de banco de dados relacional",
      "Consumi de webhooks e processamento de eventos",
      "Corrigi bugs e e propus melhorias contínuas em produção",
    ],
    skills: ["Node.js", "NestJS", "Docker","PostgreSQL", "Gemini AI", "Redis", "BullMQ", "WhatsApp API", "TypeScript"],
    type: "full-time"
  },
  {
    id: 2,
    role: "Desenvolvedor Full Stack (Freelance)",
    company: "Autônomo",
    location: "Angola",
    period: "2023 — 2025",
    description: "Desenvolvimento de sistemas personalizados para clientes. Atuação completa em stack full-stack com foco em soluções escaláveis.",
    responsibilities: [
      "Desenvolvi de sistemas personalizados para clientes",
      "Criei APIs REST e integração com bancos de dados",
      "Implementei de sistemas de gestão (salários, controle e monitoramento)",
      "Resolvi problemas técnicos em aplicações e infraestrutura",
      "Desenvolvi funcionalidades frontend e backend"
    ],
    skills: ["React", "Node.js", "Docker", "Express", "PostgreSQL", "MongoDB", "TypeScript", "Tailwind CSS"],
    type: "freelance"
  },
  {
    id: 3,
    role: "Desenvolvedor Full Stack Junior (Estágio)",
    company: "ITEL - Instituto de Telecomunições",
    location: "Angola",
    period: "2022",
    description: "Primeiro contato com desenvolvimento profissional. Participação em projetos com supervisão técnica e aprendizado de boas práticas.",
    responsibilities: [
      "Apoiei no desenvolvimento de sistemas web",
      "Participei em projetos com supervisão técnica",
      "Aprendizado de boas práticas de programação",
      "Corrigi bugs e manutenção de sistemas",
      "Colaborei com equipe técnica"
    ],
    skills: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git"],
    type: "internship"
  },
  {
    id: 4,
    role: "Desenvolvedor Full Stack Junior",
    company: "ZonaLink SU",
    location: "Angola",
    period: "2020 — 2021",
    description: "Primeira experiência profissional atuando como desenvolvedor junior em ambiente corporativo.",
    responsibilities: [
      "Desenvolvi funcionalidades frontend e backend",
      "Corrigi bugs e manutenção de sistemas",
      "Colaborei com equipe técnica",
      "Documentei código e processos"
    ],
    skills: ["JavaScript", "HTML/CSS", "Bootstrap", "PHP", "MySQL"],
    type: "full-time"
  }
];

const ExperienceSection = () => {
  const { t } = useLanguage();
  return (
    <section id="experience" className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-background via-background/50 to-background">
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
              {t.experience.title}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-400/30 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t.experience.subtitle}
          </h2>
        </motion.div>

        {/* Timeline/Roadmap */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-black via-black to-transparent transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-6 h-6   transform md:-translate-x-1/2 -translate-x-3 z-10" />

                {/* Card */}
                <div className="ml-12 md:ml-0 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-black/5 to-black/10 border border-black/20 hover:border-black/40 transition-all hover:shadow-xl">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-black" />
                        {exp.role}
                      </h3>
                      <p className="text-lg text-black/70 font-semibold">{exp.company}</p>
                    </div>
                    {exp.type === "full-time" && (
                      <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-mono font-bold">
                        {t.experience.fullTime}
                      </span>
                    )}
                    {exp.type === "internship" && (
                      <span className="px-3 py-1 bg-black/20 text-black rounded-full text-xs font-mono font-bold">
                        {t.experience.internship}
                      </span>
                    )}
                    {exp.type === "freelance" && (
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-600 rounded-full text-xs font-mono font-bold">
                        {t.experience.freelance}
                      </span>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-col md:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-mono">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-3 text-sm tracking-wide uppercase">{t.experience.responsibilities}:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-black" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-bold mb-3 text-sm tracking-wide uppercase">{t.experience.skills}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-black/10 hover:bg-black/20 text-black rounded-full text-xs font-mono font-medium transition-colors border border-black/20"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-black/5 to-black/10 border border-black/20"
        >
          <h3 className="text-2xl font-bold mb-4">{t.experience.totalExperience}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.experience.totalExperienceDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
