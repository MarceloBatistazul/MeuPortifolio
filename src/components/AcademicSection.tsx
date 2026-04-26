import { CalendarDays, GraduationCap, School } from "lucide-react";
import type { SiteLanguage } from "@/pages/Index";

type AcademicItem = {
  course: string;
  institution: string;
  period: string;
  status: string;
  description: string;
};

type AcademicSectionProps = {
  language: SiteLanguage;
};

const AcademicSection = ({ language }: AcademicSectionProps) => {
  const content =
    language === "pt"
      ? {
          section: "Formação",
          heading: "Formação",
          headingAccent: "Acadêmica",
          subtitle: "Minha base acadêmica atual e os próximos passos para aprofundar a atuação em engenharia de software.",
          items: [
            {
              course: "Análise e Desenvolvimento de Sistemas (ADS)",
              institution: "Faculdade Reges de Ribeirão Preto",
              period: "Concluído em 2025 (duração de 3 anos)",
              status: "Concluído",
              description: "Formação com ênfase em desenvolvimento de software, arquitetura de aplicações e modelagem de banco de dados.",
            },
            {
              course: "Engenharia de Software",
              institution: "FIAP",
              period: "Início previsto: 2026",
              status: "Em início",
              description: "Formação com foco em arquitetura de sistemas, desenvolvimento full stack e construção de aplicações escaláveis.",
            },
          ] as AcademicItem[],
        }
      : {
          section: "Education",
          heading: "Academic",
          headingAccent: "Background",
          subtitle: "My current academic foundation and next steps to deepen software engineering practice.",
          items: [
            {
              course: "Systems Analysis and Development",
              institution: "Reges College - Ribeirão Preto",
              period: "Completed in 2025 (3-year program)",
              status: "Completed",
              description: "Program focused on software development, application architecture and database modeling.",
            },
            {
              course: "Software Engineering",
              institution: "FIAP",
              period: "Planned start: 2026",
              status: "Starting",
              description: "Program focused on systems architecture, full stack development and scalable applications.",
            },
          ] as AcademicItem[],
        };

  return (
    <section id="formacao" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">{content.section}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            {content.heading} <span className="text-gradient">{content.headingAccent}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-up delay-200 leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {content.items.map((item, index) => (
            <article
              key={item.course}
              className="group premium-card p-8 animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <GraduationCap className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold uppercase tracking-wide">
                  {item.status}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.course}
              </h3>

              <div className="space-y-2 mb-5">
                <p className="text-sm text-foreground/90 flex items-center gap-2">
                  <School className="w-4 h-4 text-primary/80" />
                  {item.institution}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-primary/80" />
                  {item.period}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;


