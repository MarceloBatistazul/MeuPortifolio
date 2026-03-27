import { Code2, Lightbulb, Target, Zap, Sparkles } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Back-end Estruturado",
      description: "APIs REST com C#/.NET e NestJS, arquitetura em camadas e organização por domínio.",
    },
    {
      icon: Zap,
      title: "Performance e Escalabilidade",
      description: "Soluções preparadas para crescer com foco em desempenho, segurança e manutenção.",
    },
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Implementações alinhadas a metas de negócio, usabilidade e produtividade da operação.",
    },
    {
      icon: Lightbulb,
      title: "Evolução Contínua",
      description: "Atualização constante em boas práticas, arquitetura de software e qualidade técnica.",
    },
  ];

  const stats = [
    { value: "1+", label: "Ano de experiência", suffix: "" },
    { value: "5+", label: "Projetos entregues", suffix: "" },
    { value: "14+", label: "Tecnologias aplicadas", suffix: "" },
  ];

  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
  ];

  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Sobre mim</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-8 animate-fade-up delay-100">
            Desenvolvimento full stack com foco em <span className="text-gradient">arquitetura</span> e{" "}
            <span className="text-gradient">impacto real</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-up delay-200">
            Sou Desenvolvedor Full Stack com experiência na construção de aplicações web completas, atuando do
            levantamento de requisitos à implementação e manutenção. No back-end, trabalho com C#/.NET e Node.js
            (NestJS), criando APIs seguras e escaláveis com boas práticas de arquitetura e DDD. No front-end,
            desenvolvo interfaces com React e TypeScript priorizando performance, usabilidade e experiência do
            usuário.
          </p>
        </div>

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
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="premium-card p-10 md:p-12 animate-fade-up delay-500">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="font-display text-5xl md:text-6xl font-bold text-gradient">{stat.value}</span>
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 premium-card p-8 animate-fade-up delay-[550ms]">
          <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest">Idiomas</p>
          <div className="flex flex-wrap gap-3">
            {languages.map((language) => (
              <span
                key={language.name}
                className="px-4 py-2 text-sm rounded-full border border-border bg-card/30 text-foreground"
              >
                {language.name} • {language.level}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-fade-up delay-600">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Compromisso com qualidade, clareza técnica e evolução contínua</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
