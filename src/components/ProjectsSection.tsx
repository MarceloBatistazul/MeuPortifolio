import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Loja Virtual Joave",
      description: "Plataforma completa de e-commerce com gestão de produtos, carrinho inteligente, pagamentos integrados e dashboard administrativo em tempo real.",
      image: "/public/img/JoaveLoja.png",
      tags: ["React", "Node.js", "Mysql", "JWT"],
      github: "null",
      demo: "null",
      featured: true
    },
    {
      title: "Ice Telas Redes de Proteção",
      description: "Site institucional para empresa especializada em telas e redes de proteção.",
      image: "/public/img/IceTelasRedesDeProteção.png",
      tags: ["React", "TypeScript", "talwind", "Git"],
      github: "null",
      demo: "https://www.icetelas.com.br/",
      featured: true
    },
    {
      title: "Imobiliária Meu Lar Imovéis",
      description: "Dashboard administrativo para imobiliária com gerenciamento de imóveis, clientes e agendamentos.",
      image: "/public/img/Meu Lar imobilaria.jpg",
      tags: ["React", "Node.js", "REST API", "Geolocation"],
      github: "null",
      demo: "null",
      featured: true
    },
    {
      title: "Ecovel Solutions",
      description: "Site institucional para empresa especializada em segurança privada.",
      image: "/public/img/Ecovel.jpg",
      tags: ["React", "typescript", "tailwind", "Git"],
      github: "null",
      demo: null,
      featured: true
    }
  ];

  return (
    <section id="projetos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-30 rotate-180" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Portfolio</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">
           Projetos recentes e marcantes: uma seleção do meu trabalho como freelancer e de iniciativas pessoais que demonstram minhas habilidades técnicas e criativas
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="group premium-card overflow-hidden animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full glass text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-full glass text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
                    Destaque
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
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

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="group premium-card p-6 animate-fade-up"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-secondary/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up delay-600">
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Ver mais no GitHub
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
