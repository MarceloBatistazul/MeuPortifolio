import { memo, useEffect, useMemo, useState } from "react";
import {
  Award,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
} from "lucide-react";

type Certification = {
  id: string;
  fileName: string;
  title: string;
  issuer: string;
  track: string;
  level: "Fundamentos" | "Base" | "Intermediário" | "Avançado";
  year: string;
  pillar: "segurança" | "backend" | "frontend" | "cloud" | "fundamentos";
};

const certifications: Certification[] = [
  {
    id: "aws-arch",
    fileName: "aws-academy-graduate-cloud-architecting-training-badge-badge20260327-31-r88ty9.pdf",
    title: "AWS Cloud Architecting",
    issuer: "AWS Academy",
    track: "Cloud",
    level: "Intermediário",
    year: "2025",
    pillar: "cloud",
  },
  {
    id: "incidente",
    fileName: "ethical-hacker-certificate-batistazul37-gmail-com-c040a88c-f700-4ad6-b8f6-4d9349abbaa5.pdf",
    title: "Ethical Hacking",
    issuer: "Cisco Networking Academy",
    track: "Cibersegurança",
    level: "Intermediário",
    year: "2025",
    pillar: "segurança",
  },
  {
    id: "apis-rest",
    fileName: "certificate-batistazul37-gmail-com-7730c2f3-935b-4fff-b24f-e52d5bf9270b.pdf",
    title: "Fundamentos de Cibersegurança",
    issuer: "Cisco Networking Academy",
    track: "Cibersegurança",
    level: "Intermediário",
    year: "2025",
    pillar: "segurança",
  },
  {
    id: "react-ts",
    fileName: "fron-end-componentizado.pdf",
    title: "React + TypeScript",
    issuer: "Aplicações modernas",
    track: "Front-end",
    level: "Intermediário",
    year: "2025",
    pillar: "frontend",
  },
  {
    id: "seg-info",
    fileName:
      "introduction-to-cybersecurity-certificate-batistazul37-gmail-com-2de89d68-b231-4e42-9f11-ac4e35d7c1f2.pdf",
    title: "Segurança da Informação",
    issuer: "Cisco Networking Academy",
    track: "Cibersegurança",
    level: "Fundamentos",
    year: "2025",
    pillar: "segurança",
  },
  {
    id: "networking-basics",
    fileName: "networking-basics-certificate-batistazul37-gmail-com-ac16ea90-456a-4e5f-bc6a-7e530e835b19.pdf",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    track: "Redes",
    level: "Fundamentos",
    year: "2025",
    pillar: "fundamentos",
  },
  {
    id: "web-components",
    fileName: "web-components.pdf",
    title: "Web Components",
    issuer: "DIO",
    track: "Front-end",
    level: "Base",
    year: "2025",
    pillar: "frontend",
  },
  {
    id: "ts-angular",
    fileName: "typescript-para-angular.pdf",
    title: "TypeScript para Angular",
    issuer: "DIO",
    track: "TypeScript",
    level: "Base",
    year: "2025",
    pillar: "frontend",
  },
  {
    id: "java-sintaxe",
    fileName: "aprendendo-a-sintaxe-do-java.pdf",
    title: "Aprendendo a Sintaxe do Java",
    issuer: "DIO",
    track: "Java",
    level: "Fundamentos",
    year: "2025",
    pillar: "fundamentos",
  },
  {
    id: "java-inicio",
    fileName: "certificado-inicio-java.pdf",
    title: "Certificado Início Java",
    issuer: "DIO",
    track: "Java",
    level: "Base",
    year: "2025",
    pillar: "fundamentos",
  },
  {
    id: "csharp-org",
    fileName: "conhecendo-a-organizacao-de-um-programa-c-sharp.pdf",
    title: "Organização de um Programa C#",
    issuer: "DIO",
    track: "C#",
    level: "Fundamentos",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "csharp-estruturas",
    fileName: "conhecendo-as-estruturas-de-c-sharp.pdf",
    title: "Conhecendo as Estruturas de C#",
    issuer: "DIO",
    track: "C#",
    level: "Base",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "client-server",
    fileName: "entendendo-comunicacao-client-x-server.pdf",
    title: "Comunicação Client x Server",
    issuer: "DIO",
    track: "Arquitetura Web",
    level: "Fundamentos",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "css",
    fileName: "fundamentos-do-css.pdf",
    title: "Fundamentos do CSS",
    issuer: "DIO",
    track: "Front-end",
    level: "Fundamentos",
    year: "2025",
    pillar: "frontend",
  },
  {
    id: "dotnet-intro",
    fileName: "introducao-ao-net.pdf",
    title: "Introdução ao .NET",
    issuer: "DIO",
    track: ".NET",
    level: "Fundamentos",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "ides",
    fileName: "introducao-as-ides.pdf",
    title: "Introdução às IDEs",
    issuer: "DIO",
    track: "Ferramentas",
    level: "Fundamentos",
    year: "2025",
    pillar: "fundamentos",
  },
  {
    id: "operadores-aritmeticos",
    fileName: "operadores-aritmeticos-em-c-sharp.pdf",
    title: "Operadores Aritméticos em C#",
    issuer: "DIO",
    track: "C#",
    level: "Base",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "sintaxe-csharp",
    fileName: "sitaxe-de-c-sharp.pdf",
    title: "Sintaxe de C#",
    issuer: "DIO",
    track: "C#",
    level: "Fundamentos",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "tipos-operadores",
    fileName: "tipos-de-operadores-em-c-sharp.pdf",
    title: "Tipos de Operadores em C#",
    issuer: "DIO",
    track: "C#",
    level: "Intermediário",
    year: "2025",
    pillar: "backend",
  },
  {
    id: "git-github",
    fileName: "versionamento-de-codigo-com-git-e-github.pdf",
    title: "Versionamento de Código com Git e GitHub",
    issuer: "DIO",
    track: "Git e GitHub",
    level: "Base",
    year: "2025",
    pillar: "fundamentos",
  },
];

