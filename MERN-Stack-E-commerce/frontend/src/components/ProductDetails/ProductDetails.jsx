import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import SingleTabs from "./SingleTabs/SingleTabs";
import PropTypes from "prop-types";

import "./ProductDetails.css";

const ProductDetails = ({ product, setSingleProduct }) => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-content">
          <main className="site-main">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </main>
        </div>
        <SingleTabs product={product} setSingleProduct={setSingleProduct} />
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.propTypes = {
  product: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
