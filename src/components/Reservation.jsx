import { useState } from "react";

import {
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaCheckCircle,
  FaCoffee,
  FaArrowRight,
} from "react-icons/fa";

function Reservation() {

  // =========================================
  // FORM DATA
  // =========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
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
  // TODAY'S DATE
  // =========================================

  const today = new Date()
    .toISOString()
    .split("T")[0];


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (event) => {

    const { name, value } = event.target;


    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));


    // Remove error when user corrects field

    if (errors[name]) {

      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));

    }


    // Hide success message if user edits

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
        "Please enter a valid email.";

    }


    // -----------------------------------------
    // PHONE
    // -----------------------------------------

    const cleanPhone =
      formData.phone.replace(/\s/g, "");

    if (!cleanPhone) {

      newErrors.phone =
        "Please enter your phone number.";

    } else if (
      !/^[6-9]\d{9}$/.test(cleanPhone)
    ) {

      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number.";

    }


    // -----------------------------------------
    // DATE
    // -----------------------------------------

    if (!formData.date) {

      newErrors.date =
        "Please select a reservation date.";

    } else if (formData.date < today) {

      newErrors.date =
        "Reservation date cannot be in the past.";

    }


    // -----------------------------------------
    // TIME
    // -----------------------------------------

    if (!formData.time) {

      newErrors.time =
        "Please select a preferred time.";

    }


    // -----------------------------------------
    // GUESTS
    // -----------------------------------------

    if (!formData.guests) {

      newErrors.guests =
        "Please select the number of guests.";

    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };


  // =========================================
  // SUBMIT FORM
  // =========================================

  const handleSubmit = (event) => {

    event.preventDefault();


    // Stop if validation fails

    if (!validateForm()) {

      return;

    }


    // Show success state

    setSubmitted(true);


    // Scroll toward reservation section

    setTimeout(() => {

      document
        .getElementById("reservation")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

    }, 100);

  };


  // =========================================
  // RESET FORM
  // =========================================

  const handleReset = () => {

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });


    setErrors({});

    setSubmitted(false);

  };


  return (

    <section
      id="reservation"
      className="reservation-section"
    >

      <div className="container">


        {/* =====================================
            SECTION HEADING
        ===================================== */}

        <div className="section-heading text-center">

          <div className="section-label">

            <FaCoffee />

            Reserve Your Table

          </div>


          <h2>

            Your table is

            <span>
              {" "}waiting for you.
            </span>

          </h2>


          <p>

            Planning a coffee date, family lunch,
            or simply need your favourite corner?
            Reserve a table at Okali's Cafe.

          </p>

        </div>



        {/* =====================================
            RESERVATION WRAPPER
        ===================================== */}

        <div className="reservation-wrapper">


          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <div className="reservation-info">

            <div className="reservation-info-overlay">


              <span className="reservation-small-title">

                Okali's Cafe

              </span>


              <h3>

                Good food.

                <br />

                Great company.

                <br />

                Perfect moments.

              </h3>


              <p>

                Whether it's a casual coffee,
                a special celebration, or a
                quiet evening, we've got a
                table ready for you.

              </p>


              {/* INFO */}

              <div className="reservation-details">


                {/* Opening Hours */}

                <div className="reservation-detail">

                  <FaClock />

                  <div>

                    <strong>
                      Opening Hours
                    </strong>

                    <span>
                      Monday – Sunday
                    </span>

                    <span>
                      8:00 AM – 11:00 PM
                    </span>

                  </div>

                </div>


                {/* Perfect For */}

                <div className="reservation-detail">

                  <FaUsers />

                  <div>

                    <strong>
                      Perfect For
                    </strong>

                    <span>
                      Couples • Families
                    </span>

                    <span>
                      Friends • Meetings
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* =====================================
              RIGHT SIDE
          ===================================== */}

          <div className="reservation-form-area">


            {!submitted ? (

              <form
                className="reservation-form"
                onSubmit={handleSubmit}
                noValidate
              >


                {/* =================================
                    FORM HEADING
                ================================= */}

                <div className="reservation-form-heading">

                  <h3>
                    Book Your Table
                  </h3>

                  <p>
                    Fill in your details and
                    we'll save a seat for you.
                  </p>

                </div>



                {/* =================================
                    NAME
                ================================= */}

                <div className="form-field">

                  <label htmlFor="reservation-name">

                    Your Name

                  </label>


                  <div className="input-wrapper">

                    <FaUser />

                    <input
                      id="reservation-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      autoComplete="name"
                      className={
                        errors.name
                          ? "input-error"
                          : ""
                      }
                    />

                  </div>


                  {errors.name && (

                    <small className="form-error">
                      {errors.name}
                    </small>

                  )}

                </div>



                {/* =================================
                    EMAIL + PHONE
                ================================= */}

                <div className="row g-3">


                  {/* EMAIL */}

                  <div className="col-md-6">

                    <div className="form-field">

                      <label htmlFor="reservation-email">

                        Email Address

                      </label>


                      <div className="input-wrapper">

                        <FaEnvelope />

                        <input
                          id="reservation-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          className={
                            errors.email
                              ? "input-error"
                              : ""
                          }
                        />

                      </div>


                      {errors.email && (

                        <small className="form-error">
                          {errors.email}
                        </small>

                      )}

                    </div>

                  </div>



                  {/* PHONE */}

                  <div className="col-md-6">

                    <div className="form-field">

                      <label htmlFor="reservation-phone">

                        Phone Number

                      </label>


                      <div className="input-wrapper">

                        <FaPhone />

                        <input
                          id="reservation-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit number"
                          maxLength="10"
                          inputMode="numeric"
                          autoComplete="tel"
                          className={
                            errors.phone
                              ? "input-error"
                              : ""
                          }
                        />

                      </div>


                      {errors.phone && (

                        <small className="form-error">
                          {errors.phone}
                        </small>

                      )}

                    </div>

                  </div>

                </div>



                {/* =================================
                    DATE + TIME
                ================================= */}

                <div className="row g-3">


                  {/* DATE */}

                  <div className="col-md-6">

                    <div className="form-field">

                      <label htmlFor="reservation-date">

                        Reservation Date

                      </label>


                      <div className="input-wrapper">

                        <FaCalendarAlt />

                        <input
                          id="reservation-date"
                          type="date"
                          name="date"
                          value={formData.date}
                          min={today}
                          onChange={handleChange}
                          className={
                            errors.date
                              ? "input-error"
                              : ""
                          }
                        />

                      </div>


                      {errors.date && (

                        <small className="form-error">
                          {errors.date}
                        </small>

                      )}

                    </div>

                  </div>



                  {/* TIME */}

                  <div className="col-md-6">

                    <div className="form-field">

                      <label htmlFor="reservation-time">

                        Preferred Time

                      </label>


                      <div className="input-wrapper">

                        <FaClock />

                        <select
                          id="reservation-time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={
                            errors.time
                              ? "input-error"
                              : ""
                          }
                        >

                          <option value="">
                            Select time
                          </option>

                          <option value="08:00 AM">
                            08:00 AM
                          </option>

                          <option value="09:00 AM">
                            09:00 AM
                          </option>

                          <option value="10:00 AM">
                            10:00 AM
                          </option>

                          <option value="11:00 AM">
                            11:00 AM
                          </option>

                          <option value="12:00 PM">
                            12:00 PM
                          </option>

                          <option value="01:00 PM">
                            01:00 PM
                          </option>

                          <option value="02:00 PM">
                            02:00 PM
                          </option>

                          <option value="03:00 PM">
                            03:00 PM
                          </option>

                          <option value="04:00 PM">
                            04:00 PM
                          </option>

                          <option value="05:00 PM">
                            05:00 PM
                          </option>

                          <option value="06:00 PM">
                            06:00 PM
                          </option>

                          <option value="07:00 PM">
                            07:00 PM
                          </option>

                          <option value="08:00 PM">
                            08:00 PM
                          </option>

                          <option value="09:00 PM">
                            09:00 PM
                          </option>

                          <option value="10:00 PM">
                            10:00 PM
                          </option>

                        </select>

                      </div>


                      {errors.time && (

                        <small className="form-error">
                          {errors.time}
                        </small>

                      )}

                    </div>

                  </div>

                </div>



                {/* =================================
                    GUESTS
                ================================= */}

                <div className="form-field">

                  <label htmlFor="reservation-guests">

                    Number of Guests

                  </label>


                  <div className="input-wrapper">

                    <FaUsers />

                    <select
                      id="reservation-guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={
                        errors.guests
                          ? "input-error"
                          : ""
                      }
                    >

                      <option value="1">
                        1 Guest
                      </option>

                      <option value="2">
                        2 Guests
                      </option>

                      <option value="3">
                        3 Guests
                      </option>

                      <option value="4">
                        4 Guests
                      </option>

                      <option value="5">
                        5 Guests
                      </option>

                      <option value="6">
                        6 Guests
                      </option>

                      <option value="7">
                        7 Guests
                      </option>

                      <option value="8">
                        8 Guests
                      </option>

                      <option value="9">
                        9 Guests
                      </option>

                      <option value="10">
                        10 Guests
                      </option>

                    </select>

                  </div>


                  {errors.guests && (

                    <small className="form-error">
                      {errors.guests}
                    </small>

                  )}

                </div>



                {/* =================================
                    SPECIAL REQUEST
                ================================= */}

                <div className="form-field">

                  <label htmlFor="reservation-message">

                    Special Request

                    <span>
                      Optional
                    </span>

                  </label>


                  <div className="input-wrapper textarea-wrapper">

                    <FaCommentDots />

                    <textarea
                      id="reservation-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Birthday celebration, window seat, etc."
                      rows="3"
                    />

                  </div>

                </div>



                {/* =================================
                    SUBMIT
                ================================= */}

                <button
                  type="submit"
                  className="reservation-submit"
                >

                  Book My Table

                  <FaArrowRight />

                </button>


                <p className="reservation-note">

                  Your reservation request will
                  be recorded on this page.
                  No email confirmation is sent.

                </p>

              </form>

            ) : (


              /* =================================
                 SUCCESS MESSAGE
              ================================= */

              <div className="reservation-success">


                <div className="success-icon">

                  <FaCheckCircle />

                </div>


                <span className="success-label">

                  Reservation Request Received

                </span>


                <h3>

                  Your table request is in! ☕

                </h3>


                <p>

                  Thank you,

                  {" "}

                  <strong>
                    {formData.name}
                  </strong>

                  .

                  {" "}

                  We've recorded your request for

                  {" "}

                  <strong>
                    {formData.guests}
                  </strong>

                  {" "}
                  guest(s).

                </p>


                {/* SUMMARY */}

                <div className="reservation-summary">


                  <div>

                    <FaCalendarAlt />

                    <span>
                      {formData.date}
                    </span>

                  </div>


                  <div>

                    <FaClock />

                    <span>
                      {formData.time}
                    </span>

                  </div>

                </div>


                <p className="success-small-text">

                  Reservation details have been
                  captured successfully for your
                  selected date and time.

                </p>


                <button
                  type="button"
                  className="new-reservation-button"
                  onClick={handleReset}
                >

                  Make Another Reservation

                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>

  );
}

export default Reservation;