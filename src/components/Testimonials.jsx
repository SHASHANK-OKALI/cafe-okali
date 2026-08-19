import { useEffect, useState } from "react";

import {
  FaStar,
  FaQuoteLeft,
  FaHeart,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import testimonialData from "../data/testimonialData";

function Testimonials() {

  const [activeReview, setActiveReview] =
    useState(0);


  // =========================================
  // NEXT REVIEW
  // =========================================

  const nextReview = () => {

    setActiveReview(
      (previous) =>
        (previous + 1) %
        testimonialData.length
    );

  };


  // =========================================
  // PREVIOUS REVIEW
  // =========================================

  const previousReview = () => {

    setActiveReview(
      (previous) =>
        previous === 0
          ? testimonialData.length - 1
          : previous - 1
    );

  };


  // =========================================
  // AUTO SLIDER
  // =========================================

  useEffect(() => {

    const interval = setInterval(() => {

      nextReview();

    }, 6000);


    return () => clearInterval(interval);

  }, []);


  // =========================================
  // CURRENT REVIEW
  // =========================================

  const currentReview =
    testimonialData[activeReview];


  return (

    <section
      id="testimonials"
      className="testimonial-section"
    >

      <div className="container">


        {/* =====================================
            HEADING
        ===================================== */}

        <div className="section-heading text-center">

          <div className="section-label">

            <FaHeart />

            Guest Love

          </div>


          <h2>

            Loved by people,

            <span>
              {" "}one cup at a time.
            </span>

          </h2>


          <p>

            Nothing makes us happier than seeing
            our guests leave with a smile.

          </p>

        </div>



        {/* =====================================
            RATING SUMMARY
        ===================================== */}

        <div className="rating-summary">


          {/* OVERALL RATING */}

          <div className="overall-rating">

            <strong>
              4.9
            </strong>


            <div className="overall-stars">

              {[1, 2, 3, 4, 5].map(
                (star) => (

                  <FaStar
                    key={star}
                  />

                )
              )}

            </div>


            <span>
              Based on 500+ reviews
            </span>

          </div>



          <div className="rating-divider"></div>



          {/* RATING MESSAGE */}

          <div className="rating-message">

            <FaQuoteLeft />

            <p>

              "Good coffee brings people together,
              and that's exactly what we want
              OKALI'S CAFE to be."

            </p>

          </div>

        </div>



        {/* =====================================
            FEATURED REVIEW
        ===================================== */}

        {currentReview && (

          <div className="featured-testimonial">


            {/* PREVIOUS */}

            <button
              type="button"
              className="testimonial-navigation testimonial-prev"
              onClick={previousReview}
              aria-label="Previous testimonial"
            >

              <FaChevronLeft />

            </button>



            {/* REVIEW */}

            <div
              className="featured-testimonial-content"
              key={currentReview.id}
            >


              <div className="featured-quote">

                <FaQuoteLeft />

              </div>


              {/* STARS */}

              <div className="featured-stars">

                {Array.from(
                  {
                    length:
                      currentReview.rating,
                  },
                  (_, index) => (

                    <FaStar
                      key={index}
                    />

                  )
                )}

              </div>


              {/* REVIEW */}

              <p className="featured-review">

                "{currentReview.review}"

              </p>


              {/* CUSTOMER */}

              <div className="featured-customer">

                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  loading="lazy"
                />


                <div>

                  <h4>
                    {currentReview.name}
                  </h4>

                  <span>
                    {currentReview.role}
                  </span>

                </div>


                <FaCheckCircle
                  className="verified-icon"
                  title="Verified customer"
                />

              </div>

            </div>



            {/* NEXT */}

            <button
              type="button"
              className="testimonial-navigation testimonial-next"
              onClick={nextReview}
              aria-label="Next testimonial"
            >

              <FaChevronRight />

            </button>

          </div>

        )}



        {/* =====================================
            REVIEW INDICATORS
        ===================================== */}

        <div className="testimonial-dots">

          {testimonialData.map(
            (testimonial, index) => (

              <button
                type="button"
                key={testimonial.id}
                className={
                  activeReview === index
                    ? "testimonial-dot active"
                    : "testimonial-dot"
                }
                onClick={() =>
                  setActiveReview(index)
                }
                aria-label={`View review ${
                  index + 1
                }`}
              />

            )
          )}

        </div>



        {/* =====================================
            REVIEW CARDS
        ===================================== */}

        <div className="row g-4 testimonial-cards-row">

          {testimonialData
            .slice(0, 3)
            .map((testimonial) => (

              <div
                className="col-md-6 col-lg-4"
                key={testimonial.id}
              >

                <div
                  className={
                    activeReview ===
                    testimonialData.indexOf(
                      testimonial
                    )
                      ? "testimonial-card active-card"
                      : "testimonial-card"
                  }
                >


                  {/* QUOTE */}

                  <div className="testimonial-quote">

                    <FaQuoteLeft />

                  </div>


                  {/* RATING */}

                  <div className="testimonial-stars">

                    {Array.from(
                      {
                        length:
                          testimonial.rating,
                      },
                      (_, index) => (

                        <FaStar
                          key={index}
                        />

                      )
                    )}

                  </div>


                  {/* REVIEW */}

                  <p className="testimonial-review">

                    "{testimonial.review}"

                  </p>


                  {/* CUSTOMER */}

                  <div className="testimonial-customer">

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                    />


                    <div>

                      <h4>
                        {testimonial.name}
                      </h4>

                      <span>
                        {testimonial.role}
                      </span>

                    </div>


                    <FaCheckCircle
                      className="verified-icon"
                      title="Verified customer"
                    />

                  </div>

                </div>

              </div>

            ))}

        </div>



        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <div className="testimonial-bottom">

          <span>

            <FaHeart />

            Made with love for our guests

          </span>


          <span className="testimonial-line"></span>


          <span>
            Come visit us today
          </span>

        </div>

      </div>

    </section>

  );
}

export default Testimonials;