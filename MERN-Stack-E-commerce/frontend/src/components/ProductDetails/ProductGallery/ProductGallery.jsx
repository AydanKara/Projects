import { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
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

const ProductGallery = ({ product }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  const [activeImg, setActiveImg] = useState({
    img: "",
    imgIndex: 0,
  });

  useEffect(() => {
    setActiveImg({ img: product.img[0], imgIndex: 0 });
  }, [product.img]);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${activeImg.img}`} alt="" id="single-image" />
      </div>
      <div className="product-thumb glide">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
            <Slider {...settings}>
              {product.img.map((itemImg, index) => (
                <li
                  key={index}
                  onClick={() =>
                    setActiveImg({
                      img: itemImg,
                      imgIndex: index,
                    })
                  }
                >
                  <img
                    src={`${itemImg}`}
                    alt=""
                    className={`img-fluid ${
                      activeImg.imgIndex === index ? "active" : ""
                    } `}
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

ProductGallery.propTypes = {
  product: PropTypes.object,
};
