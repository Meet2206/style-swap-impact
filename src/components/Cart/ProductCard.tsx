import React from 'react';

import { Star, ShoppingCart, RotateCcw } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, type: 'swap' | 'redeem') => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(product.condition)}`}>
            {product.condition}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{product.brand}</span>
          <span className="text-sm font-medium text-gray-800">{product.size}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
          <span className="text-lg font-bold text-amber-600">{product.points} pts</span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onAddToCart(product, 'swap')}
            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Swap</span>
          </button>
          <button
            onClick={() => onAddToCart(product, 'redeem')}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Redeem</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;