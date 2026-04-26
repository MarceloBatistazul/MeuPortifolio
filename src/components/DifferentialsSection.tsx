import { CheckCircle2, Cpu, FileCode2, MessageSquare, Rocket, Users } from "lucide-react";
import type { SiteLanguage } from "@/pages/Index";

type DifferentialsSectionProps = {
  language: SiteLanguage;
};

const DifferentialsSection = ({ language }: DifferentialsSectionProps) => {
  const content =
    language === "pt"
      ? {
          section: "Diferenciais",
          headingPrefix: "Como eu gero",
          headingAccent: "resultado",
          subtitle: "Postura de engenharia aplicada em projetos reais, da descoberta ao suporte pós-entrega.",
          items: [
            {
              icon: Rocket,
              title: "Execução com ownership",
              description: "Converto escopo em plano de entrega, assumo responsabilidade por prazo e qualidade técnica.",
              number: "01",
            },
            {
              icon: FileCode2,
              title: "Arquitetura para evolução",
              description: "Estruturo código para suportar novas regras sem retrabalho, com separação clara de responsabilidades.",
              number: "02",
            },
            {
              icon: Cpu,
              title: "Profundidade full stack",
              description: "Atuo em interface, API, banco e infraestrutura de deploy para reduzir gargalos entre camadas.",
              number: "03",
            },
            {
              icon: Users,
              title: "Decisão orientada a produto",
              description: "Priorizo o que gera impacto em operação e usuário final, equilibrando velocidade e sustentabilidade.",
              number: "04",
            },
            {
              icon: MessageSquare,
              title: "Comunicação de engenharia",
              description: "Registro contexto técnico, trade-offs e próximos passos para manter alinhamento com negócio e time.",
              number: "05",
            },
            {
              icon: CheckCircle2,
              title: "Qualidade operacional",
              description: "Aplico critérios de segurança, observabilidade e padrões de manutenção para reduzir risco em produção.",
              number: "06",
            },
          ],
        }
      : {
          section: "Strengths",
          headingPrefix: "How I drive",
          headingAccent: "results",
          subtitle: "Engineering mindset applied to real projects, from discovery to post-delivery support.",
          items: [
            {
              icon: Rocket,
              title: "Execution with ownership",
              description: "I translate scope into delivery plans and take responsibility for both timelines and technical quality.",
              number: "01",
            },
            {
              icon: FileCode2,
              title: "Architecture for evolution",
              description: "I structure code to support new business rules without costly rewrites.",
              number: "02",
            },
            {
              icon: Cpu,
              title: "Full stack depth",
              description: "I work across UI, API, data layer and deployment to remove cross-layer bottlenecks.",
              number: "03",
            },
            {
              icon: Users,
              title: "Product-oriented decisions",
              description: "I prioritize what generates operational and user impact while balancing speed and sustainability.",
              number: "04",
            },
            {
              icon: MessageSquare,
              title: "Engineering communication",
              description: "I document context, trade-offs and next steps to keep business and technical stakeholders aligned.",
              number: "05",
            },
            {
              icon: CheckCircle2,
              title: "Operational quality",
              description: "I apply security, observability and maintainability practices to reduce production risk.",
              number: "06",
            },
          ],
        };

  return (
    <section id="diferenciais" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">{content.section}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            {content.headingPrefix} <span className="text-gradient">{content.headingAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => (
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



