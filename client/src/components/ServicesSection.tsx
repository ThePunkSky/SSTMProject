import { Gauge, Wrench, Settings, Disc, Cog, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Gauge,
    title: "ECU Tuning & Dyno Testing",
    description: "Maximize horsepower with precision engine calibration and real-time dyno testing for peak performance.",
  },
  {
    icon: Cog,
    title: "Performance Upgrades",
    description: "Turbos, superchargers, exhaust systems, intakes, and intercoolers engineered for serious power gains.",
  },
  {
    icon: Settings,
    title: "Custom Suspension Setups",
    description: "Precision-tuned suspension for track dominance or street comfort with maximum handling control.",
  },
  {
    icon: Disc,
    title: "High-End Braking Systems",
    description: "Pro-grade brake upgrades for serious stopping power that matches your performance build.",
  },
  {
    icon: Wrench,
    title: "Precision Engine Builds",
    description: "Complete engine builds and swaps from experienced technicians who know how to extract power safely.",
  },
  {
    icon: Sparkles,
    title: "Custom Aesthetics",
    description: "Carbon fiber parts, aero kits, racing interiors that make your build look as fast as it performs.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From dyno-proven tuning to complete custom builds, we offer everything needed to transform your machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-l-4 border-l-primary hover-elevate active-elevate-2 transition-transform"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-6">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
