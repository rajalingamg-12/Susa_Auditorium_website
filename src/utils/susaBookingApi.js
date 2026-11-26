// =====================================================
// SUSA THIRUMAL AUDITORIUM
// GOOGLE SHEETS API CONNECTION
// =====================================================

// Replace this with your actual Google Apps Script URL
const SUSA_API_URL = "https://script.google.com/macros/s/AKfycbwOCD4R2DvfACI7s00A_qAAx3OeOROibddlC5selPQLrCWFj22izog8-c6oqj_CuTys/exec";

// =====================================================
// GET AVAILABILITY
// =====================================================

export const getAvailability = async () => {
  try {
    const response = await fetch(
      `${SUSA_API_URL}?action=availability`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch availability");
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error("Availability API returned an error");
    }

    return data;

  } catch (error) {
    console.error("SUSA Availability Error:", error);
    throw error;
  }
};

// =====================================================
// SUBMIT BOOKING
// =====================================================

export const submitBooking = async (bookingData) => {
  try {
    const response = await fetch(SUSA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit booking");
    }

    const data = await response.json();

    return data;

  } catch (error) {
    console.error("SUSA Booking Error:", error);
    throw error;
  }
};