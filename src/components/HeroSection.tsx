import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial animate-pulse-glow" />
      <div className="absolute top-10 right-[10%] w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ">
          {/* Profile Photo */}
          <div className="animate-scale-in">
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-glow" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              <div className="absolute -inset-12 rounded-full border border-primary/5" />
              
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden avatar-glow-lg group-hover:scale-105 transition-transform duration-700">
                {/* Placeholder - Replace with your photo */}
                
                {
                <img 
                  src="/public/img/FotoPerfilDev.png" 
                  alt="Marcelo Batista"
                  className="w-full h-full object-cover"
                />
                }
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-foreground/80">Disponível</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up">
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
            </div>
            
            <h1 className="animate-fade-up delay-100 font-display text-display-md md:text-display-lg lg:text-display-xl mb-6">
              Construindo
              <br />
              <span className="text-gradient">experiências</span>
              <br className="hidden lg:block" />
              <span className="lg:hidden"> </span>digitais
            </h1>
            
            <p className="animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              Desenvolvedo com <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Node.js</span> e <span className="text-foreground font-medium">TypeScript</span>. 
              Transformo ideias complexas em produtos digitais elegantes e de alta performance.
            </p>
            
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
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
            
            {/* Social Links */}
            <div className="animate-fade-up delay-400 flex justify-center lg:justify-start gap-4">
              {[
                { href: "https://github.com/MarceloBatistazul", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/marcelo-batista-561871219/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:batistazul37@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="group relative p-3.5 rounded-full border border-border bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-500 hover-lift"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-700">
        <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;