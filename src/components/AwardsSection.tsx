import { motion } from "framer-motion";
import { Trophy, Award, Star, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import NASA from "@/assets/NASA.png"

const awards = [
  {
    id: 1,
    title: "Participation in Hackathon NASA SPACE APPS",
    organization: "Hackathon",
    date: "Março 2025",
    location: "Luanda, Angola",
    description: "Participating in the NASA Space Apps Challenge 2025 was a transformative experience! Working as a team to solve real-world challenges proposed by NASA reinforced the importance of collaboration, creativity, and scientific thinking.",
    image: NASA,
    category: "Award",
    type: "gold"
  },
  {
    id: 2,
    title: "Participate as an instructor in the first edition of the ThinkYoung STEM School in Angola",
    organization: "Holded at American School of Angola",
    date: "Abril 2026",
    location: "Luanda, Angola",
    description: "Apresentação sobre arquitetura de microsserviços e boas práticas em desenvolvimento backend.",
    image: "event2.jpg",
    category: "Event",
    type: "silver"
  },
  {
    id: 3,
    title: "🏆 Third Place — ICPC Angolan Collegiate Programming Contest 2025",
    organization: "AOCPC - Programming Contest 2025",
    date: "Setembro 2025",
    location: "Luanda, Angola",
    description: "Conquistamos o 3º lugar no ICPC Angolan Collegiate Programming Contest 2025, representando a Universidade de Luanda – INSTIC. Foram dois dias intensos de raciocínio lógico, trabalho em equipe e superação. Orgulho em fazer parte deste time incrível!",
    image: "event3.jpg",
    category: "Award",
    type: "gold"
  },
  {
    id: 4,
    title: "Participation in Hackathon 42 Luanda",
    organization: "Hackathon",
    date: "Maio 2025",
    location: "Luanda, Angola",
    description: "Participar do primeiro Hackathon da 42 Luanda e chegar à final foi uma das melhores experiências que tive como Software Engineer in Training. Em pouco tempo, conseguimos desenvolver o MapaZZZ, um aplicativo móvel inteligente e acessível que utiliza tecnologia e participação comunitária para mapear, monitorar e prevenir a malária — especialmente em regiões com conectividade limitada.",
    image: "event4.jpg",
    category: "Event",
    type: "silver"
  }
]

const AwardsSection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <section id="awards" className="min-h-screen py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-background via-background/50 to-background">
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
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-600" />
            <Trophy className="w-6 h-6 text-red-600" />
            <span className="text-sm font-mono font-bold text-red-600">AWARDS & ACHIEVEMENTS</span>
            <Trophy className="w-6 h-6 text-red-600" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-red-600" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Prêmios & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Conquistas</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reconhecimentos e participações em eventos que marcaram minha jornada profissional.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card */}
              <div 
                onClick={() => navigate(`/event/${award.id}`)}
                className="h-full flex flex-col rounded-2xl bg-gradient-to-br from-black/5 to-black/10 border border-black/20 overflow-hidden hover:border-red-600/50 transition-all hover:shadow-2xl cursor-pointer hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-black/20">
                  <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-orange-400/10 flex items-center justify-center">
                    {award.type === "gold" && <Trophy className="w-16 h-16 text-yellow-500 opacity-30" />}
                    {award.type === "silver" && <Award className="w-16 h-16 text-gray-400 opacity-30" />}
                    {award.type === "bronze" && <Star className="w-16 h-16 text-orange-600 opacity-30" />}
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-sm ${
                      award.type === "gold"
                        ? "bg-yellow-500/90 text-white"
                        : award.type === "silver"
                        ? "bg-gray-400/90 text-white"
                        : "bg-orange-600/90 text-white"
                    }`}>
                      {award.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{award.title}</h3>
                  
                  {/* Organization */}
                  <p className="text-sm md:text-base text-red-600 font-semibold mb-3">{award.organization}</p>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{award.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{award.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                    {award.description}
                  </p>

                  {/* Icon */}
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center cursor-pointer hover:bg-red-600/30 transition-colors"
                    >
                      {award.type === "gold" && <Trophy className="w-5 h-5 text-yellow-500" />}
                      {award.type === "silver" && <Award className="w-5 h-5 text-gray-500" />}
                      {award.type === "bronze" && <Star className="w-5 h-5 text-orange-600" />}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-black/5 to-black/10 border border-black/20">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">3+</div>
            <p className="text-muted-foreground">Prêmios & Reconhecimentos</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-black/5 to-black/10 border border-black/20">
            <Award className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">6+</div>
            <p className="text-muted-foreground">Eventos & Conferências</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-black/5 to-black/10 border border-black/20">
            <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">2+</div>
            <p className="text-muted-foreground">Certificações Profissionais</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
