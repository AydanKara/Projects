import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header className="header">
      <h1>Trend Shop</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
