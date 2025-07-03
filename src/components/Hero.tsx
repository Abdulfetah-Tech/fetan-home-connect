import { Button } from "@/components/ui/button";
import { Search, Star, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-renovation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Connect with
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {" "}Trusted Experts
                </span>
                <br />
                for Your Home
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Find reliable renovation and maintenance professionals in your area. 
                Get quotes, compare experts, and transform your space with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Search className="w-5 h-5 mr-2" />
                Find Experts
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">10,000+ Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">Verified Pros</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            <img
              src={heroImage}
              alt="Professional home renovation"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Project Completed</p>
                  <p className="text-sm text-muted-foreground">+200 this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;