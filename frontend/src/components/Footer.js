import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0a0f1a] to-black text-gray-300 py-16 border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* ===== Brand Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Alex CCTV
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing trusted CCTV and surveillance installation for homes, offices, and businesses across Bhopal. 
            Secure your world with advanced AI-powered monitoring.
          </p>
        </motion.div>

        {/* ===== Quick Links ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: "Home", id: "hero" },
              { label: "Services", id: "services" },
              { label: "About", id: "about" },
              { label: "Process", id: "timeline" },
              { label: "Gallery", id: "gallery" },
              { label: "Contact", id: "contact" },
            ].map((link, i) => (
              <li
                key={i}
                onClick={() => handleScrollTo(link.id)}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ===== Contact Info ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" /> alexcctvsolutions@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-blue-400 mt-1" /> 
              <span>Bhopal, Madhya Pradesh, India</span>
            </li>
          </ul>
        </motion.div>

        {/* ===== Social Media ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-5">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="p-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-full text-blue-400 transition"
            >
              <Facebook size={22} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="p-2 bg-pink-500/10 hover:bg-pink-500/20 rounded-full text-pink-400 transition"
            >
              <Instagram size={22} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full text-cyan-400 transition"
            >
              <Linkedin size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-center mt-12 border-t border-gray-800 pt-6 text-gray-500 text-sm px-6 max-w-7xl mx-auto"
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">Alex CCTV Solutions</span> — All Rights Reserved.
        </p>
        <p className="mt-2 sm:mt-0 text-gray-400 text-xs sm:text-sm">
          Developed by{" "}
          <span className="text-blue-400 font-semibold hover:underline cursor-pointer">
            Rohan Panwar
          </span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
