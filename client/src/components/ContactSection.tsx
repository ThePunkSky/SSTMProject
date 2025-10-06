import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    serviceType: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      carModel: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to build your legend? Let's talk about your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-display text-2xl">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(555) 123-4567"
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car-model">Car Model</Label>
                      <Input
                        id="car-model"
                        value={formData.carModel}
                        onChange={(e) =>
                          setFormData({ ...formData, carModel: e.target.value })
                        }
                        placeholder="e.g., 2020 Nissan GT-R"
                        data-testid="input-car-model"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service-type">Service Interest</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, serviceType: value })
                      }
                    >
                      <SelectTrigger id="service-type" data-testid="select-service-type">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecu-tuning">ECU Tuning & Dyno</SelectItem>
                        <SelectItem value="performance">Performance Upgrades</SelectItem>
                        <SelectItem value="suspension">Suspension Setup</SelectItem>
                        <SelectItem value="brakes">Braking System</SelectItem>
                        <SelectItem value="engine">Engine Build</SelectItem>
                        <SelectItem value="aesthetics">Custom Aesthetics</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your build goals..."
                      rows={5}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" data-testid="button-submit-quote">
                    Request Build Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-sm text-muted-foreground">
                      info@2theskymotorsports.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-sm text-muted-foreground">
                      (555) 2TS-FAST
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-sm text-muted-foreground">
                      Coming Soon to Your Area
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-xl mb-2">Shop Hours</h3>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9AM - 4PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
