import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import Footer from "@/components/Footer";

const sectionMap: Record<string, string> = {
  "Sobre Mim": "sobre-mim",
  "Skills": "skills",
  "Educação": "educacao",
  "Certificados": "certificados",
};

const Index = () => {
  const handleNavigate = (section: string) => {
    const id = sectionMap[section];
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onNavigate={handleNavigate} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificatesSection />
      <Footer />
    </div>
  );
};

export default Index;
