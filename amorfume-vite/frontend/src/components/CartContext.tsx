import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  category: 'adult' | 'kids' | 'teens';
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  addToCartWithQuantity: (product: Product, quantity: number) => void;

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children, userId }: { children: ReactNode, userId: string }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(`cart_${userId}`);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [userId]);

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(p => p._id === product._id);
    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = cart.map((p, index) => 
        index === existingProductIndex ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(product => product._id !== productId);
    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    const updatedCart = cart.map(product =>
      product._id === productId ? { ...product, quantity } : product
    );
    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  const addToCartWithQuantity = (product: Product, quantity: number) => {
    const existingProductIndex = cart.findIndex(p => p._id === product._id);
    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = cart.map((p, index) => 
        index === existingProductIndex ? { ...p, quantity: (p.quantity || 0) + quantity } : p
      );
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }

    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, addToCartWithQuantity }}>
      {children}
    </CartContext.Provider>
  );
};