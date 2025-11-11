import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo1 from "../image/Logo1.jpg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section smoothly
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

    // Home button handling
    if (link.label === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 400);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Scroll type (for same-page sections)
    if (link.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => handleScrollTo(link.id), 400);
      } else {
        handleScrollTo(link.id);
      }
    }

    // Route type (different pages)
    else if (link.type === "route") {
      navigate(link.path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
    }
  };

  const navLinks = [
    { label: "Home", id: "/", type: "scroll" },
    { label: "Product", id: "product", type: "scroll" },
    { label: "Services", id: "services", type: "scroll" },
     { label: "Gallery", id: "gallery", type: "scroll" },
    { label: "About", path: "/about", type: "route" },
    { label: "Faq", path: "/faq", type: "route" },
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

        {/* Logo + Name */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3 cursor-pointer select-none"
        >
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              src={Logo1}
              alt="Alex CCTV Solutions"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-blue-500 shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            />
           <div className="flex flex-col leading-tight">
  <span className="text-white font-bold text-lg sm:text-xl tracking-wide hover:text-blue-400 transition">
    AV_CCTV_INDORE
  </span>
  <span className="text-gray-400 text-sm sm:text-base font-medium tracking-wide">
   CCTV Installation
  </span>
</div>

          </NavLink>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              whileHover={{ scale: 1.05 }}
              className={`font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
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

        {/* Mobile Menu Toggle */}
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
            className="absolute right-4 top-16 bg-black/80 backdrop-blur-xl border border-blue-500/30 shadow-lg rounded-2xl px-6 py-4 z-50 w-52"
          >
            <div className="flex flex-col text-right space-y-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavClick(link)}
                  className={`text-base font-medium transition ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
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
