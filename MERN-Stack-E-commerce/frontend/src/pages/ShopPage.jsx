import CampaignSingle from "../components/CampaignSingle/CampaignSingle";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

const ShopPage = () => {
  return (
    <>
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
    </>
  );
};

export default ShopPage;
