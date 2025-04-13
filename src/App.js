import React from "react";
import HomePage from "./pages/HomePage";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}
