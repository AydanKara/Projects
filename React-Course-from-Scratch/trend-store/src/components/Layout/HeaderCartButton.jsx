import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Shopping Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
