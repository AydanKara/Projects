import ProductGallery from "./ProductGallery/ProductGallery";
import ProductInfo from "./ProductInfo/ProductInfo";
import SingleTabs from "./SingleTabs/SingleTabs";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-content">
          <main className="site-main">
            <ProductGallery />
            <ProductInfo />
          </main>
        </div>
        <SingleTabs />
      </div>
    </section>
  );
};

export default ProductDetails;
