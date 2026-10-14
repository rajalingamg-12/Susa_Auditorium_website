import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";

import Facilities from "./Pages/Facilities/Facilities";
import Auditorium from "./Pages/Facilities/Auditorium/Auditorium";
import Parking from "./Pages/Facilities/Parking/Parking";
import Amenities from "./Pages/Facilities/Amenities/Amenities";

// These must already exist in your project
import Events from "./Pages/Events/Events";
import Gallery from "./Pages/Gallery/Gallery";
import Booking from "./Pages/Booking/Booking";

import AIChat from "./Components/AIChat/AIChat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

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

          <Route
            path="/facilities/parking"
            element={<Parking />}
          />

          <Route
            path="/facilities/amenities"
            element={<Amenities />}
          />

          {/* OTHER PAGES */}
          <Route path="/events" element={<Events />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/booking" element={<Booking />} />

        </Routes>
      </main>

      <Footer />

      <AIChat />

    </BrowserRouter>
  );
}

export default App;