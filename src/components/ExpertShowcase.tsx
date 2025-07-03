import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, CheckCircle, MessageCircle } from "lucide-react";

const experts = [
  {
    id: 1,
    name: "Michael Johnson",
    specialty: "Kitchen Renovation",
    location: "San Francisco, CA",
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    verified: true,
    startingPrice: 150,
    completedJobs: 89,
    responseTime: "2 hours",
    badges: ["Top Rated", "Fast Response"]
  },
  {
    id: 2,
    name: "Sarah Chen",
    specialty: "Electrical Work",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b3b6?w=100&h=100&fit=crop&crop=face",
    verified: true,
    startingPrice: 120,
    completedJobs: 156,
    responseTime: "1 hour",
    badges: ["Licensed", "Emergency Service"]
  },
  {
    id: 3,
    name: "David Rodriguez",
    specialty: "Plumbing",
    location: "Chicago, IL",
    rating: 4.9,
    reviews: 204,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    verified: true,
    startingPrice: 95,
    completedJobs: 278,
    responseTime: "30 mins",
    badges: ["24/7 Available", "Expert"]
  },
  {
    id: 4,
    name: "Lisa Thompson",
    specialty: "Interior Design",
    location: "New York, NY",
    rating: 5.0,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    verified: true,
    startingPrice: 200,
    completedJobs: 45,
    responseTime: "4 hours",
    badges: ["Design Award", "Premium"]
  }
];

const ExpertShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our top-rated professionals who deliver exceptional results for homeowners like you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <Card 
              key={expert.id} 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 bg-gradient-to-br from-card to-card/90 border-0 shadow-lg"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative inline-block mb-3">
                    <Avatar className="w-20 h-20 border-4 border-primary/20">
                      <AvatarImage src={expert.image} alt={expert.name} />
                      <AvatarFallback>{expert.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {expert.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-card">
                        <CheckCircle className="w-4 h-4 text-success-foreground" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-1">{expert.name}</h3>
                  <p className="text-primary font-medium mb-2">{expert.specialty}</p>
                  
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{expert.rating}</span>
                    </div>
                    <span className="text-muted-foreground">({expert.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{expert.location}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Starting from</span>
                    <span className="font-semibold">${expert.startingPrice}/hr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completed jobs</span>
                    <span className="font-semibold">{expert.completedJobs}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response time</span>
                    <span className="font-semibold">{expert.responseTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {expert.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Message
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Experts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertShowcase;