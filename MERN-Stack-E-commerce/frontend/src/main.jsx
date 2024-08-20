import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import CartProvider from "./context/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CartProvider>
  </BrowserRouter>
);
