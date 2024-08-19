import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cartItem) => {
    // setCartItems([...cartItems, cartItem]) 1. way
    setCartItems((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
