import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const params = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products/${params.id}`);
        const data = await response.json();
        setSingleProduct(data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };
    fetchSingleProduct();
  }, [apiUrl, params.id]);

  return singleProduct ? (
    <ProductDetails product={singleProduct} setSingleProduct={setSingleProduct} />
  ) : (
    <p>Loading product...</p>
  );
};

export default ProductDetailsPage;
