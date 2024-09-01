import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";
import { message } from "antd";
import { useEffect, useState } from "react";

const Reviews = ({ active, product, setSingleProduct }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [users, setUsers] = useState([]);

  const thisReview = [];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Couldn't fetch users");
        }
      } catch (error) {
        console.error("Couldn't fetch users" + error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  product.reviews.forEach((review) => {
    const matchingUsers = users?.filter((user) => user._id === review.user);

    matchingUsers.forEach((matchingUser) => {
      thisReview.push({
        review: review,
        user: matchingUser,
      });
    });
  });

  return (
    <div className={`tab-panel-reviews ${active}`}>
      {product.reviews.length > 0 ? (
        <>
          <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
          <div className="comments">
            <ol className="comment-list">
              {thisReview.map((review, index) => (
                <ReviewItem key={index} reviewItem={review} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>No reviews...</h3>
      )}

      <ReviewForm product={product} setSingleProduct={setSingleProduct} />
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
  product: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
