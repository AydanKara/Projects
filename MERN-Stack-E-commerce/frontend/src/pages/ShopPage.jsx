import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header/Header";
import Policy from "../components/Layout/Policy";
import Products from "../components/Products/Products";

const ShopPage = () => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Policy />
      <Footer />
    </>
  );
};

export default ShopPage;
