import {
  FaCoffee,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaHeart,
  FaClock,
  FaChevronUp,
} from "react-icons/fa";

function Footer() {

  const currentYear = new Date().getFullYear();

  // =========================================
  // SCROLL TO TOP
  // =========================================

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (

    <footer className="okali-footer">

      <div className="container">


        {/* =====================================
            FOOTER MAIN
        ===================================== */}

        <div className="footer-main">


          {/* ===================================
              BRAND
          =================================== */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >

              <div className="footer-logo-icon">
                <FaCoffee />
              </div>


              <div className="footer-logo-text">

                <span>
                  OKALI'S
                </span>

                <small>
                  CAFE
                </small>

              </div>

            </a>


            <p className="footer-description">

              A cozy corner where great coffee,
              delicious food and beautiful moments
              come together.

            </p>


            {/* SOCIAL MEDIA */}

            <div className="footer-socials">

              <a
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>


              <a
                href="#"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>

            </div>

          </div>



          {/* ===================================
              EXPLORE
          =================================== */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>


            <ul>

              <li>
                <a href="#home">
                  Home
                </a>
              </li>


              <li>
                <a href="#menu">
                  Our Menu
                </a>
              </li>


              <li>
                <a href="#about">
                  About Us
                </a>
              </li>


              <li>
                <a href="#gallery">
                  Gallery
                </a>
              </li>


              <li>
                <a href="#testimonials">
                  Reviews
                </a>
              </li>


              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>



          {/* ===================================
              SERVICES
          =================================== */}

          <div className="footer-column">

            <h3>
              Services
            </h3>


            <ul>

              <li>
                <a href="#menu">
                  Dine In
                </a>
              </li>


              <li>
                <a href="#menu">
                  Take Away
                </a>
              </li>


              <li>
                <a href="#menu">
                  Special Orders
                </a>
              </li>


              <li>
                <a href="#reservation">
                  Table Booking
                </a>
              </li>


              <li>
                <a href="#reservation">
                  Private Events
                </a>
              </li>


              <li>
                <a href="#contact">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>



          {/* ===================================
              CONTACT
          =================================== */}

          <div className="footer-column footer-contact">

            <h3>
              Visit Us
            </h3>


            {/* LOCATION */}

            <div className="footer-contact-item">

              <span>
                <FaMapMarkerAlt />
              </span>


              <p>
                Yelahanka,
                <br />
                Bengaluru, Karnataka
              </p>

            </div>


            {/* PHONE */}

            <div className="footer-contact-item">

              <span>
                <FaPhoneAlt />
              </span>


              <a href="tel:+919876543210">

                +91 98765 43210

              </a>

            </div>


            {/* EMAIL */}

            <div className="footer-contact-item">

              <span>
                <FaEnvelope />
              </span>


              <a href="mailto:hello@okaliscoffee.com">

                hello@okaliscoffee.com

              </a>

            </div>


            {/* OPENING HOURS */}

            <div className="footer-contact-item">

              <span>
                <FaClock />
              </span>


              <p>

                Mon – Sun
                <br />

                8:00 AM – 10:00 PM

              </p>

            </div>

          </div>

        </div>



        {/* =====================================
            CTA
        ===================================== */}

        <div className="footer-newsletter">


          <div className="footer-newsletter-content">

            <span className="footer-newsletter-label">

              STAY IN THE LOOP

            </span>


            <h3>

              Good coffee.

              <span>
                {" "}Good moments.
              </span>

            </h3>


            <p>

              Follow our journey and discover
              what's brewing at OKALI'S CAFE.

            </p>

          </div>


          <a
            href="#contact"
            className="footer-newsletter-button"
          >

            Get in Touch

            <FaArrowRight />

          </a>

        </div>



        {/* =====================================
            BOTTOM FOOTER
        ===================================== */}

        <div className="footer-bottom">


          <p>

            © {currentYear} OKALI'S CAFE.

            <span>
              {" "}All rights reserved.
            </span>

          </p>


          <p className="footer-made-with">

            Made with

            <FaHeart />

            for coffee lovers.

          </p>


          <div className="footer-bottom-links">

            <a href="#">
              Privacy Policy
            </a>


            <a href="#">
              Terms & Conditions
            </a>

          </div>



          {/* BACK TO TOP */}

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >

            <FaChevronUp />

          </button>

        </div>

      </div>

    </footer>

  );
}

export default Footer;