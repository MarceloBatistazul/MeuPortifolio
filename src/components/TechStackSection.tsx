const TechStackSection = () => {
  const techCategories = [
    {
      title: "Front-end",
      color: "from-blue-500/20 to-cyan-500/10",
      technologies: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Next.js", level: 80 },
        { name: "SolidJS", level: 70 },
        { name: "React Native", level: 70 },
        { name: "Flutter", level: 60 },
      ]
    },
    {
      title: "Back-end",
      color: "from-green-500/20 to-emerald-500/10",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "Spring Boot", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: ".NET", level: 60 },
        { name: "Laravel", level: 60 },
      ]
    },
    {
      title: "Banco de Dados",
      color: "from-orange-500/20 to-amber-500/10",
      technologies: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Supabase", level: 70 },
        { name: "Redis", level: 65 },
      ]
    },
    {
      title: "DevOps & Tools",
      color: "from-purple-500/20 to-pink-500/10",
      technologies: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Swagger", level: 75 },
        { name: "Metodologias Ágeis", level: 80 },
        { name: "Prompt Engineering", level: 70 },
        { name: "AWS", level: 65 },
      ]
    }
  ];


  const additionalSkills = [
    "Clean Code", "SOLID", "Design Patterns", "Agile/Scrum", 
    "TDD", "REST", "Microservices", "Responsive Design", "UI/UX"
  ];

  return (
    <section id="stack" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Tecnologias</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-20">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Stack & <span className="text-gradient">Ferramentas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light animate-fade-up delay-200">
            Tecnologias que domino para criar soluções completas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group premium-card p-8 animate-fade-up"
              style={{ animationDelay: `${(categoryIndex + 3) * 100}ms` }}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <h3 className="relative font-display text-xl font-semibold mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-primary/50" />
                {category.title}
              </h3>
              
              <div className="relative space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="group/item">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium group-hover/item:text-primary transition-colors duration-300">
                        {tech.name}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary via-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${tech.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center animate-fade-up delay-600">
          <p className="text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
            E mais...
          </p>
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