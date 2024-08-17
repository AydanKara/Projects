import "./App.css";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Policy from "./components/Layout/Policy/Policy";
import Sliders from "./components/Slider/Sliders";

function App() {
  return (
    <>
      <Header />
      <Sliders />
      <Policy />
      <Footer />
    </>
  );
}

export default App;
