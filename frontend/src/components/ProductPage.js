import React from "react";
import { motion } from "framer-motion";
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
];

const ProductPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-gray-300 py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-x-hidden">
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

      {/* ===== Product Grid ===== */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:scale-[1.03] transition-all duration-300 p-4 sm:p-5 flex flex-col"
          >
            {/* Image Section */}
            <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base flex-grow text-center">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="mt-4 flex justify-center items-center">
              <span className="text-blue-400 text-lg font-bold bg-blue-500/10 px-3 py-1 rounded-full">
                {product.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
