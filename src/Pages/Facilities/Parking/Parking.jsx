import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiUsers,
  FiShield,
  FiNavigation,
  FiHeart,
} from "react-icons/fi";

import "./Parking.css";

import parkingImage from "../../Facilities/assets/parking.jpg";

const Parking = () => {
  const features = [
    {
      icon: <FiMapPin />,
      title: "Convenient Access",
      text: "Designed to make reaching the venue simple and comfortable for your guests.",
    },
    {
      icon: <FiUsers />,
      title: "Guest Friendly",
      text: "A welcoming arrival experience for families, friends and event guests.",
    },
    {
      icon: <FiNavigation />,
      title: "Easy Arrival",
      text: "Clear and convenient access helps guests reach the venue with ease.",
    },
    {
      icon: <FiShield />,
      title: "Peace of Mind",
      text: "Thoughtful access planning helps create a smoother event experience.",
    },
  ];

  const highlights = [
    "Convenient venue access",
    "Guest-friendly arrival experience",
    "Suitable for different types of events",
    "Designed around visitor convenience",
    "Easy movement around the venue",
    "Comfortable experience for families and guests",
  ];

  return (
    <main className="susa-park-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="susa-park-hero">

        <img
          src={parkingImage}
          alt="SUSA Thirumal Auditorium access"
          className="susa-park-hero-image"
        />

        <div className="susa-park-hero-overlay"></div>

        <div className="susa-park-container susa-park-hero-container">

          <div className="susa-park-hero-content">

            <span className="susa-park-eyebrow">
              PARKING & ACCESSIBILITY
            </span>

            <h1>
              Easy Arrival.
              <span>Comfortable Experience.</span>
            </h1>

            <p>
              Thoughtfully planned access and convenient facilities
              designed to make your guests' arrival smoother.
            </p>

            <Link
              to="/booking"
              className="susa-park-primary-button"
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
      <section className="susa-park-intro">

        <div className="susa-park-container">

          <div className="susa-park-intro-grid">

            <div>

              <span className="susa-park-section-eyebrow">
                ARRIVE WITH EASE
              </span>

              <h2>
                A smoother arrival
                <span>for every guest.</span>
              </h2>

            </div>

            <p>
              The experience of your event begins from the moment
              your guests arrive. SUSA Thirumal Auditorium focuses
              on convenient access and a welcoming environment to
              help make every arrival comfortable.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURE
      ===================================================== */}
      <section className="susa-park-feature">

        <div className="susa-park-container">

          <div className="susa-park-feature-grid">

            <div className="susa-park-feature-image">

              <img
                src={parkingImage}
                alt="SUSA venue access"
              />

              <span className="susa-park-image-label">
                SUSA
              </span>

            </div>


            <div className="susa-park-feature-content">

              <span className="susa-park-section-eyebrow">
                ACCESS & CONVENIENCE
              </span>

              <h2>
                Designed to make
                <span>arrival feel easier.</span>
              </h2>

              <p>
                Whether guests are arriving for a wedding, family
                celebration or gathering, convenient access helps
                create a relaxed beginning to the occasion.
              </p>

              <div className="susa-park-points">

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
          FEATURES
      ===================================================== */}
      <section className="susa-park-features">

        <div className="susa-park-container">

          <div className="susa-park-section-heading">

            <span className="susa-park-section-eyebrow">
              ARRIVAL EXPERIENCE
            </span>

            <h2>
              Convenience that
              <span>starts at the entrance.</span>
            </h2>

          </div>


          <div className="susa-park-feature-grid-cards">

            {features.map((feature) => (
              <article key={feature.title}>

                <div className="susa-park-feature-icon">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GUEST EXPERIENCE
      ===================================================== */}
      <section className="susa-park-experience">

        <div className="susa-park-container">

          <div className="susa-park-experience-grid">

            <div className="susa-park-experience-content">

              <span className="susa-park-section-eyebrow">
                GUEST COMFORT
              </span>

              <h2>
                Because every
                <span>guest matters.</span>
              </h2>

              <p>
                A well-planned venue experience is about more than
                the main event space. Comfortable access helps your
                guests arrive relaxed and ready to enjoy the occasion.
              </p>

              <div className="susa-park-experience-points">

                <div>
                  <FiUsers />
                  <span>Family-friendly experience</span>
                </div>

                <div>
                  <FiMapPin />
                  <span>Convenient venue access</span>
                </div>

                <div>
                  <FiHeart />
                  <span>Thoughtful guest experience</span>
                </div>

              </div>

            </div>


            <div className="susa-park-experience-card">

              <div className="susa-park-experience-number">
                01
              </div>

              <FiNavigation />

              <h3>
                Arrive comfortably.
              </h3>

              <p>
                Start your celebration with a simple,
                welcoming arrival experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENT FLOW
      ===================================================== */}
      <section className="susa-park-flow">

        <div className="susa-park-container">

          <div className="susa-park-section-heading">

            <span className="susa-park-section-eyebrow">
              SIMPLE EVENT FLOW
            </span>

            <h2>
              From arrival
              <span>to celebration.</span>
            </h2>

          </div>


          <div className="susa-park-flow-grid">

            <div>
              <span>01</span>
              <FiMapPin />
              <h3>Arrive</h3>
              <p>
                Guests reach the venue comfortably.
              </p>
            </div>

            <div>
              <span>02</span>
              <FiNavigation />
              <h3>Enter</h3>
              <p>
                Move naturally into the event environment.
              </p>
            </div>

            <div>
              <span>03</span>
              <FiUsers />
              <h3>Gather</h3>
              <p>
                Meet family, friends and fellow guests.
              </p>
            </div>

            <div>
              <span>04</span>
              <FiHeart />
              <h3>Celebrate</h3>
              <p>
                Enjoy the occasion together.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SUSA
      ===================================================== */}
      <section className="susa-park-why">

        <div className="susa-park-container">

          <div className="susa-park-why-grid">

            <div>

              <span className="susa-park-section-eyebrow">
                WHY IT MATTERS
              </span>

              <h2>
                Small details
                <span>create a better experience.</span>
              </h2>

            </div>

            <p>
              From the first arrival to the final goodbye, a
              comfortable environment helps your guests focus on
              what matters most — enjoying your special occasion.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="susa-park-cta">

        <div className="susa-park-container">

          <div className="susa-park-cta-inner">

            <div>

              <span>
                READY TO PLAN YOUR OCCASION?
              </span>

              <h2>
                Make every arrival
                <em>feel effortless.</em>
              </h2>

            </div>

            <Link
              to="/booking"
              className="susa-park-cta-button"
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

export default Parking;