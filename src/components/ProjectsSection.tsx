import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const isValidLink = (value: string | null) => Boolean(value && value !== "null" && value !== "false");

  const projects = [
    {
      title: "Joave Store - E-commerce",
      description:
        "Loja virtual com front-end em React e back-end em C#/.NET (ASP.NET Core), com autenticação JWT, Entity Framework Core e MySQL.",
      image: "/img/JoaveLoja.png",
      tags: ["React", "TypeScript", "C#", ".NET", "Entity Framework Core", "MySQL", "JWT"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "Diário Ile Verte - Plataforma Interna",
      description:
        "Plataforma para gestão de tarefas e comunicados internos, com React no front-end e API NestJS organizada por módulos com conceitos de DDD.",
      image: "/img/ileverte.png",
      tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "JWT"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "Meu Lar Imobiliária - Sistema Web",
      description:
        "Sistema com área administrativa para gestão de imóveis e leads, incluindo pipeline comercial, autenticação JWT e API REST com Node.js/Express.",
      image: "/img/Meu Lar imobilaria.jpg",
      tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "REST API"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "ICE Telas - Landing Page Institucional",
      description:
        "Landing page institucional responsiva, com foco em conversão, identidade visual e contato comercial.",
      image: "/img/IceTelasRedesDeProteção.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Git"],
      github: null,
      demo: "https://www.icetelas.com.br/",
      featured: true,
    },
    {
      title: "MB Code Solutions",
      description:
        "Site institucional da atuação freelancer com apresentação de serviços, projetos e canais de contato.",
      image: "/img/mbcode.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Git"],
      github: null,
      demo: "https://mbcodesolutions.vercel.app/#home",
      featured: true,
    },
  ];

  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-30 rotate-180" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Portfólio</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">
            Selecionados para demonstrar minha atuação em produtos reais, com foco em arquitetura, regras de negócio,
            segurança e experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className="group premium-card overflow-hidden animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {isValidLink(project.github) && (
                      <a
                        href={project.github || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir repositório do projeto ${project.title}`}
                        className="p-4 rounded-full glass text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-6 h-6" aria-hidden="true" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir demo do projeto ${project.title}`}
                        className="p-4 rounded-full glass text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-6 h-6" aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
                      Destaque
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-secondary text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center animate-fade-up delay-600">
          <Button variant="outline" size="lg" className="group" asChild>
            <a
              href="https://github.com/MarceloBatistazul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir perfil GitHub de Marcelo Batista"
            >
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              Ver mais no GitHub
              <ArrowUpRight
                className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

