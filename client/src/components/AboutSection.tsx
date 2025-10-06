import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@assets/stock_images/car_mechanic_working_14858a9c.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From junkyard projects to professional builds that dominate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-2xl mb-4">
                  American Muscle. Modern Engineering.
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We grew up in the golden age of American muscle—wrenching on small-block Chevys, 
                    pushing junkyard Fox bodies to their limits, and learning the hard way what separates 
                    a weekend warrior from a true performance build.
                  </p>
                  <p>
                    Those lessons stuck. Now we blend old-school muscle shop wisdom with cutting-edge 
                    tuning technology. LS swaps, Coyote builds, Hemi conversions—we speak fluent V8 and 
                    we build them to last.
                  </p>
                  <p>
                    2 The Sky Motorsports pays homage to the legendary American speed shops while pushing 
                    modern muscle to levels they never imagined. Whether you're building a classic Camaro 
                    or supercharging a new F-150, we honor the heritage while chasing horsepower.
                  </p>
                  <p className="font-semibold text-foreground pt-2">
                    American iron. American power. No substitutes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-md overflow-hidden aspect-square">
              <img
                src={aboutImage}
                alt="Our team working on performance builds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
