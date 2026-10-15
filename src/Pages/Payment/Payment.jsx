import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiCreditCard,
  FiMapPin,
  FiPhone,
  FiShield,
  FiUser,
} from "react-icons/fi";

import "./Payment.css";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================================
     BOOKING DATA
  ========================================================= */

  const booking = location.state?.booking || null;

  const searchParams = new URLSearchParams(location.search);
  const urlDate = searchParams.get("date");

  const eventDate = booking?.eventDate || urlDate || "";

  /* =========================================================
     PAYMENT STATE
  ========================================================= */

  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlineMethod, setOnlineMethod] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [paymentDetails, setPaymentDetails] = useState({
    upiId: "",
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
    bank: "",
  });

  /* =========================================================
     FORMAT DATE
  ========================================================= */

  const formattedDate = useMemo(() => {
    if (!eventDate) {
      return "Date not selected";
    }

    return new Date(
      `${eventDate}T00:00:00`
    ).toLocaleDateString("en-IN", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }, [eventDate]);

  /* =========================================================
     PAYMENT DETAILS HANDLER
  ========================================================= */

  const handlePaymentDetailsChange = (event) => {
    const { name, value } = event.target;

    let updatedValue = value;

    /* CARD NUMBER */

    if (name === "cardNumber") {
      updatedValue = value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    /* EXPIRY */

    if (name === "expiry") {
      updatedValue = value
        .replace(/\D/g, "")
        .slice(0, 4);

      if (updatedValue.length >= 3) {
        updatedValue =
          `${updatedValue.slice(0, 2)}/${updatedValue.slice(2)}`;
      }
    }

    /* CVV */

    if (name === "cvv") {
      updatedValue = value
        .replace(/\D/g, "")
        .slice(0, 3);
    }

    setPaymentDetails((previous) => ({
      ...previous,
      [name]: updatedValue,
    }));
  };

  /* =========================================================
     HANDLE BACK
  ========================================================= */

  const handleBack = () => {
    if (booking) {
      navigate("/booking", {
        state: {
          booking,
        },
      });

      return;
    }

    navigate(
      eventDate
        ? `/booking?date=${encodeURIComponent(eventDate)}`
        : "/booking"
    );
  };

  /* =========================================================
     HANDLE ONLINE PAYMENT VALIDATION
  ========================================================= */

  const validateOnlinePayment = () => {
    if (!onlineMethod) {
      alert("Please select an online payment method.");
      return false;
    }

    /* UPI */

    if (onlineMethod === "upi") {
      if (!paymentDetails.upiId.trim()) {
        alert("Please enter your UPI ID.");
        return false;
      }

      if (!paymentDetails.upiId.includes("@")) {
        alert("Please enter a valid UPI ID.");
        return false;
      }
    }

    /* CREDIT / DEBIT CARD */

    if (
      onlineMethod === "credit-card" ||
      onlineMethod === "debit-card"
    ) {
      const cardNumber =
        paymentDetails.cardNumber.replace(/\s/g, "");

      if (cardNumber.length !== 16) {
        alert("Please enter a valid 16-digit card number.");
        return false;
      }

      if (!paymentDetails.cardHolder.trim()) {
        alert("Please enter the card holder name.");
        return false;
      }

      if (!/^\d{2}\/\d{2}$/.test(paymentDetails.expiry)) {
        alert("Please enter a valid expiry date.");
        return false;
      }

      if (paymentDetails.cvv.length !== 3) {
        alert("Please enter a valid 3-digit CVV.");
        return false;
      }
    }

    /* NET BANKING */

    if (onlineMethod === "net-banking") {
      if (!paymentDetails.bank) {
        alert("Please select your bank.");
        return false;
      }
    }

    return true;
  };

  /* =========================================================
     HANDLE PAYMENT
  ========================================================= */

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "online") {
      const valid = validateOnlinePayment();

      if (!valid) {
        return;
      }
    }

    /*
      FRONTEND DEMO ONLY

      Real online payment requires a secure
      payment gateway/backend.
    */

    setSubmitted(true);
  };

  /* =========================================================
     NO BOOKING DETAILS
  ========================================================= */

  if (!booking && !eventDate) {
    return (
      <main className="susa-payment-page">

        <section className="susa-payment-empty">

          <div className="susa-payment-empty-icon">
            <FiCalendar />
          </div>

          <span>
            BOOKING INFORMATION
          </span>

          <h1>
            No Booking
            <strong>Selected</strong>
          </h1>

          <p>
            Please select an available date and
            complete your booking details before
            continuing to payment.
          </p>

          <button
            type="button"
            onClick={() => navigate("/booking-schedule")}
            className="susa-payment-primary"
          >
            <span>
              Choose Booking Date
            </span>

            <FiArrowRight />
          </button>

        </section>

      </main>
    );
  }

  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */

  if (submitted) {
    return (
      <main className="susa-payment-page">

        <section className="susa-payment-success">

          <div className="susa-payment-success-icon">
            <FiCheckCircle />
          </div>

          <span className="susa-payment-success-label">
            BOOKING REQUEST RECEIVED
          </span>

          <h1>
            Thank You
            <strong>
              {booking?.customerName || "Guest"}
            </strong>
          </h1>

          <p>
            Your booking request has been recorded
            for the selected date.
          </p>

          <div className="susa-payment-success-card">

            <div>
              <FiCalendar />

              <span>
                Event Date
              </span>

              <strong>
                {formattedDate}
              </strong>
            </div>

            <div>
              <FiUser />

              <span>
                Event Type
              </span>

              <strong>
                {booking?.eventType || "Event Booking"}
              </strong>
            </div>

            <div>
              <FiCreditCard />

              <span>
                Payment Method
              </span>

              <strong>
                {paymentMethod === "online"
                  ? onlineMethod === "upi"
                    ? "UPI"
                    : onlineMethod === "credit-card"
                      ? "Credit Card"
                      : onlineMethod === "debit-card"
                        ? "Debit Card"
                        : onlineMethod === "net-banking"
                          ? "Net Banking"
                          : "Online Advance Payment"
                  : "Visit & Pay Offline"}
              </strong>
            </div>

          </div>

          <div className="susa-payment-success-actions">

            <button
              type="button"
              onClick={() => navigate("/")}
              className="susa-payment-primary"
            >
              <span>
                Back to Home
              </span>

              <FiArrowRight />
            </button>

            <button
              type="button"
              onClick={() => navigate("/booking-schedule")}
              className="susa-payment-secondary"
            >
              Book Another Date
            </button>

          </div>

        </section>

      </main>
    );
  }

  /* =========================================================
     MAIN PAYMENT PAGE
  ========================================================= */

  return (
    <main className="susa-payment-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="susa-payment-hero">

        <div className="susa-payment-hero-content">

          <span>
            SUSA THIRUMAL AUDITORIUM
          </span>

          <h1>
            Complete Your
            <strong>Booking</strong>
          </h1>

          <p>
            Review your event details and choose
            your preferred payment option.
          </p>

        </div>

      </section>

      {/* =====================================================
          MAIN SECTION
      ===================================================== */}

      <section className="susa-payment-section">

        <div className="susa-payment-container">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="susa-payment-details">

            <span className="susa-payment-label">
              BOOKING SUMMARY
            </span>

            <h2>
              Your Event
              <strong>Details</strong>
            </h2>

            <div className="susa-payment-summary">

              <div className="susa-summary-item">

                <div className="susa-summary-icon">
                  <FiCalendar />
                </div>

                <div>
                  <span>
                    EVENT DATE
                  </span>

                  <strong>
                    {formattedDate}
                  </strong>
                </div>

              </div>

              <div className="susa-summary-item">

                <div className="susa-summary-icon">
                  <FiUser />
                </div>

                <div>
                  <span>
                    CUSTOMER
                  </span>

                  <strong>
                    {booking?.customerName || "Guest"}
                  </strong>
                </div>

              </div>

              <div className="susa-summary-item">

                <div className="susa-summary-icon">
                  <FiCalendar />
                </div>

                <div>
                  <span>
                    EVENT TYPE
                  </span>

                  <strong>
                    {booking?.eventType ||
                      "Event Booking"}
                  </strong>
                </div>

              </div>

              {booking?.guestCount && (
                <div className="susa-summary-item">

                  <div className="susa-summary-icon">
                    <FiUser />
                  </div>

                  <div>
                    <span>
                      EXPECTED GUESTS
                    </span>

                    <strong>
                      {booking.guestCount}
                    </strong>
                  </div>

                </div>
              )}

            </div>

            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="susa-payment-contact">

              <span>
                BOOKING CONTACT
              </span>

              <div>
                <FiPhone />

                <strong>
                  {booking?.phone ||
                    "Phone number provided"}
                </strong>
              </div>

              {booking?.email && (
                <div>
                  <FiCreditCard />

                  <strong>
                    {booking.email}
                  </strong>
                </div>
              )}

              {booking?.address && (
                <div>
                  <FiMapPin />

                  <strong>
                    {booking.address}
                  </strong>
                </div>
              )}

            </div>

            <button
              type="button"
              onClick={handleBack}
              className="susa-payment-back"
            >
              <FiArrowLeft />

              <span>
                Back to Booking Details
              </span>
            </button>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="susa-payment-card">

            <div className="susa-payment-card-heading">

              <span>
                PAYMENT OPTIONS
              </span>

              <h3>
                Choose How to Pay
              </h3>

              <p>
                Select your preferred payment method
                to continue.
              </p>

            </div>

            {/* =================================================
                ONLINE PAYMENT
            ================================================= */}

            <button
              type="button"
              className={`susa-payment-method ${
                paymentMethod === "online"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setPaymentMethod("online");
                setOnlineMethod("");
              }}
            >

              <div className="susa-payment-method-icon">
                <FiCreditCard />
              </div>

              <div className="susa-payment-method-content">

                <strong>
                  Pay Advance Online
                </strong>

                <p>
                  Make your booking advance payment
                  securely online.
                </p>

                <small>
                  Credit Card • Debit Card • UPI • Net Banking
                </small>

              </div>

              <span className="susa-payment-radio">
                {paymentMethod === "online" && (
                  <span />
                )}
              </span>

            </button>

            {/* =================================================
                ONLINE PAYMENT OPTIONS
            ================================================= */}

            {paymentMethod === "online" && (
              <div className="susa-online-payment-panel">

                <div className="susa-online-payment-title">

                  <span>
                    ONLINE PAYMENT
                  </span>

                  <strong>
                    Select Payment Type
                  </strong>

                </div>

                {/* UPI */}

                <button
                  type="button"
                  className={`susa-online-option ${
                    onlineMethod === "upi"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setOnlineMethod("upi")
                  }
                >

                  <span className="susa-online-option-radio">
                    {onlineMethod === "upi" && (
                      <span />
                    )}
                  </span>

                  <div>
                    <strong>
                      UPI
                    </strong>

                    <small>
                      Google Pay • PhonePe • Paytm • BHIM
                    </small>
                  </div>

                </button>

                {onlineMethod === "upi" && (
                  <div className="susa-payment-fields">

                    <label>
                      UPI ID

                      <input
                        type="text"
                        name="upiId"
                        value={paymentDetails.upiId}
                        onChange={handlePaymentDetailsChange}
                        placeholder="example@upi"
                        autoComplete="off"
                      />

                    </label>

                  </div>
                )}

                {/* CREDIT CARD */}

                <button
                  type="button"
                  className={`susa-online-option ${
                    onlineMethod === "credit-card"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setOnlineMethod("credit-card")
                  }
                >

                  <span className="susa-online-option-radio">
                    {onlineMethod === "credit-card" && (
                      <span />
                    )}
                  </span>

                  <div>
                    <strong>
                      Credit Card
                    </strong>

                    <small>
                      Visa • Mastercard • RuPay
                    </small>
                  </div>

                </button>

                {onlineMethod === "credit-card" && (
                  <div className="susa-payment-fields">

                    <label>
                      Card Number

                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentDetailsChange}
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric"
                        autoComplete="cc-number"
                      />

                    </label>

                    <label>
                      Card Holder Name

                      <input
                        type="text"
                        name="cardHolder"
                        value={paymentDetails.cardHolder}
                        onChange={handlePaymentDetailsChange}
                        placeholder="Name on card"
                        autoComplete="cc-name"
                      />

                    </label>

                    <div className="susa-payment-field-row">

                      <label>
                        Expiry Date

                        <input
                          type="text"
                          name="expiry"
                          value={paymentDetails.expiry}
                          onChange={handlePaymentDetailsChange}
                          placeholder="MM/YY"
                          inputMode="numeric"
                          autoComplete="cc-exp"
                        />

                      </label>

                      <label>
                        CVV

                        <input
                          type="password"
                          name="cvv"
                          value={paymentDetails.cvv}
                          onChange={handlePaymentDetailsChange}
                          placeholder="•••"
                          inputMode="numeric"
                          autoComplete="cc-csc"
                        />

                      </label>

                    </div>

                  </div>
                )}

                {/* DEBIT CARD */}

                <button
                  type="button"
                  className={`susa-online-option ${
                    onlineMethod === "debit-card"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setOnlineMethod("debit-card")
                  }
                >

                  <span className="susa-online-option-radio">
                    {onlineMethod === "debit-card" && (
                      <span />
                    )}
                  </span>

                  <div>
                    <strong>
                      Debit Card
                    </strong>

                    <small>
                      Visa • Mastercard • RuPay
                    </small>
                  </div>

                </button>

                {onlineMethod === "debit-card" && (
                  <div className="susa-payment-fields">

                    <label>
                      Card Number

                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentDetailsChange}
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric"
                        autoComplete="cc-number"
                      />

                    </label>

                    <label>
                      Card Holder Name

                      <input
                        type="text"
                        name="cardHolder"
                        value={paymentDetails.cardHolder}
                        onChange={handlePaymentDetailsChange}
                        placeholder="Name on card"
                        autoComplete="cc-name"
                      />

                    </label>

                    <div className="susa-payment-field-row">

                      <label>
                        Expiry Date

                        <input
                          type="text"
                          name="expiry"
                          value={paymentDetails.expiry}
                          onChange={handlePaymentDetailsChange}
                          placeholder="MM/YY"
                          inputMode="numeric"
                          autoComplete="cc-exp"
                        />

                      </label>

                      <label>
                        CVV

                        <input
                          type="password"
                          name="cvv"
                          value={paymentDetails.cvv}
                          onChange={handlePaymentDetailsChange}
                          placeholder="•••"
                          inputMode="numeric"
                          autoComplete="cc-csc"
                        />

                      </label>

                    </div>

                  </div>
                )}

                {/* NET BANKING */}

                <button
                  type="button"
                  className={`susa-online-option ${
                    onlineMethod === "net-banking"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setOnlineMethod("net-banking")
                  }
                >

                  <span className="susa-online-option-radio">
                    {onlineMethod === "net-banking" && (
                      <span />
                    )}
                  </span>

                  <div>
                    <strong>
                      Net Banking
                    </strong>

                    <small>
                      Select your bank and continue
                    </small>
                  </div>

                </button>

                {onlineMethod === "net-banking" && (
                  <div className="susa-payment-fields">

                    <label>
                      Select Bank

                      <select
                        name="bank"
                        value={paymentDetails.bank}
                        onChange={handlePaymentDetailsChange}
                      >
                        <option value="">
                          Choose your bank
                        </option>

                        <option value="sbi">
                          State Bank of India
                        </option>

                        <option value="hdfc">
                          HDFC Bank
                        </option>

                        <option value="icici">
                          ICICI Bank
                        </option>

                        <option value="axis">
                          Axis Bank
                        </option>

                        <option value="kotak">
                          Kotak Mahindra Bank
                        </option>

                        <option value="canara">
                          Canara Bank
                        </option>

                        <option value="other">
                          Other Bank
                        </option>
                      </select>

                    </label>

                  </div>
                )}

              </div>
            )}

            {/* =================================================
                OFFLINE
            ================================================= */}

            <button
              type="button"
              className={`susa-payment-method ${
                paymentMethod === "offline"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setPaymentMethod("offline");
                setOnlineMethod("");
              }}
            >

              <div className="susa-payment-method-icon">
                <FiMapPin />
              </div>

              <div className="susa-payment-method-content">

                <strong>
                  Visit & Pay Offline
                </strong>

                <p>
                  Visit the SUSA office and complete
                  your booking payment directly.
                </p>

                <small>
                  Cash • UPI • Other Available Methods
                </small>

              </div>

              <span className="susa-payment-radio">
                {paymentMethod === "offline" && (
                  <span />
                )}
              </span>

            </button>

            {/* =================================================
                SECURITY
            ================================================= */}

            <div className="susa-payment-security">

              <FiShield />

              <div>

                <strong>
                  Secure Booking
                </strong>

                <p>
                  Your booking details are handled
                  securely.
                </p>

              </div>

            </div>

            {/* =================================================
                CONTINUE
            ================================================= */}

            <button
              type="button"
              onClick={handlePayment}
              className="susa-payment-continue"
            >

              <span>
                {paymentMethod === "online"
                  ? "Continue to Online Payment"
                  : paymentMethod === "offline"
                    ? "Confirm Offline Booking"
                    : "Select Payment Method"}
              </span>

              <FiArrowRight />

            </button>

            <p className="susa-payment-note">
              Payment processing is currently
              frontend-only. Connect your payment
              gateway/backend before accepting real
              payments.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Payment;