import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import ExpertShowcase from "@/components/ExpertShowcase";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServiceCategories />
      <ExpertShowcase />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