const featuredOrder = ["aws-arch", "incidente", "apis-rest", "react-ts"] as const;
const basePath = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const levelStyles = {
  Fundamentos: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  Base: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  Intermediário: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  Avançado: "bg-amber-500/10 text-amber-300 border-amber-500/30",
} as const;

const CertificationCard = memo(({ cert, rank }: { cert: Certification; rank?: number }) => {
  const certificatePath = `${basePath}Certificados/${encodeURIComponent(cert.fileName)}`;
  const detailsPath = `/certificacoes/${cert.id}`;
  const downloadPath = `/certificacoes/${cert.id}/download`;
  const [isPreviewLoaded, setIsPreviewLoaded] = useState(false);
  const [isPreviewError, setIsPreviewError] = useState(false);
  const [isMobilePreview, setIsMobilePreview] = useState(false);
  const previewView = isMobilePreview ? "FitV" : "FitH";

  useEffect(() => {
    setIsPreviewLoaded(false);
    setIsPreviewError(false);
  }, [certificatePath]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const handleMediaChange = (event: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in event ? event.matches : mediaQuery.matches;
      setIsMobilePreview(matches);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <article className="group premium-card p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <a
        href={certificatePath}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-2xl border border-border/80 overflow-hidden mb-5 aspect-[3/4] sm:aspect-[4/3] bg-card/60 block ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary/25"
      >
        {typeof rank === "number" && (
          <span className="absolute top-3 left-3 z-10 rounded-lg border border-primary/40 bg-primary/20 px-2 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
            Top {rank}
          </span>
        )}

        {!isPreviewLoaded && !isPreviewError && (
          <div className="absolute inset-0 z-[1] overflow-hidden bg-card/80">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            <div className="h-full w-full p-4 md:p-5 flex flex-col gap-3 md:gap-4">
              <div className="h-4 w-24 md:w-28 rounded bg-secondary/80 animate-pulse" />
              <div className="h-5 w-4/5 rounded bg-secondary/70 animate-pulse" />
              <div className="h-5 w-3/5 rounded bg-secondary/70 animate-pulse" />
              <div className="flex-1 rounded-xl bg-secondary/65 animate-pulse" />
              <div className="grid grid-cols-3 gap-2">
                <div className="h-3 rounded bg-secondary/70 animate-pulse" />
                <div className="h-3 rounded bg-secondary/70 animate-pulse" />
                <div className="h-3 rounded bg-secondary/70 animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {isPreviewError ? (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary/60 to-card text-muted-foreground text-sm px-3 text-center">
            Prévia indisponível no dispositivo
          </div>
        ) : isMobilePreview ? (
          <iframe
            src={`${certificatePath}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=${previewView}`}
            title={`Pré-visualização do certificado ${cert.title}`}
            loading="lazy"
            onLoad={() => setIsPreviewLoaded(true)}
            onError={() => {
              setIsPreviewLoaded(true);
              setIsPreviewError(true);
            }}
            className={`h-full w-full pointer-events-none transition-opacity duration-300 border-0 ${
              isPreviewLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <object
            data={`${certificatePath}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=${previewView}`}
            type="application/pdf"
            aria-label={`Pré-visualização do certificado ${cert.title}`}
            onLoad={() => setIsPreviewLoaded(true)}
            onError={() => {
              setIsPreviewLoaded(true);
              setIsPreviewError(true);
            }}
            className={`h-full w-full pointer-events-none transition-opacity duration-300 ${
              isPreviewLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-secondary/60 to-card text-muted-foreground text-sm px-3 text-center">
              Prévia indisponível no dispositivo
            </div>
          </object>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
      </a>

      <div className="relative rounded-2xl border border-border/80 bg-gradient-to-br from-card to-card/50 p-5 mb-5 overflow-hidden">
        <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

        <div className="flex items-center gap-3 mb-3 relative">
          <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-primary/90 font-semibold">{cert.issuer}</p>
        </div>

        <h3 className="font-display text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-300 text-balance">
          {cert.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-xs rounded-lg border border-border bg-secondary/60">{cert.track}</span>
          <span className={`px-2.5 py-1 text-xs rounded-lg border ${levelStyles[cert.level]}`}>{cert.level}</span>
          <span className="px-2.5 py-1 text-xs rounded-lg border border-border bg-secondary/60">{cert.year}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3">
        <a
          href={detailsPath}
          aria-label={`Abrir detalhes do certificado ${cert.title}`}
          className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/20 hover:shadow-[0_8px_22px_-12px_hsl(var(--primary))]"
        >
          <ExternalLink className="h-4 w-4" />
          Ver detalhes
        </a>

        <a
          href={downloadPath}
          aria-label={`Ir para download do certificado ${cert.title}`}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card/80 hover:text-foreground hover:shadow-[0_8px_22px_-14px_hsl(var(--foreground)/0.35)]"
        >
          <Download className="h-4 w-4" />
          Ir para download
        </a>
      </div>
    </article>
  );
});

CertificationCard.displayName = "CertificationCard";

const CertificationsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredCertifications = useMemo(() => {
    const map = new Map(certifications.map((cert) => [cert.id, cert] as const));
    return featuredOrder.map((id) => map.get(id)).filter((cert): cert is Certification => Boolean(cert));
  }, []);

  const otherCertifications = useMemo(() => {
    const featuredIds = new Set(featuredOrder);
    return certifications.filter((cert) => !featuredIds.has(cert.id as (typeof featuredOrder)[number]));
  }, []);

  return (
    <section id="certificacoes" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-gradient opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-sm font-medium text-primary tracking-widest uppercase">Conhecimentos complementares</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <div className="text-center mb-16">
          <h2 className="font-display text-display-sm md:text-display-md mb-6 animate-fade-up delay-100">
            Certificações e <span className="text-gradient">Evolução Técnica</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-up delay-200 leading-relaxed">
            Trilhas concluídas em desenvolvimento, arquitetura, cloud e segurança, com foco em aplicação prática.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-sm md:text-base text-muted-foreground">Destaques da trilha principal</p>
          <p className="text-xs md:text-sm uppercase tracking-wider text-primary/90">
            {certifications.length} certificados no acervo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredCertifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} rank={index + 1} />
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            aria-controls="certifications-more"
            aria-label={isExpanded ? "Ocultar certificações complementares" : "Mostrar certificações complementares"}
            className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm md:text-base font-semibold text-primary hover:bg-primary/20 transition-all"
          >
            {isExpanded ? "Ocultar certificações complementares" : `Ver mais ${otherCertifications.length} certificações`}
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div id="certifications-more" className="animate-fade-up">
            <p className="text-sm md:text-base text-muted-foreground mb-5 text-center">Certificações complementares</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-2">
              {otherCertifications.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
