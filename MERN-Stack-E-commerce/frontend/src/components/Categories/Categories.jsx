import CategoryItem from "./CategoryItem";
import "./Categories.css";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch categories for the select dropdown
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchCategories();
  }, [apiUrl]);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All categories</h2>
          <p>Summer Collection New Modern Design</p>
        </div>
        <ul className="category-list">
          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
