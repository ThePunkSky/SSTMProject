import { Facebook, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Welcome to the Crew!",
      description: "You're now subscribed to our newsletter.",
    });
    setEmail("");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">2 The Sky Motorsports</h3>
            <p className="text-sm text-muted-foreground mb-4">
              High-performance tuning and custom builds for enthusiasts who demand the best.
            </p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => console.log("Instagram clicked")}
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => console.log("YouTube clicked")}
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => console.log("TikTok clicked")}
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => console.log("Facebook clicked")}
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                ECU Tuning
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Performance Upgrades
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Suspension Setup
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Engine Builds
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Join the Crew</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get updates on new builds, dyno events, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button type="submit" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 2 The Sky Motorsports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
