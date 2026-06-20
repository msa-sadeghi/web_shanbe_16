import { useState } from "react";
import CartContext from "./CartContext";
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productID) => {
    setCart(cart.filter((item) => item.id !== productID));
  };

  const totalItems = cart.length;

  const value = {
    cart,
    addToCart,
    removeFromCart,
    totalItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
