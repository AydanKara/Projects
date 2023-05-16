import CartItem from "./CartItem";
import products from "../../productData";
import "./Cart.css";
import Offcanvas from "../UI/Offcanvas";


const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={props.onClose}>
      <div className="content">
        <div className="cart-head">
          <h2>My Cart</h2>
          <a href="/" className="cart-close" onClick={props.onClose}>X</a>
        </div>
        {cartItems}
        <div className="total">
          <span>Total</span>
          <span>10$</span>
        </div>
        <div className="actions">
          <button className="cart-order">Order Now</button>
          <button className="cart-clear">Clear Cart</button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default Cart;
