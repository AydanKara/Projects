import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import ProductItem from "./ProductItem";
import ProductData from "../../data.json";
import "./Products.css";

function NextBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
    >
      <i className="bi bi-chevron-right" />
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
      onClick={onClick}
    >
      <i className="bi bi-chevron-left" />
    </button>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products] = useState(ProductData);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="glide__track" data-glide-el="track">
            <Slider {...settings}>
              {products.map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
