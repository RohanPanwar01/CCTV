import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1581092334441-1a1eefd4d305?auto=format&fit=crop&w=1600&q=80",
  "https://via.placeholder.com/1600x900?text=Night+Surveillance",
  "https://via.placeholder.com/1600x900?text=Installation+Team",
];

const AutoScrollSection = () => {
  const [index, setIndex] = useState(0);

  // Auto change image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt="CCTV"
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Advanced Surveillance Technology
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl">
          Secure your property 24/7 with our high-definition CCTV and monitoring
          solutions.
        </p>
      </div>
    </section>
  );
};

export default AutoScrollSection;
