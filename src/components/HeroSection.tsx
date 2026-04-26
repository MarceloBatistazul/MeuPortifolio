import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { SiteLanguage } from "@/pages/Index";

type HeroSectionProps = {
  language: SiteLanguage;
};

const HeroSection = ({ language }: HeroSectionProps) => {
  const content =
    language === "pt"
      ? {
          availability: "Disponível para projetos",
          titleLine1: "Full Stack",
          titleAccent: "Software",
          titleLine3: "Engineer",
          description:
            "Engenheiro de software com 2+ anos construindo produtos web para operações comerciais e internas. Atuo na entrega end-to-end, da definição de requisitos ao deploy, com foco em APIs robustas, arquitetura sustentável e melhoria de fluxo para o negócio.",
          chips: ["Entrega ponta a ponta", "Arquitetura orientada a domínio", "APIs seguras", "Performance", "Manutenibilidade"],
          stats: [
            { value: "2+", label: "anos em projetos reais" },
            { value: "5+", label: "sistemas entregues" },
            { value: "100%", label: "foco em valor de produto" },
            { value: "B2B", label: "contexto principal" },
          ],
          viewProjects: "Ver Projetos",
          contact: "Entrar em Contato",
        }
      : {
          availability: "Available for projects",
          titleLine1: "Full Stack",
          titleAccent: "Software",
          titleLine3: "Engineer",
          description:
            "Software engineer with 2+ years building web products for operational and commercial teams. I work end-to-end, from requirements to deployment, focusing on robust APIs, sustainable architecture, and measurable workflow improvements.",
          chips: ["End-to-end delivery", "Domain-oriented architecture", "Secure APIs", "Performance", "Maintainability"],
          stats: [
            { value: "2+", label: "years in real projects" },
            { value: "5+", label: "systems delivered" },
            { value: "100%", label: "product-value driven" },
            { value: "B2B", label: "primary context" },
          ],
          viewProjects: "View Projects",
          contact: "Get in Touch",
        };

  return (
    <section className="relative min-h-[100svh] pt-28 lg:pt-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial animate-pulse-glow" />
      <div className="absolute top-10 right-[10%] w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float-slow" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.15fr] items-center gap-16 lg:gap-24">
          <div className="flex justify-center lg:justify-start -translate-y-6 lg:-translate-y-12">
            <div className="relative group -translate-y-6 md:-translate-y-12 lg:-translate-y-16">
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-glow" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              <div className="absolute -inset-12 rounded-full border border-primary/5" />
            
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden avatar-glow-lg group-hover:scale-105 transition-transform duration-700">
                <img
                  src="/img/FotoPerfilDev.webp"
                  alt="Marcelo Batista - Full Stack Developer"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 12rem"
                  decoding="async"
                />
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground/80">{content.availability}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Software Engineer
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-muted-foreground border border-border rounded-full bg-card/30">
                <MapPin className="w-3 h-3" />
                Ribeirão Preto, SP
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              {content.titleLine1}
              <br />
              <span className="text-gradient">{content.titleAccent}</span>
              <br />
              {content.titleLine3}
            </h1>

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-lg lg:max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-light">
              {content.description}
            </p>

            <div className="animate-fade-up delay-250 flex flex-wrap justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-8">
              {content.chips.map((chip, index) => (
                <span key={chip}>
                  {chip}
                  {index < content.chips.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>

            <div className="animate-fade-up delay-300 flex gap-10 justify-center lg:justify-start mb-10 flex-wrap">
              {content.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#projetos">
                  {content.viewProjects}
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>

              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contato">{content.contact}</a>
              </Button>
            </div>

            <div className="animate-fade-up delay-500 flex justify-center lg:justify-start gap-4">
              {[
                { href: "https://github.com/MarceloBatistazul", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/marcelo-batista-561871219/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:batistazul37@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="group relative p-3.5 rounded-full border border-border bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-500"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


