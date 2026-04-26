import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import AcademicSection from "@/components/AcademicSection";
import CertificationsSection from "@/components/CertificationsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export type SiteLanguage = "pt" | "en";

const Index = () => {
  const [language, setLanguage] = useState<SiteLanguage>("pt");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <TechStackSection language={language} />
        <ProjectsSection language={language} />
        <AcademicSection language={language} />
        <CertificationsSection language={language} />
        <DifferentialsSection language={language} />
        <CTASection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;

