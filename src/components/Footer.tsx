import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp, 
  Globe, 
  Instagram 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/MarceloBatistazul", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/marcelo-batista-561871219/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:batistazul37@gmail.com", label: "Email" },

    // Empresa MB Code Solution
    { icon: Globe, href: "https://mbcodesolutions.vercel.app/", label: "MB Code Solution Site" },
    { icon: Instagram, href: "https://www.instagram.com/mb_code_solutions?igsh=MWFxdmZsM2U0d25xbg==", label: "MB Code Solution Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50 bg-card/20">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-10">

          {/* Brand + Company */}
          <div className="text-center max-w-md space-y-4">

            {/* Name + Badge */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="font-display text-2xl font-bold text-gradient">
                  Marcelo Batista
                </span>

                <span className="px-2 py-1 text-xs rounded-full border border-primary/50 
                text-primary font-medium">
                  Founder • Full Stack Developer
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                Venha conhecer meu trabalho, projetos e soluções tecnológicas inovadoras para transformar suas ideias em realidade digital.
              </span>
            </div>

            {/* Company Description */}
            <div className="space-y-2">
              <a
                href="https://mbcodesolutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold tracking-wide hover:underline transition"
              >
                MB Code Solution
              </a>

              <p className="text-sm text-muted-foreground">
                Desenvolvimento de sistemas, aplicações web e soluções tecnológicas modernas para negócios digitais.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Construindo experiências digitais com código limpo, arquitetura moderna e foco em experiência do usuário.
            </p>

          </div>

          {/* Social + Company Links */}
          <div className="flex gap-3 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group p-3 rounded-xl border border-border bg-card/30 
                text-muted-foreground hover:text-primary hover:border-primary/50
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <social.icon 
                  className="w-5 h-5 transition-transform duration-300 
                  group-hover:scale-110 group-hover:rotate-6"
                />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              © {currentYear} • Feito com
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              e muito código
            </p>
          </div>
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full
          border border-border bg-card/30 text-muted-foreground
          hover:text-primary hover:border-primary/50
          transition-all duration-300 hover:-translate-y-[52%]
          hidden md:flex items-center justify-center"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;