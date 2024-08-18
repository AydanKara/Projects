import "./ProductGallery.css";

const ProductGallery = () => {
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src="img/products/product2/1.png" alt="" id="single-image" />
      </div>
      <div className="product-thumb glide">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides" />
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="bi bi-chevron-left" />
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
