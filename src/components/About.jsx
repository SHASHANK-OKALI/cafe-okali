import {
  FaCoffee,
  FaLeaf,
  FaHeart,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* LEFT - IMAGES */}
          <div className="col-lg-6">

            <div className="about-image-area">

              {/* Main image */}
              <div className="about-main-image">

                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85"
                  alt="Okali's Cafe interior"
                />

              </div>

              {/* Small image */}
              <div className="about-small-image">

                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=600&q=85"
                  alt="Coffee being prepared"
                />

              </div>


              {/* Experience Card */}
              <div className="experience-card">

                <div className="experience-icon">
                  <FaCoffee />
                </div>

                <div>
                  <strong>Since 2020</strong>
                  <span>Brewing happiness</span>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT - CONTENT */}
          <div className="col-lg-6">

            <div className="about-content">

              <div className="section-label">
                <FaHeart />
                Our Story
              </div>

              <h2>
                More than coffee,
                <span> it's a feeling.</span>
              </h2>

              <p className="about-intro">
                Okali's Cafe was created with one simple idea —
                to make every visit feel special.
              </p>

              <p>
                We believe a great cafe is more than just a place
                to grab coffee. It is a place where conversations
                begin, ideas grow, friendships are made and
                everyday moments become memories.
              </p>

              <p>
                From carefully selected coffee beans to freshly
                prepared food, everything we serve is made with
                attention, passion and a little bit of love.
              </p>


              {/* Feature Cards */}
              <div className="about-features">

                <div className="about-feature">

                  <div className="feature-icon">
                    <FaLeaf />
                  </div>

                  <div>
                    <h4>Fresh Ingredients</h4>

                    <p>
                      Carefully selected ingredients
                      prepared fresh every day.
                    </p>
                  </div>

                </div>


                <div className="about-feature">

                  <div className="feature-icon">
                    <FaAward />
                  </div>

                  <div>
                    <h4>Crafted With Care</h4>

                    <p>
                      Every cup and dish is prepared
                      with attention to detail.
                    </p>
                  </div>

                </div>

              </div>


              <a href="#contact" className="about-button">
                Discover Our Story
                <FaArrowRight />
              </a>

            </div>

          </div>

        </div>


        {/* STATS */}
        <div className="about-stats">

          <div className="about-stat">

            <strong>50K+</strong>

            <span>
              Happy Customers
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="about-stat">

            <strong>25+</strong>

            <span>
              Menu Creations
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="about-stat">

            <strong>4.9</strong>

            <span>
              Customer Rating
            </span>

          </div>


          <div className="stat-divider"></div>


          <div className="about-stat">

            <strong>6+</strong>

            <span>
              Years of Passion
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;