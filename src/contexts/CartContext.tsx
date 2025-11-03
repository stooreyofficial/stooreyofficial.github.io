import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  image?: string;
}

interface CustomerInfo {
  name: string;
  phone: string;
}

interface CartContextType {
  items: CartItem[];
  customerInfo: CustomerInfo | null;
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  setCustomerInfo: (info: CustomerInfo) => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    loadCart();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0 || customerInfo) {
      localStorage.setItem('cart_items', JSON.stringify(items));
      localStorage.setItem('customer_info', JSON.stringify(customerInfo));
    }
  }, [items, customerInfo]);

  const loadCart = () => {
    try {
      const savedItems = localStorage.getItem('cart_items');
      const savedCustomerInfo = localStorage.getItem('customer_info');
      
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
      
      if (savedCustomerInfo) {
        setCustomerInfo(JSON.parse(savedCustomerInfo));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
    }
  };

  const addToCart = (product: any) => {
    // Check if item already exists
    const existingItem = items.find(item => item.productId === product.id);
    
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
      return;
    }

    const newItem: CartItem = {
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      quantity: 1,
      image: product.image
    };

    setItems(prev => [...prev, newItem]);
  };

  const removeFromCart = (productId: number) => {
    setItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems(prev => 
      prev.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cart_items');
  };

  const updateCustomerInfo = (info: CustomerInfo) => {
    setCustomerInfo(info);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        customerInfo,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setCustomerInfo: updateCustomerInfo,
        getTotalPrice,
        getItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};