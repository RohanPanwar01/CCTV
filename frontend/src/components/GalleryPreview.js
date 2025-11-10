import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X, Camera, ShieldCheck, Video } from "lucide-react";
import S1 from "../image/s1.jpg";

const previewData = [
  { youtubeId: "6FvuYclm76w", thumbnail: S1, category: "Home" },
  { youtubeId: "xY-iIf6CIe4", thumbnail: S1, category: "Commercial" },
  { youtubeId: "3fumBcKC6RE", thumbnail: S1, category: "Industrial" },
];

const categories = ["All", "Home", "Commercial", "Industrial"];

const GalleryPreview = () => {
  const [videoId, setVideoId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? previewData
      : previewData.filter((v) => v.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-24 overflow-hidden">
      {/* Parallax Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-md"
        >
          Our Recent Projects
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto my-6 rounded-full origin-left"
        ></motion.div>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          A glimpse of our latest CCTV installations across homes, offices, and industrial setups.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-400 text-white shadow-lg"
                  : "bg-white/10 border-gray-700 text-gray-300 hover:bg-blue-500/30"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Icon Row */}
        <div className="flex justify-center gap-10 mb-10 text-blue-400">
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <Camera size={36} />
            <span className="text-sm mt-1 text-gray-300">Smart Cameras</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <ShieldCheck size={36} />
            <span className="text-sm mt-1 text-gray-300">Reliable Security</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <Video size={36} />
            <span className="text-sm mt-1 text-gray-300">HD Monitoring</span>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800/60 to-gray-900/60 shadow-xl hover:shadow-2xl hover:border-blue-500 transition-all duration-500 cursor-pointer"
              onClick={() => setVideoId(item.youtubeId)}
            >
              <img
                src={item.thumbnail}
                alt="CCTV Project"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500">
                <PlayCircle
                  size={70}
                  className="text-blue-400 drop-shadow-lg animate-pulse"
                />
                <span className="mt-2 text-gray-200 text-sm tracking-wide">
                  Watch Video
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/gallery")}
          className="mt-14 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-blue-600/50 transition font-semibold"
        >
          Explore Full Gallery →
        </motion.button>
      </div>

      {/* ==== VIDEO POPUP ==== */}
      <AnimatePresence>
        {videoId && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => setVideoId(null)}
                className="absolute top-4 right-5 text-white bg-red-500/70 hover:bg-red-600 rounded-full p-2"
              >
                <X size={22} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
