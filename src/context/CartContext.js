import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    setCartItems((prev) => [...prev, product]);
  }
  function removeFromCart(index) {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
