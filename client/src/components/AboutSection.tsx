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
                  Built by Gearheads, For Gearheads
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We started where every true enthusiast does: in a garage, wrenching on junkyard 
                    finds, racing them hard, blowing them up, and coming back stronger every time.
                  </p>
                  <p>
                    Those early failures taught us what works and what doesn't. Now, with years of 
                    experience and professional-level certifications, we know how to build machines 
                    that don't just make power—they make legends.
                  </p>
                  <p>
                    2 The Sky Motorsports isn't about fixing daily drivers. It's about taking what 
                    you already love and pushing it to its absolute limit. Whether you're chasing 
                    track times or street credibility, we've got the skills to get you there.
                  </p>
                  <p className="font-semibold text-foreground pt-2">
                    We don't just repair cars. We build legends. And so can you.
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
