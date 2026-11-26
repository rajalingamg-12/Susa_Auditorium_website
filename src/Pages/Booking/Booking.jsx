import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FiCalendar,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import {
  getAvailability,
  submitBooking,
} from "../../utils/susaBookingApi";

import "./Booking.css";

/* =========================================================
   TODAY
========================================================= */

const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/* =========================================================
   DATE FORMAT
========================================================= */

const formatDisplayDate = (date) => {
  if (!date) {
    return "Select your event date";
  }

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

/* =========================================================
   NORMALIZE API DATE

   Supports:
   2026-11-25
   Wed Nov 25
   ========================================================= */

const normalizeApiDate = (value) => {
  if (!value) return "";

  const text = String(value).trim();

  // Already in yyyy-MM-dd format
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text;
  }

  // Convert formats such as "Wed Nov 25"
  const match = text.match(
    /^(?:[A-Za-z]{3}\s+)?([A-Za-z]{3})\s+(\d{1,2})$/
  );

  if (match) {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    const month = monthNames.indexOf(match[1]);

    if (month !== -1) {
      const currentYear = new Date().getFullYear();

      return `${currentYear}-${String(month + 1).padStart(2, "0")}-${String(
        Number(match[2])
      ).padStart(2, "0")}`;
    }
  }

  return text;
};

/* =========================================================
   GET UNAVAILABLE DATES
========================================================= */

const getUnavailableDates = (data) => {
  const pendingDates = (data.pendingDates || []).map(normalizeApiDate);
  const bookedDates = (data.bookedDates || []).map(normalizeApiDate);
  const blockedDates = (data.blockedDates || []).map(normalizeApiDate);

  return [
    ...new Set([
      ...pendingDates,
      ...bookedDates,
      ...blockedDates,
    ]),
  ];
};

