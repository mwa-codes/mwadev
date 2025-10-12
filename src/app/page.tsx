import { Metadata } from 'next';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "AI-Driven Full-Stack Developer | Next.js, FastAPI & Supabase",
  description: "Expert AI and Full-Stack Developer specializing in high-performance Next.js and FastAPI applications. Building scalable solutions with Supabase and Vercel.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammed Waqar Ahmed",
  "jobTitle": "AI & Full-Stack Developer",
  "url": "https://mwadev.me",
  "sameAs": [
    "https://github.com/mwa-codes",
    "https://www.linkedin.com/in/mwaqarahmed/",
    "https://www.upwork.com/freelancers/~013354bbde519ce501?s=1110580755107926016"
  ],
  "knowsAbout": ["Next.js", "FastAPI", "Supabase", "Vercel", "AI Development", "Full-Stack Development"]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
      />
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
