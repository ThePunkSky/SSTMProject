import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import build1 from "@assets/stock_images/modified_sports_car__6b5d07bf.jpg";
import build2 from "@assets/stock_images/modified_sports_car__661ae711.jpg";
import build3 from "@assets/stock_images/turbocharged_engine__3988a0f2.jpg";
import build4 from "@assets/stock_images/modified_sports_car__56418607.jpg";
import build5 from "@assets/stock_images/turbocharged_engine__6973a59c.jpg";
import build6 from "@assets/stock_images/modified_sports_car__493773cb.jpg";

const builds = [
  {
    image: build1,
    title: "Dodge Challenger Hellcat",
    hp: "850HP",
    gain: "+140HP",
  },
  {
    image: build2,
    title: "Mustang GT500",
    hp: "900HP",
    gain: "+140HP",
  },
  {
    image: build3,
    title: "Camaro ZL1 Supercharged",
    hp: "820HP",
    gain: "+170HP",
  },
  {
    image: build4,
    title: "Ford F-150 Raptor",
    hp: "575HP",
    gain: "+125HP",
  },
  {
    image: build5,
    title: "Corvette Z06",
    hp: "750HP",
    gain: "+100HP",
  },
  {
    image: build6,
    title: "Ram 1500 TRX",
    hp: "780HP",
    gain: "+80HP",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Build Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real builds. Real power. Real results. Check out some of our recent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((build, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`card-build-${index}`}
              onClick={() => console.log(`Viewing build: ${build.title}`)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={build.image}
                  alt={build.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display font-semibold text-xl text-white mb-2">
                    {build.title}
                  </h3>
                  <div className="flex gap-2">
                    <Badge className="bg-primary text-primary-foreground font-mono font-semibold">
                      {build.hp}
                    </Badge>
                    <Badge variant="secondary" className="font-mono font-semibold">
                      {build.gain}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
