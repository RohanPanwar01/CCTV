import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import P1 from "../image/p1.jpg";
import P2 from "../image/p2.jpeg";

const products = [
  {
    id: 1,
    name: "Hikvision Dome Camera",
    image: P1,
    description:
      "High-definition dome camera suitable for indoor monitoring. Night vision and motion detection supported.",
    price: "₹3,499",
  },
  {
    id: 2,
    name: "CP Plus Bullet Camera",
    image: P2,
    description:
      "Durable outdoor bullet camera with IR night vision and waterproof body, perfect for home or office.",
    price: "₹4,200",
  },
  {
    id: 3,
    name: "Dahua NVR 8 Channel",
    image: "https://via.placeholder.com/400x300?text=Dahua+NVR+8+Channel",
    description:
      "Smart NVR with real-time recording, AI motion alerts, and 4K support for crystal-clear monitoring.",
    price: "₹9,999",
  },
  {
    id: 4,
    name: "CCTV Cable Roll (90m)",
    image: "https://via.placeholder.com/400x300?text=CCTV+Cable+Roll",
    description:
      "High-quality 3+1 copper CCTV cable roll, ensures strong video and power connectivity.",
    price: "₹1,499",
  },
  {
    id: 5,
    name: "Hikvision Dome Camera",
    image: P1,
    description:
      "High-definition dome camera suitable for indoor monitoring. Night vision and motion detection supported.",
    price: "₹3,499",
  },
  {
    id: 6,
    name: "CP Plus Bullet Camera",
    image: P2,
    description:
      "Durable outdoor bullet camera with IR night vision and waterproof body, perfect for home or office.",
    price: "₹4,200",
  },
];

const ProductPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-gray-300 py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden relative">
      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          Our Products
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Explore our range of top-quality CCTV products and accessories
          designed to keep your premises secure.
        </p>
      </motion.div>

      {/* ===== Swiper Carousel ===== */}
      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={25}
          centeredSlides={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:scale-[1.03] transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between w-[90%] sm:w-[85%] md:w-[300px] h-[400px] mx-auto"
              >
                <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base flex-grow leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 flex justify-center items-center">
                  <span className="text-blue-400 text-lg font-bold bg-blue-500/10 px-3 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ===== Navigation Arrows ===== */}
        <div className="swiper-button-prev !text-blue-400 !top-1/2 !left-0 !transform -translate-y-1/2 after:!text-3xl hover:scale-110 transition-all duration-300"></div>
        <div className="swiper-button-next !text-blue-400 !top-1/2 !right-0 !transform -translate-y-1/2 after:!text-3xl hover:scale-110 transition-all duration-300"></div>
      </div>

      {/* ===== Custom Mobile CSS ===== */}
      <style>{`
        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            font-size: 20px !important;
            top: 60% !important;
          }
          .swiper-button-prev {
            left: 5px !important;
          }
          .swiper-button-next {
            right: 5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductPage;
