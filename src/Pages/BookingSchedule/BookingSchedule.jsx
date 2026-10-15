import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiClock,
  FiLock,
  FiCreditCard,
  FiMapPin,
} from "react-icons/fi";

import "./BookingSchedule.css";

/* =========================================================
   SAMPLE BOOKING DATA
========================================================= */

const BOOKING_DATA = {
  "2026-10-04": {
    status: "booked",
    event: "Wedding Reception",
    time: "6:00 PM – 10:00 PM",
  },

  "2026-10-10": {
    status: "booked",
    event: "Marriage Function",
    time: "9:00 AM – 4:00 PM",
  },

  "2026-10-17": {
    status: "pending",
    event: "Booking Hold",
    time: "6:00 PM – 10:00 PM",
  },

  "2026-10-24": {
    status: "booked",
    event: "Family Celebration",
    time: "5:00 PM – 9:00 PM",
  },

  "2026-10-31": {
    status: "pending",
    event: "Booking Enquiry",
    time: "6:00 PM – 10:00 PM",
  },
};

/* =========================================================
   MONTH NAMES
========================================================= */

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* =========================================================
   DAY NAMES
========================================================= */

const DAY_NAMES = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

/* =========================================================
   HELPERS
========================================================= */

const formatDateKey = (year, month, day) => {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(
    day
  ).padStart(2, "0")}`;
};

const getTodayKey = () => {
  const today = new Date();

  return formatDateKey(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
};

const getCalendarDays = (year, month) => {
  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const previousMonthDays = new Date(
    year,
    month,
    0
  ).getDate();

  const days = [];

  /* Previous month */

  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      day: previousMonthDays - i,
      currentMonth: false,
    });
  }

  /* Current month */

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      currentMonth: true,
    });
  }

  /* Next month */

  let nextDay = 1;

  while (days.length < 42) {
    days.push({
      day: nextDay,
      currentMonth: false,
    });

    nextDay++;
  }

  return days;
};

/* =========================================================
   COMPONENT
========================================================= */

function BookingSchedule() {
  const navigate = useNavigate();

  /* =======================================================
     TODAY
  ======================================================= */

  const today = new Date();

  const todayKey = getTodayKey();

  /* =======================================================
     MONTH STATE
  ======================================================= */

  const [currentMonth, setCurrentMonth] = useState(
    today.getMonth()
  );

  const [currentYear, setCurrentYear] = useState(
    today.getFullYear()
  );

  /* =======================================================
     SELECTED DATE
  ======================================================= */

  const [selectedDate, setSelectedDate] = useState(
    todayKey
  );

  /* =======================================================
     CALENDAR DAYS
  ======================================================= */

  const calendarDays = useMemo(() => {
    return getCalendarDays(
      currentYear,
      currentMonth
    );
  }, [currentYear, currentMonth]);

  /* =======================================================
     CHECK PAST DATE
  ======================================================= */

  const isPastDate = (dateKey) => {
    if (!dateKey) return false;

    return dateKey < todayKey;
  };

  /* =======================================================
     PREVIOUS MONTH
  ======================================================= */

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((year) => year - 1);
    } else {
      setCurrentMonth((month) => month - 1);
    }

    setSelectedDate(null);
  };

  /* =======================================================
     NEXT MONTH
  ======================================================= */

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((year) => year + 1);
    } else {
      setCurrentMonth((month) => month + 1);
    }

    setSelectedDate(null);
  };

  /* =======================================================
     TODAY
  ======================================================= */

  const goToToday = () => {
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(todayKey);
  };

  /* =======================================================
     SELECT DATE
  ======================================================= */

  const handleDateClick = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return;

    const dateKey = formatDateKey(
      currentYear,
      currentMonth,
      day
    );

    /* Do not allow past dates */

    if (isPastDate(dateKey)) {
      return;
    }

    const booking = BOOKING_DATA[dateKey];

    /* Booked and pending dates can be viewed */

    if (
      booking?.status === "booked" ||
      booking?.status === "pending"
    ) {
      setSelectedDate(dateKey);
      return;
    }

    /* Available future date */

    setSelectedDate(dateKey);
  };

  /* =======================================================
     SELECTED BOOKING
  ======================================================= */

  const selectedBooking = selectedDate
    ? BOOKING_DATA[selectedDate]
    : null;

  /* =======================================================
     SELECTED DATE LABEL
  ======================================================= */

  const selectedDateLabel = selectedDate
    ? new Date(
        `${selectedDate}T00:00:00`
      ).toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Select a date";

  /* =======================================================
     DATE AVAILABILITY
  ======================================================= */

  const selectedDateIsPast =
    selectedDate && isPastDate(selectedDate);

  const isSelectedDateAvailable =
    Boolean(selectedDate) &&
    !selectedDateIsPast &&
    !selectedBooking;

  /* =======================================================
     GO TO BOOKING
  ======================================================= */

  const goToBooking = () => {
    if (!isSelectedDateAvailable) {
      return;
    }

    navigate(
      `/booking?date=${encodeURIComponent(selectedDate)}`
    );
  };

  /* =======================================================
     ONLINE PAYMENT
     -------------------------------------------------------
     Payment details are collected after booking details.
  ======================================================= */

  const goToPayment = () => {
    if (!isSelectedDateAvailable) {
      return;
    }

    navigate(
      `/booking?date=${encodeURIComponent(selectedDate)}`
    );
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="susa-schedule-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="susa-schedule-hero">

        <div className="susa-schedule-hero-content">

          <span className="susa-schedule-eyebrow">
            SUSA THIRUMAL AUDITORIUM
          </span>

          <h1>
            Booking <span>Schedule</span>
          </h1>

          <p>
            Check auditorium availability and choose
            your preferred event date.
          </p>

        </div>

      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="susa-schedule-container">

        {/* ===================================================
            HEADING
        =================================================== */}

        <div className="susa-schedule-heading">

          <div>

            <span className="susa-schedule-section-label">
              EVENT AVAILABILITY
            </span>

            <h2>
              Find Your <span>Perfect Date</span>
            </h2>

          </div>

          <Link
            to="/booking"
            className="susa-schedule-book-top"
          >
            <FiCalendar />
            Booking Enquiry
          </Link>

        </div>

        {/* ===================================================
            LEGEND
        =================================================== */}

        <div className="susa-schedule-legend">

          <div className="susa-legend-item">
            <span className="susa-legend-dot available" />
            Available
          </div>

          <div className="susa-legend-item">
            <span className="susa-legend-dot pending" />
            Pending / Hold
          </div>

          <div className="susa-legend-item">
            <span className="susa-legend-dot booked" />
            Booked
          </div>

        </div>

        {/* ===================================================
            CALENDAR + DETAILS
        =================================================== */}

        <div className="susa-schedule-layout">

          {/* =================================================
              CALENDAR
          ================================================= */}

          <div className="susa-calendar-card">

            <div className="susa-calendar-header">

              <button
                type="button"
                onClick={goToPreviousMonth}
                aria-label="Previous month"
              >
                <FiChevronLeft />
              </button>

              <div className="susa-calendar-title">

                <FiCalendar />

                <div>

                  <strong>
                    {MONTH_NAMES[currentMonth]}
                  </strong>

                  <span>
                    {currentYear}
                  </span>

                </div>

              </div>

              <button
                type="button"
                onClick={goToNextMonth}
                aria-label="Next month"
              >
                <FiChevronRight />
              </button>

            </div>

            {/* Today */}

            <button
              type="button"
              className="susa-calendar-today"
              onClick={goToToday}
            >
              Today
            </button>

            {/* Weekdays */}

            <div className="susa-calendar-weekdays">

              {DAY_NAMES.map((day) => (
                <div key={day}>
                  {day}
                </div>
              ))}

            </div>

            {/* Calendar */}

            <div className="susa-calendar-grid">

              {calendarDays.map(
                (calendarDay, index) => {

                  const dateKey =
                    calendarDay.currentMonth
                      ? formatDateKey(
                          currentYear,
                          currentMonth,
                          calendarDay.day
                        )
                      : null;

                  const booking = dateKey
                    ? BOOKING_DATA[dateKey]
                    : null;

                  const pastDate =
                    dateKey
                      ? isPastDate(dateKey)
                      : false;

                  const isSelected =
                    selectedDate === dateKey;

                  const isUnavailable =
                    booking?.status === "booked" ||
                    booking?.status === "pending";

                  const isAvailable =
                    calendarDay.currentMonth &&
                    !pastDate &&
                    !isUnavailable;

                  return (
                    <button
                      key={`${calendarDay.day}-${index}`}
                      type="button"
                      disabled={
                        !calendarDay.currentMonth ||
                        pastDate
                      }
                      onClick={() =>
                        handleDateClick(
                          calendarDay.day,
                          calendarDay.currentMonth
                        )
                      }
                      className={[
                        "susa-calendar-day",

                        !calendarDay.currentMonth
                          ? "outside-month"
                          : "",

                        pastDate
                          ? "is-past"
                          : "",

                        booking?.status === "booked"
                          ? "is-booked"
                          : "",

                        booking?.status === "pending"
                          ? "is-pending"
                          : "",

                        isSelected
                          ? "is-selected"
                          : "",

                        isAvailable
                          ? "is-available"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >

                      <span>
                        {calendarDay.day}
                      </span>

                      {booking && (
                        <small>
                          {booking.status === "booked"
                            ? "Booked"
                            : "Hold"}
                        </small>
                      )}

                    </button>
                  );
                }
              )}

            </div>

            {/* Calendar Note */}

            <div className="susa-calendar-note">

              <FiClock />

              <span>
                Past dates cannot be selected.
                Availability shown is for the
                auditorium booking schedule.
              </span>

            </div>

          </div>

          {/* =================================================
              DETAILS
          ================================================= */}

          <aside className="susa-schedule-details">

            <span className="susa-details-label">
              SELECTED DATE
            </span>

            <h3>
              {selectedDateLabel}
            </h3>

            {/* =================================================
                PAST DATE
            ================================================= */}

            {selectedDateIsPast ? (

              <div className="susa-booking-status-card">

                <div className="susa-status-icon booked">
                  <FiLock />
                </div>

                <span className="susa-status-badge booked">
                  UNAVAILABLE
                </span>

                <h4>
                  Date Has Passed
                </h4>

                <p>
                  This date is in the past.
                  Please select a future date
                  for your event.
                </p>

              </div>

            ) : selectedBooking ? (

              /* =================================================
                 BOOKED / PENDING
              ================================================= */

              <div className="susa-booking-status-card">

                <div
                  className={`susa-status-icon ${
                    selectedBooking.status
                  }`}
                >

                  {selectedBooking.status ===
                  "booked" ? (
                    <FiLock />
                  ) : (
                    <FiClock />
                  )}

                </div>

                <span
                  className={`susa-status-badge ${
                    selectedBooking.status
                  }`}
                >
                  {selectedBooking.status ===
                  "booked"
                    ? "BOOKED"
                    : "PENDING"}
                </span>

                <h4>
                  {selectedBooking.event}
                </h4>

                <div className="susa-detail-row">

                  <FiClock />

                  <span>
                    {selectedBooking.time}
                  </span>

                </div>

                {selectedBooking.status ===
                "booked" ? (

                  <p>
                    This date has already been
                    reserved for an event.
                  </p>

                ) : (

                  <p>
                    This date currently has a
                    booking hold. Please contact
                    SUSA for confirmation.
                  </p>

                )}

              </div>

            ) : (

              /* =================================================
                 AVAILABLE
              ================================================= */

              <div className="susa-available-card">

                <div className="susa-available-icon">
                  <FiCheckCircle />
                </div>

                <span>
                  AVAILABLE
                </span>

                <h4>
                  This date is available
                </h4>

                <p>
                  You can start your booking
                  enquiry for this date.
                </p>

              </div>

            )}

            {/* =================================================
                BOOKING OPTIONS
            ================================================= */}

            {isSelectedDateAvailable && (

              <div className="susa-booking-options">

                <h4>
                  Ready to book?
                </h4>

                <p>
                  Choose how you would like to
                  continue your booking.
                </p>

                {/* ONLINE */}

                <button
                  type="button"
                  onClick={goToPayment}
                  className="susa-booking-option online"
                >

                  <span className="susa-option-icon">
                    <FiCreditCard />
                  </span>

                  <span>

                    <strong>
                      Pay Advance Online
                    </strong>

                    <small>
                      Continue to booking details
                    </small>

                  </span>

                  <b>
                    →
                  </b>

                </button>

                {/* OFFLINE */}

                <button
                  type="button"
                  onClick={goToBooking}
                  className="susa-booking-option offline"
                >

                  <span className="susa-option-icon">
                    <FiMapPin />
                  </span>

                  <span>

                    <strong>
                      Visit & Pay Offline
                    </strong>

                    <small>
                      Continue to booking details
                    </small>

                  </span>

                  <b>
                    →
                  </b>

                </button>

              </div>

            )}

          </aside>

        </div>

      </section>

    </main>
  );
}

export default BookingSchedule;