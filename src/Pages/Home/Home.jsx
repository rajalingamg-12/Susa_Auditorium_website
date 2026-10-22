import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
    FiArrowRight,
    FiCalendar,
    FiCheckCircle,
    FiUsers,
    FiStar,
    FiMusic,
    FiCamera,
    FiCoffee,
    FiAward,
    FiMapPin,
    FiVolume2,
    FiVolumeX,
} from "react-icons/fi";

// =========================================================
// IMAGES
// =========================================================

import auditoriumWelcome from "./assets/audit1.jpg";

import weddingImage from "./assets/wed1.jpeg";
import familyCelebration from "./assets/fam1.jpeg";
import corporateEvent from "./assets/cor1.webp";

import weddingImg from "./assets/wed4.jpeg";
import weddingReceptionImage from "./assets/wed2.jpeg";
import familyCel from "./assets/fam2.jpeg";

import auditoriumInterior from "./assets/inter1.jpg";
import venueInteriorImage from "./assets/venue1.jpeg";

import weddingCelebrationImage from "../Home/assets/wed3.jpeg";
import familyMomentsImage from "./assets/spcl1.jpeg";

// =========================================================
// HERO VIDEO
// =========================================================

import susaHeroVideo from "./assets/susa_Video.MP4";

import "./Home.css";

// =========================================================
// FACILITIES
// =========================================================

const facilities = [
    {
        icon: <FiUsers />,
        title: "Spacious Auditorium",
        description:
            "A welcoming venue for memorable gatherings and special occasions.",
    },
    {
        icon: <FiMusic />,
        title: "Stage & Sound",
        description:
            "A dedicated stage setting for ceremonies, performances and celebrations.",
    },
    {
        icon: <FiCamera />,
        title: "Memorable Moments",
        description:
            "A beautiful setting for capturing your most important occasions.",
    },
    {
        icon: <FiCoffee />,
        title: "Guest Comfort",
        description:
            "Thoughtfully planned facilities to make your guests feel welcome.",
    },
];

// =========================================================
// OCCASIONS
// =========================================================

const occasions = [
    {
        number: "01",
        title: "Weddings",
        description:
            "Celebrate your special day in a beautiful and welcoming setting.",
        image: weddingImage,
    },
    {
        number: "02",
        title: "Family Celebrations",
        description:
            "Bring everyone together for birthdays, anniversaries and milestones.",
        image: familyCelebration,
    },
    {
        number: "03",
        title: "Corporate Events",
        description:
            "Host meetings, professional gatherings and business functions.",
        image: corporateEvent,
    },
];

// =========================================================
// HOME
// =========================================================

