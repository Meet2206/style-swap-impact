import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, Filter, ChevronRight, Home } from "lucide-react";
import { MainNavbar } from "@/components/Navigation/MainNavbar";
import { CategoryNavbar } from "@/components/Navigation/CategoryNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: "Classic Blue Jeans",
    brand: "Levi's",
    size: "M",
    condition: "Good",
    points: 150,
    image: "/placeholder.svg",
    description: "Comfortable blue jeans in good condition"
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    brand: "H&M",
    size: "S",
    condition: "Excellent",
    points: 120,
    image: "/placeholder.svg",
    description: "Trendy skinny fit jeans"
  },
  {
    id: 3,
    title: "Vintage Denim",
    brand: "Wrangler",
    size: "L",
    condition: "Fair",
    points: 80,
    image: "/placeholder.svg",
    description: "Vintage style denim jeans"
  },
  {
    id: 4,
    title: "Designer Jeans",
    brand: "Tommy Hilfiger",
    size: "M",
    condition: "Excellent",
    points: 200,
    image: "/placeholder.svg",
    description: "Premium designer jeans"
  }
];

const categoryNames: Record<string, string> = {
  "men": "Men",
  "women": "Women",
  "men-traditionals": "Men Traditionals",
  "women-traditionals": "Women Traditionals",
  "winter-wears": "Winter Wears"
};

const subcategoryNames: Record<string, string> = {
  "jeans": "Jeans",
  "t-shirts": "T-Shirts",
  "hoodies": "Hoodies",
  "shirts": "Shirts",
  "footwear": "Footwear",
  "accessories": "Accessories",
  "tops": "Tops",
  "dresses": "Dresses",
  "skirts": "Skirts"
};

export default function Subcategory() {
  const { category, subcategory } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");

  const categoryDisplayName = categoryNames[category || ""] || "Category";
  const subcategoryDisplayName = subcategoryNames[subcategory || ""] || "Items";

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSize = selectedSize === "all" || product.size === selectedSize;
    const matchesCondition = selectedCondition === "all" || product.condition === selectedCondition;
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;
    
    return matchesSearch && matchesSize && matchesCondition && matchesBrand;
  });

  return (
    <div className="min-h-screen bg-background">
      <MainNavbar />
      <CategoryNavbar />

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>{categoryDisplayName}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{subcategoryDisplayName}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-poppins mb-2">
            {categoryDisplayName} › {subcategoryDisplayName}
          </h1>
          <p className="text-muted-foreground">
            Discover sustainable fashion choices in our {subcategoryDisplayName.toLowerCase()} collection
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sizes</SelectItem>
                <SelectItem value="XS">XS</SelectItem>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCondition} onValueChange={setSelectedCondition}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="Excellent">Excellent</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
                <SelectItem value="Fair">Fair</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="Levi's">Levi's</SelectItem>
                <SelectItem value="H&M">H&M</SelectItem>
                <SelectItem value="Wrangler">Wrangler</SelectItem>
                <SelectItem value="Tommy Hilfiger">Tommy Hilfiger</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        Size {product.size}
                      </Badge>
                      <Badge 
                        variant={product.condition === "Excellent" ? "default" : "outline"}
                        className="text-xs"
                      >
                        {product.condition}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {product.points} pts
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 space-x-2">
                <Button variant="outline" className="flex-1">
                  Request Swap
                </Button>
                <Button className="flex-1 btn-eco">
                  Redeem
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">👕</div>
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse other categories
            </p>
          </div>
        )}
      </div>
    </div>
  );
}