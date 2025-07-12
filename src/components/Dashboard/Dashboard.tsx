import React from "react";
import { Package, RotateCcw, Award, Star, TrendingUp } from "lucide-react";

import OdometerCounter from "./OdometerCounter";
import { Users } from "@/types";

interface DashboardProps {
  user: Users;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const swapHistory = [
    {
      id: 1,
      item: "Vintage Levi's Jeans",
      partner: "FashionLover88",
      rating: 5,
      date: "2 days ago",
    },
    {
      id: 2,
      item: "Silk Evening Dress",
      partner: "StyleQueen",
      rating: 4,
      date: "1 week ago",
    },
    {
      id: 3,
      item: "Winter Wool Coat",
      partner: "EcoChic",
      rating: 5,
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

        {/* User Profile Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-4xl">
                {user?.avatar}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.username}
              </h2>
              <p className="text-gray-600 mb-2">📍 {user?.location}</p>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">
                  {user?.rating} Rating
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">
                <OdometerCounter value={user?.totalShared ?? 0} />
                </div>
                <div className="text-sm text-gray-600">Total Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">
                  <OdometerCounter value={user?.swaps ?? 0} />
                </div>
                <div className="text-sm text-gray-600">Swaps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">
                  <OdometerCounter value={user?.rewardPoints??0} />
                </div>
                <div className="text-sm text-gray-600">Reward Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  <OdometerCounter value={user?.rating ?? 0} decimals={1} />
                </div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* My Impact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  My Impact
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">♻️</div>
                    <div>
                      <div className="font-medium text-gray-800">
                        Waste Reduced
                      </div>
                      <div className="text-sm text-gray-600">
                        Total kilograms saved
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-green-600">
                    <OdometerCounter
                      value={user?.wasteReduced ?? 0}
                      decimals={1}
                      suffix="kg"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌍</div>
                    <div>
                      <div className="font-medium text-gray-800">CO₂ Saved</div>
                      <div className="text-sm text-gray-600">
                        Carbon footprint reduction
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    <OdometerCounter
                      value={user?.co2Saved ?? 0}
                      decimals={1}
                      suffix="kg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-medium text-gray-800 mb-1">
                    Next Goal
                  </div>
                  <div className="text-sm text-gray-600">
                    15 more swaps to reach
                  </div>
                  <div className="font-bold text-amber-600">Eco Champion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Swap History
              </h3>

              <div className="space-y-4">
                {swapHistory?.map((swap) => (
                  <div
                    key={swap.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                        <RotateCcw className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          {swap.item}
                        </div>
                        <div className="text-sm text-gray-600">
                          Swapped with {swap.partner}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < swap.rating
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{swap.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="text-teal-600 hover:text-teal-700 font-medium">
                  View All History
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Package className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Add New Item</h3>
            <p className="text-sm text-gray-600 mb-4">
              Share your unused clothes with the community
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
              Upload Item
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <RotateCcw className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Browse & Swap</h3>
            <p className="text-sm text-gray-600 mb-4">
              Find amazing pieces to add to your wardrobe
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors">
              Start Browsing
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">Redeem Rewards</h3>
            <p className="text-sm text-gray-600 mb-4">
              Use your points to get exclusive items
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
              View Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
