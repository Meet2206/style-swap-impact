import React from 'react';
import { Trash2, RotateCcw, ShoppingCart } from 'lucide-react';
import { CartItem } from '@/types';


interface CartProps {
  cartItems: CartItem[];
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart, onClearCart }) => {
  const totalPoints = cartItems.reduce((sum, item) => sum + item.product.points, 0);
  const rewardBalance = 450; // Mock user balance

  return (
    <div className="min-h-screen bg-[#F5F2EB] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Cart Items ({cartItems.length})
                    </h2>
                    <button
                      onClick={onClearCart}
                      className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.product.image}
                          alt={item.product.title}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">{item.product.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.product.brand} • {item.product.size} • {item.product.condition}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                              item.type === 'swap' 
                                ? 'bg-teal-100 text-teal-600' 
                                : 'bg-amber-100 text-amber-600'
                            }`}>
                              {item.type === 'swap' ? (
                                <>
                                  <RotateCcw className="w-3 h-3" />
                                  <span>Swap</span>
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="w-3 h-3" />
                                  <span>Redeem</span>
                                </>
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-bold text-amber-600 mb-2">
                            {item.product.points} pts
                          </div>
                          <button
                            onClick={() => onRemoveFromCart(item.product.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items ({cartItems.length})</span>
                    <span className="font-medium">{totalPoints} points</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Your Balance</span>
                    <span className="font-medium text-green-600">{rewardBalance} points</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-800">Remaining Balance</span>
                      <span className={`font-bold ${
                        rewardBalance >= totalPoints ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {rewardBalance - totalPoints} points
                      </span>
                    </div>
                  </div>
                </div>

                {rewardBalance >= totalPoints ? (
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Confirm Order
                  </button>
                ) : (
                  <div>
                    <button className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-semibold cursor-not-allowed">
                      Insufficient Points
                    </button>
                    <p className="text-sm text-gray-600 mt-2 text-center">
                      You need {totalPoints - rewardBalance} more points
                    </p>
                  </div>
                )}

                <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                  <h4 className="font-medium text-teal-800 mb-2">💡 Earn More Points</h4>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Share items: +25 points each</li>
                    <li>• Complete swaps: +10 points each</li>
                    <li>• Refer friends: +50 points each</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">
              Browse our categories to find amazing items to swap or redeem!
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;