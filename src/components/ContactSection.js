import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-[#003049] text-white py-16 px-6 sm:px-10 text-center">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
        Get in Touch
      </h2>
      <p className="text-gray-200 mb-8">
        Have questions or want to schedule an installation? Contact us today!
      </p>
      <button className="bg-white text-black font-medium px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
        Contact Us on WhatsApp
      </button>
    </section>
  );
};

export default ContactSection;
