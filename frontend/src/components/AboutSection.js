import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Wrench } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a0f1a] via-[#0f1626] to-black text-gray-300 min-h-screen py-20 px-4 sm:px-6 md:px-10 overflow-x-hidden">
      {/* ===== PAGE HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-2"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold font-serif bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          About Alex CCTV Solutions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          We’re committed to making your world safer with advanced CCTV
          technology, professional installation, and reliable after-sales
          support.
        </p>
      </motion.div>

      {/* ===== WHO WE ARE SECTION ===== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center px-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80"
            alt="About CCTV"
            className="rounded-2xl shadow-lg border border-blue-600/20 hover:shadow-blue-500/20 transition-all w-full max-w-[500px] sm:max-w-[600px] object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-left md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
            Alex CCTV Solutions is a trusted name in the security and
            surveillance industry, offering professional CCTV installation,
            AI-powered monitoring, and integrated safety solutions across Bhopal
            and nearby areas.
          </p>
          <p className="text-gray-400 mb-5 leading-relaxed text-sm sm:text-base">
            With a team of certified technicians and cutting-edge technology, we
            ensure every installation meets the highest standards of quality,
            reliability, and performance.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Our mission is simple — to make homes and businesses more secure
            through innovation, trust, and customer-first service.
          </p>
        </motion.div>
      </div>

      {/* ===== CORE VALUES SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-24 text-center px-2"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-10">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
              title: "Trust & Security",
              desc: "We prioritize your safety through reliable and transparent services.",
            },
            {
              icon: <Users className="w-10 h-10 text-green-400" />,
              title: "Customer Focus",
              desc: "Every project is personalized to match your unique security needs.",
            },
            {
              icon: <Award className="w-10 h-10 text-yellow-400" />,
              title: "Excellence",
              desc: "We deliver top-quality CCTV installations backed by years of expertise.",
            },
            {
              icon: <Wrench className="w-10 h-10 text-purple-400" />,
              title: "Ongoing Support",
              desc: "From installation to maintenance, we stand by you every step of the way.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 bg-gradient-to-br from-blue-900/20 to-black/40 border border-blue-500/20 rounded-2xl shadow-md hover:shadow-blue-500/20 transition text-center"
            >
              <div className="flex flex-col items-center space-y-3">
                {value.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== CALL TO ACTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-24 text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">
          Your Safety is Our Priority
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Join hundreds of satisfied customers who trust Alex CCTV Solutions for
          professional installation, maintenance, and 24/7 monitoring.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-500 transition"
        >
          Contact Us Today
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutPage;