/* =========================================================
   COMPONENT
========================================================= */

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const scheduleDate = searchParams.get("date");

  /* =======================================================
     FORM STATE
  ======================================================= */

  const [formData, setFormData] = useState({
    eventDate: scheduleDate || "",
    eventType: "",
    customerName: "",
    phone: "",
    email: "",
    guestCount: "",
    address: "",
    additionalDetails: "",
  });

  /* =======================================================
     STATES
  ======================================================= */

  const [dateError, setDateError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availabilityLoading, setAvailabilityLoading] = useState(true);
  const [unavailableDates, setUnavailableDates] = useState([]);

  /* =======================================================
     FETCH AVAILABILITY
  ======================================================= */

  useEffect(() => {
    let isMounted = true;

    const loadAvailability = async () => {
      try {
        setAvailabilityLoading(true);

        const data = await getAvailability();

        if (!data || data.success === false) {
          throw new Error(
            data?.message || "Unable to load availability."
          );
        }

        const dates = getUnavailableDates(data);

        if (isMounted) {
          setUnavailableDates(dates);
        }
      } catch (error) {
        console.error("Availability loading error:", error);

        if (isMounted) {
          setDateError(
            "Unable to check availability. Please refresh the page."
          );
        }
      } finally {
        if (isMounted) {
          setAvailabilityLoading(false);
        }
      }
    };

    loadAvailability();

    return () => {
      isMounted = false;
    };
  }, []);

  /* =======================================================
     UPDATE DATE FROM URL
  ======================================================= */

  useEffect(() => {
    if (!scheduleDate) return;

    setFormData((previous) => ({
      ...previous,
      eventDate: scheduleDate,
    }));
  }, [scheduleDate]);

  /* =======================================================
     DATE VALIDATION
  ======================================================= */

  const validateDate = (date, unavailableList = unavailableDates) => {
    if (!date) {
      setDateError("Please select an event date.");
      return false;
    }

    if (date < getToday()) {
      setDateError(
        "Past dates cannot be selected. Please choose a future date."
      );
      return false;
    }

    if (unavailableList.includes(date)) {
      setDateError(
        "This date is unavailable or awaiting confirmation. Please select another date."
      );
      return false;
    }

    setDateError("");
    return true;
  };

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "eventDate") {
      setFormData((previous) => ({
        ...previous,
        eventDate: value,
      }));

      validateDate(value);
      return;
    }

    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        phone: phoneValue,
      }));

      return;
    }

    if (name === "guestCount") {
      const guestValue = value.replace(/\D/g, "");

      setFormData((previous) => ({
        ...previous,
        guestCount: guestValue,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (availabilityLoading) {
      alert("Please wait while we check date availability.");
      return;
    }

    if (!validateDate(formData.eventDate)) {
      return;
    }

    if (
      !formData.eventType ||
      !formData.customerName.trim() ||
      !formData.phone
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (
      formData.guestCount &&
      (
        !Number.isInteger(Number(formData.guestCount)) ||
        Number(formData.guestCount) < 1 ||
        Number(formData.guestCount) > 10000
      )
    ) {
      alert("Please enter a valid guest count.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Recheck availability before submission
      const latestAvailability = await getAvailability();

      if (!latestAvailability || latestAvailability.success === false) {
        throw new Error("Unable to verify date availability.");
      }

      const latestUnavailableDates =
        getUnavailableDates(latestAvailability);

      setUnavailableDates(latestUnavailableDates);

      if (!validateDate(formData.eventDate, latestUnavailableDates)) {
        alert(
          "This event date is no longer available. Please select another date."
        );
        return;
      }

      // Prepare booking data
      const bookingData = {
        eventDate: formData.eventDate,
        customerName: formData.customerName.trim(),
        phone: formData.phone,
        email: formData.email.trim(),
        eventType: formData.eventType,
        guestCount: formData.guestCount || "1",

        requirements: [
          formData.address.trim()
            ? `Address: ${formData.address.trim()}`
            : "",

          formData.additionalDetails.trim()
            ? `Additional Requirements: ${formData.additionalDetails.trim()}`
            : "",
        ]
          .filter(Boolean)
          .join("\n"),
      };

      // Submit to Google Sheets
      const response = await submitBooking(bookingData);

      if (!response || !response.success) {
        throw new Error(
          response?.message || "Booking submission failed."
        );
      }

      // Navigate only after successful submission
      navigate("/payment", {
        state: {
          booking: {
            ...formData,
            customerName: formData.customerName.trim(),
            bookingId: response.bookingId || "",
            bookingStatus: "Pending",
            paymentStatus: "Unpaid",
          },
        },
      });

    } catch (error) {
      console.error("Booking submission error:", error);

      alert(
        error.message ||
        "Unable to submit your booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="susa-booking-page">

      {/* HERO */}

      <section className="susa-booking-hero">
        <div className="susa-booking-hero-content">

          <span className="susa-booking-eyebrow">
            SUSA THIRUMAL AUDITORIUM
          </span>

          <h1>
            Book Your <span>Event</span>
          </h1>

          <p>
            Choose your event date and share your
            details to begin your booking enquiry.
          </p>

        </div>
      </section>

      {/* MAIN SECTION */}

      <section className="susa-booking-section">

        <div className="susa-booking-container">

          {/* LEFT INFORMATION */}

          <div className="susa-booking-info">

            <span className="susa-booking-section-label">
              EVENT BOOKING
            </span>

            <h2>
              Reserve Your
              <br />
              <span>Special Day</span>
            </h2>

            <p>
              Fill in the details below to confirm
              your event requirements and continue
              to the payment options.
            </p>

            {/* Selected Date */}

            <div className="susa-selected-date-card">

              <div className="susa-selected-date-icon">
                <FiCalendar />
              </div>

              <div>
                <span>Selected Event Date</span>

                <strong>
                  {formatDisplayDate(formData.eventDate)}
                </strong>
              </div>

            </div>

            {/* Date Error */}

            {dateError && (
              <div className="susa-booking-date-error">
                <span>!</span>
                {dateError}
              </div>
            )}

            {/* Steps */}

            <div className="susa-booking-steps">

              <div className="susa-booking-step">
                <div className="susa-booking-step-number">
                  01
                </div>

                <div>
                  <strong>Choose Date</strong>
                  <p>Select an available event date.</p>
                </div>
              </div>

              <div className="susa-booking-step">
                <div className="susa-booking-step-number">
                  02
                </div>

                <div>
                  <strong>Enter Details</strong>
                  <p>Tell us about your event.</p>
                </div>
              </div>

              <div className="susa-booking-step">
                <div className="susa-booking-step-number">
                  03
                </div>

                <div>
                  <strong>Payment</strong>
                  <p>Pay online or choose offline payment.</p>
                </div>
              </div>

            </div>

          </div>

          {/* BOOKING FORM */}

          <div className="susa-booking-form-card">

            <div className="susa-booking-form-heading">

              <span>BOOKING DETAILS</span>

              <h3>Tell Us About Your Event</h3>

              <p>
                Fields marked with <b>*</b> are required.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              {/* EVENT DATE */}

              <div className="susa-booking-form-group">

                <label htmlFor="eventDate">
                  Event Date <b>*</b>
                </label>

                <div className="susa-booking-input-icon">

                  <FiCalendar />

                  <input
                    id="eventDate"
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    min={getToday()}
                    onChange={handleChange}
                    required
                  />

                </div>

                {scheduleDate && !dateError && (
                  <small className="susa-date-selected-note">
                    ✓ Date selected from booking schedule
                  </small>
                )}

                {availabilityLoading && (
                  <small>Checking date availability...</small>
                )}

              </div>

              {/* EVENT TYPE */}

              <div className="susa-booking-form-group">

                <label htmlFor="eventType">
                  Event Type <b>*</b>
                </label>

                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Wedding Reception">Wedding Reception</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Birthday">Birthday / Family Celebration</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Conference">Conference / Meeting</option>
                  <option value="Other">Other</option>
                </select>

              </div>

              {/* NAME */}

              <div className="susa-booking-form-group">

                <label htmlFor="customerName">
                  Full Name <b>*</b>
                </label>

                <div className="susa-booking-input-icon">

                  <FiUser />

                  <input
                    id="customerName"
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />

                </div>

              </div>

              {/* PHONE + EMAIL */}

              <div className="susa-booking-form-row">

                <div className="susa-booking-form-group">

                  <label htmlFor="phone">
                    Phone Number <b>*</b>
                  </label>

                  <div className="susa-booking-input-icon">

                    <FiPhone />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      maxLength="10"
                      inputMode="numeric"
                      autoComplete="tel"
                      required
                    />

                  </div>

                </div>

                <div className="susa-booking-form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <div className="susa-booking-input-icon">

                    <FiMail />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      autoComplete="email"
                    />

                  </div>

                </div>

              </div>

              {/* GUEST COUNT */}

              <div className="susa-booking-form-group">

                <label htmlFor="guestCount">
                  Expected Guests
                </label>

                <input
                  id="guestCount"
                  type="number"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  placeholder="Approximate number of guests"
                  min="1"
                  max="10000"
                  inputMode="numeric"
                />

              </div>

              {/* ADDRESS */}

              <div className="susa-booking-form-group">

                <label htmlFor="address">
                  Address
                </label>

                <div className="susa-booking-input-icon susa-booking-textarea-icon">

                  <FiMapPin />

                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows="3"
                    autoComplete="street-address"
                  />

                </div>

              </div>

              {/* ADDITIONAL DETAILS */}

              <div className="susa-booking-form-group">

                <label htmlFor="additionalDetails">
                  Additional Requirements
                </label>

                <textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  placeholder="Tell us anything else about your event..."
                  rows="4"
                />

              </div>

              {/* CONFIRMATION */}

              <div className="susa-booking-confirmation">

                <FiCheckCircle />

                <p>
                  Your selected date and booking details
                  will be submitted to our booking database
                  before proceeding.
                </p>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="susa-booking-submit"
                disabled={
                  Boolean(dateError) ||
                  isSubmitting ||
                  availabilityLoading
                }
              >

                <span>
                  {isSubmitting
                    ? "Submitting Booking..."
                    : "Continue to Payment"}
                </span>

                <FiArrowRight />

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Booking;
