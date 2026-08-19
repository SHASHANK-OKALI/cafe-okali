import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  // ================================
  // CART STATE
  // ================================

  const [cartItems, setCartItems] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);


  // ================================
  // ADD ITEM TO CART
  // ================================

  const addToCart = (item) => {
    setCartItems((currentItems) => {

      const existingItem = currentItems.find(
        (cartItem) =>
          cartItem.id === item.id
      );


      // If item already exists
      if (existingItem) {

        return currentItems.map(
          (cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity:
                    cartItem.quantity + 1,
                }
              : cartItem
        );

      }


      // Add new item
      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });


    // Open cart after adding item
    setIsCartOpen(true);
  };


  // ================================
  // TOTAL CART ITEMS
  // ================================

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  return (
    <>
      {/* ============================
          NAVBAR
      ============================ */}

      <Navbar
        cartCount={cartCount}
        onCartClick={() =>
          setIsCartOpen(true)
        }
      />


      {/* ============================
          HERO
      ============================ */}

      <Hero />


      {/* ============================
          MENU
      ============================ */}

      <Menu
        addToCart={addToCart}
      />


      {/* ============================
          ABOUT
      ============================ */}

      <About />


      {/* ============================
          GALLERY
      ============================ */}

      <Gallery />


      {/* ============================
          TESTIMONIALS
      ============================ */}

      <Testimonials />


      {/* ============================
          RESERVATION
      ============================ */}

      <Reservation />


      {/* ============================
          CONTACT
      ============================ */}

      <Contact />

      <Footer />


      {/* ============================
          CART
      ============================ */}

      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </>
  );
}

export default App;