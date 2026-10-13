import React, { useState } from "react";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUsers,
  FiStar,
  FiSend,
} from "react-icons/fi";

import "./Booking.css";

import auditoriumImage from "../Booking/assets/fecilities.jpeg";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="susa-booking-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className="susa-booking-hero"
        style={{
          backgroundImage: `url(${auditoriumImage})`,
        }}
      >
        <div className="susa-booking-hero-overlay" />

        <div className="susa-booking-hero-content">

          <span className="susa-booking-eyebrow">
            <FiStar />
            SUSA THIRUMAL AUDITORIUM
          </span>

          <div className="susa-booking-hero-line" />

          <h1>
            Your Event.
            <span> Your Moment.</span>
          </h1>

          <p>
            Tell us what you're planning and let us help you
            create an occasion worth remembering.
          </p>

          <div className="susa-booking-hero-meta">
            <span>
              <FiCalendar />
              Plan Your Date
            </span>

            <span>
              <FiUsers />
              Tell Us Your Guests
            </span>

            <span>
              <FiCheckCircle />
              Start Planning
            </span>
          </div>

        </div>

        <div className="susa-booking-hero-number">
          <span>01</span>
          BOOK YOUR MOMENT
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="susa-booking-intro">
        <div className="susa-booking-container">

          <div className="susa-booking-intro-grid">

            <div className="susa-booking-intro-title">

              <span className="susa-booking-label">
                LET'S GET STARTED
              </span>

              <h2>
                Tell Us About
                <span> Your Celebration</span>
              </h2>

            </div>

            <div className="susa-booking-intro-copy">

              <span className="susa-booking-intro-mark">
                01
              </span>

              <p>
                Every event begins with an idea. Share a few
                details about yours and we'll help you understand
                the venue, planning requirements, and next steps.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN BOOKING
      ===================================================== */}
      <section className="susa-booking-section">

        <div className="susa-booking-container">

          <div className="susa-booking-grid">

            {/* =================================================
                FORM
            ================================================= */}
            <div className="susa-booking-form-card">

              <div className="susa-booking-form-top">

                <div>
                  <span className="susa-booking-form-number">
                    01
                  </span>

                  <span className="susa-booking-label">
                    EVENT ENQUIRY
                  </span>
                </div>

                <FiSend />

              </div>

              <div className="susa-booking-form-heading">

                <h3>
                  Let's Plan Something
                  <span> Special</span>
                </h3>

                <p>
                  Complete the form below with your event
                  details. It only takes a few minutes.
                </p>

              </div>


              {submitted ? (

                <div className="susa-booking-success">

                  <div className="susa-booking-success-icon">
                    <FiCheckCircle />
                  </div>

                  <span>ENQUIRY RECEIVED</span>

                  <h3>
                    Thank You!
                  </h3>

                  <p>
                    Your event enquiry has been submitted
                    successfully. Our team will get in touch
                    with you regarding the next steps.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="susa-booking-reset"
                  >
                    Submit Another Enquiry
                    <FiArrowRight />
                  </button>

                </div>

              ) : (

                <form
                  className="susa-booking-form"
                  onSubmit={handleSubmit}
                >

                  {/* PERSONAL DETAILS */}
                  <div className="susa-booking-form-section">

                    <span className="susa-booking-form-section-title">
                      YOUR DETAILS
                    </span>

                    <div className="susa-booking-form-row">

                      <div className="susa-booking-field">
                        <label htmlFor="name">
                          Full Name
                        </label>

                        <input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="susa-booking-field">
                        <label htmlFor="phone">
                          Phone Number
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          required
                        />
                      </div>

                    </div>

                    <div className="susa-booking-field">

                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                      />

                    </div>

                  </div>


                  {/* EVENT DETAILS */}
                  <div className="susa-booking-form-section">

                    <span className="susa-booking-form-section-title">
                      EVENT DETAILS
                    </span>

                    <div className="susa-booking-form-row">

                      <div className="susa-booking-field">

                        <label htmlFor="event">
                          Event Type
                        </label>

                        <select
                          id="event"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select event type
                          </option>

                          <option value="wedding">
                            Wedding
                          </option>

                          <option value="family">
                            Family Celebration
                          </option>

                          <option value="corporate">
                            Corporate Event
                          </option>

                          <option value="other">
                            Other
                          </option>
                        </select>

                      </div>


                      <div className="susa-booking-field">

                        <label htmlFor="guests">
                          Expected Guests
                        </label>

                        <select
                          id="guests"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select guest count
                          </option>

                          <option value="under-100">
                            Under 100
                          </option>

                          <option value="100-250">
                            100 – 250
                          </option>

                          <option value="250-500">
                            250 – 500
                          </option>

                          <option value="500-plus">
                            500+
                          </option>
                        </select>

                      </div>

                    </div>


                    <div className="susa-booking-form-row">

                      <div className="susa-booking-field">

                        <label htmlFor="date">
                          Preferred Date
                        </label>

                        <input
                          id="date"
                          type="date"
                          required
                        />

                      </div>


                      <div className="susa-booking-field">

                        <label htmlFor="time">
                          Preferred Time
                        </label>

                        <select
                          id="time"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select preferred time
                          </option>

                          <option value="morning">
                            Morning
                          </option>

                          <option value="afternoon">
                            Afternoon
                          </option>

                          <option value="evening">
                            Evening
                          </option>
                        </select>

                      </div>

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="susa-booking-form-section">

                    <span className="susa-booking-form-section-title">
                      YOUR VISION
                    </span>

                    <div className="susa-booking-field">

                      <label htmlFor="message">
                        Additional Details
                      </label>

                      <textarea
                        id="message"
                        rows="5"
                        placeholder="Tell us anything important about your event..."
                      />

                    </div>

                  </div>


                  <button
                    type="submit"
                    className="susa-booking-submit"
                  >
                    <span>
                      Send Event Enquiry
                    </span>

                    <FiArrowRight />

                  </button>

                  <p className="susa-booking-form-note">
                    Your enquiry helps us understand your
                    requirements before we discuss the details.
                  </p>

                </form>

              )}

            </div>


            {/* =================================================
                SIDE PANEL
            ================================================= */}
            <aside className="susa-booking-info">

              <div className="susa-booking-info-card">

                <div className="susa-booking-info-header">

                  <span className="susa-booking-label">
                    THE SUSA JOURNEY
                  </span>

                  <span className="susa-booking-info-badge">
                    01 — 04
                  </span>

                </div>

                <h3>
                  From Your
                  <span> Idea</span>
                  <br />
                  To Your
                  <span> Event</span>
                </h3>

                <p>
                  A simple journey designed to make your event
                  planning experience clear and comfortable.
                </p>


                <div className="susa-booking-info-list">

                  <div className="susa-booking-info-item">

                    <span className="susa-booking-info-number">
                      01
                    </span>

                    <span className="susa-booking-info-icon">
                      <FiCalendar />
                    </span>

                    <div>
                      <strong>Choose Your Date</strong>
                      <small>
                        Tell us when your event is planned.
                      </small>
                    </div>

                  </div>


                  <div className="susa-booking-info-item">

                    <span className="susa-booking-info-number">
                      02
                    </span>

                    <span className="susa-booking-info-icon">
                      <FiUsers />
                    </span>

                    <div>
                      <strong>Share Your Requirements</strong>
                      <small>
                        Tell us about your guests and occasion.
                      </small>
                    </div>

                  </div>


                  <div className="susa-booking-info-item">

                    <span className="susa-booking-info-number">
                      03
                    </span>

                    <span className="susa-booking-info-icon">
                      <FiClock />
                    </span>

                    <div>
                      <strong>Discuss The Details</strong>
                      <small>
                        Understand the venue and planning needs.
                      </small>
                    </div>

                  </div>


                  <div className="susa-booking-info-item">

                    <span className="susa-booking-info-number">
                      04
                    </span>

                    <span className="susa-booking-info-icon">
                      <FiCheckCircle />
                    </span>

                    <div>
                      <strong>Make It Happen</strong>
                      <small>
                        Bring your celebration to SUSA.
                      </small>
                    </div>

                  </div>

                </div>

              </div>


              {/* CONTACT */}
              <div className="susa-booking-contact-card">

                <div className="susa-booking-contact-icon">
                  <FiPhone />
                </div>

                <span className="susa-booking-label">
                  NEED HELP?
                </span>

                <h3>
                  Let's Talk About
                  <span> Your Event</span>
                </h3>

                <p>
                  Have a question before submitting your enquiry?
                  Contact the auditorium team directly.
                </p>

                <div className="susa-booking-contact-details">

                  <a href="tel:+919442608612">
                    <FiPhone />
                    <span>
                      <small>PHONE</small>
                      Call Us
                    </span>
                  </a>

                  <a href="mailto:info@susaauditorium.com">
                    <FiMail />
                    <span>
                      <small>EMAIL</small>
                      Email Us
                    </span>
                  </a>

                  <div>
                    <FiMapPin />
                    <span>
                      <small>VENUE</small>
                      SUSA Thirumal Auditorium
                    </span>
                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="susa-booking-process">

        <div className="susa-booking-container">

          <div className="susa-booking-process-heading">

            <span className="susa-booking-label">
              HOW IT WORKS
            </span>

            <h2>
              Four Steps.
              <span> One Memorable Event.</span>
            </h2>

            <p>
              A simple process from your first enquiry to
              your special day.
            </p>

          </div>


          <div className="susa-booking-process-grid">

            <div className="susa-booking-process-item">

              <span>01</span>

              <div className="susa-booking-process-icon">
                <FiSend />
              </div>

              <h3>Enquire</h3>

              <p>
                Share your event requirements with us.
              </p>

            </div>


            <div className="susa-booking-process-item">

              <span>02</span>

              <div className="susa-booking-process-icon">
                <FiUsers />
              </div>

              <h3>Discuss</h3>

              <p>
                Talk through your event and venue needs.
              </p>

            </div>


            <div className="susa-booking-process-item">

              <span>03</span>

              <div className="susa-booking-process-icon">
                <FiCalendar />
              </div>

              <h3>Plan</h3>

              <p>
                Finalize the details for your occasion.
              </p>

            </div>


            <div className="susa-booking-process-item">

              <span>04</span>

              <div className="susa-booking-process-icon">
            <FiStar />
              </div>

              <h3>Celebrate</h3>

              <p>
                Bring your special event to life at SUSA.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Booking;