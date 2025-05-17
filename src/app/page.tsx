import NavBar from "../components/NavBar";
import Hero from "@/components/Hero";
import SecurityDashboard from "@/components/SecurityDashboard";
import AboutSection from '@/components/AboutSection';
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SecurityDashboard />
      <ContactSection />
    </>
  );
}