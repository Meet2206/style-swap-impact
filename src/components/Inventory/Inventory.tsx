import React, { useState } from "react";
import { Edit, Trash2, Eye } from "lucide-react";
import { mockProducts } from "@/data/mockData";

interface InventoryProps {
  userId: string;
}

const Inventory: React.FC<InventoryProps> = ({ userId }) => {
  const [filter, setFilter] = useState<
    "all" | "available" | "swapped" | "redeemed"
  >("all");

  const userProducts = mockProducts.filter(
    (product) => product.ownerId === userId
  );

  const filteredProducts =
    filter === "all"
      ? userProducts
      : userProducts.filter((product) => product.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "text-green-600 bg-green-100";
      case "swapped":
        return "text-blue-600 bg-blue-100";
      case "redeemed":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "excellent":
        return "text-green-600 bg-green-100";
      case "good":
        return "text-blue-600 bg-blue-100";
      case "fair":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              My Inventory
            </h1>
            <p className="text-gray-600">
              {filteredProducts.length} items in your collection
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Filter Buttons */}
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              {["all", "available", "swapped", "redeemed"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status as any)}
                  className={`px-4 py-2 rounded text-sm font-medium transition-colors capitalize ${
                    filter === status
                      ? "bg-teal-500 text-white"
                      : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
              Add New Item
            </button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {product.title}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {product.brand} • {product.size}
                        </p>
                        <div className="flex items-center space-x-2 mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              product.status
                            )}`}
                          >
                            {product.status}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(
                              product.condition
                            )}`}
                          >
                            {product.condition}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-bold text-amber-600 mb-1">
                          {product.points} pts
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {product.category} • {product.subcategory}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-teal-600 transition-colors">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">View</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-amber-600 transition-colors">
                        <Edit className="w-4 h-4" />
                        <span className="text-sm">Edit</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                        <span className="text-sm">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {filter === "all"
                ? "No items in your inventory"
                : `No ${filter} items found`}
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === "all"
                ? "Start sharing your unused clothes with the community!"
                : `You don't have any ${filter} items at the moment.`}
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors">
              Add Your First Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;
