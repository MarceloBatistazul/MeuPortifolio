import { CheckCircle2, Cpu, FileCode2, MessageSquare, Rocket, Users } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Rocket,
      title: "Foco em Performance",
      description: "Aplicações otimizadas para velocidade máxima e melhor experiência do usuário.",
      number: "01"
    },
    {
      icon: FileCode2,
      title: "Código Limpo",
      description: "Seguindo padrões de clean code, SOLID e boas práticas da indústria.",
      number: "02"
    },
    {
      icon: Cpu,
      title: "Full Stack",
      description: "Visão completa do desenvolvimento, do front-end ao back-end e infraestrutura.",
      number: "03"
    },
    {
      icon: Users,
      title: "Pensamento de Produto",
      description: "Foco no usuário final e em soluções que geram valor real para o negócio.",
      number: "04"
    },
    {
      icon: MessageSquare,
      title: "Comunicação Clara",
      description: "Transparência no processo, atualizações constantes e fácil diálogo.",
      number: "05"
    },
    {
      icon: CheckCircle2,
      title: "Entrega de Qualidade",
      description: "Compromisso com prazos e excelência em cada linha de código.",
      number: "06"
    }
  ];

  return (
    <section id="diferenciais" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Diferenciais</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Por que me <span className="text-gradient">escolher</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">
            Diferenciais que fazem a diferença no resultado final do seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => (
            <div 
              key={item.title}
              className="group premium-card p-8 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/50 font-medium">
                  {item.number}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Hover line */}
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;