import React from "react";
import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiArrowRight,
  FiUsers,
  FiCoffee,
  FiStar,
  FiTruck,
  FiHeart,
  FiChevronUp,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Facilities", path: "/facilities" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Book Now", path: "/booking" },
  ];

  const facilities = [
    { icon: <FiUsers />, title: "Hall Seating", detail: "900 Guests" },
    { icon: <FiCoffee />, title: "Dining Seating", detail: "350 Guests" },
    {
      icon: <FiHeart />,
      title: "Bridal & Groom Suites",
      detail: "Premium Comfort",
    },
    {
      icon: <FiTruck />,
      title: "Parking Facilities",
      detail: "Convenient Parking",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="susa-footer">

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* BRAND */}
            <div className="footer-brand-column">
              <Link to="/" className="footer-brand">
                <span className="footer-brand-mark">S</span>
                <span className="footer-brand-name">
                  <strong>SUSA</strong>
                  <small>AUDITORIUM</small>
                </span>
              </Link>

              <p className="footer-brand-description">
                A welcoming destination for weddings, family celebrations,
                and special occasions. Let us be part of the moments you
                will cherish forever.
              </p>

              <a href="tel:8870995373" className="footer-phone-card">
                <span className="footer-contact-icon">
                  <FiPhone />
                </span>
                <span>
                  <small>CALL US FOR ENQUIRIES</small>
                  <strong>88709 95373</strong>
                </span>
                <FiArrowUpRight className="footer-phone-arrow" />
              </a>
            </div>

            {/* QUICK LINKS */}
            <div className="footer-links-column">
              <h3 className="footer-column-heading">Explore</h3>
              <span className="footer-heading-line" />

              <ul className="footer-links-list">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <FiArrowRight />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FACILITIES */}
            <div className="footer-facilities-column">
              <h3 className="footer-column-heading">Our Facilities</h3>
              <span className="footer-heading-line" />

              <div className="footer-facilities-list">
                {facilities.map((facility) => (
                  <div className="footer-facility-item" key={facility.title}>
                    <span className="footer-facility-icon">
                      {facility.icon}
                    </span>
                    <span className="footer-facility-text">
                      <strong>{facility.title}</strong>
                      <small>{facility.detail}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className="footer-contact-column">
              <h3 className="footer-column-heading">Get in Touch</h3>
              <span className="footer-heading-line" />

              <div className="footer-address-card">
                <span className="footer-contact-icon">
                  <FiMapPin />
                </span>
                <div>
                  <strong>Visit Our Venue</strong>
                  <p>
                    7/187, Mondaicaud Main Road,
                    <br />
                    Mondaicaud – 629252.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7%2F187%2C%20Mondaicaud%20Main%20Road%2C%20Mondaicaud%20629252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-directions-link"
                  >
                    Get Directions <FiArrowUpRight />
                  </a>
                </div>
              </div>

              <div className="footer-opening-note">
                <span className="footer-status-dot" />
                <p>Contact us to discuss your event and booking requirements.</p>
              </div>
            </div>
          </div>

          {/* FOOTER HIGHLIGHTS */}
          <div className="footer-highlights">
            <div className="footer-highlight-item">
              <span className="footer-highlight-icon">
                <FiUsers />
              </span>
              <div>
                <strong>900</strong>
                <small>Hall Seating Capacity</small>
              </div>
            </div>

            <div className="footer-highlight-divider" />

            <div className="footer-highlight-item">
              <span className="footer-highlight-icon">
                <FiCoffee />
              </span>
              <div>
                <strong>350</strong>
                <small>Dining Seating Capacity</small>
              </div>
            </div>

            <div className="footer-highlight-divider" />

            <div className="footer-highlight-item">
              <span className="footer-highlight-icon">
                <FiStar />
              </span>
              <div>
                <strong>Premium</strong>
                <small>Bridal & Groom Suites</small>
              </div>
            </div>

            <div className="footer-highlight-divider" />

            <div className="footer-highlight-item">
              <span className="footer-highlight-icon">
                <FiTruck />
              </span>
              <div>
                <strong>Convenient</strong>
                <small>Parking Facilities</small>
              </div>
            </div>
          </div>

          {/* BOTTOM FOOTER */}
          <div className="footer-bottom">
            <p>
              © {currentYear} <strong>SUSA Auditorium</strong>. All rights
              reserved.
            </p>

            <p className="footer-bottom-message">
              Made for moments that matter <FiHeart />
            </p>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              Back to Top <FiChevronUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;