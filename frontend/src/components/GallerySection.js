import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, ShieldCheck, Camera, Video, Image as ImageIcon } from "lucide-react";
import S1 from "../image/s1.jpg";
import { Helmet } from "react-helmet-async";
const galleryData = {
  home: [
    { type: "video", youtubeId: "6FvuYclm76w", thumbnail: S1 },
    { type: "photo", src: S1 },
    { type: "video", youtubeId: "xY-iIf6CIe4", thumbnail: S1 },
    { type: "photo", src: S1 },
  ],
  commercial: [
    { type: "photo", src: S1 },
    { type: "video", youtubeId: "xY-iIf6CIe4", thumbnail: S1 },
    { type: "photo", src: S1 },
  ],
  industrial: [
    { type: "video", youtubeId: "xY-iIf6CIe4", thumbnail: S1 },
    { type: "photo", src: S1 },
    { type: "photo", src: S1 },
    { type: "video", youtubeId: "xY-iIf6CIe4", thumbnail: S1 },
  ],
};

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("home");
  const [videoId, setVideoId] = useState(null);
  const [photoSrc, setPhotoSrc] = useState(null);

  return (
    <>
    <Helmet>
  <title>Gallery | AV CCTV Installations & Projects</title>
  <meta
    name="description"
    content="See real CCTV installation projects by AV CCTV in Indore — residential, commercial, and industrial setups with advanced camera systems."
  />
  <meta
    name="keywords"
    content="CCTV gallery Indore, AV CCTV projects, security camera installation images, CP Plus installation, Hikvision Indore work"
  />
  <meta property="og:title" content="AV CCTV Work Gallery" />
  <meta
    property="og:description"
    content="Explore AV CCTV’s real projects and installations across Indore for homes, offices, and industries."
  />
  <meta property="og:image" content="https://cctv-pgug.onrender.com/" />
  <meta property="og:url" content="https://cctv-pgug.onrender.com/" />
  <link rel="canonical" href="https://cctv-pgug.onrender.com/" />
</Helmet>


    <section className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_60%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#1e3a8a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
        >
          Our Work Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Explore our latest CCTV installations and security setups — from home
          surveillance to advanced commercial systems.
        </motion.p>

        {/* Info Icons */}
        <div className="flex justify-center gap-12 mb-12 text-blue-400">
          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <Camera size={36} />
            <span className="text-sm text-gray-300 mt-2">High-Quality Cameras</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <ShieldCheck size={36} />
            <span className="text-sm text-gray-300 mt-2">Secure Installations</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.15 }} className="flex flex-col items-center">
            <Video size={36} />
            <span className="text-sm text-gray-300 mt-2">HD Monitoring</span>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {Object.keys(galleryData).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === category
                  ? "bg-blue-600 border-blue-400 text-white shadow-lg"
                  : "bg-white/10 border-gray-700 text-gray-300 hover:bg-blue-500/30"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {galleryData[activeCategory].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg shadow-lg hover:shadow-blue-500/30 cursor-pointer group"
              onClick={() =>
                item.type === "video"
                  ? setVideoId(item.youtubeId)
                  : setPhotoSrc(item.src)
              }
            >
              <img
                src={item.thumbnail || item.src}
                alt="CCTV Project"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {item.type === "video" ? (
                  <PlayCircle
                    size={70}
                    className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] animate-pulse"
                  />
                ) : (
                  <ImageIcon
                    size={60}
                    className="text-cyan-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Popup */}
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
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-blue-500/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => setVideoId(null)}
                className="absolute top-4 right-5 text-white bg-red-500/70 hover:bg-red-600 rounded-full p-2 shadow-lg"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Popup */}
      <AnimatePresence>
        {photoSrc && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPhotoSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden border border-blue-500/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photoSrc}
                alt="Project"
                className="w-full h-auto object-contain max-h-[90vh]"
              />
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => setPhotoSrc(null)}
                className="absolute top-4 right-5 text-white bg-red-500/70 hover:bg-red-600 rounded-full p-2 shadow-lg"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </>
  );
};

export default GallerySection;
