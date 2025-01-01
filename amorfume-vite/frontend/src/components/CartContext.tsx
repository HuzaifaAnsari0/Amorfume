import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserDetails {
  name: string;
  number: string;
  address: string;
  email: string;
}

interface Product {
  _id: string;
  name: string;
  description: string;
  image1: string;
  category: 'adult' | 'kids' | 'teens';
  bottleOptions: {
    type: string;
    price: number;
  }[];
  selectedBottle?: {
    type: string;
    price: number;
  };
  quantity?: number;
}

interface CartContextType {
  cart: Product[];
  userDetails: UserDetails;
  setUserDetails: (details: UserDetails) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number, bottleType: string) => void;
  addToCartWithQuantity: (product: Product, quantity: number) => void;
  calculateTotal: () => number;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>; // Add setCart to the context type
  popupMessage: string | null;
  setPopupMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    number: '',
    address: '',
    email: ''
  });
  const [popupMessage, setPopupMessage] = useState<string | null>(null); // State for popup message

  // Load cart when component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      const savedCart = localStorage.getItem(`cart_${storedUserId}`);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    }
  }, [cart, userId]);

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
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart)); // Update local storage

    // Show popup message
    setPopupMessage('Successfully added to cart!');
    setTimeout(() => {
      setPopupMessage(null);
    }, 5000);
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(product => product._id !== productId);
    setCart(updatedCart);
    localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart)); // Update local storage
  };

  const updateCartQuantity = (productId: string, quantity: number, bottleType: string) => {
    setCart(prevCart => {
      if (quantity <= 0) {
        // Remove product if quantity is 0 or less
        return prevCart.filter(
          product => 
            !(product._id === productId && product.selectedBottle?.type === bottleType)
        );
      }

      // Update quantity if greater than 0
      return prevCart.map(product =>
        product._id === productId && product.selectedBottle?.type === bottleType
          ? { ...product, quantity }
          : product
      );
    });
  };

  const addToCartWithQuantity = (product: Product, quantity: number) => {
    if (!product.selectedBottle) {
      setPopupMessage('Please select a bottle size');
      return;
    }

    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(
        item => 
          item._id === product._id && 
          item.selectedBottle?.type === product.selectedBottle?.type
      );

      if (existingProductIndex !== -1) {
        // Update existing product
        return prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: (item.quantity || 0) + quantity }
            : item
        );
      }

      // Add new product
      return [...prevCart, { ...product, quantity }];
    });

    setPopupMessage('Successfully added to cart!');
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = product.selectedBottle?.price || product.bottleOptions[0].price;
      return total + (price * (product.quantity || 1));
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, userDetails, setUserDetails, addToCart, removeFromCart, updateCartQuantity, addToCartWithQuantity, calculateTotal, setCart, popupMessage, setPopupMessage }}>
      {children}
      {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          {popupMessage}
        </div>
      )}
    </CartContext.Provider>
  );
};