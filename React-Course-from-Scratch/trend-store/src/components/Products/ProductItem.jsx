/* eslint-disable react/prop-types */
import Rating from "./Rating";
import Card from "../UI/Card";
import "./ProductItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;
  const { items, addItem, totalAmount } = useContext(CartContext);
  console.log(totalAmount);
  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}$</span>
      </div>
      <button className="add-to-cart" onClick={() => addItem(product)}>
        Add To Cart
      </button>
    </Card>
  );
};

export default ProductItem;
