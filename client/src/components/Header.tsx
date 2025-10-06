import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-display font-bold text-primary">2TS</div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-lg tracking-tight">2 The Sky Motorsports</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("services")}
              data-testid="link-services"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("portfolio")}
              data-testid="link-portfolio"
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("calculator")}
              data-testid="link-calculator"
            >
              Calculator
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              data-testid="link-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              data-testid="link-contact"
            >
              Contact
            </Button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              data-testid="button-book-consultation"
            >
              Book Consultation
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("services")}
              data-testid="link-mobile-services"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("portfolio")}
              data-testid="link-mobile-portfolio"
            >
              Portfolio
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("calculator")}
              data-testid="link-mobile-calculator"
            >
              Calculator
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("about")}
              data-testid="link-mobile-about"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("contact")}
              data-testid="link-mobile-contact"
            >
              Contact
            </Button>
            <Button
              className="w-full"
              onClick={() => scrollToSection("contact")}
              data-testid="button-mobile-consultation"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
