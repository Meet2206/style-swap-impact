import { Recycle, Heart, Users, Coins, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Recycle,
    title: "Circular Fashion",
    description: "Give your unused clothes a new life while discovering unique pieces from others.",
    color: "text-primary"
  },
  {
    icon: Coins,
    title: "Points System",
    description: "Earn ReWear points for every item you share. Redeem them for clothes you love.",
    color: "text-accent"
  },
  {
    icon: Globe,
    title: "Environmental Impact",
    description: "Track your CO₂ and waste reduction. Every swap makes a real difference.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a community of eco-conscious fashion enthusiasts sharing the same values.",
    color: "text-olive"
  },
  {
    icon: Heart,
    title: "Quality First",
    description: "Every item is reviewed to ensure quality. Rate and review your experiences.",
    color: "text-red-500"
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Watch your positive impact grow with detailed analytics and achievements.",
    color: "text-primary"
  }
];

export const WhyReWear = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
              Why Choose{" "}
              <span className="bg-gradient-eco bg-clip-text text-transparent">
                ReWear?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another marketplace. We're a movement towards sustainable fashion 
              that rewards conscious choices and builds a better future.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-eco card-hover group"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold font-poppins mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-eco text-white rounded-2xl px-8 py-6">
              <div className="text-2xl">🌱</div>
              <div>
                <div className="font-semibold">Ready to make an impact?</div>
                <div className="text-sm opacity-90">Join 12,000+ eco-warriors today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};