import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const carModels = [
  { name: "Nissan GT-R", baseHp: 450 },
  { name: "BMW M3", baseHp: 425 },
  { name: "Subaru WRX STI", baseHp: 305 },
  { name: "Ford Mustang GT", baseHp: 460 },
  { name: "Audi S4", baseHp: 335 },
  { name: "Corvette C8", baseHp: 490 },
];

const upgradePackages = [
  { name: "Stage 1 (ECU Tune + Intake)", gain: 45, multiplier: 1.15 },
  { name: "Stage 2 (+ Exhaust + Intercooler)", gain: 85, multiplier: 1.28 },
  { name: "Stage 3 (+ Turbo/Supercharger)", gain: 180, multiplier: 1.65 },
  { name: "Full Build (Engine + All Upgrades)", gain: 350, multiplier: 2.0 },
];

export default function HPCalculator() {
  const [selectedCar, setSelectedCar] = useState<string>("");
  const [selectedUpgrade, setSelectedUpgrade] = useState<string>("");

  const car = carModels.find((c) => c.name === selectedCar);
  const upgrade = upgradePackages.find((u) => u.name === selectedUpgrade);

  const baseHp = car?.baseHp || 0;
  const modifiedHp = upgrade ? Math.round(baseHp * upgrade.multiplier) : 0;
  const hpGain = modifiedHp - baseHp;

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Horsepower Calculator
          </h2>
          <p className="text-lg text-muted-foreground">
            Estimate your potential power gains with our upgrade packages.
          </p>
        </div>

        <Card className="border-primary border-2">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Calculate Your Build</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="car-model">Select Your Car</Label>
                <Select value={selectedCar} onValueChange={setSelectedCar}>
                  <SelectTrigger id="car-model" data-testid="select-car-model">
                    <SelectValue placeholder="Choose a model" />
                  </SelectTrigger>
                  <SelectContent>
                    {carModels.map((car) => (
                      <SelectItem key={car.name} value={car.name}>
                        {car.name} ({car.baseHp}HP)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="upgrade-package">Upgrade Package</Label>
                <Select value={selectedUpgrade} onValueChange={setSelectedUpgrade}>
                  <SelectTrigger id="upgrade-package" data-testid="select-upgrade-package">
                    <SelectValue placeholder="Choose package" />
                  </SelectTrigger>
                  <SelectContent>
                    {upgradePackages.map((pkg) => (
                      <SelectItem key={pkg.name} value={pkg.name}>
                        {pkg.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {selectedCar && selectedUpgrade && (
              <div className="mt-8 p-6 bg-card rounded-md border border-border">
                <div className="flex items-center justify-center gap-4 md:gap-8">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Base</div>
                    <div className="font-mono font-bold text-3xl md:text-4xl" data-testid="text-base-hp">
                      {baseHp}HP
                    </div>
                  </div>

                  <ArrowRight className="w-8 h-8 text-primary" />

                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Modified</div>
                    <div className="font-mono font-bold text-3xl md:text-4xl text-primary" data-testid="text-modified-hp">
                      {modifiedHp}HP
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-md">
                    <span className="text-sm font-semibold">Estimated Gain:</span>
                    <span className="font-mono font-bold text-xl text-primary" data-testid="text-hp-gain">
                      +{hpGain}HP
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
