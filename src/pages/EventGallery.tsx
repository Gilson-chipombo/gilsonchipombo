import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import NASA from "@/assets/NASA.png";
import STEM from "@/assets/STEM.png"
import STEM2 from "@/assets/STEM2.png"
import STEM3 from "@/assets/STEM3.png"

import AOCPC from "@/assets/AOCPC.png"
import AOCPC2 from "@/assets/AOCPC2.png"
import AOCPC3 from "@/assets/AOCPC3.png"

interface EventData {
  id: number;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  category: string;
  photos: string[];
}

const eventGalleryData: EventData[] = [
  {
    id: 1,
    title: "Participation in Hackathon NASA SPACE APPS",
    organization: "Hackathon",
    date: "Março 2025",
    location: "Luanda, Angola",
    description: "Participating in the NASA Space Apps Challenge 2025 was a transformative experience! Working as a team to solve real-world challenges proposed by NASA reinforced the importance of collaboration, creativity, and scientific thinking.",
    category: "Award",
    photos: [
      `${NASA}`
    ]
  },
  {
    id: 2,
    title: "Participate as an instructor in the first edition of the ThinkYoung STEM School in Angola",
    organization: "STEM - Holded at American School of Angola",
    date: "Abril 2026",
    location: "Luanda, Angola",
    description: "The goal was clear and inspiring: to introduce young students to the world of robotics and programming, sparking their interest in technology from an early age. It was an extremely enriching experience teaching coding concepts to such curious, motivated, and talented students was undoubtedly one of the highlights of this journey.",
    category: "Event",
    photos: [
      `${STEM}`,
      `${STEM2}`,
      `${STEM3}`,
    ]
  },
  {
    id: 3,
    title: "🏆 Third Place — ICPC Angolan Collegiate Programming Contest 2025",
    organization: "AOCPC - Programming Contest 2025",
    date: "Setembro 2025",
    location: "Luanda, Angola",
    description: "Conquistamos o 3º lugar no ICPC Angolan Collegiate Programming Contest 2025, representando a Universidade de Luanda – INSTIC. Foram dois dias intensos de raciocínio lógico, trabalho em equipe e superação. Orgulho em fazer parte deste time incrível!",
    category: "Award",
    photos: [
      `${AOCPC}`,
      `${AOCPC2}`,
      `${AOCPC3}`,
    ]
  },
  {
    id: 4,
    title: "Speaker - Frontend Meetup",
    organization: "Frontend Angola Meetup",
    date: "Dezembro 2022",
    location: "Luanda, Angola",
    description: "Palestra sobre otimização de performance em React e melhores práticas de desenvolvimento.",
    category: "Event",
    photos: [
     
    ]
  },
  {
    id: 5,
    title: "Certificação - Advanced Node.js",
    organization: "Tech Academy",
    date: "Maio 2022",
    location: "Online",
    description: "Certificação profissional em desenvolvimento avançado com Node.js e NestJS.",
    category: "Certification",
    photos: [
     
    ]
  }
  
];

export default function EventGallery() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventGalleryData.find(e => e.id === parseInt(id || "0"));

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <ThemeToggle />
        <LanguageSwitcher />
        
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Evento não encontrado</h1>
            <button
              onClick={() => navigate("/awards")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Prêmios
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <ThemeToggle />
      <LanguageSwitcher />

      <main className="flex-1 pt-24 pb-12 px-6 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/awards")}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-8 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Prêmios
          </motion.button>

          {/* Event Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
            
            <div className="flex flex-col md:flex-row gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-600" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>{event.location}</span>
              </div>
              <span className="px-4 py-1 bg-red-600/10 text-red-600 rounded-full text-sm font-semibold">
                {event.organization}
              </span>
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl">
              {event.description}
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {event.photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 aspect-square"
              >
                <motion.img
                  src={photo}
                  alt={`${event.title} - Foto ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Photo Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-muted-foreground"
          >
            <p className="text-lg font-semibold">
              {event.photos.length} {event.photos.length === 1 ? "Foto" : "Fotos"} do Evento
            </p>
          </motion.div>

          {/* Add More Photos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 border border-dashed border-red-600/30 rounded-xl text-center"
          >
            <p className="text-muted-foreground mb-4">
              Quer adicionar mais fotos deste evento?
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg hover:shadow-red-600/50 transition-all font-semibold">
              + Enviar Fotos
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
