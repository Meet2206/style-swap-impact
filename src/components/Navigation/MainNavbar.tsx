import { useState } from "react";
import {
  Search,
  Menu,
  User,
  ShoppingCart,
  Package,
  Home,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Users } from "@/types";
import { LiveCounter } from "../ImpactCounter/LiveCounter";

interface MainNavbarProps {
  isLoggedIn?: boolean;
  username?: Users;
  onLoginClick?: () => void;
  onLogout?: () => void;
}

export const MainNavbar = ({
  isLoggedIn,
  username,
  onLoginClick,
  onLogout,
}: MainNavbarProps) => {
  console.log("usernmae", username);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="navbar-main">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-poppins bg-gradient-eco bg-clip-text text-transparent">
              ReWear
            </h1>
          </div>

          {/* Search Bar - Desktop & Tablet */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div
              className={`relative w-full transition-all duration-300 ${
                isSearchFocused ? "scale-105" : ""
              }`}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for clothes, brands, users..."
                className="pl-10 pr-4 py-2 w-full rounded-xl border-border focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          {/* Impact Counter & Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Live Impact Counter */}
            <LiveCounter />

            {/* User Actions */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" className="btn-amber">
                    <User className="w-4 h-4 mr-2" />
                    {username.username || "User"}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/dashboard"
                      className="eco-hover flex items-center"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      to="/inventory"
                      className="eco-hover flex items-center"
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Inventory
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/cart" className="eco-hover flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem onSelect={onLogout} className="eco-hover">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLoginClick} className="btn-eco">
                Login
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 w-full rounded-xl"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  {isLoggedIn ? (
                    <div className="space-y-2">
                      <div className="text-lg font-medium mb-4">
                        Hi, {username.username || "User"}!
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-start eco-hover"
                      >
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start eco-hover"
                      >
                        <Package className="w-4 h-4 mr-2" />
                        Inventory
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start eco-hover"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Cart
                      </Button>
                      <Button
                        onClick={onLogout}
                        variant="ghost"
                        className="w-full justify-start eco-hover"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={onLoginClick} className="btn-eco w-full">
                      Login
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