const Home = () => {
    // =====================================================
    // HERO VIDEO AUDIO
    // =====================================================

    const videoRef = useRef(null);

    const [isMuted, setIsMuted] = useState(true);

    const toggleSound = async () => {
        const video = videoRef.current;

        if (!video) return;

        try {
            if (video.muted) {
                // Turn sound ON
                video.muted = false;
                setIsMuted(false);

                // Continue playing after unmuting
                if (video.paused) {
                    await video.play();
                }
            } else {
                // Turn sound OFF
                video.muted = true;
                setIsMuted(true);
            }
        } catch (error) {
            console.error("Unable to change video sound:", error);

            // Keep UI in sync if browser blocks the change
            video.muted = true;
            setIsMuted(true);
        }
    };

    return (
        <main className="home-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="home-hero">

                {/* HERO VIDEO */}

                <video
                    ref={videoRef}
                    className="hero-background"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    aria-hidden="true"
                >
                    <source
                        src={susaHeroVideo}
                        type="video/mp4"
                    />

                    Your browser does not support the video element.
                </video>


                {/* HERO OVERLAY */}

                <div className="hero-overlay" />


                {/* HERO DECORATIONS */}

                <div
                    className="hero-decoration hero-decoration-one"
                    aria-hidden="true"
                />

                <div
                    className="hero-decoration hero-decoration-two"
                    aria-hidden="true"
                />


                {/* =================================================
                    SOUND BUTTON
                    ================================================= */}

                <button
                    type="button"
                    className="hero-sound-button"
                    onClick={toggleSound}
                    aria-label={
                        isMuted
                            ? "Turn video sound on"
                            : "Turn video sound off"
                    }
                    title={
                        isMuted
                            ? "Turn sound on"
                            : "Turn sound off"
                    }
                >
                    {isMuted ? (
                        <FiVolumeX />
                    ) : (
                        <FiVolume2 />
                    )}

                    <span>
                        {isMuted ? "Sound Off" : "Sound On"}
                    </span>
                </button>


                {/* HERO CONTENT CONTAINER */}

                <div className="home-hero-container">

                    {/* HERO CONTENT */}

                    <div className="hero-content">

                        <div className="hero-eyebrow">

                            <span className="hero-eyebrow-line" />

                            <FiStar />

                            <span>
                                YOUR OCCASION, OUR VENUE
                            </span>

                        </div>


                        <h1>
                            Where Every
                            <br />
                            Celebration
                            <br />
                            <span>Becomes Special.</span>
                        </h1>


                        <p className="hero-description">
                            From cherished family moments to grand
                            celebrations, discover a venue designed to bring
                            people together and create memories that last a
                            lifetime.
                        </p>


                        <div className="hero-actions">

                            <Link
                                to="/booking-schedule"
                                className="hero-primary-button"
                            >
                                <FiCalendar />

                                <span>
                                    Book Your Event
                                </span>

                                <FiArrowRight />
                            </Link>


                            <Link
                                to="/facilities"
                                className="hero-secondary-button"
                            >
                                <span>
                                    Explore Our Venue
                                </span>

                                <span className="hero-play-icon">
                                    <FiArrowRight />
                                </span>
                            </Link>

                        </div>


                        <div className="hero-trust-line">

                            <span className="trust-icon">
                                <FiCheckCircle />
                            </span>

                            <span>
                                A welcoming space for your special occasions
                            </span>

                        </div>

                    </div>


                    {/* HERO SIDE NOTE */}

                    <div className="hero-side-note">

                        <span className="hero-side-line" />

                        <span>
                            MAKE IT MEMORABLE
                        </span>

                    </div>


                    {/* HERO SCROLL */}

                    <a
                        href="#welcome"
                        className="hero-scroll"
                    >
                        <span className="scroll-line" />

                        <span>
                            SCROLL TO DISCOVER
                        </span>
                    </a>

                </div>


                {/* HERO BOTTOM STRIP */}

                <div className="hero-bottom-strip">

                    <div className="hero-bottom-inner">

                        <span>
                            WEDDINGS
                        </span>

                        <span className="strip-dot" />

                        <span>
                            FAMILY CELEBRATIONS
                        </span>

                        <span className="strip-dot" />

                        <span>
                            CORPORATE EVENTS
                        </span>

                        <span className="strip-dot" />

                        <span>
                            SPECIAL OCCASIONS
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WELCOME
            ===================================================== */}

            <section
                className="home-welcome section-padding"
                id="welcome"
            >

                <div className="home-container welcome-grid">

                    <div className="welcome-image-wrap">

                        <div className="welcome-image-main">

                            <img
                                src={auditoriumWelcome}
                                alt="SUSA Auditorium arranged for a celebration"
                                loading="lazy"
                            />

                        </div>

                        <div className="welcome-image-accent" />

                        <div className="welcome-image-label">

                            <span className="welcome-label-icon">
                                <FiAward />
                            </span>

                            <div>

                                <strong>
                                    Make It Unforgettable
                                </strong>

                                <span>
                                    Your moments matter to us
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="welcome-content">

                        <div className="section-eyebrow">
                            <span />
                            WELCOME TO SUSA AUDITORIUM
                        </div>


                        <h2>
                            A Beautiful Place
                            <br />
                            for Your <span>Big Moments.</span>
                        </h2>


                        <p>
                            Every occasion deserves the right setting.
                            SUSA Auditorium offers a place to gather,
                            celebrate and share meaningful moments with
                            family, friends and colleagues.
                        </p>


                        <p>
                            Whether you are planning a wedding, a family
                            function or a professional event, let us help
                            you make it memorable.
                        </p>


                        <div className="welcome-points">

                            <div>
                                <FiCheckCircle />
                                <span>
                                    Events for Every Occasion
                                </span>
                            </div>

                            <div>
                                <FiCheckCircle />
                                <span>
                                    Comfortable Guest Environment
                                </span>
                            </div>

                            <div>
                                <FiCheckCircle />
                                <span>
                                    A Venue for Lasting Memories
                                </span>
                            </div>

                        </div>


                        <Link
                            to="/about"
                            className="text-link"
                        >
                            Discover Our Story
                            <FiArrowRight />
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FACILITIES
            ===================================================== */}

            <section className="home-facilities section-padding">

                <div className="home-container">

                    <div className="section-heading">

                        <div className="section-eyebrow">
                            <span />
                            THOUGHTFULLY PLANNED
                        </div>

                        <h2>
                            Everything for a
                            <br />
                            <span>Wonderful Occasion.</span>
                        </h2>

                        <p>
                            Explore the features that help create a
                            welcoming experience for you and your guests.
                        </p>

                    </div>


                    <div className="facilities-grid">

                        {facilities.map((facility, index) => (

                            <article
                                className="facility-card"
                                key={facility.title}
                            >

                                <div className="facility-card-top">

                                    <span className="facility-icon">
                                        {facility.icon}
                                    </span>

                                    <span className="facility-number">
                                        0{index + 1}
                                    </span>

                                </div>


                                <h3>
                                    {facility.title}
                                </h3>


                                <p>
                                    {facility.description}
                                </p>


                                <Link
                                    to="/facilities"
                                    className="facility-link"
                                >
                                    Explore Facility
                                    <FiArrowRight />
                                </Link>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                AUDITORIUM AT A GLANCE
            ===================================================== */}

            <section className="home-stats">

                <div className="home-container stats-grid">

                    <div className="stats-intro">

                        <span className="stats-eyebrow">
                            THE SUSA EXPERIENCE
                        </span>

                        <h2>
                            The Right Space.
                            <br />
                            <span>For Every Occasion.</span>
                        </h2>

                        <p>
                            A welcoming venue designed to bring people
                            together for celebrations, gatherings and
                            memorable events.
                        </p>

                    </div>


                    <div className="stat-item">

                        <div className="stat-icon">
                            <FiUsers />
                        </div>

                        <h3>
                            Guest Comfort
                        </h3>

                        <p>
                            Space planned around your guests.
                        </p>

                    </div>


                    <div className="stat-item">

                        <div className="stat-icon">
                            <FiAward />
                        </div>

                        <h3>
                            Special Moments
                        </h3>

                        <p>
                            A setting for occasions worth celebrating.
                        </p>

                    </div>


                    <div className="stat-item">

                        <div className="stat-icon">
                            <FiCalendar />
                        </div>

                        <h3>
                            Event Bookings
                        </h3>

                        <p>
                            Start planning your upcoming occasion.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OCCASIONS
            ===================================================== */}

            <section className="home-occasions section-padding">

                <div className="home-container">

                    <div className="occasions-heading">

                        <div>

                            <div className="section-eyebrow">
                                <span />
                                YOUR DAY, YOUR WAY
                            </div>

                            <h2>
                                A Venue for Every
                                <br />
                                <span>Kind of Celebration.</span>
                            </h2>

                        </div>


                        <Link
                            to="/booking"
                            className="occasions-top-link"
                        >
                            Plan Your Event
                            <FiArrowRight />
                        </Link>

                    </div>


                    <div className="occasions-grid">

                        {occasions.map((occasion) => (

                            <article
                                className="occasion-card"
                                key={occasion.number}
                            >

                                <div className="occasion-image">

                                    <img
                                        src={occasion.image}
                                        alt={occasion.title}
                                        loading="lazy"
                                    />

                                    <span className="occasion-number">
                                        {occasion.number}
                                    </span>

                                </div>


                                <div className="occasion-content">

                                    <h3>
                                        {occasion.title}
                                    </h3>

                                    <p>
                                        {occasion.description}
                                    </p>

                                    <Link
                                        to="/booking"
                                        className="occasion-link"
                                    >
                                        Enquire Now
                                        <FiArrowRight />
                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                SIGNATURE EXPERIENCES
            ===================================================== */}

            <section className="home-experiences section-padding">

                <div className="home-container">

                    <div className="section-heading">

                        <div className="section-eyebrow">
                            <span />
                            CELEBRATE WITH SUSA
                        </div>

                        <h2>
                            Every Occasion Has
                            <br />
                            <span>Its Own Story.</span>
                        </h2>

                        <p>
                            From intimate family gatherings to grand
                            celebrations, make your next event one to remember.
                        </p>

                    </div>


                    <div className="experiences-grid">

                        <article className="experience-card experience-large">

                            <img
                                src={weddingImg}
                                alt="Wedding celebration venue"
                                loading="lazy"
                            />

                            <div className="experience-overlay" />

                            <div className="experience-content">

                                <span>
                                    01 / WEDDINGS
                                </span>

                                <h3>
                                    Your Day. Your Beautiful Beginning.
                                </h3>

                                <p>
                                    Celebrate life's most meaningful milestone
                                    with the people who matter most.
                                </p>

                                <Link to="/booking">
                                    Plan Your Celebration
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </article>


                        <article className="experience-card">

                            <img
                                src={familyCel}
                                alt="Family celebration"
                                loading="lazy"
                            />

                            <div className="experience-overlay" />

                            <div className="experience-content">

                                <span>
                                    02 / FAMILY EVENTS
                                </span>

                                <h3>
                                    Moments Together
                                </h3>

                                <p>
                                    Make birthdays, anniversaries and family
                                    gatherings more memorable.
                                </p>

                                <Link to="/booking">
                                    Enquire Now
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </article>


                        <article className="experience-card">

                            <img
                                src={weddingReceptionImage}
                                alt="Wedding reception celebration at SUSA Auditorium"
                                loading="lazy"
                            />

                            <div className="experience-overlay" />

                            <div className="experience-content">

                                <span>
                                    03 / WEDDING RECEPTIONS
                                </span>

                                <h3>
                                    Celebrate Your Forever
                                </h3>

                                <p>
                                    Create unforgettable wedding memories
                                    in a beautiful setting designed for
                                    your special day.
                                </p>

                                <Link to="/booking">
                                    Plan Your Wedding
                                    <FiArrowRight />
                                </Link>

                            </div>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY CHOOSE SUSA
            ===================================================== */}

            <section className="home-why section-padding">

                <div className="home-container why-grid">

                    <div className="why-content">

                        <div className="section-eyebrow">
                            <span />
                            THE SUSA DIFFERENCE
                        </div>

                        <h2>
                            More Than a Venue.
                            <br />
                            <span>A Place to Celebrate.</span>
                        </h2>

                        <p>
                            Choosing the right venue is an important part
                            of planning a successful event. Our goal is to
                            offer a welcoming environment where every
                            gathering feels special.
                        </p>


                        <div className="why-list">

                            <div className="why-item">

                                <span className="why-check">
                                    <FiCheckCircle />
                                </span>

                                <div>

                                    <h3>
                                        A Welcoming Atmosphere
                                    </h3>

                                    <p>
                                        A comfortable setting for friends,
                                        family and guests to come together.
                                    </p>

                                </div>

                            </div>


                            <div className="why-item">

                                <span className="why-check">
                                    <FiCheckCircle />
                                </span>

                                <div>

                                    <h3>
                                        Flexible Event Possibilities
                                    </h3>

                                    <p>
                                        A venue to consider for different
                                        types of celebrations and functions.
                                    </p>

                                </div>

                            </div>


                            <div className="why-item">

                                <span className="why-check">
                                    <FiCheckCircle />
                                </span>

                                <div>

                                    <h3>
                                        Booking Support
                                    </h3>

                                    <p>
                                        Get in touch with us to discuss your
                                        event date and requirements.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <Link
                            to="/about"
                            className="text-link"
                        >
                            Learn More About Us
                            <FiArrowRight />
                        </Link>

                    </div>


                    <div className="why-image-wrap">

                        <img
                            src={auditoriumInterior}
                            alt="SUSA Auditorium interior"
                            loading="lazy"
                        />

                        <div className="why-image-caption">

                            <span>
                                YOUR OCCASION
                            </span>

                            <strong>
                                Our Space to Celebrate
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                VENUE GALLERY
            ===================================================== */}

            <section className="home-gallery section-padding">

                <div className="home-container">

                    <div className="gallery-heading">

                        <div>

                            <div className="section-eyebrow">
                                <span />
                                A GLIMPSE OF SUSA
                            </div>

                            <h2>
                                Explore Our <span>Venue.</span>
                            </h2>

                        </div>


                        <Link
                            to="/gallery"
                            className="gallery-view-link"
                        >
                            View Full Gallery
                            <FiArrowRight />
                        </Link>

                    </div>


                    <div className="gallery-grid">

                        <Link
                            to="/gallery"
                            className="gallery-tile gallery-tile-large"
                            aria-label="View auditorium interior gallery"
                        >

                            <img
                                src={venueInteriorImage}
                                alt="SUSA Auditorium interior"
                                loading="lazy"
                            />

                            <span>
                                01 / THE VENUE
                            </span>

                        </Link>


                        <Link
                            to="/gallery"
                            className="gallery-tile"
                            aria-label="View wedding celebration gallery"
                        >

                            <img
                                src={weddingCelebrationImage}
                                alt="Wedding celebration at SUSA Auditorium"
                                loading="lazy"
                            />

                            <span>
                                02 / CELEBRATIONS
                            </span>

                        </Link>


                        <Link
                            to="/gallery"
                            className="gallery-tile"
                            aria-label="View family celebration gallery"
                        >

                            <img
                                src={familyMomentsImage}
                                alt="Family celebration at SUSA Auditorium"
                                loading="lazy"
                            />

                            <span>
                                03 / SPECIAL MOMENTS
                            </span>

                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                VISIT SUSA
            ===================================================== */}

            <section className="home-visit section-padding">

                <div className="home-container visit-grid">

                    <div className="visit-content">

                        <div className="section-eyebrow">
                            <span />
                            COME VISIT US
                        </div>

                        <h2>
                            Let's Plan Your
                            <br />
                            <span>Next Occasion.</span>
                        </h2>

                        <p>
                            Have a celebration coming up? Contact our team
                            to discuss your requirements, check available
                            dates and learn more about the venue.
                        </p>


                        <div className="visit-detail">

                            <span className="visit-detail-icon">
                                <FiMapPin />
                            </span>

                            <div>

                                <strong>
                                    Our Location
                                </strong>

                                <p>
                                    Add your complete SUSA Auditorium
                                    address here.
                                </p>

                            </div>

                        </div>


                        <div className="visit-detail">

                            <span className="visit-detail-icon">
                                <FiCalendar />
                            </span>

                            <div>

                                <strong>
                                    Plan Your Visit
                                </strong>

                                <p>
                                    Contact us to discuss your event
                                    and booking date.
                                </p>

                            </div>

                        </div>


                        <div className="visit-actions">

                            <Link
                                to="/booking-schedule"
                                className="hero-primary-button"
                            >
                                Check Booking
                                <FiArrowRight />
                            </Link>


                            <a
                                href="https://maps.app.goo.gl/LJUH5bkHK1yRTKVB7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-map-button"
                            >
                                View Location on Maps
                            </a>

                        </div>

                    </div>


                    <div className="visit-map-panel">

                        <div className="visit-map-decoration">
                            <FiMapPin />
                        </div>


                        <div className="visit-map-card">

                            <span>
                                SUSA AUDITORIUM
                            </span>

                            <h3>
                                We Look Forward to Welcoming You.
                            </h3>

                            <p>
                                Find us on the map and start planning
                                your next special occasion.
                            </p>


                            <a
                                href="https://maps.app.goo.gl/LJUH5bkHK1yRTKVB7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open Google Maps
                                <FiArrowRight />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CALL TO ACTION
            ===================================================== */}

            <section className="home-cta">

                <div className="home-cta-pattern" />

                <div className="home-container home-cta-content">

                    <div className="cta-icon">
                        <FiCalendar />
                    </div>


                    <div className="cta-text">

                        <span>
                            LET'S MAKE IT SPECIAL
                        </span>

                        <h2>
                            Your Celebration
                            <br />
                            Starts <em>Here.</em>
                        </h2>

                        <p>
                            Tell us about your occasion and take the first
                            step towards planning your event.
                        </p>

                    </div>


                    <Link
                        to="/booking-schedule"
                        className="cta-book-button"
                    >
                        Book Your Event
                        <FiArrowRight />
                    </Link>

                </div>

            </section>

        </main>
    );
};

export default Home;