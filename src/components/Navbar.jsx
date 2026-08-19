import { useEffect, useState } from "react";

import {
  FaCoffee,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

function Navbar({ cartCount = 0, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);


  // =========================================
  // DETECT PAGE SCROLL
  // =========================================

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  // =========================================
  // CLOSE MOBILE MENU
  // =========================================

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };


  // =========================================
  // NAVIGATION LINKS
  // =========================================

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Menu",
      href: "#menu",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Gallery",
      href: "#gallery",
    },
    {
      name: "Reviews",
      href: "#testimonials",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];


  return (
    <nav
      className={`okali-navbar ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >

      <div className="container">

        <div className="navbar-inner">

          {/* =================================
              LOGO
          ================================= */}

          <a
            href="#home"
            className="okali-logo"
            onClick={closeMobileMenu}
          >

            <div className="logo-icon">
              <FaCoffee />
            </div>

            <div className="logo-text">

              <span className="logo-main">
                OKALI'S
              </span>

              <span className="logo-sub">
                CAFE
              </span>

            </div>

          </a>


          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}

          <div className="desktop-navigation">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
              >
                {link.name}
              </a>

            ))}

          </div>


          {/* =================================
              NAVBAR ACTIONS
          ================================= */}

          <div className="navbar-actions">

            {/* Cart */}

            <button
              className="navbar-cart"
              onClick={onCartClick}
              aria-label="Open shopping cart"
            >

              <FaShoppingBag />

              {cartCount > 0 && (
                <span className="cart-count">
                  {cartCount > 99
                    ? "99+"
                    : cartCount}
                </span>
              )}

            </button>


            {/* Reservation */}

            <a
              href="#reservation"
              className="navbar-reserve"
            >

              Reserve Table

              <FaArrowRight />

            </a>


            {/* Mobile Menu */}

            <button
              className="navbar-menu-toggle"
              onClick={() =>
                setIsMenuOpen(
                  !isMenuOpen
                )
              }
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >

              {isMenuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}

            </button>

          </div>

        </div>


        {/* =================================
            MOBILE NAVIGATION
        ================================= */}

        <div
          className={`mobile-navigation ${
            isMenuOpen
              ? "mobile-navigation-open"
              : ""
          }`}
        >

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
            >

              {link.name}

            </a>

          ))}


          {/* Mobile Cart */}

          <button
            className="mobile-cart-button"
            onClick={() => {
              closeMobileMenu();
              onCartClick();
            }}
          >

            <span>

              <FaShoppingBag />

              Your Order

            </span>

            {cartCount > 0 && (
              <strong>
                {cartCount}
              </strong>
            )}

          </button>


          {/* Mobile Reservation */}

          <a
            href="#reservation"
            className="mobile-reserve-button"
            onClick={closeMobileMenu}
          >

            Reserve a Table

            <FaArrowRight />

          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;