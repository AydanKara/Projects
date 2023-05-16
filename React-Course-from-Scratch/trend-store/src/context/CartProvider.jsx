import { createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearItem: () => {},
  };
  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
