import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Products from "./components/Products/Products";
import Sliders from "./components/Slider/Sliders";
import "./App.css";
import Campaigns from "./components/Campaigns/Campaigns";

function App() {
  return (
    <>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Policy />
      <Footer />
    </>
  );
}

export default App;
