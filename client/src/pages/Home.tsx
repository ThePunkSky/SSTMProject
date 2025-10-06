import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import HPCalculator from "@/components/HPCalculator";
import CustomerSpotlight from "@/components/CustomerSpotlight";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <HPCalculator />
        <CustomerSpotlight />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
