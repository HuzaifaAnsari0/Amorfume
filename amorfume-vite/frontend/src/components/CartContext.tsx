import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserDetails {
  name: string;
  number: string;
  address: string;
  email: string;
}

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
  userDetails: UserDetails;
  setUserDetails: (details: UserDetails) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  addToCartWithQuantity: (product: Product, quantity: number) => void;
  calculateTotal: () => number;
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
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    number: '',
    address: '',
    email: ''
  });

  const [popupMessage, setPopupMessage] = useState<string | null>(null);

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

    setPopupMessage('Successfully added to cart!');
    setTimeout(() => {
      setPopupMessage(null);
    }, 5000);
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

    // Show popup message
    setPopupMessage('Successfully added to cart!');
    setTimeout(() => {
      setPopupMessage(null);
    }, 5000);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  };

  return (
    <CartContext.Provider value={{ cart, userDetails, setUserDetails, addToCart, removeFromCart, updateCartQuantity, addToCartWithQuantity, calculateTotal }}>
      {children}
      {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          {popupMessage}
        </div>
      )}
    </CartContext.Provider>
  );
};