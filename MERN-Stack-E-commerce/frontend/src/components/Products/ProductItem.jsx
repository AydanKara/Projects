import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import PropTypes from "prop-types";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item glide__slide">
      <div className="product-image">
        <a href="#">
          <img src={product.img.singleImage} alt="" className="img1" />
          <img src={product.img.thumbs[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {product.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-fill" />
          </li>
          <li>
            <i className="bi bi-star-half" />
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">
            ${product.price.newPrice.toFixed(2)}
          </strong>
          <span className="old-price">
            ${product.price.oldPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">-{product.discount}%</span>
        <div className="product-links">
          <button onClick={() => addToCart(product)}>
            <i className="bi bi-basket-fill" />
          </button>
          <button>
            <i className="bi bi-heart-fill" />
          </button>
          <a href="#">
            <i className="bi bi-eye-fill" />
          </a>
          <a href="#">
            <i className="bi bi-share-fill" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  setCartItems: PropTypes.func,
};
