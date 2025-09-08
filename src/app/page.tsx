import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
