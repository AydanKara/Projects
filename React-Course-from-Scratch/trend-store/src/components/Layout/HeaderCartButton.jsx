import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = ({onShowCart}) => {
  return (
    <button className="button" onClick={onShowCart}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Shopping Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
