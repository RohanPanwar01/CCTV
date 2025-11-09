import React from "react";

import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import AutoScrollSection from "./AutoScrollSection";
import CctvServices from "./CctvServices";
import TimelineSection from "./TimelineSection";

const LandingPage = () => {
  return (
    <>
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 sm:px-12 py-5 z-10">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold">Alex CCTV Solutions</h1>
        <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition">
          Contact us
        </button>
      </header>

      {/* Hero Text */}
      <div className="text-center px-4 mt-16 sm:mt-0 z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold mb-4 drop-shadow-lg">
          Expert CCTV Installation Bhopal
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow">
          Enhance your security and peace of mind with professional installation by
          <span className="font-semibold text-white"> Alex CCTV Solutions</span>, the trusted experts in Bhopal’s security services.
        </p>
      </div>
    </div>
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <TimelineSection />
    <AutoScrollSection />
    <CctvServices />
    </>
  );
};

export default LandingPage;
