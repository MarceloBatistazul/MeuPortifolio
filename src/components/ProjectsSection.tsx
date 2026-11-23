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
            title: "Vibe RP – Portal de Eventos, Shows e Notícias | Desenvolvimento Full Stack",
            problem:
              "Plataforma web para divulgação de eventos, shows, rodeios, notícias e conteúdos relacionados ao entretenimento.",
            solution:
              "Desenvolvimento do front-end em React, TypeScript e Vite, com Tailwind CSS, componentes reutilizáveis e interface responsiva. Back-end em Node.js e NestJS com arquitetura modular por domínios de negócio. APIs RESTful integram o portal público ao CMS próprio, que gerencia eventos, notícias, blog, páginas institucionais e configurações. Banco PostgreSQL com Prisma ORM e migrations; arquivos e mídias armazenados diretamente no banco. Integração entre front-end e back-end com tratamento de requisições, autenticação e gerenciamento de dados. Aplicação publicada em produção, com frontend na Vercel e API e banco de dados no Render.",
            technicalDecisions: [
              "Front-end em React, TypeScript e Vite, estilizado com Tailwind CSS e interface responsiva.",
              "Back-end Node.js e NestJS com arquitetura modular e organização por domínios de negócio.",
              "APIs RESTful para integração do portal público com o CMS próprio.",
              "PostgreSQL com Prisma ORM e migrations para evolução do schema.",
              "Gerenciamento de arquivos e mídias com armazenamento diretamente no banco de dados.",
              "Deploy em produção: frontend na Vercel e API e banco de dados no Render.",
            ],
            differentiators: [
              "CMS próprio para gerenciar eventos, notícias, blog, páginas institucionais e configurações do portal.",
              "Integração com autenticação e gerenciamento dos dados do portal.",
              "Stack: React, TypeScript, Vite, Tailwind CSS, Node.js, NestJS, Prisma ORM, PostgreSQL, REST API, Git, Vercel e Render.",
            ],
            image: "/img/image.png",
            tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST API", "Git", "Vercel", "Render"],
            github: null,
            demo: "https://www.viberp.com.br/",
            featured: true,
          },
          {
            title: "Joave Store – E-commerce Full Stack",
            problem:
              "A Joave Store precisava de uma experiência de compra online que reunisse catálogo de produtos, carrinho e checkout, com gestão de usuários segura e dados organizados para apoiar a operação e o crescimento da loja.",
            solution:
              "Desenvolvi uma aplicação de e-commerce full stack, conectando uma interface em React e TypeScript a um back-end em ASP.NET Core. A solução contempla gerenciamento de produtos, autenticação de usuários com JWT e persistência relacional em MySQL, estruturando o fluxo de compra para o uso diário da loja.",
            technicalDecisions: [
              "API desenvolvida em C# e ASP.NET Core, com camadas organizadas para separar responsabilidades e regras de negócio.",
              "Entity Framework Core para mapear as entidades e integrar a aplicação ao banco de dados MySQL.",
              "Autenticação baseada em JWT para proteger o acesso de usuários e operações restritas.",
              "Front-end em React e TypeScript para apresentar o catálogo e os fluxos da loja.",
            ],
            differentiators: [
              "Estrutura que centraliza o catálogo e os principais passos da jornada de compra.",
              "Separação entre interface, API e persistência, facilitando a manutenção e a evolução do sistema.",
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
            title: "Vibe RP – Events, Shows & News Portal | Full Stack Development",
            problem:
              "A web platform for promoting events, shows, rodeos, news, and entertainment related content.",
            solution:
              "Developed the front end with React, TypeScript, and Vite, using Tailwind CSS, reusable components, and a responsive interface. Built a Node.js and NestJS back end with modular business domain architecture. RESTful APIs connect the public portal to a custom CMS for managing events, news, blog posts, institutional pages, and portal settings. PostgreSQL is managed with Prisma ORM and migrations; files and media are stored directly in the database. Integrated the front end and back end with request handling, authentication, and data management. Deployed to production with the front end on Vercel and the API and database on Render.",
            technicalDecisions: [
              "React, TypeScript, and Vite front end with Tailwind CSS and responsive reusable components.",
              "Node.js and NestJS back end with modular architecture organized by business domain.",
              "RESTful APIs connecting the public portal to its custom CMS.",
              "PostgreSQL managed with Prisma ORM and migrations.",
              "File and media management with content stored directly in the database.",
              "Production deployment: front end on Vercel; API and database on Render.",
            ],
            differentiators: [
              "Custom CMS for managing events, news, blog posts, institutional pages, and portal settings.",
              "Integrated authentication and data management.",
              "Stack: React, TypeScript, Vite, Tailwind CSS, Node.js, NestJS, Prisma ORM, PostgreSQL, REST API, Git, Vercel, and Render.",
            ],
            image: "/img/image.png",
            tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST API", "Git", "Vercel", "Render"],
            github: null,
            demo: "https://www.viberp.com.br/",
            featured: true,
          },
          {
            title: "Joave Store – Full Stack E-commerce",
            problem:
              "Joave Store needed an online shopping experience that brought together its product catalog, cart, and checkout, with secure user management and organized data to support daily operations and growth.",
            solution:
              "Built a full stack e-commerce application, connecting a React and TypeScript interface to an ASP.NET Core back end. The solution includes product management, JWT user authentication, and relational persistence with MySQL, supporting the store's day-to-day purchase flow.",
            technicalDecisions: [
              "C# and ASP.NET Core API, organized in layers to separate responsibilities and business logic.",
              "Entity Framework Core for entity mapping and integration with the MySQL database.",
              "JWT-based authentication to protect user access and restricted operations.",
              "React and TypeScript front end for the product catalog and store workflows.",
            ],
            differentiators: [
              "A unified structure for the product catalog and key steps in the shopping journey.",
              "Separation of interface, API, and persistence supports maintenance and future development.",
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
                className="group premium-card h-full flex flex-col overflow-hidden animate-fade-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative h-64 shrink-0 overflow-hidden">
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

                <div className="flex flex-1 flex-col p-8">
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

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
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








