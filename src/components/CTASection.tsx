import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative top */}
          <div className="flex justify-center mb-10 animate-fade-up">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full glass">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Vamos conversar?</span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display text-display-sm md:text-display-md lg:text-display-lg mb-8 animate-fade-up delay-100">
              Vamos construir algo
              <br />
              <span className="text-gradient">incrível juntos</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-up delay-200">
              Estou sempre aberto a novos desafios e oportunidades. 
              Entre em contato e vamos transformar sua ideia em realidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="batistazul@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar em Contato
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="group" asChild>
                <a href="https://www.linkedin.com/in/marcelo-batista-561871219/" target="_blank" rel="noopener noreferrer">
                  Conectar no LinkedIn
                </a>
              </Button>
            </div>
            
            {/* Additional contact info */}
            <div className="mt-16 pt-10 border-t border-border/50 animate-fade-up delay-400">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest font-medium">
                Ou me encontre em
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-sm">
                <a 
                  href="mailto:contato@email.com" 
                  className="text-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  batistazul37@gmail.com
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <a 
                  href="https://github.com/MarceloBatistazul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  github.com/MarceloBatistazul
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <a 
                  href="https://www.linkedin.com/in/marcelo-batista-561871219/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors duration-300 link-underline font-medium"
                >
                  linkedin.com/in/marcelo-batista
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