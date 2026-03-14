import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a
            href="https://github.com/Gilson-chipombo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/gilson-bravo-fernando-chipombo-aa0ba4209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="fernandochipombo@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
