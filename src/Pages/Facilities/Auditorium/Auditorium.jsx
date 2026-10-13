import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiUsers,
  FiStar,
  FiCalendar,
  FiHeart,
  FiMapPin,
  FiClock,
  FiCamera,
} from "react-icons/fi";

import "./Auditorium.css";

import auditoriumImage from "../../Facilities/assets/susa_main.png";
import venueImage from "../../Facilities/assets/interb.jpg";

import venue from "../../Facilities/assets/mainvenue.jpeg";
import venueIm from "../../Facilities/assets/venue2.jpg";
import celebIm from "../../Facilities/assets/cele.jpeg";



import weddingImage from "../../Facilities/assets/spcl1.jpeg";
import familyImage from "../../Facilities/assets/fam1.jpeg";
import corporateImage from "../../Facilities/assets/cor1.jpeg";

const Auditorium = () => {
  const features = [
    "Spacious event area",
    "Elegant interior atmosphere",
    "Suitable for weddings and receptions",
    "Comfortable guest experience",
    "Ideal for family and special occasions",
    "Professional event setting",
  ];

  const occasions = [
    {
      number: "01",
      title: "Weddings",
      text: "Create a beautiful setting for one of life's most memorable celebrations.",
      image: weddingImage,
    },
    {
      number: "02",
      title: "Family Celebrations",
      text: "Bring family and friends together for meaningful moments and special gatherings.",
      image: familyImage,
    },
    {
      number: "03",
      title: "Corporate Events",
      text: "A professional and welcoming environment for meetings, functions and gatherings.",
      image: corporateImage,
    },
  ];

  const experiencePoints = [
    {
      icon: <FiMapPin />,
      title: "Easy to Reach",
      text: "A convenient venue designed to make arrival simple for your guests.",
    },
    {
      icon: <FiUsers />,
      title: "Guest Friendly",
      text: "A comfortable environment where everyone can enjoy the occasion.",
    },
    {
      icon: <FiStar />,
      title: "Elegant Atmosphere",
      text: "A refined setting that adds a special touch to your event.",
    },
    {
      icon: <FiHeart />,
      title: "Memorable Moments",
      text: "A place designed around celebrations, connections and memories.",
    },
  ];

  return (
    <main className="auditorium-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="auditorium-hero">

        <img
          src={auditoriumImage}
          alt="SUSA Thirumal Auditorium"
          className="auditorium-hero-image"
        />

        <div className="auditorium-hero-overlay"></div>

        <div className="auditorium-container auditorium-hero-container">
          <div className="auditorium-hero-content">

            <span className="auditorium-eyebrow">
              SUSA THIRUMAL AUDITORIUM
            </span>

            <h1>
              A Space Made
              <span>For Meaningful Moments.</span>
            </h1>

            <p>
              A spacious and elegant venue designed to bring your
              celebrations, gatherings and special occasions together.
            </p>

            <Link
              to="/booking"
              className="auditorium-primary-button"
            >
              Book Your Event
              <FiArrowRight />
            </Link>

          </div>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="auditorium-intro">

        <div className="auditorium-container">

          <div className="auditorium-intro-grid">

            <div>
              <span className="auditorium-section-eyebrow">
                MAIN AUDITORIUM
              </span>

              <h2>
                Designed for your
                <span>most important occasions.</span>
              </h2>
            </div>

            <p>
              SUSA Thirumal Auditorium offers a welcoming setting for
              weddings, receptions, family celebrations, cultural
              gatherings and other memorable occasions.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE + CONTENT
      ===================================================== */}
      <section className="auditorium-feature">

        <div className="auditorium-container">

          <div className="auditorium-feature-grid">

            <div className="auditorium-feature-image">

              <img
                src={venueImage}
                alt="Main Auditorium"
              />

              <span className="auditorium-image-label">
                SUSA
              </span>

            </div>


            <div className="auditorium-feature-content">

              <span className="auditorium-section-eyebrow">
                THE VENUE
              </span>

              <h2>
                Where every
                <span>occasion feels special.</span>
              </h2>

              <p>
                From intimate family gatherings to grand celebrations,
                the main auditorium provides a comfortable environment
                where hosts and guests can enjoy the occasion together.
              </p>

              <div className="auditorium-points">

                {features.map((feature) => (
                  <div key={feature}>
                    <FiCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VENUE HIGHLIGHTS
      ===================================================== */}
      <section className="auditorium-highlights">

        <div className="auditorium-container">

          <div className="auditorium-section-heading">

            <span className="auditorium-section-eyebrow">
              VENUE HIGHLIGHTS
            </span>

            <h2>
              Everything comes together
              <span>under one roof.</span>
            </h2>

          </div>


          <div className="auditorium-highlight-grid">

            <article>

              <div className="auditorium-highlight-icon">
                <FiUsers />
              </div>

              <h3>Welcoming Space</h3>

              <p>
                A thoughtfully arranged environment for hosts and guests
                to enjoy the occasion comfortably.
              </p>

            </article>


            <article>

              <div className="auditorium-highlight-icon">
                <FiStar />
              </div>

              <h3>Elegant Setting</h3>

              <p>
                A refined atmosphere that creates the right backdrop
                for important celebrations.
              </p>

            </article>


            <article>

              <div className="auditorium-highlight-icon">
                <FiCalendar />
              </div>

              <h3>Flexible Occasions</h3>

              <p>
                Suitable for weddings, receptions, family functions,
                gatherings and special events.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          VENUE OVERVIEW
      ===================================================== */}
      <section className="auditorium-overview">

        <div className="auditorium-container">

          <div className="auditorium-overview-grid">

            <div className="auditorium-overview-content">

              <span className="auditorium-section-eyebrow">
                THE SUSA EXPERIENCE
              </span>

              <h2>
                More than a hall.
                <span>A complete event experience.</span>
              </h2>

              <p>
                Every celebration has its own character. Our auditorium
                provides a versatile setting that can be shaped around
                different occasions, styles and guest experiences.
              </p>

              <p>
                From welcoming your guests to creating the right
                atmosphere for your celebration, every detail comes
                together to make your occasion feel special.
              </p>

              <Link
                to="/facilities"
                className="auditorium-text-link"
              >
                Explore All Facilities
                <FiArrowRight />
              </Link>

            </div>


            <div className="auditorium-overview-image">

              <img
                src={venue}
                alt="SUSA venue"
              />

              <div className="auditorium-overview-badge">
                <FiStar />
                <span>Made for moments</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PERFECT FOR EVERY OCCASION
      ===================================================== */}
      <section className="auditorium-occasions">

        <div className="auditorium-container">

          <div className="auditorium-section-heading">

            <span className="auditorium-section-eyebrow">
              PERFECT FOR EVERY OCCASION
            </span>

            <h2>
              One beautiful space.
              <span>Many reasons to celebrate.</span>
            </h2>

          </div>


          <div className="auditorium-occasion-grid">

            {occasions.map((occasion) => (
              <article
                className="auditorium-occasion-card"
                key={occasion.title}
              >

                <div className="auditorium-occasion-image">

                  <img
                    src={occasion.image}
                    alt={occasion.title}
                  />

                  <span>
                    {occasion.number}
                  </span>

                </div>

                <div className="auditorium-occasion-content">

                  <h3>{occasion.title}</h3>

                  <p>
                    {occasion.text}
                  </p>

                  <Link to="/booking">
                    Plan Your Event
                    <FiArrowRight />
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GUEST EXPERIENCE
      ===================================================== */}
      <section className="auditorium-experience">

        <div className="auditorium-container">

          <div className="auditorium-experience-heading">

            <span className="auditorium-section-eyebrow">
              GUEST EXPERIENCE
            </span>

            <h2>
              Designed around
              <span>your guests.</span>
            </h2>

            <p>
              A successful event is not only about the space.
              It is about how people feel when they are there.
            </p>

          </div>


          <div className="auditorium-experience-grid">

            {experiencePoints.map((item) => (
              <article key={item.title}>

                <div className="auditorium-experience-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENT JOURNEY
      ===================================================== */}
      <section className="auditorium-journey">

        <div className="auditorium-container">

          <div className="auditorium-journey-grid">

            <div className="auditorium-journey-heading">

              <span className="auditorium-section-eyebrow">
                YOUR EVENT JOURNEY
              </span>

              <h2>
                From arrival
                <span>to celebration.</span>
              </h2>

              <p>
                We believe the event experience begins before the
                celebration itself. The right space helps everything
                flow naturally from one moment to the next.
              </p>

            </div>


            <div className="auditorium-journey-steps">

              <div className="auditorium-journey-step">

                <span>01</span>

                <div>
                  <FiMapPin />
                  <h3>Arrive</h3>
                  <p>
                    Welcome your guests into a comfortable event environment.
                  </p>
                </div>

              </div>


              <div className="auditorium-journey-step">

                <span>02</span>

                <div>
                  <FiUsers />
                  <h3>Gather</h3>
                  <p>
                    Bring family, friends, colleagues and guests together.
                  </p>
                </div>

              </div>


              <div className="auditorium-journey-step">

                <span>03</span>

                <div>
                  <FiStar />
                  <h3>Celebrate</h3>
                  <p>
                    Enjoy your special occasion in an elegant atmosphere.
                  </p>
                </div>

              </div>


              <div className="auditorium-journey-step">

                <span>04</span>

                <div>
                  <FiHeart />
                  <h3>Remember</h3>
                  <p>
                    Create moments that stay with you long after the event.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VENUE GALLERY
      ===================================================== */}
      <section className="auditorium-gallery">

        <div className="auditorium-container">

          <div className="auditorium-section-heading">

            <span className="auditorium-section-eyebrow">
              A GLIMPSE OF SUSA
            </span>

            <h2>
              A setting worth
              <span>experiencing.</span>
            </h2>

          </div>


          <div className="auditorium-gallery-grid">

            <div className="auditorium-gallery-large">

              <img
                src={auditoriumImage}
                alt="SUSA Auditorium"
              />

              <div className="auditorium-gallery-label">
                <FiCamera />
                <span>Main Auditorium</span>
              </div>

            </div>


            <div className="auditorium-gallery-small">

              <img
                src={venueIm}
                alt="SUSA venue"
              />

              <span>Venue</span>

            </div>


            <div className="auditorium-gallery-small">

              <img
                src={celebIm}
                alt="Wedding celebration"
              />

              <span>Celebrations</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK INFO
      ===================================================== */}
      <section className="auditorium-info">

        <div className="auditorium-container">

          <div className="auditorium-info-grid">

            <div className="auditorium-info-card">

              <FiCalendar />

              <span>EVENTS</span>

              <h3>
                Weddings, functions & gatherings
              </h3>

            </div>


            <div className="auditorium-info-card">

              <FiUsers />

              <span>GUESTS</span>

              <h3>
                A comfortable environment for your guests
              </h3>

            </div>


            <div className="auditorium-info-card">

              <FiClock />

              <span>PLANNING</span>

              <h3>
                Plan your occasion with our team
              </h3>

            </div>


            <div className="auditorium-info-card">

              <FiHeart />

              <span>MEMORIES</span>

              <h3>
                A place for meaningful moments
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="auditorium-cta">

        <div className="auditorium-container">

          <div className="auditorium-cta-inner">

            <div>

              <span>
                PLAN YOUR SPECIAL OCCASION
              </span>

              <h2>
                Your event deserves
                <em>the right space.</em>
              </h2>

            </div>


            <Link
              to="/booking"
              className="auditorium-cta-button"
            >
              Check Availability
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Auditorium;