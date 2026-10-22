import React from "react";
import { Link } from "react-router-dom";

import {
    FiArrowRight,
    FiAward,
    FiCheckCircle,
    FiHeart,
    FiMapPin,
    FiUsers,
    FiStar,
} from "react-icons/fi";

import "./AboutUs.css";

import aboutHero from "../AboutUs/assets/susa.jpeg";
import aboutStory from "../AboutUs/assets/susa.jpeg";
import weddingImage from "../AboutUs/assets/weda.jpeg";
import familyImage from "../AboutUs/assets/wedb.jpeg";
import corporateImage from "../AboutUs/assets/wedc.jpeg";
import interiorImage from "../AboutUs/assets/intera.jpg";


import interiorImg from "../AboutUs/assets/interb.jpg";

import auditoriumVideo from "../AboutUs/assets/About.mp4";

const About = () => {
    const highlights = [
        {
            icon: <FiAward />,
            title: "Elegant Venue",
            text: "A thoughtfully designed space for memorable occasions.",
        },
        {
            icon: <FiUsers />,
            title: "For Every Occasion",
            text: "Perfect for weddings, celebrations, corporate events and more.",
        },
        {
            icon: <FiCheckCircle />,
            title: "Comfort & Convenience",
            text: "A comfortable environment designed around your event.",
        },
        {
            icon: <FiMapPin />,
            title: "Convenient Location",
            text: "An accessible venue for you, your family and your guests.",
        },
    ];

    const occasions = [
        {
              image: weddingImage,
            number: "01",
            title: "Weddings",
            text: "Create a beautiful setting for your special day.",
        },
        {
              image: familyImage,
            number: "02",
            title: "Family Celebrations",
            text: "Bring everyone together for moments worth remembering.",
        },
        {
              image: corporateImage,
            number: "03",
            title: "Corporate Events",
            text: "A professional and welcoming space for your events.",
        },
    ];

    return (
        <main className="about-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="about-hero">

                <img
                      src={aboutHero}
                    alt="SUSA Thirumal Auditorium"
                    className="about-hero-image"
                />

                <div className="about-hero-overlay"></div>

                <div className="about-hero-pattern"></div>

                <div className="about-container about-hero-container">

                    <div className="about-hero-content">

                        <span className="about-eyebrow">
                            ABOUT SUSA THIRUMAL AUDITORIUM
                        </span>

                        <h1>
                            A Place Where
                            <span>Moments Become Memories.</span>
                        </h1>

                        <p>
                            More than a venue, SUSA Thirumal Auditorium is a
                            place where people come together, celebrations
                            begin and unforgettable memories are created.
                        </p>

                        <div className="about-hero-actions">

                            <Link
                                to="/booking-schedule"
                                className="about-primary-button"
                            >
                                Plan Your Event
                                <FiArrowRight />
                            </Link>

                            <a
                                href="#our-story"
                                className="about-secondary-button"
                            >
                                Discover Our Story
                            </a>

                        </div>

                    </div>

                    <div className="about-hero-label">
                        <span>EST.</span>
                        <strong>SUSA</strong>
                        <span>THIRUMAL AUDITORIUM</span>
                    </div>

                </div>
            </section>

            {/* =====================================================
    ABOUT THE AUDITORIUM VIDEO
===================================================== */}

            <section className="about-auditorium-video">

                <div className="about-container">

                    <div className="about-video-heading">

                        <div>
                            <span className="about-section-eyebrow">
                                ABOUT THE AUDITORIUM
                            </span>

                            <h2>
                                Step Inside
                                <span>SUSA Thirumal Auditorium.</span>
                            </h2>
                        </div>

                        <p>
                            Take a closer look at the space where celebrations,
                            gatherings and unforgettable moments come together.
                        </p>

                    </div>


                    <div className="about-video-wrapper">

                        <video
                            className="about-auditorium-video-player"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            controls
                        >
                            <source
                                  src={auditoriumVideo}
                                type="video/mp4"
                            />

                            Your browser does not support the video tag.
                        </video>

                        <div className="about-video-frame"></div>

                        <div className="about-video-label">
                            <span>EXPLORE</span>
                            <strong>OUR AUDITORIUM</strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          INTRO
      ===================================================== */}

            <section className="about-intro section-padding">

                <div className="about-container">

                    <div className="about-intro-grid">

                        <div className="about-intro-heading">

                            <span className="about-section-eyebrow">
                                WHO WE ARE
                            </span>

                            <h2>
                                Your occasion deserves
                                <em>the right place.</em>
                            </h2>

                        </div>

                        <div className="about-intro-text">

                            <p>
                                SUSA Thirumal Auditorium is created for
                                meaningful gatherings, beautiful celebrations
                                and important moments in life.
                            </p>

                            <p>
                                Whether it is a wedding, family celebration,
                                corporate gathering or special occasion, our
                                goal is to provide a welcoming environment where
                                every event feels special.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          OUR STORY
      ===================================================== */}

            <section
                className="about-story section-padding"
                id="our-story"
            >

                <div className="about-container">

                    <div className="about-story-grid">

                        <div className="about-story-image-wrap">

                            <div className="about-story-image">

                                <img
                                      src={aboutStory}
                                    alt="SUSA Thirumal Auditorium interior"
                                />

                            </div>

                            <div className="about-story-accent"></div>

                            <div className="about-story-badge">
                                <FiHeart />
                                <span>MADE FOR MEMORABLE MOMENTS</span>
                            </div>

                        </div>


                        <div className="about-story-content">

                            <span className="about-section-eyebrow">
                                OUR STORY
                            </span>

                            <h2>
                                Designed for
                                <span>togetherness.</span>
                            </h2>

                            <p>
                                Every celebration has a story. At SUSA Thirumal
                                Auditorium, we provide the setting where those
                                stories can unfold naturally.
                            </p>

                            <p>
                                From the first arrival of your guests to the
                                final moment of your celebration, our focus is
                                on creating a comfortable, elegant and memorable
                                experience.
                            </p>

                            <div className="about-story-points">

                                <div className="about-story-point">
                                    <FiCheckCircle />
                                    <span>Thoughtfully planned event space</span>
                                </div>

                                <div className="about-story-point">
                                    <FiCheckCircle />
                                    <span>Comfortable environment for guests</span>
                                </div>

                                <div className="about-story-point">
                                    <FiCheckCircle />
                                    <span>Suitable for different occasions</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

            <section className="about-highlights section-padding">

                <div className="about-container">

                    <div className="about-section-heading">

                        <span className="about-section-eyebrow">
                            WHY SUSA
                        </span>

                        <h2>
                            More than a venue.
                            <span>A complete experience.</span>
                        </h2>

                        <p>
                            Everything begins with a comfortable space,
                            thoughtful details and an atmosphere that lets
                            your occasion take centre stage.
                        </p>

                    </div>


                    <div className="about-highlights-grid">

                        {highlights.map((item, index) => (
                            <article
                                className="about-highlight-card"
                                key={item.title}
                            >

                                <div className="about-highlight-top">

                                    <div className="about-highlight-icon">
                                        {item.icon}
                                    </div>

                                    <span>
                                        0{index + 1}
                                    </span>

                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.text}</p>

                                <div className="about-highlight-line"></div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          OCCASIONS
      ===================================================== */}

            <section className="about-occasions section-padding">

                <div className="about-container">

                    <div className="about-section-heading about-occasions-heading">

                        <div>

                            <span className="about-section-eyebrow">
                                MADE FOR EVERY OCCASION
                            </span>

                            <h2>
                                One venue.
                                <span>Many reasons to celebrate.</span>
                            </h2>

                        </div>

                        <Link
                            to="/facilities"
                            className="about-text-link"
                        >
                            Explore Facilities
                            <FiArrowRight />
                        </Link>

                    </div>


                    <div className="about-occasions-grid">

                        {occasions.map((occasion) => (
                            <article
                                className="about-occasion-card"
                                key={occasion.title}
                            >

                                <div className="about-occasion-image">

                                    <img
                                        src={occasion.image}
                                        alt={occasion.title}
                                    />

                                </div>

                                <span className="about-occasion-number">
                                    {occasion.number}
                                </span>

                                <div className="about-occasion-overlay"></div>

                                <div className="about-occasion-content">

                                    <h3>{occasion.title}</h3>

                                    <p>{occasion.text}</p>

                                    <span className="about-occasion-arrow">
                                        Discover
                                        <FiArrowRight />
                                    </span>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          VALUES
      ===================================================== */}

            <section className="about-values section-padding">

                <div className="about-container">

                    <div className="about-values-grid">

                        <div className="about-values-content">

                            <span className="about-section-eyebrow">
                                OUR APPROACH
                            </span>

                            <h2>
                                We believe the
                                <span>details matter.</span>
                            </h2>

                            <p>
                                A memorable event is built from many small
                                details. From the atmosphere of the venue to
                                the comfort of your guests, every element
                                contributes to the experience.
                            </p>

                            <div className="about-values-list">

                                <div>
                                    <FiStar />
                                    <strong>Thoughtful Experience</strong>
                                    <span>
                                        A space designed around meaningful
                                        gatherings.
                                    </span>
                                </div>

                                <div>
                                    <FiUsers />
                                    <strong>People First</strong>
                                    <span>
                                        A welcoming environment for hosts and
                                        guests.
                                    </span>
                                </div>

                                <div>
                                    <FiAward />
                                    <strong>Memorable Moments</strong>
                                    <span>
                                        A setting worthy of your most important
                                        occasions.
                                    </span>
                                </div>

                            </div>

                        </div>


                        <div className="about-values-image">

                            <img
                                src={interiorImage}
                                alt="SUSA Auditorium interior"
                            />

                            <div className="about-values-caption">
                                <span>YOUR OCCASION</span>
                                <strong>OUR VENUE</strong>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FACILITIES */}
            <section className="about-facilities section-padding">
                <div className="about-container">

                    <div className="about-section-heading about-facilities-heading">
                        <div>
                            <span className="about-section-eyebrow">OUR FACILITIES</span>

                            <h2>
                                Everything you need
                                <span>for a memorable event.</span>
                            </h2>
                        </div>

                        <p>
                            Thoughtfully planned facilities designed to make your event
                            comfortable, convenient and enjoyable for everyone.
                        </p>
                    </div>

                    <div className="about-facilities-grid">

                        <article className="about-facility-card">
                            <div className="about-facility-number">01</div>

                            <div className="about-facility-icon">
                                <FiUsers />
                            </div>

                            <h3>Spacious Event Hall</h3>

                            <p>
                                A well-designed space for weddings, celebrations,
                                gatherings and special occasions.
                            </p>

                            <span className="about-facility-line"></span>
                        </article>

                        <article className="about-facility-card">
                            <div className="about-facility-number">02</div>

                            <div className="about-facility-icon">
                                <FiStar />
                            </div>

                            <h3>Elegant Ambience</h3>

                            <p>
                                A refined atmosphere that creates the right setting
                                for every important occasion.
                            </p>

                            <span className="about-facility-line"></span>
                        </article>

                        <article className="about-facility-card">
                            <div className="about-facility-number">03</div>

                            <div className="about-facility-icon">
                                <FiMapPin />
                            </div>

                            <h3>Convenient Location</h3>

                            <p>
                                An accessible location that makes it convenient for
                                you and your guests to reach the venue.
                            </p>

                            <span className="about-facility-line"></span>
                        </article>

                        <article className="about-facility-card">
                            <div className="about-facility-number">04</div>

                            <div className="about-facility-icon">
                                <FiCheckCircle />
                            </div>

                            <h3>Event Convenience</h3>

                            <p>
                                A comfortable venue designed to support a smooth
                                and enjoyable event experience.
                            </p>

                            <span className="about-facility-line"></span>
                        </article>

                    </div>

                    <div className="about-facilities-bottom">
                        <div className="about-facilities-image">
                            <img
                                  src={interiorImg}
                                alt="SUSA Thirumal Auditorium facilities"
                            />
                        </div>

                        <div className="about-facilities-content">
                            <span className="about-section-eyebrow">
                                A SPACE MADE FOR YOU
                            </span>

                            <h3>
                                Simple details.
                                <span>Beautiful experiences.</span>
                            </h3>

                            <p>
                                From the atmosphere of the venue to the comfort of your
                                guests, every part of SUSA Thirumal Auditorium is intended
                                to help your occasion feel special.
                            </p>

                            <Link
                                to="/facilities"
                                className="about-primary-button"
                            >
                                Explore All Facilities
                                <FiArrowRight />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="about-cta">

                <div className="about-cta-pattern"></div>

                <div className="about-container">

                    <div className="about-cta-content">

                        <div className="about-cta-icon">
                            <FiHeart />
                        </div>

                        <div>

                            <span>
                                LET'S CREATE SOMETHING MEMORABLE
                            </span>

                            <h2>
                                Your celebration starts here.
                            </h2>

                        </div>

                        <Link
                            to="/booking-schedule"
                            className="about-cta-button"
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

export default About;