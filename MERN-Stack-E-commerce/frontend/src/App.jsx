import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
import "./App.css";
import AdminCategoryPage from "./pages/admin/categories/AdminCategoryPage";
import AdminUpdateCategoryPage from "./pages/admin/categories/AdminUpdateCategoryPage";
import AdminCreateCategoryPage from "./pages/admin/categories/AdminCreateCategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AccountPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/admin/*">
        <Route path="users" element={<AdminUserPage />} />
        <Route path="categories" element={<AdminCategoryPage />} />
        <Route path="categories/create" element={<AdminCreateCategoryPage />} />
        <Route path="categories/update/:id" element={<AdminUpdateCategoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
