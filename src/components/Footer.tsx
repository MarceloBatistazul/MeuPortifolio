import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/MarceloBatistazul", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/marcelo-batista-561871219/", label: "LinkedIn" },
    { icon: Mail, href: "batistazul37@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-border/50 bg-card/20">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Logo/Brand */}
          <div className="text-center">
            <a href="#" className="inline-block mb-3">
              <span className="font-display text-2xl font-bold text-gradient">Marcelo Batista</span>
              <span className="font-display text-2xl font-bold text-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-md">
              Construindo experiências digitais excepcionais com código limpo e atenção aos detalhes.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="group p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              © {currentYear} • Feito com 
              <Heart className="w-4 h-4 text-primary animate-pulse" /> 
              e muito código
            </p>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift hidden md:flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;