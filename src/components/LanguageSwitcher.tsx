import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 right-4 md:right-20 z-50 flex items-center gap-1 bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full p-1"
    >
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 md:px-4 py-1 md:py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 ${
          language === "en"
            ? "bg-red-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className={`px-2 md:px-4 py-1 md:py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 ${
          language === "pt"
            ? "bg-red-600 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        PT
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
