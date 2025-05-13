import { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const inCart = prev.find((item) => item.id === product.id);
      const currentQuantityInCart = inCart ? inCart.quantity : 0;

      if (currentQuantityInCart >= product.Quantity) {
        toast.warning(`Only ${product.Quantity} in stock. You already added the maximum.`);
        return prev; // Don't add more
      }

    if (inCart) {
      // If product is already in the cart, increase quantity
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Otherwise, add it with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id 
    ? { ...item, quantity: Math.min(newQuantity, item.Quantity) } 
    : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider 
    value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart
export const useCart = () => useContext(CartContext);
