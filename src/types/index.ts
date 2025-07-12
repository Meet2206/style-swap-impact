
export interface Users {
  id: string;
  username: string;
  location: string;
  avatar: number;
  totalShared: number;
  swaps: number;
  rewardPoints: number;
  rating: number;
  wasteReduced: number;
  co2Saved: number;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  image: string;
  condition: 'excellent' | 'good' | 'fair';
  size: string;
  brand: string;
  points: number;
  ownerId: string;
  status: 'available' | 'swapped' | 'redeemed';
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  image: string;
  path: string;
}

export interface GlobalStats {
  clothesShared: number;
  wasteSaved: number;
  co2Saved: number;
}

export interface CartItem {
  product: Product;
  type: 'swap' | 'redeem';
}