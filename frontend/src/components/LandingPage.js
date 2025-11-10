import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Camera, Bell, Cpu } from "lucide-react"; // ✅ security icons
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import AutoScrollSection from "./AutoScrollSection";
import CctvServices from "./CctvServices";
import TimelineSection from "./TimelineSection";
// import GallerySection from "./GallerySection";

import GalleryPreview from "./GalleryPreview";
const LandingPage = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <div id="/home"
        className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Navbar */}
        {/* <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 sm:px-12 py-4 backdrop-blur-md bg-black/30 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-serif font-bold text-white"
          >
            Alex CCTV Solutions
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Contact us
          </motion.button>
        </header> */}

        {/* Hero Content */}
        <motion.div
          className="text-center px-4 mt-24 sm:mt-0 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold mb-6 drop-shadow-lg leading-tight">
            Protect What Matters Most with{" "}
            <span className="text-blue-400">AV CCTV</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow">
            Advanced surveillance systems for homes, offices, and businesses —
            trusted installation and maintenance in Indore.
          </p>

          {/* Icons Row */}
          <div className="flex justify-center gap-8 mt-8">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center"
            >
              <Camera size={40} className="text-blue-400 mb-2" />
              <span className="text-sm text-gray-300">CCTV Cameras</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center"
            >
              <ShieldCheck size={40} className="text-green-400 mb-2" />
              <span className="text-sm text-gray-300">Smart Security</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center"
            >
              <Bell size={40} className="text-red-400 mb-2" />
              <span className="text-sm text-gray-300">Instant Alerts</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center"
            >
              <Cpu size={40} className="text-yellow-400 mb-2" />
              <span className="text-sm text-gray-300">AI Monitoring</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 text-gray-300 flex flex-col items-center z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
        </motion.div>
      </div>

      {/* ===== PAGE SECTIONS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
      <div id="services">
        <ServicesSection />
        </div>
      </motion.section>


      {/* <GallerySection /> */}
      <section id="gallery">
      <GalleryPreview />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* <AboutSection /> */}
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <TimelineSection />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.section>
    </>
  );
};

export default LandingPage;
