import { ArrowRight, Play, Recycle, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">♻️</div>
        <div className="absolute top-40 right-20 text-4xl">🌱</div>
        <div className="absolute bottom-20 left-20 text-5xl">👕</div>
        <div className="absolute bottom-40 right-10 text-4xl">🌍</div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-8">
            <Recycle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sustainable Fashion Revolution</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
            Give Clothes a{" "}
            <span className="bg-gradient-eco bg-clip-text text-transparent">
              Second Chance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join thousands of eco-warriors swapping clothes, earning points, 
            and making fashion sustainable. One exchange at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button onClick={onGetStarted} className="btn-eco text-lg px-8 py-6">
              Start Swapping
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-primary/5">
              <Play className="w-5 h-5 mr-2" />
              Browse Items
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold font-counter">12,847</div>
              <div className="text-sm text-muted-foreground">Active Swappers</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Recycle className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-2xl font-bold font-counter">45,230</div>
              <div className="text-sm text-muted-foreground">Items Exchanged</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold font-counter">3,456 kg</div>
              <div className="text-sm text-muted-foreground">Waste Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};