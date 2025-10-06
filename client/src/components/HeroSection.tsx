import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/high_performance_spo_401f1d8e.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
          BUILD LEGENDS
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-display font-semibold">
          High-Performance Tuning & Custom Builds
        </p>
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          We don't just repair cars. We transform them into thrilling machines that dominate the street and track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8"
            onClick={() => scrollToSection("contact")}
            data-testid="button-hero-cta"
          >
            Build Your Legend
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-background/20 backdrop-blur-sm border-white/30 text-white hover:bg-background/30"
            onClick={() => scrollToSection("portfolio")}
            data-testid="button-hero-view-builds"
          >
            View Builds
          </Button>
        </div>
      </div>
    </section>
  );
}
