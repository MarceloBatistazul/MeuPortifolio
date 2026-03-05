import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] pt-28 lg:pt-32 flex items-center justify-center overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial animate-pulse-glow" />
      <div className="absolute top-10 right-[10%] w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float-slow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        <div className="grid lg:grid-cols-[1fr_1.15fr] items-center gap-16 lg:gap-24">

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start -translate-y-6 lg:-translate-y-12">
            <div className="relative group -translate-y-6 md:-translate-y-12 lg:-translate-y-16">

              {/* Glows */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-glow" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              <div className="absolute -inset-12 rounded-full border border-primary/5" />

              {/* Image */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden avatar-glow-lg group-hover:scale-105 transition-transform duration-700">
                <img
                  src="/img/FotoPerfilDev.png"
                  alt="Marcelo Batista - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Status */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground/80">Disponível</span>
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Full Stack Developer
              </span>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-muted-foreground border border-border rounded-full bg-card/30">
                <MapPin className="w-3 h-3" />
                Brasil
              </span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Construindo
              <br />
              <span className="text-gradient">experiências</span>
              <br />
              digitais
            </h1>

            {/* Description */}
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-lg lg:max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed font-light">
              Desenvolvendo com <span className="text-foreground font-medium">React</span>,{" "}
              <span className="text-foreground font-medium">Node.js</span> e{" "}
              <span className="text-foreground font-medium">.NET</span>. 
              Transformo ideias complexas em produtos digitais elegantes e de alta performance.
            </p>

            {/* Stack */}
            <div className="animate-fade-up delay-250 flex flex-wrap justify-center lg:justify-start gap-2 text-sm text-muted-foreground mb-8">
              <span>React</span>
              <span>•</span>
              <span>Node.js</span>
              <span>•</span>
              <span>.NET</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>MySQL</span>
            </div>

            {/* Metrics */}
            <div className="animate-fade-up delay-300 flex gap-10 justify-center lg:justify-start mb-10">
              <div>
                <p className="text-2xl md:text-3xl font-semibold">2+</p>
                <p className="text-sm text-muted-foreground">anos</p>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-semibold">5+</p>
                <p className="text-sm text-muted-foreground">projetos</p>
              </div>

              <div>
                <p className="text-2xl md:text-3xl font-semibold">14+</p>
                <p className="text-sm text-muted-foreground">tecnologias</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="#projetos">
                  Ver Projetos
                  <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>

              <Button variant="heroOutline" size="xl" asChild>
                <a href="#contato">Entrar em Contato</a>
              </Button>
            </div>

            {/* Social */}
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
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
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