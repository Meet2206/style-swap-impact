import { useState } from "react";
import { MainNavbar } from "@/components/Navigation/MainNavbar";
import { CategoryNavbar } from "@/components/Navigation/CategoryNavbar";
import { LiveCounter } from "@/components/ImpactCounter/LiveCounter";
import { LoginModal } from "@/components/Auth/LoginModal";
import { HeroSection } from "@/components/Landing/HeroSection";
import { WhyReWear } from "@/components/Landing/WhyReWear";

const Index = () => {


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      {/* <MainNavbar
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={() => setShowLoginModal(true)}
        onLogout={handleLogout}
      /> */}
      <CategoryNavbar />


      {/* Main Content */}
      <main>
        {/* <HeroSection onGetStarted={() => setShowLoginModal(true)} /> */}
        <WhyReWear />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins bg-gradient-eco bg-clip-text text-transparent mb-4">
                ReWear
              </h3>
              <p className="text-muted-foreground">
                Making fashion sustainable, one swap at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Browse Items</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Points System</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Impact Report</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Join Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ReWear. All rights reserved. Made with 💚 for the planet.</p>
          </div>
        </div>
      </footer>

     
    </div>
  );
};

export default Index;
