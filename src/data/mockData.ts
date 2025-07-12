import { Category, Product, User, GlobalStats } from '../types';

export const mockUser: User = {
  id: '1',
  username: 'EcoWarrior23',
  location: 'San Francisco, CA',
  avatar: '/avatars/avatar1.svg',
  totalShared: 24,
  swaps: 18,
  rewardPoints: 450,
  rating: 4.8,
  wasteReduced: 12.3,
  co2Saved: 28.7
};

export const globalStats: GlobalStats = {
  clothesShared: 12547,
  wasteSaved: 3689.2,
  co2Saved: 8614.8
};

export const categories: Category[] = [
  {
    id: 'men',
    name: 'Men',
    icon: '👕',
    subcategories: [
      { id: 'jeans', name: 'Jeans', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/men/jeans' },
      { id: 'shirts', name: 'Shirts', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/men/shirts' },
      { id: 'jackets', name: 'Jackets', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/men/jackets' },
      { id: 'sneakers', name: 'Sneakers', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/men/sneakers' }
    ]
  },
  {
    id: 'men-traditional',
    name: 'Men Traditionals',
    icon: '🕴',
    subcategories: [
      { id: 'kurtas', name: 'Kurtas', image: 'https://images.pexels.com/photos/3737120/pexels-photo-3737120.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/men-traditional/kurtas' },
      { id: 'sherwanis', name: 'Sherwanis', image: 'https://images.pexels.com/photos/3737120/pexels-photo-3737120.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/men-traditional/sherwanis' }
    ]
  },
  {
    id: 'women',
    name: 'Women',
    icon: '👗',
    subcategories: [
      { id: 'dresses', name: 'Dresses', image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/women/dresses' },
      { id: 'tops', name: 'Tops', image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/women/tops' },
      { id: 'jeans', name: 'Jeans', image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/women/jeans' },
      { id: 'heels', name: 'Heels', image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/women/heels' }
    ]
  },
  {
    id: 'women-traditional',
    name: 'Women Traditionals',
    icon: '🧕',
    subcategories: [
      { id: 'sarees', name: 'Sarees', image: 'https://images.pexels.com/photos/3737120/pexels-photo-3737120.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/women-traditional/sarees' },
      { id: 'lehengas', name: 'Lehengas', image: 'https://images.pexels.com/photos/3737120/pexels-photo-3737120.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/women-traditional/lehengas' }
    ]
  },
  {
    id: 'winter',
    name: 'Winter Wears',
    icon: '🧥',
    subcategories: [
      { id: 'coats', name: 'Coats', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/winter/coats' },
      { id: 'sweaters', name: 'Sweaters', image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/winter/sweaters' },
      { id: 'boots', name: 'Boots', image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop', path: '/winter/boots' }
    ]
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Vintage Levi\'s 501 Jeans',
    category: 'men',
    subcategory: 'jeans',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    condition: 'excellent',
    size: '32W x 34L',
    brand: 'Levi\'s',
    points: 25,
    ownerId: '1',
    status: 'available',
    description: 'Classic vintage Levi\'s 501 jeans in excellent condition'
  },
  {
    id: '2',
    title: 'Cotton Oxford Shirt',
    category: 'men',
    subcategory: 'shirts',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    condition: 'good',
    size: 'Large',
    brand: 'Brooks Brothers',
    points: 20,
    ownerId: '2',
    status: 'available',
    description: 'Professional oxford shirt, perfect for office wear'
  },
  {
    id: '3',
    title: 'Elegant Evening Dress',
    category: 'women',
    subcategory: 'dresses',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    condition: 'excellent',
    size: 'Medium',
    brand: 'Zara',
    points: 35,
    ownerId: '3',
    status: 'available',
    description: 'Beautiful black evening dress, worn only once'
  },
  {
    id: '4',
    title: 'Casual Summer Top',
    category: 'women',
    subcategory: 'tops',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    condition: 'good',
    size: 'Small',
    brand: 'H&M',
    points: 15,
    ownerId: '1',
    status: 'available',
    description: 'Light and airy summer top in perfect condition'
  },
  {
    id: '5',
    title: 'Winter Wool Coat',
    category: 'winter',
    subcategory: 'coats',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    condition: 'excellent',
    size: 'Large',
    brand: 'The North Face',
    points: 45,
    ownerId: '2',
    status: 'available',
    description: 'Warm and stylish winter coat, excellent for cold weather'
  },
  {
    id: '6',
    title: 'Traditional Silk Saree',
    category: 'women-traditional',
    subcategory: 'sarees',
    image: 'https://images.pexels.com/photos/3737120/pexels-photo-3737120.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    condition: 'excellent',
    size: 'One Size',
    brand: 'Handloom',
    points: 50,
    ownerId: '3',
    status: 'available',
    description: 'Beautiful silk saree with intricate embroidery'
  }
];