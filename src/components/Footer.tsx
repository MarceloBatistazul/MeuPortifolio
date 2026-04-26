import { Github, Linkedin, Mail, Heart, ArrowUp, Globe, Instagram } from "lucide-react";
import type { SiteLanguage } from "@/pages/Index";

type FooterProps = {
  language: SiteLanguage;
};

const Footer = ({ language }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/MarceloBatistazul", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/marcelo-batista-561871219/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:batistazul37@gmail.com", label: "Email" },
    { icon: Globe, href: "https://mbcodesolutions.vercel.app/", label: "MB Code Solutions" },
    { icon: Instagram, href: "https://www.instagram.com/mb_code_solutions?igsh=MWFxdmZsM2U0d25xbg==", label: "Instagram MB Code Solutions" },
  ];

  const text =
    language === "pt"
      ? {
          description: "Desenvolvimento de aplicações web completas com foco em arquitetura, segurança, performance e experiência do usuário.",
          freelance: "Atuação freelancer em sistemas web, APIs REST e integrações para digitalização de processos.",
          madeWith: "Feito com",
          andCode: "e muito código",
          backToTop: "Voltar ao topo",
        }
      : {
          description: "Full stack web application development focused on architecture, security, performance and user experience.",
          freelance: "Freelance work in web systems, REST APIs and integrations for process digitalization.",
          madeWith: "Built with",
          andCode: "and a lot of code",
          backToTop: "Back to top",
        };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50 bg-card/20">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center max-w-md space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="font-display text-2xl font-bold text-gradient">Marcelo Batista</span>
                <span className="px-2 py-1 text-xs rounded-full border border-primary/50 text-primary font-medium">
                  Full Stack Software Engineer
                </span>
              </div>

              <span className="text-sm text-muted-foreground">{text.description}</span>
            </div>

            <div className="space-y-2">
              <a
                href="https://mbcodesolutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold tracking-wide hover:underline transition"
              >
                MB Code Solutions
              </a>

              <p className="text-sm text-muted-foreground">{text.freelance}</p>
            </div>

            <p className="text-sm text-muted-foreground">Ribeirão Preto - SP | batistazul37@gmail.com | +55 16 99742-9305</p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group p-3 rounded-xl border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </a>
            ))}
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
              © {currentYear} • {text.madeWith}
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              {text.andCode}
            </p>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-border bg-card/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-[52%] hidden md:flex items-center justify-center"
          aria-label={text.backToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;


