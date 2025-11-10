import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../image/logo.jpg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll within current page
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // Unified navigation handler
  const handleNavClick = (link) => {
    setMenuOpen(false);

    // Home handling: If on About, go to "/" then scroll
    if (link.label === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => handleScrollTo("hero"), 300);
      } else {
        handleScrollTo("hero");
      }
      return;
    }

    // Scroll type
    if (link.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => handleScrollTo(link.id), 400);
      } else {
        handleScrollTo(link.id);
      }
    }
    // Route type
    else if (link.type === "route") {
      navigate(link.path);
    }
  };

  const navLinks = [
    { label: "Home", id: "/home", type: "scroll" },
    { label: "Services", id: "services", type: "scroll" },
    { label: "About", path: "/about", type: "route" },
    { label: "Process", id: "timeline", type: "scroll" },
    { label: "Gallery", id: "gallery", type: "scroll" },
    { label: "Contact", id: "contact", type: "scroll" },
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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 cursor-pointer select-none"
        >
          <NavLink to="/">
            <img
              src={Logo}
              alt="AV CCTV Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </NavLink>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-blue-400 font-medium transition"
              onClick={() => handleNavClick(link)}
            >
              {link.label}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick({ id: "contact", type: "scroll" })}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-blue-500/40 transition"
          >
            Get Quote
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 top-16 bg-black/80 backdrop-blur-xl border border-blue-500/30 shadow-lg rounded-2xl px-6 py-4 z-50 w-48"
          >
            <div className="flex flex-col text-right space-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavClick(link)}
                  className="text-gray-200 text-base font-medium hover:text-blue-400 transition"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick({ id: "contact", type: "scroll" })}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-blue-500/40 transition mt-2"
              >
                Get Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
