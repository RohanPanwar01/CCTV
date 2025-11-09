import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";

import S1 from "../image/s1.jpg";


const galleryData = {
  home: [
   {
      type: "video",
      youtubeId: "6FvuYclm76w",
      thumbnail:S1,
    },
    {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },
  ],
  commercial: [
    {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },
    {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },
  ],
  industrial: [
   {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },
     {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },

     {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },

     {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },

     {
      type: "video",
      youtubeId: "xY-iIf6CIe4",
      thumbnail:S1,
    },
  ],
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const [videoId, setVideoId] = useState(null);

  return (
    <section className="bg-white text-gray-900 py-20" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Work Gallery
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(galleryData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {galleryData[activeCategory].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() =>
                item.type === "video" ? setVideoId(item.youtubeId) : null
              }
            >
              <img
                src={item.type === "image" ? item.src : item.thumbnail}
                alt=""
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                  <PlayCircle size={60} className="text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= VIDEO POPUP ================= */}
      <AnimatePresence>
        {videoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setVideoId(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              <button
                onClick={() => setVideoId(null)}
                className="absolute top-2 right-3 text-white text-3xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
