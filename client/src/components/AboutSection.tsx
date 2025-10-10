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
            We're not legacy—we're youngbloods. This is a project right now, and I'm just getting started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-2xl mb-4">
                  Youngblood Muscle. Modern Engineering.
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm 18, just out of high school, and building this as a real-deal project. I grew up
                    turning wrenches on junkyard finds, learning the hard way what separates a weekend
                    bolt-on from a real performance build.
                  </p>
                  <p>
                    Right now, 2 The Sky Motorsports is still just a project—what started as a class assignment
                    is becoming the blueprint for a real shop. After graduation, I'll be a student running this
                    as a business—stacking classes by day and builds by night. ECU + dyno tuning, forced
                    induction, suspension and brakes, clean wiring. LS swaps, Coyote builds, Hemi conversions—
                    I'm fluent in V8 and I build them to last.
                  </p>
                  <p>
                    2 The Sky Motorsports doesn't pretend to be a legacy shop—we're the next wave. Whether
                    you're building a classic Camaro or supercharging a new F-150, we respect the roots and
                    push the envelope. We don't just repair cars—we build legends.
                  </p>
                  <p className="font-semibold text-foreground pt-2">
                    Young, hungry, and building the future—one project at a time.
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
