import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import productData from "../../../data.json";
import "./ProductGallery.css";

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

const ProductGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  const [activeImg, setActiveImg] = useState(productData[0].img.singleImage);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={activeImg} alt="" id="single-image" />
      </div>
      <div className="product-thumb glide">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            <Slider {...settings}>
              {productData[0].img.thumbs.map((itemImg, index) => (
                <li key={index} onClick={() => setActiveImg(itemImg)}>
                  <img
                    src={itemImg}
                    alt=""
                    className={`img-fluid ${
                      itemImg === activeImg ? "active" : ""
                    }`}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default ProductGallery;
