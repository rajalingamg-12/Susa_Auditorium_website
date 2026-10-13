import React from "react";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiHeart,
  FiMapPin,
  FiStar,
  FiUsers,
  FiCoffee,
  FiCamera,
  FiCheckCircle,
  FiHome,
  FiGrid,
} from "react-icons/fi";

import "./Facilities.css";

// Existing images
import auditoriumImage from "../Facilities/assets/wedb.jpeg";
import interiorImage from "../Facilities/assets/inte.jpeg";

// New facility images
import brideRoomImage from "../Facilities/assets/bride.jpg";
import groomRoomImage from "../Facilities/assets/groom.jpg";
import diningImage from "../Facilities/assets/dining.jpg";
import stageDecorationImage from "../Facilities/assets/wed1.jpeg";
import washroomImage from "../Facilities/assets/wash.jpeg";
import waitingAreaImage from "../Facilities/assets/wait.jpeg";


const Facilities = () => {

  const facilities = [
    {
      number: "01",
      icon: <FiUsers />,
      title: "Main Auditorium",
      text:
        "A spacious and elegant setting designed for weddings, receptions, family functions and special gatherings.",
      link: "/facilities/auditorium",
    },
    {
      number: "02",
      icon: <FiMapPin />,
      title: "Parking & Accessibility",
      text:
        "Convenient access designed to make arrival easier and more comfortable for you and your guests.",
      link: "/facilities/parking",
    },
    {
      number: "03",
      icon: <FiStar />,
      title: "Amenities",
      text:
        "Useful facilities and thoughtful details that add comfort and convenience to your event.",
      link: "/facilities/amenities",
    },
    {
      number: "04",
      icon: <FiHeart />,
      title: "Guest Comfort",
      text:
        "A welcoming environment where your guests can relax and enjoy every moment of your occasion.",
      link: "/facilities/amenities",
    },
  ];


  const roomFacilities = [
    {
      number: "01",
      label: "BRIDE ROOM",
      title: "A Comfortable Space",
      highlight: "To Get Ready",
      image: brideRoomImage,
      text:
        "A dedicated private space for the bride and family members to prepare comfortably before the celebration.",
      points: [
        "Comfortable preparation space",
        "Private environment",
        "Convenient access to the venue",
        "Suitable for family members",
      ],
    },
    {
      number: "02",
      label: "GROOM ROOM",
      title: "Get Ready With",
      highlight: "Complete Comfort",
      image: groomRoomImage,
      text:
        "A convenient preparation area for the groom and family, helping the event day begin smoothly and comfortably.",
      points: [
        "Dedicated preparation space",
        "Comfortable private environment",
        "Easy venue accessibility",
        "Suitable for family members",
      ],
    },
  ];


  const additionalFacilities = [
    {
      number: "01",
      image: diningImage,
      icon: <FiCoffee />,
      title: "Dining & Catering",
      text:
        "A comfortable dining experience designed to support family functions, weddings and special celebrations.",
    },
    {
      number: "02",
      image: stageDecorationImage,
      icon: <FiCamera />,
      title: "Stage & Decoration",
      text:
        "A beautiful event setting that provides the right atmosphere for ceremonies, celebrations and memorable moments.",
    },
    {
      number: "03",
      image: washroomImage,
      icon: <FiCheckCircle />,
      title: "Clean Washrooms",
      text:
        "Clean and convenient washroom facilities planned for guests throughout the event.",
    },
    {
      number: "04",
      image: waitingAreaImage,
      icon: <FiUsers />,
      title: "Waiting Area",
      text:
        "A comfortable space where guests can relax before entering the main event area.",
    },
  ];


  return (
    <main className="susa-fac-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="susa-fac-hero"
        style={{
          backgroundImage: `url(${auditoriumImage})`,
        }}
      >
        <div className="susa-fac-hero-overlay"></div>

        <div className="susa-fac-container susa-fac-hero-container">

          <div className="susa-fac-hero-content">

            <span className="susa-fac-eyebrow">
              SUSA THIRUMAL AUDITORIUM
            </span>

            <h1>
              Facilities Designed
              <span> For Your Occasion.</span>
            </h1>

            <p>
              Thoughtfully designed spaces and comfortable facilities
              that help make every event feel special.
            </p>

            <Link
              to="/booking"
              className="susa-fac-primary-button"
            >
              Plan Your Event
              <FiArrowRight />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          FACILITIES OVERVIEW
      ===================================================== */}

      <section className="susa-fac-overview">

        <div className="susa-fac-container">

          <div className="susa-fac-overview-heading">

            <div>

              <span className="susa-fac-section-eyebrow">
                FACILITIES AT A GLANCE
              </span>

              <h2>
                Designed around your event.
                <span> Built around your experience.</span>
              </h2>

            </div>

            <p>
              Explore the key facilities available at SUSA Thirumal
              Auditorium, thoughtfully planned to make your occasion
              comfortable and memorable.
            </p>

          </div>


          <div className="susa-fac-overview-grid">

            {facilities.map((facility) => (

              <Link
                to={facility.link}
                className="susa-fac-overview-card"
                key={facility.title}
              >

                <span className="susa-fac-card-number">
                  {facility.number}
                </span>

                <div className="susa-fac-card-icon">
                  {facility.icon}
                </div>

                <h3>{facility.title}</h3>

                <p>{facility.text}</p>

                <span className="susa-fac-card-link">
                  Explore
                  <FiArrowRight />
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENT EXPERIENCE
      ===================================================== */}

      <section className="susa-fac-experience">

        <div className="susa-fac-container">

          <div className="susa-fac-experience-content">

            <span className="susa-fac-section-eyebrow">
              YOUR EVENT EXPERIENCE
            </span>

            <h2>
              Everything comes together
              <span> in one place.</span>
            </h2>

            <p>
              From the moment your guests arrive to the final moments
              of your celebration, SUSA Thirumal Auditorium provides
              a comfortable and welcoming environment for your event.
            </p>

            <div className="susa-fac-experience-points">

              <div>
                <FiUsers />
                <span>Comfortable environment</span>
              </div>

              <div>
                <FiStar />
                <span>Elegant event atmosphere</span>
              </div>

              <div>
                <FiCheckCircle />
                <span>Thoughtfully planned facilities</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OCCASIONS
      ===================================================== */}

      <section className="susa-fac-occasions">

        <div className="susa-fac-container">

          <div className="susa-fac-section-heading">

            <span className="susa-fac-section-eyebrow">
              MADE FOR EVERY OCCASION
            </span>

            <h2>
              One venue.
              <span> Many reasons to celebrate.</span>
            </h2>

          </div>


          <div className="susa-fac-occasion-grid">

            <Link
              to="/events"
              className="susa-fac-occasion-card"
            >
              <span>01</span>
              <h3>Weddings</h3>
              <FiArrowRight />
            </Link>


            <Link
              to="/events"
              className="susa-fac-occasion-card"
            >
              <span>02</span>
              <h3>Family Celebrations</h3>
              <FiArrowRight />
            </Link>


            <Link
              to="/events"
              className="susa-fac-occasion-card"
            >
              <span>03</span>
              <h3>Corporate Events</h3>
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN AUDITORIUM
      ===================================================== */}

      <section className="susa-fac-showcase">

        <div className="susa-fac-container">

          <div className="susa-fac-showcase-grid">

            <div className="susa-fac-showcase-image">

              <img
                src={auditoriumImage}
                alt="Main Auditorium"
              />

              <span className="susa-fac-showcase-number">
                01
              </span>

            </div>


            <div className="susa-fac-showcase-content">

              <span className="susa-fac-section-eyebrow">
                OUR MAIN VENUE
              </span>

              <h2>
                A beautiful setting
                <span> for beautiful moments.</span>
              </h2>

              <p>
                Our main auditorium provides a spacious and welcoming
                environment for celebrations, gatherings and memorable
                occasions.
              </p>


              <div className="susa-fac-showcase-list">

                <div>
                  <span>01</span>
                  <p>Spacious event environment</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Elegant atmosphere</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Suitable for different occasions</p>
                </div>

              </div>


              <Link
                to="/facilities/auditorium"
                className="susa-fac-text-link"
              >
                Explore Main Auditorium
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BRIDE & GROOM ROOMS
      ===================================================== */}

      <section className="susa-fac-rooms">

        <div className="susa-fac-container">

          <div className="susa-fac-section-heading">

            <span className="susa-fac-section-eyebrow">
              PRIVATE PREPARATION SPACES
            </span>

            <h2>
              Comfortable Spaces
              <span> Before The Celebration</span>
            </h2>

            <p>
              Dedicated preparation spaces designed to give the
              bride, groom and their families a comfortable place
              to get ready before the event begins.
            </p>

          </div>


          <div className="susa-fac-room-grid">

            {roomFacilities.map((room) => (

              <article
                className="susa-fac-room-card"
                key={room.label}
              >

                <div className="susa-fac-room-image">

                  <img
                    src={room.image}
                    alt={room.label}
                  />

                  <span className="susa-fac-room-number">
                    {room.number}
                  </span>

                </div>


                <div className="susa-fac-room-content">

                  <span className="susa-fac-room-label">
                    {room.label}
                  </span>

                  <h3>
                    {room.title}
                    <span> {room.highlight}</span>
                  </h3>

                  <p>
                    {room.text}
                  </p>


                  <ul>

                    {room.points.map((point) => (

                      <li key={point}>
                        {point}
                      </li>

                    ))}

                  </ul>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ADDITIONAL FACILITIES
      ===================================================== */}

      <section className="susa-fac-additional">

        <div className="susa-fac-container">

          <div className="susa-fac-section-heading">

            <span className="susa-fac-section-eyebrow">
              MORE VENUE FACILITIES
            </span>

            <h2>
              Everything you need
              <span> for a smoother event.</span>
            </h2>

            <p>
              From guest areas to event support spaces, every detail
              helps create a comfortable and memorable experience.
            </p>

          </div>


          <div className="susa-fac-additional-grid">

            {additionalFacilities.map((facility) => (

              <article
                className="susa-fac-additional-card"
                key={facility.title}
              >

                <div className="susa-fac-additional-image">

                  <img
                    src={facility.image}
                    alt={facility.title}
                  />

                  <span>
                    {facility.number}
                  </span>

                </div>


                <div className="susa-fac-additional-content">

                  <div className="susa-fac-additional-icon">
                    {facility.icon}
                  </div>

                  <h3>{facility.title}</h3>

                  <p>{facility.text}</p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED VENUE SPACES
      ===================================================== */}

      <section className="susa-fac-spaces">

        <div className="susa-fac-container">

          <div className="susa-fac-spaces-grid">

            <div className="susa-fac-spaces-content">

              <span className="susa-fac-section-eyebrow">
                VENUE EXPERIENCE
              </span>

              <h2>
                Spaces created
                <span> around your celebration.</span>
              </h2>

              <p>
                SUSA Thirumal Auditorium brings together practical
                facilities and comfortable spaces to support your
                event from preparation to celebration.
              </p>


              <div className="susa-fac-space-points">

                <div>
                  <FiHome />
                  <span>Comfortable preparation spaces</span>
                </div>

                <div>
                  <FiGrid />
                  <span>Well-planned event areas</span>
                </div>

                <div>
                  <FiUsers />
                  <span>Guest-friendly facilities</span>
                </div>

                <div>
                  <FiHeart />
                  <span>Memorable event experience</span>
                </div>

              </div>

            </div>


            <div className="susa-fac-spaces-image">

              <img
                src={interiorImage}
                alt="SUSA Auditorium Interior"
              />

              <div className="susa-fac-spaces-image-label">
                <span>06</span>
                <strong>Thoughtful Spaces</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMFORT & CONVENIENCE
      ===================================================== */}

      <section className="susa-fac-comfort">

        <div className="susa-fac-container">

          <div className="susa-fac-comfort-heading">

            <span className="susa-fac-section-eyebrow">
              COMFORT & CONVENIENCE
            </span>

            <h2>
              Thoughtful details
              <span> make a difference.</span>
            </h2>

            <p>
              Every part of the venue is planned to make your event
              experience easier, smoother and more comfortable.
            </p>

          </div>


          <div className="susa-fac-comfort-grid">

            <article>
              <span>01</span>
              <FiMapPin />
              <h3>Easy Access</h3>
              <p>
                A convenient location that makes it easier for your
                guests to reach the venue.
              </p>
            </article>


            <article>
              <span>02</span>
              <FiUsers />
              <h3>Guest Comfort</h3>
              <p>
                A welcoming environment designed with your guests'
                experience in mind.
              </p>
            </article>


            <article>
              <span>03</span>
              <FiStar />
              <h3>Elegant Atmosphere</h3>
              <p>
                A refined setting that complements your special
                occasion.
              </p>
            </article>


            <article>
              <span>04</span>
              <FiHeart />
              <h3>Memorable Experience</h3>
              <p>
                A venue where meaningful moments can be celebrated
                together.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY SUSA
      ===================================================== */}

      <section className="susa-fac-why">

        <div className="susa-fac-container">

          <div className="susa-fac-why-grid">

            <div className="susa-fac-why-heading">

              <span className="susa-fac-section-eyebrow">
                WHY SUSA
              </span>

              <h2>
                More than a venue.
                <span> A place for memories.</span>
              </h2>

            </div>


            <div className="susa-fac-why-content">

              <p>
                Choosing the right venue can make your occasion feel
                completely different. SUSA Thirumal Auditorium brings
                together space, comfort and atmosphere to create a
                welcoming experience for every gathering.
              </p>


              <div className="susa-fac-why-points">

                <div>
                  <strong>01</strong>
                  <span>
                    A welcoming environment for hosts and guests
                  </span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>
                    A versatile venue for different occasions
                  </span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>
                    Thoughtfully designed event experience
                  </span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>
                    A setting designed for memorable celebrations
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="susa-fac-cta">

        <div className="susa-fac-container">

          <div className="susa-fac-cta-inner">

            <div>

              <span>
                YOUR OCCASION DESERVES THE RIGHT PLACE
              </span>

              <h2>
                Ready to create
                <em> something memorable?</em>
              </h2>

            </div>


            <Link
              to="/booking"
              className="susa-fac-cta-button"
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


export default Facilities;