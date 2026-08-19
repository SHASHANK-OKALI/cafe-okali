import {
  FaArrowRight,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero-section">

      {/* Decorative background elements */}
      <div className="hero-circle circle-one"></div>
      <div className="hero-circle circle-two"></div>

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <div className="hero-content">

              <div className="hero-badge">
                <span>☕</span>
                Welcome to Okali's Cafe
              </div>

              <h1>
                Your daily dose of
                <span> good coffee.</span>
              </h1>

              <p className="hero-description">
                Discover handcrafted coffee, delicious food, and
                unforgettable moments in a warm and welcoming space
                created just for you.
              </p>

              <div className="hero-buttons">

                <a href="#menu" className="hero-primary-btn">
                  Explore Menu
                  <FaArrowRight />
                </a>

                <a href="#reservation" className="hero-secondary-btn">
                  Reserve a Table
                </a>

              </div>

              {/* Small location information */}
              <div className="hero-location">

                <FaMapMarkerAlt />

                <span>
                  Your neighborhood's favorite coffee spot
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="col-lg-6">

            <div className="hero-image-container">

              {/* Main image */}
              <div className="hero-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85"
                  alt="Freshly brewed coffee at Okali's Cafe"
                  className="hero-image"
                />

              </div>


              {/* Rating Card */}
              <div className="floating-card rating-card">

                <div className="rating-icon">
                  <FaStar />
                </div>

                <div>
                  <strong>4.9/5</strong>

                  <div className="stars">
                    ★★★★★
                  </div>

                  <small>Happy customers</small>
                </div>

              </div>


              {/* Opening Hours Card */}
              <div className="floating-card hours-card">

                <div className="hours-icon">
                  <FaClock />
                </div>

                <div>
                  <strong>Open Today</strong>

                  <small>
                    8:00 AM — 11:00 PM
                  </small>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;