import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./pages/Services";
import Contact from "./Pages/Contact";
import PropertyDetails from "./Pages/PropertyDetails";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0a2640]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<PropertyDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
