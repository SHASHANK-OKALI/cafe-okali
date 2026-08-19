import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPaperPlane,
  FaCoffee,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {

  // =========================================
  // FORM DATA
  // =========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  // =========================================
  // FORM ERRORS
  // =========================================

  const [errors, setErrors] = useState({});


  // =========================================
  // SUBMISSION STATE
  // =========================================

  const [submitted, setSubmitted] = useState(false);


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (event) => {

    const { name, value } = event.target;


    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));


    // Remove error when user starts correcting

    if (errors[name]) {

      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));

    }


    // Hide previous success message

    if (submitted) {
      setSubmitted(false);
    }

  };


  // =========================================
  // VALIDATE FORM
  // =========================================

  const validateForm = () => {

    const newErrors = {};


    // -----------------------------------------
    // NAME
    // -----------------------------------------

    const cleanName = formData.name.trim();

    if (!cleanName) {

      newErrors.name =
        "Please enter your name.";

    } else if (cleanName.length < 3) {

      newErrors.name =
        "Name must contain at least 3 characters.";

    } else if (!/^[A-Za-z\s.'-]+$/.test(cleanName)) {

      newErrors.name =
        "Please enter a valid name.";

    }


    // -----------------------------------------
    // EMAIL
    // -----------------------------------------

    const cleanEmail = formData.email.trim();

    if (!cleanEmail) {

      newErrors.email =
        "Please enter your email.";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
        cleanEmail
      )
    ) {

      newErrors.email =
        "Please enter a valid email address.";

    }


    // -----------------------------------------
    // SUBJECT
    // -----------------------------------------

    const cleanSubject =
      formData.subject.trim();

    if (!cleanSubject) {

      newErrors.subject =
        "Please enter a subject.";

    } else if (cleanSubject.length < 3) {

      newErrors.subject =
        "Subject must contain at least 3 characters.";

    }


    // -----------------------------------------
    // MESSAGE
    // -----------------------------------------

    const cleanMessage =
      formData.message.trim();

    if (!cleanMessage) {

      newErrors.message =
        "Please enter your message.";

    } else if (cleanMessage.length < 10) {

      newErrors.message =
        "Message should contain at least 10 characters.";

    } else if (cleanMessage.length > 500) {

      newErrors.message =
        "Message cannot exceed 500 characters.";

    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };


  // =========================================
  // SUBMIT FORM
  // =========================================

  const handleSubmit = (event) => {

    event.preventDefault();


    if (!validateForm()) {

      return;

    }


    // Show successful frontend submission

    setSubmitted(true);

  };


  // =========================================
  // RESET FORM
  // =========================================

  const handleReset = () => {

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });


    setErrors({});

    setSubmitted(false);

  };


  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="container">


        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="section-heading text-center">

          <div className="section-label">

            <FaCoffee />

            Get In Touch

          </div>


          <h2>

            Let's talk over

            <span>
              {" "}some coffee.
            </span>

          </h2>


          <p>

            Have a question, suggestion, or just
            want to say hello? We'd love to hear
            from you.

          </p>

        </div>



        {/* =====================================
            CONTACT CONTENT
        ===================================== */}

        <div className="contact-wrapper">


          {/* =====================================
              CONTACT INFORMATION
          ===================================== */}

          <div className="contact-info">

            <div className="contact-info-content">


              <span className="contact-kicker">
                OKALI'S CAFE
              </span>


              <h3>

                Come in for the

                <br />

                coffee.

                <br />

                Stay for the moments.

              </h3>


              <p>

                We're more than just a cafe.
                We're a place where conversations
                begin, friendships grow, and every
                cup tells a story.

              </p>



              {/* LOCATION */}

              <div className="contact-detail">

                <div className="contact-detail-icon">

                  <FaMapMarkerAlt />

                </div>


                <div>

                  <strong>
                    Visit Us
                  </strong>

                  <span>
                    OKALI'S CAFE
                  </span>

                  <span>
                    Yelahanka, Bengaluru
                  </span>

                  <span>
                    Karnataka, India
                  </span>

                </div>

              </div>



              {/* PHONE */}

              <div className="contact-detail">

                <div className="contact-detail-icon">

                  <FaPhoneAlt />

                </div>


                <div>

                  <strong>
                    Call Us
                  </strong>

                  <a href="tel:+919876543210">
                    +91 98765 43210
                  </a>

                  <a href="tel:+918765432109">
                    +91 87654 32109
                  </a>

                </div>

              </div>



              {/* EMAIL */}

              <div className="contact-detail">

                <div className="contact-detail-icon">

                  <FaEnvelope />

                </div>


                <div>

                  <strong>
                    Email Us
                  </strong>

                  <a href="mailto:hello@okalis.cafe">
                    hello@okalis.cafe
                  </a>

                  <span>
                    We'd love to hear from you.
                  </span>

                </div>

              </div>



              {/* SOCIAL MEDIA */}

              <div className="contact-social">

                <span>
                  Follow our coffee journey
                </span>


                <div className="social-links">

                  <a
                    href="#instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>


                  <a
                    href="#facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>


                  <a
                    href="#whatsapp"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>

                </div>

              </div>

            </div>

          </div>



          {/* =====================================
              RIGHT SIDE
          ===================================== */}

          <div className="contact-right">


            {/* =================================
                OPENING HOURS
            ================================= */}

            <div className="opening-hours">

              <div className="opening-hours-title">

                <div className="hours-icon">

                  <FaClock />

                </div>


                <div>

                  <span>
                    COME VISIT US
                  </span>

                  <h4>
                    Opening Hours
                  </h4>

                </div>

              </div>



              <div className="hours-list">

                <div>

                  <span>
                    Monday – Friday
                  </span>

                  <strong>
                    8:00 AM – 10:30 PM
                  </strong>

                </div>


                <div>

                  <span>
                    Saturday
                  </span>

                  <strong>
                    8:00 AM – 11:00 PM
                  </strong>

                </div>


                <div>

                  <span>
                    Sunday
                  </span>

                  <strong>
                    9:00 AM – 11:00 PM
                  </strong>

                </div>

              </div>

            </div>



            {/* =================================
                CONTACT FORM
            ================================= */}

            <div className="contact-form-card">


              {!submitted ? (

                <form
                  onSubmit={handleSubmit}
                  noValidate
                >


                  {/* =================================
                      FORM HEADING
                  ================================= */}

                  <div className="contact-form-heading">

                    <h3>
                      Send us a message
                    </h3>

                    <p>
                      Fill out the form and
                      we'll be happy to hear from you.
                    </p>

                  </div>



                  {/* =================================
                      NAME + EMAIL
                  ================================= */}

                  <div className="row g-3">


                    {/* NAME */}

                    <div className="col-md-6">

                      <div className="contact-form-field">

                        <label htmlFor="contact-name">
                          Your Name
                        </label>


                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          autoComplete="name"
                          className={
                            errors.name
                              ? "contact-input-error"
                              : ""
                          }
                        />


                        {errors.name && (

                          <small>
                            {errors.name}
                          </small>

                        )}

                      </div>

                    </div>



                    {/* EMAIL */}

                    <div className="col-md-6">

                      <div className="contact-form-field">

                        <label htmlFor="contact-email">
                          Email Address
                        </label>


                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          className={
                            errors.email
                              ? "contact-input-error"
                              : ""
                          }
                        />


                        {errors.email && (

                          <small>
                            {errors.email}
                          </small>

                        )}

                      </div>

                    </div>

                  </div>



                  {/* =================================
                      SUBJECT
                  ================================= */}

                  <div className="contact-form-field">

                    <label htmlFor="contact-subject">
                      Subject
                    </label>


                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to talk about?"
                      className={
                        errors.subject
                          ? "contact-input-error"
                          : ""
                      }
                    />


                    {errors.subject && (

                      <small>
                        {errors.subject}
                      </small>

                    )}

                  </div>



                  {/* =================================
                      MESSAGE
                  ================================= */}

                  <div className="contact-form-field">

                    <div className="message-label-row">

                      <label htmlFor="contact-message">
                        Message
                      </label>

                      <span className="message-counter">
                        {formData.message.length}/500
                      </span>

                    </div>


                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows="5"
                      maxLength="500"
                      className={
                        errors.message
                          ? "contact-input-error"
                          : ""
                      }
                    />


                    {errors.message && (

                      <small>
                        {errors.message}
                      </small>

                    )}

                  </div>



                  {/* =================================
                      SUBMIT
                  ================================= */}

                  <button
                    type="submit"
                    className="contact-submit"
                  >

                    Send Message

                    <FaPaperPlane />

                  </button>


                 

                </form>

              ) : (


                /* =================================
                   SUCCESS MESSAGE
                ================================= */

                <div className="contact-success">

                  <div className="contact-success-icon">

                    <FaCheckCircle />

                  </div>


                  <span className="contact-success-label">

                    MESSAGE RECEIVED

                  </span>


                  <h3>
                    Thanks for reaching out!
                  </h3>


                  <p>

                    Your message has been recorded
                    successfully.

                    <br />

                    We appreciate you taking the
                    time to contact OKALI'S CAFE.

                  </p>


                  <div className="contact-success-details">

                    <div>

                      <strong>
                        Subject
                      </strong>

                      <span>
                        {formData.subject}
                      </span>

                    </div>

                  </div>


                  <button
                    type="button"
                    onClick={handleReset}
                  >

                    Send Another Message

                    <FaArrowRight />

                  </button>

                </div>

              )}

            </div>



            {/* =================================
                MAP STYLE LOCATION
            ================================= */}

            <div className="contact-map">

              <div className="map-pattern"></div>


              <div className="map-location">

                <div className="map-pin">

                  <FaMapMarkerAlt />

                </div>


                <div>

                  <strong>
                    OKALI'S CAFE
                  </strong>

                  <span>
                    Yelahanka, Bengaluru
                  </span>

                </div>

              </div>


              <span className="map-label">
                YOUR NEXT COFFEE STOP
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;