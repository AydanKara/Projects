import { useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";

const ReviewForm = ({ product, setSingleProduct }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      return message.warning("Please select a rating!");
    }
    const formData = {
      reviews: [
        ...product.reviews,
        {
          text: review,
          rating: parseInt(rating),
          user: user.id || user._id,
        },
      ],
    };

    try {
      const response = await fetch(`${apiUrl}/api/products/${product._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setReview("");
        setRating(0);
        setSingleProduct(data);
        message.success("Review added.");
      }
    } catch (error) {
      console.error("Failed to add review", error);
      message.error("Failed to add review.");
    }
  };

  return (
    <div className="review-form-wrapper">
      <h2>Add a review</h2>
      <form className="comment-form" onSubmit={handleSubmit}>
        <p className="comment-notes">
          Required fields are marked
          <span className="required">*</span>
        </p>
        <div className="comment-form-rating">
          <label>
            Your rating
            <span className="required">*</span>
          </label>
          <div className="stars">
            <a
              onClick={() => setRating(1)}
              className={`star ${rating === 1 && "active"}`}
            >
              <i className="bi bi-star-fill" />
            </a>
            <a
              onClick={() => setRating(2)}
              className={`star ${rating === 2 && "active"}`}
            >
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </a>
            <a
              onClick={() => setRating(3)}
              className={`star ${rating === 3 && "active"}`}
            >
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </a>
            <a
              onClick={() => setRating(4)}
              className={`star ${rating === 4 && "active"}`}
            >
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </a>
            <a
              onClick={() => setRating(5)}
              className={`star ${rating === 5 && "active"}`}
            >
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </a>
          </div>
        </div>
        <div className="comment-form-comment form-comment">
          <label htmlFor="comment">
            Your review
            <span className="required">*</span>
          </label>
          <textarea
            id="comment"
            cols={50}
            rows={10}
            onChange={(e) => setReview(e.target.value)}
            value={review}
            required
          />
        </div>
        <div className="form-submit">
          <input type="submit" className="btn submit" />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

ReviewForm.propTypes = {
  product: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
