// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

// import Home from "./Pages/Home/Home";
// import About from "./Pages/AboutUs/AboutUs";

// import Facilities from "./Pages/Facilities/Facilities";
// import Auditorium from "./Pages/Facilities/Auditorium/Auditorium";
// import Parking from "./Pages/Facilities/Parking/Parking";
// import Amenities from "./Pages/Facilities/Amenities/Amenities";

// import Events from "./Pages/Events/Events";
// import Gallery from "./Pages/Gallery/Gallery";
// import Booking from "./Pages/Booking/Booking";

// import BookingSchedule from "./Pages/BookingSchedule/BookingSchedule";
// import Payment from "./Pages/Payment/Payment";

// import AIChat from "./Components/AIChat/AIChat";
// import ContactButton from "./Components/ContactButton/ContactButton";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <main>
//         <Routes>

//           {/* =================================================
//               HOME
//           ================================================= */}
//           <Route
//             path="/"
//             element={<Home />}
//           />


//           {/* =================================================
//               ABOUT
//           ================================================= */}
//           <Route
//             path="/about"
//             element={<About />}
//           />


//           {/* =================================================
//               FACILITIES
//           ================================================= */}
//           <Route
//             path="/facilities"
//             element={<Facilities />}
//           />

//           <Route
//             path="/facilities/auditorium"
//             element={<Auditorium />}
//           />

//           <Route
//             path="/facilities/parking"
//             element={<Parking />}
//           />

//           <Route
//             path="/facilities/amenities"
//             element={<Amenities />}
//           />


//           {/* =================================================
//               EVENTS
//           ================================================= */}
//           <Route
//             path="/events"
//             element={<Events />}
//           />


//           {/* =================================================
//               GALLERY
//           ================================================= */}
//           <Route
//             path="/gallery"
//             element={<Gallery />}
//           />


//           {/* =================================================
//               BOOKING
//           ================================================= */}
//           <Route
//             path="/booking"
//             element={<Booking />}
//           />


//           {/* =================================================
//               BOOKING SCHEDULE / CALENDAR
//           ================================================= */}
//           <Route
//             path="/booking-schedule"
//             element={<BookingSchedule />}
//           />


//           {/* =================================================
//               PAYMENT
//           ================================================= */}
//           <Route
//             path="/payment"
//             element={<Payment />}
//           />

//         </Routes>
//       </main>

//       <Footer />

//       {/* =====================================================
//           GLOBAL AI CHAT
//       ===================================================== */}
//       <AIChat />
//       <ContactButton />

//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";

import Facilities from "./Pages/Facilities/Facilities";
import Auditorium from "./Pages/Facilities/Auditorium/Auditorium";
import Parking from "./Pages/Facilities/Parking/Parking";
import Amenities from "./Pages/Facilities/Amenities/Amenities";

import Events from "./Pages/Events/Events";
import Gallery from "./Pages/Gallery/Gallery";
import Booking from "./Pages/Booking/Booking";

import BookingSchedule from "./Pages/BookingSchedule/BookingSchedule";
import Payment from "./Pages/Payment/Payment";

import AIChat from "./Components/AIChat/AIChat";
import ContactButton from "./Components/ContactButton/ContactButton";

import AdminLogin from "./Pages/Admin/AdminLogin";
import Admin from "./Pages/Admin/Admin";

function AppLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  const [adminKey, setAdminKey] = useState("");

  const handleAdminLogin = (key) => {
    setAdminKey(key);
  };

  const handleAdminLogout = () => {
    setAdminKey("");
  };

  return (
    <>
      {!isAdminPage && <Navbar />}

      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* FACILITIES */}
          <Route path="/facilities" element={<Facilities />} />
          <Route
            path="/facilities/auditorium"
            element={<Auditorium />}
          />
          <Route path="/facilities/parking" element={<Parking />} />
          <Route
            path="/facilities/amenities"
            element={<Amenities />}
          />

          {/* EVENTS */}
          <Route path="/events" element={<Events />} />

          {/* GALLERY */}
          <Route path="/gallery" element={<Gallery />} />

          {/* BOOKING */}
          <Route path="/booking" element={<Booking />} />

          {/* BOOKING SCHEDULE */}
          <Route
            path="/booking-schedule"
            element={<BookingSchedule />}
          />

          {/* PAYMENT */}
          <Route path="/payment" element={<Payment />} />

          {/* ADMIN */}
          <Route
            path="/admin"
            element={
              adminKey ? (
                <Admin
                  adminKey={adminKey}
                  onLogout={handleAdminLogout}
                />
              ) : (
                <AdminLogin onLogin={handleAdminLogin} />
              )
            }
          />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}

      {!isAdminPage && <AIChat />}
      {!isAdminPage && <ContactButton />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
