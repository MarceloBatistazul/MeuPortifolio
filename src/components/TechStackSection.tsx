import type { SiteLanguage } from "@/pages/Index";

type TechStackSectionProps = {
  language: SiteLanguage;
};

const TechStackSection = ({ language }: TechStackSectionProps) => {
  const content =
    language === "pt"
      ? {
          section: "Tecnologias",
          heading: "Stack e",
          headingAccent: "Ferramentas",
          subtitle: "Stack aplicada em projetos reais, com foco em produto, colaboração e entrega consistente de valor.",
          additionalTitle: "Competências complementares",
          categories: [
            {
              title: "Front-end",
              color: "from-blue-500/20 to-cyan-500/10",
              description: "Transformo requisitos em experiências claras, modernas e confiáveis para o usuário final.",
              technologies: ["React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS"],
            },
            {
              title: "Back-end",
              color: "from-green-500/20 to-emerald-500/10",
              description: "Estruturo APIs e regras de negócio com foco em performance, segurança e evolução contínua.",
              technologies: ["C#", ".NET / ASP.NET Core", "Node.js", "NestJS", "Express"],
            },
            {
              title: "Banco de Dados",
              color: "from-orange-500/20 to-amber-500/10",
              description: "Modelo dados para sustentar produtos estáveis, com consultas eficientes e manutenção simples.",
              technologies: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
            },
            {
              title: "Arquitetura e Ferramentas",
              color: "from-purple-500/20 to-pink-500/10",
              description: "Aplico boas práticas para acelerar entregas, elevar qualidade e reduzir risco em produção.",
              technologies: ["DDD", "REST APIs", "JWT / OAuth2", "Jest", "Testing (Unit & Integration)", "Git / GitHub", "Docker", "Swagger", "Scrum", "AWS", "CI/CD"],
            },
          ],
          skills: ["POO", "Arquitetura em camadas", "Clean Code", "Jest", "Node.js Test Runner", "Webhooks", "Responsividade", "UX orientada a produto", "DDD"],
        }
      : {
          section: "Technologies",
          heading: "Stack and",
          headingAccent: "Tools",
          subtitle: "Production stack used in real projects, with focus on product outcomes, collaboration and consistent delivery.",
          additionalTitle: "Complementary capabilities",
          categories: [
            {
              title: "Front-end",
              color: "from-blue-500/20 to-cyan-500/10",
              description: "I turn requirements into clear, modern and reliable user experiences.",
              technologies: ["React", "TypeScript", "JavaScript", "Angular", "Tailwind CSS"],
            },
            {
              title: "Back-end",
              color: "from-green-500/20 to-emerald-500/10",
              description: "I design APIs and business rules with focus on performance, security and long-term evolution.",
              technologies: ["C#", ".NET / ASP.NET Core", "Node.js", "NestJS", "Express"],
            },
            {
              title: "Databases",
              color: "from-orange-500/20 to-amber-500/10",
              description: "I model data for stable products, efficient queries and simple maintenance.",
              technologies: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
            },
            {
              title: "Architecture and Tooling",
              color: "from-purple-500/20 to-pink-500/10",
              description: "I apply engineering practices that speed up delivery and reduce production risk.",
              technologies: ["DDD", "REST APIs", "JWT / OAuth2", "Jest", "Testing (Unit & Integration)", "Git / GitHub", "Docker", "Swagger", "Scrum", "AWS", "CI/CD"],
            },
          ],
          skills: ["OOP", "Layered architecture", "Clean Code", "Jest", "Node.js Test Runner", "Webhooks", "Responsive design", "Product-oriented UX", "DDD"],
        };

  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">{content.section}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            {content.heading} <span className="text-gradient">{content.headingAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.categories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group premium-card p-8 animate-fade-up"
              style={{ animationDelay: `${(categoryIndex + 3) * 100}ms` }}
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <h3 className="relative font-display text-xl font-semibold mb-3 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-primary/50" />
                {category.title}
              </h3>

              <p className="relative text-sm text-muted-foreground mb-6">{category.description}</p>

              <ul className="relative flex flex-wrap gap-2.5">
                {category.technologies.map((tech, techIndex) => (
                  <li
                    key={tech}
                    className="group/item rounded-full border border-border/70 bg-secondary/25 px-4 py-2.5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                    style={{ animationDelay: `${techIndex * 45}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover/item:bg-primary transition-colors duration-300" />
                      <span className="text-sm font-medium leading-tight text-foreground/90 group-hover/item:text-primary transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up delay-600">
          <p className="text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">{content.additionalTitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {content.skills.map((skill, index) => (
              <span
                key={skill}
                className="group px-5 py-2.5 text-sm font-medium rounded-full border border-border bg-card/30 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-500 cursor-default"
                style={{ animationDelay: `${(index + 7) * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;







