// Static product data organized by categories

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
  description?: string;
}

// Import product images
import productLaptop from "@/assets/product-laptop.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

// Product categories
export const categories = [
  { id: "electronics", name: "Electronics", slug: "electronics" },
  { id: "stationery", name: "Stationery", slug: "stationery" },
  { id: "fashion", name: "Fashion", slug: "fashion" },
  { id: "home", name: "Home & Living", slug: "home" },
  { id: "sports", name: "Sports", slug: "sports" },
  { id: "books", name: "Books", slug: "books" }
];

// All products organized by categories
export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: productHeadphones,
    rating: 4.8,
    reviews: 245,
    category: "electronics",
    onSale: true,
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    image: productWatch,
    rating: 4.6,
    reviews: 189,
    category: "electronics",
    isNew: true,
    description: "Latest smartwatch with fitness tracking and health monitoring"
  },
  {
    id: 3,
    name: "Ultra Slim Laptop",
    price: 1299.99,
    image: productLaptop,
    rating: 4.9,
    reviews: 432,
    category: "electronics",
    description: "Powerful laptop for work and entertainment"
  },
  {
    id: 4,
    name: "Smartphone Max",
    price: 899.99,
    originalPrice: 999.99,
    image: productPhone,
    rating: 4.7,
    reviews: 567,
    category: "electronics",
    onSale: true,
    description: "Latest smartphone with advanced camera system"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: productHeadphones,
    rating: 4.5,
    reviews: 123,
    category: "electronics",
    description: "Portable speaker with premium sound quality"
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 49.99,
    image: productLaptop,
    rating: 4.4,
    reviews: 98,
    category: "electronics",
    description: "Ergonomic wireless mouse for productivity"
  },

  // Stationery
  {
    id: 7,
    name: "Premium Notebook Set",
    price: 24.99,
    image: productLaptop,
    rating: 4.6,
    reviews: 87,
    category: "stationery",
    description: "High-quality notebooks for professional use"
  },
  {
    id: 8,
    name: "Luxury Pen Collection",
    price: 89.99,
    image: productLaptop,
    rating: 4.8,
    reviews: 156,
    category: "stationery",
    isNew: false,
    description: "Premium pens with smooth writing experience"
  },
  {
    id: 9,
    name: "Desk Organizer Set",
    price: 34.99,
    image: productLaptop,
    rating: 4.5,
    reviews: 64,
    category: "stationery",
    description: "Keep your desk organized and tidy"
  },

  // Fashion
  {
    id: 10,
    name: "Designer Sunglasses",
    price: 159.99,
    originalPrice: 199.99,
    image: productWatch,
    rating: 4.7,
    reviews: 234,
    category: "fashion",
    onSale: true,
    description: "Stylish sunglasses with UV protection"
  },
  {
    id: 11,
    name: "Leather Wallet",
    price: 79.99,
    image: productWatch,
    rating: 4.6,
    reviews: 145,
    category: "fashion",
    description: "Premium leather wallet with RFID protection"
  },
  {
    id: 12,
    name: "Fashion Watch",
    price: 249.99,
    image: productWatch,
    rating: 4.8,
    reviews: 289,
    category: "fashion",
    isNew: true,
    description: "Elegant watch for any occasion"
  },

  // Home & Living
  {
    id: 13,
    name: "Aromatherapy Diffuser",
    price: 49.99,
    image: productHeadphones,
    rating: 4.5,
    reviews: 178,
    category: "home",
    description: "Create a relaxing atmosphere at home"
  },
  {
    id: 14,
    name: "Smart LED Bulbs",
    price: 34.99,
    image: productHeadphones,
    rating: 4.4,
    reviews: 92,
    category: "home",
    description: "Control your lighting with your smartphone"
  },
  {
    id: 15,
    name: "Decorative Cushions",
    price: 29.99,
    image: productHeadphones,
    rating: 4.6,
    reviews: 156,
    category: "home",
    description: "Comfortable and stylish cushions"
  },

  // Sports
  {
    id: 16,
    name: "Yoga Mat Pro",
    price: 39.99,
    image: productWatch,
    rating: 4.7,
    reviews: 234,
    category: "sports",
    description: "Non-slip yoga mat for all levels"
  },
  {
    id: 17,
    name: "Resistance Bands Set",
    price: 24.99,
    image: productWatch,
    rating: 4.5,
    reviews: 167,
    category: "sports",
    description: "Complete set for home workouts"
  },
  {
    id: 18,
    name: "Water Bottle Insulated",
    price: 19.99,
    image: productWatch,
    rating: 4.6,
    reviews: 289,
    category: "sports",
    description: "Keep drinks cold for 24 hours"
  },

  // Books
  {
    id: 19,
    name: "Business Success Guide",
    price: 29.99,
    image: productLaptop,
    rating: 4.8,
    reviews: 345,
    category: "books",
    description: "Essential reading for entrepreneurs"
  },
  {
    id: 20,
    name: "Mindfulness Journal",
    price: 19.99,
    image: productLaptop,
    rating: 4.7,
    reviews: 198,
    category: "books",
    description: "Daily journal for mindfulness practice"
  },
  {
    id: 21,
    name: "Cookbook Collection",
    price: 39.99,
    image: productLaptop,
    rating: 4.6,
    reviews: 256,
    category: "books",
    description: "Delicious recipes from around the world"
  }
];

// Helper functions
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isNew || product.onSale).slice(0, 8);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getAllCategories = () => {
  return categories;
};
