import { CheckCircle2, Cpu, FileCode2, MessageSquare, Rocket, Users } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Rocket,
      title: "Execução com foco em entrega",
      description: "Planejamento claro, definição de prioridade e implementação orientada a prazo e qualidade.",
      number: "01",
    },
    {
      icon: FileCode2,
      title: "Arquitetura e organização",
      description: "Aplicação de arquitetura em camadas, modularização por domínio e boas práticas de código.",
      number: "02",
    },
    {
      icon: Cpu,
      title: "Capacidade Full Stack",
      description: "Atuação ponta a ponta em interfaces, APIs, regras de negócio, banco de dados e integrações.",
      number: "03",
    },
    {
      icon: Users,
      title: "Visão de produto",
      description: "Decisões técnicas orientadas ao valor de negócio e à experiência real do usuário final.",
      number: "04",
    },
    {
      icon: MessageSquare,
      title: "Comunicação objetiva",
      description: "Alinhamento contínuo de escopo, status e próximos passos com clareza durante todo o projeto.",
      number: "05",
    },
    {
      icon: CheckCircle2,
      title: "Qualidade técnica",
      description: "Compromisso com segurança, consistência de código, documentação de APIs e manutenção evolutiva.",
      number: "06",
    },
  ];

  return (
    <section id="diferenciais" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Diferenciais</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Como eu gero <span className="text-gradient">resultado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">
            Uma abordagem técnica e colaborativa para construir produtos confiáveis e prontos para evoluir.
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
                <span className="font-mono text-xs text-muted-foreground/50 font-medium">{item.number}</span>
              </div>

              <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

              <div className="mt-6 h-px w-0 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
