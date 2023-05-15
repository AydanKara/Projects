import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }
  
  const closeCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  }
  return (
    <div className="App">
      {cartIsShow && <Cart onClose={closeCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </div>
  );
}

export default App;
