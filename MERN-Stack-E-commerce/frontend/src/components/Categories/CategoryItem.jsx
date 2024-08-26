import PropTypes from "prop-types";

const CategoryItem = ({ category }) => {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src={category.img}
          alt={category.name}
          className="category-image"
        />
        <span className="category-title">{category.name}</span>
      </a>
    </li>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.object,
};
