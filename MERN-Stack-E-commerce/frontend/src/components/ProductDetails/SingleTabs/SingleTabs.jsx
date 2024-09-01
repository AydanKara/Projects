import { useState } from "react";
import PropTypes from "prop-types";

import Reviews from "../../Reviews/Reviews";
import "./SingleTabs.css";

function capitalizeFirstLetter(string) {
  if (string.length === 0) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SingleTabs = ({ product, setSingleProduct }) => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Description
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "info")}
          >
            Additional information
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
        >
          {product.description}
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  {product.colors.map((color, index) => (
                    <span key={index}>
                      {capitalizeFirstLetter(color)}
                      {index < product.colors.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  {product.sizes.map((size, index) => (
                    <span key={index}>
                      {size.toUpperCase()}
                      {index < product.sizes.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          product={product}
          setSingleProduct={setSingleProduct}
          active={activeTab === "reviews" ? "content active" : "content"}
        />
      </div>
    </div>
  );
};

export default SingleTabs;

SingleTabs.propTypes = {
  product: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
