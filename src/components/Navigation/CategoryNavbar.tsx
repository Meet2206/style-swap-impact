import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface SubcategoryItem {
  name: string;
  path: string;
  icon: string;
}

interface CategoryItem {
  name: string;
  path: string;
  subcategories: SubcategoryItem[];
}

const categories: CategoryItem[] = [
  {
    name: "Men",
    path: "men",
    subcategories: [
      { name: "T-Shirts", path: "t-shirts", icon: "👕" },
      { name: "Jeans", path: "jeans", icon: "👖" },
      { name: "Hoodies", path: "hoodies", icon: "🧥" },
      { name: "Shirts", path: "shirts", icon: "👔" },
      { name: "Footwear", path: "footwear", icon: "👟" },
      { name: "Accessories", path: "accessories", icon: "🎒" }
    ]
  },
  {
    name: "Men Traditionals",
    path: "men-traditionals",
    subcategories: [
      { name: "Kurtas", path: "kurtas", icon: "🧥" },
      { name: "Sherwanis", path: "sherwanis", icon: "👘" },
      { name: "Dhoti", path: "dhoti", icon: "👔" },
      { name: "Ethnic Jackets", path: "ethnic-jackets", icon: "🧥" },
      { name: "Traditional Footwear", path: "traditional-footwear", icon: "👡" }
    ]
  },
  {
    name: "Women",
    path: "women",
    subcategories: [
      { name: "Tops", path: "tops", icon: "👚" },
      { name: "Dresses", path: "dresses", icon: "👗" },
      { name: "Jeans", path: "jeans", icon: "👖" },
      { name: "Skirts", path: "skirts", icon: "👗" },
      { name: "Footwear", path: "footwear", icon: "👠" },
      { name: "Accessories", path: "accessories", icon: "👜" }
    ]
  },
  {
    name: "Women Traditionals",
    path: "women-traditionals",
    subcategories: [
      { name: "Sarees", path: "sarees", icon: "🥻" },
      { name: "Kurtis", path: "kurtis", icon: "👚" },
      { name: "Lehengas", path: "lehengas", icon: "👗" },
      { name: "Salwar Suits", path: "salwar-suits", icon: "👘" },
      { name: "Ethnic Footwear", path: "ethnic-footwear", icon: "👡" }
    ]
  },
  {
    name: "Winter Wears",
    path: "winter-wears",
    subcategories: [
      { name: "Jackets", path: "jackets", icon: "🧥" },
      { name: "Sweaters", path: "sweaters", icon: "🧶" },
      { name: "Coats", path: "coats", icon: "🧥" },
      { name: "Thermals", path: "thermals", icon: "👕" },
      { name: "Scarves", path: "scarves", icon: "🧣" },
      { name: "Gloves", path: "gloves", icon: "🧤" }
    ]
  }
];

export const CategoryNavbar = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const navigate = useNavigate();

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

  const handleSubcategoryClick = (categoryPath: string, subcategoryPath: string) => {
    navigate(`/${categoryPath}/${subcategoryPath}`);
    setActiveCategory(null);
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
                <div className="absolute top-full left-0 mt-1 min-w-64 z-50 backdrop-blur-md bg-white/90 shadow-lg rounded-md border border-gray-200 overflow-hidden">
                  <div className="py-2">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory.path}
                        onClick={() => handleSubcategoryClick(category.path, subcategory.path)}
                        className="flex items-center w-full text-left px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        <span className="text-2xl mr-3">{subcategory.icon}</span>
                        <span>{subcategory.name}</span>
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