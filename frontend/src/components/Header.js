import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for blur + shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Process", id: "timeline" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-black/70 shadow-lg border-b border-blue-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => handleScrollTo("hero")}
          className="text-2xl sm:text-3xl font-extrabold cursor-pointer bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-wide"
        >
          Alex CCTV
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="text-gray-300 hover:text-blue-400 transition font-medium"
              onClick={() => handleScrollTo(link.id)}
            >
              {link.label}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollTo("contact")}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-blue-500/40 transition"
          >
            Get Quote
          </motion.button>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-blue-500/20 text-center py-6 space-y-4"
          >
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleScrollTo(link.id)}
                className="block w-full text-gray-300 text-lg font-medium hover:text-blue-400 transition"
              >
                {link.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => handleScrollTo("contact")}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-full shadow-md mt-4"
            >
              Get Quote
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
