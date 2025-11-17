import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const reviews = [
  {
    name: "Ravi Sharma",
    rating: 5,
    text: "AV CCTV provided excellent service! The camera installation was quick and professional. Highly recommended!",
  },
  {
    name: "Priya Singh",
    rating: 4,
    text: "Very satisfied with the quality and support. The team helped us secure our office with smart locks.",
  },
  {
    name: "Aman Patel",
    rating: 5,
    text: "The best in Indore! They offer complete surveillance solutions with great after-sales support.",
  },
  {
    name: "Neha Verma",
    rating: 5,
    text: "Superb service and amazing product quality. They handled everything very efficiently.",
  },
  {
    name: "Vikas Yadav",
    rating: 4,
    text: "Great experience overall. The team was punctual and the system works flawlessly!",
  },
];

const ClientReviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <>
      <Helmet>
        {/* <title>Client Reviews | AV CCTV Solutions</title> */}
        <meta
          name="description"
          content="Read what our clients say about AV CCTV — trusted CCTV installation and smart security services in Indore."
        />
        <meta
          name="keywords"
          content="CCTV reviews, customer feedback, AV CCTV Indore, security service testimonials"
        />
      </Helmet>

      <div className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-white min-h-screen py-24 px-6 sm:px-10 flex flex-col items-center justify-center overflow-hidden">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>

        {/* Review Section */}
        <div className="relative w-full max-w-6xl flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevReview}
            className="absolute left-4 sm:left-10 bg-blue-700/40 hover:bg-blue-600/70 p-3 rounded-full transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Animated Review Container */}
          <div className="overflow-hidden w-full sm:w-[85%]">
            <AnimatePresence initial={false} custom={index}>
              <motion.div
                key={index}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
              >
                {/* For large screens → two reviews side by side */}
                {[reviews[index], reviews[(index + 1) % reviews.length]]
                  .slice(0, window.innerWidth < 640 ? 1 : 2)
                  .map((review, i) => (
                    <div
                      key={i}
                      className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-600/20 hover:border-blue-400/40 shadow-md hover:shadow-blue-500/20 transition transform hover:-translate-y-2 duration-300"
                    >
                      <div className="flex items-center mb-4">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">"{review.text}"</p>
                      <h4 className="text-blue-300 font-semibold text-lg">
                        — {review.name}
                      </h4>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextReview}
            className="absolute right-4 sm:right-10 bg-blue-700/40 hover:bg-blue-600/70 p-3 rounded-full transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
