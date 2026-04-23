const TechStackSection = () => {
  const techCategories = [
    {
      title: "Front-end",
      color: "from-blue-500/20 to-cyan-500/10",
      description: "Transformo requisitos em experiencias claras, modernas e confiaveis para o usuario final.",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "Angular",
        "Tailwind CSS",
      ],
    },
    {
      title: "Back-end",
      color: "from-green-500/20 to-emerald-500/10",
      description: "Estruturo APIs e regras de negocio com foco em performance, seguranca e evolucao continua.",
      technologies: [
        "C#",
        ".NET / ASP.NET Core",
        "Node.js",
        "NestJS",
        "Express",
      ],
    },
    {
      title: "Banco de Dados",
      color: "from-orange-500/20 to-amber-500/10",
      description: "Modelo dados para sustentar produtos estaveis, com consultas eficientes e manutencao simples.",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        // "Prisma ORM",
        // "Entity Framework Core",
      ],
    },
    {
      title: "Arquitetura e Ferramentas",
      color: "from-purple-500/20 to-pink-500/10",
      description: "Aplico boas praticas para acelerar entregas, elevar qualidade e reduzir risco em producao.",
      technologies: [
        "DDD",
        "REST APIs",
        "JWT / OAuth2",
        "Jest",
        "Testing (Unit & Integration)",
        "Git / GitHub",
        "Docker",
        "Swagger",
        "Scrum",
        "AWS",
        "CI/CD",
      ],
    },
  ];

  const additionalSkills = [
    "POO",
    "Arquitetura em camadas",
    "Clean Code",
    "Jest",
    "Node.js Test Runner",
    "Webhooks",
    "Responsividade",
    "UX orientada a produto",
    "DDD",
  ];

  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Tecnologias</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Stack e <span className="text-gradient">Ferramentas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">
            Stack aplicada em projetos reais, com foco em produto, colaboracao e entrega consistente de valor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
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
          <p className="text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">Competencias complementares</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
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
