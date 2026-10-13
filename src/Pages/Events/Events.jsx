import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
//   FiCalendar,
  FiHeart,
  FiUsers,
  FiBriefcase,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";

import "./Events.css";

import auditorium from "../Events/assets/wedc.jpeg";

import weddingImage from "../Events/assets/weda.jpeg";
import familyImage from "../Events/assets/fam1.jpeg";
import RecipImage from "../Events/assets/spcl1.jpeg";
import family from "../Events/assets/wed4.jpeg";
import auditoriumImg from "../Events/assets/interb.jpg";

const Events = () => {
  const eventTypes = [
    {
      icon: <FiHeart />,
      title: "Weddings",
      text: "Celebrate your special day in an elegant and welcoming venue.",
      image: weddingImage,
    },
    {
      icon: <FiUsers />,
      title: "Family Celebrations",
      text: "Bring everyone together for memorable family occasions.",
      image: familyImage,
    },
    {
      icon: <FiBriefcase />,
      title: "Corporate Events",
      text: "A professional setting for meetings, gatherings and events.",
      image: RecipImage ,
    },
  ];

  const eventFeatures = [
    "Spacious event environment",
    "Elegant atmosphere",
    "Guest-friendly experience",
    "Suitable for different occasions",
    "Convenient venue access",
    "Designed for memorable celebrations",
  ];

  const eventFlow = [
    {
      number: "01",
      title: "Plan",
      text: "Choose the right space and plan your occasion.",
    },
    {
      number: "02",
      title: "Prepare",
      text: "Organize the details that make your event special.",
    },
    {
      number: "03",
      title: "Celebrate",
      text: "Welcome your guests and enjoy the occasion together.",
    },
    {
      number: "04",
      title: "Remember",
      text: "Create moments that stay with you for years to come.",
    },
  ];

  return (
    <main className="susa-events-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="susa-events-hero">
        <img
          src={auditorium}
          alt="SUSA Thirumal Auditorium events"
          className="susa-events-hero-image"
        />

        <div className="susa-events-hero-overlay"></div>

        <div className="susa-events-container susa-events-hero-container">
          <div className="susa-events-hero-content">
            <span className="susa-events-eyebrow">
              EVENTS AT SUSA
            </span>

            <h1>
              Your Event.
              <span>Your Moment.</span>
            </h1>

            <p>
              A versatile venue designed to bring people together,
              create memorable experiences and make every occasion
              feel special.
            </p>

            <Link
              to="/booking"
              className="susa-events-primary-button"
            >
              Plan Your Event
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="susa-events-intro">
        <div className="susa-events-container">
          <div className="susa-events-intro-grid">
            <div>
              <span className="susa-events-section-eyebrow">
                CELEBRATE TOGETHER
              </span>

              <h2>
                One venue.
                <span>Many occasions.</span>
              </h2>
            </div>

            <p>
              From important milestones to joyful gatherings,
              SUSA Thirumal Auditorium provides a comfortable and
              elegant environment for different kinds of events.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENT TYPES
      ===================================================== */}
      <section className="susa-events-types">
        <div className="susa-events-container">
          <div className="susa-events-section-heading">
            <span className="susa-events-section-eyebrow">
              OCCASIONS
            </span>

            <h2>
              Made for moments
              <span>that matter.</span>
            </h2>
          </div>

          <div className="susa-events-types-grid">
            {eventTypes.map((event) => (
              <article
                className="susa-events-type-card"
                key={event.title}
              >
                <div className="susa-events-type-image">
                  <img
                    src={event.image}
                    alt={event.title}
                  />

                  <div className="susa-events-type-icon">
                    {event.icon}
                  </div>
                </div>

                <div className="susa-events-type-content">
                  <h3>{event.title}</h3>

                  <p>{event.text}</p>

                  <Link to="/booking">
                    Plan This Event
                    <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE
      ===================================================== */}
      <section className="susa-events-feature">
        <div className="susa-events-container">
          <div className="susa-events-feature-grid">
            <div className="susa-events-feature-image">
              <img
                src={auditoriumImg}
                alt="SUSA event venue"
              />

              <span className="susa-events-image-label">
                SUSA
              </span>
            </div>

            <div className="susa-events-feature-content">
              <span className="susa-events-section-eyebrow">
                YOUR OCCASION
              </span>

              <h2>
                A setting built
                <span>around your celebration.</span>
              </h2>

              <p>
                Every event has its own character. SUSA gives you
                a versatile setting where your guests can gather,
                connect and enjoy the occasion comfortably.
              </p>

              <div className="susa-events-points">
                {eventFeatures.map((item) => (
                  <div key={item}>
                    <FiCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section className="susa-events-experience">
        <div className="susa-events-container">
          <div className="susa-events-experience-heading">
            <span className="susa-events-section-eyebrow">
              THE EVENT EXPERIENCE
            </span>

            <h2>
              From the first plan
              <span>to the final memory.</span>
            </h2>

            <p>
              Make your occasion meaningful with a venue that
              supports every stage of your event.
            </p>
          </div>

          <div className="susa-events-flow-grid">
            {eventFlow.map((item) => (
              <article key={item.number}>
                <span className="susa-events-flow-number">
                  {item.number}
                </span>

                <div className="susa-events-flow-icon">
                  <FiStar />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SPECIAL MOMENTS
      ===================================================== */}
      <section className="susa-events-moments">
        <div className="susa-events-container">
          <div className="susa-events-moments-grid">
            <div className="susa-events-moments-content">
              <span className="susa-events-section-eyebrow">
                MEMORABLE OCCASIONS
              </span>

              <h2>
                Bring your people
                <span>together.</span>
              </h2>

              <p>
                Whether it is a once-in-a-lifetime celebration or
                a simple gathering with the people you love, the
                right venue helps turn an occasion into a memory.
              </p>

              <Link
                to="/facilities"
                className="susa-events-secondary-button"
              >
                Explore Facilities
                <FiArrowRight />
              </Link>
            </div>

            <div className="susa-events-moments-image">
              <img
                src={family}
                alt="Family celebration at SUSA"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="susa-events-cta">
        <div className="susa-events-container">
          <div className="susa-events-cta-inner">
            <div>
              <span>READY TO CREATE YOUR MOMENT?</span>

              <h2>
                Your occasion.
                <em>Our space.</em>
              </h2>
            </div>

            <Link
              to="/booking"
              className="susa-events-cta-button"
            >
              Book Your Event
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;