import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";

const Reviews = ({ active }) => {
  return (
    <div className={`tab-panel-reviews ${active}`}>
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <ReviewItem />
        </ol>
      </div>
      {/* comment form start */}
      <ReviewForm />
      {/* comment form end */}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
};
