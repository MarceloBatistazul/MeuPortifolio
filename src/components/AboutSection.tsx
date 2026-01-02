import { Code2, Lightbulb, Target, Zap, Sparkles } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Código limpo, legível e manutenível que escala"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização obsessiva para velocidade máxima"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Soluções que geram valor real e mensurável"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Explorando o que há de melhor em tecnologia"
    }
  ];

  const stats = [
  { value: "1", label: "Ano e 7 meses de Experiência", suffix: "" },
  { value: "4", label: "Projetos Concluídos", suffix: "" },
  { value: "4", label: "Clientes Atendidos", suffix: "" },
];

  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Sobre mim</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-8 animate-fade-up delay-100">
            Desenvolvedor com paixão por{" "}
            <span className="text-gradient">craft</span> e{" "}
            <span className="text-gradient">excelência</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-up delay-200">
            Sou Desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas e atualmente cursando 
            Pós-graduação em Engenharia de Software. Atuo na construção de soluções escaláveis, seguras e 
            bem arquitetadas, unindo excelência técnica, visão de produto e atenção aos detalhes para entregar 
            sistemas que geram valor real para negócios e usuários.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="group premium-card p-8 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                <item.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="premium-card p-10 md:p-12 animate-fade-up delay-500">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group"
              >
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="font-display text-5xl md:text-6xl font-bold text-gradient">
                    {stat.value}
                  </span>
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <div className="flex justify-center mt-16 animate-fade-up delay-600">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Sempre aprendendo, sempre evoluindo</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;