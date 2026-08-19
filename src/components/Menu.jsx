import { useState } from "react";

import {
  FaCoffee,
  FaShoppingBag,
  FaPlus,
  FaStar,
} from "react-icons/fa";

function Menu({ addToCart }) {
  // =========================================
  // MENU ITEMS
  // =========================================

  const menuItems = [
    {
      id: 1,
      name: "Cappuccino",
      category: "Coffee",
      description:
        "Rich espresso blended with silky steamed milk and a soft layer of foam.",
      price: 160,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=85",
      popular: true,
    },

    {
      id: 2,
      name: "Caramel Latte",
      category: "Coffee",
      description:
        "Smooth espresso, creamy steamed milk and a delicate caramel sweetness.",
      price: 180,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=700&q=85",
      popular: false,
    },

    {
      id: 3,
      name: "Cold Coffee",
      category: "Beverages",
      description:
        "A chilled, creamy coffee blend topped with a smooth layer of froth.",
      price: 170,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
      popular: false,
    },

    {
      id: 4,
      name: "Cafe Mocha",
      category: "Coffee",
      description:
        "Bold espresso meets rich chocolate and steamed milk for a decadent cup.",
      price: 190,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=85",
      popular: true,
    },

    {
      id: 5,
      name: "Classic Burger",
      category: "Fast Food",
      description:
        "Juicy vegetable patty layered with fresh greens, cheese and our signature sauce.",
      price: 220,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85",
      popular: true,
    },

    {
      id: 6,
      name: "Loaded Sandwich",
      category: "Fast Food",
      description:
        "Freshly toasted bread filled with vegetables, cheese and creamy house dressing.",
      price: 190,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=85",
      popular: false,
    },

    {
      id: 7,
      name: "Chocolate Cake",
      category: "Desserts",
      description:
        "Moist chocolate sponge layered with silky chocolate cream and ganache.",
      price: 210,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85",
      popular: true,
    },

    {
      id: 8,
      name: "Blueberry Cheesecake",
      category: "Desserts",
      description:
        "Creamy cheesecake topped with a bright blueberry compote and fresh berries.",
      price: 230,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=85",
      popular: false,
    },

    {
      id: 9,
      name: "French Fries",
      category: "Fast Food",
      description:
        "Golden crispy fries seasoned with our special cafe seasoning.",
      price: 130,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85",
      popular: false,
    },

    {
      id: 10,
      name: "Masala Chai",
      category: "Beverages",
      description:
        "Traditional Indian tea brewed with aromatic spices and creamy milk.",
      price: 100,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=85",
      popular: false,
    },

    {
      id: 11,
      name: "Pasta Alfredo",
      category: "Special Dishes",
      description:
        "Creamy Alfredo pasta tossed with herbs, vegetables and parmesan.",
      price: 260,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=85",
      popular: true,
    },

    {
      id: 12,
      name: "Brownie Sundae",
      category: "Desserts",
      description:
        "Warm chocolate brownie served with vanilla ice cream and chocolate drizzle.",
      price: 220,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=85",
      popular: true,
    },
  ];


  // =========================================
  // CATEGORY STATE
  // =========================================

  const [activeCategory, setActiveCategory] =
    useState("All");


  // =========================================
  // CATEGORY LIST
  // =========================================

  const categories = [
    "All",
    "Coffee",
    "Fast Food",
    "Desserts",
    "Beverages",
    "Special Dishes",
  ];


  // =========================================
  // FILTER MENU ITEMS
  // =========================================

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) =>
            item.category === activeCategory
        );


  return (
    <section
      id="menu"
      className="menu-section"
    >

      <div className="container">

        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="section-heading text-center">

          <div className="section-label">
            <FaCoffee />
            OUR MENU
          </div>

          <h2>
            Made with love,
            <span> served with soul.</span>
          </h2>

          <p>
            From your first morning coffee to
            your favourite evening treat,
            there's always something waiting
            for you at Okali's Cafe.
          </p>

        </div>


        {/* =================================
            MENU FILTER BUTTONS
        ================================= */}

        <div className="menu-categories">

          {categories.map((category) => (

            <button
              key={category}
              className={`menu-category ${
                activeCategory === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory(category)
              }
            >

              {category}

            </button>

          ))}

        </div>


        {/* =================================
            MENU GRID
        ================================= */}

        <div className="row g-4">

          {filteredItems.map((item) => (

            <div
              className="col-lg-4 col-md-6"
              key={item.id}
            >

              <div className="menu-card">

                {/* Image */}

                <div className="menu-card-image">

                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />

                  {item.popular && (
                    <span className="menu-popular">
                      <FaStar />
                      Popular
                    </span>
                  )}

                  <span className="menu-category-badge">
                    {item.category}
                  </span>

                </div>


                {/* Content */}

                <div className="menu-card-content">

                  <div className="menu-card-top">

                    <div>

                      <h3>
                        {item.name}
                      </h3>

                      <div className="menu-rating">

                        <FaStar />

                        <span>
                          {item.rating}
                        </span>

                      </div>

                    </div>

                    <span className="menu-price">
                      ₹{item.price}
                    </span>

                  </div>


                  <p>
                    {item.description}
                  </p>


                  {/* Add To Cart */}

                  <button
                    className="add-to-cart-btn"
                    onClick={() =>
                      addToCart(item)
                    }
                  >

                    <span>
                      <FaPlus />
                    </span>

                    Add to Order

                    <FaShoppingBag />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =================================
            NO ITEMS MESSAGE
        ================================= */}

        {filteredItems.length === 0 && (

          <div className="menu-empty">

            <FaCoffee />

            <h3>
              Nothing here yet
            </h3>

            <p>
              Please choose another category.
            </p>

          </div>

        )}


        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="menu-bottom-cta">

          <div>

            <FaCoffee />

            <span>
              More delicious moments await
            </span>

          </div>

          <a href="#reservation">
            Reserve a Table
          </a>

        </div>

      </div>

    </section>
  );
}

export default Menu;