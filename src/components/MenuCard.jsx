import {
  FaStar,
  FaPlus,
  FaHeart,
} from "react-icons/fa";

function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">

      {/* Image */}
      <div className="menu-image-wrapper">

        <img
          src={item.image}
          alt={item.name}
          className="menu-image"
        />

        {item.popular && (
          <span className="popular-badge">
            Popular
          </span>
        )}

        <button
          className="favorite-button"
          aria-label={`Add ${item.name} to favorites`}
        >
          <FaHeart />
        </button>

        {/* Rating */}
        <div className="menu-rating">
          <FaStar />
          <span>{item.rating}</span>
        </div>

      </div>

      {/* Content */}
      <div className="menu-card-content">

        <div className="menu-card-header">

          <div>
            <span className="menu-category">
              {item.category}
            </span>

            <h3>{item.name}</h3>
          </div>

          <span className="menu-price">
            ₹{item.price}
          </span>

        </div>

        <p>
          {item.description}
        </p>

        <button
          className="add-cart-button"
          onClick={() => onAddToCart(item)}
        >
          <span>Add to Order</span>

          <span className="add-icon">
            <FaPlus />
          </span>
        </button>

      </div>

    </div>
  );
}

export default MenuCard;