import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import type { SiteLanguage } from "@/pages/Index";

type CTASectionProps = {
  language: SiteLanguage;
};

const CTASection = ({ language }: CTASectionProps) => {
  const text =
    language === "pt"
      ? {
          badge: "Vamos conversar?",
          heading1: "Vamos construir uma",
          heading2: "solução eficiente juntos",
          paragraph: "Aberto a oportunidades como Desenvolvedor Full Stack em projetos freelancer, colaborações e novas posições no mercado.",
          contact: "Entrar em Contato",
          linkedin: "Conectar no LinkedIn",
          channels: "Canais diretos",
          emailAria: "Enviar email para Marcelo Batista",
          linkedinAria: "Abrir perfil do LinkedIn de Marcelo Batista",
          githubAria: "Abrir GitHub de Marcelo Batista",
        }
      : {
          badge: "Let us talk",
          heading1: "Let us build an",
          heading2: "efficient solution together",
          paragraph: "Open to Full Stack opportunities in freelance projects, product collaborations and new engineering positions.",
          contact: "Get in Touch",
          linkedin: "Connect on LinkedIn",
          channels: "Direct channels",
          emailAria: "Send email to Marcelo Batista",
          linkedinAria: "Open Marcelo Batista LinkedIn profile",
          githubAria: "Open Marcelo Batista GitHub profile",
        };

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-10 animate-fade-up">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full glass">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">{text.badge}</span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg mb-8 animate-fade-up delay-100">
              {text.heading1}
              <br />
              <span className="text-gradient">{text.heading2}</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up delay-200">
              {text.paragraph}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="mailto:batistazul37@gmail.com" aria-label={text.emailAria}>
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  {text.contact}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="group" asChild>
                <a
                  href="https://www.linkedin.com/in/marcelo-batista-561871219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text.linkedinAria}
                >
                  {text.linkedin}
                </a>
              </Button>
            </div>

            <div className="mt-16 pt-10 border-t border-border/50 animate-fade-up delay-400">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">{text.channels}</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-sm">
                <a
                  href="mailto:batistazul37@gmail.com"
                  aria-label={text.emailAria}
                  className="text-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  batistazul37@gmail.com
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <a
                  href="https://github.com/MarceloBatistazul"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text.githubAria}
                  className="text-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  github.com/MarceloBatistazul
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <a
                  href="https://www.linkedin.com/in/marcelo-batista-561871219/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={text.linkedinAria}
                  className="text-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  linkedin.com/in/marcelo-batista-561871219
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

