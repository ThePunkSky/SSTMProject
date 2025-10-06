import { Gauge, Wrench, Settings, Disc, Cog, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Gauge,
    title: "Dyno Tuning & Calibration",
    description: "Unleash every cubic inch of V8 power with precision dyno tuning. We extract maximum horsepower and torque from American muscle.",
  },
  {
    icon: Cog,
    title: "Forced Induction",
    description: "Superchargers, twin turbos, and blowers for Mustangs, Camaros, Challengers, and F-150s. American muscle demands American power.",
  },
  {
    icon: Settings,
    title: "Suspension & Handling",
    description: "Track-ready suspension setups that keep American muscle planted through the corners and stable at top speed.",
  },
  {
    icon: Disc,
    title: "Brake Upgrades",
    description: "Big brake kits engineered to stop serious horsepower. When you're pushing 700+ HP, you need brakes that can handle it.",
  },
  {
    icon: Wrench,
    title: "LS & Coyote Swaps",
    description: "Expert LS swaps, Coyote swaps, and Hemi conversions. We breathe V8 life into anything with wheels.",
  },
  {
    icon: Sparkles,
    title: "Classic Restoration",
    description: "Restore and modernize classic American muscle with period-correct aesthetics and modern performance upgrades.",
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
