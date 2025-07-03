import { Card, CardContent } from "@/components/ui/card";
import { 
  Hammer, 
  Paintbrush, 
  Zap, 
  Wrench, 
  Scissors, 
  Trees,
  Car,
  Shield,
  Thermometer
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "General Renovation",
    description: "Complete home makeovers and remodeling",
    count: "2,500+ experts"
  },
  {
    icon: Paintbrush,
    title: "Painting & Decorating",
    description: "Interior and exterior painting services",
    count: "1,800+ experts"
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Wiring, installations, and repairs",
    count: "950+ experts"
  },
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Pipes, fixtures, and water systems",
    count: "1,200+ experts"
  },
  {
    icon: Thermometer,
    title: "HVAC Services",
    description: "Heating, cooling, and ventilation",
    count: "750+ experts"
  },
  {
    icon: Scissors,
    title: "Landscaping",
    description: "Garden design and maintenance",
    count: "900+ experts"
  },
  {
    icon: Car,
    title: "Garage & Driveway",
    description: "Garage doors and driveway work",
    count: "600+ experts"
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "Home security and surveillance",
    count: "400+ experts"
  },
  {
    icon: Trees,
    title: "Tree Services",
    description: "Tree removal and landscaping",
    count: "350+ experts"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our most requested home services and find the perfect expert for your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-gradient-to-br from-card to-card/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-3">{service.description}</p>
                    <p className="text-sm font-medium text-primary">{service.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;