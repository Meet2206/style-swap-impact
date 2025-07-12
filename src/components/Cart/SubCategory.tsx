import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Filter, Grid, List } from "lucide-react";

import { CartItem, Product } from "@/types";
import { mockProducts } from "@/data/mockData";
import ProductCard from "./ProductCard";

interface SubCategoryProps {
  onAddToCart: (item: CartItem) => void;
}

const SubCategory: React.FC<SubCategoryProps> = ({ onAddToCart }) => {
  const { category, subcategory } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    condition: "all",
    size: "all",
    brand: "all",
    minPoints: 0,
    maxPoints: 100,
  });
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let filtered = mockProducts.filter(
      (product) =>
        product.category === category && product.subcategory === subcategory
    );

    // Apply filters
    if (filters.condition !== "all") {
      filtered = filtered.filter(
        (product) => product.condition === filters.condition
      );
    }
    if (filters.size !== "all") {
      filtered = filtered.filter((product) =>
        product.size.includes(filters.size)
      );
    }
    if (filters.brand !== "all") {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }
    filtered = filtered.filter(
      (product) =>
        product.points >= filters.minPoints &&
        product.points <= filters.maxPoints
    );

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.points - b.points);
      case "price-high":
        return filtered.sort((a, b) => b.points - a.points);
      case "newest":
      default:
        return filtered;
    }
  }, [category, subcategory, filters, sortBy]);

  const handleAddToCart = (product: Product, type: "swap" | "redeem") => {
    onAddToCart({ product, type });
  };

  const uniqueBrands = Array.from(new Set(mockProducts.map((p) => p.brand)));
  const uniqueSizes = Array.from(new Set(mockProducts.map((p) => p.size)));

  return (
    <div className="min-h-screen bg-[#F5F2EB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="/" className="text-teal-600 hover:text-teal-700">
                Home
              </a>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <span className="text-gray-700 capitalize">
                {category?.replace("-", " ")}
              </span>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <span className="text-gray-900 capitalize font-medium">
                {subcategory}
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 capitalize mb-2">
              {subcategory} - {category?.replace("-", " ")}
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length} items found
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-white rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${
                  viewMode === "grid"
                    ? "bg-teal-500 text-white"
                    : "text-gray-600"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list"
                    ? "bg-teal-500 text-white"
                    : "text-gray-600"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-800">Filters</h3>
              </div>

              <div className="space-y-6">
                {/* Condition Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Condition
                  </label>
                  <select
                    value={filters.condition}
                    onChange={(e) =>
                      setFilters({ ...filters, condition: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Conditions</option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>

                {/* Brand Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <select
                    value={filters.brand}
                    onChange={(e) =>
                      setFilters({ ...filters, brand: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Brands</option>
                    {uniqueBrands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Size Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size
                  </label>
                  <select
                    value={filters.size}
                    onChange={(e) =>
                      setFilters({ ...filters, size: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Sizes</option>
                    {uniqueSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Points Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points Range: {filters.minPoints} - {filters.maxPoints}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.maxPoints}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        maxPoints: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">
                  No items found matching your filters
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      condition: "all",
                      size: "all",
                      brand: "all",
                      minPoints: 0,
                      maxPoints: 100,
                    })
                  }
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
