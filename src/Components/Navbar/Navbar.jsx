import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiCalendar,
} from "react-icons/fi";
import "./Navbar.css";
import auditoriumLogo from "../../assets/SUSA_logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
    setFacilitiesOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
     {/* LOGO */}
<Link to="/" className="navbar-logo" onClick={closeMenu}>
  <img
    src={auditoriumLogo}
    alt="Auditorium Logo"
    className="navbar-logo-image"
  />
</Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label={mobileMenu ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>

        {/* NAVIGATION LINKS */}
        <div className={`navbar-links ${mobileMenu ? "active" : ""}`}>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          {/* FACILITIES DROPDOWN */}
          <div
            className={`nav-dropdown ${
              facilitiesOpen ? "dropdown-open" : ""
            }`}
          >
            <button
              className="nav-link dropdown-trigger"
              onClick={() => setFacilitiesOpen(!facilitiesOpen)}
              aria-expanded={facilitiesOpen}
            >
              Facilities <FiChevronDown />
            </button>

            <div className="dropdown-menu">
              <NavLink to="/facilities" onClick={closeMenu}>
                All Facilities
              </NavLink>

              <NavLink to="/facilities/auditorium" onClick={closeMenu}>
                Main Auditorium
              </NavLink>

              <NavLink to="/facilities/parking" onClick={closeMenu}>
                Parking & Accessibility
              </NavLink>

              <NavLink to="/facilities/amenities" onClick={closeMenu}>
                Amenities
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Events
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>

          <Link to="/booking" className="navbar-book-button" onClick={closeMenu}>
            <FiCalendar />
            <span>Book Now</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;