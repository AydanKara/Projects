import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { message } from "antd";
import "./Search.css";

const Search = ({ isSearchShow, setIsSearchShow }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const productName = e.target[0].value;
    try {
      const response = await fetch(
        `${apiUrl}/api/products/search/${productName.trim()}`
      );
      if (!response.ok) {
        message.error("Product " + productName + " not found");
        return;
      }

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Product " + productName + " not found", error);
    }
  };

  const handleSearchResults = () => {
    setIsSearchShow(false);
    setSearchResults(null);
  };
  return (
    <div className={`modal-search ${isSearchShow ? "show" : ""}`}>
      <div className="modal-wrapper">
        <h3 className="modal-title">Search for products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search" />
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div
            className="results"
            style={{
              display: `${searchResults?.length === 0 ? "flex" : "grid"}`,
            }}
          >
            {searchResults?.length === 0 && (
              <a
                href="#"
                className="result-item"
                style={{ justifyContent: "center", width: "100%" }}
              >
                😔The product was not found😔
              </a>
            )}
            {searchResults?.map((resultItem) => (
              <Link
                to={`product/${resultItem._id}`}
                className="result-item"
                key={resultItem._id}
              >
                <img src={resultItem.img[0]} className="search-thump" alt="" />
                <div className="search-info">
                  <h4>{resultItem.name}</h4>
                  <span className="search-sku">SKU: PD0016</span>
                  <span className="search-price">
                    $ {resultItem.price.current.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={handleSearchResults}
        />
      </div>
      <div className="modal-overlay" onClick={handleSearchResults}></div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  isSearchShow: PropTypes.bool,
  setIsSearchShow: PropTypes.func,
};
