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
  title: "Hire Remote Next.js + FastAPI Developer",
  description: "Remote full-stack and AI developer helping startups and businesses ship Next.js, FastAPI, Supabase, and PostgreSQL products faster.",
  alternates: {
    canonical: "/",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Muhammed Waqar Ahmed",
  "jobTitle": "AI & Full-Stack Developer",
  "url": "https://mwadev.me",
  "image": "https://mwadev.me/og?title=Muhammed%20Waqar%20Ahmed&subtitle=AI%20%26%20Full-Stack%20Developer",
  "description": "AI and full-stack developer specializing in Next.js, FastAPI, Supabase, and PostgreSQL for remote clients worldwide.",
  "email": "m.waqar.ahmed@gmail.com",
  "sameAs": [
    "https://github.com/mwa-codes",
    "https://www.linkedin.com/in/mwaqarahmed/",
    "https://www.upwork.com/freelancers/~013354bbde519ce501?s=1110580755107926016"
  ],
  "knowsAbout": ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Vercel", "AI Development", "Full-Stack Development"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "m.waqar.ahmed@gmail.com",
    "availableLanguage": ["English", "Urdu"],
    "areaServed": "Worldwide"
  }
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MWA Dev",
  "url": "https://mwadev.me",
  "description": "Remote AI and full-stack development services for startups, founders, and businesses.",
  "areaServed": "Worldwide",
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "Muhammed Waqar Ahmed"
  },
  "serviceType": [
    "Next.js Development",
    "FastAPI Backend Development",
    "Supabase and PostgreSQL Architecture",
    "AI Chatbot and Automation Development"
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, '\\u003c') }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema).replace(/</g, '\\u003c') }}
      />
      <Header />
      <main id="about">
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
