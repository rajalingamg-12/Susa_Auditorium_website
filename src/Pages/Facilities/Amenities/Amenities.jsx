import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiUsers,
  FiHeart,
  FiStar,
  FiCoffee,
  FiMapPin,
  FiShield,
  FiCamera,
  FiClock,
} from "react-icons/fi";

import "./Amenities.css";

import amenitiesImage from "../../Facilities/assets/venue2.jpg";
import venueIma from "../../Facilities/assets/wed1.jpeg";
import venueImage from "../../Facilities/assets/wed2.jpeg";


const Amenities = () => {
  const amenities = [
    {
      icon: <FiUsers />,
      title: "Guest Comfort",
      text: "A welcoming environment designed to keep your guests comfortable throughout the occasion.",
    },
    {
      icon: <FiCoffee />,
      title: "Convenient Facilities",
      text: "Thoughtful venue facilities that support a smooth and enjoyable event experience.",
    },
    {
      icon: <FiMapPin />,
      title: "Easy Access",
      text: "Convenient access helps guests reach and move around the venue with ease.",
    },
    {
      icon: <FiShield />,
      title: "Peace of Mind",
      text: "A well-organized environment helps you focus on your celebration.",
    },
  ];

  const highlights = [
    "Comfortable guest environment",
    "Convenient venue facilities",
    "Suitable for family occasions",
    "Welcoming atmosphere",
    "Easy movement around the venue",
    "Designed for memorable events",
  ];

  const experiences = [
    {
      icon: <FiHeart />,
      title: "Celebrate",
      text: "Create meaningful moments with the people who matter most.",
    },
    {
      icon: <FiUsers />,
      title: "Connect",
      text: "Bring family, friends and guests together in one welcoming space.",
    },
    {
      icon: <FiStar />,
      title: "Enjoy",
      text: "Experience an elegant and comfortable setting for your occasion.",
    },
  ];

  return (
    <main className="susa-amen-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="susa-amen-hero">
        <img
          src={amenitiesImage}
          alt="SUSA Thirumal Auditorium amenities"
          className="susa-amen-hero-image"
        />

        <div className="susa-amen-hero-overlay"></div>

        <div className="susa-amen-container susa-amen-hero-container">
          <div className="susa-amen-hero-content">
            <span className="susa-amen-eyebrow">
              AMENITIES & COMFORT
            </span>

            <h1>
              Comfort
              <span>for Every Occasion.</span>
            </h1>

            <p>
              Thoughtful facilities and a welcoming environment
              designed to make every celebration more enjoyable.
            </p>

            <Link
              to="/booking"
              className="susa-amen-primary-button"
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
      <section className="susa-amen-intro">
        <div className="susa-amen-container">
          <div className="susa-amen-intro-grid">
            <div>
              <span className="susa-amen-section-eyebrow">
                MORE THAN A VENUE
              </span>

              <h2>
                Designed around
                <span>your experience.</span>
              </h2>
            </div>

            <p>
              A memorable occasion is about more than the main
              event space. SUSA Thirumal Auditorium brings together
              comfort, convenience and a welcoming atmosphere to
              help create a better experience for every guest.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE
      ===================================================== */}
      <section className="susa-amen-feature">
        <div className="susa-amen-container">
          <div className="susa-amen-feature-grid">
            <div className="susa-amen-feature-image">
              <img
                src={venueIma}
                alt="SUSA Thirumal Auditorium interior"
              />

              <span className="susa-amen-image-label">
                SUSA
              </span>
            </div>

            <div className="susa-amen-feature-content">
              <span className="susa-amen-section-eyebrow">
                COMFORT & CONVENIENCE
              </span>

              <h2>
                Every detail
                <span>adds to the occasion.</span>
              </h2>

              <p>
                From welcoming guests to enjoying the celebration,
                the venue environment is designed to support a
                comfortable and memorable experience.
              </p>

              <div className="susa-amen-points">
                {highlights.map((item) => (
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
          AMENITIES
      ===================================================== */}
      <section className="susa-amen-services">
        <div className="susa-amen-container">
          <div className="susa-amen-section-heading">
            <span className="susa-amen-section-eyebrow">
              VENUE AMENITIES
            </span>

            <h2>
              Comfort that makes
              <span>events feel effortless.</span>
            </h2>
          </div>

          <div className="susa-amen-services-grid">
            {amenities.map((item) => (
              <article key={item.title}>
                <div className="susa-amen-service-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section className="susa-amen-experience">
        <div className="susa-amen-container">
          <div className="susa-amen-experience-grid">
            <div className="susa-amen-experience-content">
              <span className="susa-amen-section-eyebrow">
                THE SUSA EXPERIENCE
              </span>

              <h2>
                Make space for
                <span>what matters.</span>
              </h2>

              <p>
                Whether it is a wedding, family gathering,
                celebration or special occasion, SUSA provides
                a comfortable setting where guests can connect,
                celebrate and create memories together.
              </p>

              <div className="susa-amen-experience-points">
                <div>
                  <FiHeart />
                  <span>Memorable celebrations</span>
                </div>

                <div>
                  <FiUsers />
                  <span>Family-friendly environment</span>
                </div>

                <div>
                  <FiStar />
                  <span>Elegant event atmosphere</span>
                </div>
              </div>
            </div>

            <div className="susa-amen-experience-image">
              <img
                src={venueImage}
                alt="SUSA Thirumal Auditorium venue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE CARDS
      ===================================================== */}
      <section className="susa-amen-moments">
        <div className="susa-amen-container">
          <div className="susa-amen-section-heading">
            <span className="susa-amen-section-eyebrow">
              CREATE MOMENTS
            </span>

            <h2>
              A venue made
              <span>for togetherness.</span>
            </h2>
          </div>

          <div className="susa-amen-moments-grid">
            {experiences.map((item, index) => (
              <article key={item.title}>
                <span className="susa-amen-moment-number">
                  0{index + 1}
                </span>

                <div className="susa-amen-moment-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFO
      ===================================================== */}
      <section className="susa-amen-info">
        <div className="susa-amen-container">
          <div className="susa-amen-info-grid">
            <div>
              <span className="susa-amen-section-eyebrow">
                EVENT READY
              </span>

              <h2>
                Everything starts
                <span>with the right space.</span>
              </h2>
            </div>

            <div className="susa-amen-info-list">
              <div>
                <FiUsers />
                <div>
                  <strong>Guest Friendly</strong>
                  <span>Designed for comfortable gatherings.</span>
                </div>
              </div>

              <div>
                <FiMapPin />
                <div>
                  <strong>Convenient Location</strong>
                  <span>Easy access for your event guests.</span>
                </div>
              </div>

              <div>
                <FiClock />
                <div>
                  <strong>Event Ready</strong>
                  <span>A setting prepared for memorable occasions.</span>
                </div>
              </div>

              <div>
                <FiCamera />
                <div>
                  <strong>Memorable Moments</strong>
                  <span>A beautiful setting for lasting memories.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="susa-amen-cta">
        <div className="susa-amen-container">
          <div className="susa-amen-cta-inner">
            <div>
              <span>READY TO PLAN YOUR OCCASION?</span>

              <h2>
                Your celebration.
                <em>Your space.</em>
              </h2>
            </div>

            <Link
              to="/booking"
              className="susa-amen-cta-button"
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

export default Amenities;