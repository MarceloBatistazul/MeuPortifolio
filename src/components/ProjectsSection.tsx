import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SiteLanguage } from "@/pages/Index";

type ProjectsSectionProps = {
  language: SiteLanguage;
};

type ProjectDetail = {
  title: string;
  image: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  differentiators: string[];
};

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const isValidLink = (value: string | null) => Boolean(value && value !== "null" && value !== "false");

  const projects: ProjectDetail[] =
    language === "pt"
      ? [
          {
            title: "Joave Store - E-commerce",
            problem:
              "A operação precisava centralizar catálogo, carrinho e checkout com controle seguro de usuários e base de dados consistente para crescimento de vendas.",
            solution:
              "Implementei um e-commerce full stack com fluxo de compra completo, autenticação JWT, gerenciamento de produtos e persistência relacional para operação diária.",
            technicalDecisions: [
              "Back-end em ASP.NET Core com separação por camadas para isolar regra de negócio.",
              "Entity Framework Core para mapeamento e manutenção consistente das entidades.",
              "JWT para sessão stateless e segurança em rotas críticas.",
            ],
            differentiators: [
              "Base pronta para expansão de catálogo e novos módulos comerciais.",
              "Modelo de dados pensado para relatórios e integração futura.",
            ],
            image: "/img/JoaveLoja.png",
            tags: ["React", "TypeScript", "C#", ".NET", "Entity Framework Core", "MySQL", "JWT"],
            github: null,
            demo: null,
            featured: true,
          },
          {
            title: "Diário Ile Verte - Plataforma Interna",
            problem:
              "A equipe precisava organizar comunicados e tarefas em um fluxo único para reduzir ruído operacional e dar rastreabilidade às atividades internas.",
            solution:
              "Desenvolvi uma plataforma interna com painéis por perfil, cadastro de tarefas e publicação de comunicados, integrando front-end React e API NestJS modular.",
            technicalDecisions: [
              "Arquitetura por módulos no NestJS com separação por contexto de domínio.",
              "Prisma + PostgreSQL para garantir consultas seguras e evolução de schema.",
              "Controle de acesso com JWT para proteger informações internas.",
            ],
            differentiators: [
              "Estrutura preparada para novos fluxos administrativos sem retrabalho.",
              "Padrão de código e contratos focados em manutenção evolutiva.",
            ],
            image: "/img/ileverte.png",
            tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "JWT"],
            github: null,
            demo: null,
            featured: true,
          },
          {
            title: "Meu Lar Imobiliaria - Sistema Web",
            problem:
              "A imobiliária precisava sair de controles dispersos para um sistema único capaz de gerir imóveis, leads e pipeline comercial com visibilidade do processo.",
            solution:
              "Entreguei um sistema web com área administrativa, cadastro de imóveis, acompanhamento de leads e etapas comerciais para acelerar resposta da equipe.",
            technicalDecisions: [
              "API REST em Node.js/Express com rotas separadas por domínio funcional.",
              "Autenticação JWT para proteger área administrativa e operações sensíveis.",
              "Modelagem no MySQL orientada a histórico de leads e funil comercial.",
            ],
            differentiators: [
              "Fluxo comercial estruturado com visão de ponta a ponta.",
              "Base técnica simples de operar e fácil de evoluir com novas regras.",
            ],
            image: "/img/Meu Lar imobiliaria.jpg",
            tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "REST API"],
            github: null,
            demo: null,
            featured: true,
          },
          {
            title: "ICE Telas - Landing Page Institucional",
            problem:
              "A empresa precisava de presença digital com mensagem clara de serviços e canal direto para captação de contatos qualificados.",
            solution:
              "Criei uma landing page responsiva com hierarquia de conteúdo orientada a conversão, reforço de marca e pontos de contato comercial.",
            technicalDecisions: [
              "Componentização em React + TypeScript para manutenção rápida de seções.",
              "Tailwind CSS para padrão visual consistente e adaptação mobile-first.",
            ],
            differentiators: [
              "Performance e legibilidade priorizadas para reduzir abandono de página.",
              "Estrutura pronta para campanhas e iterações de marketing.",
            ],
            image: "/img/IceTelasRedesDeProteção.png",
            tags: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Git"],
            github: null,
            demo: "https://www.icetelas.com.br/",
            featured: true,
          },
          {
            title: "MB Code Solutions",
            problem:
              "Era necessário consolidar minha atuação freelancer em um canal profissional para apresentar serviços, casos e formas de contratação com clareza.",
            solution:
              "Desenvolvi um site institucional com posicionamento técnico, vitrine de projetos e estrutura de contato para gerar oportunidades.",
            technicalDecisions: [
              "Aplicação em React + Vite para carregamento rápido e experiência fluida.",
              "Design system leve com Tailwind para manter consistência visual e evolução contínua.",
            ],
            differentiators: [
              "Narrativa orientada a problema e entrega, não apenas stack.",
              "Base reaproveitável para iterar novos cases e propostas comerciais.",
            ],
            image: "/img/mbcode.png",
            tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Git"],
            github: null,
            demo: "https://mbcodesolutions.vercel.app/#home",
            featured: true,
          },
        ]
      : [
          {
            title: "Joave Store - E-commerce",
            problem:
              "The operation needed a unified catalog, cart and checkout flow with secure user management and a consistent data layer for sales growth.",
            solution:
              "I built a full stack e-commerce system with complete purchase flow, JWT authentication, product management and relational persistence for daily operation.",
            technicalDecisions: [
              "ASP.NET Core back end with layered separation to isolate business logic.",
              "Entity Framework Core for reliable entity mapping and maintainability.",
              "JWT for stateless sessions and route-level protection.",
            ],
            differentiators: [
              "Foundation prepared for catalog expansion and new commercial modules.",
              "Data model ready for reporting and future integrations.",
            ],
            image: "/img/JoaveLoja.png",
            tags: ["React", "TypeScript", "C#", ".NET", "Entity Framework Core", "MySQL", "JWT"],
            github: null,
            demo: null,
            featured: true,
          },
          {
            title: "Ile Verte Journal - Internal Platform",
            problem:
              "The team needed a unified workflow for tasks and internal announcements to reduce communication noise and improve traceability.",
            solution:
              "I delivered an internal platform with role-based views, task management and announcements, integrating a React front end with a modular NestJS API.",
            technicalDecisions: [
              "NestJS modular architecture split by business context.",
              "Prisma + PostgreSQL for safe querying and schema evolution.",
              "JWT-based access control for internal data protection.",
            ],
            differentiators: [
              "Structure ready for new administrative workflows.",
              "Maintainable contracts and coding standards for long-term evolution.",
            ],
            image: "/img/ileverte.png",
            tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "JWT"],
            github: null,
            demo: null,
            featured: true,
          },
          {
            title: "Meu Lar Real Estate - Web System",
            problem:
              "The agency needed to replace fragmented controls with a single system to manage properties, leads and sales pipeline visibility.",
            solution:
              "I delivered a web system with admin area, property management, lead tracking and pipeline stages to speed up team response.",
            technicalDecisions: [
              "Node.js/Express REST API with routes organized by functional domain.",
              "JWT authentication for admin area and sensitive operations.",
              "MySQL schema designed for lead history and pipeline monitoring.",
            ],
            differentiators: [
              "Structured commercial workflow with end-to-end visibility.",
              "Simple operational base that is easy to maintain and expand.",
            ],
            image: "/img/Meu Lar imobiliaria.jpg",
            tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "REST API"],
            github: null,
            demo: null,
            featured: true,
          },
          {
            title: "ICE Telas - Institutional Landing Page",
            problem:
              "The company needed a digital presence with clear service messaging and a direct channel for qualified lead capture.",
            solution:
              "I created a responsive landing page with conversion-oriented content hierarchy, brand reinforcement and clear commercial contact points.",
            technicalDecisions: [
              "React + TypeScript componentization for fast section maintenance.",
              "Tailwind CSS for consistent visuals and mobile-first adaptation.",
            ],
            differentiators: [
              "Performance and readability optimized to reduce drop-off.",
              "Structure ready for campaign iterations.",
            ],
            image: "/img/IceTelasRedesDeProteção.png",
            tags: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Git"],
            github: null,
            demo: "https://www.icetelas.com.br/",
            featured: true,
          },
          {
            title: "MB Code Solutions",
            problem:
              "I needed to consolidate my freelance positioning into a professional channel that clearly presents services, case studies and contact routes.",
            solution:
              "I developed an institutional website with technical positioning, project showcase and contact structure to generate opportunities.",
            technicalDecisions: [
              "React + Vite application for fast load and smooth interaction.",
              "Lean Tailwind design system for consistency and ongoing iteration.",
            ],
            differentiators: [
              "Narrative focused on problem and delivery, not only stack.",
              "Reusable structure for adding new case studies and proposals.",
            ],
            image: "/img/mbcode.png",
            tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Git"],
            github: null,
            demo: "https://mbcodesolutions.vercel.app/#home",
            featured: true,
          },
        ];

  const text =
    language === "pt"
      ? {
          sectionTag: "Portfolio",
          heading: "Projetos em",
          headingAccent: "Destaque",
          subtitle:
            "Cases reais com foco em problema de negócio, arquitetura, decisões de engenharia e capacidade de entrega em produção.",
          problem: "Problema",
          solution: "Solução",
          decisions: "Decisões técnicas",
          differentials: "Diferenciais",
          badge: "Destaque",
          moreGithub: "Ver mais no GitHub",
          githubAria: "Abrir perfil GitHub de Marcelo Batista",
          repoAria: "Abrir repositório do projeto",
          demoAria: "Abrir demo do projeto",
        }
      : {
          sectionTag: "Portfolio",
          heading: "Featured",
          headingAccent: "Projects",
          subtitle:
            "Real-world cases focused on business problem solving, architecture choices and production-grade delivery.",
          problem: "Problem",
          solution: "Solution",
          decisions: "Technical Decisions",
          differentials: "Differentiators",
          badge: "Featured",
          moreGithub: "See more on GitHub",
          githubAria: "Open Marcelo Batista GitHub profile",
          repoAria: "Open project repository",
          demoAria: "Open project demo",
        };

  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-30 rotate-180" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">{text.sectionTag}</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            {text.heading} <span className="text-gradient">{text.headingAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light animate-fade-up delay-200">{text.subtitle}</p>
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
                        aria-label={`${text.repoAria} ${project.title}`}
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
                        aria-label={`${text.demoAria} ${project.title}`}
                        className="p-4 rounded-full glass text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-6 h-6" aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
                      {text.badge}
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

                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-6">
                    <p>
                      <span className="text-foreground font-medium">{text.problem}: </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="text-foreground font-medium">{text.solution}: </span>
                      {project.solution}
                    </p>

                    <div>
                      <p className="text-foreground font-medium mb-1">{text.decisions}:</p>
                      <ul className="space-y-1 list-disc pl-5">
                        {project.technicalDecisions.map((decision) => (
                          <li key={decision}>{decision}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-foreground font-medium mb-1">{text.differentials}:</p>
                      <ul className="space-y-1 list-disc pl-5">
                        {project.differentiators.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

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
            <a href="https://github.com/MarceloBatistazul" target="_blank" rel="noopener noreferrer" aria-label={text.githubAria}>
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              {text.moreGithub}
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








