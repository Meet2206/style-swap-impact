import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryItem {
  name: string;
  subcategories: string[];
}

const categories: CategoryItem[] = [
  {
    name: "Men",
    subcategories: ["T-Shirts", "Jeans", "Hoodies", "Shirts", "Footwear", "Accessories"]
  },
  {
    name: "Men Traditionals",
    subcategories: ["Kurtas", "Sherwanis", "Dhoti", "Ethnic Jackets", "Traditional Footwear"]
  },
  {
    name: "Women",
    subcategories: ["Tops", "Dresses", "Jeans", "Skirts", "Footwear", "Accessories"]
  },
  {
    name: "Women Traditionals",
    subcategories: ["Sarees", "Kurtis", "Lehengas", "Salwar Suits", "Ethnic Footwear"]
  },
  {
    name: "Winter Wears",
    subcategories: ["Jackets", "Sweaters", "Coats", "Thermals", "Scarves", "Gloves"]
  }
];

export const CategoryNavbar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleCategoryHover = (categoryName: string) => {
    setHoveredCategory(categoryName);
    setActiveCategory(categoryName);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
    // Small delay before hiding dropdown to allow for smooth navigation
    setTimeout(() => {
      if (!hoveredCategory) {
        setActiveCategory(null);
      }
    }, 150);
  };

  return (
    <nav className="navbar-category">
      <div className="container mx-auto px-4">
        {/* Desktop Category Navigation */}
        <div className="hidden md:flex items-center space-x-8 py-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative"
              onMouseEnter={() => handleCategoryHover(category.name)}
              onMouseLeave={handleCategoryLeave}
            >
              <button
                className={cn(
                  "flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  "hover:bg-primary/10 hover:text-primary",
                  activeCategory === category.name ? "bg-primary/10 text-primary" : "text-foreground"
                )}
              >
                <span>{category.name}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  activeCategory === category.name ? "rotate-180" : ""
                )} />
              </button>

              {/* Dropdown Menu */}
              {activeCategory === category.name && (
                <div className="absolute top-full left-0 mt-1 dropdown-eco min-w-48 z-50">
                  <div className="py-2">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground teal-hover transition-colors duration-200"
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Category Navigation - Scrollable */}
        <div className="md:hidden flex overflow-x-auto py-3 space-x-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium bg-card border border-border eco-hover transition-colors duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};