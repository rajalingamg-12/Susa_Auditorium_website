import React from "react";
import { FiPhone } from "react-icons/fi";
import "./ContactButton.css";

const SUSA_PHONE_NUMBER = "8870995373";

function ContactButton() {
  const callSUSA = () => {
    window.location.href = `tel:+91${SUSA_PHONE_NUMBER}`;
  };

  return (
    <button
      type="button"
      className="susa-contact-button"
      onClick={callSUSA}
      aria-label={`Call SUSA Thirumal Auditorium at +91 ${SUSA_PHONE_NUMBER}`}
      title={`Call +91 ${SUSA_PHONE_NUMBER}`}
    >
      <span className="susa-contact-tooltip">
        +91 {SUSA_PHONE_NUMBER}
      </span>

      <FiPhone className="susa-contact-icon" />
    </button>
  );
}

export default ContactButton;