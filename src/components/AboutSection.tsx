import { Code2, Lightbulb, Target, Zap, Sparkles } from "lucide-react";
import type { SiteLanguage } from "@/pages/Index";

type AboutSectionProps = {
  language: SiteLanguage;
};

const AboutSection = ({ language }: AboutSectionProps) => {
  const content =
    language === "pt"
      ? {
          sectionTitle: "Sobre mim",
          headingStart: "Construo sistemas full stack com",
          headingAccent1: "arquitetura de produção",
          headingEnd: "e impacto operacional",
          paragraph:
            "Atuo como Full Stack Developer entregando produtos que resolvem gargalos reais de operação: fluxo comercial, administração interna e escalabilidade de plataforma. Minha abordagem combina descoberta de requisitos com stakeholders, modelagem de regras de negócio e implementação incremental com observabilidade, segurança e manutenção planejada.",
          highlights: [
            {
              icon: Code2,
              title: "Back-end orientado a domínio",
              description: "APIs em C#/.NET e NestJS com separação por contexto de negócio, contratos claros e controle de regras críticas.",
            },
            {
              icon: Zap,
              title: "Performance com previsibilidade",
              description: "Otimizo consultas, estrutura de dados e fluxo de requisições para manter resposta rápida sob crescimento de uso.",
            },
            {
              icon: Target,
              title: "Entrega orientada a produto",
              description: "Priorização por impacto, ciclos curtos de validação e evolução contínua com foco em resultado para o cliente final.",
            },
            {
              icon: Lightbulb,
              title: "Qualidade de engenharia",
              description: "Código legivel, padrões consistentes, documentacao objetiva e base preparada para onboarding e manutenção.",
            },
          ],
          stats: [
            { value: "2+", label: "Anos em projetos com cliente" },
            { value: "5+", label: "Produtos web em operação" },
            { value: "E2E", label: "Atuação do requisito ao deploy" },
          ],
          languagesTitle: "Idiomas",
          languages: [
            { name: "Português", level: "Nativo" },
            { name: "Inglês", level: "Intermediário" },
          ],
          footer: "Compromisso com clareza técnica, ownership e evolução contínua do produto",
        }
      : {
          sectionTitle: "About",
          headingStart: "I build full stack systems with",
          headingAccent1: "production-ready architecture",
          headingEnd: "and operational impact",
          paragraph:
            "I work as a Full Stack Developer delivering products that solve real operational bottlenecks: sales flow, internal management and platform scalability. My approach combines stakeholder requirement discovery, business rule modeling, and incremental implementation with observability, security and maintainability.",
          highlights: [
            {
              icon: Code2,
              title: "Domain-oriented back end",
              description: "C#/.NET and NestJS APIs structured by business context, with clear contracts and controlled critical rules.",
            },
            {
              icon: Zap,
              title: "Predictable performance",
              description: "I optimize queries, data structures and request flow to keep response times stable under growth.",
            },
            {
              icon: Target,
              title: "Product-driven delivery",
              description: "Impact-based prioritization, short validation cycles and continuous evolution focused on user outcomes.",
            },
            {
              icon: Lightbulb,
              title: "Engineering quality",
              description: "Readable code, consistent standards, objective documentation and maintainable foundations.",
            },
          ],
          stats: [
            { value: "2+", label: "Years in client-facing projects" },
            { value: "5+", label: "Web products in production" },
            { value: "E2E", label: "From requirements to deployment" },
          ],
          languagesTitle: "Languages",
          languages: [
            { name: "Portuguese", level: "Native" },
            { name: "English", level: "Intermediate" },
          ],
          footer: "Committed to technical clarity, ownership and continuous product evolution",
        };

  return (
    <section id="sobre" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">{content.sectionTitle}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-8 animate-fade-up delay-100">
            {content.headingStart} <span className="text-gradient">{content.headingAccent1}</span> {content.headingEnd}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light animate-fade-up delay-200">
            {content.paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {content.highlights.map((item, index) => (
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
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="font-display text-5xl md:text-6xl font-bold text-gradient">{stat.value}</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 premium-card p-8 animate-fade-up" style={{ animationDelay: "550ms" }}>
          <p className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-widest">{content.languagesTitle}</p>
          <div className="flex flex-wrap gap-3">
            {content.languages.map((languageItem) => (
              <span
                key={languageItem.name}
                className="px-4 py-2 text-sm rounded-full border border-border bg-card/30 text-foreground"
              >
                {languageItem.name} • {languageItem.level}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-fade-up delay-600">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{content.footer}</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



