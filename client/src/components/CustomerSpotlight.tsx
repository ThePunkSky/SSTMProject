import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import customerCar1 from "@assets/stock_images/turbocharged_engine__8abe4816.jpg";

const spotlight = {
  carImage: customerCar1,
  carName: "2020 Nissan GT-R",
  ownerName: "Marcus Rodriguez",
  testimonial: "I brought my GT-R to 2 The Sky wanting more power without sacrificing reliability. They delivered beyond my expectations. The dyno numbers speak for themselves, and the car still drives like a dream on the street.",
  hpGain: "250HP",
  mods: ["Twin Turbo Upgrade", "ECU Tune", "Intercooler", "Exhaust System"],
};

export default function CustomerSpotlight() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Customer Spotlight
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our customers who trusted us to build their legends.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img
                src={spotlight.carImage}
                alt={spotlight.carName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground font-mono font-bold text-lg px-3 py-1">
                  {spotlight.hpGain} Gain
                </Badge>
              </div>
            </div>

            <CardContent className="p-8 flex flex-col justify-center">
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-lg leading-relaxed mb-6 italic">
                "{spotlight.testimonial}"
              </p>

              <div className="mb-6">
                <div className="font-display font-semibold text-xl mb-1">
                  {spotlight.ownerName}
                </div>
                <div className="text-muted-foreground">{spotlight.carName}</div>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  Build Includes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {spotlight.mods.map((mod, index) => (
                    <Badge key={index} variant="secondary">
                      {mod}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
