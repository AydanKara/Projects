import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ active, product }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      {product.reviews.length > 0 ? (
        <>
          <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
          <div className="comments">
            <ol className="comment-list">
              {product.reviews.map((review, index) => (
                <ReviewItem key={index} review={review} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>No reviews...</h3>
      )}
      {/* comment form start */}
      <ReviewForm />
      {/* comment form end */}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
  product: PropTypes.object,
};
