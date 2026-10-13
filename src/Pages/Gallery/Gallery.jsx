import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCamera,
  FiHeart,
  FiUsers,
  FiGrid,
  FiCoffee,
} from "react-icons/fi";

import "./Gallery.css";
import auditoriumImage1 from "../Gallery/assets/events.jpeg";


// UNIQUE GALLERY IMAGES
import auditoriumImage from "../Gallery/assets/main_aud.jpeg";
import venueImage from "../Gallery/assets/audit2.jpg";
import weddingImage from "../Gallery/assets/spcl1.jpeg";
import familyImage from "../Gallery/assets/fam1.jpeg";
import receptionImage from "../Gallery/assets/wed4.jpeg";
import interiorImage from "../Gallery/assets/intera.jpg";
import weddingImage1 from "../Gallery/assets/weda.jpeg";
import familyImage1 from "../Gallery/assets/cor1.jpeg";
import venueImage1 from "../Gallery/assets/parking.jpg";
import interiorImage1 from "../Gallery/assets/groom.jpg";

import venueImage2 from "../Gallery/assets/ven.jpeg";






const galleryItems = [
  {
    id: 1,
    title: "Main Auditorium",
    category: "Venue",
    image: auditoriumImage,
    icon: FiGrid,
  },
  {
    id: 2,
    title: "Venue Experience",
    category: "Venue",
    image: venueImage,
    icon: FiCamera,
  },
  {
    id: 3,
    title: "Wedding Celebrations",
    category: "Weddings",
    image: weddingImage,
    icon: FiHeart,
  },
  {
    id: 4,
    title: "Family Celebrations",
    category: "Family",
    image: familyImage,
    icon: FiUsers,
  },
  {
    id: 5,
    title: "Reception",
    category: "Reception",
    image: receptionImage,
    icon: FiCoffee,
  },
  {
    id: 6,
    title: "Elegant Interiors",
    category: "Venue",
    image: interiorImage,
    icon: FiCamera,
  },
   {
    id: 7,
    title: "Wedding Celebrations",
    category: "Weddings",
    image: weddingImage1,
    icon: FiHeart,
  },
    {
    id: 8,
    title: "Family Celebrations",
    category: "Family",
    image: familyImage1,
    icon: FiUsers,
  },
  {
    id: 9,
    title: "Venue Parking",
    category: "Venue",
    image: venueImage1,
    icon: FiCamera,
  },
   {
    id: 10,
    title: "Elegant Couples Room Interiors",
    category: "Venue",
    image: interiorImage1,
    icon: FiCamera,
  },
];

const filters = [
  "All",
  "Weddings",
  "Family",
  "Reception",
  "Venue",
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter
        );

  return (
    <main className="susa-gallery-page">

      {/* HERO */}
      <section
        className="susa-gallery-hero"
        style={{
          backgroundImage: `url(${auditoriumImage1})`,
        }}
      >
        <div className="susa-gallery-hero-overlay" />

        <div className="susa-gallery-hero-content">
          <span className="susa-gallery-eyebrow">
            <FiCamera />
            SUSA THIRUMAL AUDITORIUM
          </span>

          <h1>
            Moments Worth
            <span> Remembering</span>
          </h1>

          <p>
            Explore the spaces, celebrations, and experiences
            that make every event at SUSA special.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="susa-gallery-intro">
        <div className="susa-gallery-container">
          <div className="susa-gallery-intro-grid">

            <div>
              <span className="susa-gallery-section-label">
                OUR GALLERY
              </span>

              <h2>
                A Place Made For
                <span> Memorable Moments</span>
              </h2>
            </div>

            <p>
              From elegant celebrations to meaningful gatherings,
              discover the atmosphere and spaces that bring events
              to life at SUSA Thirumal Auditorium.
            </p>

          </div>
        </div>
      </section>

      {/* FILTER + GALLERY */}
      <section className="susa-gallery-showcase">
        <div className="susa-gallery-container">

          <div className="susa-gallery-filter-wrap">

            <div className="susa-gallery-filter-intro">
              <span>EXPLORE</span>
              <h3>Our Event Gallery</h3>
            </div>

            <div className="susa-gallery-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    activeFilter === filter
                      ? "susa-gallery-filter active"
                      : "susa-gallery-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>

          {/* GALLERY GRID */}
          <div className="susa-gallery-grid">

            {filteredItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  className={`susa-gallery-card susa-gallery-card-${
                    index + 1
                  }`}
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="susa-gallery-card-overlay">

                    <div className="susa-gallery-card-icon">
                      <Icon />
                    </div>

                    <div>
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>

                  </div>
                </article>
              );
            })}

          </div>

        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section className="susa-gallery-feature">
        <div className="susa-gallery-container">

          <div className="susa-gallery-feature-grid">

            <div className="susa-gallery-feature-image">
              <img
                src={venueImage2}
                alt="SUSA Thirumal Auditorium"
                loading="lazy"
              />
            </div>

            <div className="susa-gallery-feature-content">

              <span className="susa-gallery-section-label">
                THE SUSA EXPERIENCE
              </span>

              <h2>
                Where Every
                <span> Celebration Feels Special</span>
              </h2>

              <p>
                A thoughtfully designed venue for weddings, family
                celebrations, receptions, and meaningful occasions.
              </p>

              <div className="susa-gallery-feature-points">

                <div>
                  <FiHeart />
                  <span>Memorable celebrations</span>
                </div>

                <div>
                  <FiUsers />
                  <span>Guest-friendly experience</span>
                </div>

                <div>
                  <FiCamera />
                  <span>Beautiful event moments</span>
                </div>

              </div>

              <Link
                to="/booking"
                className="susa-gallery-button"
              >
                Plan Your Event
                <FiArrowRight />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="susa-gallery-cta">
        <div className="susa-gallery-container">

          <div className="susa-gallery-cta-content">

            <span className="susa-gallery-section-label">
              YOUR MOMENT STARTS HERE
            </span>

            <h2>
              Create Your Own
              <span> Memorable Story</span>
            </h2>

            <p>
              Make your next celebration a moment worth remembering
              at SUSA Thirumal Auditorium.
            </p>

            <Link
              to="/booking"
              className="susa-gallery-button"
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

export default Gallery;