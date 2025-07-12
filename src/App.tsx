import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Subcategory from "./pages/Subcategory";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard/Dashboard";
import Inventory from "./components/Inventory/Inventory";
import Cart from "./components/Cart/Cart";
import { MainNavbar } from "./components/Navigation/MainNavbar";
import { useState } from "react";
import { LoginModal } from "./components/Auth/LoginModal";
import { CartItem, Users } from "./types";
import SubCategory from "./components/Cart/SubCategory";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<Users | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log("isLoggedIn", isLoggedIn);

  const handleLogin = (user: Users) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.product.id === item.product.id);
      if (existingItem) {
        return prev; // Don't add duplicates
      }
      return [...prev, item];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MainNavbar
            isLoggedIn={isLoggedIn}
            username={username}
            onLoginClick={() => setShowLoginModal(true)}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/:category/:subcategory" element={<Subcategory />} />
            <Route
              path="/dashboard"
              element={username ? <Dashboard user={username} /> : <Index />}
            />
            <Route
              path="/inventory"
              element={
                username ? <Inventory userId={username.id} /> : <Index />
              }
            />
            <Route
              path="/cart"
              element={
                username ? (
                  <Cart
                    cartItems={cartItems}
                    onRemoveFromCart={handleRemoveFromCart}
                    onClearCart={handleClearCart}
                  />
                ) : (
                  <Index />
                )
              }
            />
            <Route
              path="/:category/:subcategory"
              element={<SubCategory onAddToCart={handleAddToCart} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
