import { Card, CardContent } from "@/components/ui/card";
import { Search, UserCheck, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Find Your Expert",
    description: "Browse verified professionals in your area or post your project to receive quotes",
    color: "bg-blue-500"
  },
  {
    step: 2,
    icon: UserCheck,
    title: "Compare & Choose",
    description: "Review profiles, ratings, and quotes to select the perfect expert for your needs",
    color: "bg-green-500"
  },
  {
    step: 3,
    icon: Calendar,
    title: "Schedule Service",
    description: "Book your appointment at a convenient time and communicate directly with your expert",
    color: "bg-purple-500"
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Complete Project",
    description: "Get your project completed to satisfaction and leave a review for future homeowners",
    color: "bg-orange-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your home project done is simple with our streamlined process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.step}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="text-center h-full bg-gradient-to-br from-card to-card/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;